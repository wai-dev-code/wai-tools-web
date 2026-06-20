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
import { hashToolZh, hashGeneratorPageZh } from "@/lib/i18n/messages/hash-tool-messages"
import {
  htmlEncoderToolZh,
  htmlEncoderPageZh,
} from "@/lib/i18n/messages/html-encoder-tool-messages"
import { textDiffToolZh, textDiffPageZh } from "@/lib/i18n/messages/text-diff-tool-messages"
import {
  cronParserToolZh,
  cronParserPageZh,
} from "@/lib/i18n/messages/cron-parser-tool-messages"
import {
  colorConverterToolZh,
  colorConverterPageZh,
} from "@/lib/i18n/messages/color-converter-tool-messages"
import { staticZh } from "@/lib/i18n/messages/static-pages"
import { blogPostsBatch2Zh } from "@/lib/i18n/messages/blog-posts-batch2-zh"
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
    cookies: "Cookie 政策",
    changelog: "更新日志",
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
    workflowNext: "下一步",
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
      "免费开发者工具 Hub：JSON 格式化、Base64、URL 编解码、JWT 解码、UUID、正则、哈希、二维码等 10 款工具。浏览器内处理，隐私优先，无需注册。",
    title: "开发者工具 Hub",
    subtitle:
      "共 {n} 款工具一站可用 — JSON、编码、JWT、正则等。数据在浏览器内处理，不上传服务器。中文 · English · 日本語",
    blogSectionTitle: "教程与技巧",
    blogViewAll: "查看全部文章",
    blogSectionSubtitle: "各款工具的指南、教程与最佳实践。",
    heroBadge: "开发者工具 · 隐私优先",
    heroCta: "浏览全部工具",
    heroCtaSecondary: "阅读博客",
    toolsSectionTitle: "一站式开发工具",
    toolsSectionSubtitle: "搜索、筛选并打开任意工具 — 所有处理均在浏览器内完成。",
    stats: [
      { value: "14", label: "免费开发者工具" },
      { value: "3", label: "支持语言" },
      { value: "0", label: "需要注册" },
      { value: "100%", label: "浏览器内处理" },
    ],
    faqSubtitle: "关于价格、隐私与使用方式的常见问题。",
    faqTitle: "常见问题",
    searchPlaceholder: "搜索工具，如 JSON、JWT、UUID...",
    searchTypewriterPrefix: "搜索工具，如 ",
    searchTypewriterHints: ["JSON", "JWT", "UUID", "Base64", "正则", "哈希", "时间戳"],
    categoryAll: "全部",
    useNow: "立即使用 →",
    noResults: "未找到匹配的工具，试试其他关键词",
    toolsCount: "共 {n} 个工具",
    viewAll: "查看完整列表",
    faqs: [
      { q: "WaiHub 的工具是否免费？", a: "是的，所有工具完全免费，无需注册，无隐藏费用。" },
      { q: "我的数据是否安全？", a: "工具在您的浏览器内运行，输入内容通常不会上传至我们的服务器。请勿在不可信网站粘贴生产环境的密钥或 Token。" },
      { q: "支持哪些浏览器？", a: "支持 Chrome、Firefox、Safari、Edge 等现代浏览器的最新版本，包括桌面和移动端。" },
      { q: "如何反馈问题或建议新工具？", a: "请通过联系我们页面或发送邮件，我们会尽快回复。" },
      { q: "需要注册账号吗？", a: "不需要。所有工具无需注册或登录即可直接使用。" },
      { q: "可以商用吗？", a: "可以。个人和商业开发均可免费使用，无限制。" },
      { q: "支持哪些语言？", a: "网站支持 English、简体中文和 日本語 三种语言。" },
      { q: "有多少款工具？", a: "WaiHub 提供 10 款核心开发者工具，覆盖 JSON、编码、安全和 API 调试。" },
      { q: "有文件大小限制吗？", a: "大多数工具支持最大 5 MB 输入。更大文件可能暂停实时分析以保持性能。" },
      { q: "在哪里学习各工具用法？", a: "每个工具页面都包含完整指南、分步说明、示例和 FAQ。" },
    ],
    whatIsTitle: "什么是 WaiHub？",
    whatIsParagraphs: [
      "WaiHub 是一个免费的在线开发者工具平台，将常用实用工具集中在一处。从 JSON 格式化和 Base64 编码到 JWT 解码和正则测试，WaiHub 帮助开发者调试 API、处理数据、完成日常编码任务，无需安装软件或注册账号。",
      "与传统仅罗列链接的工具聚合站不同，WaiHub 每个工具页面都包含详细指南、分步说明、实际示例和 FAQ。无论学习概念还是解决生产问题，每个页面都是有价值的资源，而不只是一个功能按钮。",
      "隐私是核心原则：所有工具完全在浏览器中使用 JavaScript 运行。你的 JSON、Token、密码和文件在本地处理，不会上传到 WaiHub 服务器。配合 English、中文和日文支持，WaiHub 面向全球需要快速、安全、可靠在线工具的开发者。",
    ],
    whyChooseTitle: "为什么选择 WaiHub？",
    whyChooseItems: [
      { title: "快速", description: "输入即得结果，无需等待服务器响应，一切都在浏览器本地运行。" },
      { title: "安全", description: "浏览器内处理意味着敏感数据留在你的设备上，不上传、不存储。" },
      { title: "隐私优先", description: "我们不收集工具输入内容。JSON、JWT Token 和密码均在本地处理。" },
      { title: "免费", description: "10 款工具完全免费，无需注册，无高级版，无使用限制。" },
      { title: "浏览器运行", description: "支持桌面、平板和移动端的现代浏览器，无需安装或插件。" },
    ],
    useCasesTitle: "常见使用场景",
    useCasesItems: [
      { title: "API 开发", description: "格式化 JSON 响应、解码 JWT Token、调试 API 集成中的认证流程。" },
      { title: "前后端联调", description: "编码 URL、转换时间戳、验证数据格式，连接前后端系统。" },
      { title: "数据处理", description: "转换 Base64、解析 Query 字符串、计算哈希、JSON/YAML/XML 互转。" },
      { title: "JWT 解析", description: "解码 JWT Header 和 Payload，检查过期时间，理解 OAuth 调试中的声明。" },
      { title: "JSON 格式化", description: "美化压缩的 API 响应、校验语法、用树形视图探索嵌套结构。" },
      { title: "时间戳转换", description: "Unix 时间戳与可读日期互转，日志分析和时区调试必备。" },
      { title: "二维码生成", description: "为 URL、WiFi 凭证和联系信息创建可扫描二维码，用于活动和营销。" },
    ],
  },
  toolsPage: {
    metaTitle: "全部工具",
    metaDescription: "浏览 WaiHub 10 款免费开发者工具。JSON、Base64、JWT、正则等，浏览器内处理，隐私优先。",
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
      short: "在线强密码 / 随机密码生成",
      desc: "免费密码生成器：长度与字符集可调、排除字符、强度检测，对标 LastPass，浏览器内一键复制",
    },
    qrCodeGenerator: {
      name: "二维码生成器",
      short: "QR Code 文本/网址/WiFi",
      desc: "免费二维码在线生成：文本、URL、邮箱、电话、WiFi，预览并下载 PNG",
    },
    hashGenerator: {
      name: "哈希生成器",
      short: "MD5 / SHA256 在线计算",
      desc: "MD5 哈希生成器与 SHA-1/SHA-256/SHA-512 同时计算，十六进制结果一键复制",
    },
    regexTester: {
      name: "正则表达式测试",
      short: "测试与调试正则表达式",
      desc: "实时测试正则，高亮匹配，查看捕获组，浏览器内运行",
    },
    htmlEncoder: {
      name: "HTML 编解码",
      short: "HTML 实体编码与解码",
      desc: "HTML 实体编码与解码，支持命名实体与数字实体，可选全非 ASCII 编码",
    },
    textDiff: {
      name: "文本对比",
      short: "逐行文本 Diff 对比",
      desc: "逐行文本 diff 对比，高亮新增、删除与修改行，适用于代码与配置",
    },
    cronParser: {
      name: "Cron 解析器",
      short: "Cron 表达式解析与解读",
      desc: "解析标准 5 段 Cron 表达式，展示各字段含义与可读摘要",
    },
    colorConverter: {
      name: "颜色转换器",
      short: "HEX/RGB/HSL 颜色互转",
      desc: "HEX、RGB、HSL 颜色格式互转，实时预览色块，一键复制",
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
  hashGeneratorPage: hashGeneratorPageZh,
  regexTesterPage: regexTesterPageZh,
  htmlEncoderPage: htmlEncoderPageZh,
  textDiffPage: textDiffPageZh,
  cronParserPage: cronParserPageZh,
  colorConverterPage: colorConverterPageZh,
  seo: seoZh,
  jsonTool: jsonToolZh,
  base64Tool: base64ToolZh,
  urlTool: urlToolZh,
  jwtTool: jwtToolZh,
  timestampTool: timestampToolZh,
  uuidTool: uuidToolZh,
  passwordTool: passwordToolZh,
  qrTool: qrToolZh,
  hashTool: hashToolZh,
  regexTool: regexToolZh,
  htmlEncoderTool: htmlEncoderToolZh,
  textDiffTool: textDiffToolZh,
  cronParserTool: cronParserToolZh,
  colorConverterTool: colorConverterToolZh,
  aboutPage: staticZh.about,
  contactPage: staticZh.contact,
  blogPage: {
    ...staticZh.blog,
    posts: {
      ...staticZh.blog.posts,
      ...blogPostsBatch2Zh,
    },
  },
  theme: staticZh.theme,
  errors: staticZh.errors,
  legal: legalZh,
}

export default zh