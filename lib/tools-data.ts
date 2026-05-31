import {
  Braces,
  FileCode2,
  Clock,
  Fingerprint,
  FileSearch,
  KeyRound,
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
    slug: "timestamp",
    name: "时间戳转换",
    description: "Unix 时间戳与可读日期时间格式互相转换，支持秒与毫秒",
    shortDescription: "Unix 时间戳与日期互转",
    icon: Clock,
    category: "dev",
    keywords: ["timestamp", "时间戳", "unix", "日期", "epoch"],
    hidden: true,
  },
  {
    slug: "uuid-generator",
    name: "UUID 生成器",
    description: "批量生成 UUID v4 唯一标识符，一键复制",
    shortDescription: "生成 UUID v4 标识符",
    icon: Fingerprint,
    category: "dev",
    keywords: ["uuid", "guid", "唯一标识", "生成器"],
    hidden: true,
  },
  {
    slug: "regex-tester",
    name: "正则表达式测试",
    description: "实时测试正则表达式，高亮匹配结果，支持常用 flags",
    shortDescription: "测试与调试正则表达式",
    icon: FileSearch,
    category: "dev",
    keywords: ["regex", "正则", "regexp", "匹配", "pattern"],
    hidden: true,
  },
  {
    slug: "jwt-decoder",
    name: "JWT 解码器",
    description: "解析 JWT Header 与 Payload，浏览器内解码不发送网络请求",
    shortDescription: "解析 JSON Web Token",
    icon: KeyRound,
    category: "api",
    keywords: ["jwt", "token", "解码", "decode", "bearer"],
    hidden: true,
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

export function searchTools(query: string): ToolDefinition[] {
  const visible = getVisibleTools()
  const q = query.trim().toLowerCase()
  if (!q) return visible
  return visible.filter(
    (t) =>
      t.name.toLowerCase().includes(q) ||
      t.description.toLowerCase().includes(q) ||
      t.keywords.some((k) => k.toLowerCase().includes(q)) ||
      categoryLabels[t.category].toLowerCase().includes(q)
  )
}

export function getToolsByCategory(category: ToolCategory): ToolDefinition[] {
  return getVisibleTools().filter((t) => t.category === category)
}

export const siteConfig = {
  name: "WaiHub",
  title: "WaiHub - Developer Tools Online",
  description:
    "Free JSON formatter and Base64 encoder/decoder. Runs in your browser — no signup required.",
  url: (() => {
    const configured = process.env.NEXT_PUBLIC_SITE_URL ?? "https://waihub.dev"
    if (process.env.NODE_ENV === "production" && /localhost|127\.0\.0\.1/i.test(configured)) {
      return "https://waihub.dev"
    }
    return configured
  })(),
  contactEmail: "w8732787@gmail.com",
  /** 文章、隐私政策、服务条款等内容的统一更新日期（ISO） */
  contentUpdatedAt: "2026-04-20",
  contentUpdatedLabel: "2026 年 4 月 20 日",
}
