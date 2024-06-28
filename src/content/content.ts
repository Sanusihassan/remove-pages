export const tool = {
  Remove_Page: {
    title: "Remove Page",
    seoTitle: "Delete Pages from PDF Online - Page Remover Tool",
    keywords: "remove PDF pages, delete pages from PDF, PDF page remover, online PDF page removal, PDF editor, PDF modification, secure PDF tool, easy-to-use PDF tool",
    description:
      "Delete unwanted pages from your PDF document and save the modified file as a new PDF.",
    color: "#d63031",
    type: ".pdf",
    to: "/remove-pages",
    features: [
      {
        title: "Fast and Efficient",
        description: "Quickly remove unwanted pages from your PDF documents without compromising quality."
      },
      {
        title: "Secure and Private",
        description: "Your files are protected with SSL encryption and deleted from our servers immediately after processing."
      },
      {
        title: "Easy-to-Use",
        description: "User-friendly interface that allows you to remove pages from your PDF with just a few clicks."
      }
    ]
  },
};


export const edit_page = {
  edit_page_titles: {
    remove_pages: "Remove Pages options",
  },
  loader_text: "please wait...",
  add_more_button: "Add more files",
  action_buttons: {
    remove_pages: "Remove Pages",
  },
  pages: "pages",
  page: "page",
  // give me 5 verieties of this object with the same name i.e remove_pages_options but translate the string values to ar, es, fr, hi, zh respectively
  remove_pages_options: {
    info: "To delete pages from the document, click on them. You can also use the “shift” key to select multiple pages at once.",
    total_pages: "Total pages",
    pages_to_remove: "Pages to remove: ",
    placeholder: "example: 2,8-32"
  },
};

export const tools = {
  select: "Select",
  or_drop: "or drop files here",
  files: "files",
  drop_files: "Drag files here",
};
export const downloadFile = {
  titles: {
    "remove-pages": ["Your pages have been successfully removed!"],
  },

  btnText: {
    "remove-pages": ["Download Modified PDF", "Download Modified files"],
  },

  backto: {
    "remove-pages": "Back To Remove Pages",
  },
};

export const footer = {
  brand: "PDFEquips",
  terms: "terms",
  conditions: "conditions",
  privacy_policy: "privacy policy",
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
