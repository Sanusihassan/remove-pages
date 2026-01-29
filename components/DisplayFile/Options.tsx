import type { edit_page as _ } from "../../src/content";
import { LockPDFOptions } from "./Options/LockPDFOptions";
export interface OptionsProps {
  layout: "lock-pdf" | "unlock-pdf";
  edit_page: _;
}

const Options = ({ layout, edit_page }: OptionsProps) => {
  return (
    <>
      {layout === "lock-pdf" ? (
        <>
          <div className="space"></div>
          <LockPDFOptions lock_pdf={edit_page.lock_pdf} />
        </>
      ) : null}
    </>
  );
};

export default Options;
