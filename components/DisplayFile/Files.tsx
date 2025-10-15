import { type Dispatch, type SetStateAction, useEffect } from "react";
import type { errors as _ } from "../../src/content";
import FileCard from "./FileCard";
import { useDropzone } from "react-dropzone";
import { useFileStore } from "../../src/file-store";
import { useDispatch } from "react-redux";
import { fetchSubscriptionStatus } from "fetch-subscription-status";
import { setField } from "../../src/store";
import { ACCEPTED, filterNewFiles } from "../../src/utils";

type FileProps = {
  errors: _;
  extension: string;
  toolTipSizes: string[];
  setToolTipSizes: Dispatch<SetStateAction<string[]>>;
  loader_text: string;
  fileDetailProps: [string, string, string];
  drop_files: string;
};

const Files = ({
  errors,
  extension,
  loader_text,
  fileDetailProps,
  drop_files,
}: FileProps) => {
  const { files, setFiles } = useFileStore();
  const dispatch = useDispatch();

  useEffect(() => {
    let limitationMsg = "";
    (async () => {
      const isSubscribed = await fetchSubscriptionStatus();
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
      // Dispatch the message
      dispatch(setField({ limitationMsg }));
    })();
  }, [files]);

  const onDrop = (acceptedFiles: File[]) => {
    const newFiles = filterNewFiles(acceptedFiles, files, ACCEPTED);
    setFiles([...files, ...newFiles]);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: extension ? { [extension]: [] } : undefined,
    noClick: files.length > 0, // Disable click when files are present
    noKeyboard: files.length > 0,
  });

  return (
    <div
      {...getRootProps()}
      className={`display-file ${isDragActive ? "dragging-over" : ""}`}
      style={{ position: "relative" }}
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
          />
        </div>
      ))}
    </div>
  );
};

export default Files;
