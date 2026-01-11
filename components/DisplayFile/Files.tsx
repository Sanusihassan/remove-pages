// type Paths = "pdf-to-powerpoint" | "word-to-pdf" | "powerpoint-to-pdf" | "excel-to-pdf" | "html-to-pdf" | "pdf-to-word" | "pdf-to-excel" | "pdf-to-pdf-a" | "pdf-to-text"
// each path should allow it's allowed files not all files should allow all types right?
// for example pdf-to-* paths should only accept PDF files. and so on.
// please just give me the part to update.
import { type Dispatch, type SetStateAction, useEffect } from "react";
import type { errors as _, edit_page } from "../../src/content";
import FileCard from "./FileCard";
import { useDropzone } from "react-dropzone";
import { useFileStore } from "../../src/file-store";
import { useDispatch, useSelector } from "react-redux";
import { fetchSubscriptionStatus } from "fetch-subscription-status";
import { setField, type ToolState } from "../../src/store";
import {
  ACCEPTED,
  calculatePages,
  filterNewFiles,
  getAllMimeTypes,
  PATH_ACCEPTED_FILES,
  validateFiles,
} from "../../src/utils";
import type { Paths } from "../../src/content/content";

type FileProps = {
  errors: _;
  extension: string;
  toolTipSizes: string[];
  setToolTipSizes: Dispatch<SetStateAction<string[]>>;
  loader_text: string;
  fileDetailProps: [string, string, string];
  drop_files: string;
  path: Paths;
  languageSelectProps: {
    content: edit_page["languageSelectContent"];
    themeColor: string;
  };
};

const Files = ({
  errors,
  extension,
  loader_text,
  fileDetailProps,
  drop_files,
  languageSelectProps,
  path,
}: FileProps) => {
  const { files, setFiles } = useFileStore();
  const dispatch = useDispatch();
  const subscriptionStatus = useSelector(
    (state: { tool: ToolState }) => state.tool.subscriptionStatus
  );
  // useEffect(() => {
  //   const timeoutId = setTimeout(() => {
  //     let limitationMsg = "";
  //     (async () => {
  //       const isSubscribed =
  //         subscriptionStatus === null
  //           ? await fetchSubscriptionStatus()
  //           : subscriptionStatus;
  //       if (isSubscribed) {
  //         return;
  //       }

  //       // Check size limitations first (cheap checks)
  //       if (files.length === 1 && files[0].size >= 100 * 1024 * 1024) {
  //         limitationMsg = errors.alerts.singleFileSize;
  //         dispatch(setField({ limitationMsg }));
  //         return;
  //       }
  //       if (files.length >= 15) {
  //         limitationMsg = errors.alerts.maxFiles;
  //         dispatch(setField({ limitationMsg }));
  //         return;
  //       }
  //       if (files.some((file) => file.size > 50 * 1024 * 1024)) {
  //         limitationMsg = errors.alerts.fileSize;
  //         dispatch(setField({ limitationMsg }));
  //         return;
  //       }

  //       // Check pages one by one - EXIT EARLY if any exceeds limit
  //       for (const file of files) {
  //         try {
  //           const pageCount = await calculatePages(file);
  //           if (pageCount >= 50) {
  //             limitationMsg = errors.MAX_PAGES_EXCEEDED.message;
  //             dispatch(setField({ limitationMsg }));
  //             return; // Exit immediately when limit exceeded
  //           }
  //         } catch (error) {
  //           console.error("Error calculating pages:", error);
  //           // Continue checking other files if one fails
  //         }
  //       }

  //       // All checks passed
  //       dispatch(setField({ limitationMsg: "" }));
  //     })();
  //   }, 500);

  //   return () => clearTimeout(timeoutId);
  // }, [files, subscriptionStatus]);

  const onDrop = (acceptedFiles: File[]) => {
    // Usage in onDrop:
    const { isValid } = validateFiles(
      acceptedFiles,
      dispatch,
      errors,
      getAllMimeTypes(path)
    );

    const newFiles = filterNewFiles(acceptedFiles, files, ACCEPTED);
    if (isValid) {
      setFiles([...files, ...newFiles]);
    }
  };
  const MIME_TYPE_MAP: Record<string, string> = {
    ".pdf": "application/pdf",
    ".docx":
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ".doc": "application/msword",
    ".xlsx":
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    ".xls": "application/vnd.ms-excel",
    ".pptx":
      "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    ".ppt": "application/vnd.ms-powerpoint",
    ".html": "text/html",
    ".htm": "text/html",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".png": "image/png",
    ".txt": "text/plain",
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: PATH_ACCEPTED_FILES[path],
    noClick: files.length > 0,
    noKeyboard: files.length > 0,
  });

  return (
    <div
      {...getRootProps()}
      className={`display-file position-relative ${isDragActive ? "dragging-over" : ""}`}
    >
      <input {...getInputProps()} />

      {isDragActive && <div className="overlay display-4">{drop_files}</div>}

      {files.map((file, index) => (
        <div key={file.name} className="drag-element">
          <FileCard
            extension={extension}
            file={file}
            index={index}
            isDraggable={false}
            provided={null}
            snapshot={null}
            errors={errors}
            loader_text={loader_text}
            fileDetailProps={fileDetailProps}
            languageSelectProps={languageSelectProps}
          />
        </div>
      ))}
    </div>
  );
};

export default Files;
