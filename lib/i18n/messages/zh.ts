import type { Messages } from "@/lib/i18n/messages/types"
import { jsonToolZh } from "@/lib/i18n/messages/json-tool-messages"
import { base64ToolZh } from "@/lib/i18n/messages/base64-tool-messages"
import { urlToolZh, urlEncoderPageZh } from "@/lib/i18n/messages/url-tool-messages"
import { jwtToolZh, jwtDecoderPageZh } from "@/lib/i18n/messages/jwt-tool-messages"
import { timestampToolZh, timestampPageZh } from "@/lib/i18n/messages/timestamp-tool-messages"
import { uuidToolZh, uuidGeneratorPageZh } from "@/lib/i18n/messages/uuid-tool-messages"
import { regexToolZh, regexTesterPageZh } from "@/lib/i18n/messages/regex-tool-messages"
import {
  passwordToolZh,
  passwordGeneratorPageZh,
} from "@/lib/i18n/messages/password-tool-messages"
import { qrToolZh, qrCodeGeneratorPageZh } from "@/lib/i18n/messages/qr-tool-messages"
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
    footerTagline: "WaiHub — 面向开发者的免费在线工具中心，浏览器内运行，数据处理在本地完成。",
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
    adLabel: "广告",
    adDisclaimer: "广告由第三方提供。您输入的数据不会发送给广告主。",
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
    metaTitle: "WaiHub - 开发者工具 Hub",
    metaDescription:
      "免费开发者工具 Hub：JSON 格式化、Base64、URL 编解码、JWT 解码、UUID 生成、时间戳转换、正则测试等。浏览器内处理，支持中文、English、日本語，无需注册。",
    title: "开发者工具 Hub",
    subtitle:
      "共 {n} 款工具一站可用 — JSON、编码、JWT、正则等。数据在浏览器内处理，不上传服务器。中文 · English · 日本語",
    blogSectionTitle: "教程与技巧",
    blogViewAll: "查看全部文章",
    searchPlaceholder: "搜索工具，如 JSON、JWT、UUID...",
    categoryAll: "全部",
    useNow: "立即使用 →",
    noResults: "未找到匹配的工具，试试其他关键词",
    toolsCount: "共 {n} 个工具",
    viewAll: "查看完整列表",
    faqTitle: "常见问题",
    faqs: [
      { q: "WaiHub 的工具是否免费？", a: "是的，所有工具完全免费，无需注册，无隐藏费用。" },
      { q: "我的数据是否安全？", a: "工具在您的浏览器内运行，输入内容通常不会上传至我们的服务器。请勿在不可信网站粘贴生产环境的密钥或 Token。" },
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
    dev: "开发实用",
    api: "API 工具",
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
    urlEncoder: {
      name: "URL 编解码",
      short: "URL 编码、解码与 Query 解析",
      desc: "URL / URI 编码解码，支持 encodeURIComponent、Query 字符串解析与构建",
    },
    jwtDecoder: {
      name: "JWT 解码器",
      short: "解析 JSON Web Token",
      desc: "解析 JWT Header 与 Payload，显示 exp/iat 过期状态，浏览器内解码",
    },
    timestamp: {
      name: "时间戳转换",
      short: "Unix 时间戳全功能转换",
      desc: "Unix 时间戳与可读日期互转，支持秒/毫秒/微秒/纳秒、UTC/本地时区",
    },
    uuidGenerator: {
      name: "UUID 生成器",
      short: "UUID v4 生成与批量导出",
      desc: "批量生成 UUID v4，支持大写、无连字符、花括号格式，复制与下载",
    },
    passwordGenerator: {
      name: "密码生成器",
      short: "安全随机密码生成",
      desc: "可调长度、字符集与排除字符，实时强度检测，一键复制",
    },
    qrCodeGenerator: {
      name: "二维码生成器",
      short: "文本、网址、邮箱、电话、WiFi",
      desc: "生成多类型二维码，实时预览，下载 PNG",
    },
    regexTester: {
      name: "正则表达式测试",
      short: "测试与调试正则表达式",
      desc: "实时测试正则，高亮匹配，查看捕获组，浏览器内运行",
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
  urlEncoderPage: urlEncoderPageZh,
  jwtDecoderPage: jwtDecoderPageZh,
  timestampPage: timestampPageZh,
  uuidGeneratorPage: uuidGeneratorPageZh,
  passwordGeneratorPage: passwordGeneratorPageZh,
  qrCodeGeneratorPage: qrCodeGeneratorPageZh,
  regexTesterPage: regexTesterPageZh,
  seo: seoZh,
  jsonTool: jsonToolZh,
  base64Tool: base64ToolZh,
  urlTool: urlToolZh,
  jwtTool: jwtToolZh,
  timestampTool: timestampToolZh,
  uuidTool: uuidToolZh,
  passwordTool: passwordToolZh,
  qrTool: qrToolZh,
  regexTool: regexToolZh,
  aboutPage: staticZh.about,
  contactPage: staticZh.contact,
  blogPage: staticZh.blog,
  theme: staticZh.theme,
  errors: staticZh.errors,
  legal: legalZh,
}

export default zh