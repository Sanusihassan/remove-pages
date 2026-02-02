export const tool = {
  Remove_Page: {
    title: "Remove Page",
    seoTitle: "Delete Pages from PDF Online - Page Remover Tool",
    keywords: "remove PDF pages, delete pages from PDF, PDF page remover, online PDF page removal, PDF editor, PDF modification, secure PDF tool, easy-to-use PDF tool",
    description: "Delete unwanted pages from your PDF document and save the modified file as a new PDF.",
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
  }
};

export const edit_page = {
  edit_page_titles: {
    remove_pages: "Remove Pages options"
  },
  loader_text: "please wait...",
  add_more_button: "Add more files",
  action_buttons: {
    remove_pages: "Remove Pages"
  },
  pages: "pages",
  page: "page",
  filenameOptions: {
    label: "Output File Name (Optional)",
    placeholder: "Enter file name",
    helperText: "This will be the name of the compressed PDF when downloaded.",
    cta: "View Plans",
    upgradeNotice: {
      msg: "Levels from 2.0 to 10.0 are available with premium.",
      cta: "Upgrade now",
    },
  },
  fileCard: {
    page: "page",
    pages: "pages",
    remove_file: "Remove file",
    loading: "Loading...",
    pages_to_remove: "Pages to remove:",
    remaining: "Remaining:",
    warning_cannot_remove_all: "⚠️ You cannot remove all pages from the document.",
  },
  options: {
    info: 'To delete pages from the document, click on them. You can also use the "shift" key to select multiple pages at once.',
    total_pages: "Total pages",
    pages_to_remove: "Pages to remove:",
    placeholder: "example: 2,8-32",
    helper_text: "Click on pages above or type page numbers here (e.g., 2,5,8-12)",
    summary_pages_to_remove: "Pages to remove:",
    summary_remaining_pages: "Remaining pages:",
    warning_cannot_remove_all: "⚠️ You cannot remove all pages from the document.",
  },
};

export const downloadFile = {
  titles: {
    "remove-pages": [
      "Your pages have been successfully removed!"
    ]
  },
  btnText: {
    "remove-pages": [
      "Download Modified PDF",
      "Download Modified files"
    ]
  },
  backto: {
    "remove-pages": "Back To Remove Pages"
  },
};

export type ToolType = {
  title: string;
  seoTitle: string;
  description: string;
  keywords: string;
  color: string;
  type: string;
  to: string;
  features: {
    title: string;
    description: string;
  }[];
}
export type Paths = "remove-pages"

export const tools = {
  select: "Select",
  or_drop: "or drop files here",
  files: "files",
  drop_files: "Drag files here",
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
  MAX_PAGES_EXCEEDED: {
    message: "The PDF exceeds the maximum page limit of 50 pages.",
    code: "ERR_MAX_PAGES_EXCEEDED",
  },
  alerts: {
    // Frontend validation
    maxFiles: "Max 15 files. Subscribe for more!",
    singleFileSize: "File size must be under 100 MB. Upgrade to upload bigger files!",
    perFilePages: "500 pages per file. Unlock more now!",
    fileSize: "50MB per file. Upgrade for more!",
    serverError: "Server error. Please try again later.",
    // Backend file validation
    fileNotUploaded: "No file was uploaded. Please select a file.",
    fileEmpty: "The uploaded file is empty. Please select a valid file.",
    fileTooLarge: "File exceeds 200MB limit. Upgrade for larger files!",
    invalidFileType: "Invalid file type. Please upload a supported format.",
    fileCorrupt: "File appears to be corrupted. Please try another file.",
    insufficientUnits: "Not enough conversion units. Upgrade or recharge!",
    // Auth errors
    authRequired: "Please log in to use premium features.",
    sessionExpired: "Your session has expired. Please log in again.",
    invalidToken: "Authentication failed. Please log in again.",
    userNotFound: "Account not found. Please log in again.",
    authError: "Authentication error. Please try again.",
    notPasswordProtected: "One or more files are not password protected",

    // PDF-specific errors
    invalidPdf: "Invalid or corrupted PDF file.",
    pdfNotEncrypted: "This PDF is not password-protected and doesn't need to be unlocked.",

    // Lock-PDF errors
    noLockPassword: "Please provide a password to lock the PDF.",
    lockingFailed: "Failed to lock PDF. Please try again.",

    // Unlock-PDF errors
    noPasswordsProvided: "Please provide passwords for the locked PDFs.",
    unlockingFailed: "Failed to unlock PDF. Please check your password and try again.",
    incorrectPassword: "Incorrect password. Please try again.",
    passwordRequired: "This PDF is password-protected. Please enter the password.",
    tooManyFiles: "Too many files uploaded",

    // Settings errors
    invalidSettings: "Invalid settings provided. Please refresh and try again.",
    conversionFailed: "Conversion failed. Please try again.",
  },
};

export const adBlockerContent = {
  title: "Ad Blocker Detected",
  description: "We noticed you're using an ad blocker. Please consider disabling it or upgrade to premium for an ad-free experience!",
  reloadPage: "Reload Page",
  upgradeToPremium: "Upgrade to Premium"
}
export type adBlockerContentType = typeof adBlockerContent;