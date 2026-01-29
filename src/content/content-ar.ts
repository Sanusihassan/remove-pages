import type { tool as _tool, tools as _tools, edit_page as _edit_page, downloadFile as _downloadFile, errors as _errors } from "../content";
import type { adBlockerContentType } from "./content";

export const tool: _tool = {
    Lock_PDF: {
        title: "قفل PDF",
        seoTitle: "حماية PDF بكلمة مرور - تأمين ملف PDF الخاص بك عبر الإنترنت",
        description: "قم بتأمين ملف PDF الخاص بك بكلمة مرور لمنع الوصول غير المصرح به.",
        keywords: "حماية PDF بكلمة مرور, تأمين ملف PDF, قفل PDF عبر الإنترنت, تشفير PDF, حماية مستند PDF, أداة أمان PDF",
        color: "#2980b9",
        type: ".pdf",
        to: "/lock-pdf",
        features: [
            {
                title: "سهل الاستخدام",
                description: "قم بقفل ملفات PDF الخاصة بك بسرعة بواجهة بسيطة."
            },
            {
                title: "تشفير قوي",
                description: "تطبيق تشفير قوي بكلمة مرور لحماية مستنداتك."
            },
            {
                title: "ضمان الخصوصية",
                description: "يتم تشفير ملفاتك وحذفها من خوادمنا بعد المعالجة."
            }
        ]
    },
    Unlock_PDF: {
        title: "فتح PDF",
        seoTitle: "إزالة كلمة مرور PDF - فتح ملف PDF الخاص بك عبر الإنترنت",
        description: "قم بإزالة حماية كلمة المرور من ملف PDF الخاص بك بسهولة باستخدام أداتنا سهلة الاستخدام.",
        keywords: "إزالة كلمة مرور PDF, فتح PDF عبر الإنترنت, فك تشفير PDF, الوصول إلى PDF المؤمّن, أداة إزالة كلمة مرور PDF, فتح مستند PDF",
        color: "#3498db",
        type: ".pdf",
        to: "/unlock-pdf",
        features: [
            {
                title: "سهل الاستخدام",
                description: "افتح ملفات PDF بسهولة بعملية مباشرة."
            },
            {
                title: "فك تشفير سريع",
                description: "إزالة كلمات مرور PDF بسرعة وكفاءة."
            },
            {
                title: "معالجة آمنة",
                description: "يتم التعامل مع ملفاتك بأمان وإزالتها من خوادمنا بعد الفتح."
            }
        ]
    }
};

export const edit_page: _edit_page = {
    edit_page_titles: {
        lock_pdf: "قفل PDF وحماية PDF",
        unlock_pdf: "إلغاء قفل PDF"
    },
    loader_text: "الرجاء الانتظار...",
    add_more_button: "أضف المزيد من الملفات",
    action_buttons: {
        lock_pdf: "قفل PDF",
        unlock_pdf: "إلغاء قفل PDF"
    },
    lock_button_title: "الرجاء تأكيد كلمة المرور عن طريق إدخالها مرتين.",
    unlock_button_title: "أدخل كلمة المرور لكل ملف محمي",
    pages: "صفحات",
    page: "صفحة واحدة",
    lock_pdf: {
        title: "قم بتعيين كلمة مرور لقفل ملف PDF الخاص بك",
        password: "كلمه السر",
        repeatPassword: "اعد كلمة السر",
        no_match: "كلمات المرور غير متطابقة."
    },
    unlock_pdf: {
        title: "أدخل كلمة المرور للملفات التي تتطلب ذلك",
        password_for: "كلمة السر ل"
    },
    filenameOptions: {
        label: "اسم الملف الناتج (اختياري)",
        placeholder: "أدخل اسم الملف",
        helperText: "سيكون هذا هو اسم ملف PDF المضغوط عند تنزيله.",
        cta: "عرض الخطط",
        upgradeNotice: {
            msg: "المستويات من 2.0 إلى 10.0 متاحة مع الخطة المميزة.",
            cta: "الترقية الآن",
        },
    },
    languageSelectContent: {
        placeholder: "اختر اللغات (حد أقصى 3)",
        warning: "هذا المستند ممسوح ضوئيًا. يرجى اختيار لغته لضمان نتائج دقيقة.",
        ocr_warning: "تم اكتشاف مستند ممسوح ضوئيًا. للحصول على أفضل النتائج، استخدم أداة OCR PDF الخاصة بنا مع اكتشاف متقدم للغة ودقة أعلى. يمكنك أيضًا تعيين اللغة هنا للمعالجة الأساسية.",
    },
};

export const downloadFile: _downloadFile = {
    titles: {
        "lock-pdf": [
            "تم قفل ملفات ال PDF!",
            "تم قفل ملف ال PDF!"
        ],
        "unlock-pdf": [
            "تم إلغاء قفل ملفال ال PDF!",
            "تم إلغاء قفل ملف ال PDF!"
        ]
    },
    btnText: {
        "lock-pdf": [
            "تنزيل ملفات PDF المقفلة",
            "تنزيل ملف PDF المقفل"
        ],
        "unlock-pdf": [
            "تحميل الملفات الغير مغلقة",
            "تحميل الملف الغير مغلق"
        ]
    },
    backto: {
        "lock-pdf": "العودة إلى قفل PDF",
        "unlock-pdf": "العودة إلى إلغاء قفل ملفات ال PDF"
    }
};

export const tools: _tools = {
    select: "اختر",
    or_drop: "أو أسقط الملفات هنا",
    files: "ملفات",
    drop_files: "اسحب الملفات هنا",
};

export const errors: _errors = {
    EMPTY_FILE: {
        message: "الملف فارغ. يرجى اختيار ملف صالح.",
        code: "ERR_EMPTY_FILE",
    },
    FILE_TOO_LARGE: {
        message:
            "حجم الملف كبير جدًا. يرجى اختيار ملف أصغر، أو استخدم أداة ضغط PDF لتقليل حجم الملف.",
        code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
    },
    NOT_SUPPORTED_TYPE: {
        message: "نوع الملف غير مدعوم.",
        types: {
            PDF: "يرجى اختيار ملف PDF صالح.",
            DOC: "يرجى اختيار ملف مستند وورد صالح.",
            DOCX: "يرجى اختيار ملف مستند وورد صالح.",
            XLS: "يرجى اختيار ملف جدول إكسل صالح.",
            XLSX: "يرجى اختيار ملف جدول إكسل صالح.",
            PPT: "يرجى اختيار ملف عرض تقديمي باور بوينت صالح.",
            PPTX: "يرجى اختيار ملف عرض تقديمي باور بوينت صالح.",
        },
        code: "ERR_INVALID_FILE_TYPE",
    },
    FILE_CORRUPT: {
        message:
            "الملف تالف ولا يمكن معالجته. يرجى اختيار ملف صالح.",
        code: "ERR_FILE_CORRUPT",
    },
    MAX_FILES_EXCEEDED: {
        message:
            "لقد تجاوزت الحد الأقصى لعدد الملفات المسموح به. يرجى حذف بعض الملفات وحاول مرة أخرى.",
        code: "ERR_MAX_FILES_EXCEEDED",
    },
    NO_FILES_SELECTED: {
        message: "لم يتم اختيار أي ملفات. يرجى اختيار ملف واحد على الأقل.",
        code: "ERR_NO_FILES_SELECTED",
    },
    UNKNOWN_ERROR: {
        message:
            "حدث خطأ غير معروف. يرجى المحاولة مرة أخرى لاحقًا أو التواصل مع الدعم.",
        code: "ERR_UNKNOWN",
    },
    ERR_NETWORK: {
        message:
            "حدث خطأ في الشبكة. يرجى التحقق من اتصال الإنترنت وحاول مرة أخرى.",
        code: "ERR_NETWORK",
    },
    ERR_UPLOAD_COUNT: {
        message: "يرجى رفع ملفين على الأقل للدمج.",
        code: "ERR_UPLOAD_COUNT",
    },
    PASSWORD_REQUIRED: {
        message: "ملف PDF يتطلب كلمة مرور.",
        code: "PASSWORD_REQUIRED",
    },
    INCORRECT_PASSWORD: {
        message: "كلمة المرور التي أدخلتها غير صحيحة.",
        code: "INCORRECT_PASSWORD",
    },
    MAX_DAILY_USAGE: {
        message:
            "لقد وصلت إلى الحد اليومي للاستخدام. يرجى ترقية خطتك لمواصلة استخدام الميزة بدون انقطاع.",
        code: "MAX_DAILY_USAGE",
    },
    MAX_PAGES_EXCEEDED: {
        message: "يتجاوز ملف PDF الحد الأقصى لعدد الصفحات وهو 50 صفحة.",
        code: "ERR_MAX_PAGES_EXCEEDED",
    },
    alerts: {
        // Frontend validation
        maxFiles: "الحد الأقصى 15 ملفًا. اشترك للمزيد!",
        singleFileSize: "يجب أن يكون حجم الملف أقل من 100 ميجابايت. قم بالترقية لرفع ملفات أكبر!",
        perFilePages: "500 صفحة لكل ملف. افتح المزيد الآن!",
        fileSize: "50 ميجابايت لكل ملف. قم بالترقية للمزيد!",
        notPasswordProtected: "واحد أو أكثر من الملفات غير محمي بكلمة مرور",
        // Backend file validation
        fileNotUploaded: "لم يتم رفع أي ملف. يرجى اختيار ملف.",
        fileEmpty: "الملف المرفوع فارغ. يرجى اختيار ملف صالح.",
        fileTooLarge: "الملف يتجاوز 200 ميجابايت. قم بالترقية لملفات أكبر!",
        invalidFileType: "نوع الملف غير صالح. يرجى رفع تنسيق مدعوم.",
        fileCorrupt: "يبدو أن الملف تالف. يرجى تجربة ملف آخر.",
        insufficientUnits: "لا توجد وحدات تحويل كافية. قم بالترقية أو إعادة الشحن!",
        // Auth errors
        authRequired: "يرجى تسجيل الدخول لاستخدام الميزات المميزة.",
        sessionExpired: "انتهت صلاحية جلستك. يرجى تسجيل الدخول مرة أخرى.",
        invalidToken: "فشل التحقق. يرجى تسجيل الدخول مرة أخرى.",
        userNotFound: "الحساب غير موجود. يرجى تسجيل الدخول مرة أخرى.",
        authError: "خطأ في المصادقة. يرجى المحاولة مرة أخرى.",
        serverError: "خطأ في الخادم. يرجى المحاولة لاحقًا.",
    },
};

export const adBlockerContent: adBlockerContentType = {
    title: "تم اكتشاف مانع الإعلانات",
    description: "لاحظنا أنك تستخدم مانع الإعلانات. يرجى التفكير في تعطيله أو الترقية إلى النسخة المميزة للحصول على تجربة خالية من الإعلانات!",
    reloadPage: "إعادة تحميل الصفحة",
    upgradeToPremium: "الترقية إلى النسخة المميزة"
}