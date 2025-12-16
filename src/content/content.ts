// remove all unncessassary stuff.
export type ToolType = {
  title: string;
  seoTitle: string;
  description: string;
  color: string;
  type: string;
  to: "/pdf-to-powerpoint" | "/word-to-pdf" | "/powerpoint-to-pdf" | "/excel-to-pdf" | "/html-to-pdf" | "/pdf-to-word" | "/pdf-to-excel" | "/pdf-to-pdf-a" | "/pdf-to-text";
  keywords: string;
  features: {
    title: string;
    description: string;
  }[]
};

type Tool = {
  PDF_to_Powerpoint: ToolType;
  WORD_to_PDF: ToolType;
  POWERPOINT_to_PDF: ToolType;
  EXCEL_to_PDF: ToolType;
  HTML_to_PDF: ToolType;
  PDF_to_WORD: ToolType;
  PDF_to_EXCEL: ToolType;
  PDF_to_PDF_A: ToolType;
  PDF_to_Text: ToolType;
};


export const tool: Tool = {
  PDF_to_Powerpoint: {
    title: "PDF to Powerpoint",
    seoTitle: "Convert PDF to PowerPoint - Free Online Converter",
    description: "Convert PDF files to editable Powerpoint presentations",
    color: "#C13B1B",
    type: ".pdf",
    to: "/pdf-to-powerpoint",
    features: [
      {
        title: "Convert PDF to PowerPoint with a Single Click",
        description: "Quickly convert PDF documents to PowerPoint presentations using our online converter, ensuring easy sharing and storage. Maintain the original formatting and layout of all slides."
      },
      {
        title: "Convert PDF to PowerPoint quickly and for free",
        description: "PDFEquips converts PDF files to PowerPoint PPT (ppt or pptx) format in just a few seconds. Plus, it's a completely free online tool that doesn't require any installation or login, and it doesn't have watermarks."
      },
      {
        title: "Simple Conversion from PDF to PowerPoint",
        description: "With our PDF to PowerPoint converter, you don't have to navigate through settings and options. Just upload the file, sit back, relax, and enjoy the show!"
      }
    ],
    keywords: "PDF to PowerPoint, convert PDF to PPT, PDF to PPT converter, free PDF to PowerPoint, online PDF to PowerPoint, PDF to PPTX, convert PDF to PowerPoint online, PDF to PPT free, PDF to PPTX converter, PDF to PPT tool, PDF to PPT online converter, PDF to PowerPoint free, convert PDF to PPT free, online PDF to PPT, free PDF to PPTX, convert PDF to PPT instantly, PDF to PowerPoint free tool"
  },
  WORD_to_PDF: {
    title: "WORD to PDF",
    seoTitle: "Convert Word to PDF - Free Online Converter",
    description: "Convert Microsoft Word files to PDF documents",
    color: "#1B5EBE",
    type: ".docx",
    to: "/word-to-pdf",
    features: [
      {
        title: "Easy to use",
        description: "Regardless of your role - whether you're a worker, student, or teacher - our PDF tools are easy to use Converting WORD files to PDF documents is simple and only requires a few clicks"
      },
      {
        title: "Simple and fast Conversion",
        description: "Thanks to its advanced method of preserving original layouts and styles, PDFEquips ensures smooth WORD to PDF conversions. Enjoy fast operations without compromising document integrity."
      },
      {
        title: "Convert one WORD file or multiple WORD files",
        description: "You can easily convert one or multiple WORD files hassle-free using PDFEquips Our direct tools ensure quick and accurate conversion, saving you time and effort"
      }
    ],
    keywords: "Word to PDF, convert Word to PDF, free Word to PDF, Word to PDF converter, online Word to PDF, Word to PDF free, DOCX to PDF, Word to PDF online converter, Word to PDF tool, convert DOCX to PDF, free DOCX to PDF converter, Word document to PDF, convert Word file to PDF, Word to PDF no registration, free Word to PDF tool, Word to PDF online free, fast Word to PDF conversion, Microsoft Word to PDF"
  },
  POWERPOINT_to_PDF: {
    title: "POWERPOINT to PDF",
    seoTitle: "Convert PowerPoint to PDF - Free Online Converter",
    description: "Convert Microsoft Powerpoint files to PDF documents",
    color: "#C13B1B",
    type: ".pptx",
    to: "/powerpoint-to-pdf",
    features: [
      {
        title: "Convert PowerPoint to PDF with a Single Click",
        description: "Quickly convert PowerPoint presentations to PDF documents using our online converter, ensuring easy sharing and storage Maintain the original formatting and layout of all slides"
      },
      {
        title: "Convert Powerpoint to PDF quickly and for free",
        description: "PDFEquips converts PowerPoint PPT (ppt or pptx) files to PDF in just a few seconds Plus, it's a completely free online tool that doesn't require any installation or login, and it doesn't have watermarks"
      },
      {
        title: "Simple Conversion from PowerPoint to PDF",
        description: "With our PPT to PDF converter, you don't have to navigate through settings and options Just upload the file, sit back, relax, and enjoy the show!"
      }
    ],
    keywords: "PowerPoint to PDF, convert PowerPoint to PDF, free PowerPoint to PDF, PPT to PDF converter, online PowerPoint to PDF, PPT to PDF free, PowerPoint to PDF online converter, PPT to PDF tool, convert PPTX to PDF, free PPT to PDF converter, PowerPoint presentation to PDF, convert PPT file to PDF, PPT to PDF no registration, free PPTX to PDF tool, PowerPoint to PDF online free, fast PowerPoint to PDF conversion, Microsoft PowerPoint to PDF"
  },
  EXCEL_to_PDF: {
    title: "EXCEL to PDF",
    seoTitle: "Convert Excel to PDF - Free Online Converter",
    description: "Convert Microsoft Excel files to PDF documents",
    color: "#10793F",
    type: ".xlsx",
    to: "/excel-to-pdf",
    features: [
      {
        title: "Easy-to-use converter from Excel to PDF",
        description: "An appropriate converter to convert XLS, XLSX files to PDF format makes it easy to share and securely store them Protect your data from changes and enjoy access to your Excel files on any device, whether you have Microsoft Office or not"
      },
      {
        title: "Fast and free online conversion tool",
        description: "PDFEquips is a completely free online tool for converting Excel (xls or xlsx) files to PDF No installation or sign-up is required, and no watermarks are added Additionally, it converts large Excel files in just a few seconds"
      },
      {
        title: "Safe conversion from XLS to PDF",
        description: "Your files are protected with robust TLS encryption (Transport Layer Security), and all Excel and PDF files are automatically deleted from our servers after one hour For more information, please refer to our privacy policy"
      }
    ],
    keywords: "Excel to PDF, convert Excel to PDF, free Excel to PDF, XLS to PDF converter, online Excel to PDF, XLSX to PDF free, Excel to PDF online converter, Excel to PDF tool, convert XLSX to PDF, free XLS to PDF converter, Excel spreadsheet to PDF, convert Excel file to PDF, Excel to PDF no registration, free Excel to PDF tool, Excel to PDF online free, fast Excel to PDF conversion, Microsoft Excel to PDF"
  },
  HTML_to_PDF: {
    title: "HTML to PDF",
    seoTitle: "Convert HTML to PDF - Free Online Converter",
    description: "Convert HTML web pages to PDF documents",
    color: "rgb(228, 77, 38)",
    type: ".html",
    to: "/html-to-pdf",
    features: [
      {
        title: "Convert instantly, no sign-up required.",
        description: "No need to register or provide any information to convert your HTML to PDF. Our converter is free for everyone and delivers quick results."
      },
      {
        title: "Secure document management.",
        description: "Your downloads and generated PDF files are processed with TLS encryption for added security. Rest assured that your data privacy is protected. Check our privacy policy for more information."
      },
      {
        title: "Cloud-based processing.",
        description: "Enjoy the convenience of cloud-based processing for HTML to PDF conversions. Our online service ensures fast and efficient conversion without slowing down your computer. Access our service from anywhere and at any time."
      }
    ],
    keywords: "HTML to PDF, convert HTML to PDF, free HTML to PDF, HTML to PDF converter, online HTML to PDF, HTML to PDF free, web page to PDF, convert web page to PDF, HTML to PDF tool, HTML to PDF online converter, free HTML to PDF converter, web page to PDF converter, convert HTML file to PDF, HTML to PDF no registration, free HTML to PDF tool, HTML to PDF online free, fast HTML to PDF conversion, web to PDF"
  },
  PDF_to_WORD: {
    title: "PDF to WORD",
    seoTitle: "Convert PDF to Word - Free Online Converter",
    description: "Convert PDF files to Microsoft Word documents",
    color: "#1B5EBE",
    type: ".pdf",
    to: "/pdf-to-word",
    features: [
      {
        title: "Simple and fast Conversion",
        description: "Thanks to its advanced method of preserving original layouts and styles, PDFEquips ensures smooth PDF to Word conversions. Enjoy fast operations without compromising document integrity."
      },
      {
        title: "Easy to use",
        description: "Regardless of your role - whether you're a worker, student, or teacher - our PDF tools are easy to use Converting PDF files to Word documents is simple and only requires a few clicks"
      },
      {
        title: "Convert one PDF file or multiple PDF files",
        description: "You can easily convert one or multiple PDF files hassle-free using PDFEquips Our direct tools ensure quick and accurate conversion, saving you time and effort"
      }
    ],
    keywords: "PDF to Word, convert PDF to Word, free PDF to DOCX, PDF to Word converter, online PDF to Word, PDF to DOCX free, PDF to DOCX online converter, PDF to Word tool, convert PDF to DOC, free PDF to DOC converter, PDF document to Word, convert PDF file to Word, PDF to DOCX no registration, free PDF to Word tool, PDF to Word online free, fast PDF to Word conversion, PDF to Microsoft Word"
  },
  PDF_to_EXCEL: {
    title: "PDF to EXCEL",
    seoTitle: "Convert PDF to Excel - Free Online Converter",
    description: "Convert PDF files to Microsoft Excel documents",
    color: "#10793F",
    type: ".pdf",
    to: "/pdf-to-excel",
    features: [
      {
        title: "Fast and free online conversion tool",
        description: "PDFEquips is a completely free online tool for converting PDF files to Excel (XLS or XLSX). No installation or sign-up is required, and no watermarks are added. Additionally, it converts large PDF files in just a few seconds."
      },
      {
        title: "Easy-to-use converter from PDF to Excel",
        description: "An appropriate converter to convert PDF files to XLS or XLSX format makes it easy to share and securely store them. Protect your data from changes and enjoy access to your Excel files on any device, whether you have Microsoft Office or not."
      },
      {
        title: "Safe conversion from PDF to XLS",
        description: "Your files are protected with robust TLS encryption (Transport Layer Security), and all PDF and Excel files are automatically deleted from our servers after one hour. For more information, please refer to our privacy policy."
      }
    ],
    keywords: "PDF to Excel, convert PDF to Excel, free PDF to XLSX, PDF to Excel converter, online PDF to Excel, PDF to XLS free, PDF to XLSX online converter, PDF to Excel tool, convert PDF to XLS, free PDF to Excel converter, PDF document to Excel, convert PDF file to Excel, PDF to XLSX no registration, free PDF to Excel tool, PDF to Excel online free, fast PDF to Excel conversion, PDF to Microsoft Excel"
  },
  PDF_to_PDF_A: {
    title: "PDF to PDF/A",
    seoTitle: "Convert PDF to PDF/A - Free Archival Converter",
    description: "Convert PDF files to PDF/A format for long-term archiving",
    color: "#000000",
    type: ".pdf",
    to: "/pdf-to-pdf-a",
    features: [
      {
        title: "Maintain the integrity of documents",
        description: "Convert your PDF files to the PDF/A format and make sure that the integrity of the document, including content, structure, and appearance, is preserved"
      },
      {
        title: "Compliance with Archiving Standards",
        description: "Ensure compliance with archival standards by converting your PDF documents to the PDF/A format, which is suitable for long-term storage and legal requirements"
      },
      {
        title: "Long-Term Accessibility and Compatibility",
        description: "By converting your PDF files to the PDF/A format, you ensure long-term accessibility and compatibility with future software and systems, while minimizing the risk of format obsolescence"
      }
    ],
    keywords: "PDF to PDF/A, convert PDF to PDF/A, free PDF to PDF/A, PDF to PDF/A converter, online PDF to PDF/A, PDF to archival PDF, PDF/A conversion, convert PDF to archival format, free PDF to PDF/A converter, PDF to PDF/A tool, convert PDF to PDF/A online, PDF to archival document, PDF to PDF/A free, online PDF to PDF/A converter, PDF to PDF/A compliance, long-term PDF storage, PDF to PDF/A for archiving, PDF to PDF/A online free"
  },
  PDF_to_Text: {
    title: "PDF to Text",
    seoTitle: "Convert PDF to Text - Free Plain Text Converter",
    description: "Convert PDF files to plain text documents",
    color: "#4493e1",
    type: ".pdf",
    to: "/pdf-to-text",
    features: [
      {
        title: "Robust and Accurate Conversion",
        description: "Benefit from robust and accurate conversion capabilities, ensuring high-quality extraction of text content from PDF documents, including support for various languages like Arabic."
      },
      {
        title: "Fast Processing",
        description: "Experience fast processing speeds with our PDF to text converter, enabling quick conversion of PDF files to plain text format without compromising accuracy."
      },
      {
        title: "Preservation of Document Structure",
        description: "Convert PDF files to plain text while preserving document structure and formatting, ensuring readability and usability of the extracted text content."
      }
    ],
    keywords: "PDF to text, convert PDF to text, free PDF to text, PDF to text converter, online PDF to text, PDF to plain text, extract text from PDF, PDF to text free, PDF to text online converter, PDF to text tool, convert PDF to TXT, free PDF to text converter, PDF document to text, convert PDF file to text, PDF to TXT no registration, free PDF to text tool, PDF to text online free, fast PDF to text conversion, PDF to plain text converter"
  }
}


export const edit_page = {
  edit_page_titles: {
    split_pdf: "Split PDF options",
    compress_pdf: "Compress PDF options",
    pdf_to_powerpoint: "PDF to Powerpoint options",
    word_to_pdf: "WORD to PDF options",
    powerpoint_to_pdf: "POWERPOINT to PDF options",
    excel_to_pdf: "EXCEL to PDF options",
    html_to_pdf: "HTML to PDF options",
    pdf_to_word: "PDF to WORD options",
    pdf_to_excel: "PDF to EXCEL options",
    pdf_to_pdf_a: "PDF to PDF/A options",
    pdf_to_text: "PDF to text options",
  },
  loader_text: "please wait...",
  add_more_button: "Add more files",
  action_buttons: {
    split_pdf: "Split PDF",
    compress_pdf: "Compress PDF",
    pdf_to_powerpoint: "Convert to Powerpoint",
    word_to_pdf: "Convert to PDF",
    powerpoint_to_pdf: "Convert to PDF",
    excel_to_pdf: "Convert to PDF",
    html_to_pdf: "Convert to PDF",
    pdf_to_word: "Convert to Word",
    pdf_to_excel: "Convert to Excel",
    pdf_to_pdf_a: "Convert to PDF/A",
    pdf_to_text: "Convert to Text",
    translate_pdf: "Translate PDF",
  },
  pages: "pages",
  page: "page",
  cta: "View Plans",
  pdf_a_options: {
    info: "Select the desired PDF/A format from the dropdown menu below to convert your PDF. This will ensure the document complies with the chosen archival standard.",
    placeholder: "Choose PDF/A Format"
  },
  languageSelectContent: {
    placeholder: "Choose languages (maximum 3)",
    warning: "This document is scanned. Please select its language to ensure accurate results."
  },
  converter: {
    free: "Free",
    premium: "Premium",
    freeToolTip: "Basic conversion - limited formatting",
    premiumToolTip: "High-accuracy conversion with full style preservation"
  },
  fileNameInput: {
    label: "Output File Name (Optional)",
    placeholder: "Enter file name",
    helperText: "This will be the name of the document that gets downloaded.",
  }
};

export const tools = {
  select: "Select",
  or_drop: "or drop files here",
  files: "files",
  drop_files: "Drag files here",
};

export const downloadFile = {
  titles: {
    "split-pdf": ["PDF file has been split!"],
    "pdf-to-powerpoint": [
      "PDF files have been converted to PowerPoint!",
      "PDF file has been converted to PowerPoint!",
    ],
    "word-to-pdf": [
      "Word files have been converted to PDF!",
      "Word file has been converted to PDF!",
    ],
    "powerpoint-to-pdf": [
      "PowerPoint files have been converted to PDF!",
      "PowerPoint file has been converted to PDF!",
    ],
    "excel-to-pdf": [
      "Excel files have been converted to PDF!",
      "Excel file has been converted to PDF!",
    ],
    "html-to-pdf": [
      "HTML files have been converted to PDF!",
      "HTML file has been converted to PDF!",
    ],
    "pdf-to-word": [
      "PDF files have been converted to Word!",
      "PDF file has been converted to Word!",
    ],
    "pdf-to-excel": [
      "PDF files have been converted to Excel!",
      "PDF file has been converted to Excel!",
    ],
    "pdf-to-pdf-a": [
      "PDF files have been converted to PDF/A!",
      "PDF file has been converted to PDF/A!",
    ],
    "pdf-to-text": [
      "PDF files have been converted to Text!",
      "PDF file has been converted to Text!",
    ],
  },

  btnText: {
    "split-pdf": ["Download Split PDF files", "Download Split PDF file"],
    "pdf-to-powerpoint": [
      "Download Converted PowerPoint files",
      "Download Converted PowerPoint file",
    ],
    "word-to-pdf": [
      "Download Converted PDF files",
      "Download Converted PDF file",
    ],
    "powerpoint-to-pdf": [
      "Download Converted PDF files",
      "Download Converted PDF file",
    ],
    "excel-to-pdf": [
      "Download Converted PDF files",
      "Download Converted PDF file",
    ],
    "html-to-pdf": [
      "Download Converted PDF files",
      "Download Converted PDF file",
    ],
    "pdf-to-word": [
      "Download Converted Word files",
      "Download Converted Word file",
    ],
    "pdf-to-excel": [
      "Download Converted Excel files",
      "Download Converted Excel file",
    ],
    "pdf-to-pdf-a": [
      "Download Converted PDF/A files",
      "Download Converted PDF/A file",
    ],
    "pdf-to-text": [
      "Download Converted Text files",
      "Download Converted Text file",
    ],
  },

  backto: {
    "split-pdf": "Back To Split PDF",
    "pdf-to-powerpoint": "Back To PDF to Powerpoint",
    "word-to-pdf": "Back To Word to PDF",
    "powerpoint-to-pdf": "Back To Powerpoint to PDF",
    "excel-to-pdf": "Back To Excel to PDF",
    "html-to-pdf": "Back To HTML to PDF",
    "pdf-to-word": "Back To PDF to Word",
    "pdf-to-excel": "Back To PDF to Excel",
    "pdf-to-pdf-a": "Back To PDF to PDF-A",
    "pdf-to-text": "Back To PDF to Text",
  },
};

export const errors = {
  EMPTY_FILE: {
    message: "The file is empty. Please choose a valid file.",
    code: "ERR_EMPTY_FILE",
  },
  FILE_TOO_LARGE: {
    message:
      "The file is too large. Please choose a smaller file, or use our compress-pdf tool to reduce the file size.",
    code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
  },
  NOT_SUPPORTED_TYPE: {
    message: "The file is not a supported type.",
    types: {
      PDF: "Please choose a valid PDF file.",
      DOC: "Please choose a valid Word document file.",
      DOCX: "Please choose a valid Word document file.",
      XLS: "Please choose a valid Excel spreadsheet file.",
      XLSX: "Please choose a valid Excel spreadsheet file.",
      PPT: "Please choose a valid PowerPoint presentation file.",
      PPTX: "Please choose a valid PowerPoint presentation file.",
    },
    code: "ERR_INVALID_FILE_TYPE",
  },
  FILE_CORRUPT: {
    message:
      "The file is corrupt and cannot be processed. Please choose a valid file.",
    code: "ERR_FILE_CORRUPT",
  },
  MAX_FILES_EXCEEDED: {
    message:
      "You have exceeded the maximum number of files allowed. Please delete some files and try again.",
    code: "ERR_MAX_FILES_EXCEEDED",
  },
  NO_FILES_SELECTED: {
    message: "No files selected. Please select at least one file.",
    code: "ERR_NO_FILES_SELECTED",
  },
  UNKNOWN_ERROR: {
    message:
      "An unknown error occurred. Please try again later or contact support.",
    code: "ERR_UNKNOWN",
  },
  // i want another error like this but when only one file is uploaded
  ERR_NETWORK: {
    message:
      "A network error occurred. Please check your internet connection and try again.",
    code: "ERR_NETWORK",
  },
  ERR_UPLOAD_COUNT: {
    message: "Please upload at least two files to merge.",
    code: "ERR_UPLOAD_COUNT",
  },
  PASSWORD_REQUIRED: {
    message: "PDF requires a password.",
    code: "PASSWORD_REQUIRED",
  },

  INCORRECT_PASSWORD: {
    message: "The password you entered is incorrect.",
    code: "INCORRECT_PASSWORD",
  },
  MAX_DAILY_USAGE: {
    message:
      "You’ve reached your daily usage limit. Please upgrade your plan to continue using this feature without interruption.",
    code: "MAX_DAILY_USAGE",
  },
  alerts: {
    maxFiles: "Max 15 files. Subscribe for more!",
    singleFileSize:
      "file size must be under 100 MB. Upgrade to upload bigger files!",
    totalPages: "Max 1,500 pages. Upgrade now!",
    perFilePages: "500 pages per file. Unlock more now!",
    fileSize: "50MB per file. Upgrade for more!",
  },
};

export const adBlockerContent = {
  title: "Ad Blocker Detected",
  description: "We noticed you're using an ad blocker. Please consider disabling it or upgrade to premium for an ad-free experience!",
  reloadPage: "Reload Page",
  upgradeToPremium: "Upgrade to Premium"
}
export type adBlockerContentType = typeof adBlockerContent;

export const languages = {
  abk: {
    name: "Abkhaz",
    nativeName: "аҧсуа",
  },
  aar: {
    name: "Afar",
    nativeName: "Afaraf",
  },
  afr: {
    name: "Afrikaans",
    nativeName: "Afrikaans",
  },
  aka: {
    name: "Akan",
    nativeName: "Akan",
  },
  sqi: {
    name: "Albanian",
    nativeName: "Shqip",
  },
  amh: {
    name: "Amharic",
    nativeName: "አማርኛ",
  },
  ara: {
    name: "Arabic",
    nativeName: "العربية",
  },
  arg: {
    name: "Aragonese",
    nativeName: "Aragonés",
  },
  hye: {
    name: "Armenian",
    nativeName: "Հայերեն",
  },
  asm: {
    name: "Assamese",
    nativeName: "অসমীয়া",
  },
  ava: {
    name: "Avaric",
    nativeName: "авар мацӀ, магӀарул мацӀ",
  },
  ave: {
    name: "Avestan",
    nativeName: "avesta",
  },
  aym: {
    name: "Aymara",
    nativeName: "aymar aru",
  },
  aze: {
    name: "Azerbaijani",
    nativeName: "azərbaycan dili",
  },
  bam: {
    name: "Bambara",
    nativeName: "bamanankan",
  },
  bak: {
    name: "Bashkir",
    nativeName: "башҡорт теле",
  },
  eus: {
    name: "Basque",
    nativeName: "euskara, euskera",
  },
  bel: {
    name: "Belarusian",
    nativeName: "Беларуская",
  },
  ben: {
    name: "Bengali",
    nativeName: "বাংলা",
  },
  bis: {
    name: "Bislama",
    nativeName: "Bislama",
  },
  bos: {
    name: "Bosnian",
    nativeName: "bosanski jezik",
  },
  bre: {
    name: "Breton",
    nativeName: "brezhoneg",
  },
  bul: {
    name: "Bulgarian",
    nativeName: "български език",
  },
  mya: {
    name: "Burmese",
    nativeName: "ဗမာစာ",
  },
  cha: {
    name: "Chamorro",
    nativeName: "Chamoru",
  },
  che: {
    name: "Chechen",
    nativeName: "нохчийн мотт",
  },
  zho: {
    name: "Chinese",
    nativeName: "中文 (Zhōngwén), 汉语, 漢語",
  },
  chv: {
    name: "Chuvash",
    nativeName: "чӑваш чӗлхи",
  },
  cor: {
    name: "Cornish",
    nativeName: "Kernewek",
  },
  cos: {
    name: "Corsican",
    nativeName: "corsu, lingua corsa",
  },
  cre: {
    name: "Cree",
    nativeName: "ᓀᐦᐃᔭᐍᐏᐣ",
  },
  hrv: {
    name: "Croatian",
    nativeName: "hrvatski",
  },
  ces: {
    name: "Czech",
    nativeName: "česky, čeština",
  },
  dan: {
    name: "Danish",
    nativeName: "dansk",
  },
  eng: {
    name: "English",
    nativeName: "English",
  },
  epo: {
    name: "Esperanto",
    nativeName: "Esperanto",
  },
  est: {
    name: "Estonian",
    nativeName: "eesti, eesti keel",
  },
  ewe: {
    name: "Ewe",
    nativeName: "Eʋegbe",
  },
  fao: {
    name: "Faroese",
    nativeName: "føroyskt",
  },
  fij: {
    name: "Fijian",
    nativeName: "vosa Vakaviti",
  },
  fin: {
    name: "Finnish",
    nativeName: "suomi, suomen kieli",
  },
  fra: {
    name: "French",
    nativeName: "français, langue française",
  },
  ful: {
    name: "Fula; Fulah; Pulaar; Pular",
    nativeName: "Fulfulde, Pulaar, Pular",
  },
  glg: {
    name: "Galician",
    nativeName: "Galego",
  },
  kat: {
    name: "Georgian",
    nativeName: "ქართული",
  },
  deu: {
    name: "German",
    nativeName: "Deutsch",
  },
  grn: {
    name: "Guaraní",
    nativeName: "Avañeẽ",
  },
  guj: {
    name: "Gujarati",
    nativeName: "ગુજરાતી",
  },
  hau: {
    name: "Hausa",
    nativeName: "Hausa, هَوُسَ",
  },
  heb: {
    name: "Hebrew (modern)",
    nativeName: "עברית",
  },
  her: {
    name: "Herero",
    nativeName: "Otjiherero",
  },
  hin: {
    name: "Hindi",
    nativeName: "हिन्दी, हिंदी",
  },
  hmo: {
    name: "Hiri Motu",
    nativeName: "Hiri Motu",
  },
  hun: {
    name: "Hungarian",
    nativeName: "Magyar",
  },
  ind: {
    name: "Indonesian",
    nativeName: "Bahasa Indonesia",
  },
  gle: {
    name: "Irish",
    nativeName: "Gaeilge",
  },
  ibo: {
    name: "Igbo",
    nativeName: "Asụsụ Igbo",
  },
  ipk: {
    name: "Inupiaq",
    nativeName: "Iñupiaq, Iñupiatun",
  },
  ido: {
    name: "Ido",
    nativeName: "Ido",
  },
  isl: {
    name: "Icelandic",
    nativeName: "Íslenska",
  },
  ita: {
    name: "Italian",
    nativeName: "Italiano",
  },
  iku: {
    name: "Inuktitut",
    nativeName: "ᐃᓄᒃᑎᑐᑦ",
  },
  jpn: {
    name: "Japanese",
    nativeName: "日本語 (にほんご／にっぽんご)",
  },
  jav: {
    name: "Javanese",
    nativeName: "basa Jawa",
  },
  kan: {
    name: "Kannada",
    nativeName: "ಕನ್ನಡ",
  },
  kau: {
    name: "Kanuri",
    nativeName: "Kanuri",
  },
  kas: {
    name: "Kashmiri",
    nativeName: "कश्मीरी, كشميري‎",
  },
  kaz: {
    name: "Kazakh",
    nativeName: "Қазақ тілі",
  },
  kin: {
    name: "Kinyarwanda",
    nativeName: "Ikinyarwanda",
  },
  kom: {
    name: "Komi",
    nativeName: "коми кыв",
  },
  kon: {
    name: "Kongo",
    nativeName: "KiKongo",
  },
  kor: {
    name: "Korean",
    nativeName: "한국어 (韓國語), 조선말 (朝鮮語)",
  },
  kur: {
    name: "Kurdish",
    nativeName: "Kurdî, كوردی‎",
  },
  lat: {
    name: "Latin",
    nativeName: "latine, lingua latina",
  },
  lug: {
    name: "Luganda",
    nativeName: "Luganda",
  },
  lin: {
    name: "Lingala",
    nativeName: "Lingála",
  },
  lao: {
    name: "Lao",
    nativeName: "ພາສາລາວ",
  },
  lit: {
    name: "Lithuanian",
    nativeName: "lietuvių kalba",
  },
  lub: {
    name: "Luba-Katanga",
    nativeName: "",
  },
  lav: {
    name: "Latvian",
    nativeName: "latviešu valoda",
  },
  glv: {
    name: "Manx",
    nativeName: "Gaelg, Gailck",
  },
  mkd: {
    name: "Macedonian",
    nativeName: "македонски јазик",
  },
  mlg: {
    name: "Malagasy",
    nativeName: "Malagasy fiteny",
  },
  msa: {
    name: "Malay",
    nativeName: "bahasa Melayu, بهاس ملايو‎",
  },
  mal: {
    name: "Malayalam",
    nativeName: "മലയാളം",
  },
  mlt: {
    name: "Maltese",
    nativeName: "Malti",
  },
  mri: {
    name: "Māori",
    nativeName: "te reo Māori",
  },
  mar: {
    name: "Marathi (Marāṭhī)",
    nativeName: "मराठी",
  },
  mah: {
    name: "Marshallese",
    nativeName: "Kajin M̧ajeļ",
  },
  mon: {
    name: "Mongolian",
    nativeName: "монгол",
  },
  nau: {
    name: "Nauru",
    nativeName: "Ekakairũ Naoero",
  },
  nob: {
    name: "Norwegian Bokmål",
    nativeName: "Norsk bokmål",
  },
  nde: {
    name: "North Ndebele",
    nativeName: "isiNdebele",
  },
  nep: {
    name: "Nepali",
    nativeName: "नेपाली",
  },
  ndo: {
    name: "Ndonga",
    nativeName: "Owambo",
  },
  nno: {
    name: "Norwegian Nynorsk",
    nativeName: "Norsk nynorsk",
  },
  nor: {
    name: "Norwegian",
    nativeName: "Norsk",
  },
  nbl: {
    name: "South Ndebele",
    nativeName: "isiNdebele",
  },
  oci: {
    name: "Occitan",
    nativeName: "Occitan",
  },
  orm: {
    name: "Oromo",
    nativeName: "Afaan Oromoo",
  },
  ori: {
    name: "Oriya",
    nativeName: "ଓଡ଼ିଆ",
  },
  pli: {
    name: "Pāli",
    nativeName: "पाऴि",
  },
  fas: {
    name: "Persian",
    nativeName: "فارسی",
  },
  pol: {
    name: "Polish",
    nativeName: "polski",
  },
  por: {
    name: "Portuguese",
    nativeName: "Português",
  },
  que: {
    name: "Quechua",
    nativeName: "Runa Simi, Kichwa",
  },
  roh: {
    name: "Romansh",
    nativeName: "rumantsch grischun",
  },
  rus: {
    name: "Russian",
    nativeName: "русский язык",
  },
  san: {
    name: "Sanskrit (Saṁskṛta)",
    nativeName: "संस्कृतम्",
  },
  srd: {
    name: "Sardinian",
    nativeName: "sardu",
  },
  snd: {
    name: "Sindhi",
    nativeName: "सिन्धी, سنڌي، سندھی‎",
  },
  sme: {
    name: "Northern Sami",
    nativeName: "Davvisámegiella",
  },
  smo: {
    name: "Samoan",
    nativeName: "gagana faa Samoa",
  },
  sag: {
    name: "Sango",
    nativeName: "yângâ tî sängö",
  },
  srp: {
    name: "Serbian",
    nativeName: "српски језик",
  },
  sna: {
    name: "Shona",
    nativeName: "chiShona",
  },
  slk: {
    name: "Slovak",
    nativeName: "slovenčina",
  },
  slv: {
    name: "Slovene",
    nativeName: "slovenščina",
  },
  som: {
    name: "Somali",
    nativeName: "Soomaaliga, af Soomaali",
  },
  sot: {
    name: "Southern Sotho",
    nativeName: "Sesotho",
  },
  sun: {
    name: "Sundanese",
    nativeName: "Basa Sunda",
  },
  swa: {
    name: "Swahili",
    nativeName: "Kiswahili",
  },
  ssw: {
    name: "Swati",
    nativeName: "SiSwati",
  },
  swe: {
    name: "Swedish",
    nativeName: "svenska",
  },
  tam: {
    name: "Tamil",
    nativeName: "தமிழ்",
  },
  tel: {
    name: "Telugu",
    nativeName: "తెలుగు",
  },
  tgk: {
    name: "Tajik",
    nativeName: "тоҷикӣ, toğikī, تاجیکی‎",
  },
  tha: {
    name: "Thai",
    nativeName: "ไทย",
  },
  tir: {
    name: "Tigrinya",
    nativeName: "ትግርኛ",
  },
  bod: {
    name: "Tibetan Standard, Tibetan, Central",
    nativeName: "བོད་ཡིག",
  },
  tuk: {
    name: "Turkmen",
    nativeName: "Türkmen, Түркмен",
  },
  tgl: {
    name: "Tagalog",
    nativeName: "Wikang Tagalog, ᜏᜒᜃᜅ᜔ ᜆᜄᜎᜓᜄ᜔",
  },
  tsn: {
    name: "Tswana",
    nativeName: "Setswana",
  },
  tur: {
    name: "Turkish",
    nativeName: "Türkçe",
  },
  tso: {
    name: "Tsonga",
    nativeName: "Xitsonga",
  },
  tat: {
    name: "Tatar",
    nativeName: "татарча, tatarça, تاتارچا‎",
  },
  twi: {
    name: "Twi",
    nativeName: "Twi",
  },
  tah: {
    name: "Tahitian",
    nativeName: "Reo Tahiti",
  },
  ukr: {
    name: "Ukrainian",
    nativeName: "українська",
  },
  urd: {
    name: "Urdu",
    nativeName: "اردو",
  },
  uzb: {
    name: "Uzbek",
    nativeName: "zbek, Ўзбек, أۇزبېك‎",
  },
  ven: {
    name: "Venda",
    nativeName: "Tshivenḓa",
  },
  vie: {
    name: "Vietnamese",
    nativeName: "Tiếng Việt",
  },
  vol: {
    name: "Volapük",
    nativeName: "Volapük",
  },
  wln: {
    name: "Walloon",
    nativeName: "Walon",
  },
  cym: {
    name: "Welsh",
    nativeName: "Cymraeg",
  },
  wol: {
    name: "Wolof",
    nativeName: "Wollof",
  },
  fry: {
    name: "Western Frisian",
    nativeName: "Frysk",
  },
  xho: {
    name: "Xhosa",
    nativeName: "isiXhosa",
  },
  yid: {
    name: "Yiddish",
    nativeName: "ייִדיש",
  },
  yor: {
    name: "Yoruba",
    nativeName: "Yorùbá",
  },
  ell: {
    name: "Greek",
    nativeName: "Ελληνικά",
  },
  spa: {
    name: "Spanish",
    nativeName: "Español",
  },
  nld: {
    name: "Dutch",
    nativeName: "Nederlands",
  },
  ron: {
    name: "Romanian",
    nativeName: "Română",
  },
};