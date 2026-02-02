import type { adBlockerContentType } from "./content";
import type { edit_page as _edit_page, tool as _tool, tools as _tools, downloadFile as _downloadFile, errors as _ } from "../content";
export const tool: _tool = {
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

export const edit_page: _edit_page = {
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
            cta: "Mettre à niveau maintenant",
        },
    },
    fileCard: {
        page: "page",
        pages: "pages",
        remove_file: "Supprimer le fichier",
        loading: "Chargement...",
        pages_to_remove: "Pages à supprimer :",
        remaining: "Restantes :",
        warning_cannot_remove_all: "⚠️ Vous ne pouvez pas supprimer toutes les pages du document.",
    },
    options: {
        info: 'Pour supprimer des pages du document, cliquez dessus. Vous pouvez également utiliser la touche "shift" pour sélectionner plusieurs pages à la fois.',
        total_pages: "Total de pages",
        pages_to_remove: "Pages à supprimer :",
        placeholder: "exemple : 2,8-32",
        helper_text: "Cliquez sur les pages ci-dessus ou tapez les numéros de page ici (ex : 2,5,8-12)",
        summary_pages_to_remove: "Pages à supprimer :",
        summary_remaining_pages: "Pages restantes :",
        warning_cannot_remove_all: "⚠️ Vous ne pouvez pas supprimer toutes les pages du document.",
    },
};

export const downloadFile: _downloadFile = {
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


// French (fr) - tools
export const tools: _tools = {
    select: "Sélectionner",
    or_drop: "ou déposez les fichiers ici",
    files: "fichiers",
    drop_files: "Glissez les fichiers ici",
};

export const errors: _ = {
    EMPTY_FILE: {
        message: "Le fichier est vide. Veuillez choisir un fichier valide.",
        code: "ERR_EMPTY_FILE",
    },
    FILE_TOO_LARGE: {
        message:
            "Le fichier est trop volumineux. Choisissez un fichier plus petit ou utilisez notre outil compress-pdf pour réduire la taille.",
        code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
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
            PPTX: "Veuillez choisir une présentation PowerPoint valide.",
        },
        code: "ERR_INVALID_FILE_TYPE",
    },
    FILE_CORRUPT: {
        message:
            "Le fichier est corrompu et ne peut pas être traité. Veuillez choisir un fichier valide.",
        code: "ERR_FILE_CORRUPT",
    },
    MAX_FILES_EXCEEDED: {
        message:
            "Vous avez dépassé le nombre maximum de fichiers autorisés. Supprimez certains fichiers et réessayez.",
        code: "ERR_MAX_FILES_EXCEEDED",
    },
    NO_FILES_SELECTED: {
        message: "Aucun fichier sélectionné. Veuillez en sélectionner au moins un.",
        code: "ERR_NO_FILES_SELECTED",
    },
    UNKNOWN_ERROR: {
        message:
            "Une erreur inconnue s'est produite. Réessayez plus tard ou contactez le support.",
        code: "ERR_UNKNOWN",
    },
    ERR_NETWORK: {
        message:
            "Une erreur réseau s'est produite. Vérifiez votre connexion internet et réessayez.",
        code: "ERR_NETWORK",
    },
    ERR_UPLOAD_COUNT: {
        message: "Veuillez télécharger au moins deux fichiers pour les fusionner.",
        code: "ERR_UPLOAD_COUNT",
    },
    PASSWORD_REQUIRED: {
        message: "Le PDF nécessite un mot de passe.",
        code: "PASSWORD_REQUIRED",
    },
    INCORRECT_PASSWORD: {
        message: "Le mot de passe saisi est incorrect.",
        code: "INCORRECT_PASSWORD",
    },
    MAX_DAILY_USAGE: {
        message:
            "Vous avez atteint votre limite d'utilisation quotidienne. Mettez à jour votre plan pour continuer sans interruption.",
        code: "MAX_DAILY_USAGE",
    },
    MAX_PAGES_EXCEEDED: {
        message: "Le PDF dépasse la limite maximale de 50 pages.",
        code: "ERR_MAX_PAGES_EXCEEDED",
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
    },
};

export const adBlockerContent: adBlockerContentType = {
    title: "Bloqueur de publicités détecté",
    description: "Nous avons remarqué que vous utilisez un bloqueur de publicités. Désactivez-le ou passez à premium pour une expérience sans pubs !",
    reloadPage: "Recharger la page",
    upgradeToPremium: "Passer à Premium"
};