import type { adBlockerContentType } from "./content";
import type { edit_page as _edit_page, tool as _tool, tools as _tools, downloadFile as _downloadFile, errors as _ } from "../content";
export const tool: _tool = {
    Lock_PDF: {
        title: "Verrouiller PDF",
        seoTitle: "Protéger PDF avec Mot de Passe - Sécuriser votre Fichier PDF en Ligne",
        description: "Sécurisez votre fichier PDF avec un mot de passe pour empêcher tout accès non autorisé.",
        keywords: "protéger PDF avec mot de passe, sécuriser fichier PDF, verrouiller PDF en ligne, crypter PDF, protéger document PDF, outil de sécurité PDF",
        color: "#2980b9",
        type: ".pdf",
        to: "/lock-pdf",
        features: [
            {
                title: "Facile à Utiliser",
                description: "Verrouillez rapidement vos fichiers PDF avec une interface simple."
            },
            {
                title: "Cryptage Fort",
                description: "Appliquez un cryptage fort avec un mot de passe pour protéger vos documents."
            },
            {
                title: "Confidentialité Assurée",
                description: "Vos fichiers sont cryptés et supprimés de nos serveurs après traitement."
            }
        ]
    },
    Unlock_PDF: {
        title: "Déverrouiller PDF",
        seoTitle: "Supprimer le Mot de Passe PDF - Déverrouiller votre Fichier PDF en Ligne",
        description: "Supprimez facilement la protection par mot de passe de votre fichier PDF avec notre outil convivial.",
        keywords: "supprimer le mot de passe PDF, déverrouiller PDF en ligne, décrypter PDF, accéder à PDF sécurisé, outil de suppression de mot de passe PDF, déverrouiller document PDF",
        color: "#3498db",
        type: ".pdf",
        to: "/unlock-pdf",
        features: [
            {
                title: "Facile à Utiliser",
                description: "Déverrouillez les fichiers PDF facilement avec un processus simple."
            },
            {
                title: "Décryptage Rapide",
                description: "Supprimez les mots de passe PDF rapidement et efficacement."
            },
            {
                title: "Traitement Sécurisé",
                description: "Vos fichiers sont traités en toute sécurité et supprimés de nos serveurs après déverrouillage."
            }
        ]
    }
};

export const edit_page: _edit_page = {
    edit_page_titles: {
        lock_pdf: "Verrouiller PDF et protéger PDF",
        unlock_pdf: "Déverrouiller le PDF"
    },
    loader_text: "Veuillez patienter...",
    add_more_button: "Ajouter plus de fichiers",
    action_buttons: {
        lock_pdf: "Verrouiller PDF",
        unlock_pdf: "Déverrouiller le PDF"
    },
    lock_button_title: "Veuillez confirmer le mot de passe en le saisissant deux fois.",
    unlock_button_title: "Saisissez le mot de passe pour chaque fichier protégé",
    pages: "pages",
    page: "page",
    lock_pdf: {
        title: "Définissez un mot de passe pour verrouiller votre fichier PDF",
        password: "Mot de passe",
        repeatPassword: "Répéter le mot de passe",
        no_match: "Les mots de passe ne correspondent pas."
    },
    unlock_pdf: {
        title: "Entrez le mot de passe pour les fichiers qui le nécessitent",
        password_for: "mot de passe pour"
    },
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
    languageSelectContent: {
        placeholder: "Choisir les langues (maximum 3)",
        warning: "Ce document est numérisé. Veuillez sélectionner sa langue pour garantir des résultats précis.",
        ocr_warning: "Document numérisé détecté. Pour de meilleurs résultats, utilisez notre outil OCR PDF avec détection avancée de langue et précision supérieure. Vous pouvez également définir la langue ici pour un traitement de base.",
    },
};

export const downloadFile: _downloadFile = {
    titles: {
        "lock-pdf": [
            "Les fichiers PDF ont été verrouillés!",
            "Le fichier PDF a été verrouillé!"
        ],
        "unlock-pdf": [
            "Les fichiers PDF ont été débloqués !",
            "Le fichier PDF a été débloqué !"
        ]
    },
    btnText: {
        "lock-pdf": [
            "Télécharger des fichiers PDF verrouillés",
            "Télécharger un fichier PDF verrouillé"
        ],
        "unlock-pdf": [
            "Télécharger des fichiers PDF déverrouillés",
            "Télécharger le fichier PDF débloqué"
        ]
    },
    backto: {
        "lock-pdf": "Retour à la verrouillage PDF",
        "unlock-pdf": "Retour à Déverrouiller le PDF"
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
    },
};

export const adBlockerContent: adBlockerContentType = {
    title: "Bloqueur de publicités détecté",
    description: "Nous avons remarqué que vous utilisez un bloqueur de publicités. Désactivez-le ou passez à premium pour une expérience sans pubs !",
    reloadPage: "Recharger la page",
    upgradeToPremium: "Passer à Premium"
};