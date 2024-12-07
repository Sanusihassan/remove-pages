import type {
  tool as _tool,
  web2pdftool as _web2pdftool,
  tools as _tools,
  edit_page as _edit_page,
  footer as _footer,
  errors as _errors,
  downloadFile as _downloadFile,
  landing_page as _landing_page,
} from "../content";

export const tool: _tool = {
  Merge_Pages: {
    title: "合并PDF页面",
    seoTitle: "在线合并PDF页面 - 将多个页面合并为一个",
    description: "高效地将多个PDF页面合并成一个页面",
    color: "var(--blue)",
    type: ".pdf",
    to: "/merge-pages",
    features: [
      {
        title: "高效合并",
        description: "轻松将多个PDF页面合并成一个页面，简化您的文档。"
      },
      {
        title: "自定义布局",
        description: "指定每张纸上的页面数量，并按您喜欢的顺序排列它们。"
      },
      {
        title: "用户友好界面",
        description: "享受简单直观的界面，让页面合并变得轻而易举。"
      }
    ],
    keywords: "合并PDF页面，组合PDF页面，PDF页面合并器，多页合并为一个PDF，整合PDF页面，PDF页面组合器，在线合并PDF页面，免费PDF页面合并器，在线合并PDF页面，合并多个PDF页面，PDF页面整合工具，安全PDF页面合并，无需注册合并PDF页面，PDF页面布局工具，免费在线PDF页面组合器，合并PDF表格，组合PDF跨页，PDF拼版工具"
  },
};

export const edit_page: _edit_page = {
  edit_page_titles: {
    merge_pages: "合并页面选项",
  },
  loader_text: "请稍候...",
  add_more_button: "添加更多页面",
  action_buttons: {
    merge_pages: "合并页面",
  },
  pages: "页",
  page: "页",
  options: {
    info: "从下面的下拉菜单中选择页面布局。这将确定在合并的PDF文档中页面的排列方式。",
    placeholder: "选择页面布局"
  }
};

export const downloadFile: _downloadFile = {
  titles: {
    "merge-pages": ["PDF页面已合并！", "PDF页面已合并！"],
  },

  btnText: {
    "merge-pages": ["下载合并的PDF页面", "下载合并的PDF页面"],
  },

  backto: {
    "merge-pages": "返回到合并页面",
  },
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
