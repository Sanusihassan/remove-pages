import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setField, type ToolState } from "../../../src/store";
import type { edit_page } from "../../../src/content";

export const CompressPDF = ({
  c,
  options,
  filenameOptions,
}: {
  c: string;
  options: edit_page["compress_pdf"];
  filenameOptions: edit_page["filenameOptions"];
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [v, setV] = useState(".1");
  const [filename, setFilename] = useState("");

  let _options = ["recommended", "less", "extreme"];
  const dispatch = useDispatch();
  const limitationMsg = useSelector(
    (state: { tool: ToolState }) => state.tool.limitationMsg
  );

  return (
    <div>
      <ul className="list-group list-group-flush grid-body">
        {options.map((option, index) => (
          <li
            key={index}
            className={`list-group-item ${
              index === selectedIndex ? "active" : ""
            } ${index === 3 ? "" : "list-group-item-action"}`}
            onClick={() => {
              setSelectedIndex(index);

              if (index != 3) {
                dispatch(setField({ compressPdf: _options[index] }));
              } else {
                dispatch(setField({ compressPdf: "recommended" }));
              }
            }}
          >
            <h6 className={`option-title${" " + c}`}>{option.title}</h6>
            <p className="description">{option.description}</p>
            {index === 3 && (
              <div className="mt-3">
                <input
                  className="form-control form-control-lg"
                  type="number"
                  min="0.1"
                  max="1"
                  step=".1"
                  placeholder="Compression amount"
                  value={v}
                  onChange={(e) => {
                    setV(e.target.value);
                  }}
                  onKeyUp={() => {
                    dispatch(setField({ compressPdf: v }));
                  }}
                />
              </div>
            )}
          </li>
        ))}
      </ul>

      {/* Filename Input Section */}
      <div className="mt-4 px-3">
        <label htmlFor="output-filename" className="form-label">
          {filenameOptions.label}
        </label>
        <input
          id="output-filename"
          type="text"
          className="form-control form-control-lg"
          placeholder={filenameOptions.placeholder}
          value={filename}
          onChange={(e) => {
            setFilename(e.target.value);
            dispatch(setField({ outputFilename: e.target.value }));
          }}
        />
        {filenameOptions.helperText && (
          <small className="form-text text-muted">
            {filenameOptions.helperText}
          </small>
        )}
      </div>

      {/* Show alert if limitationMsg is set */}
      {limitationMsg ? (
        <div className="mt-3 mx-3 alert alert-info mb-3" role="alert">
          {limitationMsg}
          <div className="mt-2">
            <a
              href="/pricing"
              className="btn btn-primary btn-sm"
              style={{ fontWeight: "500" }}
            >
              {filenameOptions.cta}
            </a>
          </div>
        </div>
      ) : null}
    </div>
  );
};
