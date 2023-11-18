import type { edit_page as _ } from "../../content";
import { languages } from "@/src/content/content";
export interface OptionsProps {
  layout?: string;
  edit_page: _;
}
import { InformationCircleIcon } from "@heroicons/react/solid";

import React, { useState } from "react";
// @ts-ignore
import Select from "react-select";

type Languages = {
  [key: string]: {
    name: string;
    nativeName: string;
  };
};

type OCRPDFProps = {
  ocr_pdf: {
    info: string;
    document_languages: string;
    input_placeholder: string;
  };
  languages: Languages;
};
// max items to be inserted are 3 if the user reaches the max items to be inserted, they should not be allowed to insert more
const OCRPDF: React.FC<OCRPDFProps> = ({ ocr_pdf, languages }) => {
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);

  const options = Object.keys(languages).map((key) => ({
    value: key,
    label: languages[key].nativeName,
  }));
  /// BUG: not adding items see letter
  const handleSelectChange = (selectedOptions: any) => {
    if (selectedOptions && selectedOptions.length > 3) {
      // If more than 3 options are selected, remove the last one
      selectedOptions.pop();
    }
    setSelectedLanguages(
      selectedOptions ? selectedOptions.map((option: any) => option.value) : []
    );
  };

  return (
    <div>
      <div className="alert alert-info">
        {" "}
        <InformationCircleIcon className="icon" /> {ocr_pdf.info}
      </div>
      <div className="d-flex justify-content-between">
        <h6>{ocr_pdf.document_languages}</h6>
        <span>{`${selectedLanguages.length}/3`}</span>
      </div>
      <Select
        isMulti
        name="languages"
        options={options}
        className="basic-multi-select"
        classNamePrefix="select"
        placeholder={ocr_pdf.input_placeholder}
        onChange={handleSelectChange}
        // isDisabled={selectedLanguages.length === 3}
      />
    </div>
  );
};

const Options = ({ edit_page }: OptionsProps) => {
  return (
    <>
      <OCRPDF ocr_pdf={edit_page.ocr_options} languages={languages} />
    </>
  );
};

export default Options;
