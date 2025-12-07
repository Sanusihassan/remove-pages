// import type {
//   tool as _tool,
//   web2pdftool as _web2pdftool,
//   tools as _tools,
//   edit_page as _edit_page,
//   footer as _footer,
//   errors as _errors,
//   downloadFile as _downloadFile,
//   landing_page as _landing_page,
// } from "../content";

// export const landing_page: _landing_page = {
//   hero: {
//     title: "利用我们全面的 PDF 解决方案提高您的工作效率",
//     description:
//       "将您的 PDF 工作流程提升到新的水平 - 使用我们的综合工具包解锁新的可能性。",
//   },
//   features: {
//     title: "PDFEquips 如何简化您的 PDF 任务",
//     description:
//       "PDFEquips 为您提供了一系列功能，让您轻松处理 PDF 文件。无论您想要合并、分割、压缩、转换、编辑或保护您的 PDF，您都可以用几下点击完成。PDFEquips 快速、可靠、安全。",
//   },
//   why_us: {
//     title: "您可以信赖的 PDF 解决方案",
//     description:
//       "PDFEquips 是您管理 PDF 的终极网络应用程序。享受所有\
//     您需要高效处理数字文档的功能\
//     同时保证您的数据安全和隐私。",
//   },
// };

// export const tool: _tool = {
//   Merge_PDF: {
//     title: "合并PDF",
//     seoTitle: "合并PDF - 将多个文件合并成一个文档",
//     description: "将多个PDF文件合并成一个文档",
//     color: "var(--red)",
//     type: ".pdf",
//     to: "/merge-pdf",
//     features: [
//       {
//         title: "完全免费，无需注册",
//         description: "PDFEquips提供免费在线PDF合并服务，无需创建帐户，我们从不要求您的电子邮件地址或信用卡信息"
//       },
//       {
//         title: "强大的PDF合并工具",
//         description: "PDFEquips轻松将两个或更多PDF文档合并为一个文件，无论是单页还是多页，大或小的PDF文件，所有格式都兼容"
//       },
//       {
//         title: "在线安全合并PDF文件",
//         description: "您在我们的服务器上上传和创建的所有文件都经过TLS加密，以确保安全性。它们将在处理后立即永久删除。有关更多信息，请参阅我们的隐私政策"
//       }
//     ],
//     keywords: "合并PDF, PDF合并工具, 合并PDF文件, 合并PDF文档, 在线合并PDF, 无需注册合并PDF, 免费合并PDF, 合并多个PDF文件, 快速合并PDF, 安全合并PDF, 轻松合并PDF文档, 免费在线合并PDF, 无需安装合并PDF, 合并加密PDF文件, 免费PDF合并工具, 无需注册在线合并PDF"
//   },
//   Compress_PDF: {
//     title: "压缩PDF",
//     seoTitle: "压缩PDF - 在保持质量的同时减小文件的大小",
//     description: "在保持质量的同时减小PDF文件的大小",
//     color: "var(--green)",
//     type: ".pdf",
//     to: "/compress-pdf",
//     features: [
//       {
//         title: "多功能PDF压缩",
//         description: "每次都可以获得快速可靠的结果，选择不同的压缩级别，调整文件大小而不影响文档质量"
//       },
//       {
//         title: "无需电子邮件注册",
//         description: "立即开始压缩您的PDF文件-无需电子邮件注册，无需信用卡详细信息，只需上传文档并根据需要进行压缩"
//       },
//       {
//         title: "始终保持质量",
//         description: "PDFEquips使用先进的技术来优化PDF中图像的大小和质量，这确保您在不影响文档保真度的情况下实现更小的文件大小"
//       }
//     ],
//     keywords: "压缩PDF, PDF压缩工具, 减小PDF大小, 压缩PDF文档, 在线压缩PDF, 无需注册压缩PDF, 免费压缩PDF, 减小PDF文件大小, 快速压缩PDF, 高质量压缩PDF, 无损压缩PDF, 在线压缩PDF文档, 无需安装压缩PDF, 免费PDF压缩工具, 无需注册在线压缩PDF"
//   },
//   PDF_to_Powerpoint: {
//     title: "PDF转Powerpoint",
//     seoTitle: "PDF转Powerpoint - 将文件转换为可编辑的Powerpoint演示文稿",
//     description: "将PDF文件转换为可编辑的Powerpoint演示文稿",
//     color: "#C13B1B",
//     type: ".pdf",
//     to: "/pdf-to-powerpoint",
//     features: [
//       {
//         title: "一键将PDF转换为PowerPoint",
//         description: "使用我们的在线转换工具快速将PDF文档转换为PowerPoint演示文稿，确保轻松共享和存储。保持所有幻灯片的原始格式和布局。"
//       },
//       {
//         title: "快速免费将PDF转换为PowerPoint",
//         description: "PDFEquips在几秒钟内将PDF文件转换为PowerPoint PPT（ppt或pptx）格式。此外，它是一个完全免费的在线工具，无需安装或登录，也不会有水印。"
//       },
//       {
//         title: "简单将PDF转换为PowerPoint",
//         description: "使用我们的PDF转PowerPoint转换器，您无需浏览设置和选项。只需上传文件，坐下来，放松，享受演出吧！"
//       }
//     ],
//     keywords: "PDF转PowerPoint, PDF转PPT, PDF转PPTX, PDF转PowerPoint工具, PDF文档转PowerPoint, PDF转演示文稿, 在线PDF转换, 免费PDF转PowerPoint, 无需注册PDF转PPT, 快速PDF转换, 无水印PDF转换, 在线PDF转PowerPoint工具"
//   },
//   WORD_to_PDF: {
//     title: "WORD转PDF",
//     seoTitle: "WORD转PDF - 将Microsoft Word转换为PDF文档",
//     description: "将Microsoft Word文件转换为PDF文档",
//     color: "#1B5EBE",
//     type: ".docx",
//     to: "/word-to-pdf",
//     features: [
//       {
//         title: "易于使用",
//         description: "无论您的角色是工人、学生还是教师，我们的PDF工具都易于使用。将WORD文件转换为PDF文档简单易行，只需几个点击即可。"
//       },
//       {
//         title: "简单快速的转换",
//         description: "由于其保留原始布局和样式的先进方法，PDFEquips确保平稳的WORD到PDF转换。享受快速操作，而不会损害文档的完整性。"
//       },
//       {
//         title: "转换一个WORD文件或多个WORD文件",
//         description: "您可以使用PDFEquips轻松地将一个或多个WORD文件转换为PDF，无需烦恼。我们的直接工具确保快速准确的转换，节省您的时间和精力。"
//       }
//     ],
//     keywords: "WORD转PDF, 将WORD转换为PDF, 将Word文档转换为PDF, 将Word文件转换为PDF, Word转PDF工具, 在线将Word转PDF, 免费将Word转PDF, 快速将Word转换, 无需注册将Word转换, 无格式丢失将Word转PDF, 轻松将Word文档转换为PDF, 无需安装将Word文件转换为PDF, 免费Word转PDF工具"
//   },
//   POWERPOINT_to_PDF: {
//     title: "POWERPOINT转PDF",
//     seoTitle: "POWERPOINT转PDF - 将Microsoft Powerpoint转换为PDF文档",
//     description: "将Microsoft Powerpoint文件转换为PDF文档",
//     color: "#C13B1B",
//     type: ".pptx",
//     to: "/powerpoint-to-pdf",
//     features: [
//       {
//         title: "一键将PowerPoint转换为PDF",
//         description: "使用我们的在线转换工具快速将PowerPoint演示文稿转换为PDF文档，确保轻松共享和存储。保持所有幻灯片的原始格式和布局。"
//       },
//       {
//         title: "快速免费将PowerPoint转换为PDF",
//         description: "PDFEquips在几秒钟内将PowerPoint PPT（ppt或pptx）文件转换为PDF。此外，它是一个完全免费的在线工具，无需安装或登录，也不会有水印。"
//       },
//       {
//         title: "简单将PowerPoint转换为PDF",
//         description: "使用我们的PPT转PDF转换器，您无需浏览设置和选项。只需上传文件，坐下来，放松，享受演出吧！"
//       }
//     ],
//     keywords: "POWERPOINT转PDF, 将PowerPoint转换为PDF, 将PowerPoint文档转换为PDF, 将PowerPoint演示文稿转换为PDF, PowerPoint转PDF工具, 在线将PowerPoint转PDF, 免费将PowerPoint转PDF, 快速将PowerPoint转换, 无需注册将PowerPoint转换, 无格式丢失将PowerPoint转PDF, 轻松将PowerPoint演示文稿转换为PDF, 无需安装将PowerPoint文件转换为PDF, 免费PowerPoint转PDF工具"
//   },
//   EXCEL_to_PDF: {
//     title: "EXCEL转PDF",
//     seoTitle: "EXCEL转PDF - 将Microsoft Excel转换为PDF文档",
//     description: "将Microsoft Excel文件转换为PDF文档",
//     color: "#10793F",
//     type: ".xlsx",
//     to: "/excel-to-pdf",
//     features: [
//       {
//         title: "从Excel到PDF的易于使用的转换器",
//         description: "一个适当的转换器可将XLS、XLSX文件转换为PDF格式，使其易于共享和安全存储。保护您的数据免受更改，并在任何设备上访问Excel文件，无论您是否拥有Microsoft Office。"
//       },
//       {
//         title: "快速免费的在线转换工具",
//         description: "PDFEquips是一个完全免费的在线工具，用于将Excel（xls或xlsx）文件转换为PDF。无需安装或注册，也不会添加水印。此外，它可以在几秒钟内转换大型Excel文件。"
//       },
//       {
//         title: "从XLS到PDF的安全转换",
//         description: "您的文件受到强大的TLS加密（传输层安全性）保护，所有Excel和PDF文件在一小时后将自动从我们的服务器上删除。有关更多信息，请参阅我们的隐私政策。"
//       }
//     ],
//     keywords: "EXCEL转PDF, 将Excel转换为PDF, 将Excel文档转换为PDF, 将Excel文件转换为PDF, Excel转PDF工具, 在线将Excel转PDF, 免费将Excel转PDF, 快速将Excel转换, 无需注册将Excel转换, 无格式丢失将Excel转PDF, 轻松将Excel表格转换为PDF, 无需安装将Excel文件转换为PDF, 免费Excel转PDF工具"
//   },
//   HTML_to_PDF: {
//     title: "HTML转PDF",
//     seoTitle: "HTML转PDF - 将网页转换为PDF文档",
//     description: "将HTML网页转换为PDF文档",
//     color: "rgb(228, 77, 38)",
//     type: ".html",
//     to: "/html-to-pdf",
//     features: [
//       {
//         title: "即时转换，无需注册。",
//         description: "无需注册或提供任何信息即可将您的HTML转换为PDF。我们的转换器对所有人免费，并提供快速的结果。"
//       },
//       {
//         title: "安全的文档管理。",
//         description: "您的下载和生成的PDF文件使用TLS加密进行处理，以提供额外的安全性。请放心，您的数据隐私得到了保护。有关更多信息，请查阅我们的隐私政策。"
//       },
//       {
//         title: "基于云的处理。",
//         description: "享受基于云的处理为HTML转PDF转换带来的便利。我们的在线服务确保快速高效的转换，而不会减慢您的计算机。随时随地访问我们的服务。"
//       }
//     ],
//     keywords: "HTML转PDF, 将HTML转换为PDF, 将网页转换为PDF, 将HTML文件转换为PDF, HTML转PDF工具, 在线将HTML转PDF, 免费将HTML转PDF, 快速将HTML转换, 无需注册将HTML转换, 无格式丢失将网页转PDF, 轻松将HTML转换为PDF文档, 无需安装将HTML文件转换为PDF, 免费HTML转PDF工具"
//   },
//   PDF_to_WORD: {
//     title: "PDF转WORD",
//     seoTitle: "PDF转WORD - 将文件转换为Microsoft Word文档",
//     description: "将PDF文件转换为Microsoft Word文档",
//     color: "#1B5EBE",
//     type: ".pdf",
//     to: "/pdf-to-word",
//     features: [
//       {
//         title: "简单快速的转换",
//         description: "由于其保留原始布局和样式的先进方法，PDFEquips确保平稳的PDF到Word转换。享受快速操作，而不会损害文档的完整性。"
//       },
//       {
//         title: "易于使用",
//         description: "无论您的角色是工人、学生还是教师，我们的PDF工具都易于使用。将PDF文件转换为Word文档简单易行，只需几个点击即可。"
//       },
//       {
//         title: "转换一个PDF文件或多个PDF文件",
//         description: "您可以使用PDFEquips轻松地将一个或多个PDF文件转换为Word，无需烦恼。我们的直接工具确保快速准确的转换，节省您的时间和精力。"
//       }
//     ],
//     keywords: "PDF转WORD, 将PDF转换为Word, 将PDF文档转换为Word, 将PDF文件转换为Word, PDF转Word工具, 在线将PDF转Word, 免费将PDF转Word, 快速将PDF转换, 无需注册将PDF转换, 无格式丢失将PDF转Word, 轻松将PDF文档转换为Word, 无需安装将PDF文件转换为Word, 免费PDF转Word工具"
//   },
//   PDF_to_EXCEL: {
//     title: "PDF转EXCEL",
//     seoTitle: "PDF转EXCEL - 将文件转换为Microsoft Excel文档",
//     description: "将PDF文件转换为Microsoft Excel文档",
//     color: "#10793F",
//     type: ".pdf",
//     to: "/pdf-to-excel",
//     features: [
//       {
//         title: "快速免费的在线转换工具",
//         description: "PDFEquips是一个完全免费的在线工具，用于将PDF文件转换为Excel（XLS或XLSX）。无需安装或注册，也不会添加水印。此外，它可以在几秒钟内转换大型PDF文件。"
//       },
//       {
//         title: "从PDF到Excel的易于使用的转换器",
//         description: "一个适当的转换器可将PDF文件转换为XLS或XLSX格式，使其易于共享和安全存储。保护您的数据免受更改，并在任何设备上访问Excel文件，无论您是否拥有Microsoft Office。"
//       },
//       {
//         title: "从PDF到XLS的安全转换",
//         description: "您的文件受到强大的TLS加密（传输层安全性）保护，所有PDF和Excel文件将在一小时后自动从我们的服务器上删除。有关更多信息，请参阅我们的隐私政策。"
//       }
//     ],
//     keywords: "PDF转EXCEL, 将PDF转换为Excel, 将PDF文档转换为Excel, 将PDF文件转换为Excel, PDF转Excel工具, 在线将PDF转Excel, 免费将PDF转Excel, 快速将PDF转换, 无需注册将PDF转换, 无格式丢失将PDF转Excel, 轻松将PDF表格转换为Excel, 无需安装将PDF文件转换为Excel, 免费PDF转Excel工具"
//   },
//   PDF_to_PDF_A: {
//     title: "PDF转PDF/A",
//     seoTitle: "PDF转PDF/A - 将文件转换为PDF/A格式以进行长期归档",
//     description: "将PDF文件转换为PDF/A格式以进行长期归档",
//     color: "#000000",
//     type: ".pdf",
//     to: "/pdf-to-pdf-a",
//     features: [
//       {
//         title: "保持文件完整性",
//         description: "将您的PDF文件转换为PDF/A格式，确保文档的完整性，包括内容、结构和外观得以保留"
//       },
//       {
//         title: "符合归档标准",
//         description: "通过将您的PDF文档转换为PDF/A格式，确保符合归档标准，这种格式适用于长期存储和法律要求"
//       },
//       {
//         title: "长期可访问性和兼容性",
//         description: "通过将您的PDF文件转换为PDF/A格式，确保长期可访问性和兼容性，以应对未来软件和系统的需求，同时最小化格式过时的风险"
//       }
//     ],
//     keywords: "PDF转PDF/A, 将PDF转换为PDF/A, 将PDF文档转换为PDF/A, 将PDF文件转换为PDF/A, PDF转PDF/A工具, 在线将PDF转PDF/A, 免费将PDF转PDF/A, 快速将PDF转换, 无需注册将PDF转换, 无格式丢失将PDF转PDF/A, 轻松将PDF文档转换为PDF/A, 无需安装将PDF文件转换为PDF/A, 免费PDF转PDF/A工具"
//   },
//   PDF_to_Text: {
//     title: "PDF转文本",
//     seoTitle: "PDF转文本 - 将文件转换为纯文本文档",
//     description: "将PDF文件转换为纯文本文档",
//     color: "#4493e1",
//     type: ".pdf",
//     to: "/pdf-to-text",
//     features: [
//       {
//         title: "稳健准确的转换",
//         description: "借助稳健准确的转换能力，从PDF文档中高质量提取文本内容，包括对阿拉伯语等各种语言的支持。"
//       },
//       {
//         title: "快速处理",
//         description: "使用我们的PDF转文本转换器，体验快速处理速度，快速将PDF文件转换为纯文本格式，而不会影响准确性。"
//       },
//       {
//         title: "保留文档结构",
//         description: "在保留文档结构和格式的同时，将PDF文件转换为纯文本，确保提取的文本内容的可读性和可用性。"
//       }
//     ],
//     keywords: "PDF转文本, 将PDF转换为文本文件, 将PDF文档转换为文本, 将PDF文件转换为文本, PDF转文本工具, 在线将PDF转文本, 免费将PDF转文本, 快速将PDF转换, 无需注册将PDF转换, 无格式丢失将PDF转文本, 轻松从PDF提取文本, 无需安装将PDF文件转换为文本, 免费PDF转文本工具"
//   }
// }

// export const downloadFile: _downloadFile = {
//   titles: {
//     "merge-pdf": ["PDF文件已合并！", "PDF文件已合并！"],
//     "split-pdf": ["PDF文件已拆分！"],
//     "compress-pdf": ["PDF文件已压缩！", "PDF文件已压缩！"],
//     "pdf-to-powerpoint": [
//       "PDF文件已转换为PowerPoint！",
//       "PDF文件已转换为PowerPoint！",
//     ],
//     "word-to-pdf": ["Word文件已转换为PDF！", "Word文件已转换为PDF！"],
//     "powerpoint-to-pdf": [
//       "PowerPoint文件已转换为PDF！",
//       "PowerPoint文件已转换为PDF！",
//     ],
//     "excel-to-pdf": ["Excel文件已转换为PDF！", "Excel文件已转换为PDF！"],
//     "html-to-pdf": ["HTML文件已转换为PDF！", "HTML文件已转换为PDF！"],
//     "pdf-to-word": ["PDF文件已转换为Word！", "PDF文件已转换为Word！"],
//     "pdf-to-excel": ["PDF文件已转换为Excel！", "PDF文件已转换为Excel！"],
//     "pdf-to-pdf-a": ["PDF文件已转换为PDF/A！", "PDF文件已转换为PDF/A！"],
//     "pdf-to-text": ["PDF文件已转换为文本！", "PDF文件已转换为文本！"],
//   },
//   btnText: {
//     "merge-pdf": ["下载合并后的PDF文件", "下载合并后的PDF文件"],
//     "split-pdf": ["下载拆分后的PDF文件", "下载拆分后的PDF文件"],
//     "compress-pdf": ["下载压缩后的PDF文件", "下载压缩后的PDF文件"],
//     "pdf-to-powerpoint": [
//       "下载转换后的PowerPoint文件",
//       "下载转换后的PowerPoint文件",
//     ],
//     "word-to-pdf": ["下载转换后的PDF文件", "下载转换后的PDF文件"],
//     "powerpoint-to-pdf": ["下载转换后的PDF文件", "下载转换后的PDF文件"],
//     "excel-to-pdf": ["下载转换后的PDF文件", "下载转换后的PDF文件"],
//     "html-to-pdf": ["下载转换后的PDF文件", "下载转换后的PDF文件"],
//     "pdf-to-word": ["下载转换后的Word文件", "下载转换后的Word文件"],
//     "pdf-to-excel": ["下载转换后的Excel文件", "下载转换后的Excel文件"],
//     "pdf-to-pdf-a": ["下载转换后的PDF/A文件", "下载转换后的PDF/A文件"],
//     "pdf-to-text": ["下载转换后的文本文件", "下载转换后的文本文件"],
//   },
//   backto: {
//     "merge-pdf": "返回合并PDF",
//     "split-pdf": "返回拆分PDF",
//     "compress-pdf": "返回压缩PDF",
//     "pdf-to-powerpoint": "返回PDF转Powerpoint",
//     "word-to-pdf": "返回Word转PDF",
//     "powerpoint-to-pdf": "返回Powerpoint转PDF",
//     "excel-to-pdf": "返回Excel转PDF",
//     "html-to-pdf": "返回HTML转PDF",
//     "pdf-to-word": "返回PDF转Word",
//     "pdf-to-excel": "返回PDF转Excel",
//     "pdf-to-pdf-a": "返回PDF转PDF-A",
//     "pdf-to-text": "返回PDF转文本",
//   },
// };

// export const edit_page: _edit_page = {
//   edit_page_titles: {
//     merge_pdf: "合并PDF选项",
//     split_pdf: "拆分PDF选项",
//     compress_pdf: "压缩PDF选项",
//     pdf_to_powerpoint: "PDF转Powerpoint选项",
//     word_to_pdf: "WORD转PDF选项",
//     powerpoint_to_pdf: "Powerpoint转PDF选项",
//     excel_to_pdf: "EXCEL转PDF选项",
//     html_to_pdf: "HTML转PDF选项",
//     pdf_to_word: "PDF转WORD选项",
//     pdf_to_excel: "PDF转EXCEL选项",
//     pdf_to_pdf_a: "PDF转PDF/A选项",
//     pdf_to_text: "PDF 转文本选项",
//   },
//   loader_text: "请稍等...",
//   add_more_button: "添加更多文件",
//   action_buttons: {
//     merge_pdf: "合并PDF",
//     split_pdf: "拆分PDF",
//     compress_pdf: "压缩PDF",
//     pdf_to_powerpoint: "转换为PowerPoint",
//     word_to_pdf: "转换为PDF",
//     powerpoint_to_pdf: "转换为PDF",
//     excel_to_pdf: "转换为PDF",
//     html_to_pdf: "转换为PDF",
//     pdf_to_word: "转换为Word",
//     pdf_to_excel: "转换为Excel",
//     pdf_to_pdf_a: "转换为PDF/A",
//     pdf_to_text: "转换为文本",
//     translate_pdf: "翻译 PDF",
//   },
//   pages: "页",
//   page: "页",
//   compress_pdf: [
//     {
//       title: "推荐压缩",
//       description: "文件大小和质量之间的最佳平衡",
//     },
//     {
//       title: "较少压缩",
//       description: "较小的文件大小但质量较低",
//     },
//     {
//       title: "极度压缩",
//       description: "文件大小显著减小但质量明显降低",
//     },
//     {
//       title: "自定义压缩",
//       description: "选择自己的压缩量",
//     },
//   ],
//   pdf_a_options: {
//     info: "从下面的下拉菜单中选择所需的PDF/A格式以转换您的PDF。这将确保文档符合所选的档案标准。",
//     placeholder: "选择PDF/A格式"
//   },
//   merge_pdf:
//     "使用拖放改变PDF文件合并的顺序。单击并   按住一个文件,将其移动到所需位置,然后释放鼠标按钮。   PDF文件从上到下合并。要删除文件,请单击文件顶部的删除   图标。要旋转页面,请单击页面缩略图顶部的旋转图标,然后选择所需的旋转角度。文件处于   所需的顺序和方向,单击“合并”按钮将它们合并为一个PDF文件。",
// };

// export const tools: _tools = {
//   select: "选择",
//   or_drop: "或将文件拖放到此处",
//   files: "文件",
//   drop_files: "在此处拖放文件",
// };

// export const footer: _footer = {
//   brand: "PDFEquips",
//   terms: "条款",
//   conditions: "条件",
//   privacy_policy: "隐私政策",
// };

// export const errors: _errors = {
//   EMPTY_FILE: {
//     message: "文件为空，请选择一个有效的文件。",
//     code: "ERR_EMPTY_FILE",
//   },
//   FILE_TOO_LARGE: {
//     message:
//       "文件太大。请选择一个更小的文件，或使用我们的压缩PDF工具来减小文件大小。",
//     code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
//   },
//   NOT_SUPPORTED_TYPE: {
//     message: "文件不是受支持的类型。",
//     types: {
//       PDF: "请选择一个有效的PDF文件。",
//       DOC: "请选择一个有效的Word文档文件。",
//       DOCX: "请选择一个有效的Word文档文件。",
//       XLS: "请选择一个有效的Excel电子表格文件。",
//       XLSX: "请选择一个有效的Excel电子表格文件。",
//       PPT: "请选择一个有效的PowerPoint演示文稿文件。",
//       PPTX: "请选择一个有效的PowerPoint演示文稿文件。",
//     },
//     code: "ERR_INVALID_FILE_TYPE",
//   },
//   FILE_CORRUPT: {
//     message: "文件已损坏，无法处理。请选择一个有效的文件。",
//     code: "ERR_FILE_CORRUPT",
//   },
//   MISSING_FONTS: {
//     message: "文件缺少字体。请确保所有字体都嵌入在PDF文件中。",
//     code: "ERR_MISSING_FONTS",
//   },
//   INVALID_IMAGE_DATA: {
//     message: "文件包含无效的图像数据。请确保所有图像格式正确。",
//     code: "ERR_INVALID_IMAGE_DATA",
//   },
//   SECURITY_RISK: {
//     message: "文件存在安全风险，无法处理。请选择一个有效的文件。",
//     code: "ERR_SECURITY_RISK",
//   },
//   MAX_FILES_EXCEEDED: {
//     message: "您已超出允许的最大文件数。请删除一些文件并重试。",
//     code: "ERR_MAX_FILES_EXCEEDED",
//   },
//   NO_FILES_SELECTED: {
//     message: "未选择任何文件。请选择至少一个文件。",
//     code: "ERR_NO_FILES_SELECTED",
//   },
//   UNKNOWN_ERROR: {
//     message: "发生未知错误。请稍后重试或联系支持人员。",
//     code: "ERR_UNKNOWN",
//   },
//   ERR_NETWORK: {
//     message: "网络错误，请检查您的互联网连接并重试。",
//     code: "ERR_NETWORK",
//   },
//   ERR_UPLOAD_COUNT: {
//     message: "请至少上传两个文件以合并。",
//     code: "ERR_UPLOAD_COUNT",
//   },
// };
