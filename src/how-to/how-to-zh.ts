import { type _howToSchema } from "./how-to";

export const howToSchema: _howToSchema = {
    "@context": "http://schema.org",
    "@type": "HowTo",
    name: "如何合并 PDF 页面？",
    description: "将多个 PDF 页面合并为一个页面的步骤。",
    step: [
        {
            "@type": "HowToStep",
            name: "步骤 1",
            text: "在 PDFEquips 上打开页面合并工具。"
        },
        {
            "@type": "HowToStep",
            name: "步骤 2",
            text: "上传你想要合并的 PDF 文件。"
        },
        {
            "@type": "HowToStep",
            name: "步骤 3",
            text: "从下拉菜单中选择页面排列方式。这将决定在合并的 PDF 文件中页面的排列方式。"
        },
        {
            "@type": "HowToStep",
            name: "步骤 4",
            text: "点击 '合并页面' 按钮，以选定的排列方式合并页面。"
        },
        {
            "@type": "HowToStep",
            name: "步骤 5",
            text: "点击 '下载合并的 PDF 文件' 按钮，将合并后的 PDF 文件保存到你的设备。"
        }
    ]
};
