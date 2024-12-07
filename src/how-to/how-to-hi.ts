import { type _howToSchema } from "./how-to";

export const howToSchema: _howToSchema = {
    "@context": "http://schema.org",
    "@type": "HowTo",
    name: "PDF पृष्ठों को कैसे मिलाएं?",
    description: "एकल पृष्ठ में कई PDF पृष्ठों को मिलाने के लिए चरण।",
    step: [
        {
            "@type": "HowToStep",
            name: "चरण 1",
            text: "PDFEquips पर पृष्ठ मिलाने के उपकरण को खोलें।"
        },
        {
            "@type": "HowToStep",
            name: "चरण 2",
            text: "उन PDF फाइलों को अपलोड करें जिन्हें आप मिलाना चाहते हैं।"
        },
        {
            "@type": "HowToStep",
            name: "चरण 3",
            text: "ड्रॉपडाउन मेनू से पृष्ठ व्यवस्था का चयन करें। यह निर्धारित करेगा कि एकल PDF दस्तावेज़ में पृष्ठों को कैसे व्यवस्थित किया जाएगा।"
        },
        {
            "@type": "HowToStep",
            name: "चरण 4",
            text: "'पृष्ठ मिलाएं' बटन पर क्लिक करें ताकि चयनित व्यवस्था के अनुसार पृष्ठों को मिलाया जा सके।"
        },
        {
            "@type": "HowToStep",
            name: "चरण 5",
            text: "'मिलाई गई PDF फाइल डाउनलोड करें' बटन पर क्लिक करें ताकि मिलाई गई PDF फाइल को अपने डिवाइस पर सेव किया जा सके।"
        }
    ]
};

