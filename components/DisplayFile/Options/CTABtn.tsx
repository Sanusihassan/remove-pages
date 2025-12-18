import { useSelector } from "react-redux";
import { edit_page } from "../../../src/content/content";
import type { ToolState } from "../../../src/store";
import { useEffect } from "react";
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
    (state: { tool: ToolState }) => state.tool.errorCode
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
      >
        {cta}
      </a>
      {errorCode === "INSUFFICIENT_CONVERSION_UNITS" ? (
        <a
          href={`${lang !== "en" ? "/" + lang : ""}/recharge/premium-conversions/`}
          className="cta-btn"
          target="_blank"
        >
          {edit_page.rechargeCta}
        </a>
      ) : null}
    </div>
  );
};
