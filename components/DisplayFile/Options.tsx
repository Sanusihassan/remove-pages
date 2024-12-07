import Select from "react-select";
import type { StylesConfig, CSSObjectWithLabel, OptionProps, GroupBase } from "react-select";
import { useDispatch } from "react-redux";
import { setField } from "../../src/store";
import type { edit_page as _edit_pages } from "../../src/content";
import { Alert } from "react-bootstrap";
import { InformationCircleIcon } from "@heroicons/react/outline";

const THEME_COLOR = '#27ae60';

type MergePagesOptions = {
  value: string;
  label: string;
};

const pdfPageArrangements = {
  single: "1x1",
  horizontal: {
    two: "2x1",
    three: "3x1",
    four: "4x1"
  },
  vertical: {
    two: "1x2",
    three: "1x3",
    four: "1x4"
  },
  grid: {
    twoByTwo: "2x2",
    threeByTwo: "3x2",
    fourByTwo: "4x2",
    threeByThree: "3x3",
    fourByFour: "4x4"
  }
};

const pdfPageArrangementsArray: MergePagesOptions[] = [
  { value: pdfPageArrangements.single, label: "Single (1x1)" },
  { value: pdfPageArrangements.horizontal.two, label: "Horizontal (2x1)" },
  { value: pdfPageArrangements.horizontal.three, label: "Horizontal (3x1)" },
  { value: pdfPageArrangements.horizontal.four, label: "Horizontal (4x1)" },
  { value: pdfPageArrangements.vertical.two, label: "Vertical (1x2)" },
  { value: pdfPageArrangements.vertical.three, label: "Vertical (1x3)" },
  { value: pdfPageArrangements.vertical.four, label: "Vertical (1x4)" },
  { value: pdfPageArrangements.grid.twoByTwo, label: "Grid (2x2)" },
  { value: pdfPageArrangements.grid.threeByTwo, label: "Grid (3x2)" },
  { value: pdfPageArrangements.grid.fourByTwo, label: "Grid (4x2)" },
  { value: pdfPageArrangements.grid.threeByThree, label: "Grid (3x3)" },
  { value: pdfPageArrangements.grid.fourByFour, label: "Grid (4x4)" },
];


const customStyles: StylesConfig<MergePagesOptions, false> = {
  option: (
    base: CSSObjectWithLabel,
    state: OptionProps<MergePagesOptions, false, GroupBase<MergePagesOptions>>
  ) => ({
    ...base,
    backgroundColor: state.isSelected ? THEME_COLOR : 'white',
    color: state.isSelected ? 'white' : 'black',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: state.isSelected ? THEME_COLOR : '#ddd',
      color: state.isSelected ? 'white' : 'black',
    },
  }),
};

export interface OptionsProps {
  content: _edit_pages["options"];
}

const Options = ({ content }: OptionsProps) => {
  const dispatch = useDispatch();
  return (
    <div className="options-container">
      <Alert variant="info">
        <InformationCircleIcon className="icon" />{" "}
        {content?.info}
      </Alert>
      <Select
        onChange={(v) => {
          if (v) {
            dispatch(setField({ arrangement: v.value }));
          }
        }}
        options={pdfPageArrangementsArray}
        styles={customStyles}
        placeholder={content?.placeholder}
      />
    </div>
  );
};

export default Options;
