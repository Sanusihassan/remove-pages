import { type _howToSchema } from "./how-to";

export const howToSchema: _howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "如何合并PDF文件",
    description: "逐步指南，将多个PDF文件合并为一个文件。",
    step: [
        {
            "@type": "HowToStep",
            name: "步骤 1",
            text: "在PDFEquips上打开PDF合并工具。",
        },
        {
            "@type": "HowToStep",
            name: "步骤 2",
            text: "拖放PDF文件或点击 '选择PDF文件' 按钮以添加PDF文件。",
        },
        {
            "@type": "HowToStep",
            name: "步骤 3",
            text: "点击并按住文件，将其移动到所需位置，然后释放。",
        },
        {
            "@type": "HowToStep",
            name: "步骤 4",
            text: "PDF文件从上到下合并。",
        },
        {
            "@type": "HowToStep",
            name: "步骤 5",
            text: "要删除文件，请单击文件顶部的删除图标。",
        },
        {
            "@type": "HowToStep",
            name: "步骤 6",
            text: "要旋转页面，请单击页面缩略图顶部的旋转图标，然后选择所需的旋转角度。",
        },
        {
            "@type": "HowToStep",
            name: "步骤 7",
            text: "一旦文件按照所需顺序和方向排列好，点击 '合并' 按钮将它们合并成一个单一的PDF文件。",
        },
    ],
}
