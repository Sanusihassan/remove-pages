import type { edit_page } from "../../src/content";
import { CompressPDF } from "./Options/CompressPDF";
export const CTABtn = ({
  cta,
  centerItem,
}: {
  cta: string;
  centerItem?: boolean;
}) => {
  return (
    <div className={`mt-2${centerItem ? " row justify-content-center" : ""}`}>
      <a
        href="/pricing"
        className="btn btn-primary btn-sm cta-btn"
        target="_blank"
        style={{ fontWeight: "500" }}
      >
        {cta}
      </a>
    </div>
  );
};
export const Options = ({
  content,
  filenameOptions,
}: {
  content: edit_page["compress_pdf"];
  filenameOptions: edit_page["filenameOptions"];
}) => {
  return (
    <>
      <CompressPDF
        options={content}
        c="compress-pdf"
        filenameOptions={filenameOptions}
      />
    </>
  );
};
