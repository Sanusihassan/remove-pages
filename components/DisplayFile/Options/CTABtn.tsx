import { useSelector } from "react-redux";
import type { ToolState } from "../../../src/store";
export const CTABtn = ({
  cta,
  centerItem,
  lang,
}: {
  cta: string;
  centerItem?: boolean;
  lang: string;
}) => {
  const errorCode = useSelector(
    (state: { tool: ToolState }) => state.tool.errorCode,
  );

  return (
    <div
      className={
        centerItem
          ? "center-item"
          : errorCode === "INSUFFICIENT_CONVERSION_UNITS"
            ? "flex justify-between"
            : undefined
      }
    >
      <a
        href={`${lang !== "en" ? "/" + lang : ""}/pricing`}
        className="cta-btn"
        target="_blank"
        onClick={(e) => e.stopPropagation()}
      >
        {cta}
      </a>
    </div>
  );
};
