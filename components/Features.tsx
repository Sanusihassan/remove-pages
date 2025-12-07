import QuickIcon from "./icons/QuickIcon";
import { BsCloudUpload } from "react-icons/bs";
import { CiLock } from "react-icons/ci";
import { useSelector } from "react-redux";
import { MdOutlineMoneyOffCsred, MdOutlineMoreTime } from "react-icons/md";
import RobustIcon from "./icons/Features/Robust";
import VersatileIcon from "./icons/Features/Versatile";
import NoEmailIcon from "./icons/Features/NoEmail";
import { CursorClickIcon, ThumbUpIcon } from "@heroicons/react/outline";
import { PiHandshake } from "react-icons/pi";
import EasyIcon from "./icons/Features/Easy";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { RiCheckboxMultipleLine } from "react-icons/ri";
import StandardIcon from "./icons/Features/Standard";
import type { ToolState } from "../src/store";

export const Features = ({
  features,
  tool,
}: {
  features: { title: string; description: string }[];
  tool:
    | "/pdf-to-powerpoint"
    | "/word-to-pdf"
    | "/powerpoint-to-pdf"
    | "/excel-to-pdf"
    | "/html-to-pdf"
    | "/pdf-to-word"
    | "/pdf-to-excel"
    | "/pdf-to-pdf-a"
    | "/pdf-to-text";
}) => {
  const stateShowTool = useSelector(
    (state: { tool: ToolState }) => state.tool.showTool
  );

  const iconsMap = {
    // "/merge-pdf": [MdOutlineMoneyOffCsred, RobustIcon, CiLock],
    // "/compress-pdf": [VersatileIcon, NoEmailIcon, ThumbUpIcon],
    "/pdf-to-powerpoint": [CursorClickIcon, QuickIcon, PiHandshake],
    "/word-to-pdf": [
      EasyIcon,
      IoIosCheckmarkCircleOutline,
      RiCheckboxMultipleLine,
    ],
    "/powerpoint-to-pdf": [CursorClickIcon, QuickIcon, PiHandshake],
    "/excel-to-pdf": [EasyIcon, QuickIcon, CiLock],
    "/html-to-pdf": [QuickIcon, CiLock, BsCloudUpload],
    "/pdf-to-word": [
      IoIosCheckmarkCircleOutline,
      EasyIcon,
      RiCheckboxMultipleLine,
    ],
    "/pdf-to-excel": [QuickIcon, EasyIcon, CiLock],
    "/pdf-to-pdf-a": [ThumbUpIcon, StandardIcon, MdOutlineMoreTime],
    "/pdf-to-text": [RobustIcon, QuickIcon, ThumbUpIcon],
  };
  const icons = iconsMap[tool];
  return (
    <div className={`features${stateShowTool ? "" : " d-none"}`}>
      {features.map(({ title, description }, i) => {
        const Icon = icons[i];
        return (
          <div className="feature">
            <Icon
              className={`feature-icon${(tool === "/pdf-to-text" && i === 2) || (tool === "/pdf-to-pdf-a" && i === 0) ? " no-fill" : ""}`}
            />
            <div className="title">{title}</div>
            <p className="description">{description}</p>
          </div>
        );
      })}
    </div>
  );
};
