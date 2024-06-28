import { _howToSchema } from "./how-to";

export const howToSchema: _howToSchema = {
    "@context": "http://schema.org",
    "@type": "HowTo",
    name: "Comment supprimer des pages d'un PDF?",
    description: "Étapes pour supprimer des pages indésirables d'un document PDF.",
    step: [
        {
            "@type": "HowToStep",
            name: "Étape 1",
            text: "Ouvrez l'outil de suppression de pages sur PDFEquips."
        },
        {
            "@type": "HowToStep",
            name: "Étape 2",
            text: "Faites glisser et déposez le fichier PDF ou cliquez sur le bouton 'Sélectionner le fichier PDF' pour télécharger votre PDF."
        },
        {
            "@type": "HowToStep",
            name: "Étape 3",
            text: "Sélectionnez les pages que vous souhaitez supprimer. Vous pouvez également spécifier un modèle tel que '2, 8-32' pour sélectionner la page 2 et les pages de 8 à 32."
        },
        {
            "@type": "HowToStep",
            name: "Étape 4",
            text: "Cliquez sur le bouton 'Supprimer les pages' pour supprimer les pages sélectionnées."
        },
        {
            "@type": "HowToStep",
            name: "Étape 5",
            text: "Cliquez sur le bouton 'Télécharger le fichier modifié' pour enregistrer le nouveau PDF sur votre appareil."
        }
    ]
};
