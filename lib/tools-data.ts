import { resolveSiteUrl } from "@/lib/site-url"
import {
  Braces,
  FileCode2,
  Clock,
  Fingerprint,
  FileSearch,
  KeyRound,
  Link2,
  Lock,
  QrCode,
  type LucideIcon,
} from "lucide-react"

export type ToolCategory =
  | "json"
  | "encoding"
  | "dev"
  | "api"

export interface ToolDefinition {
  slug: string
  name: string
  description: string
  shortDescription: string
  icon: LucideIcon
  category: ToolCategory
  keywords: string[]
  /** 为 true 时不在导航/列表中展示，直接访问 URL 亦 404 */
  hidden?: boolean
}

export const categoryLabels: Record<ToolCategory, string> = {
  json: "JSON 工具",
  encoding: "编码工具",
  dev: "开发实用",
  api: "API 工具",
}

export const tools: ToolDefinition[] = [
  {
    slug: "json-formatter",
    name: "JSON 格式化",
    description: "在线格式化、压缩、验证 JSON 数据，支持语法高亮与错误提示",
    shortDescription: "格式化、验证和美化 JSON",
    icon: Braces,
    category: "json",
    keywords: ["json", "格式化", "format", "validate", "压缩", "minify"],
  },
  {
    slug: "base64",
    name: "Base64 编解码",
    description: "Base64 编解码、文件转换、Hex/Data URI 互转、图片预览与校验，四模块开发者工具",
    shortDescription: "Base64 全功能开发者工具",
    icon: FileCode2,
    category: "encoding",
    keywords: ["base64", "编码", "解码", "encode", "decode", "file", "hex", "data uri"],
  },
  {
    slug: "url-encoder",
    name: "URL 编解码",
    description: "URL / URI 编码解码，支持 encodeURIComponent、Query 字符串解析与构建",
    shortDescription: "URL 编码、解码与 Query 解析",
    icon: Link2,
    category: "encoding",
    keywords: ["url", "encode", "decode", "uri", "query", "percent", "编码", "解码", "query string", "percent encoding"],
  },
  {
    slug: "timestamp",
    name: "时间戳转换",
    description: "Unix 时间戳与可读日期互转，支持秒/毫秒/微秒/纳秒、UTC/本地时区、年月起止与秒数拆解",
    shortDescription: "Unix 时间戳全功能转换",
    icon: Clock,
    category: "dev",
    keywords: ["timestamp", "时间戳", "时间", "unix", "日期", "date", "epoch", "iso8601", "convert", "转换"],
  },
  {
    slug: "uuid-generator",
    name: "UUID 生成器",
    description: "批量生成 UUID v4，支持大写、无连字符、花括号格式，复制与下载",
    shortDescription: "UUID v4 生成与批量导出",
    icon: Fingerprint,
    category: "dev",
    keywords: ["uuid", "guid", "唯一标识", "生成器", "v4"],
  },
  {
    slug: "qr-code-generator",
    name: "二维码生成器",
    description: "生成文本、网址、邮箱、电话、WiFi 二维码，实时预览，下载 PNG",
    shortDescription: "多类型二维码生成与下载",
    icon: QrCode,
    category: "dev",
    keywords: ["qr", "qrcode", "二维码", "barcode", "wifi", "url", "generator"],
  },
  {
    slug: "password-generator",
    name: "密码生成器",
    description: "生成安全随机密码，可调长度、字符集与排除字符，实时强度检测，一键复制",
    shortDescription: "安全随机密码生成",
    icon: Lock,
    category: "dev",
    keywords: ["password", "generator", "random", "secure", "密码", "生成器", "强密码"],
  },
  {
    slug: "regex-tester",
    name: "正则表达式测试",
    description: "实时测试正则表达式，高亮匹配结果，支持常用 flags",
    shortDescription: "测试与调试正则表达式",
    icon: FileSearch,
    category: "dev",
    keywords: ["regex", "regexp", "regular expression", "正则", "pattern", "match", "test"],
  },
  {
    slug: "jwt-decoder",
    name: "JWT 解码器",
    description: "解析 JWT Header 与 Payload，显示 exp/iat 过期状态，浏览器内解码",
    shortDescription: "解析 JSON Web Token",
    icon: KeyRound,
    category: "api",
    keywords: ["jwt", "token", "json web token", "web token", "解码", "decode", "bearer", "oauth"],
  },
]

export function getVisibleTools(): ToolDefinition[] {
  return tools.filter((t) => !t.hidden)
}

/** 站点 SEO 关键词，从当前可见工具动态生成 */
export function getSiteKeywords(): string[] {
  return [
    ...new Set([
      "developer tools",
      "online tools",
      ...getVisibleTools().flatMap((t) => [t.name, ...t.keywords]),
    ]),
  ]
}

export function getToolBySlug(slug: string): ToolDefinition | undefined {
  return tools.find((t) => t.slug === slug)
}

export function getToolsByCategory(category: ToolCategory): ToolDefinition[] {
  return getVisibleTools().filter((t) => t.category === category)
}

export const siteConfig = {
  name: "WaiHub",
  title: "WaiHub - Developer Tools Online",
  description:
    "Free JSON formatter, Base64, URL encoder, JWT decoder, UUID generator, and timestamp converter. Runs in your browser — no signup required.",
  url: resolveSiteUrl(),
  contactEmail: "w8732787@gmail.com",
  /** 文章、隐私政策、服务条款等内容的统一更新日期（ISO） */
  contentUpdatedAt: "2026-04-20",
  contentUpdatedLabel: "2026 年 4 月 20 日",
}
