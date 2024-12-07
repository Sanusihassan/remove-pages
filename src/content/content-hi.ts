import type {
  tool as _tool,
  web2pdftool as _web2pdftool,
  tools as _tools,
  edit_page as _edit_page,
  footer as _footer,
  errors as _errors,
  downloadFile as _downloadFile,
  landing_page as _landing_page,
} from "../content";

export const tool: _tool = {
  Merge_Pages: {
    title: "PDF पृष्ठ मर्ज करें",
    seoTitle: "PDF पृष्ठों को ऑनलाइन मर्ज करें - कई पृष्ठों को एक में संयोजित करें",
    description: "कई PDF पृष्ठों को कुशलतापूर्वक एक पृष्ठ में संयोजित करें",
    color: "var(--blue)",
    type: ".pdf",
    to: "/merge-pages",
    features: [
      {
        title: "कुशल संयोजन",
        description: "अपने दस्तावेज़ों को सुव्यवस्थित करते हुए, कई PDF पृष्ठों को आसानी से एक पृष्ठ में मिलाएं।"
      },
      {
        title: "कस्टम लेआउट्स",
        description: "प्रति शीट पृष्ठों की संख्या निर्दिष्ट करें और उन्हें अपनी पसंद के क्रम में व्यवस्थित करें।"
      },
      {
        title: "उपयोगकर्ता-अनुकूल इंटरफ़ेस",
        description: "एक सरल और सहज इंटरफ़ेस का आनंद लें जो पृष्ठों को मर्ज करना आसान बनाता है।"
      }
    ],
    keywords: "PDF पृष्ठ मर्ज करें, PDF पृष्ठ संयोजित करें, PDF पृष्ठ मर्जर, कई पृष्ठों को एक PDF में, PDF पृष्ठ समेकित करें, PDF पृष्ठ संयोजक, ऑनलाइन PDF पृष्ठ मर्ज, मुफ्त PDF पृष्ठ मर्जर, PDF पृष्ठ ऑनलाइन मर्ज करें, कई PDF पृष्ठ संयोजित करें, PDF पृष्ठ समेकन टूल, सुरक्षित PDF पृष्ठ मर्ज, बिना पंजीकरण के PDF पृष्ठ मर्ज, PDF पृष्ठ लेआउट टूल, मुफ्त ऑनलाइन PDF पृष्ठ संयोजक, PDF शीट्स मर्ज करें, PDF स्प्रेड्स संयोजित करें, PDF इम्पोजिशन टूल"
  },
};


export const edit_page: _edit_page = {
  edit_page_titles: {
    merge_pages: "पृष्ठ मर्ज विकल्प",
  },
  loader_text: "कृपया प्रतीक्षा करें...",
  add_more_button: "और पृष्ठ जोड़ें",
  action_buttons: {
    merge_pages: "पृष्ठ मर्ज करें",
  },
  pages: "पृष्ठ",
  page: "पृष्ठ",
  options: {
    info: "नीचे दिए गए ड्रॉपडाउन मेनू से एक पृष्ठ व्यवस्था का चयन करें। यह निर्धारित करेगा कि संयुक्त पीडीएफ दस्तावेज़ में पृष्ठ कैसे व्यवस्थित किए गए हैं।",
    placeholder: "पृष्ठ व्यवस्था चुनें"
  }
};

export const downloadFile: _downloadFile = {
  titles: {
    "merge-pages": ["PDF पृष्ठ मर्ज कर दिए गए हैं!", "PDF पृष्ठ मर्ज कर दिया गया है!"],
  },

  btnText: {
    "merge-pages": ["मर्ज किए गए PDF पृष्ठ डाउनलोड करें", "मर्ज किया गया PDF पृष्ठ डाउनलोड करें"],
  },

  backto: {
    "merge-pages": "पृष्ठ मर्ज करने पर वापस जाएं",
  },
};

export const tools: _tools = {
  select: "चुनें",
  or_drop: "या फ़ाइलें यहां छोड़ें",
  files: "फाइलें",
  drop_files: "फ़ाइलें यहाँ खींचें",
};

export const footer: _footer = {
  brand: "PDFEquips",
  terms: "शर्तें",
  conditions: "उपयोग की शर्तें",
  privacy_policy: "गोपनीयता नीति",
};

export const errors: _errors = {
  EMPTY_FILE: {
    message: "फ़ाइल खाली है। कृपया एक मान्य फ़ाइल चुनें।",
    code: "ERR_EMPTY_FILE",
  },
  FILE_TOO_LARGE: {
    message:
      "फ़ाइल बहुत बड़ी है। कृपया एक छोटी फ़ाइल चुनें या हमारा कंप्रेस-पीडीएफ़ उपकरण उपयोग करके फ़ाइल का आकार कम करें।",
    code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
  },
  NOT_SUPPORTED_TYPE: {
    message: "फ़ाइल एक समर्थित प्रकार नहीं है।",
    types: {
      PDF: "कृपया एक मान्य पीडीएफ़फ़ाइल चुनें।",
      JPG: "कृपया एक मान्य जेपेग छवि फ़ाइल चुनें।",
      DOC: "कृपया एक मान्य वर्ड दस्तावेज़ फ़ाइल चुनें।",
      DOCX: "कृपया एक मान्य वर्ड दस्तावेज़ फ़ाइल चुनें।",
      XLS: "कृपया एक मान्य एक्सेल स्प्रेडशीट फ़ाइल चुनें।",
      XLSX: "कृपया एक मान्य एक्सेल स्प्रेडशीट फ़ाइल चुनें।",
      PPT: "कृपया एक मान्यपावरपॉइंट प्रस्तुति फ़ाइल चुनें।",
      PPTX: "कृपया एक मान्य पावरपॉइंट प्रस्तुति फ़ाइल चुनें।",
    },
    code: "ERR_INVALID_FILE_TYPE",
  },
  FILE_CORRUPT: {
    message:
      "फ़ाइल का डाटा भ्रष्ट है और इसे प्रसंस्करण नहीं किया जा सकता है। कृपया एक मान्य फ़ाइल चुनें।",
    code: "ERR_FILE_CORRUPT",
  },
  MISSING_FONTS: {
    message:
      "फ़ाइल में फ़ॉन्ट गुम हैं। कृपया सुनिश्चित करें कि पीडीएफफ़ाइल में सभी फ़ॉन्ट एम्बेड हैं।",
    code: "ERR_MISSING_FONTS",
  },
  INVALID_IMAGE_DATA: {
    message:
      "फ़ाइल में अवैध छवि डेटा है। कृपया सुनिश्चित करें कि सभी छवियाँ सही ढंग से फ़ॉर्मेटेड हैं।",
    code: "ERR_INVALID_IMAGE_DATA",
  },
  SECURITY_RISK: {
    message:
      "फ़ाइल में सुरक्षा जोखिम हो सकता है और इसे प्रसंस्करण नहीं किया जा सकता है। कृपया एक मान्य फ़ाइल चुनें।",
    code: "ERR_SECURITY_RISK",
  },
  MAX_FILES_EXCEEDED: {
    message:
      "आपने अनुमति दी हुई अधिकतम फ़ाइलों की संख्या पार कर दी है। कृपया कुछ फ़ाइलें हटाएं और पुनः प्रयास करें।",
    code: "ERR_MAX_FILES_EXCEEDED",
  },
  NO_FILES_SELECTED: {
    message: "कोई फ़ाइल चयनित नहीं की गई है। कृपया कम से कम एक फ़ाइल चुनें।",
    code: "ERR_NO_FILES_SELECTED",
  },
  UNKNOWN_ERROR: {
    message:
      "एक अज्ञात त्रुटि हुई है। कृपया बाद में पुनः प्रयास करें या सहायता से संपर्क करें।",
    code: "ERR_UNKNOWN",
  },
  ERR_NETWORK: {
    message:
      "नेटवर्क में त्रुटि हो गई है। कृपया अपना इंटरनेट कनेक्शन जांचें और पुनः प्रयास करें।",
    code: "ERR_NETWORK",
  },

  ERR_UPLOAD_COUNT: {
    message: "कृपया फ्यूजन करने के लिए कम से कम दो फ़ाइलें अपलोड करें।",
    code: "ERR_UPLOAD_COUNT",
  },
};
