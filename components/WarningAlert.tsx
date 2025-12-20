import { useSelector } from "react-redux";
import { selectSelectedLanguages } from "../src/store";

export const WarningAlert = () => {
  const ocr_warning = useSelector(
    (state: { tool: any }) => state.tool.ocr_warning
  );

  const allSelectedLanguages = useSelector(selectSelectedLanguages);

  if (
    allSelectedLanguages &&
    allSelectedLanguages.length !== 0 &&
    ocr_warning === ""
  ) {
    return null;
  }
  return (
    <div
      className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-2 text-center"
      role="alert"
    >
      {ocr_warning}
    </div>
  );
};
