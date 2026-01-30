import type { adBlockerContentType } from "./content";
import type { edit_page as _edit_page, tool as _tool, tools as _tools, downloadFile as _downloadFile, errors as _ } from "../content";

export const tool: _tool = {
    Lock_PDF: {
        title: "PDF लॉक करें",
        seoTitle: "PDF को पासवर्ड से सुरक्षित करें - ऑनलाइन अपने PDF फ़ाइल को सुरक्षित करें",
        description: "अनधिकृत पहुंच को रोकने के लिए अपनी PDF फ़ाइल को पासवर्ड से सुरक्षित करें।",
        keywords: "PDF पासवर्ड से सुरक्षित करें, PDF फ़ाइल सुरक्षित करें, ऑनलाइन PDF लॉक करें, PDF एन्क्रिप्ट करें, PDF दस्तावेज़ सुरक्षित करें, PDF सुरक्षा उपकरण",
        color: "#2980b9",
        type: ".pdf",
        to: "/lock-pdf",
        features: [
            {
                title: "आसान उपयोग",
                description: "एक सरल इंटरफ़ेस के साथ अपनी PDF फ़ाइलों को जल्दी से लॉक करें।"
            },
            {
                title: "मजबूत एन्क्रिप्शन",
                description: "अपने दस्तावेज़ों की सुरक्षा के लिए मजबूत पासवर्ड एन्क्रिप्शन लागू करें।"
            },
            {
                title: "गोपनीयता सुनिश्चित",
                description: "आपकी फ़ाइलें एन्क्रिप्टेड हैं और प्रोसेसिंग के बाद हमारे सर्वरों से हटा दी जाती हैं।"
            }
        ]
    },
    Unlock_PDF: {
        title: "PDF अनलॉक करें",
        seoTitle: "PDF पासवर्ड हटाएं - ऑनलाइन अपनी PDF फ़ाइल को अनलॉक करें",
        description: "हमारे उपयोगकर्ता-मित्रवत उपकरण के साथ आसानी से अपनी PDF फ़ाइल से पासवर्ड सुरक्षा हटाएं।",
        keywords: "PDF पासवर्ड हटाएं, ऑनलाइन PDF अनलॉक करें, PDF डिक्रिप्ट करें, सुरक्षित PDF एक्सेस करें, PDF पासवर्ड रिमूवर, PDF दस्तावेज़ अनलॉक करें",
        color: "#3498db",
        type: ".pdf",
        to: "/unlock-pdf",
        features: [
            {
                title: "उपयोग में आसान",
                description: "एक सीधे प्रोसेस के साथ PDF फ़ाइलों को आसानी से अनलॉक करें।"
            },
            {
                title: "त्वरित डिक्रिप्शन",
                description: "PDF पासवर्ड को जल्दी और प्रभावी रूप से हटा दें।"
            },
            {
                title: "सुरक्षित प्रोसेसिंग",
                description: "आपकी फ़ाइलों को सुरक्षित रूप से संभाला जाता है और अनलॉक करने के बाद हमारे सर्वरों से हटा दिया जाता है।"
            }
        ]
    }
};

export const edit_page: _edit_page = {
    edit_page_titles: {
        lock_pdf: "PDF लॉक करें और PDF सुरक्षित करें",
        unlock_pdf: "पीडीएफ अनलॉक करें"
    },
    loader_text: "कृपया प्रतीक्षा करें...",
    add_more_button: "और अधिक फ़ाइलें जोड़ें",
    action_buttons: {
        lock_pdf: "PDF लॉक करें",
        unlock_pdf: "पीडीएफ अनलॉक करें"
    },
    lock_button_title: "कृपया पासवर्ड को दो बार दर्ज करके पुष्टि करें।",
    unlock_button_title: "प्रत्येक सुरक्षित फ़ाइल के लिए पासवर्ड दर्ज करें",
    pages: "पृष्ठ",
    page: "पृष्ठ",
    lock_pdf: {
        title: "अपनी PDF फ़ाइल को लॉक करने के लिए एक पासवर्ड सेट करें",
        password: "पासवर्ड",
        repeatPassword: "पासवर्ड दोहराएं",
        no_match: "पासवर्ड मेल नहीं खाते हैं।"
    },
    unlock_pdf: {
        title: "उन फ़ाइलों के लिए पासवर्ड दर्ज करें जिनके लिए इसकी आवश्यकता है",
        password_for: "के लिए पासवर्ड"
    },
    filenameOptions: {
        label: "आउटपुट फ़ाइल का नाम (वैकल्पिक)",
        placeholder: "फ़ाइल का नाम दर्ज करें",
        helperText: "डाउनलोड करते समय यह संकुचित PDF का नाम होगा।",
        cta: "योजनाएँ देखें",
        upgradeNotice: {
            msg: "2.0 से 10.0 तक के स्तर प्रीमियम में उपलब्ध हैं।",
            cta: "अभी अपग्रेड करें",
        },
    },
    languageSelectContent: {
        placeholder: "भाषाएं चुनें (अधिकतम 3)",
        warning: "यह दस्तावेज़ स्कैन किया गया है। सटीक परिणामों के लिए कृपया इसकी भाषा चुनें।",
        ocr_warning: "स्कैन किया गया दस्तावेज़ पाया गया। सर्वोत्तम परिणामों के लिए, उन्नत भाषा पहचान और उच्च सटीकता के साथ हमारे OCR PDF टूल का उपयोग करें। आप बुनियादी प्रोसेसिंग के लिए यहां भाषा भी सेट कर सकते हैं।",
    },
};

export const downloadFile: _downloadFile = {
    titles: {
        "lock-pdf": [
            "PDF फ़ाइलें लॉक कर दी गई हैं!",
            "PDF फ़ाइल लॉक कर दी गई है!"
        ],
        "unlock-pdf": [
            "पीडीएफ फाइलें अनलॉक कर दी गई हैं!",
            "पीडीएफ फाइल अनलॉक हो गई है!"
        ]
    },
    btnText: {
        "lock-pdf": [
            "लॉक किए गए PDF फ़ाइलें डाउनलोड करें",
            "लॉक किए गए PDF फ़ाइल डाउनलोड करें"
        ],
        "unlock-pdf": [
            "अनलॉक पीडीएफ फाइलें डाउनलोड करें",
            "अनलॉक पीडीएफ फाइल डाउनलोड करें"
        ]
    },
    backto: {
        "lock-pdf": "लॉक पीडीएफ पर वापस",
        "unlock-pdf": "पीडीएफ को अनलॉक करने के लिए वापस"
    }
};

// Hindi (hi) - tools
export const tools: _tools = {
    select: "चुनें",
    or_drop: "या फ़ाइलें यहाँ ड्रॉप करें",
    files: "फ़ाइलें",
    drop_files: "फ़ाइलें यहाँ ड्रैग करें",
};


export const errors: _ = {
    EMPTY_FILE: {
        message: "फ़ाइल खाली है। कृपया वैध फ़ाइल चुनें।",
        code: "ERR_EMPTY_FILE",
    },
    FILE_TOO_LARGE: {
        message:
            "फ़ाइल बहुत बड़ी है। छोटी फ़ाइल चुनें या हमारा compress-pdf टूल इस्तेमाल करके साइज़ कम करें।",
        code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
    },
    NOT_SUPPORTED_TYPE: {
        message: "फ़ाइल का प्रकार समर्थित नहीं है।",
        types: {
            PDF: "कृपया वैध PDF फ़ाइल चुनें।",
            DOC: "कृपया वैध वर्ड डॉक्यूमेंट चुनें।",
            DOCX: "कृपया वैध वर्ड डॉक्यूमेंट चुनें।",
            XLS: "कृपया वैध एक्सेल स्प्रेडशीट चुनें।",
            XLSX: "कृपया वैध एक्सेल स्प्रेडशीट चुनें।",
            PPT: "कृपया वैध पावरपॉइंट प्रेजेंटेशन चुनें।",
            PPTX: "कृपया वैध पावरपॉइंट प्रेजेंटेशन चुनें।",
        },
        code: "ERR_INVALID_FILE_TYPE",
    },
    FILE_CORRUPT: {
        message:
            "फ़ाइल खराब है और प्रोसेस नहीं की जा सकती। कृपया वैध फ़ाइल चुनें।",
        code: "ERR_FILE_CORRUPT",
    },
    MAX_FILES_EXCEEDED: {
        message:
            "आपने अधिकतम अनुमत फ़ाइलों की संख्या पार कर ली है। कुछ फ़ाइलें हटाकर दोबारा कोशिश करें।",
        code: "ERR_MAX_FILES_EXCEEDED",
    },
    NO_FILES_SELECTED: {
        message: "कोई फ़ाइल चुनी नहीं गई। कम से कम एक फ़ाइल चुनें।",
        code: "ERR_NO_FILES_SELECTED",
    },
    UNKNOWN_ERROR: {
        message:
            "एक अज्ञात त्रुटि हुई। बाद में दोबारा कोशिश करें या सपोर्ट से संपर्क करें।",
        code: "ERR_UNKNOWN",
    },
    ERR_NETWORK: {
        message:
            "नेटवर्क त्रुटि हुई। अपना इंटरनेट कनेक्शन जांचें और दोबारा कोशिश करें।",
        code: "ERR_NETWORK",
    },
    ERR_UPLOAD_COUNT: {
        message: "मर्ज करने के लिए कम से कम दो फ़ाइलें अपलोड करें।",
        code: "ERR_UPLOAD_COUNT",
    },
    PASSWORD_REQUIRED: {
        message: "PDF में पासवर्ड की आवश्यकता है।",
        code: "PASSWORD_REQUIRED",
    },
    INCORRECT_PASSWORD: {
        message: "आपने गलत पासवर्ड डाला है।",
        code: "INCORRECT_PASSWORD",
    },
    MAX_DAILY_USAGE: {
        message:
            "आपने अपनी दैनिक उपयोग सीमा पूरी कर ली है। बिना रुकावट के जारी रखने के लिए प्लान अपग्रेड करें।",
        code: "MAX_DAILY_USAGE",
    },
    MAX_PAGES_EXCEEDED: {
        message: "PDF अधिकतम 50 पृष्ठों की सीमा से अधिक है।",
        code: "ERR_MAX_PAGES_EXCEEDED",
    },
    // Hindi (hi)
    alerts: {
        // Frontend validation
        maxFiles: "अधिकतम 15 फाइलें। अधिक के लिए सब्सक्राइब करें!",
        singleFileSize: "फाइल का आकार 100 MB से कम होना चाहिए। बड़ी फाइलें अपलोड करने के लिए अपग्रेड करें!",
        perFilePages: "प्रति फाइल 500 पेज। अभी और अनलॉक करें!",
        fileSize: "प्रति फाइल 50MB। अधिक के लिए अपग्रेड करें!",
        serverError: "सर्वर त्रुटि। कृपया बाद में पुनः प्रयास करें।",
        tooManyFiles: "बहुत सारी फाइलें अपलोड की गईं",
        // Backend file validation
        fileNotUploaded: "कोई फाइल अपलोड नहीं की गई। कृपया एक फाइल चुनें।",
        fileEmpty: "अपलोड की गई फाइल खाली है। कृपया एक वैध फाइल चुनें।",
        fileTooLarge: "फाइल 200MB सीमा से अधिक है। बड़ी फाइलों के लिए अपग्रेड करें!",
        invalidFileType: "अमान्य फाइल प्रकार। कृपया समर्थित फॉर्मेट अपलोड करें।",
        fileCorrupt: "फाइल दूषित लगती है। कृपया कोई अन्य फाइल आजमाएं।",
        insufficientUnits: "परिवर्तन इकाइयां अपर्याप्त हैं। अपग्रेड करें या रिचार्ज करें!",
        // Auth errors
        authRequired: "प्रीमियम सुविधाओं का उपयोग करने के लिए कृपया लॉग इन करें।",
        sessionExpired: "आपका सत्र समाप्त हो गया है। कृपया फिर से लॉग इन करें।",
        invalidToken: "प्रमाणीकरण विफल। कृपया फिर से लॉग इन करें।",
        userNotFound: "खाता नहीं मिला। कृपया फिर से लॉग इन करें।",
        authError: "प्रमाणीकरण त्रुटि। कृपया पुनः प्रयास करें।",
        notPasswordProtected: "एक या अधिक फाइलें पासवर्ड से सुरक्षित नहीं हैं",

        // PDF-specific errors
        invalidPdf: "अमान्य या दूषित PDF फाइल।",
        pdfNotEncrypted: "यह PDF पासवर्ड से सुरक्षित नहीं है और अनलॉक करने की आवश्यकता नहीं है।",

        // Lock-PDF errors
        noLockPassword: "PDF को लॉक करने के लिए कृपया पासवर्ड प्रदान करें।",
        lockingFailed: "PDF लॉक करने में विफल। कृपया पुनः प्रयास करें।",

        // Unlock-PDF errors
        noPasswordsProvided: "लॉक किए गए PDFs के लिए कृपया पासवर्ड प्रदान करें।",
        unlockingFailed: "PDF अनलॉक करने में विफल। कृपया अपना पासवर्ड जांचें और पुनः प्रयास करें।",
        incorrectPassword: "गलत पासवर्ड। कृपया पुनः प्रयास करें।",
        passwordRequired: "यह PDF पासवर्ड से सुरक्षित है। कृपया पासवर्ड दर्ज करें।",

        // Settings errors
        invalidSettings: "अमान्य सेटिंग्स प्रदान की गईं। कृपया रिफ्रेश करें और पुनः प्रयास करें।",
        conversionFailed: "परिवर्तन विफल। कृपया पुनः प्रयास करें।",
    },
};

export const adBlockerContent: adBlockerContentType = {
    title: "विज्ञापन अवरोधक पता चला",
    description: "हमने देखा कि आप विज्ञापन अवरोधक इस्तेमाल कर रहे हैं। इसे बंद करें या प्रीमियम में अपग्रेड करें ताकि विज्ञापन-मुक्त अनुभव मिले!",
    reloadPage: "पेज रीलोड करें",
    upgradeToPremium: "प्रीमियम में अपग्रेड करें"
};