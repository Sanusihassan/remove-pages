import { _howToSchema } from "./how-to";

export const howToSchema: _howToSchema = {
    "@context": "http://schema.org",
    "@type": "HowTo",
    name: "¿Cómo eliminar páginas de un PDF?",
    description: "Pasos para eliminar páginas no deseadas de un documento PDF.",
    step: [
        {
            "@type": "HowToStep",
            name: "Paso 1",
            text: "Abre la herramienta de eliminación de páginas en PDFEquips."
        },
        {
            "@type": "HowToStep",
            name: "Paso 2",
            text: "Arrastra y suelta el archivo PDF o haz clic en el botón 'Seleccionar archivo PDF' para cargar tu PDF."
        },
        {
            "@type": "HowToStep",
            name: "Paso 3",
            text: "Selecciona las páginas que deseas eliminar. También puedes especificar un patrón como '2, 8-32' para seleccionar la página 2 y las páginas del 8 al 32."
        },
        {
            "@type": "HowToStep",
            name: "Paso 4",
            text: "Haz clic en el botón 'Eliminar páginas' para eliminar las páginas seleccionadas."
        },
        {
            "@type": "HowToStep",
            name: "Paso 5",
            text: "Haz clic en el botón 'Descargar archivo modificado' para guardar el nuevo PDF en tu dispositivo."
        }
    ]
};
