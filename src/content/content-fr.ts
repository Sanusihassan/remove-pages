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
    title: "Fusionner des Pages PDF",
    seoTitle: "Fusionner des Pages PDF en Ligne - Combiner Plusieurs Pages en Une",
    description: "Combinez efficacement plusieurs pages PDF en une seule page",
    color: "var(--blue)",
    type: ".pdf",
    to: "/merge-pages",
    features: [
      {
        title: "Combinaison Efficace",
        description: "Combinez facilement plusieurs pages PDF en une seule page, simplifiant ainsi vos documents."
      },
      {
        title: "Mises en Page Personnalisées",
        description: "Spécifiez le nombre de pages par feuille et organisez-les dans l'ordre que vous préférez."
      },
      {
        title: "Interface Conviviale",
        description: "Profitez d'une interface simple et intuitive qui facilite la fusion des pages."
      }
    ],
    keywords: "fusionner pages PDF, combiner pages PDF, fusionneur de pages PDF, plusieurs pages en un PDF, consolider pages PDF, combineur de pages PDF, fusion de pages PDF en ligne, fusionneur de pages PDF gratuit, fusionner pages PDF en ligne, combiner plusieurs pages PDF, outil de consolidation de pages PDF, fusion sécurisée de pages PDF, fusion de pages PDF sans inscription, outil de mise en page PDF, combineur de pages PDF gratuit en ligne, fusionner feuilles PDF, combiner planches PDF, outil d'imposition PDF"
  },
};

export const tools: _tools = {
  select: "Sélectionner",
  or_drop: "ou déposer des fichiers ici",
  files: "fichiers",
  drop_files: "Déposez les fichiers ici",
};

export const edit_page: _edit_page = {
  edit_page_titles: {
    merge_pages: "Options de fusion des pages",
  },
  loader_text: "veuillez patienter...",
  add_more_button: "Ajouter plus de pages",
  action_buttons: {
    merge_pages: "Fusionner les pages",
  },
  pages: "pages",
  page: "page",
  options: {
    info: "Sélectionnez une disposition de page dans le menu déroulant ci-dessous. Cela déterminera comment les pages sont arrangées dans le document PDF fusionné.",
    placeholder: "Sélectionnez la disposition de la page"
  }
};

export const downloadFile: _downloadFile = {
  titles: {
    "merge-pages": ["Les pages PDF ont été fusionnées !", "La page PDF a été fusionnée !"],
  },

  btnText: {
    "merge-pages": ["Télécharger les pages PDF fusionnées", "Télécharger la page PDF fusionnée"],
  },

  backto: {
    "merge-pages": "Retour à Fusionner les pages",
  },
};

export const footer: _footer = {
  brand: "PDFEquips",
  terms: "conditions",
  conditions: "conditions d'utilisation",
  privacy_policy: "politique de confidentialité",
};

export const errors: _errors = {
  EMPTY_FILE: {
    message: "Le fichier est vide. Veuillez choisir un fichier valide.",
    code: "ERR_EMPTY_FILE",
  },
  FILE_TOO_LARGE: {
    message:
      "Le fichier est trop volumineux. Veuillez choisir un fichier plus petit ou utiliser notre outil de compression PDF pour réduire la taille du fichier.",
    code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
  },
  NOT_SUPPORTED_TYPE: {
    message: "Le fichier n'est pas d'un type pris en charge.",
    types: {
      PDF: "Veuillez choisir un fichier PDF valide.",
      JPG: "Veuillez choisir un fichier d'image JPEG valide.",
      DOC: "Veuillez choisir un fichier de document Word valide.",
      DOCX: "Veuillez choisir un fichier de document Word valide.",
      XLS: "Veuillez choisir un fichier de feuille de calcul Excel valide.",
      XLSX: "Veuillez choisir un fichier de feuille de calcul Excel valide.",
      PPT: "Veuillez choisir un fichier de présentation PowerPoint valide.",
      PPTX: "Veuillez choisir un fichier de présentation PowerPoint valide.",
    },
    code: "ERR_INVALID_FILE_TYPE",
  },
  FILE_CORRUPT: {
    message:
      "Le fichier est corrompu et ne peut pas être traité. Veuillez choisir un fichier valide.",
    code: "ERR_FILE_CORRUPT",
  },
  MISSING_FONTS: {
    message:
      "Le fichier contient des polices manquantes. Veuillez vous assurer que toutes les polices sont intégrées dans le fichier PDF.",
    code: "ERR_MISSING_FONTS",
  },
  INVALID_IMAGE_DATA: {
    message:
      "Le fichier contient des données d'image non valides. Veuillez vous assurer que toutes les images sont correctement formatées.",
    code: "ERR_INVALID_IMAGE_DATA",
  },
  SECURITY_RISK: {
    message:
      "Le fichier contient un risque de sécurité et ne peut pas être traité. Veuillez choisir un fichier valide.",
    code: "ERR_SECURITY_RISK",
  },
  MAX_FILES_EXCEEDED: {
    message:
      "Vous avez dépassé le nombre maximal de fichiers autorisés. Veuillez supprimer certains fichiers et réessayer.",
    code: "ERR_MAX_FILES_EXCEEDED",
  },
  NO_FILES_SELECTED: {
    message:
      "Aucun fichier sélectionné. Veuillez sélectionner au moins un fichier.",
    code: "ERR_NO_FILES_SELECTED",
  },
  UNKNOWN_ERROR: {
    message:
      "Une erreur inconnue s'est produite. Veuillez réessayer plus tard ou contacter le support.",
    code: "ERR_UNKNOWN",
  },
  ERR_NETWORK: {
    message:
      "Une erreur de réseau s'est produite. Veuillez vérifier votre connexion Internet et réessayer.",
    code: "ERR_NETWORK",
  },
  ERR_UPLOAD_COUNT: {
    message: "Veuillez télécharger au moins deux fichiers à fusionner.",
    code: "ERR_UPLOAD_COUNT",
  },
};
