import type { edit_page as _edit_page, tool as _tool, tools as _tools, downloadFile as _downloadFile, errors as _ } from "../content";
import type { adBlockerContentType } from "./content";

export const tool: _tool = {
    Remove_Page: {
        title: "删除页面",
        seoTitle: "在线删除PDF页面 - 页面移除工具",
        keywords: "删除PDF页面, 从PDF中删除页面, PDF页面移除工具, 在线PDF页面移除, PDF编辑器, PDF修改, 安全的PDF工具, 易于使用的PDF工具",
        description: "从你的PDF文档中删除不需要的页面，并将修改后的文件保存为新的PDF。",
        color: "#d63031",
        type: ".pdf",
        to: "/remove-pages",
        features: [
            {
                title: "快速高效",
                description: "快速删除PDF文档中不需要的页面而不影响质量。"
            },
            {
                title: "安全和私密",
                description: "您的文件通过SSL加密保护，并在处理后立即从我们的服务器中删除。"
            },
            {
                title: "易于使用",
                description: "用户友好的界面，允许您只需几次点击即可删除PDF中的页面。"
            }
        ]
    }
};

export const edit_page: _edit_page = {
    edit_page_titles: {
        remove_pages: "删除页面选项"
    },
    loader_text: "请稍候...",
    add_more_button: "添加更多文件",
    action_buttons: {
        remove_pages: "删除页面"
    },
    pages: "页",
    page: "页",
    filenameOptions: {
        label: "输出文件名（可选）",
        placeholder: "输入文件名",
        helperText: "这将是下载时压缩 PDF 的名称。",
        cta: "查看方案",
        upgradeNotice: {
            msg: "2.0 到 10.0 的级别可在高级版中使用。",
            cta: "立即升级",
        },
    },
    fileCard: {
        page: "页",
        pages: "页",
        remove_file: "删除文件",
        loading: "加载中...",
        pages_to_remove: "要删除的页面：",
        remaining: "剩余：",
        warning_cannot_remove_all: "⚠️ 您不能删除文档中的所有页面。",
    },
    options: {
        info: '要从文档中删除页面，请点击它们。您也可以使用"shift"键一次选择多个页面。',
        total_pages: "总页数",
        pages_to_remove: "要删除的页面：",
        placeholder: "例如：2,8-32",
        helper_text: "点击上面的页面或在此处输入页码（例如：2,5,8-12）",
        summary_pages_to_remove: "要删除的页面：",
        summary_remaining_pages: "剩余页面：",
        warning_cannot_remove_all: "⚠️ 您不能删除文档中的所有页面。",
    },
};

export const downloadFile: _downloadFile = {
    titles: {
        "remove-pages": [
            "您的页面已成功删除！"
        ]
    },
    btnText: {
        "remove-pages": [
            "下载修改后的PDF",
            "下载修改后的文件"
        ]
    },
    backto: {
        "remove-pages": "返回到删除页面"
    }
};



export const tools: _tools = {
    select: "选择",
    or_drop: "或将文件拖放到此处",
    files: "文件",
    drop_files: "将文件拖到这里",
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
    MAX_PAGES_EXCEEDED: {
        message: "PDF 超过最大页数限制 50 页。",
        code: "ERR_MAX_PAGES_EXCEEDED",
    },
    alerts: {
        // Frontend validation
        maxFiles: "最多 15 个文件。订阅以获取更多！",
        singleFileSize: "文件大小必须小于 100 MB。升级以上传更大的文件！",
        perFilePages: "每个文件 500 页。现在解锁更多！",
        fileSize: "每个文件 50MB。升级以获取更多！",
        serverError: "服务器错误。请稍后重试。",
        tooManyFiles: "上传的文件太多",
        // Backend file validation
        fileNotUploaded: "未上传文件。请选择一个文件。",
        fileEmpty: "上传的文件为空。请选择一个有效文件。",
        fileTooLarge: "文件超过 200MB 限制。升级以处理更大的文件！",
        invalidFileType: "无效的文件类型。请上传支持的格式。",
        fileCorrupt: "文件似乎已损坏。请尝试另一个文件。",
        insufficientUnits: "转换单位不足。升级或充值！",
        // Auth errors
        authRequired: "请登录以使用高级功能。",
        sessionExpired: "您的会话已过期。请重新登录。",
        invalidToken: "认证失败。请重新登录。",
        userNotFound: "未找到账户。请重新登录。",
        authError: "认证错误。请重试。",
        notPasswordProtected: "一个或多个文件未受密码保护",

        // PDF-specific errors
        invalidPdf: "无效或损坏的 PDF 文件。",
        pdfNotEncrypted: "此 PDF 未受密码保护，不需要解锁。",

        // Lock-PDF errors
        noLockPassword: "请提供密码以锁定 PDF。",
        lockingFailed: "锁定 PDF 失败。请重试。",

        // Unlock-PDF errors
        noPasswordsProvided: "请为锁定的 PDF 提供密码。",
        unlockingFailed: "解锁 PDF 失败。请检查您的密码并重试。",
        incorrectPassword: "密码不正确。请重试。",
        passwordRequired: "此 PDF 受密码保护。请输入密码。",

        // Settings errors
        invalidSettings: "提供的设置无效。请刷新并重试。",
        conversionFailed: "转换失败。请重试。",
    },
};

export const adBlockerContent: adBlockerContentType = {
    title: "检测到广告拦截器",
    description: "我们注意到您正在使用广告拦截器。请考虑关闭它，或升级到高级版享受无广告体验！",
    reloadPage: "重新加载页面",
    upgradeToPremium: "升级到高级版"
};