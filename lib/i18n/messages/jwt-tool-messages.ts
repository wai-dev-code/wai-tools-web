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
  signatureHint: "Signature（未验证）",
  copy: "复制",
  claims: { exp: "过期时间 (exp)", iat: "签发时间 (iat)", nbf: "生效时间 (nbf)" },
  status: { expired: "已过期", valid: "有效", notYetValid: "尚未生效" },
  expiredWarning: "此 Token 的 exp 已过期（仅基于 Payload 判断，未验证签名）。",
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
  signatureHint: "Signature (not verified)",
  copy: "Copy",
  claims: { exp: "Expires (exp)", iat: "Issued at (iat)", nbf: "Not before (nbf)" },
  status: { expired: "Expired", valid: "Valid", notYetValid: "Not yet valid" },
  expiredWarning: "This token's exp has passed (payload only — signature not verified).",
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
  signatureHint: "Signature（未検証）",
  copy: "コピー",
  claims: { exp: "有効期限 (exp)", iat: "発行時刻 (iat)", nbf: "開始時刻 (nbf)" },
  status: { expired: "期限切れ", valid: "有効", notYetValid: "未発効" },
  expiredWarning: "この Token の exp は期限切れです（Payload のみ、署名は未検証）。",
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
