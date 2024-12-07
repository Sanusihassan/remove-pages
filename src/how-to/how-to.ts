import type { HowTo, WithContext } from "schema-dts";

export type howToType = {
    "@context": string;
    "@type": string;
    name: string;
    description: string;
    step: {
        "@type": string;
        name: string;
        text: string;
        substeps: string[];
    }[];
};


export const howToSchema: WithContext<HowTo> = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Merge PDF Pages?",
    description: "Steps to combine multiple PDF pages into a single page.",
    step: [
        {
            "@type": "HowToStep",
            name: "Step 1",
            text: "Open the Merge Pages tool on PDFEquips."
        },
        {
            "@type": "HowToStep",
            name: "Step 2",
            text: "Upload the PDF files you want to merge."
        },
        {
            "@type": "HowToStep",
            name: "Step 3",
            text: "Select a page arrangement from the dropdown menu. This will determine how the pages are arranged in the merged PDF document."
        },
        {
            "@type": "HowToStep",
            name: "Step 4",
            text: "Click the 'Merge Pages' button to combine the pages as per the selected arrangement."
        },
        {
            "@type": "HowToStep",
            name: "Step 5",
            text: "Click the 'Download Merged PDF file' button to save the merged PDF file to your device."
        }
    ]
};




export type _howToSchema = typeof howToSchema;