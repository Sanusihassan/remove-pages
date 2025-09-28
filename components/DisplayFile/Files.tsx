import { type Dispatch, type SetStateAction, useEffect } from "react";
import type { errors as _ } from "../../src/content";
import ImageCard from "./ImageCard";
import FileCard from "./FileCard";
import {
  DragDropContext,
  Droppable,
  Draggable,
  type DropResult,
} from "react-beautiful-dnd";
import { isDraggableExtension } from "../../src/utils";
import { useFileStore } from "../../src/file-store";

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
  useEffect(() => {

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
                      {extension === ".jpg" ? (
                        (() => {
                          return (
                            <ImageCard
                              index={index}
                              provided={provided}
                              extension={extension}
                              errors={errors}
                              fileDetailProps={fileDetailProps}
                              file={file}
                              loader_text={loader_text}
                            />
                          );
                        })()
                      ) : (
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
                      )}
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
