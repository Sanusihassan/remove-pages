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
    name: "How to Merge PDFs",
    description: "Step-by-step guide to merge multiple PDF files into one.",
    step: [
        {
            "@type": "HowToStep",
            name: "Step 1",
            text: "Open the PDF merge tool on PDFEquips.",
        },
        {
            "@type": "HowToStep",
            name: "Step 2",
            text: "Drag and drop PDF files or click the 'Select PDF Files' button to add PDF files.",
        },
        {
            "@type": "HowToStep",
            name: "Step 3",
            text: "Click and hold a file, move it to the desired location, and release the it.",
        },
        {
            "@type": "HowToStep",
            name: "Step 4",
            text: "PDF files are merged from top to bottom.",
        },
        {
            "@type": "HowToStep",
            name: "Step 5",
            text: "To remove a file, click the delete icon on top of the file.",
        },
        {
            "@type": "HowToStep",
            name: "Step 6",
            text: "To rotate a page, click the rotate icon on top of the page thumbnail and select the desired rotation angle.",
        },
        {
            "@type": "HowToStep",
            name: "Step 7",
            text: "Once the files are in the desired order and orientation, click the 'Merge' button to combine them into a single PDF file.",
        },
    ],
};




export type _howToSchema = typeof howToSchema;