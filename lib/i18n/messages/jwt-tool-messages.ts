import type { FaqItem } from "@/lib/i18n/messages/types"

export interface JwtToolMessages {
  tokenLabel: string
  example: string
  clear: string
  placeholder: string
  algorithm: string
  timeClaims: string
  header: string
  payload: string
  signature: string
  signatureHint: string
  secretLabel: string
  secretPlaceholder: string
  verifyValid: string
  verifyInvalid: string
  verifyUnsupported: string
  verifySkipped: string
  copy: string
  claims: {
    exp: string
    iat: string
    nbf: string
  }
  status: {
    expired: string
    valid: string
    notYetValid: string
  }
  expiredWarning: string
  guideTitle: string
  algorithms: Record<string, string>
  claimsGuideTitle: string
  claimsGuide: Record<string, string>
  errors: {
    parseFailed: string
    invalidStructure: string
  }
  notify: {
    nothingToCopy: string
    copiedHeader: string
    copiedPayload: string
  }
  examples: Record<string, { label: string; description: string }>
}

export interface JwtDecoderPageMessages {
  metaTitle: string
  metaDescription: string
  instructions: string[]
  faq: FaqItem[]
}

export const jwtToolZh: JwtToolMessages = {
  tokenLabel: "JWT Token",
  example: "示例",
  clear: "清空",
  placeholder: "粘贴 JWT...",
  algorithm: "算法",
  timeClaims: "时间声明",
  header: "Header",
  payload: "Payload",
  signature: "Signature（未验证）",
  signatureHint: "Signature",
  secretLabel: "密钥（HS256 验签，可选）",
  secretPlaceholder: "输入密钥以验证 HS256 签名…",
  verifyValid: "签名有效",
  verifyInvalid: "签名无效",
  verifyUnsupported: "当前仅支持 HS256 验签",
  verifySkipped: "输入密钥后可验证 HS256 签名",
  copy: "复制",
  claims: { exp: "过期时间 (exp)", iat: "签发时间 (iat)", nbf: "生效时间 (nbf)" },
  status: { expired: "已过期", valid: "有效", notYetValid: "尚未生效" },
  expiredWarning: "此 Token 的 exp 已过期（仅基于 Payload 判断，未验证签名）。",
  guideTitle: "算法说明",
  algorithms: {
    HS256: "HMAC SHA-256，对称密钥签名，常见于内部服务。",
    RS256: "RSA SHA-256，公钥验签，常见于 OAuth / OIDC。",
    ES256: "ECDSA SHA-256，椭圆曲线签名，体积更小。",
  },
  claimsGuideTitle: "常见 Payload 字段",
  claimsGuide: {
    sub: "Subject — 用户或主体 ID",
    iss: "Issuer — 签发方",
    aud: "Audience — 预期接收方",
    jti: "JWT ID — 唯一标识",
  },
  errors: { parseFailed: "解析失败", invalidStructure: "JWT 应包含 Header.Payload.Signature 三部分" },
  notify: { nothingToCopy: "没有可复制的内容", copiedHeader: "已复制 Header", copiedPayload: "已复制 Payload" },
  examples: {
    standard: { label: "标准 JWT", description: "Header + Payload 解码" },
    "with-exp": { label: "含 exp 声明", description: "过期时间与签发时间" },
  },
}

export const jwtToolEn: JwtToolMessages = {
  tokenLabel: "JWT Token",
  example: "Example",
  clear: "Clear",
  placeholder: "Paste JWT...",
  algorithm: "Algorithm",
  timeClaims: "Time claims",
  header: "Header",
  payload: "Payload",
  signature: "Signature (not verified)",
  signatureHint: "Signature",
  secretLabel: "Secret (optional HS256 verify)",
  secretPlaceholder: "Enter secret to verify HS256 signature…",
  verifyValid: "Signature valid",
  verifyInvalid: "Signature invalid",
  verifyUnsupported: "Only HS256 verification is supported",
  verifySkipped: "Enter a secret to verify HS256 signature",
  copy: "Copy",
  claims: { exp: "Expires (exp)", iat: "Issued at (iat)", nbf: "Not before (nbf)" },
  status: { expired: "Expired", valid: "Valid", notYetValid: "Not yet valid" },
  expiredWarning: "This token's exp has passed (payload only — signature not verified).",
  guideTitle: "Algorithm guide",
  algorithms: {
    HS256: "HMAC SHA-256 — symmetric secret signing, common for internal APIs.",
    RS256: "RSA SHA-256 — asymmetric, typical for OAuth / OIDC providers.",
    ES256: "ECDSA SHA-256 — elliptic-curve signatures, smaller keys.",
  },
  claimsGuideTitle: "Common payload claims",
  claimsGuide: {
    sub: "Subject — user or principal identifier",
    iss: "Issuer — who created the token",
    aud: "Audience — intended recipient",
    jti: "JWT ID — unique token identifier",
  },
  errors: { parseFailed: "Parse failed", invalidStructure: "JWT must have Header.Payload.Signature" },
  notify: { nothingToCopy: "Nothing to copy", copiedHeader: "Copied Header", copiedPayload: "Copied Payload" },
  examples: {
    standard: { label: "Standard JWT", description: "Decode header + payload" },
    "with-exp": { label: "With exp claim", description: "Expiry and issued time" },
  },
}

export const jwtToolJa: JwtToolMessages = {
  tokenLabel: "JWT Token",
  example: "サンプル",
  clear: "クリア",
  placeholder: "JWT を貼り付け...",
  algorithm: "アルゴリズム",
  timeClaims: "時間クレーム",
  header: "Header",
  payload: "Payload",
  signature: "Signature（未検証）",
  signatureHint: "Signature",
  secretLabel: "秘密鍵（HS256 検証、任意）",
  secretPlaceholder: "HS256 署名検証用の秘密鍵…",
  verifyValid: "署名は有効",
  verifyInvalid: "署名が無効",
  verifyUnsupported: "HS256 検証のみ対応",
  verifySkipped: "秘密鍵を入力すると HS256 署名を検証できます",
  copy: "コピー",
  claims: { exp: "有効期限 (exp)", iat: "発行時刻 (iat)", nbf: "開始時刻 (nbf)" },
  status: { expired: "期限切れ", valid: "有効", notYetValid: "未発効" },
  expiredWarning: "この Token の exp は期限切れです（Payload のみ、署名は未検証）。",
  guideTitle: "アルゴリズム",
  algorithms: {
    HS256: "HMAC SHA-256 — 対称鍵署名、内部 API でよく使用。",
    RS256: "RSA SHA-256 — 公開鍵検証、OAuth / OIDC で一般的。",
    ES256: "ECDSA SHA-256 — 極小署名、鍵サイズが小さい。",
  },
  claimsGuideTitle: "よくある Payload クレーム",
  claimsGuide: {
    sub: "Subject — ユーザー ID",
    iss: "Issuer — 発行者",
    aud: "Audience — 受信者",
    jti: "JWT ID — 一意 ID",
  },
  errors: { parseFailed: "解析失敗", invalidStructure: "JWT は Header.Payload.Signature の 3 部分が必要です" },
  notify: { nothingToCopy: "コピーする内容がありません", copiedHeader: "Header をコピーしました", copiedPayload: "Payload をコピーしました" },
  examples: {
    standard: { label: "標準 JWT", description: "Header + Payload デコード" },
    "with-exp": { label: "exp 付き", description: "有効期限と発行時刻" },
  },
}

export const jwtDecoderPageZh: JwtDecoderPageMessages = {
  metaTitle: "JWT 解码器 - 免费在线工具",
  metaDescription: "解析 JWT Header 与 Payload，显示 exp/iat 过期状态，浏览器内解码。",
  instructions: [
    "粘贴 JWT Token，自动解码 Header 和 Payload 为可读 JSON。若含 exp/iat/nbf 声明，会显示可读时间与过期状态。",
    "Signature 部分仅展示，不做密码学验证。请勿将生产环境的敏感 Token 粘贴到不可信网站。",
  ],
  faq: [
    { q: "解码是否意味着 Token 有效？", a: "否。解码只能读取内容，无法验证签名是否被篡改。验证签名需要服务端密钥。" },
    { q: "数据会上传吗？", a: "不会。所有解码在浏览器内完成，Token 不会发送到任何服务器。" },
  ],
}

export const jwtDecoderPageEn: JwtDecoderPageMessages = {
  metaTitle: "JWT Decoder - Free Online Tool",
  metaDescription: "Decode JWT header and payload, show exp/iat status. Runs entirely in your browser.",
  instructions: [
    "Paste a JWT to decode header and payload as JSON. exp/iat/nbf claims show human-readable times and expiry status.",
    "Signature is displayed only — not cryptographically verified. Do not paste production tokens on untrusted sites.",
  ],
  faq: [
    { q: "Does decoding mean the token is valid?", a: "No. Decoding reads content only; signature verification requires server secrets." },
    { q: "Is my data uploaded?", a: "No. All decoding happens in your browser; tokens are never sent to a server." },
  ],
}

export const jwtDecoderPageJa: JwtDecoderPageMessages = {
  metaTitle: "JWT デコーダー - 無料オンラインツール",
  metaDescription: "JWT の Header/Payload を解析し、exp/iat 状態を表示。ブラウザ内でデコード。",
  instructions: [
    "JWT を貼り付けると Header/Payload が JSON で表示されます。exp/iat/nbf があれば時刻と期限状態も表示します。",
    "Signature は表示のみで暗号検証は行いません。本番 Token は信頼できないサイトに貼り付けないでください。",
  ],
  faq: [
    { q: "デコード = 有効な Token？", a: "いいえ。内容の読み取りのみで、署名の検証にはサーバー秘密鍵が必要です。" },
    { q: "データはアップロードされますか？", a: "いいえ。すべてブラウザ内で処理され、Token は送信されません。" },
  ],
}
