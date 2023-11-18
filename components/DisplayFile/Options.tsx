import type { edit_page as _ } from "../../content";

export interface OptionsProps {
  layout?: string;
  edit_page: _;
}
/**
 * give me the implementation of this tsx component, the orc_pdf schema looks somthing like this: 
 * orc_options: {
    info: string;
    document_languages: string;
    input_placeholder: string;
}
  it consist of 3 rows first row for the info add an alert-info i already have bootstrap use it for styling.
  the second row is for the input select it's a select 
 */
const ORCPDF = ({ orc_pdf }: { orc_pdf: _["orc_options"] }) => {
  return <></>;
};

const Options = ({ layout, edit_page }: OptionsProps) => {
  return <></>;
};

export default Options;
