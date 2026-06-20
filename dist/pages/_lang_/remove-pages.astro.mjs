import { c as createComponent, r as renderComponent, a as renderTemplate, d as createAstro, F as Fragment, b as addAttribute, u as unescapeHTML } from '../../chunks/astro/server_Bokrf6dK.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as howToSchema_ar, b as howToSchema_es, c as howToSchema_fr, d as howToSchema_hi, e as howToSchema_zh, T as ToolWrapper } from '../../chunks/ToolWrapper_DoAP8VYa.mjs';
export { renderers } from '../../renderers.mjs';

const tool$4 = {
  Remove_Page: {
    title: "إزالة صفحة",
    seoTitle: "حذف صفحات من PDF عبر الإنترنت - أداة إزالة الصفحات",
    keywords: "إزالة صفحات PDF، حذف صفحات من PDF، مزيل صفحات PDF، إزالة صفحات PDF عبر الإنترنت، محرر PDF، تعديل PDF، أداة PDF آمنة، أداة PDF سهلة الاستخدام",
    description: "احذف الصفحات غير المرغوب فيها من مستند PDF الخاص بك واحفظ الملف المعدل كملف PDF جديد.",
    color: "#d63031",
    type: ".pdf",
    to: "/remove-pages",
    features: [
      {
        title: "سريع وفعال",
        description: "قم بإزالة الصفحات غير المرغوب فيها من مستندات PDF الخاصة بك بسرعة دون التضحية بالجودة."
      },
      {
        title: "آمن وخاص",
        description: "ملفاتك محمية بتشفير SSL وتُحذف من خوادمنا فورًا بعد المعالجة."
      },
      {
        title: "سهل الاستخدام",
        description: "واجهة مستخدم سهلة تتيح لك إزالة الصفحات من PDF الخاص بك ببضع نقرات فقط."
      }
    ]
  }
};
const edit_page$4 = {
  edit_page_titles: {
    remove_pages: "خيارات إزالة الصفحات"
  },
  loader_text: "يرجى الانتظار...",
  add_more_button: "إضافة المزيد من الملفات",
  action_buttons: {
    remove_pages: "إزالة الصفحات"
  },
  pages: "الصفحات",
  page: "صفحة",
  filenameOptions: {
    label: "اسم الملف الناتج (اختياري)",
    placeholder: "أدخل اسم الملف",
    helperText: "سيكون هذا هو اسم ملف PDF المضغوط عند تنزيله.",
    cta: "عرض الخطط",
    upgradeNotice: {
      msg: "المستويات من 2.0 إلى 10.0 متاحة مع الخطة المميزة.",
      cta: "الترقية الآن"
    }
  },
  fileCard: {
    page: "صفحة",
    pages: "صفحات",
    remove_file: "إزالة الملف",
    loading: "جار التحميل...",
    pages_to_remove: "الصفحات المراد إزالتها:",
    remaining: "المتبقي:",
    warning_cannot_remove_all: "⚠️ لا يمكنك إزالة جميع الصفحات من المستند."
  },
  options: {
    info: 'لحذف الصفحات من المستند، انقر عليها. يمكنك أيضًا استخدام مفتاح "shift" لتحديد عدة صفحات في وقت واحد.',
    total_pages: "إجمالي الصفحات",
    pages_to_remove: "الصفحات المراد إزالتها:",
    placeholder: "مثال: 2،8-32",
    helper_text: "انقر على الصفحات أعلاه أو اكتب أرقام الصفحات هنا (مثل: 2،5،8-12)",
    summary_pages_to_remove: "الصفحات المراد إزالتها:",
    summary_remaining_pages: "الصفحات المتبقية:",
    warning_cannot_remove_all: "⚠️ لا يمكنك إزالة جميع الصفحات من المستند."
  }
};
const downloadFile$4 = {
  titles: {
    "remove-pages": [
      "تمت إزالة صفحاتك بنجاح!"
    ]
  },
  btnText: {
    "remove-pages": [
      "تحميل ملف PDF المعدّل",
      "تحميل الملفات المعدّلة"
    ]
  },
  backto: {
    "remove-pages": "العودة إلى إزالة الصفحات"
  }
};
const tools$4 = {
  select: "اختر",
  or_drop: "أو أسقط الملفات هنا",
  files: "ملفات",
  drop_files: "اسحب الملفات هنا"
};
const errors$4 = {
  EMPTY_FILE: {
    message: "الملف فارغ. يرجى اختيار ملف صالح.",
    code: "ERR_EMPTY_FILE"
  },
  FILE_TOO_LARGE: {
    message: "حجم الملف كبير جدًا. يرجى اختيار ملف أصغر، أو استخدم أداة ضغط PDF لتقليل حجم الملف.",
    code: "ERR_FILE_SIZE_LIMIT_EXCEEDED"
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
      PPTX: "يرجى اختيار ملف عرض تقديمي باور بوينت صالح."
    },
    code: "ERR_INVALID_FILE_TYPE"
  },
  FILE_CORRUPT: {
    message: "الملف تالف ولا يمكن معالجته. يرجى اختيار ملف صالح.",
    code: "ERR_FILE_CORRUPT"
  },
  MAX_FILES_EXCEEDED: {
    message: "لقد تجاوزت الحد الأقصى لعدد الملفات المسموح به. يرجى حذف بعض الملفات وحاول مرة أخرى.",
    code: "ERR_MAX_FILES_EXCEEDED"
  },
  NO_FILES_SELECTED: {
    message: "لم يتم اختيار أي ملفات. يرجى اختيار ملف واحد على الأقل.",
    code: "ERR_NO_FILES_SELECTED"
  },
  UNKNOWN_ERROR: {
    message: "حدث خطأ غير معروف. يرجى المحاولة مرة أخرى لاحقًا أو التواصل مع الدعم.",
    code: "ERR_UNKNOWN"
  },
  ERR_NETWORK: {
    message: "حدث خطأ في الشبكة. يرجى التحقق من اتصال الإنترنت وحاول مرة أخرى.",
    code: "ERR_NETWORK"
  },
  ERR_UPLOAD_COUNT: {
    message: "يرجى رفع ملفين على الأقل للدمج.",
    code: "ERR_UPLOAD_COUNT"
  },
  PASSWORD_REQUIRED: {
    message: "ملف PDF يتطلب كلمة مرور.",
    code: "PASSWORD_REQUIRED"
  },
  INCORRECT_PASSWORD: {
    message: "كلمة المرور التي أدخلتها غير صحيحة.",
    code: "INCORRECT_PASSWORD"
  },
  MAX_DAILY_USAGE: {
    message: "لقد وصلت إلى الحد اليومي للاستخدام. يرجى ترقية خطتك لمواصلة استخدام الميزة بدون انقطاع.",
    code: "MAX_DAILY_USAGE"
  },
  MAX_PAGES_EXCEEDED: {
    message: "يتجاوز ملف PDF الحد الأقصى لعدد الصفحات وهو 50 صفحة.",
    code: "ERR_MAX_PAGES_EXCEEDED"
  },
  alerts: {
    // Frontend validation
    maxFiles: "حد أقصى 15 ملفًا. اشترك للحصول على المزيد!",
    singleFileSize: "يجب أن يكون حجم الملف أقل من 100 ميغابايت. قم بالترقية لتحميل ملفات أكبر!",
    perFilePages: "500 صفحة لكل ملف. افتح المزيد الآن!",
    fileSize: "50 ميغابايت لكل ملف. قم بالترقية للحصول على المزيد!",
    serverError: "خطأ في الخادم. يرجى المحاولة لاحقًا.",
    // Backend file validation
    fileNotUploaded: "لم يتم تحميل أي ملف. يرجى اختيار ملف.",
    fileEmpty: "الملف المرفوع فارغ. يرجى اختيار ملف صالح.",
    fileTooLarge: "الملف يتجاوز حد 200 ميغابايت. قم بالترقية لملفات أكبر!",
    invalidFileType: "نوع الملف غير صالح. يرجى تحميل تنسيق مدعوم.",
    fileCorrupt: "يبدو أن الملف تالف. يرجى تجربة ملف آخر.",
    insufficientUnits: "وحدات التحويل غير كافية. قم بالترقية أو إعادة الشحن!",
    // Auth errors
    authRequired: "يرجى تسجيل الدخول لاستخدام الميزات المميزة.",
    sessionExpired: "انتهت جلستك. يرجى تسجيل الدخول مرة أخرى.",
    invalidToken: "فشل المصادقة. يرجى تسجيل الدخول مرة أخرى.",
    userNotFound: "الحساب غير موجود. يرجى تسجيل الدخول مرة أخرى.",
    authError: "خطأ في المصادقة. يرجى المحاولة مرة أخرى.",
    notPasswordProtected: "واحد أو أكثر من الملفات غير محمي بكلمة مرور",
    // PDF-specific errors
    invalidPdf: "ملف PDF غير صالح أو تالف.",
    pdfNotEncrypted: "هذا الملف PDF غير محمي بكلمة مرور ولا يحتاج إلى فك القفل.",
    // Lock-PDF errors
    noLockPassword: "يرجى تقديم كلمة مرور لقفل PDF.",
    lockingFailed: "فشل قفل PDF. يرجى المحاولة مرة أخرى.",
    // Unlock-PDF errors
    noPasswordsProvided: "يرجى تقديم كلمات مرور لملفات PDF المقفلة.",
    unlockingFailed: "فشل فك قفل PDF. يرجى التحقق من كلمة المرور والمحاولة مرة أخرى.",
    incorrectPassword: "كلمة مرور غير صحيحة. يرجى المحاولة مرة أخرى.",
    passwordRequired: "هذا الملف PDF محمي بكلمة مرور. يرجى إدخال كلمة المرور.",
    // Settings errors
    invalidSettings: "إعدادات غير صالحة مقدمة. يرجى التحديث والمحاولة مرة أخرى.",
    conversionFailed: "فشل التحويل. يرجى المحاولة مرة أخرى.",
    tooManyFiles: "تم تحميل ملفات كثيرة جدًا",
    noPagesSelected: "يرجى تحديد صفحة واحدة على الأقل لإزالتها",
    invalidPageSelection: "تنسيق اختيار الصفحات غير صالح",
    removalFailed: "فشل إزالة الصفحات. يرجى المحاولة مرة أخرى.",
    allPagesRemoved: "لا يمكن إزالة جميع الصفحات. يجب أن تبقى صفحة واحدة على الأقل."
  }
};
const adBlockerContent$4 = {
  title: "تم اكتشاف مانع الإعلانات",
  description: "لاحظنا أنك تستخدم مانع الإعلانات. يرجى التفكير في تعطيله أو الترقية إلى النسخة المميزة للحصول على تجربة خالية من الإعلانات!",
  reloadPage: "إعادة تحميل الصفحة",
  upgradeToPremium: "الترقية إلى النسخة المميزة"
};

const contentAr = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    adBlockerContent: adBlockerContent$4,
    downloadFile: downloadFile$4,
    edit_page: edit_page$4,
    errors: errors$4,
    tool: tool$4,
    tools: tools$4
}, Symbol.toStringTag, { value: 'Module' }));

const tool$3 = {
  Remove_Page: {
    title: "Eliminar Página",
    seoTitle: "Eliminar Páginas de PDF en Línea - Herramienta de Eliminación de Páginas",
    keywords: "eliminar páginas de PDF, eliminar páginas de PDF, eliminador de páginas de PDF, eliminación de páginas de PDF en línea, editor de PDF, modificación de PDF, herramienta de PDF segura, herramienta de PDF fácil de usar",
    description: "Elimina las páginas no deseadas de tu documento PDF y guarda el archivo modificado como un nuevo PDF.",
    color: "#d63031",
    type: ".pdf",
    to: "/remove-pages",
    features: [
      {
        title: "Rápido y Eficiente",
        description: "Elimina rápidamente las páginas no deseadas de tus documentos PDF sin comprometer la calidad."
      },
      {
        title: "Seguro y Privado",
        description: "Tus archivos están protegidos con cifrado SSL y se eliminan de nuestros servidores inmediatamente después del procesamiento."
      },
      {
        title: "Fácil de Usar",
        description: "Interfaz amigable que te permite eliminar páginas de tu PDF con solo unos pocos clics."
      }
    ]
  }
};
const edit_page$3 = {
  edit_page_titles: {
    remove_pages: "Opciones para eliminar páginas"
  },
  loader_text: "por favor espere...",
  add_more_button: "Agregar más archivos",
  action_buttons: {
    remove_pages: "Eliminar páginas"
  },
  pages: "páginas",
  page: "página",
  filenameOptions: {
    label: "Nombre del archivo de salida (opcional)",
    placeholder: "Ingrese el nombre del archivo",
    helperText: "Este será el nombre del PDF comprimido al descargarlo.",
    cta: "Ver planes",
    upgradeNotice: {
      msg: "Los niveles del 2.0 al 10.0 están disponibles con la versión premium.",
      cta: "Actualizar ahora"
    }
  },
  fileCard: {
    page: "página",
    pages: "páginas",
    remove_file: "Eliminar archivo",
    loading: "Cargando...",
    pages_to_remove: "Páginas a eliminar:",
    remaining: "Restantes:",
    warning_cannot_remove_all: "⚠️ No puedes eliminar todas las páginas del documento."
  },
  options: {
    info: 'Para eliminar páginas del documento, haz clic en ellas. También puedes usar la tecla "shift" para seleccionar varias páginas a la vez.',
    total_pages: "Total de páginas",
    pages_to_remove: "Páginas a eliminar:",
    placeholder: "ejemplo: 2,8-32",
    helper_text: "Haz clic en las páginas arriba o escribe los números de página aquí (ej: 2,5,8-12)",
    summary_pages_to_remove: "Páginas a eliminar:",
    summary_remaining_pages: "Páginas restantes:",
    warning_cannot_remove_all: "⚠️ No puedes eliminar todas las páginas del documento."
  }
};
const downloadFile$3 = {
  titles: {
    "remove-pages": [
      "¡Tus páginas se han eliminado con éxito!"
    ]
  },
  btnText: {
    "remove-pages": [
      "Descargar PDF modificado",
      "Descargar archivos modificados"
    ]
  },
  backto: {
    "remove-pages": "Volver a Eliminar páginas"
  }
};
const tools$3 = {
  select: "Seleccionar",
  or_drop: "o suelta archivos aquí",
  files: "archivos",
  drop_files: "Arrastra archivos aquí"
};
const errors$3 = {
  EMPTY_FILE: {
    message: "El archivo está vacío. Por favor elige un archivo válido.",
    code: "ERR_EMPTY_FILE"
  },
  FILE_TOO_LARGE: {
    message: "El archivo es demasiado grande. Elige un archivo más pequeño o usa nuestra herramienta compress-pdf para reducir el tamaño.",
    code: "ERR_FILE_SIZE_LIMIT_EXCEEDED"
  },
  NOT_SUPPORTED_TYPE: {
    message: "El tipo de archivo no es compatible.",
    types: {
      PDF: "Por favor elige un archivo PDF válido.",
      DOC: "Por favor elige un documento Word válido.",
      DOCX: "Por favor elige un documento Word válido.",
      XLS: "Por favor elige una hoja de cálculo Excel válida.",
      XLSX: "Por favor elige una hoja de cálculo Excel válida.",
      PPT: "Por favor elige una presentación PowerPoint válida.",
      PPTX: "Por favor elige una presentación PowerPoint válida."
    },
    code: "ERR_INVALID_FILE_TYPE"
  },
  FILE_CORRUPT: {
    message: "El archivo está corrupto y no se puede procesar. Elige un archivo válido.",
    code: "ERR_FILE_CORRUPT"
  },
  MAX_FILES_EXCEEDED: {
    message: "Has excedido el número máximo de archivos permitidos. Elimina algunos archivos e inténtalo de nuevo.",
    code: "ERR_MAX_FILES_EXCEEDED"
  },
  NO_FILES_SELECTED: {
    message: "No se seleccionaron archivos. Selecciona al menos uno.",
    code: "ERR_NO_FILES_SELECTED"
  },
  UNKNOWN_ERROR: {
    message: "Ocurrió un error desconocido. Inténtalo de nuevo más tarde o contacta con soporte.",
    code: "ERR_UNKNOWN"
  },
  ERR_NETWORK: {
    message: "Ocurrió un error de red. Verifica tu conexión a internet e inténtalo de nuevo.",
    code: "ERR_NETWORK"
  },
  ERR_UPLOAD_COUNT: {
    message: "Por favor sube al menos dos archivos para combinarlos.",
    code: "ERR_UPLOAD_COUNT"
  },
  PASSWORD_REQUIRED: {
    message: "El PDF requiere contraseña.",
    code: "PASSWORD_REQUIRED"
  },
  INCORRECT_PASSWORD: {
    message: "La contraseña ingresada es incorrecta.",
    code: "INCORRECT_PASSWORD"
  },
  MAX_DAILY_USAGE: {
    message: "Has alcanzado tu límite diario de uso. Actualiza tu plan para continuar sin interrupciones.",
    code: "MAX_DAILY_USAGE"
  },
  MAX_PAGES_EXCEEDED: {
    message: "El PDF supera el límite máximo de 50 páginas.",
    code: "ERR_MAX_PAGES_EXCEEDED"
  },
  alerts: {
    // Frontend validation
    maxFiles: "Máximo 15 archivos. ¡Suscríbete para más!",
    singleFileSize: "El tamaño del archivo debe ser inferior a 100 MB. ¡Actualiza para subir archivos más grandes!",
    perFilePages: "500 páginas por archivo. ¡Desbloquea más ahora!",
    fileSize: "50 MB por archivo. ¡Actualiza para más!",
    serverError: "Error del servidor. Por favor, inténtalo de nuevo más tarde.",
    // Backend file validation
    fileNotUploaded: "No se subió ningún archivo. Por favor, selecciona un archivo.",
    fileEmpty: "El archivo subido está vacío. Por favor, selecciona un archivo válido.",
    fileTooLarge: "El archivo excede el límite de 200 MB. ¡Actualiza para archivos más grandes!",
    invalidFileType: "Tipo de archivo inválido. Por favor, sube un formato compatible.",
    fileCorrupt: "El archivo parece estar corrupto. Por favor, intenta con otro archivo.",
    insufficientUnits: "Unidades de conversión insuficientes. ¡Actualiza o recarga!",
    // Auth errors
    authRequired: "Por favor, inicia sesión para usar funciones premium.",
    sessionExpired: "Tu sesión ha expirado. Por favor, inicia sesión de nuevo.",
    invalidToken: "Autenticación fallida. Por favor, inicia sesión de nuevo.",
    userNotFound: "Cuenta no encontrada. Por favor, inicia sesión de nuevo.",
    authError: "Error de autenticación. Por favor, inténtalo de nuevo.",
    notPasswordProtected: "Uno o más archivos no están protegidos con contraseña",
    // Spanish (es)
    tooManyFiles: "Demasiados archivos subidos",
    // PDF-specific errors
    invalidPdf: "Archivo PDF inválido o corrupto.",
    pdfNotEncrypted: "Este PDF no está protegido con contraseña y no necesita ser desbloqueado.",
    // Lock-PDF errors
    noLockPassword: "Por favor, proporciona una contraseña para bloquear el PDF.",
    lockingFailed: "Fallo al bloquear PDF. Por favor, inténtalo de nuevo.",
    // Unlock-PDF errors
    noPasswordsProvided: "Por favor, proporciona contraseñas para los PDFs bloqueados.",
    unlockingFailed: "Fallo al desbloquear PDF. Por favor, verifica tu contraseña e inténtalo de nuevo.",
    incorrectPassword: "Contraseña incorrecta. Por favor, inténtalo de nuevo.",
    passwordRequired: "Este PDF está protegido con contraseña. Por favor, ingresa la contraseña.",
    // Settings errors
    invalidSettings: "Configuraciones inválidas proporcionadas. Por favor, actualiza e inténtalo de nuevo.",
    conversionFailed: "Conversión fallida. Por favor, inténtalo de nuevo.",
    noPagesSelected: "Por favor, seleccione al menos una página para eliminar",
    invalidPageSelection: "Formato de selección de páginas inválido",
    removalFailed: "Fallo al eliminar páginas. Por favor, inténtelo de nuevo.",
    allPagesRemoved: "No se pueden eliminar todas las páginas. Debe quedar al menos una página."
  }
};
const adBlockerContent$3 = {
  title: "Bloqueador de anuncios detectado",
  description: "Notamos que usas un bloqueador de anuncios. Desactívalo o actualiza a premium para una experiencia sin anuncios.",
  reloadPage: "Recargar página",
  upgradeToPremium: "Actualizar a Premium"
};

const contentEs = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    adBlockerContent: adBlockerContent$3,
    downloadFile: downloadFile$3,
    edit_page: edit_page$3,
    errors: errors$3,
    tool: tool$3,
    tools: tools$3
}, Symbol.toStringTag, { value: 'Module' }));

const tool$2 = {
  Remove_Page: {
    title: "Supprimer une Page",
    seoTitle: "Supprimer des Pages d'un PDF en Ligne - Outil de Suppression de Pages",
    keywords: "supprimer des pages de PDF, supprimer des pages d'un PDF, outil de suppression de pages PDF, suppression de pages PDF en ligne, éditeur de PDF, modification de PDF, outil PDF sécurisé, outil PDF facile à utiliser",
    description: "Supprimez les pages indésirables de votre document PDF et enregistrez le fichier modifié en tant que nouveau PDF.",
    color: "#d63031",
    type: ".pdf",
    to: "/remove-pages",
    features: [
      {
        title: "Rapide et Efficace",
        description: "Supprimez rapidement les pages indésirables de vos documents PDF sans compromettre la qualité."
      },
      {
        title: "Sécurisé et Privé",
        description: "Vos fichiers sont protégés par un cryptage SSL et supprimés de nos serveurs immédiatement après le traitement."
      },
      {
        title: "Facile à Utiliser",
        description: "Interface conviviale qui vous permet de supprimer des pages de votre PDF en quelques clics."
      }
    ]
  }
};
const edit_page$2 = {
  edit_page_titles: {
    remove_pages: "Options pour supprimer des pages"
  },
  loader_text: "veuillez patienter...",
  add_more_button: "Ajouter plus de fichiers",
  action_buttons: {
    remove_pages: "Supprimer des pages"
  },
  pages: "pages",
  page: "page",
  filenameOptions: {
    label: "Nom du fichier de sortie (facultatif)",
    placeholder: "Entrez le nom du fichier",
    helperText: "Ce sera le nom du PDF compressé lors du téléchargement.",
    cta: "Voir les forfaits",
    upgradeNotice: {
      msg: "Les niveaux de 2.0 à 10.0 sont disponibles avec la version premium.",
      cta: "Mettre à niveau maintenant"
    }
  },
  fileCard: {
    page: "page",
    pages: "pages",
    remove_file: "Supprimer le fichier",
    loading: "Chargement...",
    pages_to_remove: "Pages à supprimer :",
    remaining: "Restantes :",
    warning_cannot_remove_all: "⚠️ Vous ne pouvez pas supprimer toutes les pages du document."
  },
  options: {
    info: 'Pour supprimer des pages du document, cliquez dessus. Vous pouvez également utiliser la touche "shift" pour sélectionner plusieurs pages à la fois.',
    total_pages: "Total de pages",
    pages_to_remove: "Pages à supprimer :",
    placeholder: "exemple : 2,8-32",
    helper_text: "Cliquez sur les pages ci-dessus ou tapez les numéros de page ici (ex : 2,5,8-12)",
    summary_pages_to_remove: "Pages à supprimer :",
    summary_remaining_pages: "Pages restantes :",
    warning_cannot_remove_all: "⚠️ Vous ne pouvez pas supprimer toutes les pages du document."
  }
};
const downloadFile$2 = {
  titles: {
    "remove-pages": [
      "Vos pages ont été supprimées avec succès!"
    ]
  },
  btnText: {
    "remove-pages": [
      "Télécharger le PDF modifié",
      "Télécharger les fichiers modifiés"
    ]
  },
  backto: {
    "remove-pages": "Retour aux pages supprimées"
  }
};
const tools$2 = {
  select: "Sélectionner",
  or_drop: "ou déposez les fichiers ici",
  files: "fichiers",
  drop_files: "Glissez les fichiers ici"
};
const errors$2 = {
  EMPTY_FILE: {
    message: "Le fichier est vide. Veuillez choisir un fichier valide.",
    code: "ERR_EMPTY_FILE"
  },
  FILE_TOO_LARGE: {
    message: "Le fichier est trop volumineux. Choisissez un fichier plus petit ou utilisez notre outil compress-pdf pour réduire la taille.",
    code: "ERR_FILE_SIZE_LIMIT_EXCEEDED"
  },
  NOT_SUPPORTED_TYPE: {
    message: "Le type de fichier n'est pas pris en charge.",
    types: {
      PDF: "Veuillez choisir un fichier PDF valide.",
      DOC: "Veuillez choisir un document Word valide.",
      DOCX: "Veuillez choisir un document Word valide.",
      XLS: "Veuillez choisir une feuille de calcul Excel valide.",
      XLSX: "Veuillez choisir une feuille de calcul Excel valide.",
      PPT: "Veuillez choisir une présentation PowerPoint valide.",
      PPTX: "Veuillez choisir une présentation PowerPoint valide."
    },
    code: "ERR_INVALID_FILE_TYPE"
  },
  FILE_CORRUPT: {
    message: "Le fichier est corrompu et ne peut pas être traité. Veuillez choisir un fichier valide.",
    code: "ERR_FILE_CORRUPT"
  },
  MAX_FILES_EXCEEDED: {
    message: "Vous avez dépassé le nombre maximum de fichiers autorisés. Supprimez certains fichiers et réessayez.",
    code: "ERR_MAX_FILES_EXCEEDED"
  },
  NO_FILES_SELECTED: {
    message: "Aucun fichier sélectionné. Veuillez en sélectionner au moins un.",
    code: "ERR_NO_FILES_SELECTED"
  },
  UNKNOWN_ERROR: {
    message: "Une erreur inconnue s'est produite. Réessayez plus tard ou contactez le support.",
    code: "ERR_UNKNOWN"
  },
  ERR_NETWORK: {
    message: "Une erreur réseau s'est produite. Vérifiez votre connexion internet et réessayez.",
    code: "ERR_NETWORK"
  },
  ERR_UPLOAD_COUNT: {
    message: "Veuillez télécharger au moins deux fichiers pour les fusionner.",
    code: "ERR_UPLOAD_COUNT"
  },
  PASSWORD_REQUIRED: {
    message: "Le PDF nécessite un mot de passe.",
    code: "PASSWORD_REQUIRED"
  },
  INCORRECT_PASSWORD: {
    message: "Le mot de passe saisi est incorrect.",
    code: "INCORRECT_PASSWORD"
  },
  MAX_DAILY_USAGE: {
    message: "Vous avez atteint votre limite d'utilisation quotidienne. Mettez à jour votre plan pour continuer sans interruption.",
    code: "MAX_DAILY_USAGE"
  },
  MAX_PAGES_EXCEEDED: {
    message: "Le PDF dépasse la limite maximale de 50 pages.",
    code: "ERR_MAX_PAGES_EXCEEDED"
  },
  alerts: {
    // Frontend validation
    maxFiles: "Maximum 15 fichiers. Abonnez-vous pour plus !",
    singleFileSize: "La taille du fichier doit être inférieure à 100 Mo. Passez à la version supérieure pour uploader des fichiers plus grands !",
    perFilePages: "500 pages par fichier. Débloquez plus maintenant !",
    fileSize: "50 Mo par fichier. Passez à la version supérieure pour plus !",
    serverError: "Erreur serveur. Veuillez réessayer plus tard.",
    tooManyFiles: "Trop de fichiers téléchargés",
    // Backend file validation
    fileNotUploaded: "Aucun fichier n'a été uploadé. Veuillez sélectionner un fichier.",
    fileEmpty: "Le fichier uploadé est vide. Veuillez sélectionner un fichier valide.",
    fileTooLarge: "Le fichier dépasse la limite de 200 Mo. Passez à la version supérieure pour des fichiers plus grands !",
    invalidFileType: "Type de fichier invalide. Veuillez uploader un format pris en charge.",
    fileCorrupt: "Le fichier semble corrompu. Veuillez essayer un autre fichier.",
    insufficientUnits: "Unités de conversion insuffisantes. Passez à la version supérieure ou rechargez !",
    // Auth errors
    authRequired: "Veuillez vous connecter pour utiliser les fonctionnalités premium.",
    sessionExpired: "Votre session a expiré. Veuillez vous connecter à nouveau.",
    invalidToken: "Échec de l'authentification. Veuillez vous connecter à nouveau.",
    userNotFound: "Compte non trouvé. Veuillez vous connecter à nouveau.",
    authError: "Erreur d'authentification. Veuillez réessayer.",
    notPasswordProtected: "Un ou plusieurs fichiers ne sont pas protégés par mot de passe",
    // PDF-specific errors
    invalidPdf: "Fichier PDF invalide ou corrompu.",
    pdfNotEncrypted: "Ce PDF n'est pas protégé par mot de passe et n'a pas besoin d'être déverrouillé.",
    // Lock-PDF errors
    noLockPassword: "Veuillez fournir un mot de passe pour verrouiller le PDF.",
    lockingFailed: "Échec du verrouillage du PDF. Veuillez réessayer.",
    // Unlock-PDF errors
    noPasswordsProvided: "Veuillez fournir des mots de passe pour les PDFs verrouillés.",
    unlockingFailed: "Échec du déverrouillage du PDF. Veuillez vérifier votre mot de passe et réessayer.",
    incorrectPassword: "Mot de passe incorrect. Veuillez réessayer.",
    passwordRequired: "Ce PDF est protégé par mot de passe. Veuillez entrer le mot de passe.",
    // Settings errors
    invalidSettings: "Paramètres invalides fournis. Veuillez actualiser et réessayer.",
    conversionFailed: "Échec de la conversion. Veuillez réessayer.",
    noPagesSelected: "Veuillez sélectionner au moins une page à supprimer",
    invalidPageSelection: "Format de sélection de pages invalide",
    removalFailed: "Échec de la suppression des pages. Veuillez réessayer.",
    allPagesRemoved: "Impossible de supprimer toutes les pages. Au moins une page doit rester."
  }
};
const adBlockerContent$2 = {
  title: "Bloqueur de publicités détecté",
  description: "Nous avons remarqué que vous utilisez un bloqueur de publicités. Désactivez-le ou passez à premium pour une expérience sans pubs !",
  reloadPage: "Recharger la page",
  upgradeToPremium: "Passer à Premium"
};

const contentFr = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    adBlockerContent: adBlockerContent$2,
    downloadFile: downloadFile$2,
    edit_page: edit_page$2,
    errors: errors$2,
    tool: tool$2,
    tools: tools$2
}, Symbol.toStringTag, { value: 'Module' }));

const tool$1 = {
  Remove_Page: {
    title: "पृष्ठ हटाएं",
    seoTitle: "ऑनलाइन पीडीएफ़ से पृष्ठ हटाएं - पृष्ठ हटाने का उपकरण",
    keywords: "पीडीएफ़ पृष्ठ हटाएं, पीडीएफ़ से पृष्ठ हटाएं, पीडीएफ़ पृष्ठ हटाने वाला, ऑनलाइन पीडीएफ़ पृष्ठ हटाना, पीडीएफ़ संपादक, पीडीएफ़ संशोधन, सुरक्षित पीडीएफ़ उपकरण, उपयोग में आसान पीडीएफ़ उपकरण",
    description: "अपने पीडीएफ़ दस्तावेज़ से अवांछित पृष्ठ हटाएं और संशोधित फ़ाइल को एक नए पीडीएफ़ के रूप में सहेजें।",
    color: "#d63031",
    type: ".pdf",
    to: "/remove-pages",
    features: [
      {
        title: "तेज़ और कुशल",
        description: "गुणवत्ता से समझौता किए बिना अपने पीडीएफ़ दस्तावेज़ों से अवांछित पृष्ठों को तेजी से हटाएं।"
      },
      {
        title: "सुरक्षित और निजी",
        description: "आपकी फाइलें SSL एन्क्रिप्शन के साथ सुरक्षित हैं और प्रोसेसिंग के तुरंत बाद हमारे सर्वर से हटा दी जाती हैं।"
      },
      {
        title: "उपयोग में आसान",
        description: "उपयोगकर्ता के अनुकूल इंटरफ़ेस जो आपको केवल कुछ क्लिक में अपने पीडीएफ़ से पृष्ठ हटाने की अनुमति देता है।"
      }
    ]
  }
};
const edit_page$1 = {
  edit_page_titles: {
    remove_pages: "पृष्ठ हटाने के विकल्प"
  },
  loader_text: "कृपया प्रतीक्षा करें...",
  add_more_button: "और फ़ाइलें जोड़ें",
  action_buttons: {
    remove_pages: "पृष्ठ हटाएं"
  },
  pages: "पृष्ठों",
  page: "पृष्ठ",
  filenameOptions: {
    label: "आउटपुट फ़ाइल का नाम (वैकल्पिक)",
    placeholder: "फ़ाइल का नाम दर्ज करें",
    helperText: "डाउनलोड करते समय यह संकुचित PDF का नाम होगा।",
    cta: "योजनाएँ देखें",
    upgradeNotice: {
      msg: "2.0 से 10.0 तक के स्तर प्रीमियम में उपलब्ध हैं।",
      cta: "अभी अपग्रेड करें"
    }
  },
  fileCard: {
    page: "पृष्ठ",
    pages: "पृष्ठ",
    remove_file: "फ़ाइल हटाएं",
    loading: "लोड हो रहा है...",
    pages_to_remove: "हटाने के लिए पृष्ठ:",
    remaining: "शेष:",
    warning_cannot_remove_all: "⚠️ आप दस्तावेज़ से सभी पृष्ठों को नहीं हटा सकते।"
  },
  options: {
    info: 'दस्तावेज़ से पृष्ठों को हटाने के लिए, उन पर क्लिक करें। आप एक साथ कई पृष्ठों का चयन करने के लिए "shift" कुंजी का भी उपयोग कर सकते हैं।',
    total_pages: "कुल पृष्ठ",
    pages_to_remove: "हटाने के लिए पृष्ठ:",
    placeholder: "उदाहरण: 2,8-32",
    helper_text: "ऊपर दिए गए पृष्ठों पर क्लिक करें या यहां पृष्ठ संख्याएं टाइप करें (उदा: 2,5,8-12)",
    summary_pages_to_remove: "हटाने के लिए पृष्ठ:",
    summary_remaining_pages: "शेष पृष्ठ:",
    warning_cannot_remove_all: "⚠️ आप दस्तावेज़ से सभी पृष्ठों को नहीं हटा सकते।"
  }
};
const downloadFile$1 = {
  titles: {
    "remove-pages": [
      "आपके पृष्ठ सफलतापूर्वक हटाए गए हैं!"
    ]
  },
  btnText: {
    "remove-pages": [
      "संशोधित पीडीएफ डाउनलोड करें",
      "संशोधित फ़ाइलें डाउनलोड करें"
    ]
  },
  backto: {
    "remove-pages": "पृष्ठ हटाने पर वापस जाएं"
  }
};
const tools$1 = {
  select: "चुनें",
  or_drop: "या फ़ाइलें यहाँ ड्रॉप करें",
  files: "फ़ाइलें",
  drop_files: "फ़ाइलें यहाँ ड्रैग करें"
};
const errors$1 = {
  EMPTY_FILE: {
    message: "फ़ाइल खाली है। कृपया वैध फ़ाइल चुनें।",
    code: "ERR_EMPTY_FILE"
  },
  FILE_TOO_LARGE: {
    message: "फ़ाइल बहुत बड़ी है। छोटी फ़ाइल चुनें या हमारा compress-pdf टूल इस्तेमाल करके साइज़ कम करें।",
    code: "ERR_FILE_SIZE_LIMIT_EXCEEDED"
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
      PPTX: "कृपया वैध पावरपॉइंट प्रेजेंटेशन चुनें।"
    },
    code: "ERR_INVALID_FILE_TYPE"
  },
  FILE_CORRUPT: {
    message: "फ़ाइल खराब है और प्रोसेस नहीं की जा सकती। कृपया वैध फ़ाइल चुनें।",
    code: "ERR_FILE_CORRUPT"
  },
  MAX_FILES_EXCEEDED: {
    message: "आपने अधिकतम अनुमत फ़ाइलों की संख्या पार कर ली है। कुछ फ़ाइलें हटाकर दोबारा कोशिश करें।",
    code: "ERR_MAX_FILES_EXCEEDED"
  },
  NO_FILES_SELECTED: {
    message: "कोई फ़ाइल चुनी नहीं गई। कम से कम एक फ़ाइल चुनें।",
    code: "ERR_NO_FILES_SELECTED"
  },
  UNKNOWN_ERROR: {
    message: "एक अज्ञात त्रुटि हुई। बाद में दोबारा कोशिश करें या सपोर्ट से संपर्क करें।",
    code: "ERR_UNKNOWN"
  },
  ERR_NETWORK: {
    message: "नेटवर्क त्रुटि हुई। अपना इंटरनेट कनेक्शन जांचें और दोबारा कोशिश करें।",
    code: "ERR_NETWORK"
  },
  ERR_UPLOAD_COUNT: {
    message: "मर्ज करने के लिए कम से कम दो फ़ाइलें अपलोड करें।",
    code: "ERR_UPLOAD_COUNT"
  },
  PASSWORD_REQUIRED: {
    message: "PDF में पासवर्ड की आवश्यकता है।",
    code: "PASSWORD_REQUIRED"
  },
  INCORRECT_PASSWORD: {
    message: "आपने गलत पासवर्ड डाला है।",
    code: "INCORRECT_PASSWORD"
  },
  MAX_DAILY_USAGE: {
    message: "आपने अपनी दैनिक उपयोग सीमा पूरी कर ली है। बिना रुकावट के जारी रखने के लिए प्लान अपग्रेड करें।",
    code: "MAX_DAILY_USAGE"
  },
  MAX_PAGES_EXCEEDED: {
    message: "PDF अधिकतम 50 पृष्ठों की सीमा से अधिक है।",
    code: "ERR_MAX_PAGES_EXCEEDED"
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
    noPagesSelected: "कृपया हटाने के लिए कम से कम एक पेज चुनें",
    invalidPageSelection: "अमान्य पेज चयन फॉर्मेट",
    removalFailed: "पेज हटाने में विफल। कृपया पुनः प्रयास करें。",
    allPagesRemoved: "सभी पेज हटा नहीं सकते। कम से कम एक पेज रहना चाहिए।"
  }
};
const adBlockerContent$1 = {
  title: "विज्ञापन अवरोधक पता चला",
  description: "हमने देखा कि आप विज्ञापन अवरोधक इस्तेमाल कर रहे हैं। इसे बंद करें या प्रीमियम में अपग्रेड करें ताकि विज्ञापन-मुक्त अनुभव मिले!",
  reloadPage: "पेज रीलोड करें",
  upgradeToPremium: "प्रीमियम में अपग्रेड करें"
};

const contentHi = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    adBlockerContent: adBlockerContent$1,
    downloadFile: downloadFile$1,
    edit_page: edit_page$1,
    errors: errors$1,
    tool: tool$1,
    tools: tools$1
}, Symbol.toStringTag, { value: 'Module' }));

const tool = {
  Remove_Page: {
    title: "删除页面",
    seoTitle: "在线删除PDF页面 - 页面移除工具",
    keywords: "删除PDF页面, 从PDF中删除页面, PDF页面移除工具, 在线PDF页面移除, PDF编辑器, PDF修改, 安全的PDF工具, 易于使用的PDF工具",
    description: "从你的PDF文档中删除不需要的页面，并将修改后的文件保存为新的PDF。",
    color: "#d63031",
    type: ".pdf",
    to: "/remove-pages",
    features: [
      {
        title: "快速高效",
        description: "快速删除PDF文档中不需要的页面而不影响质量。"
      },
      {
        title: "安全和私密",
        description: "您的文件通过SSL加密保护，并在处理后立即从我们的服务器中删除。"
      },
      {
        title: "易于使用",
        description: "用户友好的界面，允许您只需几次点击即可删除PDF中的页面。"
      }
    ]
  }
};
const edit_page = {
  edit_page_titles: {
    remove_pages: "删除页面选项"
  },
  loader_text: "请稍候...",
  add_more_button: "添加更多文件",
  action_buttons: {
    remove_pages: "删除页面"
  },
  pages: "页",
  page: "页",
  filenameOptions: {
    label: "输出文件名（可选）",
    placeholder: "输入文件名",
    helperText: "这将是下载时压缩 PDF 的名称。",
    cta: "查看方案",
    upgradeNotice: {
      msg: "2.0 到 10.0 的级别可在高级版中使用。",
      cta: "立即升级"
    }
  },
  fileCard: {
    page: "页",
    pages: "页",
    remove_file: "删除文件",
    loading: "加载中...",
    pages_to_remove: "要删除的页面：",
    remaining: "剩余：",
    warning_cannot_remove_all: "⚠️ 您不能删除文档中的所有页面。"
  },
  options: {
    info: '要从文档中删除页面，请点击它们。您也可以使用"shift"键一次选择多个页面。',
    total_pages: "总页数",
    pages_to_remove: "要删除的页面：",
    placeholder: "例如：2,8-32",
    helper_text: "点击上面的页面或在此处输入页码（例如：2,5,8-12）",
    summary_pages_to_remove: "要删除的页面：",
    summary_remaining_pages: "剩余页面：",
    warning_cannot_remove_all: "⚠️ 您不能删除文档中的所有页面。"
  }
};
const downloadFile = {
  titles: {
    "remove-pages": [
      "您的页面已成功删除！"
    ]
  },
  btnText: {
    "remove-pages": [
      "下载修改后的PDF",
      "下载修改后的文件"
    ]
  },
  backto: {
    "remove-pages": "返回到删除页面"
  }
};
const tools = {
  select: "选择",
  or_drop: "或将文件拖放到此处",
  files: "文件",
  drop_files: "将文件拖到这里"
};
const errors = {
  EMPTY_FILE: {
    message: "文件为空。请选择有效文件。",
    code: "ERR_EMPTY_FILE"
  },
  FILE_TOO_LARGE: {
    message: "文件太大。请选更小的文件，或使用我们的 compress-pdf 工具减小文件大小。",
    code: "ERR_FILE_SIZE_LIMIT_EXCEEDED"
  },
  NOT_SUPPORTED_TYPE: {
    message: "不支持的文件类型。",
    types: {
      PDF: "请选择有效的 PDF 文件。",
      DOC: "请选择有效的 Word 文档。",
      DOCX: "请选择有效的 Word 文档。",
      XLS: "请选择有效的 Excel 表格。",
      XLSX: "请选择有效的 Excel 表格。",
      PPT: "请选择有效的 PowerPoint 演示文稿。",
      PPTX: "请选择有效的 PowerPoint 演示文稿。"
    },
    code: "ERR_INVALID_FILE_TYPE"
  },
  FILE_CORRUPT: {
    message: "文件已损坏，无法处理。请选有效文件。",
    code: "ERR_FILE_CORRUPT"
  },
  MAX_FILES_EXCEEDED: {
    message: "已超过允许的最大文件数量。请删除部分文件后再试。",
    code: "ERR_MAX_FILES_EXCEEDED"
  },
  NO_FILES_SELECTED: {
    message: "未选择任何文件。请至少选择一个文件。",
    code: "ERR_NO_FILES_SELECTED"
  },
  UNKNOWN_ERROR: {
    message: "发生未知错误。请稍后再试或联系客服。",
    code: "ERR_UNKNOWN"
  },
  ERR_NETWORK: {
    message: "发生网络错误。请检查网络连接后再试。",
    code: "ERR_NETWORK"
  },
  ERR_UPLOAD_COUNT: {
    message: "请至少上传两个文件进行合并。",
    code: "ERR_UPLOAD_COUNT"
  },
  PASSWORD_REQUIRED: {
    message: "PDF 需要密码。",
    code: "PASSWORD_REQUIRED"
  },
  INCORRECT_PASSWORD: {
    message: "您输入的密码不正确。",
    code: "INCORRECT_PASSWORD"
  },
  MAX_DAILY_USAGE: {
    message: "您已达到每日使用上限。请升级套餐，继续无中断使用此功能。",
    code: "MAX_DAILY_USAGE"
  },
  MAX_PAGES_EXCEEDED: {
    message: "PDF 超过最大页数限制 50 页。",
    code: "ERR_MAX_PAGES_EXCEEDED"
  },
  alerts: {
    // Frontend validation
    maxFiles: "最多 15 个文件。订阅以获取更多！",
    singleFileSize: "文件大小必须小于 100 MB。升级以上传更大的文件！",
    perFilePages: "每个文件 500 页。现在解锁更多！",
    fileSize: "每个文件 50MB。升级以获取更多！",
    serverError: "服务器错误。请稍后重试。",
    tooManyFiles: "上传的文件太多",
    // Backend file validation
    fileNotUploaded: "未上传文件。请选择一个文件。",
    fileEmpty: "上传的文件为空。请选择一个有效文件。",
    fileTooLarge: "文件超过 200MB 限制。升级以处理更大的文件！",
    invalidFileType: "无效的文件类型。请上传支持的格式。",
    fileCorrupt: "文件似乎已损坏。请尝试另一个文件。",
    insufficientUnits: "转换单位不足。升级或充值！",
    // Auth errors
    authRequired: "请登录以使用高级功能。",
    sessionExpired: "您的会话已过期。请重新登录。",
    invalidToken: "认证失败。请重新登录。",
    userNotFound: "未找到账户。请重新登录。",
    authError: "认证错误。请重试。",
    notPasswordProtected: "一个或多个文件未受密码保护",
    // PDF-specific errors
    invalidPdf: "无效或损坏的 PDF 文件。",
    pdfNotEncrypted: "此 PDF 未受密码保护，不需要解锁。",
    // Lock-PDF errors
    noLockPassword: "请提供密码以锁定 PDF。",
    lockingFailed: "锁定 PDF 失败。请重试。",
    // Unlock-PDF errors
    noPasswordsProvided: "请为锁定的 PDF 提供密码。",
    unlockingFailed: "解锁 PDF 失败。请检查您的密码并重试。",
    incorrectPassword: "密码不正确。请重试。",
    passwordRequired: "此 PDF 受密码保护。请输入密码。",
    // Settings errors
    invalidSettings: "提供的设置无效。请刷新并重试。",
    conversionFailed: "转换失败。请重试。",
    noPagesSelected: "请至少选择一页删除",
    invalidPageSelection: "无效的页面选择格式",
    removalFailed: "删除页面失败。请重试。",
    allPagesRemoved: "无法删除所有页面。至少必须保留一页。"
  }
};
const adBlockerContent = {
  title: "检测到广告拦截器",
  description: "我们注意到您正在使用广告拦截器。请考虑关闭它，或升级到高级版享受无广告体验！",
  reloadPage: "重新加载页面",
  upgradeToPremium: "升级到高级版"
};

const contentZh = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    adBlockerContent,
    downloadFile,
    edit_page,
    errors,
    tool,
    tools
}, Symbol.toStringTag, { value: 'Module' }));

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a, _b;
const $$Astro = createAstro();
async function getStaticPaths() {
  const languages = [
    {
      lang: "ar",
      content: contentAr,
      howTo: howToSchema_ar,
      ogLocale: "ar_AR"
    },
    {
      lang: "es",
      content: contentEs,
      howTo: howToSchema_es,
      ogLocale: "es_ES"
    },
    {
      lang: "fr",
      content: contentFr,
      howTo: howToSchema_fr,
      ogLocale: "fr_FR"
    },
    {
      lang: "hi",
      content: contentHi,
      howTo: howToSchema_hi,
      ogLocale: "hi_IN"
    },
    {
      lang: "zh",
      content: contentZh,
      howTo: howToSchema_zh,
      ogLocale: "zh_CN"
    }
  ];
  return languages.map((langConfig) => ({
    params: { lang: langConfig.lang },
    props: {
      lang: langConfig.lang,
      content: langConfig.content,
      // explicitly cast to any to break internal schema-dts unnameable type generation lines
      howToSchema: langConfig.howTo,
      ogLocale: langConfig.ogLocale
    }
  }));
}
const $$RemovePages = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$RemovePages;
  const { lang, content, howToSchema, ogLocale } = Astro2.props;
  const { tool, tools, errors, edit_page, downloadFile, adBlockerContent } = content;
  const item = tool["Remove_Page"];
  const currentRoute = "/remove-pages";
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `PDFEquips ${item.title}`,
    description: item.description,
    url: `https://www.pdfequips.com${currentRoute}`
  };
  const seoConfig = {
    title: item.seoTitle,
    description: item.description,
    to: item.to,
    openGraph: {
      url: item.to,
      title: item.seoTitle,
      description: item.description,
      images: [
        {
          url: `https://www.pdfequips.com/images${item.to}.png`,
          width: 1200,
          height: 630,
          alt: item.title,
          type: "image/png"
        }
      ],
      site_name: item.title,
      locale: ogLocale,
      type: "website"
    },
    twitter: {
      handle: "@pdfequips",
      site: "@pdfequips",
      cardType: "summary_large_image"
    }
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": item.title, "description": item.description, "seoTitle": item.seoTitle, "to": item.to, "seoConfig": seoConfig, "lang": lang }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "ToolWrapper", ToolWrapper, { "client:load": true, "tools": tools, "data": item, "lang": lang, "errors": errors, "edit_page": edit_page, "pages": edit_page.pages, "page": edit_page.page, "downloadFile": downloadFile, "features": item.features, "howTo": howToSchema, "seoTitle": item.title, "to": currentRoute, "adBlockerContent": adBlockerContent, "client:component-hydration": "load", "client:component-path": "/home/pdfequips.com/remove-pages/components/ToolWrapper", "client:component-export": "ToolWrapper" })} `, "head": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": ($$result3) => renderTemplate(_b || (_b = __template([' <script type="application/ld+json">', "<\/script> ", '<link rel="canonical"', "> "])), unescapeHTML(JSON.stringify(websiteSchema)), howToSchema && renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(howToSchema))), addAttribute(`https://www.pdfequips.com/${lang}${item.to}`, "href")) })}` })}`;
}, "/home/pdfequips.com/remove-pages/src/pages/[lang]/remove-pages.astro", void 0);

const $$file = "/home/pdfequips.com/remove-pages/src/pages/[lang]/remove-pages.astro";
const $$url = "/remove-pages/[lang]/remove-pages";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$RemovePages,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
