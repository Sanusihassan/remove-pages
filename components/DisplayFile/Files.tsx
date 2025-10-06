import { type Dispatch, type SetStateAction, useEffect, useRef } from "react";
import type { errors as _ } from "../../src/content";
import FileCard from "./FileCard";
import {
  DragDropContext,
  Droppable,
  Draggable,
  type DropResult,
} from "react-beautiful-dnd";
import { calculatePages, isDraggableExtension, sanitizeKey } from "../../src/utils";
import { useFileStore } from "../../src/file-store";
import { useDispatch } from "react-redux";
import { setField } from "../../src/store";
import { fetchSubscriptionStatus } from 'fetch-subscription-status';

type FileProps = {
  errors: _;
  extension: string;
  toolTipSizes: string[];
  setToolTipSizes: Dispatch<SetStateAction<string[]>>;
  loader_text: string;
  fileDetailProps: [string, string, string];
};
const Files = ({
  errors,
  extension,
  loader_text,
  fileDetailProps,
}: FileProps) => {
  const { files, setFiles } = useFileStore();
  const dispatch = useDispatch();
  let pageCounts = [];

  useEffect(() => {
    let limitationMsg = "";
    // Assuming calculatePages is an async function
    (async () => {
      const isSubscribed = await fetchSubscriptionStatus();
      if (isSubscribed) {
        return;
      }
      pageCounts = await Promise.all(files.map(calculatePages));
      const totalPages = pageCounts.reduce((sum, count) => sum + count, 0);
      // Check limitations
      if (files.length >= 50) {
        limitationMsg = errors.alerts.maxFiles;
      } else if (totalPages > 1500) {
        limitationMsg = errors.alerts.totalPages;
      } else if (pageCounts.some(pageCount => pageCount > 500)) {
        limitationMsg = errors.alerts.perFilePages;
      } else if (files.some(file => file.size > 50 * 1024 * 1024)) {
        limitationMsg = errors.alerts.fileSize;
      }
      // Dispatch the message
      dispatch(setField({ limitationMsg }));
    })();

  }, [files]);
  const reorderFiles = (
    files: File[],
    startIndex: number,
    endIndex: number
  ): File[] => {
    const result = Array.from(files);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }

    const updatedFiles = reorderFiles(
      files,
      result.source.index,
      result.destination.index
    );
    setFiles(updatedFiles);
  };
  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="imageUrls" direction="horizontal">
          {(provided, snapshot) => (
            <div
              className={`display-file ${snapshot.isDraggingOver ? "dragging-over" : ""
                }`}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {files.map((file, index) => (
                <Draggable
                  key={file.name}
                  draggableId={file.name}
                  index={index}
                  isDragDisabled={!isDraggableExtension(extension, "merge-pdf")}
                >
                  {(provided, snapshot) => (
                    <div
                      {...provided.draggableProps}
                      ref={provided.innerRef}
                      className={`drag-element ${snapshot.isDragging ? "dragging" : ""
                        }`}
                      style={{
                        ...provided.draggableProps.style,
                      }}
                    >
                      <FileCard
                        extension={extension}
                        file={file}
                        index={index}
                        isDraggable={isDraggableExtension(extension, "merge-pdf")}
                        provided={provided}
                        snapshot={snapshot}
                        errors={errors}
                        loader_text={loader_text}
                        fileDetailProps={fileDetailProps}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};

export default Files;
