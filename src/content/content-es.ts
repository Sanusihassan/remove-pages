import type { edit_page as _edit_page, tool as _tool, tools as _tools, downloadFile as _downloadFile, errors as _errors } from "../content";
import type { adBlockerContentType } from "./content";

export const tool: _tool = {
  Lock_PDF: {
    title: "Bloquear PDF",
    seoTitle: "Proteger PDF con Contraseña - Asegura tu Archivo PDF en Línea",
    description: "Protege tu archivo PDF con una contraseña para prevenir el acceso no autorizado.",
    keywords: "proteger PDF con contraseña, asegurar archivo PDF, bloquear PDF en línea, cifrar PDF, proteger documento PDF, herramienta de seguridad PDF",
    color: "#2980b9",
    type: ".pdf",
    to: "/lock-pdf",
    features: [
      {
        title: "Fácil de Usar",
        description: "Bloquea rápidamente tus archivos PDF con una interfaz simple."
      },
      {
        title: "Cifrado Fuerte",
        description: "Aplica un cifrado fuerte con contraseña para proteger tus documentos."
      },
      {
        title: "Privacidad Garantizada",
        description: "Tus archivos son cifrados y eliminados de nuestros servidores después del procesamiento."
      }
    ]
  },
  Unlock_PDF: {
    title: "Desbloquear PDF",
    seoTitle: "Quitar Contraseña de PDF - Desbloquea tu Archivo PDF en Línea",
    description: "Elimina fácilmente la protección con contraseña de tu archivo PDF con nuestra herramienta fácil de usar.",
    keywords: "quitar contraseña de PDF, desbloquear PDF en línea, descifrar PDF, acceder a PDF asegurado, herramienta de eliminación de contraseña de PDF, desbloquear documento PDF",
    color: "#3498db",
    type: ".pdf",
    to: "/unlock-pdf",
    features: [
      {
        title: "Fácil de Usar",
        description: "Desbloquea archivos PDF fácilmente con un proceso sencillo."
      },
      {
        title: "Desencriptado Rápido",
        description: "Elimina contraseñas de PDF rápidamente y de manera eficiente."
      },
      {
        title: "Procesamiento Seguro",
        description: "Tus archivos son manejados de forma segura y eliminados de nuestros servidores después de desbloquearlos."
      }
    ]
  }
};

export const edit_page: _edit_page = {
  edit_page_titles: {
    lock_pdf: "Bloquear PDF y proteger PDF",
    unlock_pdf: "Desbloquear PDF"
  },
  loader_text: "por favor espera...",
  add_more_button: "Agregar más archivos",
  action_buttons: {
    lock_pdf: "Bloquear PDF",
    unlock_pdf: "Desbloquear PDF"
  },
  lock_button_title: "Confirme la contraseña ingresándola dos veces.",
  unlock_button_title: "Introduzca la contraseña para cada archivo protegido",
  pages: "páginas",
  page: "página",
  lock_pdf: {
    title: "Establezca una contraseña para bloquear su archivo PDF",
    password: "Contraseña",
    repeatPassword: "Repetir contraseña",
    no_match: "Las contraseñas no coinciden."
  },
  unlock_pdf: {
    title: "Ingrese la contraseña para los archivos que la requieran",
    password_for: "contraseña para"
  },
  filenameOptions: {
    label: "Nombre del archivo de salida (opcional)",
    placeholder: "Ingrese el nombre del archivo",
    helperText: "Este será el nombre del PDF comprimido al descargarlo.",
    cta: "Ver planes",
    upgradeNotice: {
      msg: "Los niveles del 2.0 al 10.0 están disponibles con la versión premium.",
      cta: "Actualizar ahora",
    },
  },
  languageSelectContent: {
    placeholder: "Elegir idiomas (máximo 3)",
    warning: "Este documento está escaneado. Por favor seleccione su idioma para garantizar resultados precisos.",
    ocr_warning: "Documento escaneado detectado. Para obtener los mejores resultados, utilice nuestra herramienta OCR PDF con detección avanzada de idioma y mayor precisión. También puede configurar el idioma aquí para procesamiento básico.",
  },
};

export const downloadFile: _downloadFile = {
  titles: {
    "lock-pdf": [
      "¡Los archivos PDF han sido bloqueados!",
      "¡El archivo PDF ha sido bloqueado!"
    ],
    "unlock-pdf": [
      "¡Los archivos PDF han sido desbloqueados!",
      "¡El archivo PDF ha sido desbloqueado!"
    ]
  },
  btnText: {
    "lock-pdf": [
      "Descargar archivos PDF bloqueados",
      "Descargar archivo PDF bloqueado"
    ],
    "unlock-pdf": [
      "Descargar archivos PDF desbloqueados",
      "Descargar archivos PDF desbloqueados"
    ]
  },
  backto: {
    "lock-pdf": "Volver a bloquear PDF",
    "unlock-pdf": "Volver a desbloquear PDF"
  },
};

export const tools: _tools = {
  select: "Seleccionar",
  or_drop: "o suelta archivos aquí",
  files: "archivos",
  drop_files: "Arrastra archivos aquí",
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
    notPasswordProtected: "Uno o más archivos no están protegidos con contraseña",
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