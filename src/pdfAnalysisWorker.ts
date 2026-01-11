import * as pdfjs from 'pdfjs-dist';

// Configure PDF.js worker inside the worker
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url
).toString();

interface AnalysisMessage {
    type: 'analyze';
    fileData: ArrayBuffer;
    password?: string;
}

interface ProgressMessage {
    type: 'progress';
    current: number;
    total: number;
}

interface SuccessMessage {
    type: 'success';
    result: {
        scanned: boolean;
        confidence: number;
        metrics: any;
    };
}

interface ErrorMessage {
    type: 'error';
    error: string;
}

self.onmessage = async (e: MessageEvent<AnalysisMessage>) => {
    const { type, fileData, password } = e.data;

    if (type !== 'analyze') return;

    try {
        const loadingTask = pdfjs.getDocument({
            data: fileData,
            password: password || undefined
        });

        loadingTask.onPassword = (updatePassword, reason) => {
            if (password && reason === pdfjs.PasswordResponses.NEED_PASSWORD) {
                updatePassword(password);
            } else {
                throw new Error(
                    reason === pdfjs.PasswordResponses.INCORRECT_PASSWORD
                        ? 'INCORRECT_PASSWORD'
                        : 'PASSWORD_REQUIRED'
                );
            }
        };

        const pdf = await loadingTask.promise;
        const totalPages = pdf.numPages;

        // IMPROVED SAMPLING: More pages for better accuracy
        const MAX_PAGES_TO_ANALYZE = 20;
        let pagesToAnalyze: number[];

        if (totalPages <= MAX_PAGES_TO_ANALYZE) {
            // Analyze all pages for small PDFs
            pagesToAnalyze = Array.from({ length: totalPages }, (_, i) => i + 1);
        } else {
            // Smart sampling for large PDFs - spread evenly across document
            pagesToAnalyze = [
                1, 2, 3, 4, 5, // First 5 pages (most representative)
                Math.floor(totalPages * 0.15),
                Math.floor(totalPages * 0.25),
                Math.floor(totalPages * 0.35),
                Math.floor(totalPages * 0.45),
                Math.floor(totalPages * 0.5),
                Math.floor(totalPages * 0.55),
                Math.floor(totalPages * 0.65),
                Math.floor(totalPages * 0.75),
                Math.floor(totalPages * 0.85),
                totalPages - 4,
                totalPages - 3,
                totalPages - 2,
                totalPages - 1,
                totalPages // Last 5 pages
            ].filter((page, index, self) =>
                page > 0 && page <= totalPages && self.indexOf(page) === index
            );
        }

        let totalTextContent = '';
        let totalImageCount = 0;
        let totalPageArea = 0;
        let totalImageArea = 0;
        let pagesWithImages = 0;
        let pagesWithMinimalText = 0;
        let pagesWithLargeImages = 0; // NEW: Track pages with large images

        // Process pages and report progress
        for (let i = 0; i < pagesToAnalyze.length; i++) {
            const pageNum = pagesToAnalyze[i];

            // Send progress update
            self.postMessage({
                type: 'progress',
                current: i + 1,
                total: pagesToAnalyze.length
            } as ProgressMessage);

            const page = await pdf.getPage(pageNum);
            const viewport = page.getViewport({ scale: 1.0 });
            const pageArea = viewport.width * viewport.height;
            totalPageArea += pageArea;

            // Extract text content
            const textContent = await page.getTextContent();
            const pageText = textContent.items
                .map(item => ('str' in item ? item.str : ''))
                .join(' ');
            totalTextContent += pageText + ' ';

            const wordsOnPage = pageText.trim().split(/\s+/).filter(w => w.length > 0).length;
            if (wordsOnPage < 50) {
                pagesWithMinimalText++;
            }

            // Analyze images
            const ops = await page.getOperatorList();
            let pageImageCount = 0;
            let pageImageArea = 0;
            let hasLargeImage = false;

            for (let i = 0; i < ops.fnArray.length; i++) {
                if (
                    ops.fnArray[i] === pdfjs.OPS.paintImageXObject ||
                    ops.fnArray[i] === pdfjs.OPS.paintInlineImageXObject ||
                    ops.fnArray[i] === pdfjs.OPS.paintXObject
                ) {
                    pageImageCount++;

                    for (let j = i - 1; j >= Math.max(0, i - 5); j--) {
                        if (ops.fnArray[j] === pdfjs.OPS.transform) {
                            const transform = ops.argsArray[j];
                            if (transform && transform.length >= 6) {
                                const width = Math.abs(transform[0]);
                                const height = Math.abs(transform[3]);
                                const imageArea = width * height;
                                pageImageArea += imageArea;

                                // Check if this is a large image (covers >40% of page)
                                if (imageArea > pageArea * 0.4) {
                                    hasLargeImage = true;
                                }
                                break;
                            }
                        }
                    }
                }
            }

            totalImageCount += pageImageCount;
            if (pageImageCount > 0) {
                pagesWithImages++;
            }
            if (hasLargeImage) {
                pagesWithLargeImages++;
            }
            totalImageArea += pageImageArea;
        }

        // Analysis metrics
        const sampledPageCount = pagesToAnalyze.length;
        const totalWords = totalTextContent.trim().split(/\s+/).filter(w => w.length > 0).length;
        const avgWordsPerPage = totalWords / sampledPageCount;
        const imageRatio = totalPageArea > 0 ? totalImageArea / totalPageArea : 0;
        const pagesWithImagesRatio = pagesWithImages / sampledPageCount;
        const minimalTextRatio = pagesWithMinimalText / sampledPageCount;
        const largeImageRatio = pagesWithLargeImages / sampledPageCount;

        // IMPROVED CONFIDENCE SCORING
        let confidence = 0;

        // Early exit for clearly digital documents
        if (avgWordsPerPage > 150) {
            confidence = 0;
            self.postMessage({
                type: 'success',
                result: {
                    scanned: false,
                    confidence: 0,
                    metrics: {
                        totalPages,
                        sampledPages: sampledPageCount,
                        totalWords,
                        avgWordsPerPage,
                        totalImageCount,
                        pagesWithImages,
                        pagesWithLargeImages,
                        imageRatio,
                        minimalTextRatio,
                        largeImageRatio
                    }
                }
            } as SuccessMessage);
            return;
        }

        // STRONG SCANNED INDICATORS

        // 1. Large images on most pages with minimal text (VERY strong indicator)
        if (largeImageRatio > 0.7 && avgWordsPerPage < 100) {
            confidence += 0.6; // Increased from 0.5
        }

        // 2. Very little text with lots of images
        if (avgWordsPerPage < 30 && pagesWithImagesRatio > 0.7) {
            confidence += 0.5;
        }

        // 3. Images cover most of page area (typical for scans)
        if (imageRatio > 0.6) {
            confidence += 0.4;
        } else if (imageRatio > 0.4) {
            confidence += 0.3;
        } else if (imageRatio > 0.25) {
            confidence += 0.2;
        }

        // 4. Most pages have minimal text
        if (minimalTextRatio > 0.7) {
            confidence += 0.3;
        } else if (minimalTextRatio > 0.5) {
            confidence += 0.2;
        }

        // 5. Very little text overall
        if (avgWordsPerPage < 20) {
            confidence += 0.4;
        } else if (avgWordsPerPage < 50) {
            confidence += 0.2;
        }

        // 6. Almost all pages have images
        if (pagesWithImagesRatio > 0.8) {
            confidence += 0.3;
        } else if (pagesWithImagesRatio > 0.6) {
            confidence += 0.2;
        }

        // 7. One image per page pattern (classic scan)
        const avgImagesPerPage = totalImageCount / sampledPageCount;
        if (avgImagesPerPage >= 0.8 && avgImagesPerPage <= 1.5 && avgWordsPerPage < 100) {
            confidence += 0.3;
        }

        // 8. OCR artifacts (only relevant with minimal text)
        if (avgWordsPerPage < 100) {
            const specialCharRatio = (totalTextContent.match(/[^\w\s.,!?;:()\-'"/]/g) || []).length / Math.max(1, totalTextContent.length);
            if (specialCharRatio > 0.15 && totalImageCount > 0) {
                confidence += 0.2;
            }
        }

        // Normalize confidence
        confidence = Math.min(1, confidence);

        // LOWERED threshold from 0.7 to 0.5 for better detection
        const isScanned = confidence > 0.5;

        self.postMessage({
            type: 'success',
            result: {
                scanned: isScanned,
                confidence,
                metrics: {
                    totalPages,
                    sampledPages: sampledPageCount,
                    totalWords,
                    avgWordsPerPage,
                    totalImageCount,
                    pagesWithImages,
                    pagesWithLargeImages,
                    imageRatio,
                    minimalTextRatio,
                    largeImageRatio,
                    avgImagesPerPage
                }
            }
        } as SuccessMessage);

    } catch (error: any) {
        self.postMessage({
            type: 'error',
            error: error.message || 'Unknown error'
        } as ErrorMessage);
    }
};