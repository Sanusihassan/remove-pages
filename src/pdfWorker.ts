import * as pdfjs from 'pdfjs-dist';

// Configure worker inside the worker
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url
).toString();

self.onmessage = async (e: MessageEvent) => {
    const { type, data } = e.data;

    try {
        if (type === 'calculatePages') {
            const { fileData } = data;
            const pdf = await pdfjs.getDocument({ data: fileData }).promise;
            self.postMessage({ type: 'success', pageCount: pdf.numPages });
        }
    } catch (error) {
        self.postMessage({ type: 'error', error: error.message });
    }
};