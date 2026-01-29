import { type Dispatch, type SetStateAction, useEffect } from "react";
import type { errors as _, edit_page } from "../../src/content";
import FileCard from "./FileCard";
import { useDropzone } from "react-dropzone";
import { useFileStore } from "../../src/file-store";
import { useDispatch, useSelector } from "react-redux";
import { fetchSubscriptionStatus } from "fetch-subscription-status";
import { setField, type ToolState } from "../../src/store";
import * as pdfjsLib from "pdfjs-dist";
import {
  ACCEPTED,
  calculatePages,
  filterNewFiles,
  getAllMimeTypes,
  PATH_ACCEPTED_FILES,
  validateFiles,
} from "../../src/utils";
import type { Paths } from "../../src/content/content";
import { toast } from "react-toastify";

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
    (state: { tool: ToolState }) => state.tool.subscriptionStatus,
  );
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      let limitationMsg = "";
      (async () => {
        const isSubscribed =
          subscriptionStatus === null
            ? await fetchSubscriptionStatus()
            : subscriptionStatus;
        if (isSubscribed) {
          return;
        }

        // Check size limitations first (cheap checks)
        if (files.length === 1 && files[0].size >= 100 * 1024 * 1024) {
          limitationMsg = errors.alerts.singleFileSize;
          dispatch(setField({ limitationMsg }));
          return;
        }
        if (files.length >= 15) {
          limitationMsg = errors.alerts.maxFiles;
          dispatch(setField({ limitationMsg }));
          return;
        }
        if (files.some((file) => file.size > 50 * 1024 * 1024)) {
          limitationMsg = errors.alerts.fileSize;
          dispatch(setField({ limitationMsg }));
          return;
        }

        // Check pages one by one - EXIT EARLY if any exceeds limit
        for (const file of files) {
          try {
            const pageCount = await calculatePages(file);
            if (pageCount >= 50) {
              limitationMsg = errors.MAX_PAGES_EXCEEDED.message;
              dispatch(setField({ limitationMsg }));
              return; // Exit immediately when limit exceeded
            }
          } catch (error) {
            console.error("Error calculating pages:", error);
            // Continue checking other files if one fails
          }
        }

        // All checks passed
        dispatch(setField({ limitationMsg: "" }));
      })();
    }, 500);

    // Check if any file is not password protected
    if (path === "unlock-pdf") {
      (async () => {
        let hasUnprotectedFile = false;

        for (const file of files) {
          try {
            const arrayBuffer = await file.arrayBuffer();
            const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });

            try {
              await loadingTask.promise;
              // If we reach here, the PDF is NOT password protected
              hasUnprotectedFile = true;
              break; // Exit the loop immediately
            } catch (error: any) {
              // Check if it's a password error
              if (error.name === "PasswordException") {
                // This is expected - the file IS password protected
                continue;
              }
              // Other errors - log and continue
              console.error("Error checking PDF:", error);
            }
          } catch (error) {
            console.error("Error reading file:", error);
          }
        }
        // Set state once after checking all files
        if (files.length) {
          dispatch(
            setField({
              filesNotPasswordProtected: hasUnprotectedFile,
            }),
          );
          if (hasUnprotectedFile) {
            toast.error(errors.alerts.notPasswordProtected);
          }
        }
      })();
    }

    return () => clearTimeout(timeoutId);
  }, [files, subscriptionStatus, path]);

  const onDrop = (acceptedFiles: File[]) => {
    // Usage in onDrop:
    const { isValid } = validateFiles(
      acceptedFiles,
      dispatch,
      errors,
      getAllMimeTypes(path),
    );

    const newFiles = filterNewFiles(acceptedFiles, files, ACCEPTED);
    if (isValid) {
      setFiles([...files, ...newFiles]);
    }
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
            path={path}
          />
        </div>
      ))}
    </div>
  );
};

export default Files;
