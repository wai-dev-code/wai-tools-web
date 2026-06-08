export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  category: string
  content: { heading?: string; paragraphs: string[] }[]
  hidden?: boolean
}

/** 博客文章日期（按篇维护，反映实际发布/修订时间） */
export const BLOG_POST_DATES = {
  /** 密码 / 二维码 / 哈希三工具上线 */
  securityUtilityTools: "2026-06-08",
  /** 全新文章 */
  developerToolkit: "2026-05-31",
  /** 上线 JWT 工具时发布 */
  jwtSecurity: "2026-05-27",
  /** 小幅补充工具联用说明 */
  jsonFormatterGuide: "2026-05-22",
  /** 初稿日期，仅补充一句 URL 联用提示 */
  base64Encoding: "2026-04-20",
} as const

export const blogPosts: BlogPost[] = [
  {
    slug: "security-utility-tools-guide",
    title: "密码、二维码与哈希：三款实用工具使用指南",
    description:
      "介绍 WaiHub 密码生成器、二维码生成器与哈希生成器的用法、场景与 SEO 关键词，提升日常开发与安全调试效率。",
    date: BLOG_POST_DATES.securityUtilityTools,
    category: "教程",
    content: [],
  },
  {
    slug: "developer-toolkit-guide",
    title: "开发者必备：URL、时间戳、UUID 与 JWT 工具指南",
    description: "介绍 WaiHub 新增的 URL 编解码、Unix 时间戳转换、UUID 生成与 JWT 解码工具及典型用法。",
    date: BLOG_POST_DATES.developerToolkit,
    category: "教程",
    content: [],
  },
  {
    slug: "json-formatter-guide",
    title: "如何高效使用 JSON 格式化工具",
    description: "学习 JSON 格式化的最佳实践，提升 API 调试与配置文件管理效率。",
    date: BLOG_POST_DATES.jsonFormatterGuide,
    category: "教程",
    content: [],
  },
  {
    slug: "base64-encoding-explained",
    title: "Base64 编码原理与应用场景",
    description: "深入了解 Base64 编码的工作原理、适用场景及常见误区。",
    date: BLOG_POST_DATES.base64Encoding,
    category: "技术",
    content: [],
  },
  {
    slug: "jwt-security-best-practices",
    title: "JWT 安全最佳实践",
    description: "确保 JWT 实现安全可靠的关键技巧与常见陷阱。",
    date: BLOG_POST_DATES.jwtSecurity,
    category: "安全",
    content: [],
  },
]

export function formatBlogDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number)
  if (!y || !m || !d) return iso
  return `${y} 年 ${m} 月 ${d} 日`
}

export function getVisibleBlogPosts(): BlogPost[] {
  return blogPosts
    .filter((p) => !p.hidden)
    .sort((a, b) => b.date.localeCompare(a.date))
}

export function getBlogPost(slug: string) {
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post || post.hidden) return undefined
  return post
}
