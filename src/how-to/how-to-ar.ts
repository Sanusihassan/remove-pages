import { type _howToSchema } from "./how-to";

export const howToSchema: _howToSchema = {
    "@context": "http://schema.org",
    "@type": "HowTo",
    name: "كيفية دمج صفحات PDF؟",
    description: "خطوات لدمج صفحات PDF متعددة في صفحة واحدة.",
    step: [
        {
            "@type": "HowToStep",
            name: "الخطوة 1",
            text: "افتح أداة دمج الصفحات على PDFEquips."
        },
        {
            "@type": "HowToStep",
            name: "الخطوة 2",
            text: "قم بتحميل ملفات PDF التي تريد دمجها."
        },
        {
            "@type": "HowToStep",
            name: "الخطوة 3",
            text: "حدد ترتيب الصفحات من القائمة المنسدلة. سيحدد هذا كيفية ترتيب الصفحات في مستند PDF المدمج."
        },
        {
            "@type": "HowToStep",
            name: "الخطوة 4",
            text: "انقر على زر 'دمج الصفحات' لدمج الصفحات حسب الترتيب المحدد."
        },
        {
            "@type": "HowToStep",
            name: "الخطوة 5",
            text: "انقر على زر 'تنزيل ملف PDF المدمج' لحفظ ملف PDF المدمج على جهازك."
        }
    ]
};
