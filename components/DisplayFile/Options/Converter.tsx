import { useState } from "react";
import { useDispatch } from "react-redux";
import { setField } from "../../../src/store";
import { Tooltip } from "react-tooltip";
import type { edit_page } from "../../../src/content";

export const Converter = ({
  content,
  theme,
}: {
  content: edit_page["converter"];
  theme: string;
}) => {
  const dispatch = useDispatch();
  const [selectedConverter, setSelectedConverter] = useState<
    "free" | "premium"
  >("free");

  const handleConverterChange = (converter: "free" | "premium") => {
    setSelectedConverter(converter);
    dispatch(
      setField({
        converter,
      })
    );
  };

  return (
    <div className="flex justify-evenly">
      {/* Free Button */}
      <button
        data-tooltip-id="free-tooltip"
        data-tooltip-content={content.freeToolTip}
        onClick={() => handleConverterChange("free")}
        style={
          selectedConverter === "free" ? { backgroundColor: theme } : undefined
        }
        className={`
          px-6 py-2.5 rounded-lg font-medium transition-all duration-200
          ${
            selectedConverter === "free"
              ? "text-white shadow-md"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }
        `}
      >
        {content.free}
      </button>

      {/* Premium Button */}
      <button
        data-tooltip-id="premium-tooltip"
        data-tooltip-content={content.premiumToolTip}
        onClick={() => handleConverterChange("premium")}
        style={
          selectedConverter === "premium"
            ? { backgroundColor: theme }
            : undefined
        }
        className={`
          px-6 py-2.5 rounded-lg font-medium transition-all duration-200
          ${
            selectedConverter === "premium"
              ? "text-white shadow-md"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }
        `}
      >
        {content.premium}
      </button>

      {/* Tooltips */}
      <Tooltip id="free-tooltip" place="bottom" />
      <Tooltip id="premium-tooltip" place="top" />
    </div>
  );
};
