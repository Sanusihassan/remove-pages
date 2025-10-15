import type { edit_page } from "../../src/content";
import { CompressPDF } from "./Options/CompressPDF";

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
