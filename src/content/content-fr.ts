import type {
  tool as _tool,
  web2pdftool as _web2pdftool,
  tools as _tools,
  edit_page as _edit_page,
  footer as _footer,
  errors as _errors,
  downloadFile as _downloadFile,
  landing_page as _landing_page,
} from "../../content";

export const tool = {
  Remove_Page: {
    title: "Supprimer une Page",
    seoTitle: "Supprimer des Pages d'un PDF en Ligne - Outil de Suppression de Pages",
    keywords: "supprimer des pages de PDF, supprimer des pages d'un PDF, outil de suppression de pages PDF, suppression de pages PDF en ligne, éditeur de PDF, modification de PDF, outil PDF sécurisé, outil PDF facile à utiliser",
    description:
      "Supprimez les pages indésirables de votre document PDF et enregistrez le fichier modifié en tant que nouveau PDF.",
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
  },
};



export const tools: _tools = {
  select: "Sélectionner",
  or_drop: "ou déposer des fichiers ici",
  files: "fichiers",
  drop_files: "Déposez les fichiers ici",
};

export const downloadFile: _downloadFile = {
  titles: {
    "remove-pages": ["Vos pages ont été supprimées avec succès!"],
  },

  btnText: {
    "remove-pages": [
      "Télécharger le PDF modifié",
      "Télécharger les fichiers modifiés",
    ],
  },

  backto: {
    "remove-pages": "Retour aux pages supprimées",
  },
};

export const edit_page: _edit_page = {
  edit_page_titles: {
    remove_pages: "Options pour supprimer des pages",
  },
  loader_text: "veuillez patienter...",
  add_more_button: "Ajouter plus de fichiers",
  action_buttons: {
    remove_pages: "Supprimer des pages",
  },
  remove_pages_options: {
    info: "Pour supprimer des pages du document, cliquez dessus. Vous pouvez également utiliser la touche 'shift' pour sélectionner plusieurs pages à la fois.",
    total_pages: "Total des pages",
    pages_to_remove: "Pages à supprimer : ",
    placeholder: "exemple : 2, 8-32",
  },
  pages: "pages",
  page: "page",
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
