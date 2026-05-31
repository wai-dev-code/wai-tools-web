import type { Messages } from "@/lib/i18n/messages/types"
import { jsonToolZh } from "@/lib/i18n/messages/json-tool-messages"
import { base64ToolZh } from "@/lib/i18n/messages/base64-tool-messages"
import { staticZh } from "@/lib/i18n/messages/static-pages"
import { legalZh } from "@/lib/i18n/messages/legal-pages"
import { seoZh } from "@/lib/i18n/messages/seo-pages"

const zh: Messages = {
  locale: "zh",
  common: {
    home: "首页",
    tools: "工具",
    blog: "博客",
    about: "关于",
    openTools: "打开工具",
    footerTagline: "WaiHub — 面向开发者的免费在线工具中心，浏览器内运行，数据不上传。",
    footerTools: "工具",
    footerResources: "资源",
    footerLegal: "法律",
    allTools: "全部工具",
    jsonFormatter: "JSON 格式化",
    base64: "Base64 编解码",
    privacy: "隐私政策",
    terms: "服务条款",
    contact: "联系我们",
    localRun: "浏览器内运行",
    free: "免费",
    instructions: "使用说明",
    faq: "常见问题",
    relatedTools: "相关工具",
    copyright: "保留所有权利。",
    notFoundMessage: "页面不存在",
    notFoundHome: "返回首页",
    notFoundBrowseTools: "浏览工具",
  },
  workspace: {
    sidebarExpand: "展开侧边栏",
    sidebarCollapse: "收起侧边栏",
    scaleCompact: "紧凑",
    scaleComfortable: "舒适",
    scaleLarge: "大号",
    focusMode: "专注模式",
    exitFocus: "退出专注",
    panelFullscreen: "全屏此面板",
    panelExitFullscreen: "退出全屏",
    reset: "重置布局",
    zoomIn: "放大工作区",
    zoomOut: "缩小工作区",
    workspaceSize: "工作区大小",
    workspaceHint: "调整当前工具的编辑区高度",
  },
  home: {
    metaTitle: "WaiHub - 开发者在线工具",
    metaDescription:
      "WaiHub 提供 JSON 格式化、Base64 编解码等免费开发者工具，浏览器内运行，无需注册。",
    title: "开发者工具，即开即用",
    subtitle: "JSON、Base64 — 浏览器内运行，数据不上传",
    searchPlaceholder: "搜索工具，如 JSON、Base64...",
    categoryAll: "全部",
    useNow: "立即使用 →",
    noResults: "未找到匹配的工具，试试其他关键词",
    toolsCount: "共 {n} 个工具",
    viewAll: "查看完整列表",
    faqTitle: "常见问题",
    faqs: [
      { q: "WaiHub 的工具是否免费？", a: "是的，所有工具完全免费，无需注册，无隐藏费用。" },
      { q: "我的数据是否安全？", a: "绝对安全。工具在浏览器内运行，您输入的数据不会上传到服务器。" },
      { q: "支持哪些浏览器？", a: "支持 Chrome、Firefox、Safari、Edge 等现代浏览器的最新版本。" },
      { q: "如何反馈问题或建议新工具？", a: "请通过联系我们页面或发送邮件，我们会尽快回复。" },
    ],
  },
  toolsPage: {
    metaTitle: "全部工具",
    metaDescription: "浏览 WaiHub 提供的免费开发者在线工具。",
    title: "全部工具",
    subtitle: "{n} 个免费开发者工具，浏览器内运行",
    searchPlaceholder: "搜索工具...",
    noResults: "未找到匹配的工具",
  },
  categories: {
    json: "JSON 工具",
    encoding: "编码工具",
  },
  tools: {
    jsonFormatter: {
      name: "JSON 格式化",
      short: "格式化、验证和美化 JSON",
      desc: "在线格式化、压缩、验证 JSON 数据，支持语法高亮与错误提示",
    },
    base64: {
      name: "Base64 编解码",
      short: "Base64 全功能开发者工具",
      desc: "Base64 编解码、文件转换、Hex/Data URI 互转、图片预览与校验，四模块开发者工具",
    },
  },
  jsonFormatterPage: {
    metaTitle: "JSON 格式化 - 免费在线工具",
    metaDescription: "在线格式化、压缩、验证 JSON 数据，支持语法高亮、树形视图与错误定位。",
    instructions: [
      "采用双栏布局：左侧保留原数据，右侧显示格式化/压缩/转换结果，方便对比与多次操作。",
      "支持 key 排序、树形折叠、JSONPath 查询、YAML 互转、复制与保存。",
    ],
    faq: [
      { q: "格式化后中文会乱码吗？", a: "不会。本工具使用 UTF-8 编码，正确处理中文及 Unicode 字符。" },
      { q: "JSON 和 XML 如何互转？", a: "粘贴 JSON 后点「转 XML」；粘贴 XML 后点「转 JSON」即可。" },
      { q: "树形折叠怎么用？", a: "点击「树形」进入折叠视图，可点击节点箭头或使用折叠/展开按钮。" },
    ],
  },
  base64Page: {
    metaTitle: "Base64 编解码 - 免费在线工具",
    metaDescription: "Base64 编解码、文件转换、Hex/Data URI 互转、图片预览，浏览器内运行。",
    instructions: [
      "四模块架构：编解码、文件工具、格式转换、实用工具。左侧为源数据，右侧为只读结果。",
      "支持智能识别、URL 安全 Base64、文件上传与图片预览。",
    ],
    faq: [
      { q: "Base64 是加密吗？", a: "不是。Base64 只是编码，任何人都可以解码，不能用于保护敏感信息。" },
      { q: "URL 安全 Base64 是什么？", a: "将 + 和 / 替换为 - 和 _，适合放在 URL 参数中使用。" },
      { q: "如何预览 Base64 图片？", a: "在「文件」模块上传图片或粘贴图片 Base64，工具会自动识别并显示预览。" },
    ],
  },
  seo: seoZh,
  jsonTool: jsonToolZh,
  base64Tool: base64ToolZh,
  aboutPage: staticZh.about,
  contactPage: staticZh.contact,
  blogPage: staticZh.blog,
  theme: staticZh.theme,
  errors: staticZh.errors,
  legal: legalZh,
}

export default zh