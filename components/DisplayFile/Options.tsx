// RemovePagesOptions.tsx - Modern version with Tailwind CSS
import { useEffect, useRef, useState } from "react";
import { Info } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { setField, selectToolState } from "../../src/store";

// ============ TYPES ============
export interface RemovePagesOptionsProps {
  content: {
    info: string;
    total_pages: string;
    pages_to_remove: string;
    placeholder: string;
    helper_text: string;
    summary_pages_to_remove: string;
    summary_remaining_pages: string;
    warning_cannot_remove_all: string;
  };
  themeColor?: string;
}

// ============ CONSTANTS ============
const THEME_COLOR_DEFAULT = "#d63031"; // Red theme

// ============ MAIN COMPONENT ============
export const RemovePagesOptions = ({
  content,
  themeColor = THEME_COLOR_DEFAULT,
}: RemovePagesOptionsProps) => {
  const dispatch = useDispatch();
  const { selectedPages, pageCount } = useSelector(selectToolState);

  const [inputVal, setInputVal] = useState("");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Sync input with Redux state
  useEffect(() => {
    if (selectedPages !== "") {
      setInputVal(selectedPages);
    } else {
      setInputVal("");
    }
    if (pagesToRemoveCount === pageCount && pageCount > 0) {
      dispatch(setField({ limitationMsg: content.warning_cannot_remove_all }));
    } else {
      dispatch(setField({ limitationMsg: "" }));
    }
  }, [selectedPages]);

  // Handle input change with validation
  const handleInputChange = (value: string) => {
    setInputVal(value);

    // Clear previous timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Validate after user stops typing (2 seconds)
    timeoutRef.current = setTimeout(() => {
      const pattern = /^(\d+(?:-\d+)?,)*(\d+(?:-\d+)?)$/;
      const cleanValue = value.replace(/\s/g, "");

      if (pattern.test(cleanValue) && cleanValue) {
        dispatch(setField({ selectedPages: value }));
      } else if (!cleanValue) {
        dispatch(setField({ selectedPages: "" }));
      }
    }, 2000);
  };

  // Calculate pages to remove count
  const pagesToRemoveCount = selectedPages
    ? selectedPages.split(",").reduce((count, part) => {
        if (part.includes("-")) {
          const [start, end] = part.split("-").map(Number);
          return count + (end - start + 1);
        }
        return count + 1;
      }, 0)
    : 0;

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      {/* Info Alert */}
      <div
        className="flex items-start gap-3 p-4 rounded-lg mb-6"
        style={{
          backgroundColor: `${themeColor}10`,
          borderLeft: `3px solid ${themeColor}`,
        }}
      >
        <Info
          size={20}
          style={{ color: themeColor, marginTop: 2 }}
          className="shrink-0"
        />
        <p className="text-sm text-gray-700">{content.info}</p>
      </div>

      {/* Total Pages Info */}
      <div className="mb-4 pb-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">{content.total_pages}:</span>
          <span className="text-lg font-semibold" style={{ color: themeColor }}>
            {pageCount}
          </span>
        </div>
      </div>

      {/* Pages to Remove Input */}
      <div className="space-y-3">
        <label className="block text-sm font-medium text-gray-700">
          {content.pages_to_remove}
        </label>

        <input
          type="text"
          value={inputVal}
          onChange={(e) => handleInputChange(e.target.value)}
          placeholder={content.placeholder}
          className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 transition-all"
          style={{
            borderColor: themeColor,
          }}
          onFocus={(e) => {
            e.target.style.borderColor = themeColor;
            e.target.style.boxShadow = `0 0 0 2px ${themeColor}40`;
          }}
          onBlur={(e) => {
            e.target.style.borderColor = "#d1d5db";
            e.target.style.boxShadow = "none";
          }}
        />

        {/* Helper Text */}
        <p className="text-xs text-gray-500">{content.helper_text}</p>
      </div>

      {/* Summary */}
      {pagesToRemoveCount > 0 && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">
              {content.summary_pages_to_remove}
            </span>
            <span className="font-semibold" style={{ color: themeColor }}>
              {pagesToRemoveCount}
            </span>
          </div>
          <div className="flex items-center justify-between text-sm mt-2">
            <span className="text-gray-600">
              {content.summary_remaining_pages}
            </span>
            <span className="font-semibold text-gray-800">
              {pageCount - pagesToRemoveCount}
            </span>
          </div>
        </div>
      )}

      {/* Warning if removing all pages */}
      {pagesToRemoveCount === pageCount && pageCount > 0 ? (
        <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
          <p className="text-sm text-amber-700 mb-0">
            {content.warning_cannot_remove_all}
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default RemovePagesOptions;
