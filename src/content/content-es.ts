import type { edit_page as _edit_page, tools as _tools, downloadFile as _downloadFile, errors as _errors } from "../content";
import type { adBlockerContentType, Tool } from "./content";

export const edit_page: _edit_page = {
  edit_page_titles: {
    pdf_to_powerpoint: "Opciones de PDF a PowerPoint",
    word_to_pdf: "Opciones de WORD a PDF",
    powerpoint_to_pdf: "Opciones de POWERPOINT a PDF",
    excel_to_pdf: "Opciones de EXCEL a PDF",
    html_to_pdf: "Opciones de HTML a PDF",
    pdf_to_word: "Opciones de PDF a WORD",
    pdf_to_excel: "Opciones de PDF a EXCEL",
    pdf_to_pdf_a: "Opciones de PDF a PDF/A",
    pdf_to_text: "Opciones de PDF a texto",
  },
  loader_text: "Por favor espere...",
  add_more_button: "Agregar más archivos",
  action_buttons: {
    pdf_to_powerpoint: "Convertir a PowerPoint",
    word_to_pdf: "Convertir a PDF",
    powerpoint_to_pdf: "Convertir a PDF",
    excel_to_pdf: "Convertir a PDF",
    html_to_pdf: "Convertir a PDF",
    pdf_to_word: "Convertir a Word",
    pdf_to_excel: "Convertir a Excel",
    pdf_to_pdf_a: "Convertir a PDF/A",
    pdf_to_text: "Convertir a Texto",
  },
  pages: "páginas",
  page: "página",
  cta: "Ver Planes",
  rechargeCta: "Recargar Unidades",
  pdf_a_options: {
    info: "Seleccione el formato PDF/A deseado en el menú desplegable a continuación para convertir su PDF. Esto asegurará que el documento cumpla con el estándar de archivo elegido.",
    placeholder: "Elegir formato PDF/A"
  },
  languageSelectContent: {
    placeholder: "Elegir idiomas (máximo 3)",
    warning: "Este documento está escaneado. Por favor seleccione su idioma para garantizar resultados precisos.",
    ocr_warning: "Añade el idioma del documento para obtener resultados más precisos.",
  },
  converter: {
    free: "Básico",
    premium: "Premium",
    freeToolTip: "Conversión básica - formato limitado",
    premiumToolTip: "Conversión de alta precisión con preservación completa de estilos"
  },
  fileNameInput: {
    label: "Nombre del archivo de salida (Opcional)",
    placeholder: "Ingresar nombre del archivo",
    helperText: "Este será el nombre del documento que se descargará.",
  }
};

export const tool: Tool = {
  PDF_to_Powerpoint: {
    title: "PDF a PowerPoint",
    seoTitle: "Convertir PDF a PowerPoint - Convertidor Gratuito en Línea",
    description: "Convertir archivos PDF a presentaciones PowerPoint editables",
    color: "#C13B1B",
    type: ".pdf",
    to: "/pdf-to-powerpoint",
    features: [
      {
        title: "Convertir PDF a PowerPoint con un solo clic",
        description: "Convierte rápidamente documentos PDF a presentaciones PowerPoint usando nuestro convertidor en línea, asegurando una fácil compartición y almacenamiento. Mantén el formato y diseño original de todas las diapositivas."
      },
      {
        title: "Convertir PDF a PowerPoint rápidamente y gratis",
        description: "PDFEquips convierte archivos PDF a formato PowerPoint PPT (ppt o pptx) en solo unos segundos. Además, es una herramienta completamente gratuita en línea que no requiere instalación ni registro, y no agrega marcas de agua."
      },
      {
        title: "Conversión simple de PDF a PowerPoint",
        description: "Con nuestro convertidor de PDF a PowerPoint, no tienes que navegar por configuraciones y opciones. Solo sube el archivo, relájate y ¡disfruta del espectáculo!"
      }
    ],
    keywords: "PDF a PowerPoint, convertir PDF a PPT, convertidor PDF a PPT, PDF a PowerPoint gratis, PDF a PowerPoint en línea, PDF a PPTX, convertir PDF a PowerPoint en línea, PDF a PPT gratis, convertidor PDF a PPTX, herramienta PDF a PPT, convertidor PDF a PPT en línea, PDF a PowerPoint gratuito, convertir PDF a PPT gratis, PDF a PPT en línea, PDF a PPTX gratis, convertir PDF a PPT al instante, herramienta PDF a PowerPoint gratis"
  },
  WORD_to_PDF: {
    title: "WORD a PDF",
    seoTitle: "Convertir Word a PDF - Convertidor Gratuito en Línea",
    description: "Convertir archivos Microsoft Word a documentos PDF",
    color: "#1B5EBE",
    type: ".docx",
    to: "/word-to-pdf",
    features: [
      {
        title: "Fácil de usar",
        description: "Independientemente de tu rol —ya seas trabajador, estudiante o profesor— nuestras herramientas PDF son fáciles de usar. Convertir archivos WORD a documentos PDF es simple y solo requiere unos pocos clics"
      },
      {
        title: "Conversión simple y rápida",
        description: "Gracias a su método avanzado de preservación de diseños y estilos originales, PDFEquips asegura conversiones fluidas de WORD a PDF. Disfruta de operaciones rápidas sin comprometer la integridad del documento."
      },
      {
        title: "Convertir un archivo WORD o múltiples archivos WORD",
        description: "Puedes convertir fácilmente un archivo WORD o varios archivos WORD sin complicaciones usando PDFEquips. Nuestras herramientas directas aseguran una conversión rápida y precisa, ahorrándote tiempo y esfuerzo"
      }
    ],
    keywords: "Word a PDF, convertir Word a PDF, Word a PDF gratis, convertidor Word a PDF, Word a PDF en línea, Word a PDF gratuito, DOCX a PDF, convertidor Word a PDF en línea, herramienta Word a PDF, convertir DOCX a PDF, convertidor DOCX a PDF gratis, documento Word a PDF, convertir archivo Word a PDF, Word a PDF sin registro, herramienta Word a PDF gratis, Word a PDF en línea gratis, conversión rápida Word a PDF, Microsoft Word a PDF"
  },
  POWERPOINT_to_PDF: {
    title: "POWERPOINT a PDF",
    seoTitle: "Convertir PowerPoint a PDF - Convertidor Gratuito en Línea",
    description: "Convertir archivos Microsoft PowerPoint a documentos PDF",
    color: "#C13B1B",
    type: ".pptx",
    to: "/powerpoint-to-pdf",
    features: [
      {
        title: "Convertir PowerPoint a PDF con un solo clic",
        description: "Convierte rápidamente presentaciones PowerPoint a documentos PDF usando nuestro convertidor en línea, asegurando una fácil compartición y almacenamiento. Mantén el formato y diseño original de todas las diapositivas"
      },
      {
        title: "Convertir PowerPoint a PDF rápidamente y gratis",
        description: "PDFEquips convierte archivos PowerPoint PPT (ppt o pptx) a PDF en solo unos segundos. Además, es una herramienta completamente gratuita en línea que no requiere instalación ni registro, y no agrega marcas de agua"
      },
      {
        title: "Conversión simple de PowerPoint a PDF",
        description: "Con nuestro convertidor de PPT a PDF, no tienes que navegar por configuraciones y opciones. Solo sube el archivo, relájate y ¡disfruta del espectáculo!"
      }
    ],
    keywords: "PowerPoint a PDF, convertir PowerPoint a PDF, PowerPoint a PDF gratis, convertidor PPT a PDF, PowerPoint a PDF en línea, PPT a PDF gratis, convertidor PowerPoint a PDF en línea, herramienta PPT a PDF, convertir PPTX a PDF, convertidor PPT a PDF gratis, presentación PowerPoint a PDF, convertir archivo PPT a PDF, PPT a PDF sin registro, herramienta PPTX a PDF gratis, PowerPoint a PDF en línea gratis, conversión rápida PowerPoint a PDF, Microsoft PowerPoint a PDF"
  },
  EXCEL_to_PDF: {
    title: "EXCEL a PDF",
    seoTitle: "Convertir Excel a PDF - Convertidor Gratuito en Línea",
    description: "Convertir archivos Microsoft Excel a documentos PDF",
    color: "#10793F",
    type: ".xlsx",
    to: "/excel-to-pdf",
    features: [
      {
        title: "Convertidor fácil de usar de Excel a PDF",
        description: "Un convertidor adecuado para convertir archivos XLS, XLSX a formato PDF facilita su compartición y almacenamiento seguro. Protege tus datos de cambios y disfruta del acceso a tus archivos Excel en cualquier dispositivo, tengas o no Microsoft Office"
      },
      {
        title: "Herramienta de conversión rápida y gratuita en línea",
        description: "PDFEquips es una herramienta completamente gratuita en línea para convertir archivos Excel (xls o xlsx) a PDF. No requiere instalación ni registro, y no agrega marcas de agua. Además, convierte archivos Excel grandes en solo unos segundos"
      },
      {
        title: "Conversión segura de XLS a PDF",
        description: "Tus archivos están protegidos con cifrado TLS robusto (Seguridad de Capa de Transporte), y todos los archivos Excel y PDF se eliminan automáticamente de nuestros servidores después de una hora. Para más información, consulta nuestra política de privacidad"
      }
    ],
    keywords: "Excel a PDF, convertir Excel a PDF, Excel a PDF gratis, convertidor XLS a PDF, Excel a PDF en línea, XLSX a PDF gratis, convertidor Excel a PDF en línea, herramienta Excel a PDF, convertir XLSX a PDF, convertidor XLS a PDF gratis, hoja de cálculo Excel a PDF, convertir archivo Excel a PDF, Excel a PDF sin registro, herramienta Excel a PDF gratis, Excel a PDF en línea gratis, conversión rápida Excel a PDF, Microsoft Excel a PDF"
  },
  HTML_to_PDF: {
    title: "HTML a PDF",
    seoTitle: "Convertir HTML a PDF - Convertidor Gratuito en Línea",
    description: "Convertir páginas web HTML a documentos PDF",
    color: "rgb(228, 77, 38)",
    type: ".html",
    to: "/html-to-pdf",
    features: [
      {
        title: "Conversión instantánea, sin registro requerido.",
        description: "No necesitas registrarte ni proporcionar información para convertir tu HTML a PDF. Nuestro convertidor es gratuito para todos y ofrece resultados rápidos."
      },
      {
        title: "Gestión segura de documentos.",
        description: "Tus descargas y archivos PDF generados se procesan con cifrado TLS para mayor seguridad. Ten la certeza de que tu privacidad de datos está protegida. Consulta nuestra política de privacidad para más información."
      },
      {
        title: "Procesamiento basado en la nube.",
        description: "Disfruta de la comodidad del procesamiento basado en la nube para conversiones HTML a PDF. Nuestro servicio en línea asegura una conversión rápida y eficiente sin ralentizar tu computadora. Accede a nuestro servicio desde cualquier lugar y en cualquier momento."
      }
    ],
    keywords: "HTML a PDF, convertir HTML a PDF, HTML a PDF gratis, convertidor HTML a PDF, HTML a PDF en línea, HTML a PDF gratuito, página web a PDF, convertir página web a PDF, herramienta HTML a PDF, convertidor HTML a PDF en línea, convertidor HTML a PDF gratis, convertidor página web a PDF, convertir archivo HTML a PDF, HTML a PDF sin registro, herramienta HTML a PDF gratis, HTML a PDF en línea gratis, conversión rápida HTML a PDF, web a PDF"
  },
  PDF_to_WORD: {
    title: "PDF a WORD",
    seoTitle: "Convertir PDF a Word - Convertidor Gratuito en Línea",
    description: "Convertir archivos PDF a documentos Microsoft Word",
    color: "#1B5EBE",
    type: ".pdf",
    to: "/pdf-to-word",
    features: [
      {
        title: "Conversión simple y rápida",
        description: "Gracias a su método avanzado de preservación de diseños y estilos originales, PDFEquips asegura conversiones fluidas de PDF a Word. Disfruta de operaciones rápidas sin comprometer la integridad del documento."
      },
      {
        title: "Fácil de usar",
        description: "Independientemente de tu rol —ya seas trabajador, estudiante o profesor— nuestras herramientas PDF son fáciles de usar. Convertir archivos PDF a documentos Word es simple y solo requiere unos pocos clics"
      },
      {
        title: "Convertir un archivo PDF o múltiples archivos PDF",
        description: "Puedes convertir fácilmente un archivo PDF o varios archivos PDF sin complicaciones usando PDFEquips. Nuestras herramientas directas aseguran una conversión rápida y precisa, ahorrándote tiempo y esfuerzo"
      }
    ],
    keywords: "PDF a Word, convertir PDF a Word, PDF a DOCX gratis, convertidor PDF a Word, PDF a Word en línea, PDF a DOCX gratuito, convertidor PDF a DOCX en línea, herramienta PDF a Word, convertir PDF a DOC, convertidor PDF a DOC gratis, documento PDF a Word, convertir archivo PDF a Word, PDF a DOCX sin registro, herramienta PDF a Word gratis, PDF a Word en línea gratis, conversión rápida PDF a Word, PDF a Microsoft Word"
  },
  PDF_to_EXCEL: {
    title: "PDF a EXCEL",
    seoTitle: "Convertir PDF a Excel - Convertidor Gratuito en Línea",
    description: "Convertir archivos PDF a documentos Microsoft Excel",
    color: "#10793F",
    type: ".pdf",
    to: "/pdf-to-excel",
    features: [
      {
        title: "Herramienta de conversión rápida y gratuita en línea",
        description: "PDFEquips es una herramienta completamente gratuita en línea para convertir archivos PDF a Excel (XLS o XLSX). No requiere instalación ni registro, y no agrega marcas de agua. Además, convierte archivos PDF grandes en solo unos segundos."
      },
      {
        title: "Convertidor fácil de usar de PDF a Excel",
        description: "Un convertidor adecuado para convertir archivos PDF a formato XLS o XLSX facilita su compartición y almacenamiento seguro. Protege tus datos de cambios y disfruta del acceso a tus archivos Excel en cualquier dispositivo, tengas o no Microsoft Office."
      },
      {
        title: "Conversión segura de PDF a XLS",
        description: "Tus archivos están protegidos con cifrado TLS robusto (Seguridad de Capa de Transporte), y todos los archivos PDF y Excel se eliminan automáticamente de nuestros servidores después de una hora. Para más información, consulta nuestra política de privacidad."
      }
    ],
    keywords: "PDF a Excel, convertir PDF a Excel, PDF a XLSX gratis, convertidor PDF a Excel, PDF a Excel en línea, PDF a XLS gratis, convertidor PDF a XLSX en línea, herramienta PDF a Excel, convertir PDF a XLS, convertidor PDF a Excel gratis, documento PDF a Excel, convertir archivo PDF a Excel, PDF a XLSX sin registro, herramienta PDF a Excel gratis, PDF a Excel en línea gratis, conversión rápida PDF a Excel, PDF a Microsoft Excel"
  },
  PDF_to_PDF_A: {
    title: "PDF a PDF/A",
    seoTitle: "Convertir PDF a PDF/A - Convertidor de Archivo Gratuito",
    description: "Convertir archivos PDF a formato PDF/A para archivo a largo plazo",
    color: "#000000",
    type: ".pdf",
    to: "/pdf-to-pdf-a",
    features: [
      {
        title: "Mantener la integridad de los documentos",
        description: "Convierte tus archivos PDF al formato PDF/A y asegúrate de que la integridad del documento, incluyendo contenido, estructura y apariencia, se preserve"
      },
      {
        title: "Cumplimiento con estándares de archivo",
        description: "Asegura el cumplimiento con estándares de archivo convirtiendo tus documentos PDF al formato PDF/A, adecuado para almacenamiento a largo plazo y requisitos legales"
      },
      {
        title: "Accesibilidad y compatibilidad a largo plazo",
        description: "Al convertir tus archivos PDF al formato PDF/A, aseguras la accesibilidad y compatibilidad a largo plazo con software y sistemas futuros, minimizando el riesgo de obsolescencia del formato"
      }
    ],
    keywords: "PDF a PDF/A, convertir PDF a PDF/A, PDF a PDF/A gratis, convertidor PDF a PDF/A, PDF a PDF/A en línea, PDF a PDF archival, conversión PDF/A, convertir PDF a formato archival, convertidor PDF a PDF/A gratis, herramienta PDF a PDF/A, convertir PDF a PDF/A en línea, PDF a documento archival, PDF a PDF/A gratuito, convertidor PDF a PDF/A en línea, cumplimiento PDF a PDF/A, almacenamiento PDF a largo plazo, PDF a PDF/A para archivo, PDF a PDF/A en línea gratis"
  },
  PDF_to_Text: {
    title: "PDF a Texto",
    seoTitle: "Convertir PDF a Texto - Convertidor de Texto Plano Gratuito",
    description: "Convertir archivos PDF a documentos de texto plano",
    color: "#4493e1",
    type: ".pdf",
    to: "/pdf-to-text",
    features: [
      {
        title: "Conversión robusta y precisa",
        description: "Benefíciate de capacidades de conversión robustas y precisas, asegurando una extracción de alta calidad del contenido de texto de documentos PDF, incluyendo soporte para varios idiomas como el árabe."
      },
      {
        title: "Procesamiento rápido",
        description: "Experimenta velocidades de procesamiento rápidas con nuestro convertidor de PDF a texto, permitiendo una conversión rápida de archivos PDF a formato de texto plano sin comprometer la precisión."
      },
      {
        title: "Preservación de la estructura del documento",
        description: "Convierte archivos PDF a texto plano mientras preservas la estructura y formato del documento, asegurando la legibilidad y usabilidad del contenido de texto extraído."
      }
    ],
    keywords: "PDF a texto, convertir PDF a texto, PDF a texto gratis, convertidor PDF a texto, PDF a texto en línea, PDF a texto plano, extraer texto de PDF, PDF a texto gratuito, convertidor PDF a texto en línea, herramienta PDF a texto, convertir PDF a TXT, convertidor PDF a texto gratis, documento PDF a texto, convertir archivo PDF a texto, PDF a TXT sin registro, herramienta PDF a texto gratis, PDF a texto en línea gratis, conversión rápida PDF a texto, convertidor PDF a texto plano"
  }
}

export const tools: _tools = {
  select: "Seleccionar",
  or_drop: "o suelta archivos aquí",
  files: "archivos",
  drop_files: "Arrastra archivos aquí",
};
export const downloadFile: _downloadFile = {
  titles: {
    "pdf-to-powerpoint": [
      "¡Los archivos PDF han sido convertidos a PowerPoint!",
      "¡El archivo PDF ha sido convertido a PowerPoint!",
    ],
    "word-to-pdf": [
      "¡Los archivos Word han sido convertidos a PDF!",
      "¡El archivo Word ha sido convertido a PDF!",
    ],
    "powerpoint-to-pdf": [
      "¡Los archivos PowerPoint han sido convertidos a PDF!",
      "¡El archivo PowerPoint ha sido convertido a PDF!",
    ],
    "excel-to-pdf": [
      "¡Los archivos Excel han sido convertidos a PDF!",
      "¡El archivo Excel ha sido convertido a PDF!",
    ],
    "html-to-pdf": [
      "¡Los archivos HTML han sido convertidos a PDF!",
      "¡El archivo HTML ha sido convertido a PDF!",
    ],
    "pdf-to-word": [
      "¡Los archivos PDF han sido convertidos a Word!",
      "¡El archivo PDF ha sido convertido a Word!",
    ],
    "pdf-to-excel": [
      "¡Los archivos PDF han sido convertidos a Excel!",
      "¡El archivo PDF ha sido convertido a Excel!",
    ],
    "pdf-to-pdf-a": [
      "¡Los archivos PDF han sido convertidos a PDF/A!",
      "¡El archivo PDF ha sido convertido a PDF/A!",
    ],
    "pdf-to-text": [
      "¡Los archivos PDF han sido convertidos a Texto!",
      "¡El archivo PDF ha sido convertido a Texto!",
    ],
  },

  btnText: {
    "pdf-to-powerpoint": [
      "Descargar archivos PowerPoint convertidos",
      "Descargar archivo PowerPoint convertido",
    ],
    "word-to-pdf": [
      "Descargar archivos PDF convertidos",
      "Descargar archivo PDF convertido",
    ],
    "powerpoint-to-pdf": [
      "Descargar archivos PDF convertidos",
      "Descargar archivo PDF convertido",
    ],
    "excel-to-pdf": [
      "Descargar archivos PDF convertidos",
      "Descargar archivo PDF convertido",
    ],
    "html-to-pdf": [
      "Descargar archivos PDF convertidos",
      "Descargar archivo PDF convertido",
    ],
    "pdf-to-word": [
      "Descargar archivos Word convertidos",
      "Descargar archivo Word convertido",
    ],
    "pdf-to-excel": [
      "Descargar archivos Excel convertidos",
      "Descargar archivo Excel convertido",
    ],
    "pdf-to-pdf-a": [
      "Descargar archivos PDF/A convertidos",
      "Descargar archivo PDF/A convertido",
    ],
    "pdf-to-text": [
      "Descargar archivos de texto convertidos",
      "Descargar archivo de texto convertido",
    ],
  },

  backto: {
    "pdf-to-powerpoint": "Volver a PDF a PowerPoint",
    "word-to-pdf": "Volver a Word a PDF",
    "powerpoint-to-pdf": "Volver a PowerPoint a PDF",
    "excel-to-pdf": "Volver a Excel a PDF",
    "html-to-pdf": "Volver a HTML a PDF",
    "pdf-to-word": "Volver a PDF a Word",
    "pdf-to-excel": "Volver a PDF a Excel",
    "pdf-to-pdf-a": "Volver a PDF a PDF/A",
    "pdf-to-text": "Volver a PDF a Texto",
  },
};


// Spanish (es) – copy into errors.es.ts
export const errors: _errors = {
  EMPTY_FILE: {
    message: "El archivo está vacío. Por favor elige un archivo válido.",
    code: "ERR_EMPTY_FILE",
  },
  FILE_TOO_LARGE: {
    message:
      "El archivo es demasiado grande. Elige un archivo más pequeño o usa nuestra herramienta compress-pdf para reducir el tamaño.",
    code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
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
      PPTX: "Por favor elige una presentación PowerPoint válida.",
    },
    code: "ERR_INVALID_FILE_TYPE",
  },
  FILE_CORRUPT: {
    message:
      "El archivo está corrupto y no se puede procesar. Elige un archivo válido.",
    code: "ERR_FILE_CORRUPT",
  },
  MAX_FILES_EXCEEDED: {
    message:
      "Has excedido el número máximo de archivos permitidos. Elimina algunos archivos e inténtalo de nuevo.",
    code: "ERR_MAX_FILES_EXCEEDED",
  },
  NO_FILES_SELECTED: {
    message: "No se seleccionaron archivos. Selecciona al menos uno.",
    code: "ERR_NO_FILES_SELECTED",
  },
  UNKNOWN_ERROR: {
    message:
      "Ocurrió un error desconocido. Inténtalo de nuevo más tarde o contacta con soporte.",
    code: "ERR_UNKNOWN",
  },
  ERR_NETWORK: {
    message:
      "Ocurrió un error de red. Verifica tu conexión a internet e inténtalo de nuevo.",
    code: "ERR_NETWORK",
  },
  ERR_UPLOAD_COUNT: {
    message: "Por favor sube al menos dos archivos para combinarlos.",
    code: "ERR_UPLOAD_COUNT",
  },
  PASSWORD_REQUIRED: {
    message: "El PDF requiere contraseña.",
    code: "PASSWORD_REQUIRED",
  },
  INCORRECT_PASSWORD: {
    message: "La contraseña ingresada es incorrecta.",
    code: "INCORRECT_PASSWORD",
  },
  MAX_DAILY_USAGE: {
    message:
      "Has alcanzado tu límite diario de uso. Actualiza tu plan para continuar sin interrupciones.",
    code: "MAX_DAILY_USAGE",
  },
  MAX_PAGES_EXCEEDED: {
    message: "El PDF supera el límite máximo de 50 páginas.",
    code: "ERR_MAX_PAGES_EXCEEDED",
  },
  alerts: {
    // Frontend validation
    maxFiles: "Máximo 15 archivos. ¡Suscríbete para más!",
    singleFileSize: "El archivo debe ser menor de 100 MB. ¡Actualiza para subir archivos más grandes!",
    perFilePages: "500 páginas por archivo. ¡Desbloquea más ahora!",
    fileSize: "50 MB por archivo. ¡Actualiza para más!",
    // Backend file validation
    fileNotUploaded: "No se subió ningún archivo. Por favor selecciona un archivo.",
    fileEmpty: "El archivo subido está vacío. Por favor selecciona un archivo válido.",
    fileTooLarge: "El archivo excede 200 MB. ¡Actualiza para archivos más grandes!",
    invalidFileType: "Tipo de archivo inválido. Por favor sube un formato compatible.",
    fileCorrupt: "El archivo parece estar dañado. Por favor intenta con otro archivo.",
    insufficientUnits: "Unidades de conversión insuficientes. ¡Actualiza o recarga!",
    // Auth errors
    authRequired: "Por favor inicia sesión para usar funciones premium.",
    sessionExpired: "Tu sesión ha expirado. Por favor inicia sesión nuevamente.",
    invalidToken: "Autenticación fallida. Por favor inicia sesión nuevamente.",
    userNotFound: "Cuenta no encontrada. Por favor inicia sesión nuevamente.",
    authError: "Error de autenticación. Por favor intenta de nuevo.",
    serverError: "Error del servidor. Por favor intenta más tarde.",
  },
};

export const adBlockerContent: adBlockerContentType = {
  title: "Bloqueador de anuncios detectado",
  description: "Notamos que usas un bloqueador de anuncios. Desactívalo o actualiza a premium para una experiencia sin anuncios.",
  reloadPage: "Recargar página",
  upgradeToPremium: "Actualizar a Premium"
};