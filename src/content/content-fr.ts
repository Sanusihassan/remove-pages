import type { adBlockerContentType, Tool } from "./content";
import type { edit_page as _edit_page, tools as _tools, downloadFile as _downloadFile, errors as _ } from "../content";

export const tool: Tool = {
    PDF_to_Powerpoint: {
        title: "PDF vers PowerPoint",
        seoTitle: "Convertir PDF en PowerPoint - Convertisseur Gratuit en Ligne",
        description: "Convertir des fichiers PDF en présentations PowerPoint modifiables",
        color: "#C13B1B",
        type: ".pdf",
        to: "/pdf-to-powerpoint",
        features: [
            {
                title: "Convertir PDF en PowerPoint en un seul clic",
                description: "Convertissez rapidement des documents PDF en présentations PowerPoint grâce à notre convertisseur en ligne, garantissant un partage et un stockage faciles. Conservez la mise en forme et la disposition originales de toutes les diapositives."
            },
            {
                title: "Convertir PDF en PowerPoint rapidement et gratuitement",
                description: "PDFEquips convertit les fichiers PDF au format PowerPoint PPT (ppt ou pptx) en quelques secondes seulement. De plus, c'est un outil complètement gratuit en ligne qui ne nécessite ni installation ni inscription, et n'ajoute pas de filigranes."
            },
            {
                title: "Conversion simple de PDF vers PowerPoint",
                description: "Avec notre convertisseur PDF vers PowerPoint, vous n'avez pas à naviguer parmi les paramètres et options. Téléchargez simplement le fichier, asseyez-vous, détendez-vous et profitez du spectacle !"
            }
        ],
        keywords: "PDF vers PowerPoint, convertir PDF en PPT, convertisseur PDF en PPT, PDF vers PowerPoint gratuit, PDF vers PowerPoint en ligne, PDF en PPTX, convertir PDF en PowerPoint en ligne, PDF en PPT gratuit, convertisseur PDF en PPTX, outil PDF en PPT, convertisseur PDF en PPT en ligne, PDF vers PowerPoint gratuit, convertir PDF en PPT gratuit, PDF en PPT en ligne, PDF en PPTX gratuit, convertir PDF en PPT instantanément, outil PDF vers PowerPoint gratuit"
    },
    WORD_to_PDF: {
        title: "WORD vers PDF",
        seoTitle: "Convertir Word en PDF - Convertisseur Gratuit en Ligne",
        description: "Convertir des fichiers Microsoft Word en documents PDF",
        color: "#1B5EBE",
        type: ".docx",
        to: "/word-to-pdf",
        features: [
            {
                title: "Facile à utiliser",
                description: "Quel que soit votre rôle — employé, étudiant ou enseignant — nos outils PDF sont faciles à utiliser. Convertir des fichiers WORD en documents PDF est simple et ne nécessite que quelques clics"
            },
            {
                title: "Conversion simple et rapide",
                description: "Grâce à sa méthode avancée de préservation des mises en page et styles originaux, PDFEquips assure des conversions fluides de WORD vers PDF. Profitez d'opérations rapides sans compromettre l'intégrité du document."
            },
            {
                title: "Convertir un fichier WORD ou plusieurs fichiers WORD",
                description: "Vous pouvez facilement convertir un ou plusieurs fichiers WORD sans tracas grâce à PDFEquips. Nos outils directs garantissent une conversion rapide et précise, vous faisant gagner du temps et des efforts"
            }
        ],
        keywords: "Word vers PDF, convertir Word en PDF, Word vers PDF gratuit, convertisseur Word en PDF, Word vers PDF en ligne, Word vers PDF gratuit, DOCX vers PDF, convertisseur Word en PDF en ligne, outil Word vers PDF, convertir DOCX en PDF, convertisseur DOCX en PDF gratuit, document Word en PDF, convertir fichier Word en PDF, Word vers PDF sans inscription, outil Word vers PDF gratuit, Word vers PDF en ligne gratuit, conversion rapide Word en PDF, Microsoft Word en PDF"
    },
    POWERPOINT_to_PDF: {
        title: "POWERPOINT vers PDF",
        seoTitle: "Convertir PowerPoint en PDF - Convertisseur Gratuit en Ligne",
        description: "Convertir des fichiers Microsoft PowerPoint en documents PDF",
        color: "#C13B1B",
        type: ".pptx",
        to: "/powerpoint-to-pdf",
        features: [
            {
                title: "Convertir PowerPoint en PDF en un seul clic",
                description: "Convertissez rapidement des présentations PowerPoint en documents PDF grâce à notre convertisseur en ligne, garantissant un partage et un stockage faciles. Conservez la mise en forme et la disposition originales de toutes les diapositives"
            },
            {
                title: "Convertir PowerPoint en PDF rapidement et gratuitement",
                description: "PDFEquips convertit les fichiers PowerPoint PPT (ppt ou pptx) en PDF en quelques secondes seulement. De plus, c'est un outil complètement gratuit en ligne qui ne nécessite ni installation ni inscription, et n'ajoute pas de filigranes"
            },
            {
                title: "Conversion simple de PowerPoint vers PDF",
                description: "Avec notre convertisseur PPT vers PDF, vous n'avez pas à naviguer parmi les paramètres et options. Téléchargez simplement le fichier, asseyez-vous, détendez-vous et profitez du spectacle !"
            }
        ],
        keywords: "PowerPoint vers PDF, convertir PowerPoint en PDF, PowerPoint vers PDF gratuit, convertisseur PPT en PDF, PowerPoint vers PDF en ligne, PPT vers PDF gratuit, convertisseur PowerPoint en PDF en ligne, outil PPT vers PDF, convertir PPTX en PDF, convertisseur PPT en PDF gratuit, présentation PowerPoint en PDF, convertir fichier PPT en PDF, PPT vers PDF sans inscription, outil PPTX vers PDF gratuit, PowerPoint vers PDF en ligne gratuit, conversion rapide PowerPoint en PDF, Microsoft PowerPoint en PDF"
    },
    EXCEL_to_PDF: {
        title: "EXCEL vers PDF",
        seoTitle: "Convertir Excel en PDF - Convertisseur Gratuit en Ligne",
        description: "Convertir des fichiers Microsoft Excel en documents PDF",
        color: "#10793F",
        type: ".xlsx",
        to: "/excel-to-pdf",
        features: [
            {
                title: "Convertisseur facile à utiliser d'Excel vers PDF",
                description: "Un convertisseur adapté pour transformer des fichiers XLS, XLSX en format PDF facilite leur partage et leur stockage sécurisé. Protégez vos données contre les modifications et accédez à vos fichiers Excel sur n'importe quel appareil, avec ou sans Microsoft Office"
            },
            {
                title: "Outil de conversion rapide et gratuit en ligne",
                description: "PDFEquips est un outil complètement gratuit en ligne pour convertir des fichiers Excel (xls ou xlsx) en PDF. Aucune installation ni inscription n'est requise, et aucun filigrane n'est ajouté. De plus, il convertit les gros fichiers Excel en quelques secondes seulement"
            },
            {
                title: "Conversion sécurisée de XLS vers PDF",
                description: "Vos fichiers sont protégés par un chiffrement TLS robuste (Sécurité de la couche de transport), et tous les fichiers Excel et PDF sont automatiquement supprimés de nos serveurs après une heure. Pour plus d'informations, veuillez consulter notre politique de confidentialité"
            }
        ],
        keywords: "Excel vers PDF, convertir Excel en PDF, Excel vers PDF gratuit, convertisseur XLS en PDF, Excel vers PDF en ligne, XLSX vers PDF gratuit, convertisseur Excel en PDF en ligne, outil Excel vers PDF, convertir XLSX en PDF, convertisseur XLS en PDF gratuit, feuille de calcul Excel en PDF, convertir fichier Excel en PDF, Excel vers PDF sans inscription, outil Excel vers PDF gratuit, Excel vers PDF en ligne gratuit, conversion rapide Excel en PDF, Microsoft Excel en PDF"
    },
    HTML_to_PDF: {
        title: "HTML vers PDF",
        seoTitle: "Convertir HTML en PDF - Convertisseur Gratuit en Ligne",
        description: "Convertir des pages web HTML en documents PDF",
        color: "rgb(228, 77, 38)",
        type: ".html",
        to: "/html-to-pdf",
        features: [
            {
                title: "Conversion instantanée, sans inscription requise.",
                description: "Aucun besoin de s'inscrire ou de fournir des informations pour convertir votre HTML en PDF. Notre convertisseur est gratuit pour tous et offre des résultats rapides."
            },
            {
                title: "Gestion sécurisée des documents.",
                description: "Vos téléchargements et fichiers PDF générés sont traités avec un chiffrement TLS pour plus de sécurité. Soyez assuré que la confidentialité de vos données est protégée. Consultez notre politique de confidentialité pour plus d'informations."
            },
            {
                title: "Traitement basé sur le cloud.",
                description: "Profitez de la commodité du traitement basé sur le cloud pour les conversions HTML vers PDF. Notre service en ligne assure une conversion rapide et efficace sans ralentir votre ordinateur. Accédez à notre service depuis n'importe où et à n'importe quel moment."
            }
        ],
        keywords: "HTML vers PDF, convertir HTML en PDF, HTML vers PDF gratuit, convertisseur HTML en PDF, HTML vers PDF en ligne, HTML vers PDF gratuit, page web en PDF, convertir page web en PDF, outil HTML vers PDF, convertisseur HTML en PDF en ligne, convertisseur HTML en PDF gratuit, convertisseur page web en PDF, convertir fichier HTML en PDF, HTML vers PDF sans inscription, outil HTML vers PDF gratuit, HTML vers PDF en ligne gratuit, conversion rapide HTML en PDF, web en PDF"
    },
    PDF_to_WORD: {
        title: "PDF vers WORD",
        seoTitle: "Convertir PDF en Word - Convertisseur Gratuit en Ligne",
        description: "Convertir des fichiers PDF en documents Microsoft Word",
        color: "#1B5EBE",
        type: ".pdf",
        to: "/pdf-to-word",
        features: [
            {
                title: "Conversion simple et rapide",
                description: "Grâce à sa méthode avancée de préservation des mises en page et styles originaux, PDFEquips assure des conversions fluides de PDF vers Word. Profitez d'opérations rapides sans compromettre l'intégrité du document."
            },
            {
                title: "Facile à utiliser",
                description: "Quel que soit votre rôle — employé, étudiant ou enseignant — nos outils PDF sont faciles à utiliser. Convertir des fichiers PDF en documents Word est simple et ne nécessite que quelques clics"
            },
            {
                title: "Convertir un fichier PDF ou plusieurs fichiers PDF",
                description: "Vous pouvez facilement convertir un ou plusieurs fichiers PDF sans tracas grâce à PDFEquips. Nos outils directs garantissent une conversion rapide et précise, vous faisant gagner du temps et des efforts"
            }
        ],
        keywords: "PDF vers Word, convertir PDF en Word, PDF vers DOCX gratuit, convertisseur PDF en Word, PDF vers Word en ligne, PDF vers DOCX gratuit, convertisseur PDF en DOCX en ligne, outil PDF vers Word, convertir PDF en DOC, convertisseur PDF en DOC gratuit, document PDF en Word, convertir fichier PDF en Word, PDF vers DOCX sans inscription, outil PDF vers Word gratuit, PDF vers Word en ligne gratuit, conversion rapide PDF en Word, PDF vers Microsoft Word"
    },
    PDF_to_EXCEL: {
        title: "PDF vers EXCEL",
        seoTitle: "Convertir PDF en Excel - Convertisseur Gratuit en Ligne",
        description: "Convertir des fichiers PDF en documents Microsoft Excel",
        color: "#10793F",
        type: ".pdf",
        to: "/pdf-to-excel",
        features: [
            {
                title: "Outil de conversion rapide et gratuit en ligne",
                description: "PDFEquips est un outil complètement gratuit en ligne pour convertir des fichiers PDF en Excel (XLS ou XLSX). Aucune installation ni inscription n'est requise, et aucun filigrane n'est ajouté. De plus, il convertit les gros fichiers PDF en quelques secondes seulement."
            },
            {
                title: "Convertisseur facile à utiliser de PDF vers Excel",
                description: "Un convertisseur adapté pour transformer des fichiers PDF en format XLS ou XLSX facilite leur partage et leur stockage sécurisé. Protégez vos données contre les modifications et accédez à vos fichiers Excel sur n'importe quel appareil, avec ou sans Microsoft Office."
            },
            {
                title: "Conversion sécurisée de PDF vers XLS",
                description: "Vos fichiers sont protégés par un chiffrement TLS robuste (Sécurité de la couche de transport), et tous les fichiers PDF et Excel sont automatiquement supprimés de nos serveurs après une heure. Pour plus d'informations, veuillez consulter notre politique de confidentialité."
            }
        ],
        keywords: "PDF vers Excel, convertir PDF en Excel, PDF vers XLSX gratuit, convertisseur PDF en Excel, PDF vers Excel en ligne, PDF vers XLS gratuit, convertisseur PDF en XLSX en ligne, outil PDF vers Excel, convertir PDF en XLS, convertisseur PDF en Excel gratuit, document PDF en Excel, convertir fichier PDF en Excel, PDF vers XLSX sans inscription, outil PDF vers Excel gratuit, PDF vers Excel en ligne gratuit, conversion rapide PDF en Excel, PDF vers Microsoft Excel"
    },
    PDF_to_PDF_A: {
        title: "PDF vers PDF/A",
        seoTitle: "Convertir PDF en PDF/A - Convertisseur d'Archivage Gratuit",
        description: "Convertir des fichiers PDF au format PDF/A pour l'archivage à long terme",
        color: "#000000",
        type: ".pdf",
        to: "/pdf-to-pdf-a",
        features: [
            {
                title: "Maintenir l'intégrité des documents",
                description: "Convertissez vos fichiers PDF au format PDF/A et assurez-vous que l'intégrité du document, y compris le contenu, la structure et l'apparence, est préservée"
            },
            {
                title: "Conformité aux normes d'archivage",
                description: "Assurez la conformité aux normes d'archivage en convertissant vos documents PDF au format PDF/A, adapté au stockage à long terme et aux exigences légales"
            },
            {
                title: "Accessibilité et compatibilité à long terme",
                description: "En convertissant vos fichiers PDF au format PDF/A, vous garantissez l'accessibilité et la compatibilité à long terme avec les logiciels et systèmes futurs, tout en minimisant le risque d'obsolescence du format"
            }
        ],
        keywords: "PDF vers PDF/A, convertir PDF en PDF/A, PDF vers PDF/A gratuit, convertisseur PDF en PDF/A, PDF vers PDF/A en ligne, PDF en PDF archival, conversion PDF/A, convertir PDF en format archival, convertisseur PDF en PDF/A gratuit, outil PDF vers PDF/A, convertir PDF en PDF/A en ligne, PDF en document archival, PDF vers PDF/A gratuit, convertisseur PDF en PDF/A en ligne, conformité PDF en PDF/A, stockage PDF à long terme, PDF vers PDF/A pour archivage, PDF vers PDF/A en ligne gratuit"
    },
    PDF_to_Text: {
        title: "PDF vers Texte",
        seoTitle: "Convertir PDF en Texte - Convertisseur de Texte Brut Gratuit",
        description: "Convertir des fichiers PDF en documents texte brut",
        color: "#4493e1",
        type: ".pdf",
        to: "/pdf-to-text",
        features: [
            {
                title: "Conversion robuste et précise",
                description: "Bénéficiez de capacités de conversion robustes et précises, garantissant une extraction de haute qualité du contenu texte des documents PDF, y compris le support de diverses langues comme l'arabe."
            },
            {
                title: "Traitement rapide",
                description: "Profitez de vitesses de traitement rapides avec notre convertisseur PDF vers texte, permettant une conversion rapide des fichiers PDF en format texte brut sans compromettre la précision."
            },
            {
                title: "Préservation de la structure du document",
                description: "Convertissez des fichiers PDF en texte brut tout en préservant la structure et la mise en forme du document, garantissant la lisibilité et l'utilisabilité du contenu texte extrait."
            }
        ],
        keywords: "PDF vers texte, convertir PDF en texte, PDF vers texte gratuit, convertisseur PDF en texte, PDF vers texte en ligne, PDF en texte brut, extraire texte de PDF, PDF vers texte gratuit, convertisseur PDF en texte en ligne, outil PDF vers texte, convertir PDF en TXT, convertisseur PDF en texte gratuit, document PDF en texte, convertir fichier PDF en texte, PDF en TXT sans inscription, outil PDF vers texte gratuit, PDF vers texte en ligne gratuit, conversion rapide PDF en texte, convertisseur PDF en texte brut"
    }
}

export const edit_page: _edit_page = {
    edit_page_titles: {
        pdf_to_powerpoint: "Options PDF vers PowerPoint",
        word_to_pdf: "Options WORD vers PDF",
        powerpoint_to_pdf: "Options POWERPOINT vers PDF",
        excel_to_pdf: "Options EXCEL vers PDF",
        html_to_pdf: "Options HTML vers PDF",
        pdf_to_word: "Options PDF vers WORD",
        pdf_to_excel: "Options PDF vers EXCEL",
        pdf_to_pdf_a: "Options PDF vers PDF/A",
        pdf_to_text: "Options PDF vers texte",
    },
    loader_text: "Veuillez patienter...",
    add_more_button: "Ajouter d'autres fichiers",
    action_buttons: {
        pdf_to_powerpoint: "Convertir en PowerPoint",
        word_to_pdf: "Convertir en PDF",
        powerpoint_to_pdf: "Convertir en PDF",
        excel_to_pdf: "Convertir en PDF",
        html_to_pdf: "Convertir en PDF",
        pdf_to_word: "Convertir en Word",
        pdf_to_excel: "Convertir en Excel",
        pdf_to_pdf_a: "Convertir en PDF/A",
        pdf_to_text: "Convertir en Texte",
    },
    pages: "pages",
    page: "page",
    cta: "Voir les offres",
    pdf_a_options: {
        info: "Sélectionnez le format PDF/A souhaité dans le menu déroulant ci-dessous pour convertir votre PDF. Cela garantira que le document respecte la norme d'archivage choisie.",
        placeholder: "Choisir le format PDF/A"
    },
    languageSelectContent: {
        placeholder: "Choisir les langues (maximum 3)",
        warning: "Ce document est numérisé. Veuillez sélectionner sa langue pour garantir des résultats précis."
    },
    converter: {
        free: "Gratuit",
        premium: "Premium",
        freeToolTip: "Conversion de base - formatage limité",
        premiumToolTip: "Conversion haute précision avec préservation complète des styles"
    },
    fileNameInput: {
        label: "Nom du fichier de sortie (facultatif)",
        placeholder: "Saisir le nom du fichier",
        helperText: "Ce sera le nom du document qui sera téléchargé.",
    }
};

// French (fr) - tools
export const tools: _tools = {
    select: "Sélectionner",
    or_drop: "ou déposez les fichiers ici",
    files: "fichiers",
    drop_files: "Glissez les fichiers ici",
};

// French (fr) - downloadFile
export const downloadFile: _downloadFile = {
    titles: {
        "pdf-to-powerpoint": [
            "Les fichiers PDF ont été convertis en PowerPoint !",
            "Le fichier PDF a été converti en PowerPoint !",
        ],
        "word-to-pdf": [
            "Les fichiers Word ont été convertis en PDF !",
            "Le fichier Word a été converti en PDF !",
        ],
        "powerpoint-to-pdf": [
            "Les fichiers PowerPoint ont été convertis en PDF !",
            "Le fichier PowerPoint a été converti en PDF !",
        ],
        "excel-to-pdf": [
            "Les fichiers Excel ont été convertis en PDF !",
            "Le fichier Excel a été converti en PDF !",
        ],
        "html-to-pdf": [
            "Les fichiers HTML ont été convertis en PDF !",
            "Le fichier HTML a été converti en PDF !",
        ],
        "pdf-to-word": [
            "Les fichiers PDF ont été convertis en Word !",
            "Le fichier PDF a été converti en Word !",
        ],
        "pdf-to-excel": [
            "Les fichiers PDF ont été convertis en Excel !",
            "Le fichier PDF a été converti en Excel !",
        ],
        "pdf-to-pdf-a": [
            "Les fichiers PDF ont été convertis en PDF/A !",
            "Le fichier PDF a été converti en PDF/A !",
        ],
        "pdf-to-text": [
            "Les fichiers PDF ont été convertis en texte !",
            "Le fichier PDF a été converti en texte !",
        ],
    },

    btnText: {
        "pdf-to-powerpoint": [
            "Télécharger les fichiers PowerPoint convertis",
            "Télécharger le fichier PowerPoint converti",
        ],
        "word-to-pdf": [
            "Télécharger les fichiers PDF convertis",
            "Télécharger le fichier PDF converti",
        ],
        "powerpoint-to-pdf": [
            "Télécharger les fichiers PDF convertis",
            "Télécharger le fichier PDF converti",
        ],
        "excel-to-pdf": [
            "Télécharger les fichiers PDF convertis",
            "Télécharger le fichier PDF converti",
        ],
        "html-to-pdf": [
            "Télécharger les fichiers PDF convertis",
            "Télécharger le fichier PDF converti",
        ],
        "pdf-to-word": [
            "Télécharger les fichiers Word convertis",
            "Télécharger le fichier Word converti",
        ],
        "pdf-to-excel": [
            "Télécharger les fichiers Excel convertis",
            "Télécharger le fichier Excel converti",
        ],
        "pdf-to-pdf-a": [
            "Télécharger les fichiers PDF/A convertis",
            "Télécharger le fichier PDF/A converti",
        ],
        "pdf-to-text": [
            "Télécharger les fichiers texte convertis",
            "Télécharger le fichier texte converti",
        ],
    },

    backto: {
        "pdf-to-powerpoint": "Retour à PDF vers PowerPoint",
        "word-to-pdf": "Retour à Word vers PDF",
        "powerpoint-to-pdf": "Retour à PowerPoint vers PDF",
        "excel-to-pdf": "Retour à Excel vers PDF",
        "html-to-pdf": "Retour à HTML vers PDF",
        "pdf-to-word": "Retour à PDF vers Word",
        "pdf-to-excel": "Retour à PDF vers Excel",
        "pdf-to-pdf-a": "Retour à PDF vers PDF/A",
        "pdf-to-text": "Retour à PDF vers Texte",
    },
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
    alerts: {
        // Frontend validation
        maxFiles: "Maximum 15 fichiers. Abonnez-vous pour plus !",
        singleFileSize: "Le fichier doit faire moins de 100 Mo. Passez à la version supérieure pour des fichiers plus gros !",
        perFilePages: "500 pages par fichier. Débloquez plus maintenant !",
        fileSize: "50 Mo par fichier. Passez à la version supérieure pour plus !",
        // Backend file validation
        fileNotUploaded: "Aucun fichier téléchargé. Veuillez sélectionner un fichier.",
        fileEmpty: "Le fichier téléchargé est vide. Veuillez sélectionner un fichier valide.",
        fileTooLarge: "Le fichier dépasse 200 Mo. Passez à la version supérieure pour des fichiers plus gros !",
        invalidFileType: "Type de fichier invalide. Veuillez télécharger un format pris en charge.",
        fileCorrupt: "Le fichier semble être corrompu. Veuillez essayer un autre fichier.",
        insufficientUnits: "Unités de conversion insuffisantes. Améliorez votre forfait !",
        // Auth errors
        authRequired: "Veuillez vous connecter pour utiliser les fonctionnalités premium.",
        sessionExpired: "Votre session a expiré. Veuillez vous reconnecter.",
        invalidToken: "Échec de l'authentification. Veuillez vous reconnecter.",
        userNotFound: "Compte introuvable. Veuillez vous reconnecter.",
        authError: "Erreur d'authentification. Veuillez réessayer.",
        serverError: "Erreur du serveur. Veuillez réessayer plus tard.",
    },
};

export const adBlockerContent: adBlockerContentType = {
    title: "Bloqueur de publicités détecté",
    description: "Nous avons remarqué que vous utilisez un bloqueur de publicités. Désactivez-le ou passez à premium pour une expérience sans pubs !",
    reloadPage: "Recharger la page",
    upgradeToPremium: "Passer à Premium"
};