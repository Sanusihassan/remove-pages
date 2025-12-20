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
  validateFiles,
} from "../../src/utils";

type FileProps = {
  errors: _;
  extension: string;
  toolTipSizes: string[];
  setToolTipSizes: Dispatch<SetStateAction<string[]>>;
  loader_text: string;
  fileDetailProps: [string, string, string];
  drop_files: string;
  path: string;
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
}: FileProps) => {
  const { files, setFiles } = useFileStore();
  const dispatch = useDispatch();
  const subscriptionStatus = useSelector(
    (state: { tool: ToolState }) => state.tool.subscriptionStatus
  );

  useEffect(() => {
    let limitationMsg = "";
    (async () => {
      const isSubscribed =
        subscriptionStatus === null
          ? await fetchSubscriptionStatus()
          : subscriptionStatus;
      if (isSubscribed) {
        return;
      }
      // Check limitations
      if (files.length === 1 && files[0].size >= 100 * 1024 * 1024) {
        limitationMsg = errors.alerts.singleFileSize;
      }
      if (files.length >= 15) {
        limitationMsg = errors.alerts.maxFiles;
      } else if (files.some((file) => file.size > 50 * 1024 * 1024)) {
        limitationMsg = errors.alerts.fileSize;
      }
      const pagesPerFile = await Promise.all(
        files.map((file) => calculatePages(file))
      );

      if (pagesPerFile.some((pages) => pages >= 50)) {
        limitationMsg = errors.MAX_PAGES_EXCEEDED.message;
      }
      // Dispatch the message
      dispatch(setField({ limitationMsg }));
    })();
  }, [files]);

  const onDrop = (acceptedFiles: File[]) => {
    const { isValid } = validateFiles(
      acceptedFiles,
      dispatch,
      errors,
      "application/pdf"
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
    accept:
      extension && MIME_TYPE_MAP[extension]
        ? { [MIME_TYPE_MAP[extension]]: [extension] }
        : undefined,
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
