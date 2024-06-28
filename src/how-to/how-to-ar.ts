import { _howToSchema } from "./how-to";

export const howToSchema: _howToSchema = {
    "@context": "http://schema.org",
    "@type": "HowTo",
    name: "كيفية إزالة الصفحات من ملف PDF؟",
    description: "خطوات لحذف الصفحات غير المرغوب فيها من مستند PDF.",
    step: [
        {
            "@type": "HowToStep",
            name: "الخطوة 1",
            text: "افتح أداة إزالة الصفحات على PDFEquips."
        },
        {
            "@type": "HowToStep",
            name: "الخطوة 2",
            text: "اسحب وأفلت ملف PDF أو انقر فوق زر 'اختيار ملف PDF' لتحميل ملف PDF الخاص بك."
        },
        {
            "@type": "HowToStep",
            name: "الخطوة 3",
            text: "حدد الصفحات التي تريد إزالتها. يمكنك أيضًا تحديد نمط مثل '2، 8-32' لاختيار الصفحة 2 والصفحات من 8 إلى 32."
        },
        {
            "@type": "HowToStep",
            name: "الخطوة 4",
            text: "انقر فوق زر 'إزالة الصفحات' لحذف الصفحات المحددة."
        },
        {
            "@type": "HowToStep",
            name: "الخطوة 5",
            text: "انقر فوق زر 'تحميل الملف المعدل' لحفظ ملف PDF الجديد على جهازك."
        }
    ]
};
