import type {
  tool as _tool,
  tools as _tools,
  edit_page as _edit_page,
  footer as _footer,
  errors as _errors,
  downloadFile as _downloadFile,
  landing_page as _landing_page,
} from "../content";

export const tool: _tool = {
  Merge_Pages: {
    title: "دمج صفحات PDF",
    seoTitle: "دمج صفحات PDF عبر الإنترنت - دمج صفحات متعددة في صفحة واحدة",
    description: "دمج صفحات PDF متعددة في صفحة واحدة بكفاءة",
    color: "var(--blue)",
    type: ".pdf",
    to: "/merge-pages",
    features: [
      {
        title: "دمج فعال",
        description: "قم بدمج صفحات PDF متعددة في صفحة واحدة بسهولة، مما يبسط مستنداتك."
      },
      {
        title: "تخطيطات مخصصة",
        description: "حدد عدد الصفحات لكل ورقة ورتبها بالترتيب الذي تفضله."
      },
      {
        title: "واجهة سهلة الاستخدام",
        description: "استمتع بواجهة بسيطة وبديهية تجعل دمج الصفحات سهلاً."
      }
    ],
    keywords: "دمج صفحات PDF، جمع صفحات PDF، أداة دمج صفحات PDF، صفحات متعددة إلى PDF واحد، توحيد صفحات PDF، جامع صفحات PDF، دمج صفحات PDF عبر الإنترنت، أداة دمج صفحات PDF مجانية، دمج صفحات PDF عبر الإنترنت، دمج صفحات PDF متعددة، أداة توحيد صفحات PDF، دمج آمن لصفحات PDF، دمج صفحات PDF بدون تسجيل، أداة تخطيط صفحات PDF، جامع صفحات PDF مجاني عبر الإنترنت، دمج أوراق PDF، دمج صفحات PDF مزدوجة، أداة ترتيب PDF"
  },
};
export const tools: _tools = {
  select: "اختر",
  or_drop: "أو قم بإسقاط الملفات هنا",
  files: "ملفات",
  drop_files: "قم بوضع الملفات هنا",
};

export const edit_page: _edit_page = {
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
    info: "حدد ترتيب الصفحات من القائمة المنسدلة أدناه. سيحدد هذا كيفية ترتيب الصفحات في مستند PDF المدمج.",
    placeholder: "حدد ترتيب الصفحات"
  }
};

export const downloadFile: _downloadFile = {
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

export const footer: _footer = {
  brand: "PDFEquips",
  terms: "الشروط",
  conditions: "والأحكام",
  privacy_policy: "سياسة الخصوصية",
};

export const errors: _errors = {
  EMPTY_FILE: {
    message: "الملف فارغ. يرجى اختيار ملف صالح.",
    code: "ERR_EMPTY_FILE",
  },
  FILE_TOO_LARGE: {
    message:
      "حجم الملف كبير جدًا. يرجى اختيار ملف أصغر، أو استخدام أداة ضغط PDF الخاصة بنا لتقليل حجم الملف.",
    code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
  },
  NOT_SUPPORTED_TYPE: {
    message: "الملف غير مدعوم.",
    types: {
      PDF: "يرجى اختيار ملف PDF صالح.",
      JPG: "يرجى اختيار ملف صورة JPEG صالح.",
      DOC: "يرجى اختيار ملف مستند Word صالح.",
      DOCX: "يرجى اختيار ملف مستند Word صالح.",
      XLS: "يرجى اختيار ملف جدول بيانات Excel صالح.",
      XLSX: "يرجى اختيارملف جدول بيانات Excel صالح.",
      PPT: "يرجى اختيار ملف عرض تقديمي PowerPoint صالح.",
      PPTX: "يرجى اختيار ملف عرض تقديمي PowerPoint صالح.",
    },
    code: "ERR_INVALID_FILE_TYPE",
  },
  FILE_CORRUPT: {
    message: "الملف تالف ولا يمكن معالجته. يرجى اختيار ملف صالح.",
    code: "ERR_FILE_CORRUPT",
  },
  MISSING_FONTS: {
    message:
      "الملف يحتوي على خطوط أحرف مفقودة. يرجى التأكد من تضمين جميع الخطوط في ملف PDF.",
    code: "ERR_MISSING_FONTS",
  },
  INVALID_IMAGE_DATA: {
    message:
      "الملف يحتوي على بيانات صورة غير صالحة. يرجى التأكد من تنسيق جميع الصور بشكل صحيح.",
    code: "ERR_INVALID_IMAGE_DATA",
  },
  SECURITY_RISK: {
    message:
      "الملف يحتوي على مخاطر أمان ولا يمكن معالجته. يرجى اختيار ملف صالح.",
    code: "ERR_SECURITY_RISK",
  },
  MAX_FILES_EXCEEDED: {
    message:
      "لقد تجاوزت الحد الأقصى لعدد الملفات المسموح به. يرجى حذف بعض الملفات والمحاولة مرة أخرى.",
    code: "ERR_MAX_FILES_EXCEEDED",
  },
  NO_FILES_SELECTED: {
    message: "لم يتم اختيار أي ملفات. يرجى اختيار ملف واحد على الأقل.",
    code: "ERR_NO_FILES_SELECTED",
  },
  UNKNOWN_ERROR: {
    message:
      "حدث خطأ غير معروف. يرجى المحاولة مرة أخرى لاحقًا أو الاتصال بالدعم.",
    code: "ERR_UNKNOWN",
  },
  ERR_NETWORK: {
    message:
      "حدث خطأ في الشبكة. يرجى التحقق من اتصالك بالإنترنت وحاول مرة أخرى.",
    code: "ERR_NETWORK",
  },
  ERR_UPLOAD_COUNT: {
    message: "يرجى رفع ملفين على الأقل للدمج.",
    code: "ERR_UPLOAD_COUNT",
  },
};
