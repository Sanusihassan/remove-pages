import { useSelector } from "react-redux";
import type { edit_page } from "../../src/content";
import type { ToolState } from "../../src/store";
import { Converter } from "./Options/Converter";
import { CTABtn } from "./Options/CTABtn";
import { OutputFileNameInput } from "./Options/OutputFileNameInput";

export const Options = ({
  edit_page,
  theme,
  lang,
}: {
  edit_page: edit_page;
  theme: string;
  lang: string;
}) => {
  const limitationMsg = useSelector(
    (state: { tool: ToolState }) => state.tool.limitationMsg
  );
  return (
    <>
      <div className="body">
        <div className="my-3">
          {theme === "var(--pdf-to-pdf-a)" ||
          theme === "var(--pdf-to-text)" ? null : (
            <Converter content={edit_page.converter} theme={theme} />
          )}
          {limitationMsg ? (
            <div className="limitation-alert" role="alert">
              {limitationMsg}
              <CTABtn cta={edit_page.cta} lang={lang} />
            </div>
          ) : null}
        </div>
      </div>
      <div className="footer">
        <OutputFileNameInput content={edit_page.fileNameInput} />
      </div>
    </>
  );
};
