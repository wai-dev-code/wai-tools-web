/** 第二批博客文章 — 中文正文 */
export const blogPostsBatch2Zh: Record<
  string,
  {
    title: string
    description: string
    category: string
    content: { heading?: string; paragraphs: string[] }[]
  }
> = {
  "what-is-json": {
    title: "什么是 JSON？初学者指南",
    description: "了解 JSON 是什么、如何工作，以及为何成为 Web API 和配置文件的标准格式。",
    category: "技术",
    content: [
      {
        paragraphs: [
          "JSON（JavaScript Object Notation）是一种轻量级数据交换格式，用于存储和传输结构化数据。尽管名称包含 JavaScript，JSON 与语言无关，Python、Java、Go 等现代语言均广泛支持。",
        ],
      },
      {
        heading: "JSON 的结构",
        paragraphs: [
          "JSON 用对象（花括号内的键值对）和数组（方括号内的有序列表）表示数据。值可以是字符串、数字、布尔值、null、对象或数组，键必须是双引号字符串。",
          "示例：{\"name\": \"Alice\", \"age\": 30, \"active\": true, \"tags\": [\"dev\", \"api\"]}。",
        ],
      },
      {
        heading: "为何 JSON 主导 API",
        paragraphs: [
          "JSON 人类可读、比 XML 更紧凑，且能自然映射到大多数语言的原生数据结构。REST API 的请求和响应体几乎都使用 JSON。",
          "开发时可使用 WaiHub JSON 格式化工具校验、美化和调试 JSON 数据。",
        ],
      },
    ],
  },
  "json-vs-xml": {
    title: "JSON vs XML：该如何选择？",
    description: "对比 JSON 与 XML 在 API、配置和数据交换中的优劣与适用场景。",
    category: "技术",
    content: [
      {
        paragraphs: [
          "JSON 和 XML 都广泛用于结构化数据，但适用场景不同。了解各自的优缺点，有助于在 API、配置和系统集成中做出正确选择。",
        ],
      },
      {
        heading: "JSON 的优势",
        paragraphs: [
          "JSON 更轻量、解析更快、开发者更易读，能直接映射到 JavaScript 对象、Python 字典等结构。绝大多数现代 REST API 默认使用 JSON。",
        ],
      },
      {
        heading: "XML 仍适用的场景",
        paragraphs: [
          "XML 支持属性、命名空间和混合内容，适合文档型数据、SOAP 服务和传统企业系统。RSS 订阅和 Office 文档格式仍依赖 XML。",
          "WaiHub JSON 格式化工具支持 JSON 与 XML 互转，便于跨格式协作。",
        ],
      },
    ],
  },
  "how-jwt-authentication-works": {
    title: "JWT 认证是如何工作的",
    description: "理解 JWT 结构、签名与验证——现代 API 和 OAuth 认证的基础。",
    category: "安全",
    content: [
      {
        paragraphs: [
          "JWT（JSON Web Token）认证让服务器签发签名令牌，客户端在后续请求中携带该令牌。服务器通过验证签名确认身份，无需在服务端存储会话状态，实现可扩展的无状态认证。",
        ],
      },
      {
        heading: "JWT 的三部分结构",
        paragraphs: [
          "JWT 由 Header（算法与类型）、Payload（用户 ID、过期时间等声明）和 Signature（对 header+payload+密钥的加密哈希）组成，三部分均经 Base64URL 编码后用点号连接。",
        ],
      },
      {
        heading: "认证流程",
        paragraphs: [
          "1. 用户提交凭证登录；2. 服务器验证后返回 JWT；3. 客户端保存并在 Authorization 头中发送；4. 服务器验证签名并读取声明，基本校验无需查库。",
          "开发调试可使用 WaiHub JWT 解码器查看令牌内容，切勿将生产 Token 粘贴到不可信网站。",
        ],
      },
    ],
  },
  "uuid-v4-explained": {
    title: "UUID v4 详解",
    description: "什么是 UUID v4、随机 UUID 如何工作，以及在数据库和分布式系统中的使用场景。",
    category: "技术",
    content: [
      {
        paragraphs: [
          "UUID v4 通过随机数生成 128 位标识符，格式为 8-4-4-4-12 位十六进制（如 f47ac10b-58cc-4372-a567-0e02b2c3d479）。版本号 4 表示纯随机生成，不含时间戳或 MAC 地址。",
        ],
      },
      {
        heading: "为何使用 UUID",
        paragraphs: [
          "UUID 可在任意机器上独立生成，无需中心协调。适合分布式数据库、离线优先应用、测试数据和链路追踪 ID。即使生成数十亿个，碰撞概率也极低。",
        ],
      },
      {
        heading: "最佳实践",
        paragraphs: [
          "对外暴露的 ID 建议使用 UUID v4，避免枚举攻击。数据库主键在某些场景可考虑 UUID v7（时间有序）以优化索引性能。",
          "可使用 WaiHub UUID 生成器批量生成测试用 UUID，支持大写、无连字符和花括号格式。",
        ],
      },
    ],
  },
  "url-encoding-explained": {
    title: "URL 编码详解",
    description: "百分号编码、encodeURIComponent 与 encodeURI 的区别，以及 URL 特殊字符处理。",
    category: "技术",
    content: [
      {
        paragraphs: [
          "URL 只能包含有限的 ASCII 字符。空格、Unicode 文本以及 &、= 等符号必须在传输前进行百分号编码（如 %20 表示空格，%3D 表示 =）。",
        ],
      },
      {
        heading: "encodeURIComponent 与 encodeURI",
        paragraphs: [
          "encodeURIComponent 会编码 ?、&、= 等特殊字符，适用于单个查询参数值。encodeURI 保留 URL 结构字符（如 / 和 :），适用于编码完整链接。",
        ],
      },
      {
        heading: "常见陷阱",
        paragraphs: [
          "对已编码字符串再次编码会导致双重编码。在 form-urlencoded 数据中，+ 号表示空格，解码时需正确处理。",
          "WaiHub URL 编解码工具同时支持两种函数及 Query ↔ JSON 转换，便于调试 API 参数。",
        ],
      },
    ],
  },
  "understanding-unix-timestamps": {
    title: "理解 Unix 时间戳",
    description: "Unix 纪元时间是什么、秒与毫秒的区别，以及日志和 API 中的时间戳转换。",
    category: "技术",
    content: [
      {
        paragraphs: [
          "Unix 时间戳表示自 1970 年 1 月 1 日 00:00:00 UTC（Unix 纪元）以来的秒数或毫秒数，是日志、数据库、API 和区块链系统的通用时间格式。",
        ],
      },
      {
        heading: "秒与毫秒",
        paragraphs: [
          "10 位数字通常是秒（如 1704067200 表示 2024-01-01）。13 位是毫秒（1704067200000）。混淆两者会导致日期显示为 1970 年或公元 50000 年，是常见的调试错误。",
        ],
      },
      {
        heading: "时区注意事项",
        paragraphs: [
          "Unix 时间戳基于 UTC。显示本地时间需要时区转换。调试时建议同时对比 UTC 与本地时间。",
          "WaiHub 时间戳工具自动识别精度，并显示 UTC、本地时间和 ISO 8601 格式。",
        ],
      },
    ],
  },
  "md5-vs-sha256": {
    title: "MD5 vs SHA-256：哈希算法对比",
    description: "对比 MD5 与 SHA-256 在校验和、完整性验证中的适用场景。",
    category: "安全",
    content: [
      {
        paragraphs: [
          "哈希函数将任意输入转换为固定长度摘要。MD5 输出 128 位（32 位十六进制），SHA-256 输出 256 位（64 位十六进制）。两者都能检测数据变化，但安全性差异显著。",
        ],
      },
      {
        heading: "MD5：快速但已不安全",
        paragraphs: [
          "MD5 速度快，在遗留系统中仍常用于文件校验和缓存键。但碰撞攻击已切实可行，不可用于密码存储、数字签名等安全场景。",
        ],
      },
      {
        heading: "SHA-256：现代标准",
        paragraphs: [
          "SHA-256 属于 SHA-2 家族，是当前完整性验证、区块链和证书指纹的标准算法。安全相关场景应优先使用 SHA-256。",
          "可使用 WaiHub 哈希生成器同时对比 MD5、SHA-1、SHA-256、SHA-512 的结果。",
        ],
      },
    ],
  },
  "common-regex-examples": {
    title: "开发者常用正则表达式示例",
    description: "邮箱、URL、手机号、日期等实用正则模式与验证技巧。",
    category: "教程",
    content: [
      {
        paragraphs: [
          "正则表达式是描述文本匹配规则的模式。以下是开发者日常使用的成熟模式，可在 WaiHub 正则测试器中实时验证。",
        ],
      },
      {
        heading: "实用模式",
        paragraphs: [
          "邮箱（基础）：[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}。URL（基础）：https?://[\\w.-]+\\.\\w{2,}[^\\s]*。美国电话：\\(?\\d{3}\\)?[-.\\s]?\\d{3}[-.\\s]?\\d{4}。",
          "UUID：[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}。整数：-?\\d+。IPv4：\\d{1,3}(\\.\\d{1,3}){3}。",
        ],
      },
      {
        heading: "测试建议",
        paragraphs: [
          "验证整串时请使用锚点 ^ 和 $。务必测试空字符串、Unicode 和边界值。可从 WaiHub 正则测试器的模式库加载模板并自定义。",
        ],
      },
    ],
  },
  "how-qr-codes-work": {
    title: "二维码是如何工作的",
    description: "二维码技术原理、编码容量、纠错机制与实际应用场景。",
    category: "技术",
    content: [
      {
        paragraphs: [
          "QR（Quick Response）码是二维条码，用黑白方块矩阵存储数据。智能手机摄像头可即时扫描，无需手动输入。",
        ],
      },
      {
        heading: "编码原理",
        paragraphs: [
          "数据先转为二进制，再分割为码字并与纠错码交织，最后映射到 QR 矩阵。纠错等级 L/M/Q/H 允许部分损坏仍可扫描，最高可恢复约 30% 的区域。",
        ],
      },
      {
        heading: "实际应用",
        paragraphs: [
          "常用于营销链接、WiFi 凭证（WIFI: 格式）、联系信息（vCard）、支付链接和活动门票。WiFi 码扫描后可直接联网。",
          "可使用 WaiHub 二维码生成器创建文本、URL、邮箱、电话和 WiFi 码，并下载 PNG 图片。",
        ],
      },
    ],
  },
  "api-debugging-tips": {
    title: "API 调试实用技巧",
    description: "REST API 调试方法——JSON 检查、JWT 分析与常见错误模式。",
    category: "教程",
    content: [
      {
        paragraphs: [
          "API 调试是开发者的核心技能。以下技巧可帮助你在联调和生产故障排查中更快定位问题。",
        ],
      },
      {
        heading: "检查响应体",
        paragraphs: [
          "务必先格式化 JSON 响应再阅读。压缩成单行的 JSON 容易隐藏结构错误。在部署前用校验功能捕获尾部逗号和类型错误。",
        ],
      },
      {
        heading: "排查认证问题",
        paragraphs: [
          "解码 JWT 检查声明、过期时间和签发者。401 错误常见原因是 exp 过期或 aud 声明不匹配。调试 API 签名时可配合哈希工具核对 sign 字段。",
        ],
      },
      {
        heading: "工具链协作",
        paragraphs: [
          "JSON 格式化 → URL 编解码 → JWT 解码 → 时间戳转换。WaiHub 的浏览器工具可串联使用，且不上传敏感数据。",
        ],
      },
    ],
  },
  "json-best-practices": {
    title: "JSON API 最佳实践",
    description: "JSON API 设计规范——命名、嵌套、null 处理与错误响应格式。",
    category: "教程",
    content: [
      {
        paragraphs: [
          "一致的 JSON 设计让 API 更易消费和维护。遵循以下规范可提升前后端协作效率。",
        ],
      },
      {
        heading: "命名与结构",
        paragraphs: [
          "统一使用 camelCase 或 snake_case，不要混用。嵌套层级建议不超过 2–3 层。列表用数组，实体用对象，避免难以查询和文档化的深层嵌套。",
        ],
      },
      {
        heading: "null 与错误处理",
        paragraphs: [
          "明确区分 null 与字段缺失。错误响应应结构化：{\"error\": {\"code\": \"INVALID_INPUT\", \"message\": \"...\"}}，便于程序化处理。",
        ],
      },
      {
        heading: "校验",
        paragraphs: [
          "部署前校验 JSON 格式。在 CI 中使用 JSON Schema 验证。开发阶段可用 WaiHub JSON 格式化工具快速发现语法错误。",
        ],
      },
    ],
  },
  "secure-password-generation": {
    title: "安全密码生成指南",
    description: "如何生成强密码、长度建议，以及密码学随机为何优于易记密码。",
    category: "安全",
    content: [
      {
        paragraphs: [
          "弱密码仍是安全事件的首要原因。足够长度和字符多样性的随机密码，比人类选择的易记密码更能抵抗暴力破解和字典攻击。",
        ],
      },
      {
        heading: "长度最重要",
        paragraphs: [
          "一般账号至少 12 位，邮箱、银行等重要账号建议 16 位以上。每增加一位字符，暴力破解难度指数级增长，长度比 l33t speak 等技巧更有效。",
        ],
      },
      {
        heading: "使用密码管理器",
        paragraphs: [
          "将生成的密码存入密码管理器，切勿跨站复用。测试环境可用 WaiHub 密码生成器（crypto.getRandomValues）。需口头传达时可排除易混淆字符（0/O、1/l）。",
        ],
      },
    ],
  },
  "hash-algorithms-comparison": {
    title: "哈希算法对比指南",
    description: "MD5、SHA-1、SHA-256、SHA-512 概览——速度、安全性与适用场景。",
    category: "技术",
    content: [
      {
        paragraphs: [
          "不同哈希算法适用于不同场景。选错算法可能导致安全漏洞或与遗留系统不兼容。",
        ],
      },
      {
        heading: "算法概览",
        paragraphs: [
          "MD5：128 位，快速，安全性已破解，仅适合遗留校验。SHA-1：160 位，已弃用于安全场景。SHA-256：256 位，完整性验证和区块链的现行标准。SHA-512：512 位，适合长期归档的高安全需求。",
        ],
      },
      {
        heading: "如何选择",
        paragraphs: [
          "文件完整性用 SHA-256。API 签名需与后端算法一致。缓存键可用 MD5（非安全场景）。密码存储绝不在浏览器哈希，服务端应使用 bcrypt 或 Argon2。",
          "WaiHub 哈希生成器可一次对比四种算法的输出。",
        ],
      },
    ],
  },
  "regex-for-email-validation": {
    title: "邮箱验证正则表达式",
    description: "用正则验证邮箱地址——常见模式、局限性与最佳实践。",
    category: "教程",
    content: [
      {
        paragraphs: [
          "邮箱验证正则是最常见的模式之一。实用模式能捕获明显错误，同时接受绝大多数真实邮箱地址。",
        ],
      },
      {
        heading: "实用模式",
        paragraphs: [
          "基础模式：^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$。检查本地部分、@、域名和顶级域，覆盖 99% 的真实邮箱，但不保证符合 RFC 5322 的全部边界情况。",
        ],
      },
      {
        heading: "局限性",
        paragraphs: [
          "正则只能验证格式，不能确认邮箱真实存在。生产环境应通过确认邮件或 SMTP 校验。国际化域名（IDN）需额外处理。",
          "可在 WaiHub 正则测试器中加载邮箱模板并实时测试。",
        ],
      },
    ],
  },
  "regex-for-url-validation": {
    title: "URL 验证正则表达式",
    description: "用正则验证 URL——HTTP/HTTPS 模式、查询字符串与 URL 解析器的选择。",
    category: "教程",
    content: [
      {
        paragraphs: [
          "URL 验证正则有助于在表单和 API 中捕获格式错误的链接。模式选择取决于是需要严格 RFC 合规还是实用层面的校验。",
        ],
      },
      {
        heading: "HTTP/HTTPS 模式",
        paragraphs: [
          "基础模式：^https?://[\\w.-]+(?:\\.[\\w.-]+)+[\\w._~:/?#[\\]@!$&'()*+,;=%-]*$。匹配常见 Web URL，含可选路径和查询字符串。",
        ],
      },
      {
        heading: "何时用 URL 解析器",
        paragraphs: [
          "复杂场景（端口、IPv6、片段标识符）建议使用 URL 构造函数：new URL(input)。正则适合表单快速校验，URL API 更适合解析和规范化。",
          "可配合 WaiHub URL 编解码工具进行编码和 Query ↔ JSON 转换。",
        ],
      },
    ],
  },
}
