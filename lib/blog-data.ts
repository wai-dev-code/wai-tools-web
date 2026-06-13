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
  /** 第二批内容建设 */
  whatIsJson: "2026-05-15",
  jsonVsXml: "2026-05-16",
  howJwtWorks: "2026-05-17",
  uuidV4: "2026-05-18",
  urlEncoding: "2026-05-19",
  unixTimestamps: "2026-05-20",
  md5VsSha256: "2026-05-21",
  commonRegex: "2026-05-23",
  howQrCodes: "2026-05-24",
  apiDebugging: "2026-05-25",
  jsonBestPractices: "2026-05-26",
  securePassword: "2026-05-28",
  hashComparison: "2026-05-29",
  regexEmail: "2026-05-30",
  regexUrl: "2026-06-01",
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
  {
    slug: "what-is-json",
    title: "什么是 JSON？初学者指南",
    description: "了解 JSON 是什么、如何工作，以及为何成为 Web API 和配置文件的标准格式。",
    date: BLOG_POST_DATES.whatIsJson,
    category: "技术",
    content: [],
  },
  {
    slug: "json-vs-xml",
    title: "JSON vs XML：该如何选择？",
    description: "对比 JSON 与 XML 在 API、配置和数据交换中的优劣与适用场景。",
    date: BLOG_POST_DATES.jsonVsXml,
    category: "技术",
    content: [],
  },
  {
    slug: "how-jwt-authentication-works",
    title: "JWT 认证是如何工作的",
    description: "理解 JWT 结构、签名与验证——现代 API 和 OAuth 认证的基础。",
    date: BLOG_POST_DATES.howJwtWorks,
    category: "安全",
    content: [],
  },
  {
    slug: "uuid-v4-explained",
    title: "UUID v4 详解",
    description: "什么是 UUID v4、随机 UUID 如何工作，以及在数据库和分布式系统中的使用场景。",
    date: BLOG_POST_DATES.uuidV4,
    category: "技术",
    content: [],
  },
  {
    slug: "url-encoding-explained",
    title: "URL 编码详解",
    description: "百分号编码、encodeURIComponent 与 encodeURI 的区别，以及 URL 特殊字符处理。",
    date: BLOG_POST_DATES.urlEncoding,
    category: "技术",
    content: [],
  },
  {
    slug: "understanding-unix-timestamps",
    title: "理解 Unix 时间戳",
    description: "Unix 纪元时间是什么、秒与毫秒的区别，以及日志和 API 中的时间戳转换。",
    date: BLOG_POST_DATES.unixTimestamps,
    category: "技术",
    content: [],
  },
  {
    slug: "md5-vs-sha256",
    title: "MD5 vs SHA-256：哈希算法对比",
    description: "对比 MD5 与 SHA-256 在校验和、完整性验证中的适用场景。",
    date: BLOG_POST_DATES.md5VsSha256,
    category: "安全",
    content: [],
  },
  {
    slug: "common-regex-examples",
    title: "开发者常用正则表达式示例",
    description: "邮箱、URL、手机号、日期等实用正则模式与验证技巧。",
    date: BLOG_POST_DATES.commonRegex,
    category: "教程",
    content: [],
  },
  {
    slug: "how-qr-codes-work",
    title: "二维码是如何工作的",
    description: "二维码技术原理、编码容量、纠错机制与实际应用场景。",
    date: BLOG_POST_DATES.howQrCodes,
    category: "技术",
    content: [],
  },
  {
    slug: "api-debugging-tips",
    title: "API 调试实用技巧",
    description: "REST API 调试方法——JSON 检查、JWT 分析与常见错误模式。",
    date: BLOG_POST_DATES.apiDebugging,
    category: "教程",
    content: [],
  },
  {
    slug: "json-best-practices",
    title: "JSON API 最佳实践",
    description: "JSON API 设计规范——命名、嵌套、null 处理与错误响应格式。",
    date: BLOG_POST_DATES.jsonBestPractices,
    category: "教程",
    content: [],
  },
  {
    slug: "secure-password-generation",
    title: "安全密码生成指南",
    description: "如何生成强密码、长度建议，以及密码学随机为何优于易记密码。",
    date: BLOG_POST_DATES.securePassword,
    category: "安全",
    content: [],
  },
  {
    slug: "hash-algorithms-comparison",
    title: "哈希算法对比指南",
    description: "MD5、SHA-1、SHA-256、SHA-512 概览——速度、安全性与适用场景。",
    date: BLOG_POST_DATES.hashComparison,
    category: "技术",
    content: [],
  },
  {
    slug: "regex-for-email-validation",
    title: "邮箱验证正则表达式",
    description: "用正则验证邮箱地址——常见模式、局限性与最佳实践。",
    date: BLOG_POST_DATES.regexEmail,
    category: "教程",
    content: [],
  },
  {
    slug: "regex-for-url-validation",
    title: "URL 验证正则表达式",
    description: "用正则验证 URL——HTTP/HTTPS 模式、查询字符串与 URL 解析器的选择。",
    date: BLOG_POST_DATES.regexUrl,
    category: "教程",
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
