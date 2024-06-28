import type {
  tool as _tool,
  web2pdftool as _web2pdftool,
  tools as _tools,
  edit_page as _edit_page,
  footer as _footer,
  errors as _errors,
  downloadFile as _downloadFile,
  landing_page as _landing_page,
} from "../../content";

export const tool = {
  Remove_Page: {
    title: "删除页面",
    seoTitle: "在线删除PDF页面 - 页面移除工具",
    keywords: "删除PDF页面, 从PDF中删除页面, PDF页面移除工具, 在线PDF页面移除, PDF编辑器, PDF修改, 安全的PDF工具, 易于使用的PDF工具",
    description:
      "从你的PDF文档中删除不需要的页面，并将修改后的文件保存为新的PDF。",
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
  },
};

export const downloadFile: _downloadFile = {
  titles: {
    "remove-pages": ["您的页面已成功删除！"],
  },

  btnText: {
    "remove-pages": ["下载修改后的PDF", "下载修改后的文件"],
  },

  backto: {
    "remove-pages": "返回到删除页面",
  },
};

export const edit_page: _edit_page = {
  edit_page_titles: {
    remove_pages: "删除页面选项",
  },
  loader_text: "请稍候...",
  add_more_button: "添加更多文件",
  action_buttons: {
    remove_pages: "删除页面",
  },
  remove_pages_options: {
    info: "要从文档中删除页面，请单击相应页面。您也可以使用“shift”键一次选择多个页面。",
    total_pages: "总页面数",
    pages_to_remove: "要删除的页面：",
    placeholder: "示例：2，8-32",
  },
  pages: "页",
  page: "页",
};

export const tools: _tools = {
  select: "选择",
  or_drop: "或将文件拖放到此处",
  files: "文件",
  drop_files: "在此处拖放文件",
};

export const footer: _footer = {
  brand: "PDFEquips",
  terms: "条款",
  conditions: "条件",
  privacy_policy: "隐私政策",
};

export const errors: _errors = {
  EMPTY_FILE: {
    message: "文件为空，请选择一个有效的文件。",
    code: "ERR_EMPTY_FILE",
  },
  FILE_TOO_LARGE: {
    message:
      "文件太大。请选择一个更小的文件，或使用我们的压缩PDF工具来减小文件大小。",
    code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
  },
  NOT_SUPPORTED_TYPE: {
    message: "文件不是受支持的类型。",
    types: {
      PDF: "请选择一个有效的PDF文件。",
      JPG: "请选择一个有效的JPEG图片文件。",
      DOC: "请选择一个有效的Word文档文件。",
      DOCX: "请选择一个有效的Word文档文件。",
      XLS: "请选择一个有效的Excel电子表格文件。",
      XLSX: "请选择一个有效的Excel电子表格文件。",
      PPT: "请选择一个有效的PowerPoint演示文稿文件。",
      PPTX: "请选择一个有效的PowerPoint演示文稿文件。",
    },
    code: "ERR_INVALID_FILE_TYPE",
  },
  FILE_CORRUPT: {
    message: "文件已损坏，无法处理。请选择一个有效的文件。",
    code: "ERR_FILE_CORRUPT",
  },
  MISSING_FONTS: {
    message: "文件缺少字体。请确保所有字体都嵌入在PDF文件中。",
    code: "ERR_MISSING_FONTS",
  },
  INVALID_IMAGE_DATA: {
    message: "文件包含无效的图像数据。请确保所有图像格式正确。",
    code: "ERR_INVALID_IMAGE_DATA",
  },
  SECURITY_RISK: {
    message: "文件存在安全风险，无法处理。请选择一个有效的文件。",
    code: "ERR_SECURITY_RISK",
  },
  MAX_FILES_EXCEEDED: {
    message: "您已超出允许的最大文件数。请删除一些文件并重试。",
    code: "ERR_MAX_FILES_EXCEEDED",
  },
  NO_FILES_SELECTED: {
    message: "未选择任何文件。请选择至少一个文件。",
    code: "ERR_NO_FILES_SELECTED",
  },
  UNKNOWN_ERROR: {
    message: "发生未知错误。请稍后重试或联系支持人员。",
    code: "ERR_UNKNOWN",
  },
  ERR_NETWORK: {
    message: "网络错误，请检查您的互联网连接并重试。",
    code: "ERR_NETWORK",
  },
  ERR_UPLOAD_COUNT: {
    message: "请至少上传两个文件以合并。",
    code: "ERR_UPLOAD_COUNT",
  },
};
