import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { setField, type ToolState } from "../src/store";
import type { edit_page as _edit_pages } from "../src/content";
import type {
  StylesConfig,
  CSSObjectWithLabel,
  OptionProps,
  GroupBase,
} from "react-select";
import { languages } from "../src/content/content";
// we'll be using this function to sanitize the file-name.
import { sanitizeKey } from "../src/utils";

type OptionType = {
  value: string;
  label: string;
};

interface LanguageSelectProps {
  themeColor: string;
  fileName: string;
  content: _edit_pages["languageSelectContent"];
}

export const LanguageSelect: React.FC<LanguageSelectProps> = ({
  themeColor,
  fileName,
  content,
}) => {
  const dispatch = useDispatch();
  const selectedLanguages = useSelector(
    (state: { tool: ToolState }) => state.tool.selectedLanguages || []
  );

  // Get the sanitized key for this file
  const fileKey = sanitizeKey(fileName);

  // Find languages selected for this specific file
  const currentFileLanguages = selectedLanguages
    .filter((item) => item.k === fileKey)
    .map((item) => item.lang);

  // Language options from the languages object
  const languageOptions = Object.entries(languages).map(
    ([value, language]: [string, { name: string; nativeName: string }]) => ({
      value,
      label: `${language.name} (${language.nativeName})`,
    })
  );

  // Multi-select styles with dynamic theme color
  const multiSelectStyles: StylesConfig<OptionType, true> = {
    option: (
      base: CSSObjectWithLabel,
      state: OptionProps<OptionType, true, GroupBase<OptionType>>
    ) => ({
      ...base,
      backgroundColor: state.isSelected ? themeColor : "white",
      color: state.isSelected ? "white" : "black",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: state.isSelected ? themeColor : "#ddd",
        color: state.isSelected ? "white" : "black",
      },
    }),
    multiValue: (base) => ({
      ...base,
      backgroundColor: themeColor + "20",
    }),
    multiValueLabel: (base) => ({
      ...base,
      color: themeColor,
    }),
    multiValueRemove: (base) => ({
      ...base,
      color: themeColor,
      "&:hover": {
        backgroundColor: themeColor,
        color: "white",
      },
    }),
  };

  // Handle language selection change
  const handleLanguageSelectChange = (selectedOptions: OptionType[] | null) => {
    if (selectedOptions && selectedOptions.length > 3) {
      // If more than 3 options are selected, remove the last one
      selectedOptions.pop();
    }

    // Remove existing entries for this file
    const otherFilesLanguages = selectedLanguages.filter(
      (item) => item.k !== fileKey
    );

    // Add new entries for this file
    const newFileLanguages = selectedOptions
      ? selectedOptions.map((option) => ({
          k: fileKey,
          lang: option.value,
        }))
      : [];

    dispatch(
      setField({
        selectedLanguages: [...otherFilesLanguages, ...newFileLanguages],
      })
    );
  };

  const showWarning = currentFileLanguages.length === 0;

  return (
    <div className="space-y-2">
      {showWarning && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 flex items-start gap-2">
          <svg
            className="w-5 h-5 text-yellow-600 shrink-0 mt-0.5"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-yellow-800">{content.warning}</p>
        </div>
      )}

      <Select
        isMulti
        name="languages"
        options={languageOptions}
        className="basic-multi-select"
        classNamePrefix="select"
        styles={multiSelectStyles}
        placeholder={content.placeholder}
        onChange={handleLanguageSelectChange}
        value={languageOptions.filter((option) =>
          currentFileLanguages.includes(option.value)
        )}
        isDisabled={currentFileLanguages.length >= 3}
        closeMenuOnSelect={false}
      />
    </div>
  );
};
