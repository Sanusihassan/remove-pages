export const tool = {
  Merge_Pages: {
    title: "Merge PDF Pages",
    seoTitle: "Merge PDF Pages Online - Combine Multiple Pages Into One",
    description: "Combine multiple PDF pages into a single page efficiently",
    color: "var(--blue)",
    type: ".pdf",
    to: "/merge-pages",
    features: [
      {
        title: "Efficient Combination",
        description: "Easily combine multiple PDF pages into a single page, streamlining your documents."
      },
      {
        title: "Custom Layouts",
        description: "Specify the number of pages per sheet and arrange them in the order you prefer."
      },
      {
        title: "User-Friendly Interface",
        description: "Enjoy a simple and intuitive interface that makes merging pages a breeze."
      }
    ],
    keywords: "merge PDF pages, combine PDF pages, PDF page merger, multiple pages to one PDF, consolidate PDF pages, PDF page combiner, online PDF page merge, free PDF page merger, merge PDF pages online, combine multiple PDF pages, PDF page consolidation tool, secure PDF page merge, no registration PDF page merge, PDF page layout tool, free online PDF page combiner, merge PDF sheets, combine PDF spreads, PDF imposition tool"
  },
};

export const tools = {
  select: "Select",
  or_drop: "or drop files here",
  files: "files",
  drop_files: "Drag files here",
};

export const edit_page = {
  edit_page_titles: {
    merge_pages: "Merge Pages options",
  },
  loader_text: "please wait...",
  add_more_button: "Add more pages",
  action_buttons: {
    merge_pages: "Merge Pages",
  },
  pages: "pages",
  page: "page",
  options: {
    info: "Select a page arrangement from the dropdown menu below. This will determine how the pages are arranged in the merged PDF document.",
    placeholder: "Select Page Arrangement"
  }
};

export const downloadFile = {
  titles: {
    "merge-pages": ["PDF pages have been merged!", "PDF page has been merged!"],
  },

  btnText: {
    "merge-pages": ["Download Merged PDF pages", "Download Merged PDF page"],
  },

  backto: {
    "merge-pages": "Back To Merge Pages",
  },
};

export const footer = {
  brand: "PDFEquips",
  terms: "terms",
  conditions: "conditions",
  privacy_policy: "privacy policy",
}

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
      JPG: "Please choose a valid JPEG image file.",
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
  MISSING_FONTS: {
    message:
      "The file contains missing fontsand cannot be processed. Please ensure all fonts are embedded in the PDF file.",
    code: "ERR_MISSING_FONTS",
  },
  INVALID_IMAGE_DATA: {
    message:
      "The file contains invalid image data. Please ensure all images are properly formatted.",
    code: "ERR_INVALID_IMAGE_DATA",
  },
  SECURITY_RISK: {
    message:
      "The file contains a security risk and cannot be processed. Please choose a valid file.",
    code: "ERR_SECURITY_RISK",
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
};
