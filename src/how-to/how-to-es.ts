import { type _howToSchema } from "./how-to";

export const howToSchema: _howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Cómo combinar archivos PDF",
    description:
        "Guía paso a paso para combinar varios archivos PDF en uno solo.",
    step: [
        {
            "@type": "HowToStep",
            name: "Paso 1",
            text: "Abre la herramienta de fusión de PDF en PDFEquips.",
        },
        {
            "@type": "HowToStep",
            name: "Paso 2",
            text: "Arrastra y suelta archivos PDF o haz clic en el botón 'Seleccionar archivos PDF' para agregar archivos PDF.",
        },
        {
            "@type": "HowToStep",
            name: "Paso 3",
            text: "Haz clic y mantén presionado un archivo, muévelo a la ubicación deseada y suéltalo.",
        },
        {
            "@type": "HowToStep",
            name: "Paso 4",
            text: "Los archivos PDF se fusionan de arriba a abajo.",
        },
        {
            "@type": "HowToStep",
            name: "Paso 5",
            text: "Para eliminar un archivo, haz clic en el icono de eliminar en la parte superior del archivo.",
        },
        {
            "@type": "HowToStep",
            name: "Paso 6",
            text: "Para rotar una página, haz clic en el icono de rotación en la parte superior de la miniatura de la página y selecciona el ángulo de rotación deseado.",
        },
        {
            "@type": "HowToStep",
            name: "Paso 7",
            text: "Una vez que los archivos estén en el orden y la orientación deseados, haz clic en el botón 'Combinar' para unirlos en un solo archivo PDF.",
        },
    ],
}