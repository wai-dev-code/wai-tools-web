/** UTF-8 文本 → 标准 Base64（不依赖已废弃的 unescape/escape） */
export function encodeBase64(text: string): string {
  const bytes = new TextEncoder().encode(text)
  let binary = ""
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i])
  }
  return btoa(binary)
}

/** 标准 Base64 → UTF-8 文本 */
export function decodeBase64(base64: string): string {
  let cleaned = cleanBase64(base64)
  const pad = cleaned.length % 4
  if (pad) cleaned += "=".repeat(4 - pad)
  const binary = atob(cleaned)
  const bytes = Uint8Array.from(binary, (c) => c.charCodeAt(0))
  return new TextDecoder().decode(bytes)
}

/** URL 安全 Base64 编码 */
export function encodeBase64Url(text: string): string {
  return encodeBase64(text).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
}

/** URL 安全 Base64 解码 */
export function decodeBase64Url(base64: string): string {
  let s = cleanBase64(base64).replace(/-/g, "+").replace(/_/g, "/")
  const pad = s.length % 4
  if (pad) s += "=".repeat(4 - pad)
  return decodeBase64(s)
}

/** 去除 Base64 中的空白与换行 */
export function cleanBase64(value: string): string {
  return value.replace(/\s/g, "")
}

/** 是否像 Base64 字符串 */
export function isLikelyBase64(value: string): boolean {
  const s = cleanBase64(value.trim())
  if (!s || s.length < 4) return false
  return /^[A-Za-z0-9+/_-]+=*$/.test(s)
}

export function validateBase64(value: string): void {
  decodeBase64(value)
}

/** 生成 Data URI */
export function toDataUri(text: string, mime = "text/plain;charset=utf-8"): string {
  return `data:${mime},${encodeBase64(text)}`
}

/** 从 Data URI 提取并解码内容 */
export function fromDataUri(uri: string): string {
  const trimmed = uri.trim()
  const match = trimmed.match(/^data:([^,]*?),([\s\S]+)$/i)
  if (!match) throw new Error("无效的 Data URI 格式")
  const payload = match[2].trim()
  if (match[1].includes(";base64") || isLikelyBase64(payload)) {
    return decodeBase64(payload)
  }
  return decodeURIComponent(payload)
}

/** Hex → Base64 */
export function hexToBase64(hex: string): string {
  const cleaned = hex.replace(/\s/g, "")
  if (!/^[0-9a-fA-F]*$/.test(cleaned) || cleaned.length % 2 !== 0) {
    throw new Error("无效的 Hex 字符串")
  }
  const bytes = cleaned.match(/.{2}/g)!.map((b) => parseInt(b, 16))
  let binary = ""
  for (const byte of bytes) {
    binary += String.fromCharCode(byte)
  }
  return btoa(binary)
}

/** Base64 → Hex */
export function base64ToHex(base64: string): string {
  const binary = atob(cleanBase64(base64))
  return Array.from(binary)
    .map((c) => c.charCodeAt(0).toString(16).padStart(2, "0"))
    .join("")
}

/** UTF-8 字节长度 */
export function getByteLength(text: string): number {
  return new TextEncoder().encode(text).length
}

/** 文本 → Hex */
export function textToHex(text: string): string {
  const bytes = new TextEncoder().encode(text)
  return Array.from(bytes)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("")
}

/** Hex → UTF-8 文本 */
export function hexToText(hex: string): string {
  const cleaned = hex.replace(/\s/g, "")
  if (!/^[0-9a-fA-F]*$/.test(cleaned) || cleaned.length % 2 !== 0) {
    throw new Error("无效的 Hex 字符串")
  }
  const bytes = Uint8Array.from(cleaned.match(/.{2}/g)!.map((b) => parseInt(b, 16)))
  return new TextDecoder().decode(bytes)
}
