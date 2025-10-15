import type {
  DraggableProvided,
  DraggableStateSnapshot,
} from "react-beautiful-dnd";
import { ActionDiv, type ActionProps } from "./ActionDiv";
import { Tooltip } from "react-tooltip";
import type { errors as _ } from "../../src/content";
import { useEffect, useState, useMemo } from "react";
import { Loader } from "./Loader";
import {
  getFileDetailsTooltipContent,
  getFirstPageAsImage,
  getPlaceHoderImageUrl,
  sanitizeKey,
} from "../../src/utils";
import { useDispatch, useSelector } from "react-redux";
import type { ToolState } from "../../src/store";

type OmitFileName<T extends ActionProps> = Omit<T, "fileName">;

type CardProps = OmitFileName<ActionProps> & {
  index: number;
  file: File;
  isDraggable: boolean;
  provided: DraggableProvided;
  snapshot: DraggableStateSnapshot;
  errors: _;
  loader_text: string;
  fileDetailProps: [string, string, string];
};

const FileCard = ({
  index,
  file,
  isDraggable,
  provided,
  errors,
  extension,
  loader_text,
  fileDetailProps,
}: CardProps) => {
  const [showLoader, setShowLoader] = useState(true);
  const [imageUrl, setImageUrl] = useState("");
  const [tooltipSize, setToolTipSize] = useState("");
  const dispatch = useDispatch();

  // Memoize the sanitized key to avoid recalculating
  const sanitizedKey = useMemo(
    () => (file.name ? sanitizeKey(file.name.split(".")[0]) : null),
    [file.name]
  );

  // Use a specific selector that only subscribes to THIS file's rotation
  // This prevents re-renders when other files' rotations change
  const rotation = useSelector((state: { tool: ToolState }) => {
    if (!sanitizedKey) return null;
    return state.tool.rotations?.find((r) => r.k === sanitizedKey) || null;
  });

  let isSubscribed = true;

  useEffect(() => {
    (async () => {
      let size = await getFileDetailsTooltipContent(
        file,
        ...fileDetailProps,
        dispatch,
        errors
      );
      setToolTipSize(size);
    })();

    const processFile = async () => {
      try {
        setShowLoader(true);
        if (extension && extension === ".pdf") {
          if (isSubscribed) {
            setImageUrl(await getFirstPageAsImage(file, dispatch, errors));
          }
        } else if (extension && extension !== ".jpg") {
          if (isSubscribed) {
            setImageUrl(
              !file.size
                ? "/images/corrupted.png"
                : getPlaceHoderImageUrl(extension)
            );
          }
        }
      } finally {
        setShowLoader(false);
      }
    };

    processFile();

    return () => {
      isSubscribed = false;
    };
    // Only depend on things that affect the image loading, not rotation
  }, [extension, file]);

  return (
    <div
      className="card item"
      data-tooltip-id={`item-tooltip-${index}`}
      data-tooltip-html={tooltipSize}
      data-tooltip-place="top"
      {...(isDraggable ? provided.dragHandleProps : {})}
    >
      {showLoader ? <Loader loader_text={loader_text} /> : null}
      <bdi>
        <Tooltip id={`item-tooltip-${index}`} />
      </bdi>
      <ActionDiv extension={extension} fileName={file.name} />
      <div className="card-body d-flex flex-column">
        {!showLoader ? (
          <img
            className="img-fluid-custom object-fit-contain rounded item-img"
            src={imageUrl}
            alt={`Selected file ${index}`}
            draggable={false}
            style={
              rotation
                ? {
                    rotate: `${rotation.r}deg`,
                    scale: rotation.r === 180 || rotation.r === 0 ? "1" : ".9",
                  }
                : undefined
            }
          />
        ) : null}

        <p className="text-center">{file.name}</p>
      </div>
    </div>
  );
};

export default FileCard;
