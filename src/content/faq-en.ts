import type { FaqContent } from "./faq";

export const faq: FaqContent = {
  title: "Frequently Asked Questions",
  items: {
    "/remove-pages": [
      {
        question: "How do I delete pages from a PDF?",
        answer: "Drag your PDF into the area above and click the pages you want to remove, or type their numbers, for example 2,5,8-12. Then click «Remove Pages» and download the new PDF.",
      },
      {
        question: "Can I remove several pages at once?",
        answer: "Yes. Hold «Shift» to select several pages, or type a range such as 8-12. You'll see how many pages will remain before you save.",
      },
      {
        question: "Is it free to remove pages from a PDF?",
        answer: "Yes. It's free, needs no sign-up and works in any browser.",
      },
      {
        question: "Are my files safe?",
        answer: "Yes. Your files are transferred over an encrypted (TLS) connection and automatically deleted from our servers after processing.",
      },
    ],
  },
};
