import { type _howToSchema } from "./how-to";

export const howToSchema: _howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Comment fusionner des fichiers PDF",
    description:
        "Guide étape par étape pour fusionner plusieurs fichiers PDF en un seul.",
    step: [
        {
            "@type": "HowToStep",
            name: "Étape 1",
            text: "Ouvrez l'outil de fusion PDF sur PDFEquips.",
        },
        {
            "@type": "HowToStep",
            name: "Étape 2",
            text: "Faites glisser et déposez des fichiers PDF ou cliquez sur le bouton 'Sélectionner des fichiers PDF' pour ajouter des fichiers PDF.",
        },
        {
            "@type": "HowToStep",
            name: "Étape 3",
            text: "Cliquez et maintenez un fichier, déplacez-le à l'emplacement souhaité, puis relâchez-le.",
        },
        {
            "@type": "HowToStep",
            name: "Étape 4",
            text: "Les fichiers PDF sont fusionnés de haut en bas.",
        },
        {
            "@type": "HowToStep",
            name: "Étape 5",
            text: "Pour supprimer un fichier, cliquez sur l'icône de suppression en haut du fichier.",
        },
        {
            "@type": "HowToStep",
            name: "Étape 6",
            text: "Pour faire pivoter une page, cliquez sur l'icône de rotation en haut de la vignette de la page et sélectionnez l'angle de rotation souhaité.",
        },
        {
            "@type": "HowToStep",
            name: "Étape 7",
            text: "Une fois que les fichiers sont dans l'ordre et l'orientation souhaités, cliquez sur le bouton 'Fusionner' pour les combiner en un seul fichier PDF.",
        },
    ],
}