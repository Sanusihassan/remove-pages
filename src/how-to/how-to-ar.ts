import { type _howToSchema } from "./how-to";

export const howToSchema: _howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "كيفية دمج ملفات PDF",
    description: "دليل خطوة بخطوة لدمج ملفات PDF متعددة في ملف واحد.",
    step: [
        {
            "@type": "HowToStep",
            name: "الخطوة 1",
            text: "افتح أداة دمج PDF على PDFEquips.",
        },
        {
            "@type": "HowToStep",
            name: "الخطوة 2",
            text: "اسحب وأسقط ملفات PDF أو انقر على زر 'تحديد ملفات PDF' لإضافة ملفات PDF.",
        },
        {
            "@type": "HowToStep",
            name: "الخطوة 3",
            text: "انقر واستمر في الضغط على الملف، انقله إلى الموقع المطلوب، وأفلته.",
        },
        {
            "@type": "HowToStep",
            name: "الخطوة 4",
            text: "تتم دمج ملفات PDF من الأعلى إلى الأسفل.",
        },
        {
            "@type": "HowToStep",
            name: "الخطوة 5",
            text: "لإزالة ملف، انقر على أيقونة الحذف في الجزء العلوي من الملف.",
        },
        {
            "@type": "HowToStep",
            name: "الخطوة 6",
            text: "لتدوير صفحة، انقر على أيقونة الدوران في أعلى مصغرة الصفحة وحدد زاوية الدوران المطلوبة.",
        },
        {
            "@type": "HowToStep",
            name: "الخطوة 7",
            text: "بمجرد أن تكون الملفات في الترتيب والاتجاه المطلوبين، انقر على زر 'دمج' لدمجها في ملف PDF واحد.",
        },
    ],
};