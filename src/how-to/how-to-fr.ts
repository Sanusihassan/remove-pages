import { type _howToSchema } from "./how-to";

export const howToSchema: _howToSchema = {
    "@context": "http://schema.org",
    "@type": "HowTo",
    name: "Comment fusionner des pages PDF ?",
    description: "Étapes pour combiner plusieurs pages PDF en une seule page.",
    step: [
        {
            "@type": "HowToStep",
            name: "Étape 1",
            text: "Ouvrez l'outil de Fusion des Pages sur PDFEquips."
        },
        {
            "@type": "HowToStep",
            name: "Étape 2",
            text: "Téléchargez les fichiers PDF que vous souhaitez fusionner."
        },
        {
            "@type": "HowToStep",
            name: "Étape 3",
            text: "Sélectionnez une disposition de page dans le menu déroulant. Cela déterminera comment les pages sont organisées dans le document PDF fusionné."
        },
        {
            "@type": "HowToStep",
            name: "Étape 4",
            text: "Cliquez sur le bouton 'Fusionner les pages' pour combiner les pages selon la disposition sélectionnée."
        },
        {
            "@type": "HowToStep",
            name: "Étape 5",
            text: "Cliquez sur le bouton 'Télécharger le fichier PDF fusionné' pour enregistrer le fichier PDF fusionné sur votre appareil."
        }
    ]
};

