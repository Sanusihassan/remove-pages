import type { edit_page } from "../../src/content";
// import { LanguageSelect } from "../LanguageSelect";
import { Converter } from "./Options/Converter";
import { OutputFileNameInput } from "./Options/OutputFileNameInput";

export const Options = ({
  edit_page,
  theme,
}: {
  edit_page: edit_page;
  theme: string;
}) => {
  console.log("theeme", theme);
  return (
    <>
      <div className="body">
        <div className="my-3">
          {theme === "var(--pdf-to-pdf-a)" ||
          theme === "var(--pdf-to-text)" ? null : (
            <Converter content={edit_page.converter} theme={theme} />
          )}
        </div>
      </div>
      <div className="footer">
        <OutputFileNameInput content={edit_page.fileNameInput} />
      </div>
    </>
  );
};
