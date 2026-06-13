import type { ToolPageSeoContent } from "@/lib/i18n/messages/tool-page-content-types"

const en: ToolPageSeoContent = {
  whatIs: {
    title: "What is JWT Decoder?",
    paragraphs: [
      "JWT Decoder is an online tool that decodes JSON Web Tokens (JWT) to reveal their Header and Payload contents. JWTs are compact, URL-safe tokens used for authentication and authorization in modern APIs, OAuth 2.0 flows, and single sign-on systems.",
      "A JWT consists of three Base64URL-encoded parts separated by dots: Header (algorithm and type), Payload (claims like user ID and expiration), and Signature (verification hash). Decoding lets developers inspect token claims, debug authentication issues, and verify expiration times without writing code.",
      "WaiHub's JWT Decoder parses tokens in your browser and displays formatted Header and Payload JSON with exp/iat status indicators. Important: decoding reveals content but does NOT verify the signature. Never paste production tokens into untrusted websites.",
    ],
    benefits: [
      "Instant Header and Payload decoding",
      "Formatted JSON output with syntax highlighting",
      "exp/iat expiration status indicators",
      "Debug OAuth and API authentication",
      "No server upload — browser-only processing",
      "Understand token claims and structure",
    ],
  },
  features: {
    title: "Features",
    items: [
      "Decode JWT Header and Payload instantly",
      "Formatted JSON with readable indentation",
      "Show exp (expiration) and iat (issued at) status",
      "Highlight expired or soon-to-expire tokens",
      "Built-in example tokens for learning",
      "Copy decoded sections individually",
      "Handle Base64URL encoding correctly",
      "Clear error messages for invalid tokens",
      "Educational tool for JWT structure",
      "Works locally in browser",
    ],
  },
  howToUse: {
    title: "How To Use",
    steps: [
      { title: "Paste your JWT token", description: "Copy the Bearer token from your API response, browser dev tools, or OAuth callback. Paste the full three-part token." },
      { title: "View decoded sections", description: "Header and Payload are automatically decoded and displayed as formatted JSON. Check the algorithm in Header and claims in Payload." },
      { title: "Check expiration status", description: "Look at exp and iat fields. The tool highlights whether the token is expired, valid, or expiring soon." },
      { title: "Copy decoded content", description: "Copy individual Header or Payload sections for documentation or further analysis with other tools." },
    ],
  },
  examples: {
    title: "Examples",
    inputLabel: "JWT Token",
    outputLabel: "Decoded Payload",
    items: [
      {
        label: "Standard JWT",
        input: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
        output: `{
  "sub": "1234567890",
  "name": "John Doe",
  "iat": 1516239022
}`,
        language: "json",
      },
    ],
  },
  faq: [
    { q: "Is this JWT decoder free?", a: "Yes. Completely free with no signup." },
    { q: "Is my token uploaded?", a: "No. Decoding happens entirely in your browser." },
    { q: "Does decoding verify the signature?", a: "No. Decoding only reveals content. Signature verification requires the secret key on the server." },
    { q: "Can I decode production tokens?", a: "Avoid pasting production tokens into any online tool. Use test tokens for debugging." },
    { q: "Can I use it commercially?", a: "Yes. Free for personal and commercial development." },
    { q: "What are common JWT claims?", a: "sub (subject/user ID), iat (issued at), exp (expiration), iss (issuer), aud (audience), and custom application claims." },
  ],
  relatedToolSlugs: ["base64", "json-formatter", "timestamp", "hash-generator", "url-encoder"],
}

const zh: ToolPageSeoContent = {
  whatIs: {
    title: "什么是 JWT 解码器？",
    paragraphs: [
      "JWT 解码器将 JSON Web Token（JWT）解码，展示 Header 和 Payload 内容。JWT 是紧凑、URL 安全的令牌，用于现代 API 认证、OAuth 2.0 流程和单点登录系统。",
      "JWT 由三个 Base64URL 编码部分用点号分隔：Header（算法和类型）、Payload（用户 ID、过期时间等声明）和 Signature（验证哈希）。解码让开发者无需写代码即可检查令牌声明、调试认证问题和验证过期时间。",
      "WaiHub JWT 解码器在浏览器中解析令牌，以格式化 JSON 显示 Header 和 Payload，并标注 exp/iat 状态。重要提示：解码仅展示内容，不验证签名。切勿将生产 Token 粘贴到不可信网站。",
    ],
    benefits: [
      "即时解码 Header 和 Payload",
      "格式化 JSON 输出",
      "exp/iat 过期状态指示",
      "调试 OAuth 和 API 认证",
      "不上传服务器，浏览器处理",
      "理解令牌声明和结构",
    ],
  },
  features: {
    title: "功能特性",
    items: [
      "即时解码 JWT Header 和 Payload",
      "格式化 JSON 缩进输出",
      "显示 exp 和 iat 状态",
      "高亮已过期或即将过期的令牌",
      "内置示例令牌供学习",
      "单独复制解码部分",
      "正确处理 Base64URL 编码",
      "无效令牌清晰错误提示",
      "JWT 结构教学工具",
      "浏览器本地运行",
    ],
  },
  howToUse: {
    title: "使用方法",
    steps: [
      { title: "粘贴 JWT Token", description: "从 API 响应、浏览器开发工具或 OAuth 回调复制 Bearer Token，粘贴完整的三段式令牌。" },
      { title: "查看解码部分", description: "Header 和 Payload 自动解码为格式化 JSON，检查 Header 中的算法和 Payload 中的声明。" },
      { title: "检查过期状态", description: "查看 exp 和 iat 字段，工具会高亮令牌是否已过期、有效或即将过期。" },
      { title: "复制解码内容", description: "单独复制 Header 或 Payload 部分，用于文档或其他工具进一步分析。" },
    ],
  },
  examples: {
    title: "示例",
    inputLabel: "JWT Token",
    outputLabel: "解码 Payload",
    items: [
      {
        label: "标准 JWT",
        input: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
        output: `{
  "sub": "1234567890",
  "name": "John Doe",
  "iat": 1516239022
}`,
        language: "json",
      },
    ],
  },
  faq: [
    { q: "JWT 解码器免费吗？", a: "是的，完全免费，无需注册。" },
    { q: "Token 会上传吗？", a: "不会，解码完全在浏览器中完成。" },
    { q: "解码会验证签名吗？", a: "不会。解码仅展示内容，签名验证需要服务器端的密钥。" },
    { q: "能解码生产 Token 吗？", a: "避免将生产 Token 粘贴到任何在线工具，调试请使用测试 Token。" },
    { q: "可以商用吗？", a: "可以，个人和商业开发均免费。" },
    { q: "常见 JWT 声明有哪些？", a: "sub（主体/用户 ID）、iat（签发时间）、exp（过期时间）、iss（签发者）、aud（受众）及自定义声明。" },
  ],
  relatedToolSlugs: ["base64", "json-formatter", "timestamp", "hash-generator", "url-encoder"],
}

const ja: ToolPageSeoContent = {
  whatIs: {
    title: "JWT デコーダーとは？",
    paragraphs: [
      "JWT デコーダーは JSON Web Token（JWT）をデコードし、Header と Payload の内容を表示するオンラインツールです。JWT は現代の API 認証、OAuth 2.0、シングルサインオンで使用されるコンパクトな URL セーフトークンです。",
      "JWT はドットで区切られた 3 つの Base64URL エンコード部分で構成：Header（アルゴリズムとタイプ）、Payload（ユーザー ID、有効期限などのクレーム）、Signature（検証ハッシュ）。デコードにより、コード不要でクレーム確認、認証問題のデバッグ、有効期限の検証が可能です。",
      "WaiHub の JWT デコーダーはブラウザ内でトークンを解析し、フォーマット済み JSON で Header と Payload を表示、exp/iat ステータスを表示。重要：デコードは内容を表示するのみで、署名は検証しません。本番トークンは信頼できないサイトに貼り付けないでください。",
    ],
    benefits: [
      "Header と Payload の即時デコード",
      "フォーマット済み JSON 出力",
      "exp/iat 有効期限ステータス",
      "OAuth と API 認証のデバッグ",
      "サーバー非送信のブラウザ処理",
      "トークンクレームと構造の理解",
    ],
  },
  features: {
    title: "機能",
    items: [
      "JWT Header と Payload を即時デコード",
      "読みやすいインデント付き JSON",
      "exp と iat ステータス表示",
      "期限切れ・間もなく期限切れのハイライト",
      "学習用の内蔵サンプルトークン",
      "デコード部分の個別コピー",
      "Base64URL エンコードの正確な処理",
      "無効トークンの明確なエラーメッセージ",
      "JWT 構造の学習ツール",
      "ブラウザ内ローカル動作",
    ],
  },
  howToUse: {
    title: "使い方",
    steps: [
      { title: "JWT トークンを貼り付け", description: "API レスポンス、ブラウザ開発ツール、OAuth コールバックから Bearer トークンをコピー。3 部構成のトークン全体を貼り付け。" },
      { title: "デコード部分を確認", description: "Header と Payload が自動デコードされフォーマット JSON で表示。Header のアルゴリズムと Payload のクレームを確認。" },
      { title: "有効期限ステータスを確認", description: "exp と iat フィールドを確認。ツールが期限切れ、有効、間もなく期限切れをハイライト。" },
      { title: "デコード内容をコピー", description: "Header または Payload を個別にコピーし、ドキュメントや他ツールでの分析に使用。" },
    ],
  },
  examples: {
    title: "例",
    inputLabel: "JWT トークン",
    outputLabel: "デコード Payload",
    items: [
      {
        label: "標準 JWT",
        input: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
        output: `{
  "sub": "1234567890",
  "name": "John Doe",
  "iat": 1516239022
}`,
        language: "json",
      },
    ],
  },
  faq: [
    { q: "この JWT デコーダーは無料ですか？", a: "はい。登録不要、完全無料です。" },
    { q: "トークンはアップロードされますか？", a: "いいえ。すべてブラウザ内でデコードされます。" },
    { q: "デコードで署名を検証しますか？", a: "いいえ。デコードは内容表示のみ。署名検証にはサーバー側の秘密鍵が必要です。" },
    { q: "本番トークンをデコードできますか？", a: "本番トークンはオンラインツールに貼り付けないでください。テストトークンでデバッグしてください。" },
    { q: "商用利用できますか？", a: "はい。個人・商用開発ともに無料です。" },
    { q: "一般的な JWT クレームは？", a: "sub（主体/ユーザー ID）、iat（発行時刻）、exp（有効期限）、iss（発行者）、aud（対象者）、カスタムクレーム。" },
  ],
  relatedToolSlugs: ["base64", "json-formatter", "timestamp", "hash-generator", "url-encoder"],
}

export const jwtDecoderContent = { en, zh, ja }
