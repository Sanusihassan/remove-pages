import { useDispatch, useSelector } from "react-redux";
import type { edit_page } from "../../../src/content";
import { setField, type ToolState } from "../../../src/store";

import { useEffect, useRef } from "react";
import { useFileStore } from "../../../src/file-store";

export const OutputFileNameInput = ({
  content,
}: {
  content: edit_page["fileNameInput"];
}) => {
  const dispatch = useDispatch();
  const { files } = useFileStore();
  const fileName = useSelector(
    (state: { tool: ToolState }) => state.tool.fileName
  );
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setField({ fileName: e.target.value }));
  };
  // Track whether we've already set the initial default filename
  const hasSetDefault = useRef(false);
  useEffect(() => {
    if (files.length && !fileName && !hasSetDefault.current) {
      dispatch(setField({ fileName: files[0].name.split(".")[0] }));
      hasSetDefault.current = true; // ensure we don't reset again
    }
  }, [files, fileName, dispatch]);
  return (
    <div className="input-wrapper my-6 mx-3">
      <label htmlFor="fileNameInput" className="label">
        {content.label}
      </label>
      <input
        type="text"
        className="input"
        id="fileNameInput"
        placeholder={content.placeholder}
        value={fileName}
        onChange={handleChange}
      />
      <div className="helper-text">{content.helperText}</div>
    </div>
  );
};
