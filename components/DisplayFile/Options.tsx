import { useSelector, useDispatch } from "react-redux";
import { setField, type ToolState } from "../../src/store";
import Form from "react-bootstrap/Form";
import { useFileStore } from "../../src/file-store";
import { useEffect, useRef } from "react";
import type { edit_page } from "../../src/content";

export const Options = ({ content }: { content: edit_page["options"] }) => {
  const fileName = useSelector((state: { tool: ToolState }) => state.tool.fileName);
  const dispatch = useDispatch();
  const { files } = useFileStore();

  // Track whether we've already set the initial default filename
  const hasSetDefault = useRef(false);

  useEffect(() => {
    if (files.length && !fileName && !hasSetDefault.current) {
      dispatch(setField({ fileName: files[0].name }));
      hasSetDefault.current = true; // ensure we don't reset again
    }
  }, [files, fileName, dispatch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setField({ fileName: e.target.value }));
  };

  return (
    <div className="p-3 flex-fill">
      <Form.Group controlId="fileNameInput">
        <Form.Label className="fw-bold">{content.label}</Form.Label>
        <Form.Control
          type="text"
          placeholder={content.placeholder}
          value={fileName}
          onChange={handleChange}
        />
        <Form.Text className="text-muted">{content.helperText}</Form.Text>
      </Form.Group>
    </div>
  );
};
