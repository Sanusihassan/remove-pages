import { type _howToSchema } from "./how-to";

export const howToSchema: _howToSchema = {
    "@context": "http://schema.org",
    "@type": "HowTo",
    name: "¿Cómo combinar páginas PDF?",
    description: "Pasos para combinar múltiples páginas PDF en una sola página.",
    step: [
        {
            "@type": "HowToStep",
            name: "Paso 1",
            text: "Abre la herramienta de Combinar Páginas en PDFEquips."
        },
        {
            "@type": "HowToStep",
            name: "Paso 2",
            text: "Sube los archivos PDF que deseas combinar."
        },
        {
            "@type": "HowToStep",
            name: "Paso 3",
            text: "Selecciona una disposición de página del menú desplegable. Esto determinará cómo se organizan las páginas en el documento PDF combinado."
        },
        {
            "@type": "HowToStep",
            name: "Paso 4",
            text: "Haz clic en el botón 'Combinar Páginas' para combinar las páginas según la disposición seleccionada."
        },
        {
            "@type": "HowToStep",
            name: "Paso 5",
            text: "Haz clic en el botón 'Descargar archivo PDF combinado' para guardar el archivo PDF combinado en tu dispositivo."
        }
    ]
};
