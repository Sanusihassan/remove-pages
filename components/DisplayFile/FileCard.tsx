import type {
  DraggableProvided,
  DraggableStateSnapshot,
} from "react-beautiful-dnd";
import { ActionDiv, type ActionProps } from "./ActionDiv";
import { Tooltip } from "react-tooltip";
import type { errors as _, edit_page } from "../../src/content";
import { useEffect, useState, useMemo, useRef } from "react";
import { Loader } from "./Loader";
import {
  analyzePDF,
  getFileDetailsTooltipContent,
  getFirstPageAsImage,
  getPlaceHoderImageUrl,
  sanitizeKey,
} from "../../src/utils";
import { useDispatch, useSelector } from "react-redux";
import { selectPasswords, setField, type ToolState } from "../../src/store";
import { LanguageSelect } from "../LanguageSelect";

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
  languageSelectProps: {
    content: edit_page["languageSelectContent"];
    themeColor: string;
  };
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
  languageSelectProps,
}: CardProps) => {
  const [showLoader, setShowLoader] = useState(true);
  const [imageUrl, setImageUrl] = useState("");
  const [tooltipSize, setToolTipSize] = useState("");
  const [password, setPassword] = useState<string>("");
  const [isScanned, setIsScanned] = useState<boolean>(false);
  const dispatch = useDispatch();
  const isSubscribedRef = useRef(true);

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

  // Get all passwords for updating state
  const allPasswords = useSelector(selectPasswords);

  const [needsPassword, setNeedsPassword] = useState(false);

  const processFile = async (currentPassword: string) => {
    try {
      setShowLoader(true);
      if (extension && extension === ".pdf") {
        if (isSubscribedRef.current) {
          const img = await getFirstPageAsImage(
            file,
            dispatch,
            errors,
            currentPassword || undefined
          );

          const _needsPassword = img === "/images/locked.png";
          setNeedsPassword(_needsPassword);

          // Only analyze if we have a valid image (not locked)
          let scanned = false;
          if (img && img !== "/images/locked.png") {
            try {
              const result = await analyzePDF(
                file,
                currentPassword || undefined
              );
              scanned = result.scanned;
            } catch (analyzeError) {
              console.error("Error analyzing PDF:", analyzeError);
              // Don't throw - just default to not scanned
            }
          }
          setIsScanned(scanned);

          if (isSubscribedRef.current) {
            setImageUrl(img);

            // Only update passwords if successfully unlocked
            if (img && img !== "/images/locked.png" && currentPassword) {
              const filteredPasswords = allPasswords.filter(
                (p) => p.k !== sanitizedKey
              );
              const updatedPasswords = [
                ...filteredPasswords,
                { k: sanitizedKey, p: currentPassword },
              ];
              dispatch(
                setField({
                  passwords: updatedPasswords,
                  errorCode: "",
                  errorMessage: "",
                })
              );
            } else if (img && img !== "/images/locked.png") {
              dispatch(setField({ errorCode: "", errorMessage: "" }));
            }
          }
        }
      }
    } finally {
      if (isSubscribedRef.current) {
        setShowLoader(false);
      }
    }
  };

  useEffect(() => {
    isSubscribedRef.current = true;

    (async () => {
      let size = await getFileDetailsTooltipContent(
        file,
        ...fileDetailProps,
        dispatch,
        errors
      );
      if (isSubscribedRef.current) {
        setToolTipSize(size);
      }
    })();

    processFile(password);

    return () => {
      isSubscribedRef.current = false;
    };
  }, [extension, file, password]);

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
      {isScanned ? (
        <LanguageSelect {...languageSelectProps} fileName={file.name} />
      ) : null}
      <ActionDiv
        extension={extension}
        fileName={file.name}
        setPassword={setPassword}
        needsPassword={needsPassword}
        noRotation={languageSelectProps.themeColor.includes("pdf-to-text")}
      />
      <div className="card-body">
        {!showLoader ? (
          <img
            className="img-fluid-custom"
            src={imageUrl}
            alt={`Selected file ${index}`}
            draggable={false}
            style={rotation ? { rotate: `${rotation.r}deg` } : undefined}
          />
        ) : null}

        <p className="text-center">{file.name}</p>
      </div>
    </div>
  );
};

export default FileCard;
