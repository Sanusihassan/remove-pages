import { useSelector } from "react-redux";

export const WarningAlert = () => {
  const warning_alert = useSelector(
    (state: { tool: any }) => state.tool.ocr_warning
  );

  if (!warning_alert) {
    return null;
  }
  return (
    <div
      className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-2 text-center"
      role="alert"
    >
      {warning_alert}
    </div>
  );
};
