import type { edit_page as _edit_page, tool as _tool, tools as _tools, downloadFile as _downloadFile, errors as _ } from "../content";
import type { adBlockerContentType } from "./content";

export const tool: _tool = {
    Lock_PDF: {
        title: "锁定PDF",
        seoTitle: "密码保护PDF - 在线保护您的PDF文件",
        description: "使用密码保护您的PDF文件，以防止未经授权的访问。",
        keywords: "密码保护PDF, 保护PDF文件, 在线锁定PDF, 加密PDF, 保护PDF文档, PDF安全工具",
        color: "#2980b9",
        type: ".pdf",
        to: "/lock-pdf",
        features: [
            {
                title: "易于使用",
                description: "使用简单界面快速锁定您的PDF文件。"
            },
            {
                title: "强大的加密",
                description: "应用强大的密码加密来保护您的文件。"
            },
            {
                title: "隐私保障",
                description: "您的文件在处理后将被加密并从我们的服务器中删除。"
            }
        ]
    },
    Unlock_PDF: {
        title: "解锁PDF",
        seoTitle: "移除PDF密码 - 在线解锁您的PDF文件",
        description: "使用我们用户友好的工具轻松移除PDF文件的密码保护。",
        keywords: "移除PDF密码,在线解锁PDF,解密PDF,访问受保护的PDF,PDF密码移除工具,解锁PDF文档",
        color: "#3498db",
        type: ".pdf",
        to: "/unlock-pdf",
        features: [
            {
                title: "用户友好",
                description: "通过简单的过程轻松解锁PDF文件。"
            },
            {
                title: "快速解密",
                description: "快速有效地移除PDF密码。"
            },
            {
                title: "安全处理",
                description: "您的文件将被安全处理，并在解锁后从我们的服务器中删除。"
            }
        ]
    }
};

export const edit_page: _edit_page = {
    edit_page_titles: {
        lock_pdf: "锁定 PDF 和保护 PDF",
        unlock_pdf: "解锁 PDF"
    },
    loader_text: "请稍候...",
    add_more_button: "添加更多文件",
    action_buttons: {
        lock_pdf: "锁定 PDF",
        unlock_pdf: "解锁 PDF"
    },
    lock_button_title: "请输入两次密码以确认。",
    unlock_button_title: "为每个受保护文件输入密码",
    pages: "页",
    page: "页",
    lock_pdf: {
        title: "设置密码以锁定您的 PDF 文件",
        password: "密码",
        repeatPassword: "重复密码",
        no_match: "密码不匹配。"
    },
    unlock_pdf: {
        title: "输入需要密码的文件的密码",
        password_for: "密码"
    },
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
    languageSelectContent: {
        placeholder: "选择语言（最多 3 种）",
        warning: "此文档为扫描件。请选其语言以确保结果准确。",
        ocr_warning: "检测到扫描文档。为获得最佳效果，请使用我们的 OCR PDF 工具，具有高级语言检测和更高精度。您也可以在此处设置语言进行基本处理。",
    },
};

export const downloadFile: _downloadFile = {
    titles: {
        "lock-pdf": [
            "PDF 文件已被锁定！",
            "PDF 文件已被锁定！"
        ],
        "unlock-pdf": [
            "PDF文件已解锁！",
            "PDF文件已解锁！"
        ]
    },
    btnText: {
        "lock-pdf": [
            "下载已锁定的 PDF 文件",
            "下载已锁定的 PDF 文件"
        ],
        "unlock-pdf": [
            "下载解锁的 PDF 文件",
            "下载解锁的 PDF 文件"
        ]
    },
    backto: {
        "lock-pdf": "返回锁定 PDF",
        "unlock-pdf": "返回解锁 PDF"
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