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

export const landing_page: _landing_page = {
  hero: {
    title: "Mejore su productividad con nuestra solución integral de PDF",
    description:
      "Lleve sus flujos de trabajo PDF al siguiente nivel: desbloquee nuevas posibilidades con nuestro completo kit de herramientas.",
  },
  features: {
    title: "Cómo PDFEquips puede simplificar tus tareas PDF",
    description:
      "PDFEquips te ofrece una variedad de funciones para manejar tus archivos PDF con facilidad. Ya sea que quieras fusionar, dividir, comprimir, convertir, editar o proteger tus PDF, puedes hacerlo todo con solo unos pocos clics. PDFEquips es rápido, confiable y seguro.",
  },
  why_us: {
    title: "La solución PDF en la que puedes confiar",
    description:
      "PDFEquips es tu aplicación web definitiva para gestionar PDF con facilidad. Disfruta de todas\
    las funciones que necesitas para trabajar eficazmente con tus documentos digitales\
    mientras mantienes tus datos seguros y protegidos.",
  },
};

export const tool: _tool = {
  PDF_to_Powerpoint: {
    title: "PDF a Powerpoint",
    seoTitle: "PDF a PowerPoint - Convertir a presentaciones editables",
    description: "Convierte archivos PDF a presentaciones de Powerpoint editables",
    color: "#C13B1B",
    type: ".pdf",
    to: "/pdf-to-powerpoint",
    features: [
      {
        title: "Convertir PDF a PowerPoint con un solo clic",
        description: "Convierta rápidamente documentos PDF en presentaciones de PowerPoint utilizando nuestro convertidor en línea, asegurando un fácil intercambio y almacenamiento. Mantenga el formato y diseño originales de todas las diapositivas."
      },
      {
        title: "Convertir PDF a PowerPoint de forma rápida y gratuita",
        description: "PDFEquips convierte archivos PDF a formato PowerPoint PPT (ppt o pptx) en solo unos segundos. Además, es una herramienta en línea completamente gratuita que no requiere ninguna instalación ni inicio de sesión, y no tiene marcas de agua."
      },
      {
        title: "Conversión sencilla de PDF a PowerPoint",
        description: "Con nuestro convertidor de PDF a PowerPoint, no es necesario navegar por configuraciones ni opciones. Simplemente cargue el archivo, siéntese, relájese ¡y disfrute del espectáculo!"
      }
    ],
    keywords: "PDF a PowerPoint, convertir PDF a PowerPoint, convertir PDF a PPT, convertir PDF a PPTX, herramientas para convertir PDF a PowerPoint, convertir documentos PDF a PowerPoint, convertir PDF a presentación, convertir PDF en línea, convertir PDF a PowerPoint gratis, convertir PDF a PPT sin registro, convertir PDF rápidamente, convertir PDF sin marcas de agua, herramientas en línea para convertir PDF a PowerPoint"
  },
  WORD_to_PDF: {
    title: "WORD a PDF",
    seoTitle: "Word a PDF - Convertir archivos de Word",
    description: "Convierte archivos de Microsoft Word a documentos PDF",
    color: "#1B5EBE",
    type: ".docx",
    to: "/word-to-pdf",
    features: [
      {
        title: "Fácil de usar",
        description: "Independientemente de su rol, ya sea trabajador, estudiante o profesor, nuestras herramientas de PDF son fáciles de usar. Convertir archivos WORD a documentos PDF es simple y solo requiere unos pocos clics."
      },
      {
        title: "Conversión simple y rápida",
        description: "Gracias a su método avanzado de preservación de diseños y estilos originales, PDFEquips garantiza conversiones fluidas de WORD a PDF. Disfrute de operaciones rápidas sin comprometer la integridad del documento."
      },
      {
        title: "Convierta un archivo WORD o varios archivos WORD",
        description: "Puede convertir fácilmente uno o varios archivos WORD sin problemas utilizando PDFEquips. Nuestras herramientas directas garantizan una conversión rápida y precisa, ahorrándole tiempo y esfuerzo."
      }
    ],
    keywords: "WORD a PDF, convertir WORD a PDF, convertir documentos Word a PDF, convertir archivos Word a PDF, herramientas para convertir Word a PDF, convertir Word a PDF en línea, convertir Word a PDF gratis, convertir Word rápidamente, convertir Word sin registro, convertir Word a PDF sin pérdida de formato, convertir documentos Word a PDF fácilmente, convertir archivos Word a PDF sin instalación, herramientas gratuitas para convertir Word a PDF"
  },
  POWERPOINT_to_PDF: {
    title: "POWERPOINT a PDF",
    seoTitle: "PowerPoint a PDF - Convertir archivos de PowerPoint",
    description: "Convierte archivos de Microsoft Powerpoint a documentos PDF",
    color: "#C13B1B",
    type: ".pptx",
    to: "/powerpoint-to-pdf",
    features: [
      {
        title: "Convertir PowerPoint a PDF con un solo clic",
        description: "Convierta rápidamente presentaciones de PowerPoint en documentos PDF utilizando nuestro convertidor en línea, asegurando un fácil intercambio y almacenamiento. Mantenga el formato y diseño originales de todas las diapositivas."
      },
      {
        title: "Convertir Powerpoint a PDF de forma rápida y gratuita",
        description: "PDFEquips convierte archivos PowerPoint PPT (ppt o pptx) a PDF en solo unos segundos. Además, es una herramienta en línea completamente gratuita que no requiere ninguna instalación ni inicio de sesión, y no tiene marcas de agua."
      },
      {
        title: "Conversión sencilla de PowerPoint a PDF",
        description: "Con nuestro convertidor de PPT a PDF, no es necesario navegar por configuraciones ni opciones. Simplemente cargue el archivo, siéntese, relájese ¡y disfrute del espectáculo!"
      }
    ],
    keywords: "POWERPOINT a PDF, convertir PowerPoint a PDF, convertir documentos PowerPoint a PDF, convertir presentaciones PowerPoint a PDF, herramientas para convertir PowerPoint a PDF, convertir PowerPoint a PDF en línea, convertir PowerPoint a PDF gratis, convertir PowerPoint rápidamente, convertir PowerPoint sin registro, convertir PowerPoint a PDF sin pérdida de formato, convertir presentaciones PowerPoint a PDF fácilmente, convertir archivos PowerPoint a PDF sin instalación, herramientas gratuitas para convertir PowerPoint a PDF"
  },
  EXCEL_to_PDF: {
    title: "EXCEL a PDF",
    seoTitle: "Excel a PDF - Convertir archivos de Excel",
    description: "Convierte archivos de Microsoft Excel a documentos PDF",
    color: "#10793F",
    type: ".xlsx",
    to: "/excel-to-pdf",
    features: [
      {
        title: "Conversor fácil de usar de Excel a PDF",
        description: "Un conversor adecuado para convertir archivos XLS, XLSX a formato PDF facilita su intercambio y almacenamiento seguro. Proteja sus datos contra cambios y disfrute del acceso a sus archivos de Excel en cualquier dispositivo, ya sea que tenga Microsoft Office o no."
      },
      {
        title: "Herramienta de conversión en línea rápida y gratuita",
        description: "PDFEquips es una herramienta en línea completamente gratuita para convertir archivos de Excel (xls o xlsx) a PDF. No se requiere instalación ni registro, y no se agregan marcas de agua. Además, convierte archivos de Excel grandes en solo unos segundos."
      },
      {
        title: "Conversión segura de XLS a PDF",
        description: "Sus archivos están protegidos con cifrado robusto TLS (Seguridad de la Capa de Transporte), y todos los archivos de Excel y PDF se eliminan automáticamente de nuestros servidores después de una hora. Para obtener más información, consulte nuestra política de privacidad."
      }
    ],
    keywords: "EXCEL a PDF, convertir Excel a PDF, convertir documentos Excel a PDF, convertir archivos Excel a PDF, herramientas para convertir Excel a PDF, convertir Excel a PDF en línea, convertir Excel a PDF gratis, convertir Excel rápidamente, convertir Excel sin registro, convertir Excel a PDF sin pérdida de formato, convertir hojas de cálculo Excel a PDF fácilmente, convertir archivos Excel a PDF sin instalación, herramientas gratuitas para convertir Excel a PDF"
  },
  HTML_to_PDF: {
    title: "HTML a PDF",
    seoTitle: "HTML a PDF - Convertir páginas web",
    description: "Convierte páginas web HTML a documentos PDF",
    color: "rgb(228, 77, 38)",
    type: ".html",
    to: "/html-to-pdf",
    features: [
      {
        title: "Convierte al instante, no se requiere registro.",
        description: "No es necesario registrarse ni proporcionar ninguna información para convertir su HTML a PDF. Nuestro conversor es gratuito para todos y ofrece resultados rápidos."
      },
      {
        title: "Gestión de documentos segura.",
        description: "Sus descargas y archivos PDF generados se procesan con cifrado TLS para una seguridad adicional. Tenga la seguridad de que la privacidad de sus datos está protegida. Consulte nuestra política de privacidad para obtener más información."
      },
      {
        title: "Procesamiento basado en la nube.",
        description: "Disfrute de la comodidad del procesamiento basado en la nube para conversiones de HTML a PDF. Nuestro servicio en línea garantiza una conversión rápida y eficiente sin ralentizar su computadora. Acceda a nuestro servicio desde cualquier lugar y en cualquier momento."
      }
    ],
    keywords: "HTML a PDF, convertir HTML a PDF, convertir páginas web a PDF, convertir archivos HTML a PDF, herramientas para convertir HTML a PDF, convertir HTML a PDF en línea, convertir HTML a PDF gratis, convertir HTML rápidamente, convertir HTML sin registro, convertir páginas web a PDF sin pérdida de formato, convertir HTML a documentos PDF fácilmente, convertir archivos HTML a PDF sin instalación, herramientas gratuitas para convertir HTML a PDF"
  },
  PDF_to_WORD: {
    title: "PDF a WORD",
    seoTitle: "PDF a Word - Convertir archivos PDF",
    description: "Convierte archivos PDF a documentos de Microsoft Word",
    color: "#1B5EBE",
    type: ".pdf",
    to: "/pdf-to-word",
    features: [
      {
        title: "Conversión simple y rápida",
        description: "Gracias a su método avanzado de preservación de diseños y estilos originales, PDFEquips garantiza conversiones fluidas de PDF a Word. Disfrute de operaciones rápidas sin comprometer la integridad del documento."
      },
      {
        title: "Fácil de usar",
        description: "Independientemente de su rol, ya sea trabajador, estudiante o profesor, nuestras herramientas de PDF son fáciles de usar. Convertir archivos PDF a documentos de Word es simple y solo requiere unos pocos clics."
      },
      {
        title: "Convierta un archivo PDF o varios archivos PDF",
        description: "Puede convertir fácilmente uno o varios archivos PDF sin problemas utilizando PDFEquips. Nuestras herramientas directas garantizan una conversión rápida y precisa, ahorrándole tiempo y esfuerzo."
      }
    ],
    keywords: "PDF a WORD, convertir PDF a Word, convertir documentos PDF a Word, convertir archivos PDF a Word, herramientas para convertir PDF a Word, convertir PDF a Word en línea, convertir PDF a Word gratis, convertir PDF rápidamente, convertir PDF sin registro, convertir PDF a Word sin pérdida de formato, convertir documentos PDF a Word fácilmente, convertir archivos PDF a Word sin instalación, herramientas gratuitas para convertir PDF a Word"
  },
  PDF_to_EXCEL: {
    title: "PDF a EXCEL",
    seoTitle: "PDF a Excel - Convertir archivos PDF",
    description: "Convierte archivos PDF a documentos de Microsoft Excel",
    color: "#10793F",
    type: ".pdf",
    to: "/pdf-to-excel",
    features: [
      {
        title: "Herramienta de conversión en línea rápida y gratuita",
        description: "PDFEquips es una herramienta en línea completamente gratuita para convertir archivos PDF a Excel (XLS o XLSX). No se requiere instalación ni registro, y no se agregan marcas de agua. Además, convierte archivos PDF grandes en solo unos segundos."
      },
      {
        title: "Conversor fácil de usar de PDF a Excel",
        description: "Un conversor adecuado para convertir archivos PDF a formato XLS o XLSX facilita su intercambio y almacenamiento seguro. Proteja sus datos contra cambios y disfrute del acceso a sus archivos de Excel en cualquier dispositivo, ya sea que tenga Microsoft Office o no."
      },
      {
        title: "Conversión segura de PDF a XLS",
        description: "Sus archivos están protegidos con cifrado robusto TLS (Seguridad de la Capa de Transporte), y todos los archivos PDF y Excel se eliminan automáticamente de nuestros servidores después de una hora. Para obtener más información, consulte nuestra política de privacidad."
      }
    ],
    keywords: "PDF a EXCEL, convertir PDF a Excel, convertir documentos PDF a Excel, convertir archivos PDF a Excel, herramientas para convertir PDF a Excel, convertir PDF a Excel en línea, convertir PDF a Excel gratis, convertir PDF rápidamente, convertir PDF sin registro, convertir PDF a Excel sin pérdida de formato, convertir tablas PDF a Excel fácilmente, convertir archivos PDF a Excel sin instalación, herramientas gratuitas para convertir PDF a Excel"
  },
  PDF_to_PDF_A: {
    title: "PDF a PDF/A",
    seoTitle: "PDF a PDF/A - Formato de archivado a largo plazo",
    description: "Convierte archivos PDF al formato PDF/A para archivado a largo plazo",
    color: "#000000",
    type: ".pdf",
    to: "/pdf-to-pdf-a",
    features: [
      {
        title: "Mantener la integridad de los documentos",
        description: "Convierta sus archivos PDF al formato PDF/A y asegúrese de que se preserve la integridad del documento, incluido el contenido, la estructura y la apariencia."
      },
      {
        title: "Cumplimiento con Normas de Archivado",
        description: "Asegure el cumplimiento con las normas de archivo al convertir sus documentos PDF al formato PDF/A, que es adecuado para el almacenamiento a largo plazo y los requisitos legales."
      },
      {
        title: "Accesibilidad y Compatibilidad a Largo Plazo",
        description: "Al convertir sus archivos PDF al formato PDF/A, asegura la accesibilidad y compatibilidad a largo plazo con el software y los sistemas futuros, al tiempo que minimiza el riesgo de obsolescencia del formato."
      }
    ],
    keywords: "PDF a PDF/A, convertir PDF a PDF/A, convertir documentos PDF a PDF/A, convertir archivos PDF a PDF/A, herramientas para convertir PDF a PDF/A, convertir PDF a PDF/A en línea, convertir PDF a PDF/A gratis, convertir PDF rápidamente, convertir PDF sin registro, convertir PDF a PDF/A sin pérdida de formato, convertir documentos PDF a PDF/A fácilmente, convertir archivos PDF a PDF/A sin instalación, herramientas gratuitas para convertir PDF a PDF/A"
  },
  PDF_to_Text: {
    title: "PDF a texto",
    seoTitle: "PDF a texto - Convertir a documentos de texto",
    description: "Convertir archivos PDF en documentos de texto plano",
    color: "#4493e1",
    type: ".pdf",
    to: "/pdf-to-text",
    features: [
      {
        title: "Conversión Robusta y Precisa",
        description: "Benefíciese de capacidades de conversión robustas y precisas, asegurando una extracción de contenido de texto de alta calidad de documentos PDF, incluido el soporte para varios idiomas como el árabe."
      },
      {
        title: "Procesamiento Rápido",
        description: "Experimente velocidades de procesamiento rápidas con nuestro conversor de PDF a texto, lo que permite una conversión rápida de archivos PDF a formato de texto sin comprometer la precisión."
      },
      {
        title: "Preservación de la Estructura del Documento",
        description: "Convierta archivos PDF a texto plano preservando la estructura y formato del documento, asegurando la legibilidad y usabilidad del contenido de texto extraído."
      }
    ],
    keywords: "convertir PDF a texto, convertir PDF a documento de texto, convertir documentos PDF a texto, convertir archivos PDF a texto, herramientas para convertir PDF a texto, convertir PDF a texto en línea, convertir PDF a texto gratis, convertir PDF rápidamente, convertir PDF sin registro, convertir PDF a texto sin pérdida de formato, extraer texto de PDF fácilmente, convertir archivos PDF a texto sin instalación, herramientas gratuitas para convertir PDF a texto"
  }
}

export const edit_page: _edit_page = {
  edit_page_titles: {
    split_pdf: "Opciones para dividir PDF",
    compress_pdf: "Opciones para comprimir PDF",
    pdf_to_powerpoint: "Opciones para convertir PDF a PowerPoint",

    word_to_pdf: "Opciones para convertir WORD a PDF",
    powerpoint_to_pdf: "Opciones para convertir POWERPOINT a PDF",
    excel_to_pdf: "Opciones para convertir EXCEL a PDF",
    html_to_pdf: "Opciones para convertir HTML a PDF",

    pdf_to_word: "Opciones para convertir PDF a WORD",
    pdf_to_excel: "Opciones para convertir PDF a EXCEL",
    pdf_to_pdf_a: "Opciones para convertir PDF a PDF/A",
    pdf_to_text: "Opciones de PDF a texto",
  },
  pdf_a_options: {
    info: "Selecciona el formato PDF/A deseado del menú desplegable a continuación para convertir tu PDF. Esto asegurará que el documento cumpla con el estándar de archivo elegido.",
    placeholder: "Elegir formato PDF/A"
  },
  loader_text: "Por favor espera...",
  add_more_button: "Agrega más archivos",
  action_buttons: {
    split_pdf: "Dividir PDF",
    compress_pdf: "Comprimir PDF",
    pdf_to_powerpoint: "Convertir a Powerpoint",

    word_to_pdf: "Convertir a PDF",
    powerpoint_to_pdf: "Convertir a PDF",
    excel_to_pdf: "Convertir a PDF",
    html_to_pdf: "Convertir a PDF",

    pdf_to_word: "Convertir a Word",
    pdf_to_excel: "Convertir a Excel",
    pdf_to_pdf_a: "Convertir a PDF/A",
    pdf_to_text: "Convertir a texto",
    translate_pdf: "Traducir PDF",
  },
  pages: "paginas",
  page: "página",
  compress_pdf: [
    {
      title: "Compresión recomendada",
      description: "Mejor equilibrio entre tamaño y calidad",
    },
    {
      title: "Menos compresión",
      description: "Tamaño de archivo más pequeño pero calidad inferior",
    },
    {
      title: "Compresión extrema",
      description:
        "Tamaño de archivo significativamente más pequeño pero mucha calidad inferior",
    },
    {
      title: "Compresión personalizada",
      description: "Elige tu propio nivel de compresión",
    },
  ],
};

export const tools: _tools = {
  select: "Seleccionar",
  or_drop: "o soltar archivos aquí",
  files: "archivos",
  drop_files: "Arrastra los archivos aquí",
};

export const downloadFile: _downloadFile = {
  titles: {
    "split-pdf": ["¡División de archivo PDF exitosa!"],
    "pdf-to-powerpoint": [
      "¡Conversión de archivos PDF a PowerPoint exitosa!",
      "¡Conversión de archivo PDF a PowerPoint exitosa!",
    ],

    "word-to-pdf": [
      "¡Conversión de archivos Word a PDF exitosa!",
      "¡Conversión de archivo Word a PDF exitosa!",
    ],
    "powerpoint-to-pdf": [
      "¡Conversión de archivos PowerPoint a PDF exitosa!",
      "¡Conversión de archivo PowerPoint a PDF exitosa!",
    ],
    "excel-to-pdf": [
      "¡Conversión de archivos Excel a PDF exitosa!",
      "¡Conversión de archivo Excel a PDF exitosa!",
    ],
    "html-to-pdf": [
      "¡Conversión de archivos HTML a PDF exitosa!",
      "¡Conversión de archivo HTML a PDF exitosa!",
    ],
    "pdf-to-word": [
      "¡Conversión de archivos PDF a Word exitosa!",
      "¡Conversión de archivo PDF a Word exitosa!",
    ],
    "pdf-to-excel": [
      "¡Conversión de archivos PDF a Excel exitosa!",
      "¡Conversión de archivo PDF a Excel exitosa!",
    ],
    "pdf-to-pdf-a": [
      "¡Conversión de archivos PDF a PDF/A exitosa!",
      "¡Conversión de archivo PDF a PDF/A exitosa!",
    ],
    "pdf-to-text": [
      "¡Conversión de archivos PDF a texto exitosa!",
      "¡Conversión de archivo PDF a texto exitosa!",
    ],
  },
  btnText: {
    "split-pdf": [
      "Descargar archivos PDF divididos",
      "Descargar archivo PDF dividido",
    ],
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
      "Descargar archivos de texto extraídos",
      "Descargar archivo de texto extraído",
    ],
  },
  backto: {
    "split-pdf": "Volver a dividir PDF",
    "pdf-to-powerpoint": "Volver a PDF a PowerPoint",
    "word-to-pdf": "Volver a Word a PDF",
    "powerpoint-to-pdf": "Volver a PowerPoint a PDF",
    "excel-to-pdf": "Volver a Excel a PDF",
    "html-to-pdf": "Volver a HTML a PDF",
    "pdf-to-word": "Volver a PDF a Word",
    "pdf-to-excel": "Volver a PDF a Excel",
    "pdf-to-pdf-a": "Volver a PDF a PDF-A",
    "pdf-to-text": "Volver a PDF a Texto",
  },
};

export const footer: _footer = {
  brand: "PDFEquips",
  terms: "términos",
  conditions: "condiciones",
  privacy_policy: "política de privacidad",
};

export const errors: _errors = {
  EMPTY_FILE: {
    message: "El archivo está vacío. Por favor, elija un archivo válido.",
    code: "ERR_EMPTY_FILE",
  },
  NOT_SUPPORTED_TYPE: {
    message: "El archivo no es un tipo compatible.",
    types: {
      PDF: "Por favor, elija un archivo PDF válido.",
      DOC: "Por favor, elija un archivo de documento de Word válido.",
      DOCX: "Por favor, elija un archivo de documento de Word válido.",
      XLS: "Por favor, elija un archivo de hoja de cálculo de Excel válido.",
      XLSX: "Por favor, elija un archivo de hoja de cálculo de Excel válido.",
      PPT: "Por favor, elija un archivo de presentación de PowerPoint válido.",
      PPTX: "Por favor, elija un archivo de presentación de PowerPoint válido.",
    },
    code: "ERR_INVALID_FILE_TYPE",
  },
  FILE_TOO_LARGE: {
    message:
      "El archivo es demasiado grande. Por favor, elija un archivo más pequeño o use nuestra herramienta de compresión de PDF para reducir el tamaño del archivo.",
    code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
  },
  FILE_CORRUPT: {
    message:
      "El archivo estácorrupto y no se puede procesar. Por favor, elija un archivo válido.",
    code: "ERR_FILE_CORRUPT",
  },
  MAX_FILES_EXCEEDED: {
    message:
      "Ha excedido el número máximo de archivos permitidos. Por favor, elimine algunos archivos e intente nuevamente.",
    code: "ERR_MAX_FILES_EXCEEDED",
  },
  NO_FILES_SELECTED: {
    message:
      "No se han seleccionado archivos. Por favor, seleccione al menos un archivo.",
    code: "ERR_NO_FILES_SELECTED",
  },
  UNKNOWN_ERROR: {
    message:
      "Ha ocurrido un error desconocido. Por favor, inténtelo de nuevo más tarde o contacte al soporte.",
    code: "ERR_UNKNOWN",
  },
  ERR_NETWORK: {
    message:
      "Ha ocurrido un error en la red. Por favor, comprueba tu conexión a internet e inténtalo de nuevo.",
    code: "ERR_NETWORK",
  },
  ERR_UPLOAD_COUNT: {
    message: "Por favor, suba al menos dos archivos para fusionar.",
    code: "ERR_UPLOAD_COUNT",
  },
  PASSWORD_REQUIRED: {
    message: "El PDF requiere una contraseña.",
    code: "PASSWORD_REQUIRED",
  },

  INCORRECT_PASSWORD: {
    message: "La contraseña que ingresaste es incorrecta.",
    code: "INCORRECT_PASSWORD",
  },
  MAX_DAILY_USAGE: {
    message:
      "Has alcanzado tu límite de uso diario. Por favor, actualiza tu plan para seguir usando esta función sin interrupciones.",
    code: "MAX_DAILY_USAGE",
  },
  alerts: {
    maxFiles: "Máximo 50 archivos. ¡Suscríbete para más!",
    totalPages: "Máximo 1,500 páginas. ¡Actualiza ahora!",
    perFilePages: "500 páginas por archivo. ¡Desbloquea más ahora!",
    fileSize: "50 MB por archivo. ¡Mejora para obtener más!",
  },
};
