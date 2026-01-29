import { CiLock } from "react-icons/ci";
import { useSelector } from "react-redux";
import RobustIcon from "./icons/Features/Robust";
import EasyIcon from "./icons/Features/Easy";
import { IoIosLock } from "react-icons/io";
import type { ToolState } from "../src/store";

export const Features = ({
  features,
  tool,
}: {
  features: { title: string; description: string }[];
  tool: "/lock-pdf" | "/unlock-pdf";
}) => {
  const stateShowTool = useSelector(
    (state: { tool: ToolState }) => state.tool.showTool,
  );

  const iconsMap = {
    "/lock-pdf": [EasyIcon, RobustIcon, IoIosLock],
    "/unlock-pdf": [EasyIcon, RobustIcon, CiLock],
  };
  const icons = iconsMap[tool];
  return (
    <div className={`features${stateShowTool ? "" : " d-none"}`}>
      {features.map(({ title, description }, i) => {
        const Icon = icons[i];
        return (
          <div className="feature" key={i}>
            <Icon className="feature-icon" />
            <div className="title">{title}</div>
            <p className="description">{description}</p>
          </div>
        );
      })}
    </div>
  );
};
