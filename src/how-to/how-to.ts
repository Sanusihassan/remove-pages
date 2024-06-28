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

export const howToSchema = {
    "@context": "http://schema.org",
    "@type": "HowTo",
    name: "How to Remove Pages from a PDF?",
    description: "Steps to delete unwanted pages from a PDF document.",
    step: [
        {
            "@type": "HowToStep",
            name: "Step 1",
            text: "Open the Remove Pages tool on PDFEquips."
        },
        {
            "@type": "HowToStep",
            name: "Step 2",
            text: "Drag and drop the PDF file or click the 'Select PDF File' button to upload your PDF."
        },
        {
            "@type": "HowToStep",
            name: "Step 3",
            text: "Select the pages you want to remove. You can also specify a pattern like '2, 8-32' to select page 2 and pages 8 to 32."
        },
        {
            "@type": "HowToStep",
            name: "Step 4",
            text: "Click the 'Remove Pages' button to delete the selected pages."
        },
        {
            "@type": "HowToStep",
            name: "Step 5",
            text: "Click the 'Download Modified File' button to save the new PDF to your device."
        }
    ]
};


export type _howToSchema = typeof howToSchema;