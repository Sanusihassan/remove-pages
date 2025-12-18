import type { edit_page as _edit_page, tools as _tools, downloadFile as _downloadFile, errors as _ } from "../content";
import type { adBlockerContentType, Tool } from "./content";

export const tool: Tool = {
    PDF_to_Powerpoint: {
        title: "PDF 转 PowerPoint",
        seoTitle: "PDF 转 PowerPoint - 免费在线转换器",
        description: "将 PDF 文件转换为可编辑的 PowerPoint 演示文稿",
        color: "#C13B1B",
        type: ".pdf",
        to: "/pdf-to-powerpoint",
        features: [
            {
                title: "一键将 PDF 转换为 PowerPoint",
                description: "使用我们的在线转换器快速将 PDF 文档转换为 PowerPoint 演示文稿，确保易于分享和存储。保持所有幻灯片的原始格式和布局。"
            },
            {
                title: "快速免费转换 PDF 到 PowerPoint",
                description: "PDFEquips 在几秒钟内将 PDF 文件转换为 PowerPoint PPT（ppt 或 pptx）格式。而且，这是一个完全免费的在线工具，无需安装或登录，也没有水印。"
            },
            {
                title: "从 PDF 到 PowerPoint 的简单转换",
                description: "使用我们的 PDF 转 PowerPoint 转换器，您无需浏览设置和选项。只需上传文件，坐下来放松，享受过程！"
            }
        ],
        keywords: "PDF 转 PowerPoint, PDF 到 PPT, PDF 转 PPT 转换器, 免费 PDF 转 PowerPoint, 在线 PDF 转 PowerPoint, PDF 到 PPTX, 在线转换 PDF 到 PowerPoint, 免费 PDF 到 PPT, PDF 转 PPTX 转换器, PDF 转 PPT 工具, 在线 PDF 转 PPT 转换器, 免费 PDF 转 PowerPoint, 免费转换 PDF 到 PPT, 在线 PDF 到 PPT, 免费 PDF 到 PPTX, 即时转换 PDF 到 PPT, 免费 PDF 转 PowerPoint 工具"
    },
    WORD_to_PDF: {
        title: "WORD 转 PDF",
        seoTitle: "Word 转 PDF - 免费在线转换器",
        description: "将 Microsoft Word 文件转换为 PDF 文档",
        color: "#1B5EBE",
        type: ".docx",
        to: "/word-to-pdf",
        features: [
            {
                title: "易于使用",
                description: "无论您的角色是员工、学生还是教师，我们的 PDF 工具都易于使用。将 WORD 文件转换为 PDF 文档简单，只需几次点击"
            },
            {
                title: "简单快速的转换",
                description: "凭借先进的原始布局和样式保留方法，PDFEquips 确保 WORD 到 PDF 的转换顺畅。在不损害文档完整性的情况下享受快速操作。"
            },
            {
                title: "转换单个或多个 WORD 文件",
                description: "使用 PDFEquips，您可以轻松转换一个或多个 WORD 文件。我们的直接工具确保快速准确的转换，节省您的时间和精力"
            }
        ],
        keywords: "Word 转 PDF, Word 到 PDF, 免费 Word 转 PDF, Word 转 PDF 转换器, 在线 Word 转 PDF, 免费 Word 到 PDF, DOCX 转 PDF, 在线 Word 转 PDF 转换器, Word 转 PDF 工具, DOCX 到 PDF, 免费 DOCX 转 PDF 转换器, Word 文档转 PDF, Word 文件转 PDF, Word 转 PDF 无需注册, 免费 Word 转 PDF 工具, 在线免费 Word 转 PDF, 快速 Word 转 PDF 转换, Microsoft Word 转 PDF"
    },
    POWERPOINT_to_PDF: {
        title: "POWERPOINT 转 PDF",
        seoTitle: "PowerPoint 转 PDF - 免费在线转换器",
        description: "将 Microsoft PowerPoint 文件转换为 PDF 文档",
        color: "#C13B1B",
        type: ".pptx",
        to: "/powerpoint-to-pdf",
        features: [
            {
                title: "一键将 PowerPoint 转换为 PDF",
                description: "使用我们的在线转换器快速将 PowerPoint 演示文稿转换为 PDF 文档，确保易于分享和存储。保持所有幻灯片的原始格式和布局"
            },
            {
                title: "快速免费转换 PowerPoint 到 PDF",
                description: "PDFEquips 在几秒钟内将 PowerPoint PPT（ppt 或 pptx）文件转换为 PDF。而且，这是一个完全免费的在线工具，无需安装或登录，也没有水印"
            },
            {
                title: "从 PowerPoint 到 PDF 的简单转换",
                description: "使用我们的 PPT 转 PDF 转换器，您无需浏览设置和选项。只需上传文件，坐下来放松，享受过程！"
            }
        ],
        keywords: "PowerPoint 转 PDF, PowerPoint 到 PDF, 免费 PowerPoint 转 PDF, PPT 转 PDF 转换器, 在线 PowerPoint 转 PDF, 免费 PPT 转 PDF, 在线 PowerPoint 转 PDF 转换器, PPT 转 PDF 工具, PPTX 转 PDF, 免费 PPT 转 PDF 转换器, PowerPoint 演示文稿转 PDF, PPT 文件转 PDF, PPT 转 PDF 无需注册, 免费 PPTX 转 PDF 工具, 在线免费 PowerPoint 转 PDF, 快速 PowerPoint 转 PDF 转换, Microsoft PowerPoint 转 PDF"
    },
    EXCEL_to_PDF: {
        title: "EXCEL 转 PDF",
        seoTitle: "Excel 转 PDF - 免费在线转换器",
        description: "将 Microsoft Excel 文件转换为 PDF 文档",
        color: "#10793F",
        type: ".xlsx",
        to: "/excel-to-pdf",
        features: [
            {
                title: "易用的 Excel 转 PDF 转换器",
                description: "合适的转换器可以将 XLS、XLSX 文件转换为 PDF 格式，便于分享和安全存储。保护您的数据免受更改，并在任何设备上访问 Excel 文件，无论是否有 Microsoft Office"
            },
            {
                title: "快速免费的在线转换工具",
                description: "PDFEquips 是完全免费的在线工具，用于将 Excel（xls 或 xlsx）文件转换为 PDF。无需安装或注册，也没有水印。此外，它可以在几秒钟内转换大型 Excel 文件"
            },
            {
                title: "从 XLS 到 PDF 的安全转换",
                description: "您的文件受强大的 TLS 加密（传输层安全）保护，所有 Excel 和 PDF 文件在一小时后自动从我们的服务器删除。有关更多信息，请参阅我们的隐私政策"
            }
        ],
        keywords: "Excel 转 PDF, Excel 到 PDF, 免费 Excel 转 PDF, XLS 转 PDF 转换器, 在线 Excel 转 PDF, 免费 XLSX 转 PDF, 在线 Excel 转 PDF 转换器, Excel 转 PDF 工具, XLSX 转 PDF, 免费 XLS 转 PDF 转换器, Excel 电子表格转 PDF, Excel 文件转 PDF, Excel 转 PDF 无需注册, 免费 Excel 转 PDF 工具, 在线免费 Excel 转 PDF, 快速 Excel 转 PDF 转换, Microsoft Excel 转 PDF"
    },
    HTML_to_PDF: {
        title: "HTML 转 PDF",
        seoTitle: "HTML 转 PDF - 免费在线转换器",
        description: "将 HTML 网页转换为 PDF 文档",
        color: "rgb(228, 77, 38)",
        type: ".html",
        to: "/html-to-pdf",
        features: [
            {
                title: "即时转换，无需注册。",
                description: "无需注册或提供任何信息即可将 HTML 转换为 PDF。我们的转换器对所有人免费，并提供快速结果。"
            },
            {
                title: "安全的文档管理。",
                description: "您的下载和生成的 PDF 文件使用 TLS 加密处理，以增加安全性。请放心，您的隐私数据受到保护。有关更多信息，请查看我们的隐私政策。"
            },
            {
                title: "基于云的处理。",
                description: "享受基于云的处理带来的便利，用于 HTML 转 PDF 转换。我们的在线服务确保快速高效的转换，而不会减慢您的计算机速度。随时随地访问我们的服务。"
            }
        ],
        keywords: "HTML 转 PDF, HTML 到 PDF, 免费 HTML 转 PDF, HTML 转 PDF 转换器, 在线 HTML 转 PDF, 免费 HTML 到 PDF, 网页转 PDF, 网页到 PDF, HTML 转 PDF 工具, 在线 HTML 转 PDF 转换器, 免费 HTML 转 PDF 转换器, 网页转 PDF 转换器, HTML 文件转 PDF, HTML 转 PDF 无需注册, 免费 HTML 转 PDF 工具, 在线免费 HTML 转 PDF, 快速 HTML 转 PDF 转换, 网页转 PDF"
    },
    PDF_to_WORD: {
        title: "PDF 转 WORD",
        seoTitle: "PDF 转 Word - 免费在线转换器",
        description: "将 PDF 文件转换为 Microsoft Word 文档",
        color: "#1B5EBE",
        type: ".pdf",
        to: "/pdf-to-word",
        features: [
            {
                title: "简单快速的转换",
                description: "凭借先进的原始布局和样式保留方法，PDFEquips 确保 PDF 到 Word 的转换顺畅。在不损害文档完整性的情况下享受快速操作。"
            },
            {
                title: "易于使用",
                description: "无论您的角色是员工、学生还是教师，我们的 PDF 工具都易于使用。将 PDF 文件转换为 Word 文档简单，只需几次点击"
            },
            {
                title: "转换单个或多个 PDF 文件",
                description: "使用 PDFEquips，您可以轻松转换一个或多个 PDF 文件。我们的直接工具确保快速准确的转换，节省您的时间和精力"
            }
        ],
        keywords: "PDF 转 Word, PDF 到 Word, 免费 PDF 转 DOCX, PDF 转 Word 转换器, 在线 PDF 转 Word, 免费 PDF 转 DOCX, 在线 PDF 转 DOCX 转换器, PDF 转 Word 工具, PDF 转 DOC, 免费 PDF 转 DOC 转换器, PDF 文档转 Word, PDF 文件转 Word, PDF 转 DOCX 无需注册, 免费 PDF 转 Word 工具, 在线免费 PDF 转 Word, 快速 PDF 转 Word 转换, PDF 转 Microsoft Word"
    },
    PDF_to_EXCEL: {
        title: "PDF 转 EXCEL",
        seoTitle: "PDF 转 Excel - 免费在线转换器",
        description: "将 PDF 文件转换为 Microsoft Excel 文档",
        color: "#10793F",
        type: ".pdf",
        to: "/pdf-to-excel",
        features: [
            {
                title: "快速免费的在线转换工具",
                description: "PDFEquips 是完全免费的在线工具，用于将 PDF 文件转换为 Excel（XLS 或 XLSX）。无需安装或注册，也没有水印。此外，它可以在几秒钟内转换大型 PDF 文件。"
            },
            {
                title: "易用的 PDF 转 Excel 转换器",
                description: "合适的转换器可以将 PDF 文件转换为 XLS 或 XLSX 格式，便于分享和安全存储。保护您的数据免受更改，并在任何设备上访问 Excel 文件，无论是否有 Microsoft Office。"
            },
            {
                title: "从 PDF 到 XLS 的安全转换",
                description: "您的文件受强大的 TLS 加密（传输层安全）保护，所有 PDF 和 Excel 文件在一小时后自动从我们的服务器删除。有关更多信息，请参阅我们的隐私政策。"
            }
        ],
        keywords: "PDF 转 Excel, PDF 到 Excel, 免费 PDF 转 XLSX, PDF 转 Excel 转换器, 在线 PDF 转 Excel, 免费 PDF 转 XLS, 在线 PDF 转 XLSX 转换器, PDF 转 Excel 工具, PDF 转 XLS, 免费 PDF 转 Excel 转换器, PDF 文档转 Excel, PDF 文件转 Excel, PDF 转 XLSX 无需注册, 免费 PDF 转 Excel 工具, 在线免费 PDF 转 Excel, 快速 PDF 转 Excel 转换, PDF 转 Microsoft Excel"
    },
    PDF_to_PDF_A: {
        title: "PDF 转 PDF/A",
        seoTitle: "PDF 转 PDF/A - 免费归档转换器",
        description: "将 PDF 文件转换为 PDF/A 格式，用于长期归档",
        color: "#000000",
        type: ".pdf",
        to: "/pdf-to-pdf-a",
        features: [
            {
                title: "保持文档完整性",
                description: "将您的 PDF 文件转换为 PDF/A 格式，确保文档的完整性，包括内容、结构和外观得以保留"
            },
            {
                title: "符合归档标准",
                description: "通过将 PDF 文档转换为 PDF/A 格式，确保符合归档标准，该格式适用于长期存储和法律要求"
            },
            {
                title: "长期可访问性和兼容性",
                description: "通过将 PDF 文件转换为 PDF/A 格式，确保与未来软件和系统的长期可访问性和兼容性，同时最大限度地降低格式过时的风险"
            }
        ],
        keywords: "PDF 转 PDF/A, PDF 到 PDF/A, 免费 PDF 转 PDF/A, PDF 转 PDF/A 转换器, 在线 PDF 转 PDF/A, PDF 转归档 PDF, PDF/A 转换, PDF 转归档格式, 免费 PDF 转 PDF/A 转换器, PDF 转 PDF/A 工具, 在线转换 PDF 到 PDF/A, PDF 转归档文档, 免费 PDF 转 PDF/A, 在线 PDF 转 PDF/A 转换器, PDF 转 PDF/A 合规, 长期 PDF 存储, PDF 转 PDF/A 用于归档, 在线免费 PDF 转 PDF/A"
    },
    PDF_to_Text: {
        title: "PDF 转文本",
        seoTitle: "PDF 转文本 - 免费纯文本转换器",
        description: "将 PDF 文件转换为纯文本文档",
        color: "#4493e1",
        type: ".pdf",
        to: "/pdf-to-text",
        features: [
            {
                title: "强大且准确的转换",
                description: "受益于强大且准确的转换能力，确保从 PDF 文档中高质量提取文本内容，包括支持多种语言，如阿拉伯语。"
            },
            {
                title: "快速处理",
                description: "使用我们的 PDF 转文本转换器体验快速处理速度，实现 PDF 文件到纯文本格式的快速转换，而不影响准确性。"
            },
            {
                title: "保留文档结构",
                description: "在将 PDF 文件转换为纯文本的同时保留文档结构和格式，确保提取的文本内容的可读性和可用性。"
            }
        ],
        keywords: "PDF 转文本, PDF 到文本, 免费 PDF 转文本, PDF 转文本转换器, 在线 PDF 转文本, PDF 转纯文本, 从 PDF 提取文本, 免费 PDF 转文本, 在线 PDF 转文本转换器, PDF 转文本工具, PDF 转 TXT, 免费 PDF 转文本转换器, PDF 文档转文本, PDF 文件转文本, PDF 转 TXT 无需注册, 免费 PDF 转文本工具, 在线免费 PDF 转文本, 快速 PDF 转文本转换, PDF 转纯文本转换器"
    }
}

// Chinese (zh) - Simplified
export const edit_page: _edit_page = {
    edit_page_titles: {
        pdf_to_powerpoint: "PDF 转 PowerPoint 选项",
        word_to_pdf: "WORD 转 PDF 选项",
        powerpoint_to_pdf: "POWERPOINT 转 PDF 选项",
        excel_to_pdf: "EXCEL 转 PDF 选项",
        html_to_pdf: "HTML 转 PDF 选项",
        pdf_to_word: "PDF 转 WORD 选项",
        pdf_to_excel: "PDF 转 EXCEL 选项",
        pdf_to_pdf_a: "PDF 转 PDF/A 选项",
        pdf_to_text: "PDF 转 文本 选项",
    },
    loader_text: "请稍等...",
    add_more_button: "添加更多文件",
    action_buttons: {
        pdf_to_powerpoint: "转换为 PowerPoint",
        word_to_pdf: "转换为 PDF",
        powerpoint_to_pdf: "转换为 PDF",
        excel_to_pdf: "转换为 PDF",
        html_to_pdf: "转换为 PDF",
        pdf_to_word: "转换为 Word",
        pdf_to_excel: "转换为 Excel",
        pdf_to_pdf_a: "转换为 PDF/A",
        pdf_to_text: "转换为 文本",
    },
    pages: "页",
    page: "页",
    cta: "查看套餐",
    pdf_a_options: {
        info: "从下方下拉菜单中选择所需的 PDF/A 格式来转换您的 PDF。这将确保文档符合所选的归档标准。",
        placeholder: "选择 PDF/A 格式"
    },
    languageSelectContent: {
        placeholder: "选择语言（最多 3 种）",
        warning: "此文档为扫描件。请选其语言以确保结果准确。"
    },
    converter: {
        free: "免费",
        premium: "高级",
        freeToolTip: "基础转换 - 格式有限",
        premiumToolTip: "高精度转换，完全保留样式"
    },
    fileNameInput: {
        label: "输出文件名（可选）",
        placeholder: "输入文件名",
        helperText: "这将是下载的文档名称。",
    }
};

export const tools: _tools = {
    select: "选择",
    or_drop: "或将文件拖放到此处",
    files: "文件",
    drop_files: "将文件拖到这里",
};

// Chinese (zh) - Simplified - downloadFile
export const downloadFile: _downloadFile = {
    titles: {
        "pdf-to-powerpoint": [
            "PDF 文件已转换为 PowerPoint！",
            "PDF 文件已转换为 PowerPoint！",
        ],
        "word-to-pdf": [
            "Word 文件已转换为 PDF！",
            "Word 文件已转换为 PDF！",
        ],
        "powerpoint-to-pdf": [
            "PowerPoint 文件已转换为 PDF！",
            "PowerPoint 文件已转换为 PDF！",
        ],
        "excel-to-pdf": [
            "Excel 文件已转换为 PDF！",
            "Excel 文件已转换为 PDF！",
        ],
        "html-to-pdf": [
            "HTML 文件已转换为 PDF！",
            "HTML 文件已转换为 PDF！",
        ],
        "pdf-to-word": [
            "PDF 文件已转换为 Word！",
            "PDF 文件已转换为 Word！",
        ],
        "pdf-to-excel": [
            "PDF 文件已转换为 Excel！",
            "PDF 文件已转换为 Excel！",
        ],
        "pdf-to-pdf-a": [
            "PDF 文件已转换为 PDF/A！",
            "PDF 文件已转换为 PDF/A！",
        ],
        "pdf-to-text": [
            "PDF 文件已转换为文本！",
            "PDF 文件已转换为文本！",
        ],
    },

    btnText: {
        "pdf-to-powerpoint": [
            "下载转换后的 PowerPoint 文件",
            "下载转换后的 PowerPoint 文件",
        ],
        "word-to-pdf": [
            "下载转换后的 PDF 文件",
            "下载转换后的 PDF 文件",
        ],
        "powerpoint-to-pdf": [
            "下载转换后的 PDF 文件",
            "下载转换后的 PDF 文件",
        ],
        "excel-to-pdf": [
            "下载转换后的 PDF 文件",
            "下载转换后的 PDF 文件",
        ],
        "html-to-pdf": [
            "下载转换后的 PDF 文件",
            "下载转换后的 PDF 文件",
        ],
        "pdf-to-word": [
            "下载转换后的 Word 文件",
            "下载转换后的 Word 文件",
        ],
        "pdf-to-excel": [
            "下载转换后的 Excel 文件",
            "下载转换后的 Excel 文件",
        ],
        "pdf-to-pdf-a": [
            "下载转换后的 PDF/A 文件",
            "下载转换后的 PDF/A 文件",
        ],
        "pdf-to-text": [
            "下载转换后的文本文件",
            "下载转换后的文本文件",
        ],
    },

    backto: {
        "pdf-to-powerpoint": "返回 PDF 转 PowerPoint",
        "word-to-pdf": "返回 Word 转 PDF",
        "powerpoint-to-pdf": "返回 PowerPoint 转 PDF",
        "excel-to-pdf": "返回 Excel 转 PDF",
        "html-to-pdf": "返回 HTML 转 PDF",
        "pdf-to-word": "返回 PDF 转 Word",
        "pdf-to-excel": "返回 PDF 转 Excel",
        "pdf-to-pdf-a": "返回 PDF 转 PDF/A",
        "pdf-to-text": "返回 PDF 转 文本",
    },
};

export const errors: _ = {
    EMPTY_FILE: {
        message: "文件为空。请选择有效文件。",
        code: "ERR_EMPTY_FILE",
    },
    FILE_TOO_LARGE: {
        message:
            "文件太大。请选更小的文件，或使用我们的 compress-pdf 工具减小文件大小。",
        code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
    },
    NOT_SUPPORTED_TYPE: {
        message: "不支持的文件类型。",
        types: {
            PDF: "请选择有效的 PDF 文件。",
            DOC: "请选择有效的 Word 文档。",
            DOCX: "请选择有效的 Word 文档。",
            XLS: "请选择有效的 Excel 表格。",
            XLSX: "请选择有效的 Excel 表格。",
            PPT: "请选择有效的 PowerPoint 演示文稿。",
            PPTX: "请选择有效的 PowerPoint 演示文稿。",
        },
        code: "ERR_INVALID_FILE_TYPE",
    },
    FILE_CORRUPT: {
        message:
            "文件已损坏，无法处理。请选有效文件。",
        code: "ERR_FILE_CORRUPT",
    },
    MAX_FILES_EXCEEDED: {
        message:
            "已超过允许的最大文件数量。请删除部分文件后再试。",
        code: "ERR_MAX_FILES_EXCEEDED",
    },
    NO_FILES_SELECTED: {
        message: "未选择任何文件。请至少选择一个文件。",
        code: "ERR_NO_FILES_SELECTED",
    },
    UNKNOWN_ERROR: {
        message:
            "发生未知错误。请稍后再试或联系客服。",
        code: "ERR_UNKNOWN",
    },
    ERR_NETWORK: {
        message:
            "发生网络错误。请检查网络连接后再试。",
        code: "ERR_NETWORK",
    },
    ERR_UPLOAD_COUNT: {
        message: "请至少上传两个文件进行合并。",
        code: "ERR_UPLOAD_COUNT",
    },
    PASSWORD_REQUIRED: {
        message: "PDF 需要密码。",
        code: "PASSWORD_REQUIRED",
    },
    INCORRECT_PASSWORD: {
        message: "您输入的密码不正确。",
        code: "INCORRECT_PASSWORD",
    },
    MAX_DAILY_USAGE: {
        message:
            "您已达到每日使用上限。请升级套餐，继续无中断使用此功能。",
        code: "MAX_DAILY_USAGE",
    },
    alerts: {
        // Frontend validation
        maxFiles: "最多15个文件。订阅获取更多！",
        singleFileSize: "文件大小必须小于100 MB。升级以上传更大的文件！",
        perFilePages: "每个文件500页。立即解锁更多！",
        fileSize: "每个文件50 MB。升级获取更多！",
        // Backend file validation
        fileNotUploaded: "未上传文件。请选择一个文件。",
        fileEmpty: "上传的文件为空。请选择一个有效的文件。",
        fileTooLarge: "文件超过200 MB限制。升级以获取更大文件！",
        invalidFileType: "文件类型无效。请上传支持的格式。",
        fileCorrupt: "文件似乎已损坏。请尝试其他文件。",
        insufficientUnits: "转换单位不足。升级您的计划！",
        // Auth errors
        authRequired: "请登录以使用高级功能。",
        sessionExpired: "您的会话已过期。请重新登录。",
        invalidToken: "身份验证失败。请重新登录。",
        userNotFound: "未找到账户。请重新登录。",
        authError: "身份验证错误。请重试。",
        serverError: "服务器错误。请稍后重试。",
    },
};

export const adBlockerContent: adBlockerContentType = {
    title: "检测到广告拦截器",
    description: "我们注意到您正在使用广告拦截器。请考虑关闭它，或升级到高级版享受无广告体验！",
    reloadPage: "重新加载页面",
    upgradeToPremium: "升级到高级版"
};