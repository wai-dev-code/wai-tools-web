export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  category: string
  readTime: string
  content: { heading?: string; paragraphs: string[] }[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: "json-formatter-guide",
    title: "如何高效使用 JSON 格式化工具",
    description: "学习 JSON 格式化的最佳实践，提升 API 调试与配置文件管理效率。",
    date: "2024-01-15",
    category: "教程",
    readTime: "5 分钟",
    content: [
      {
        paragraphs: [
          "在前后端开发中，JSON 是最常见的数据交换格式。然而，从 API 返回的 JSON 往往是压缩成一行的，难以阅读。JSON 格式化工具可以将杂乱的 JSON 转换为带缩进的易读格式，极大提升调试效率。",
        ],
      },
      {
        heading: "何时使用格式化与压缩",
        paragraphs: [
          "格式化（Pretty Print）适合开发调试：当你需要检查 API 响应结构、定位字段错误或向同事展示数据时，2 或 4 空格缩进能让层级一目了然。",
          "压缩（Minify）适合生产环境：去除空格和换行可减小 payload 体积，常用于配置文件部署或减小网络传输大小。注意压缩后的 JSON 对人类不可读，但机器解析完全相同。",
        ],
      },
      {
        heading: "常见错误排查",
        paragraphs: [
          "JSON 解析失败通常由以下原因导致：尾部多余逗号（JSON 标准不允许）、单引号代替双引号、未转义的特殊字符、或混入了 JavaScript 注释。使用验证功能可快速定位错误行。",
          "处理大型 JSON 时，建议先在本地工具中验证，再粘贴到代码中，避免将格式错误的配置部署到生产环境。",
        ],
      },
      {
        heading: "隐私与安全建议",
        paragraphs: [
          "JSON 中可能包含用户数据、API 密钥或 Token。使用 WaiHub 等本地运行的工具，数据不会上传到服务器，适合处理敏感信息。对于生产环境的密钥，切勿在任何在线工具中粘贴。",
        ],
      },
    ],
  },
  {
    slug: "base64-encoding-explained",
    title: "Base64 编码原理与应用场景",
    description: "深入了解 Base64 编码的工作原理、适用场景及常见误区。",
    date: "2024-01-10",
    category: "技术",
    readTime: "8 分钟",
    content: [
      {
        paragraphs: [
          "Base64 是一种将二进制数据编码为 ASCII 字符串的方法。它使用 A-Z、a-z、0-9、+ 和 / 共 64 个字符，加上 = 作为填充。虽然编码后体积增大约 33%，但能在只支持文本的通道中安全传输任意数据。",
        ],
      },
      {
        heading: "常见应用场景",
        paragraphs: [
          "在 Data URL 中嵌入小图片：HTML 和 CSS 可直接引用 base64 编码的图片，减少 HTTP 请求。",
          "API 认证头：HTTP Basic Auth 将 username:password 进行 Base64 编码后放入 Authorization 头。",
          "邮件附件：MIME 协议使用 Base64 传输二进制附件。",
          "JWT 的 Header 和 Payload 部分也采用 Base64URL 编码（与标准 Base64 略有不同）。",
        ],
      },
      {
        heading: "Base64 不是加密",
        paragraphs: [
          "这是最常见的误解。Base64 是完全可逆的编码，任何人都可以解码还原原文。它不提供保密性，仅解决数据传输的兼容性问题。敏感数据必须使用真正的加密算法（如 AES）保护。",
        ],
      },
      {
        heading: "UTF-8 与中文处理",
        paragraphs: [
          "直接对包含中文的字符串进行 Base64 编码时，需要先按 UTF-8 编码为字节序列。WaiHub 的 Base64 工具已正确处理 UTF-8，可放心编码中文、emoji 等 Unicode 字符。",
        ],
      },
    ],
  },
  {
    slug: "jwt-security-best-practices",
    title: "JWT 安全最佳实践",
    description: "确保 JWT 实现安全可靠的关键技巧与常见陷阱。",
    date: "2024-01-05",
    category: "安全",
    readTime: "10 分钟",
    content: [
      {
        paragraphs: [
          "JSON Web Token (JWT) 是现代 API 鉴权的流行方案。它由 Header、Payload 和 Signature 三部分组成，用点号连接。理解 JWT 的安全模型对构建可靠系统至关重要。",
        ],
      },
      {
        heading: "永远不要信任未验证的 Payload",
        paragraphs: [
          "JWT 的 Payload 仅经过 Base64 编码，未加密。任何人都可以解码查看内容，甚至篡改 Payload 后重新编码（但无法伪造有效签名）。服务端必须验证 Signature，且使用强密钥（HS256）或公私钥（RS256）。",
          "WaiHub 的 JWT 解码器仅用于开发调试，帮助查看 Token 内容。生产环境必须在服务端完成签名验证。",
        ],
      },
      {
        heading: "设置合理的过期时间",
        paragraphs: [
          "Access Token 应设置较短过期时间（如 15 分钟至 1 小时），配合 Refresh Token 实现无感刷新。避免签发永不过期的 Token。在 Payload 中使用 exp 声明过期时间，服务端严格校验。",
        ],
      },
      {
        heading: "敏感信息勿放入 Payload",
        paragraphs: [
          "JWT Payload 可被任何人解码，切勿存放密码、信用卡号等敏感数据。仅存放用户 ID、角色等必要鉴权信息。",
        ],
      },
      {
        heading: "使用 HTTPS 传输",
        paragraphs: [
          "JWT 通常通过 Authorization: Bearer 头或 Cookie 传输。必须使用 HTTPS 防止中间人截获 Token。若存储在 Cookie 中，应设置 HttpOnly 和 Secure 标志。",
        ],
      },
    ],
  },
]

export function getBlogPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug)
}
