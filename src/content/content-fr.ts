// import type {
//   tool as _tool,
//   web2pdftool as _web2pdftool,
//   tools as _tools,
//   edit_page as _edit_page,
//   footer as _footer,
//   errors as _errors,
//   downloadFile as _downloadFile,
//   landing_page as _landing_page,
// } from "../content";

// export const landing_page: _landing_page = {
//   hero: {
//     title: "Améliorez votre productivité avec notre solution PDF complète",
//     description:
//       "Faites passer vos flux de travail PDF au niveau supérieur - Débloquez de nouvelles possibilités avec notre boîte à outils complète.",
//   },
//   features: {
//     title: "Comment PDFEquips peut simplifier vos tâches PDF",
//     description:
//       "PDFEquips vous propose une gamme de fonctionnalités pour gérer vos fichiers PDF en toute simplicité. Que vous souhaitiez fusionner, diviser, compresser, convertir, modifier ou protéger vos PDF, vous pouvez tout faire en quelques clics. PDFEquips est rapide, fiable et sécurisé.",
//   },
//   why_us: {
//     title: "La solution PDF sur laquelle vous pouvez compter",
//     description:
//       "PDFEquips est votre application web ultime pour gérer les PDF en toute simplicité. Profitez de toutes\
//     les fonctionnalités dont vous avez besoin pour travailler efficacement avec vos documents numériques\
//     tout en préservant la sécurité et la confidentialité de vos données.",
//   },
// };

// export const tool: _tool = {
//   Merge_PDF: {
//     title: "Fusionner des PDF",
//     seoTitle: "Fusionner des PDF - Combinez des fichiers en un seul",
//     description: "Combinez plusieurs fichiers PDF en un seul document",
//     color: "var(--red)",
//     type: ".pdf",
//     to: "/merge-pdf",
//     features: [
//       {
//         title: "Complètement gratuit et sans inscription",
//         description: "PDFEquips offre un service de fusion de PDF en ligne gratuit. Il n'est pas nécessaire de créer un compte, et nous ne demandons jamais votre adresse e-mail ou vos informations de carte de crédit."
//       },
//       {
//         title: "Outil robuste pour fusionner des PDF",
//         description: "PDFEquips combine facilement deux ou plusieurs documents PDF en un seul fichier, que ce soit une seule page ou plusieurs pages, des fichiers PDF grands ou petits, tous les formats sont compatibles."
//       },
//       {
//         title: "Fusionnez des fichiers PDF en ligne en toute sécurité",
//         description: "Tous les fichiers que vous téléchargez et créez sur nos serveurs sont cryptés pour des raisons de sécurité en utilisant TLS. Ils seront immédiatement et définitivement supprimés après le traitement. Pour plus d'informations, veuillez consulter notre politique de confidentialité."
//       }
//     ],
//     keywords: "fusionner PDF, outils de fusion PDF, fusionner des fichiers PDF, fusionner des documents PDF, fusionner PDF en ligne, fusionner PDF sans inscription, fusionner PDF gratuitement, fusionner plusieurs fichiers PDF, fusionner PDF rapidement, fusionner PDF en toute sécurité, fusionner des documents PDF facilement, fusionner PDF en ligne gratuitement, fusionner PDF sans installation, fusionner des fichiers PDF chiffrés, outils gratuits pour fusionner PDF, fusionner PDF en ligne sans inscription"
//   },
//   Compress_PDF: {
//     title: "Compresser des PDF",
//     seoTitle: "Compresser des PDF - Réduire la taille du fichier",
//     description: "Réduire la taille d'un fichier PDF tout en conservant sa qualité",
//     color: "var(--green)",
//     type: ".pdf",
//     to: "/compress-pdf",
//     features: [
//       {
//         title: "Versatile PDF Compression",
//         description: "Get fast and reliable results that you can count on every time, Choose from a range of compression levels to adjust your file size without compromising document quality"
//       },
//       {
//         title: "No need for email registration",
//         description: "Start compressing your PDFs right away - no email sign-up, no need for credit card details Just upload your document and compress it as needed"
//       },
//       {
//         title: "Maintaining quality all the time",
//         description: "PDFEquips uses advanced technology to optimize both the size and quality of images in your PDFs This ensures that you achieve significantly smaller file sizes without compromising the fidelity of your documents"
//       }
//     ],
//     keywords: "compresser PDF, outils de compression PDF, réduire la taille de PDF, compresser des documents PDF, compresser PDF en ligne, compresser PDF sans inscription, compresser PDF gratuitement, réduire la taille des fichiers PDF, compresser PDF rapidement, compresser PDF de haute qualité, compresser PDF sans perte de qualité, compresser des documents PDF en ligne, compresser PDF sans installation, outils gratuits pour compresser PDF, compresser PDF en ligne sans inscription"
//   },
//   PDF_to_Powerpoint: {
//     title: "PDF vers Powerpoint",
//     seoTitle: "PDF en PowerPoint - Convertir en présentations modifiables",
//     description: "Convertir des fichiers PDF en présentations Powerpoint modifiables",
//     color: "#C13B1B",
//     type: ".pdf",
//     to: "/pdf-to-powerpoint",
//     features: [
//       {
//         title: "Convertir PDF en PowerPoint en un seul clic",
//         description: "Convertissez rapidement des documents PDF en présentations PowerPoint à l'aide de notre convertisseur en ligne, garantissant un partage et un stockage faciles. Conservez la mise en forme et la disposition d'origine de toutes les diapositives."
//       },
//       {
//         title: "Convertir PDF en PowerPoint rapidement et gratuitement",
//         description: "PDFEquips convertit les fichiers PDF au format PowerPoint PPT (ppt ou pptx) en quelques secondes seulement. De plus, c'est un outil en ligne entièrement gratuit qui ne nécessite aucune installation ni connexion, et il ne comporte pas de filigranes."
//       },
//       {
//         title: "Conversion simple de PDF en PowerPoint",
//         description: "Avec notre convertisseur PDF en PowerPoint, vous n'avez pas besoin de naviguer dans les paramètres et les options. Il vous suffit de télécharger le fichier, de vous détendre et de profiter du spectacle !"
//       }
//     ],
//     keywords: "PDF à PowerPoint, convertir PDF en PowerPoint, convertir PDF en PPT, convertir PDF en PPTX, outils de conversion PDF en PowerPoint, convertir des documents PDF en PowerPoint, convertir PDF en présentation, convertir PDF en ligne, convertir PDF en PowerPoint gratuitement, convertir PDF en PPT sans inscription, convertir PDF rapidement, convertir PDF sans filigranes, outils en ligne pour convertir PDF en PowerPoint"
//   },
//   WORD_to_PDF: {
//     title: "WORD en PDF",
//     seoTitle: "Word en PDF - Convertir des fichiers Word",
//     description: "Convertir des fichiers Microsoft Word en documents PDF",
//     color: "#1B5EBE",
//     type: ".docx",
//     to: "/word-to-pdf",
//     features: [
//       {
//         title: "Facile à utiliser",
//         description: "Peu importe votre rôle - que vous soyez travailleur, étudiant ou enseignant - nos outils PDF sont faciles à utiliser. La conversion de fichiers WORD en documents PDF est simple et ne nécessite que quelques clics."
//       },
//       {
//         title: "Conversion simple et rapide",
//         description: "Grâce à sa méthode avancée de préservation des mises en page et des styles d'origine, PDFEquips garantit des conversions fluides de WORD en PDF. Profitez d'opérations rapides sans compromettre l'intégrité du document."
//       },
//       {
//         title: "Convertir un fichier WORD ou plusieurs fichiers WORD",
//         description: "Vous pouvez facilement convertir un ou plusieurs fichiers WORD sans tracas en utilisant PDFEquips. Nos outils directs garantissent une conversion rapide et précise, vous faisant gagner du temps et des efforts."
//       }
//     ],
//     keywords: "WORD en PDF, convertir WORD en PDF, convertir des documents Word en PDF, convertir des fichiers Word en PDF, outils de conversion Word en PDF, convertir Word en PDF en ligne, convertir Word en PDF gratuitement, convertir Word rapidement, convertir Word sans inscription, convertir Word en PDF sans perte de format, convertir des documents Word en PDF facilement, convertir des fichiers Word en PDF sans installation, outils gratuits pour convertir Word en PDF"
//   },
//   POWERPOINT_to_PDF: {
//     title: "POWERPOINT en PDF",
//     seoTitle: "PowerPoint en PDF - Convertir des fichiers PowerPoint",
//     description: "Convertir des fichiers Microsoft Powerpoint en documents PDF",
//     color: "#C13B1B",
//     type: ".pptx",
//     to: "/powerpoint-to-pdf",
//     features: [
//       {
//         title: "Convertir PowerPoint en PDF en un seul clic",
//         description: "Convertissez rapidement des présentations PowerPoint en documents PDF à l'aide de notre convertisseur en ligne, garantissant un partage et un stockage faciles. Conservez la mise en forme et la disposition d'origine de toutes les diapositives."
//       },
//       {
//         title: "Convertir PowerPoint en PDF rapidement et gratuitement",
//         description: "PDFEquips convertit les fichiers PowerPoint PPT (ppt ou pptx) en PDF en quelques secondes seulement. De plus, c'est un outil en ligne entièrement gratuit qui ne nécessite aucune installation ni connexion, et il ne comporte pas de filigranes."
//       },
//       {
//         title: "Conversion simple de PowerPoint en PDF",
//         description: "Avec notre convertisseur PPT en PDF, vous n'avez pas besoin de naviguer dans les paramètres et les options. Il vous suffit de télécharger le fichier, de vous détendre et de profiter du spectacle !"
//       }
//     ],
//     keywords: "POWERPOINT en PDF, convertir PowerPoint en PDF, convertir des documents PowerPoint en PDF, convertir des présentations PowerPoint en PDF, outils de conversion PowerPoint en PDF, convertir PowerPoint en PDF en ligne, convertir PowerPoint en PDF gratuitement, convertir PowerPoint rapidement, convertir PowerPoint sans inscription, convertir PowerPoint en PDF sans perte de format, convertir des présentations PowerPoint en PDF facilement, convertir des fichiers PowerPoint en PDF sans installation, outils gratuits pour convertir PowerPoint en PDF"
//   },
//   EXCEL_to_PDF: {
//     title: "EXCEL en PDF",
//     seoTitle: "Excel en PDF - Convertir des fichiers Excel",
//     description: "Convertir des fichiers Microsoft Excel en documents PDF",
//     color: "#10793F",
//     type: ".xlsx",
//     to: "/excel-to-pdf",
//     features: [
//       {
//         title: "Convertisseur facile à utiliser d'Excel en PDF",
//         description: "Un convertisseur approprié pour convertir des fichiers XLS, XLSX au format PDF facilite le partage et le stockage sécurisé Protégez vos données contre les modifications et accédez à vos fichiers Excel sur n'importe quel appareil, que vous ayez Microsoft Office ou non."
//       },
//       {
//         title: "Outil de conversion en ligne rapide et gratuit",
//         description: "PDFEquips est un outil en ligne entièrement gratuit pour convertir des fichiers Excel (xls ou xlsx) en PDF. Aucune installation ni inscription n'est requise, et aucun filigrane n'est ajouté. De plus, il convertit les grands fichiers Excel en quelques secondes seulement."
//       },
//       {
//         title: "Conversion sécurisée de XLS en PDF",
//         description: "Vos fichiers sont protégés par un cryptage robuste TLS (Transport Layer Security), et tous les fichiers Excel et PDF sont automatiquement supprimés de nos serveurs après une heure. Pour plus d'informations, veuillez consulter notre politique de confidentialité."
//       }
//     ],
//     keywords: "EXCEL en PDF, convertir Excel en PDF, convertir des documents Excel en PDF, convertir des fichiers Excel en PDF, outils de conversion Excel en PDF, convertir Excel en PDF en ligne, convertir Excel en PDF gratuitement, convertir Excel rapidement, convertir Excel sans inscription, convertir Excel en PDF sans perte de format, convertir des feuilles de calcul Excel en PDF facilement, convertir des fichiers Excel en PDF sans installation, outils gratuits pour convertir Excel en PDF"
//   },
//   HTML_to_PDF: {
//     title: "HTML en PDF",
//     seoTitle: "HTML en PDF - Convertir des pages web",
//     description: "Convertir des pages web HTML en documents PDF",
//     color: "rgb(228, 77, 38)",
//     type: ".html",
//     to: "/html-to-pdf",
//     features: [
//       {
//         title: "Convertissez instantanément, aucune inscription requise.",
//         description: "Pas besoin de s'inscrire ou de fournir des informations pour convertir votre HTML en PDF. Notre convertisseur est gratuit pour tous et offre des résultats rapides."
//       },
//       {
//         title: "Gestion sécurisée des documents.",
//         description: "Vos téléchargements et fichiers PDF générés sont traités avec un cryptage TLS pour une sécurité accrue. Soyez assuré que la confidentialité de vos données est protégée. Consultez notre politique de confidentialité pour plus d'informations."
//       },
//       {
//         title: "Traitement basé sur le cloud.",
//         description: "Profitez de la commodité du traitement basé sur le cloud pour les conversions de HTML en PDF. Notre service en ligne garantit une conversion rapide et efficace sans ralentir votre ordinateur. Accédez à notre service de n'importe où et à tout moment."
//       }
//     ],
//     keywords: "HTML en PDF, convertir HTML en PDF, convertir des pages web en PDF, convertir des fichiers HTML en PDF, outils de conversion HTML en PDF, convertir HTML en PDF en ligne, convertir HTML en PDF gratuitement, convertir HTML rapidement, convertir HTML sans inscription, convertir des pages web en PDF sans perte de format, convertir HTML en documents PDF facilement, convertir des fichiers HTML en PDF sans installation, outils gratuits pour convertir HTML en PDF"
//   },
//   PDF_to_WORD: {
//     title: "PDF en WORD",
//     seoTitle: "PDF en Word - Convertir des fichiers PDF",
//     description: "Convertir des fichiers PDF en documents Microsoft Word",
//     color: "#1B5EBE",
//     type: ".pdf",
//     to: "/pdf-to-word",
//     features: [
//       {
//         title: "Conversion simple et rapide",
//         description: "Grâce à sa méthode avancée de préservation des mises en page et des styles d'origine, PDFEquips garantit des conversions fluides de PDF en Word. Profitez d'opérations rapides sans compromettre l'intégrité du document."
//       },
//       {
//         title: "Facile à utiliser",
//         description: "Peu importe votre rôle - que vous soyez travailleur, étudiant ou enseignant - nos outils PDF sont faciles à utiliser. La conversion de fichiers PDF en documents Word est simple et ne nécessite que quelques clics."
//       },
//       {
//         title: "Convertir un fichier PDF ou plusieurs fichiers PDF",
//         description: "Vous pouvez facilement convertir un ou plusieurs fichiers PDF sans tracas en utilisant PDFEquips. Nos outils directs garantissent une conversion rapide et précise, vous faisant gagner du temps et des efforts."
//       }
//     ],
//     keywords: "PDF en WORD, convertir PDF en Word, convertir des documents PDF en Word, convertir des fichiers PDF en Word, outils de conversion PDF en Word, convertir PDF en Word en ligne, convertir PDF en Word gratuitement, convertir PDF rapidement, convertir PDF sans inscription, convertir PDF en Word sans perte de format, convertir des documents PDF en Word facilement, convertir des fichiers PDF en Word sans installation, outils gratuits pour convertir PDF en Word"
//   },
//   PDF_to_EXCEL: {
//     title: "PDF en EXCEL",
//     seoTitle: "PDF en Excel - Convertir des fichiers PDF",
//     description: "Convertir des fichiers PDF en documents Microsoft Excel",
//     color: "#10793F",
//     type: ".pdf",
//     to: "/pdf-to-excel",
//     features: [
//       {
//         title: "Outil de conversion en ligne rapide et gratuit",
//         description: "PDFEquips est un outil en ligne entièrement gratuit pour convertir des fichiers PDF en Excel (XLS ou XLSX). Aucune installation ni inscription n'est requise, et aucun filigrane n'est ajouté. De plus, il convertit les grands fichiers PDF en quelques secondes seulement."
//       },
//       {
//         title: "Convertisseur facile à utiliser de PDF en Excel",
//         description: "Un convertisseur approprié pour convertir des fichiers PDF au format XLS ou XLSX facilite le partage et le stockage sécurisé. Protégez vos données contre les modifications et accédez à vos fichiers Excel sur n'importe quel appareil, que vous ayez Microsoft Office ou non."
//       },
//       {
//         title: "Conversion sécurisée de PDF en XLS",
//         description: "Vos fichiers sont protégés par un cryptage robuste TLS (Transport Layer Security), et tous les fichiers PDF et Excel sont automatiquement supprimés de nos serveurs après une heure. Pour plus d'informations, veuillez consulter notre politique de confidentialité."
//       }
//     ],
//     keywords: "PDF en EXCEL, convertir PDF en Excel, convertir des documents PDF en Excel, convertir des fichiers PDF en Excel, outils de conversion PDF en Excel, convertir PDF en Excel en ligne, convertir PDF en Excel gratuitement, convertir PDF rapidement, convertir PDF sans inscription, convertir PDF en Excel sans perte de format, convertir des tableaux PDF en Excel facilement, convertir des fichiers PDF en Excel sans installation, outils gratuits pour convertir PDF en Excel"
//   },
//   PDF_to_PDF_A: {
//     title: "PDF en PDF/A",
//     seoTitle: "PDF en PDF/A - Archivage à long terme",
//     description: "Convertir des fichiers PDF en format PDF/A pour l'archivage à long terme",
//     color: "#000000",
//     type: ".pdf",
//     to: "/pdf-to-pdf-a",
//     features: [
//       {
//         title: "Maintenir l'intégrité des documents",
//         description: "Convertissez vos fichiers PDF au format PDF/A et assurez-vous que l'intégrité du document, y compris le contenu, la structure et l'apparence, est préservée."
//       },
//       {
//         title: "Conformité aux normes d'archivage",
//         description: "Assurez-vous de respecter les normes d'archivage en convertissant vos documents PDF au format PDF/A, qui est adapté au stockage à long terme et aux exigences légales."
//       },
//       {
//         title: "Accessibilité et compatibilité à long terme",
//         description: "En convertissant vos fichiers PDF au format PDF/A, vous garantissez une accessibilité et une compatibilité à long terme avec les logiciels et les systèmes futurs, tout en minimisant le risque d'obsolescence du format."
//       }
//     ],
//     keywords: "PDF en PDF/A, convertir PDF en PDF/A, convertir des documents PDF en PDF/A, convertir des fichiers PDF en PDF/A, outils de conversion PDF en PDF/A, convertir PDF en PDF/A en ligne, convertir PDF en PDF/A gratuitement, convertir PDF rapidement, convertir PDF sans inscription, convertir PDF en PDF/A sans perte de format, convertir des documents PDF en PDF/A facilement, convertir des fichiers PDF en PDF/A sans installation, outils gratuits pour convertir PDF en PDF/A"
//   },
//   PDF_to_Text: {
//     title: "PDF en texte",
//     seoTitle: "PDF en texte - Convertir en documents texte",
//     description: "Convertir des fichiers PDF en documents texte",
//     color: "#4493e1",
//     type: ".pdf",
//     to: "/pdf-to-text",
//     features: [
//       {
//         title: "Conversion robuste et précise",
//         description: "Bénéficiez de capacités de conversion robustes et précises, garantissant une extraction de contenu textuel de haute qualité à partir de documents PDF, y compris la prise en charge de diverses langues comme l'arabe."
//       },
//       {
//         title: "Traitement rapide",
//         description: "Profitez de vitesses de traitement rapides avec notre convertisseur PDF en texte, permettant une conversion rapide des fichiers PDF au format texte brut sans compromettre la précision."
//       },
//       {
//         title: "Préservation de la structure du document",
//         description: "Convertissez les fichiers PDF en texte brut tout en préservant la structure et la mise en forme du document, garantissant la lisibilité et l'utilisabilité du contenu textuel extrait."
//       }
//     ],
//     keywords: "convertir PDF en texte, convertir PDF en document texte, convertir des documents PDF en texte, convertir des fichiers PDF en texte, outils de conversion PDF en texte, convertir PDF en texte en ligne, convertir PDF en texte gratuitement, convertir PDF rapidement, convertir PDF sans inscription, convertir PDF en texte sans perte de format, extraire le texte de PDF facilement, convertir des fichiers PDF en texte sans installation, outils gratuits pour convertir PDF en texte"
//   }
// }

// export const tools: _tools = {
//   select: "Sélectionner",
//   or_drop: "ou déposer des fichiers ici",
//   files: "fichiers",
//   drop_files: "Déposez les fichiers ici",
// };

// export const downloadFile: _downloadFile = {
//   titles: {
//     "merge-pdf": [
//       "Fusion de fichiers PDF réussie !",
//       "Fusion de fichier PDF réussie !",
//     ],
//     "split-pdf": ["Fichier PDF divisé avec succès !"],
//     "compress-pdf": [
//       "Compression de fichiers PDF réussie !",
//       "Compression de fichier PDF réussie !",
//     ],
//     "pdf-to-powerpoint": [
//       "Conversion de fichiers PDF en PowerPoint réussie !",
//       "Conversion de fichier PDF en PowerPoint réussie !",
//     ],
//     "word-to-pdf": [
//       "Conversion de fichiers Word en PDF réussie !",
//       "Conversion de fichier Word en PDF réussie !",
//     ],
//     "powerpoint-to-pdf": [
//       "Conversion de fichiers PowerPoint en PDF réussie !",
//       "Conversion de fichier PowerPoint en PDF réussie !",
//     ],
//     "excel-to-pdf": [
//       "Conversion de fichiers Excel en PDF réussie !",
//       "Conversion de fichier Excel en PDF réussie !",
//     ],
//     "html-to-pdf": [
//       "Conversion de fichiers HTML en PDF réussie !",
//       "Conversion de fichier HTML en PDF réussie !",
//     ],
//     "pdf-to-word": [
//       "Conversion de fichiers PDF en Word réussie !",
//       "Conversion de fichier PDF en Word réussie !",
//     ],
//     "pdf-to-excel": [
//       "Conversion de fichiers PDF en Excel réussie !",
//       "Conversion de fichier PDF en Excel réussie !",
//     ],
//     "pdf-to-pdf-a": [
//       "Conversion de fichiers PDF en PDF/A réussie !",
//       "Conversion de fichier PDF en PDF/A réussie !",
//     ],
//     "pdf-to-text": [
//       "Conversion de fichiers PDF en texte réussie !",
//       "Conversion de fichier PDF en texte réussie !",
//     ],
//   },
//   btnText: {
//     "merge-pdf": [
//       "Télécharger les fichiers PDF fusionnés",
//       "Télécharger le fichier PDF fusionné",
//     ],
//     "split-pdf": [
//       "Télécharger les fichiers PDF divisés",
//       "Télécharger le fichier PDF divisé",
//     ],
//     "compress-pdf": [
//       "Télécharger les fichiers PDF compressés",
//       "Télécharger le fichier PDF compressé",
//     ],
//     "pdf-to-powerpoint": [
//       "Télécharger les fichiers PowerPoint convertis",
//       "Télécharger le fichier PowerPoint converti",
//     ],
//     "word-to-pdf": [
//       "Télécharger les fichiers PDF convertis",
//       "Télécharger le fichier PDF converti",
//     ],
//     "powerpoint-to-pdf": [
//       "Télécharger les fichiers PDF convertis",
//       "Télécharger le fichier PDF converti",
//     ],
//     "excel-to-pdf": [
//       "Télécharger les fichiers PDF convertis",
//       "Télécharger le fichier PDF converti",
//     ],
//     "html-to-pdf": [
//       "Télécharger les fichiers PDF convertis",
//       "Télécharger le fichier PDF converti",
//     ],
//     "pdf-to-word": [
//       "Télécharger les fichiers Word convertis",
//       "Télécharger le fichier Word converti",
//     ],
//     "pdf-to-excel": [
//       "Télécharger les fichiers Excel convertis",
//       "Télécharger le fichier Excel converti",
//     ],
//     "pdf-to-pdf-a": [
//       "Télécharger les fichiers PDF/A convertis",
//       "Télécharger le fichierPDF/A converti",
//     ],
//     "pdf-to-text": [
//       "Télécharger les fichiers texte extraits",
//       "Télécharger le fichier texte extrait",
//     ],
//   },
//   backto: {
//     "merge-pdf": "Retour à Fusionner PDF",
//     "split-pdf": "Retour à Diviser PDF",
//     "compress-pdf": "Retour à Compresser PDF",
//     "pdf-to-powerpoint": "Retour à PDF vers Powerpoint",
//     "word-to-pdf": "Retour à Word vers PDF",
//     "powerpoint-to-pdf": "Retour à Powerpoint vers PDF",
//     "excel-to-pdf": "Retour à Excel vers PDF",
//     "html-to-pdf": "Retour à HTML vers PDF",
//     "pdf-to-word": "Retour à PDF vers Word",
//     "pdf-to-excel": "Retour à PDF vers Excel",
//     "pdf-to-pdf-a": "Retour à PDF vers PDF-A",
//     "pdf-to-text": "Retour à PDF vers Texte",
//   },
// };

// export const edit_page: _edit_page = {
//   edit_page_titles: {
//     merge_pdf: "Options de fusion de PDF",
//     split_pdf: "Options de séparation de PDF",
//     compress_pdf: "Options de compression de PDF",
//     pdf_to_powerpoint: "Options de conversion de PDF en PowerPoint",

//     word_to_pdf: "Options de conversion de WORD en PDF",
//     powerpoint_to_pdf: "Options de conversion de POWERPOINT en PDF",
//     excel_to_pdf: "Options de conversion de EXCEL en PDF",
//     html_to_pdf: "Options de conversion de HTML en PDF",

//     pdf_to_word: "Options de conversion de PDF en WORD",
//     pdf_to_excel: "Options de conversion de PDF en EXCEL",
//     pdf_to_pdf_a: "Options de conversion de PDF en PDF/A",
//     pdf_to_text: "Options de PDF à texte",
//   },
//   pdf_a_options: {
//     info: "Sélectionnez le format PDF/A souhaité dans le menu déroulant ci-dessous pour convertir votre PDF. Cela garantira que le document est conforme à la norme d'archivage choisie.",
//     placeholder: "Choisir le format PDF/A"
//   },
//   loader_text: "Veuillez patienter...",
//   add_more_button: "Ajouter plus de fichiers",
//   action_buttons: {
//     merge_pdf: "Fusionner PDF",
//     split_pdf: "Diviser PDF",
//     compress_pdf: "Compresser PDF",
//     pdf_to_powerpoint: "Convertir en PowerPoint",

//     word_to_pdf: "Convertir en PDF",
//     powerpoint_to_pdf: "Convertir en PDF",
//     excel_to_pdf: "Convertir en PDF",
//     html_to_pdf: "Convertir en PDF",

//     pdf_to_word: "Convertir en Word",
//     pdf_to_excel: "Convertir en Excel",
//     pdf_to_pdf_a: "Convertir en PDF/A",
//     pdf_to_text: "Convertir en texte",
//     translate_pdf: "Traduire PDF",
//   },
//   pages: "pages",
//   page: "page",
//   compress_pdf: [
//     {
//       title: "Compression recommandée",
//       description: "Meilleur équilibre entre la taille et la qualité",
//     },
//     {
//       title: "Compression moins importante",
//       description: "Taille de fichier plus petite mais qualité inférieure",
//     },
//     {
//       title: "Compression extrême",
//       description:
//         "Taille de fichier considérablement plus petite mais qualité bien inférieure",
//     },
//     {
//       title: "Compression personnalisée",
//       description: "Choisissez votre propre niveau de compression",
//     },
//   ],
//   merge_pdf: `Utilisez le glisser-déposer pour changer l'ordre des fichiers PDF pour la fusion. Cliquez et maintenez un fichier, déplacez-le à l'emplacement souhaité et relâchez le bouton de la souris.
//   Les fichiers PDF sont fusionnés de haut en bas. Pour supprimer un fichier, cliquez sur l'icône de suppression en haut du fichier. Pour faire pivoter une page, cliquez sur l'icône de rotation en haut de la vignette de la page et sélectionnez l'angle de rotation souhaité. Une fois que les fichiers sont dans l'ordre et l'orientation souhaités, cliquez sur le bouton "Fusionner" pour les combiner en un seul fichier PDF.`,
// };
// export const footer: _footer = {
//   brand: "PDFEquips",
//   terms: "conditions",
//   conditions: "conditions d'utilisation",
//   privacy_policy: "politique de confidentialité",
// };

// export const errors: _errors = {
//   EMPTY_FILE: {
//     message: "Le fichier est vide. Veuillez choisir un fichier valide.",
//     code: "ERR_EMPTY_FILE",
//   },
//   FILE_TOO_LARGE: {
//     message:
//       "Le fichier est trop volumineux. Veuillez choisir un fichier plus petit ou utiliser notre outil de compression PDF pour réduire la taille du fichier.",
//     code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
//   },
//   NOT_SUPPORTED_TYPE: {
//     message: "Le fichier n'est pas d'un type pris en charge.",
//     types: {
//       PDF: "Veuillez choisir un fichier PDF valide.",
//       DOC: "Veuillez choisir un fichier de document Word valide.",
//       DOCX: "Veuillez choisir un fichier de document Word valide.",
//       XLS: "Veuillez choisir un fichier de feuille de calcul Excel valide.",
//       XLSX: "Veuillez choisir un fichier de feuille de calcul Excel valide.",
//       PPT: "Veuillez choisir un fichier de présentation PowerPoint valide.",
//       PPTX: "Veuillez choisir un fichier de présentation PowerPoint valide.",
//     },
//     code: "ERR_INVALID_FILE_TYPE",
//   },
//   FILE_CORRUPT: {
//     message:
//       "Le fichier est corrompu et ne peut pas être traité. Veuillez choisir un fichier valide.",
//     code: "ERR_FILE_CORRUPT",
//   },
//   MISSING_FONTS: {
//     message:
//       "Le fichier contient des polices manquantes. Veuillez vous assurer que toutes les polices sont intégrées dans le fichier PDF.",
//     code: "ERR_MISSING_FONTS",
//   },
//   INVALID_IMAGE_DATA: {
//     message:
//       "Le fichier contient des données d'image non valides. Veuillez vous assurer que toutes les images sont correctement formatées.",
//     code: "ERR_INVALID_IMAGE_DATA",
//   },
//   SECURITY_RISK: {
//     message:
//       "Le fichier contient un risque de sécurité et ne peut pas être traité. Veuillez choisir un fichier valide.",
//     code: "ERR_SECURITY_RISK",
//   },
//   MAX_FILES_EXCEEDED: {
//     message:
//       "Vous avez dépassé le nombre maximal de fichiers autorisés. Veuillez supprimer certains fichiers et réessayer.",
//     code: "ERR_MAX_FILES_EXCEEDED",
//   },
//   NO_FILES_SELECTED: {
//     message:
//       "Aucun fichier sélectionné. Veuillez sélectionner au moins un fichier.",
//     code: "ERR_NO_FILES_SELECTED",
//   },
//   UNKNOWN_ERROR: {
//     message:
//       "Une erreur inconnue s'est produite. Veuillez réessayer plus tard ou contacter le support.",
//     code: "ERR_UNKNOWN",
//   },
//   ERR_NETWORK: {
//     message:
//       "Une erreur de réseau s'est produite. Veuillez vérifier votre connexion Internet et réessayer.",
//     code: "ERR_NETWORK",
//   },
//   ERR_UPLOAD_COUNT: {
//     message: "Veuillez télécharger au moins deux fichiers à fusionner.",
//     code: "ERR_UPLOAD_COUNT",
//   },
// };
