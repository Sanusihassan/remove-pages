// RemovePagesFileCard.tsx
import { useState, useEffect, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Trash2, FileText, X } from "lucide-react";
import * as pdfjs from "pdfjs-dist";
import type { PDFDocumentProxy, PageViewport, RenderTask } from "pdfjs-dist";
import { useFileStore } from "../../src/file-store";
import { setField, selectToolState } from "../../src/store";
import type { errors as _ } from "../../src/content";

// ============ TYPES ============
export interface RemovePagesFileCardProps {
  file: File;
  errors: _;
  content: {
    page: string;
    pages: string;
    remove_file: string;
    loading: string;
    pages_to_remove: string;
    remaining: string;
    warning_cannot_remove_all: string;
  };
  themeColor?: string;
}

interface PageImage {
  pageNum: number;
  imageUrl: string;
}

// ============ CONSTANTS ============
const THEME_COLOR_DEFAULT = "#d63031"; // Red theme

// ============ SKELETON LOADER ============
const PageSkeleton = () => {
  return <div className="aspect-3/4 bg-gray-200 rounded animate-pulse" />;
};

// ============ HELPER FUNCTIONS ============
async function renderPDFPage(
  file: File,
  pageNum: number,
  dispatch: ReturnType<typeof useDispatch>,
  errors: _,
  password?: string,
): Promise<string> {
  const fileUrl = URL.createObjectURL(file);

  try {
    const loadingTask = pdfjs.getDocument({
      url: fileUrl,
      password: password || undefined,
    });

    const pdf: PDFDocumentProxy = await loadingTask.promise;
    const page = await pdf.getPage(pageNum);
    const scale = 1.5;
    const viewport: PageViewport = page.getViewport({ scale });

    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    if (!context) {
      throw new Error("Canvas context not available.");
    }

    canvas.height = viewport.height;
    canvas.width = viewport.width;

    const renderTask: RenderTask = page.render({
      canvasContext: context,
      viewport: viewport,
    });

    await renderTask.promise;
    const imageUrl = canvas.toDataURL();

    URL.revokeObjectURL(fileUrl);
    return imageUrl;
  } catch (error: any) {
    URL.revokeObjectURL(fileUrl);

    if (error?.name === "PasswordException") {
      dispatch(setField({ errorCode: "PASSWORD_REQUIRED" }));
      return "";
    }

    dispatch(
      setField({
        errorMessage: errors.FILE_CORRUPT?.message || "File is corrupt",
      }),
    );
    return "";
  }
}

async function getPDFPageCount(
  file: File,
  dispatch: ReturnType<typeof useDispatch>,
  errors: _,
  password?: string,
): Promise<number> {
  const fileUrl = URL.createObjectURL(file);

  try {
    const loadingTask = pdfjs.getDocument({
      url: fileUrl,
      password: password || undefined,
    });

    const pdf: PDFDocumentProxy = await loadingTask.promise;
    const pageCount = pdf.numPages;

    URL.revokeObjectURL(fileUrl);
    return pageCount;
  } catch (error: any) {
    URL.revokeObjectURL(fileUrl);

    if (error?.name === "PasswordException") {
      dispatch(setField({ errorCode: "PASSWORD_REQUIRED" }));
      return 0;
    }

    dispatch(
      setField({
        errorMessage: errors.FILE_CORRUPT?.message || "File is corrupt",
      }),
    );
    return 0;
  }
}

// Parse selected pages string like "1-3,5,7-10" into array of numbers
function parseSelectedPages(selectedPages: string, maxPages: number): number[] {
  if (!selectedPages) return [];

  const pages = new Set<number>();
  const parts = selectedPages
    .split(",")
    .map((p) => p.trim())
    .filter((p) => p);

  for (const part of parts) {
    if (part.includes("-")) {
      const [start, end] = part.split("-").map((n) => parseInt(n.trim(), 10));
      if (!isNaN(start) && !isNaN(end) && start <= end) {
        for (let i = Math.max(1, start); i <= Math.min(maxPages, end); i++) {
          pages.add(i);
        }
      }
    } else {
      const page = parseInt(part, 10);
      if (!isNaN(page) && page >= 1 && page <= maxPages) {
        pages.add(page);
      }
    }
  }

  return Array.from(pages).sort((a, b) => a - b);
}

// Convert array of page numbers back to compact string format
function formatSelectedPages(pages: number[]): string {
  if (pages.length === 0) return "";

  const sorted = [...pages].sort((a, b) => a - b);
  const ranges: string[] = [];
  let start = sorted[0];
  let end = sorted[0];

  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i] === end + 1) {
      end = sorted[i];
    } else {
      ranges.push(start === end ? `${start}` : `${start}-${end}`);
      start = sorted[i];
      end = sorted[i];
    }
  }

  ranges.push(start === end ? `${start}` : `${start}-${end}`);
  return ranges.join(",");
}

// ============ PAGE COMPONENT ============
interface PageItemProps {
  pageNum: number;
  imageUrl: string;
  isMarkedForRemoval: boolean;
  onToggleRemove: (pageNum: number) => void;
  themeColor: string;
}

const PageItem = ({
  pageNum,
  imageUrl,
  isMarkedForRemoval,
  onToggleRemove,
  themeColor,
}: PageItemProps) => {
  return (
    <div
      className={`relative aspect-3/4 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
        isMarkedForRemoval ? "opacity-50" : ""
      }`}
      style={{
        borderColor: isMarkedForRemoval ? themeColor : "#e5e7eb",
      }}
      onClick={() => onToggleRemove(pageNum)}
    >
      {/* Page Image */}
      <img
        src={imageUrl}
        alt={`Page ${pageNum}`}
        className="w-full h-full object-contain bg-white"
        draggable={false}
      />

      {/* Red X Overlay (When Marked for Removal) */}
      {isMarkedForRemoval && (
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center"
            style={{ backgroundColor: themeColor }}
          >
            <X size={40} className="text-white" strokeWidth={3} />
          </div>
        </div>
      )}

      {/* Page Number Badge */}
      <div
        className={`absolute bottom-2 left-2 px-2 py-1 text-white text-xs rounded ${
          isMarkedForRemoval ? "line-through" : ""
        }`}
        style={{
          backgroundColor: isMarkedForRemoval ? themeColor : "rgba(0,0,0,0.6)",
        }}
      >
        {pageNum}
      </div>
    </div>
  );
};

// ============ MAIN COMPONENT ============
export const RemovePagesFileCard = ({
  file,
  errors,
  content,
  themeColor = THEME_COLOR_DEFAULT,
}: RemovePagesFileCardProps) => {
  const dispatch = useDispatch();
  const { files, setFiles } = useFileStore();
  const [isLoading, setIsLoading] = useState(true);
  const [pageCount, setPageCount] = useState(0);
  const [pageImages, setPageImages] = useState<PageImage[]>([]);
  const isSubscribedRef = useRef(true);

  // Get selectedPages from Redux
  const { selectedPages } = useSelector(selectToolState);

  // Get pages marked for removal
  const pagesToRemove = parseSelectedPages(selectedPages, pageCount);

  // Load PDF page count and render pages
  useEffect(() => {
    isSubscribedRef.current = true;

    const loadPDF = async () => {
      setIsLoading(true);

      // Get page count
      const count = await getPDFPageCount(file, dispatch, errors);

      if (isSubscribedRef.current && count > 0) {
        setPageCount(count);
        dispatch(setField({ pageCount: count, selectedFile: file.name }));

        // Render pages
        const images: PageImage[] = [];
        for (let i = 1; i <= count; i++) {
          const imageUrl = await renderPDFPage(file, i, dispatch, errors);
          if (isSubscribedRef.current && imageUrl) {
            images.push({ pageNum: i, imageUrl });
            setPageImages([...images]); // Update progressively
          }
        }

        setIsLoading(false);
      }
    };

    loadPDF();

    return () => {
      isSubscribedRef.current = false;
    };
  }, [file, dispatch, errors]);

  // Handle page removal toggle
  const handleToggleRemove = useCallback(
    (pageNum: number) => {
      const currentRemoved = parseSelectedPages(selectedPages, pageCount);
      const newRemoved = currentRemoved.includes(pageNum)
        ? currentRemoved.filter((p) => p !== pageNum)
        : [...currentRemoved, pageNum];

      const newSelectedString = formatSelectedPages(newRemoved);
      dispatch(setField({ selectedPages: newSelectedString }));
    },
    [selectedPages, pageCount, dispatch],
  );

  // Remove file
  const handleRemoveFile = () => {
    const newFiles = files.filter((f) => f.name !== file.name);
    setFiles(newFiles);
    dispatch(setField({ pageCount: 0, selectedFile: "", selectedPages: "" }));
  };

  // Calculate remaining pages
  const remainingPages = pageCount - pagesToRemove.length;

  // Loading state
  if (isLoading || pageImages.length === 0) {
    return (
      <div className="w-full max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3 flex-1">
            <FileText size={24} style={{ color: themeColor }} />
            <h3 className="text-lg font-semibold text-gray-800 truncate">
              {file.name}
            </h3>
            <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-400 animate-pulse">
              {content.loading}
            </span>
          </div>
          <button
            type="button"
            onClick={handleRemoveFile}
            className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
          >
            <Trash2 size={20} />
          </button>
        </div>

        {/* Skeleton Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({ length: Math.min(pageCount || 8, 8) }).map((_, i) => (
            <PageSkeleton key={i} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3 flex-1">
            <FileText size={24} style={{ color: themeColor }} />
            <h3 className="text-lg font-semibold text-gray-800 truncate">
              {file.name.length > 40
                ? file.name.slice(0, 20) + "..." + file.name.slice(-17)
                : file.name}
            </h3>
            <span
              className="px-2 py-1 text-xs font-medium rounded-full whitespace-nowrap"
              style={{
                backgroundColor: `${themeColor}15`,
                color: themeColor,
              }}
            >
              {pageCount} {pageCount === 1 ? content.page : content.pages}
            </span>
          </div>

          {/* Remove File Button */}
          <button
            type="button"
            onClick={handleRemoveFile}
            className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
            title={content.remove_file}
          >
            <Trash2 size={20} />
          </button>
        </div>

        {/* Pages to Remove Info */}
        {pagesToRemove.length > 0 && (
          <div
            className="mb-4 p-3 rounded-lg border"
            style={{
              backgroundColor: `${themeColor}10`,
              borderColor: `${themeColor}40`,
            }}
          >
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium" style={{ color: themeColor }}>
                {content.pages_to_remove} {pagesToRemove.length}
              </span>
              <span className="text-gray-600">
                {content.remaining} <strong>{remainingPages}</strong>{" "}
                {remainingPages === 1 ? content.page : content.pages}
              </span>
            </div>
          </div>
        )}

        {/* Pages Grid - Responsive: 4 cols on lg, 3 on md, 2 on mobile */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {pageImages.map((pageImage) => (
            <PageItem
              key={pageImage.pageNum}
              pageNum={pageImage.pageNum}
              imageUrl={pageImage.imageUrl}
              isMarkedForRemoval={pagesToRemove.includes(pageImage.pageNum)}
              onToggleRemove={handleToggleRemove}
              themeColor={themeColor}
            />
          ))}
        </div>

        {/* Warning if trying to remove all pages */}
        {pagesToRemove.length === pageCount && pageCount > 0 && (
          <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="text-sm text-amber-700 mb-0">
              {content.warning_cannot_remove_all}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RemovePagesFileCard;
