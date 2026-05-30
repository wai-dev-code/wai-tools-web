export interface StaticPageMessages {
  about: {
    metaTitle: string
    metaDescription: string
    title: string
    brandDefinition: string
    intro: string
    principlesTitle: string
    principles: { title: string; desc: string }[]
    toolsTitle: string
    toolsDesc: string
    browseTools: string
    stackTitle: string
    stackDesc: string
    feedbackTitle: string
    feedbackDesc: string
    contactLink: string
    feedbackClosing: string
  }
  contact: {
    metaTitle: string
    metaDescription: string
    title: string
    intro: string
    emailTitle: string
    emailReply: string
    faqTitle: string
    faqDesc: string
    homeFaq: string
    faqSuffix: string
    privacyTitle: string
    privacyDesc: string
    privacyLink: string
    privacySuffix: string
  }
  blog: {
    metaTitle: string
    metaDescription: string
    title: string
    subtitle: string
    readMore: string
    categories: Record<string, string>
    posts: Record<
      string,
      {
        title: string
        description: string
        category: string
        readTime: string
        content: { heading?: string; paragraphs: string[] }[]
      }
    >
  }
  theme: {
    toDark: string
    toLight: string
  }
  errors: {
    emptySource: string
    emptyContent: string
    nothingToUnescape: string
    nothingToDownload: string
    oversized: string
    invalidJsonTree: string
    jsonPathFailed: string
    jsonPathInvalid: string
    jsonParseFailed: string
    invalidBase64Char: string
    invalidDataUri: string
    invalidHex: string
    unrecognizedInput: string
    processFailed: string
    convertFailed: string
    operationFailed: string
    validateFailed: string
    fileEncodeFailed: string
    fileReadFailed: string
    invalidJsonPathPrefix: string
    pathResolvePrefix: string
    pathNotFoundPrefix: string
    pathNotFoundSuffix: string
    pathNullIntermediate: string
    pathExpectArray: string
    pathArrayOob: string
    pathArrayHint: string
    pathExpectObject: string
    invalidJsonPathExpr: string
  }
}

export const staticZh: StaticPageMessages = {
  about: {
    metaTitle: "关于我们",
    metaDescription:
      "了解 WaiHub（开发者工具中心）的使命：为开发者提供免费、快速、注重隐私的在线工具。",
    title: "关于 WaiHub",
    brandDefinition:
      "WaiHub 取自 Wai + Hub，意为「开发者工具中心」—— 把 JSON 格式化、Base64 编解码等日常开发需求集中在一处，在浏览器中即时完成。",
    intro:
      "WaiHub 是一个面向开发者与创作者的免费在线工具平台。我们相信日常开发中的 JSON 格式化、Base64 编解码等需求，应该能在浏览器中即时完成，无需注册、无需安装、无需担心数据泄露。",
    principlesTitle: "我们的原则",
    principles: [
      { title: "浏览器内优先", desc: "工具在浏览器中运行，您的数据不上传服务器" },
      { title: "完全免费", desc: "所有工具永久免费，无隐藏收费" },
      { title: "快速直达", desc: "打开即用，减少不必要的步骤" },
      { title: "持续迭代", desc: "根据开发者反馈不断添加实用工具" },
    ],
    toolsTitle: "目前提供的工具",
    toolsDesc: "我们目前提供 {n} 个开发者工具，涵盖 JSON 格式化与 Base64 编解码等常见场景。",
    browseTools: "浏览全部工具 →",
    stackTitle: "技术栈",
    stackDesc: "WaiHub 使用 Next.js、React 和 Tailwind CSS 构建，部署在现代云基础设施上，确保全球访问速度与稳定性。",
    feedbackTitle: "反馈与建议",
    feedbackDesc: "欢迎通过",
    contactLink: "联系我们",
    feedbackClosing: "，提交功能建议或问题反馈，我们会认真阅读每一条消息。",
  },
  contact: {
    metaTitle: "联系我们",
    metaDescription: "联系 WaiHub 团队，提交功能建议、问题反馈或商务合作。",
    title: "联系我们",
    intro: "如有功能建议、问题反馈、Bug 报告或商务合作意向，欢迎通过以下方式与我们联系。",
    emailTitle: "电子邮件",
    emailReply: "我们通常会在 2-3 个工作日内回复。",
    faqTitle: "常见问题",
    faqDesc: "许多问题可在各工具页面的「常见问题」部分找到答案。也可查看",
    homeFaq: "首页 FAQ",
    faqSuffix: "。",
    privacyTitle: "隐私相关",
    privacyDesc: "有关数据与 Cookie 的疑问，请参阅我们的",
    privacyLink: "隐私政策",
    privacySuffix: "。",
  },
  blog: {
    metaTitle: "博客",
    metaDescription: "开发者工具使用教程、技术原理与安全最佳实践。",
    title: "博客",
    subtitle: "开发者技巧、教程与最佳实践",
    readMore: "阅读全文",
    categories: { 教程: "教程", 技术: "技术" },
    posts: {
      "json-formatter-guide": {
        title: "如何高效使用 JSON 格式化工具",
        description: "学习 JSON 格式化的最佳实践，提升 API 调试与配置文件管理效率。",
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
              "处理大型 JSON 时，建议先在浏览器中验证，再粘贴到代码中，避免将格式错误的配置部署到生产环境。",
            ],
          },
          {
            heading: "隐私与安全建议",
            paragraphs: [
              "JSON 中可能包含用户数据、API 密钥或 Token。使用 WaiHub 等浏览器内运行的工具，数据不会上传到服务器，适合处理敏感信息。对于生产环境的密钥，切勿在任何在线工具中粘贴。",
            ],
          },
        ],
      },
      "base64-encoding-explained": {
        title: "Base64 编码原理与应用场景",
        description: "深入了解 Base64 编码的工作原理、适用场景及常见误区。",
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
    },
  },
  theme: { toDark: "切换深色模式", toLight: "切换浅色模式" },
  errors: {
    emptySource: "源数据为空",
    emptyContent: "内容为空",
    nothingToUnescape: "没有可还原的内容",
    nothingToDownload: "没有可下载的内容",
    oversized: "内容超过 5MB 上限",
    invalidJsonTree: "JSON 无效，无法显示树形视图",
    jsonPathFailed: "JSONPath 解析失败",
    jsonPathInvalid: "JSONPath 格式无效",
    jsonParseFailed: "JSON 解析失败",
    invalidBase64Char: "无效的 Base64 字符",
    invalidDataUri: "无效的 Data URI 格式",
    invalidHex: "无效的 Hex 字符串",
    unrecognizedInput: "无法识别的输入格式",
    processFailed: "处理失败",
    convertFailed: "转换失败",
    operationFailed: "操作失败",
    validateFailed: "校验失败",
    fileEncodeFailed: "文件编码失败",
    fileReadFailed: "文件读取失败",
    invalidJsonPathPrefix: "无效 JSONPath:",
    pathResolvePrefix: "路径无法解析：",
    pathNotFoundPrefix: "路径 ",
    pathNotFoundSuffix: " 不存在",
    pathNullIntermediate: "路径无法解析：中间值为 null/undefined",
    pathExpectArray: "路径无法解析：期望数组，可使用 [{token}] 访问",
    pathArrayOob: "数组索引 [{token}] 越界（长度 {length}）",
    pathArrayHint: "当前是数组，请用 [0].{token} 等形式访问（如 [0].{token}）",
    pathExpectObject: "路径无法解析：期望对象",
    invalidJsonPathExpr: "无效 JSONPath: {expr}",
  },
}

export const staticEn: StaticPageMessages = {
  about: {
    metaTitle: "About Us",
    metaDescription:
      "Learn about WaiHub — a developer tools hub offering free, fast, privacy-first online utilities.",
    title: "About WaiHub",
    brandDefinition:
      "WaiHub combines Wai + Hub — a developer tools hub that brings JSON formatting, Base64 encoding, and everyday dev utilities together in your browser.",
    intro:
      "WaiHub is a free online toolkit for developers and creators. JSON formatting, Base64 encoding, and everyday dev tasks should run instantly in your browser — no signup, no install, no data upload.",
    principlesTitle: "Our principles",
    principles: [
      { title: "In-browser first", desc: "Tools run in your browser — your data never hits our servers" },
      { title: "Free forever", desc: "All tools are free with no hidden fees" },
      { title: "Fast & direct", desc: "Open and use — minimal friction" },
      { title: "Always improving", desc: "New utilities based on developer feedback" },
    ],
    toolsTitle: "Tools we offer",
    toolsDesc: "We currently offer {n} developer tools covering JSON formatting, Base64, and more.",
    browseTools: "Browse all tools →",
    stackTitle: "Tech stack",
    stackDesc: "Built with Next.js, React, and Tailwind CSS on modern cloud infrastructure for speed and reliability worldwide.",
    feedbackTitle: "Feedback",
    feedbackDesc: "Reach us via",
    contactLink: "Contact",
    feedbackClosing: " — we read every message.",
  },
  contact: {
    metaTitle: "Contact",
    metaDescription: "Contact the WaiHub team for feedback, bug reports, or partnerships.",
    title: "Contact",
    intro: "For feature requests, bug reports, or business inquiries, get in touch below.",
    emailTitle: "Email",
    emailReply: "We usually reply within 2–3 business days.",
    faqTitle: "FAQ",
    faqDesc: "Many answers live in each tool's FAQ section, or on the",
    homeFaq: "home FAQ",
    faqSuffix: ".",
    privacyTitle: "Privacy",
    privacyDesc: "For data and cookie questions, see our",
    privacyLink: "Privacy Policy",
    privacySuffix: ".",
  },
  blog: {
    metaTitle: "Blog",
    metaDescription: "Tutorials, technical deep-dives, and best practices for developer tools.",
    title: "Blog",
    subtitle: "Tips, tutorials, and best practices",
    readMore: "Read more",
    categories: { 教程: "Tutorial", 技术: "Technical" },
    posts: {
      "json-formatter-guide": {
        title: "How to Use a JSON Formatter Effectively",
        description: "Best practices for formatting JSON and debugging APIs faster.",
        category: "Tutorial",
        readTime: "5 min read",
        content: [
          {
            paragraphs: [
              "JSON is the lingua franca of web APIs — but responses often arrive minified on one line. A formatter adds indentation so structure, nesting, and field names are easy to scan.",
            ],
          },
          {
            heading: "When to format vs minify",
            paragraphs: [
              "Pretty-print for debugging: 2- or 4-space indent makes hierarchy obvious when inspecting API responses or sharing data with teammates.",
              "Minify for production: stripping whitespace shrinks payloads for config files or network transfer. Machines parse minified JSON identically — humans don't.",
            ],
          },
          {
            heading: "Common parse errors",
            paragraphs: [
              "Failures usually come from trailing commas, single-quoted strings, unescaped characters, or JS-style comments. Validation highlights the exact line.",
              "For large JSON, validate in your browser before committing configs to production.",
            ],
          },
          {
            heading: "Privacy tips",
            paragraphs: [
              "JSON may contain tokens, PII, or API keys. WaiHub runs in your browser — nothing is uploaded. Never paste production secrets into any online tool.",
            ],
          },
        ],
      },
      "base64-encoding-explained": {
        title: "Base64 Encoding Explained",
        description: "How Base64 works, where it's used, and common misconceptions.",
        category: "Technical",
        readTime: "8 min read",
        content: [
          {
            paragraphs: [
              "Base64 encodes binary data as ASCII using 64 characters (A–Z, a–z, 0–9, +, /) plus = padding. Output grows ~33% but travels safely through text-only channels.",
            ],
          },
          {
            heading: "Common use cases",
            paragraphs: [
              "Data URLs for tiny images in HTML/CSS.",
              "HTTP Basic Auth (username:password encoded in Authorization header).",
              "Email MIME attachments.",
              "JWT header and payload (Base64URL variant).",
            ],
          },
          {
            heading: "Base64 is not encryption",
            paragraphs: [
              "Anyone can decode Base64. It provides compatibility, not confidentiality — use real encryption (e.g. AES) for secrets.",
            ],
          },
          {
            heading: "UTF-8 and Unicode",
            paragraphs: [
              "Text must be UTF-8 bytes before encoding. WaiHub handles UTF-8 correctly for Chinese, emoji, and all Unicode.",
            ],
          },
        ],
      },
    },
  },
  theme: { toDark: "Switch to dark mode", toLight: "Switch to light mode" },
  errors: {
    emptySource: "Source is empty",
    emptyContent: "Content is empty",
    nothingToUnescape: "Nothing to unescape",
    nothingToDownload: "Nothing to download",
    oversized: "Content exceeds 5MB limit",
    invalidJsonTree: "Invalid JSON — cannot show tree view",
    jsonPathFailed: "JSONPath evaluation failed",
    jsonPathInvalid: "Invalid JSONPath syntax",
    jsonParseFailed: "JSON parse failed",
    invalidBase64Char: "Invalid Base64 character",
    invalidDataUri: "Invalid Data URI format",
    invalidHex: "Invalid Hex string",
    unrecognizedInput: "Unrecognized input format",
    processFailed: "Processing failed",
    convertFailed: "Conversion failed",
    operationFailed: "Operation failed",
    validateFailed: "Validation failed",
    fileEncodeFailed: "File encoding failed",
    fileReadFailed: "Failed to read file",
    invalidJsonPathPrefix: "Invalid JSONPath:",
    pathResolvePrefix: "Cannot resolve path: ",
    pathNotFoundPrefix: "Path ",
    pathNotFoundSuffix: " does not exist",
    pathNullIntermediate: "Cannot resolve path: intermediate value is null/undefined",
    pathExpectArray: "Cannot resolve path: expected array, use [{token}]",
    pathArrayOob: "Index [{token}] out of bounds (length {length})",
    pathArrayHint: "Current value is an array; use [0].{token} (e.g. [0].{token})",
    pathExpectObject: "Cannot resolve path: expected object",
    invalidJsonPathExpr: "Invalid JSONPath: {expr}",
  },
}

export const staticJa: StaticPageMessages = {
  about: {
    metaTitle: "私たちについて",
    metaDescription:
      "WaiHub（開発者ツールハブ）— 無料・高速・プライバシー重視のオンラインツール。",
    title: "WaiHub について",
    brandDefinition:
      "WaiHub は Wai + Hub から名付けました — JSON 整形や Base64 など、開発者向けツールをブラウザに集約したハブです。",
    intro:
      "WaiHub は開発者向けの無料オンラインツール集です。JSON 整形や Base64 など、日常の作業をブラウザですぐに — 登録不要、インストール不要、データアップロードなし。",
    principlesTitle: "私たちの原則",
    principles: [
      { title: "ブラウザ内優先", desc: "ブラウザ内で実行 — データはサーバーに送信されません" },
      { title: "完全無料", desc: "隠れた料金なし、すべて無料" },
      { title: "すぐ使える", desc: "開いてすぐ使える、余計な手順なし" },
      { title: "継続改善", desc: "開発者のフィードバックで機能追加" },
    ],
    toolsTitle: "提供ツール",
    toolsDesc: "現在 {n} 個の開発者ツールを提供（JSON 整形、Base64 など）。",
    browseTools: "すべてのツール →",
    stackTitle: "技術スタック",
    stackDesc: "Next.js、React、Tailwind CSS で構築。モダンなクラウドでグローバルに高速配信。",
    feedbackTitle: "フィードバック",
    feedbackDesc: "お問い合わせは",
    contactLink: "お問い合わせ",
    feedbackClosing: " — 機能提案やフィードバックをお待ちしています。",
  },
  contact: {
    metaTitle: "お問い合わせ",
    metaDescription: "機能要望、バグ報告、提携のお問い合わせ。",
    title: "お問い合わせ",
    intro: "機能提案、バグ報告、ビジネス提携など、以下よりご連絡ください。",
    emailTitle: "メール",
    emailReply: "通常 2–3 営業日以内に返信します。",
    faqTitle: "FAQ",
    faqDesc: "各ツールページの FAQ または",
    homeFaq: "ホーム FAQ",
    faqSuffix: "。",
    privacyTitle: "プライバシー",
    privacyDesc: "データ・Cookie については",
    privacyLink: "プライバシーポリシー",
    privacySuffix: "をご覧ください。",
  },
  blog: {
    metaTitle: "ブログ",
    metaDescription: "開発者ツールのチュートリアルと技術解説。",
    title: "ブログ",
    subtitle: "Tips、チュートリアル、ベストプラクティス",
    readMore: "続きを読む",
    categories: { 教程: "チュートリアル", 技术: "技術" },
    posts: {
      "json-formatter-guide": {
        title: "JSON 整形ツールを効果的に使う",
        description: "JSON 整形のベストプラクティスで API デバッグを加速。",
        category: "チュートリアル",
        readTime: "5 分",
        content: [
          {
            paragraphs: [
              "JSON は Web API の共通フォーマットですが、レスポンスは1行に圧縮されていることが多いです。整形ツールでインデントを付けると構造が一目でわかります。",
            ],
          },
          {
            heading: "整形 vs 圧縮",
            paragraphs: [
              "デバッグには Pretty Print：2/4 スペースのインデントで階層が明確に。",
              "本番には Minify：空白削除でペイロード縮小。機械の解析結果は同じです。",
            ],
          },
          {
            heading: "よくあるエラー",
            paragraphs: [
              "末尾カンマ、シングルクォート、未エスケープ文字、JS コメントが原因になりがち。検証機能で行を特定できます。",
            ],
          },
          {
            heading: "プライバシー",
            paragraphs: [
              "JSON にトークンや個人情報が含まれることがあります。WaiHub はブラウザ内で実行され、アップロードしません。本番シークレットはオンラインツールに貼らないでください。",
            ],
          },
        ],
      },
      "base64-encoding-explained": {
        title: "Base64 符号化の原理と用途",
        description: "Base64 の仕組み、用途、よくある誤解。",
        category: "技術",
        readTime: "8 分",
        content: [
          {
            paragraphs: [
              "Base64 はバイナリを ASCII 64 文字で表現する方式。約 33% サイズ増ですがテキスト経路で安全に送れます。",
            ],
          },
          {
            heading: "主な用途",
            paragraphs: [
              "HTML/CSS の Data URL 画像。",
              "HTTP Basic 認証。",
              "メール MIME 添付。",
              "JWT ヘッダー/ペイロード（Base64URL）。",
            ],
          },
          {
            heading: "Base64 は暗号ではない",
            paragraphs: ["誰でもデコード可能。機密性はなく互換性のため — 秘密には AES 等を使う。"],
          },
          {
            heading: "UTF-8",
            paragraphs: ["テキストは UTF-8 バイトにしてから符号化。WaiHub は Unicode を正しく処理します。"],
          },
        ],
      },
    },
  },
  theme: { toDark: "ダークモード", toLight: "ライトモード" },
  errors: {
    emptySource: "ソースが空です",
    emptyContent: "内容が空です",
    nothingToUnescape: "復元する内容がありません",
    nothingToDownload: "ダウンロードする内容がありません",
    oversized: "内容が 5MB 上限を超えています",
    invalidJsonTree: "JSON が無効 — ツリーを表示できません",
    jsonPathFailed: "JSONPath 評価失敗",
    jsonPathInvalid: "JSONPath 形式が無効",
    jsonParseFailed: "JSON 解析失敗",
    invalidBase64Char: "無効な Base64 文字",
    invalidDataUri: "無効な Data URI 形式",
    invalidHex: "無効な Hex 文字列",
    unrecognizedInput: "認識できない入力形式",
    processFailed: "処理失敗",
    convertFailed: "変換失敗",
    operationFailed: "操作失敗",
    validateFailed: "検証失敗",
    fileEncodeFailed: "ファイルエンコード失敗",
    fileReadFailed: "ファイル読み込み失敗",
    invalidJsonPathPrefix: "無効 JSONPath:",
    pathResolvePrefix: "パスを解決できません: ",
    pathNotFoundPrefix: "パス ",
    pathNotFoundSuffix: " は存在しません",
    pathNullIntermediate: "パスを解決できません: 中間値が null/undefined",
    pathExpectArray: "パスを解決できません: 配列が必要です [{token}] を使用",
    pathArrayOob: "インデックス [{token}] が範囲外（長さ {length}）",
    pathArrayHint: "現在は配列です。[0].{token} 形式を使用（例: [0].{token}）",
    pathExpectObject: "パスを解決できません: オブジェクトが必要",
    invalidJsonPathExpr: "無効 JSONPath: {expr}",
  },
}
