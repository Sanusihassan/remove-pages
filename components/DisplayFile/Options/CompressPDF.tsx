// Fixed version with only one handle
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { setField, type ToolState } from "../../../src/store";
import type { edit_page } from "../../../src/content";

export const CompressPDF = ({
  c,
  options,
  filenameOptions,
  lang,
}: {
  c: string;
  options: edit_page["compress_pdf"];
  filenameOptions: edit_page["filenameOptions"];
  lang: string;
}) => {
  if (typeof window === "undefined") {
    return null;
  }
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [sliderValue, setSliderValue] = useState(1); // Initial value 1.0
  const [filename, setFilename] = useState("");

  let _options = ["recommended", "less", "extreme"];
  const dispatch = useDispatch();
  const limitationMsg = useSelector(
    (state: { tool: ToolState }) => state.tool.limitationMsg
  );
  // COMMENTED NOW FOR DEV ONLY!!!
  // const subscriptionStatus = useSelector(
  //   (state: { tool: ToolState }) => state.tool.subscriptionStatus
  // );

  const subscriptionStatus = false;

  const handleSliderChange = (values: number[]) => {
    const newValue = values[1]; // Use the second value (upper thumb)
    setSliderValue(newValue);
    dispatch(setField({ compressPdf: newValue }));
  };

  return (
    <div>
      <div style={{ overflowX: "auto" }}>
        <ul className="nav nav-tabs flex-nowrap" role="tablist">
          {options.slice(0, 3).map((option, index) => (
            <li className="nav-item" key={index}>
              <button
                className={`nav-link ${selectedIndex === index ? "active" : ""}`}
                onClick={() => {
                  setSelectedIndex(index);
                  dispatch(setField({ compressPdf: _options[index] }));
                }}
              >
                {option.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`p-3 border border-top-0${lang === "ar" ? " border-r-0" : " border-l-0"}`}
      >
        <p className="description">{options[selectedIndex].description}</p>
      </div>

      {/* Custom Slider Section */}
      <div className="mt-4 p-3">
        <h6 className={`option-title${" " + c}`}>{options[3].title}</h6>
        <p className="description">{options[3].description}</p>
        <div className="mt-3">
          {/* Single Handle Range Slider */}
          <div className="py-5">
            <RangeSlider
              className="green-slider"
              min={0.1}
              max={subscriptionStatus ? 10 : 1.9}
              step={0.1}
              value={[0.1, sliderValue]} // Start from min value
              onInput={handleSliderChange}
              thumbsDisabled={[true, false]} // Disable left thumb, enable right thumb
              rangeSlideDisabled={true} // Disable range dragging
            />
          </div>
          <div className="text-center mt-3 text-gray-600 font-medium">
            {sliderValue.toFixed(1)}
          </div>
          {!subscriptionStatus && (
            <p className="text-center mt-2 text-sm text-gray-500">
              {filenameOptions.upgradeNotice.msg}{" "}
              <a
                href={`${lang === "" ? "" : "/" + lang}/pricing`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success btn-sm"
              >
                {filenameOptions.upgradeNotice.cta}
              </a>
            </p>
          )}
        </div>
      </div>

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
              href={`${lang === "" ? "" : "/" + lang}/pricing`}
              className="btn btn-success btn-sm"
              target="_blank"
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
