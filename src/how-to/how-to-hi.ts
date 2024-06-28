import { _howToSchema } from "./how-to";

export const howToSchema: _howToSchema = {
    "@context": "http://schema.org",
    "@type": "HowTo",
    name: "PDF से पृष्ठ कैसे हटाएं?",
    description: "PDF दस्तावेज़ से अवांछित पृष्ठों को हटाने के चरण।",
    step: [
        {
            "@type": "HowToStep",
            name: "चरण 1",
            text: "PDFEquips पर पृष्ठ हटाने का उपकरण खोलें।"
        },
        {
            "@type": "HowToStep",
            name: "चरण 2",
            text: "PDF फ़ाइल को खींचें और छोड़ें या अपनी PDF अपलोड करने के लिए 'PDF फ़ाइल चुनें' बटन पर क्लिक करें।"
        },
        {
            "@type": "HowToStep",
            name: "चरण 3",
            text: "वह पृष्ठ चुनें जिसे आप हटाना चाहते हैं। आप '2, 8-32' जैसे पैटर्न भी निर्दिष्ट कर सकते हैं ताकि पृष्ठ 2 और पृष्ठ 8 से 32 को चुन सकें।"
        },
        {
            "@type": "HowToStep",
            name: "चरण 4",
            text: "चयनित पृष्ठों को हटाने के लिए 'पृष्ठ हटाएं' बटन पर क्लिक करें।"
        },
        {
            "@type": "HowToStep",
            name: "चरण 5",
            text: "संशोधित फ़ाइल को अपने डिवाइस में सहेजने के लिए 'संशोधित फ़ाइल डाउनलोड करें' बटन पर क्लिक करें।"
        }
    ]
};
