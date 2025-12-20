import Select from "react-select";
import type {
  StylesConfig,
  CSSObjectWithLabel,
  OptionProps,
  GroupBase,
} from "react-select";
import { useDispatch } from "react-redux";
import { setField } from "../../../src/store";
import { InformationCircleIcon } from "@heroicons/react/outline";
import type { edit_page } from "../../../src/content";

const THEME_COLOR = "#000";

export type PDFAFormatValue =
  | "PDF/A-1a"
  | "PDF/A-1b"
  | "PDF/A-2a"
  | "PDF/A-2b"
  | "PDF/A-2u"
  | "PDF/A-3a"
  | "PDF/A-3b"
  | "PDF/A-3u"
  | "PDF/A-4";

type PDFOptions = {
  value: PDFAFormatValue;
  label: string;
};

const pdfAFormats: {
  [key: string]: PDFAFormatValue;
} = {
  pdfA1a: "PDF/A-1a",
  pdfA1b: "PDF/A-1b",
  pdfA2a: "PDF/A-2a",
  pdfA2b: "PDF/A-2b",
  pdfA2u: "PDF/A-2u",
  pdfA3a: "PDF/A-3a",
  pdfA3b: "PDF/A-3b",
  pdfA3u: "PDF/A-3u",
  pdfA4: "PDF/A-4", // PDF/A-4 has no conformance levels
};

const pdfAFormatsArray: PDFOptions[] = [
  {
    value: pdfAFormats.pdfA1a,
    label: "PDF/A-1a (ISO 19005-1) - Accessible",
  },
  {
    value: pdfAFormats.pdfA1b,
    label: "PDF/A-1b (ISO 19005-1) - Basic",
  },
  {
    value: pdfAFormats.pdfA2a,
    label: "PDF/A-2a (ISO 19005-2) - Accessible",
  },
  {
    value: pdfAFormats.pdfA2b,
    label: "PDF/A-2b (ISO 19005-2) - Basic",
  },
  {
    value: pdfAFormats.pdfA2u,
    label: "PDF/A-2u (ISO 19005-2) - Unicode",
  },
  {
    value: pdfAFormats.pdfA3a,
    label: "PDF/A-3a (ISO 19005-3) - Accessible",
  },
  {
    value: pdfAFormats.pdfA3b,
    label: "PDF/A-3b (ISO 19005-3) - Basic",
  },
  {
    value: pdfAFormats.pdfA3u,
    label: "PDF/A-3u (ISO 19005-3) - Unicode",
  },
  {
    value: pdfAFormats.pdfA4,
    label: "PDF/A-4 (ISO 19005-4) - Latest",
  },
];

const customStyles: StylesConfig<PDFOptions, false> = {
  option: (
    base: CSSObjectWithLabel,
    state: OptionProps<PDFOptions, false, GroupBase<PDFOptions>>
  ) => ({
    ...base,
    backgroundColor: state.isSelected ? THEME_COLOR : "white",
    color: state.isSelected ? "white" : "black",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: state.isSelected ? THEME_COLOR : "#ddd",
      color: state.isSelected ? "white" : "black",
    },
  }),
};

export interface OptionsProps {
  content: edit_page["pdf_a_options"];
}

const PDFA_Options = ({ content }: OptionsProps) => {
  const dispatch = useDispatch();

  return (
    <div className="options-container">
      <div
        role="status"
        aria-live="polite"
        className="flex items-start gap-3 bg-blue-50 text-blue-800 border border-blue-100 px-4 py-3 rounded-md my-1"
      >
        <InformationCircleIcon
          className="h-5 w-5 shrink-0"
          aria-hidden="true"
        />
        <p className="leading-tight">{content.info}</p>
      </div>
      <Select
        onChange={(v) => {
          if (v) {
            dispatch(setField({ pdf_a_format: v.value }));
          }
        }}
        options={pdfAFormatsArray}
        styles={customStyles}
        placeholder={content?.placeholder}
        defaultValue={pdfAFormatsArray[3]} // Default to PDF/A-2b (most common)
      />
    </div>
  );
};

export default PDFA_Options;
