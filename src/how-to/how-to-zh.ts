import { _howToSchema } from "./how-to";


export const howToSchema: _howToSchema = {
    "@context": "http://schema.org",
    "@type": "HowTo",
    name: "如何从PDF中删除页面？",
    description: "从PDF文档中删除不需要的页面的步骤。",
    step: [
        {
            "@type": "HowToStep",
            name: "步骤 1",
            text: "打开PDFEquips上的删除页面工具。"
        },
        {
            "@type": "HowToStep",
            name: "步骤 2",
            text: "拖放PDF文件或点击“选择PDF文件”按钮上传你的PDF。"
        },
        {
            "@type": "HowToStep",
            name: "步骤 3",
            text: "选择你想删除的页面。你还可以指定一个模式，如'2, 8-32'，选择第2页和第8至32页。"
        },
        {
            "@type": "HowToStep",
            name: "步骤 4",
            text: "点击“删除页面”按钮删除选定的页面。"
        },
        {
            "@type": "HowToStep",
            name: "步骤 5",
            text: "点击“下载修改后的文件”按钮，将新的PDF保存到你的设备。"
        }
    ]
};
