/** UTF-8 文本 → 标准 Base64（不依赖已废弃的 unescape/escape） */
export function encodeBase64(text: string): string {
  const bytes = new TextEncoder().encode(text)
  return encodeBytesAsBase64(bytes)
}

/** 标准 Base64 → UTF-8 文本 */
export function decodeBase64(base64: string): string {
  const bytes = decodeBase64ToBytes(base64)
  return new TextDecoder().decode(bytes)
}

/** 二进制 → Base64 */
export function encodeBytesAsBase64(bytes: Uint8Array, urlSafe = false): string {
  let binary = ""
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i])
  }
  const encoded = btoa(binary)
  if (!urlSafe) return encoded
  return encoded.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
}

/** Base64 → 二进制（兼容 atob 严格模式无法解码的 padding 场景） */
export function decodeBase64ToBytes(base64: string): Uint8Array {
  let cleaned = cleanBase64(base64).replace(/-/g, "+").replace(/_/g, "/")
  const pad = cleaned.length % 4
  if (pad) cleaned += "=".repeat(4 - pad)

  try {
    const binary = atob(cleaned)
    return Uint8Array.from(binary, (c) => c.charCodeAt(0))
  } catch {
    return decodeBase64ToBytesManual(cleaned)
  }
}

function decodeBase64ToBytesManual(cleaned: string): Uint8Array {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
  const lookup = new Uint8Array(256).fill(255)
  for (let i = 0; i < alphabet.length; i++) lookup[alphabet.charCodeAt(i)] = i

  const placeHolders = cleaned.endsWith("==") ? 2 : cleaned.endsWith("=") ? 1 : 0
  const outputLen = Math.floor((cleaned.length * 3) / 4) - placeHolders
  const bytes = new Uint8Array(Math.max(0, outputLen))

  let buffer = 0
  let bits = 0
  let index = 0

  for (let i = 0; i < cleaned.length; i++) {
    const char = cleaned.charCodeAt(i)
    if (char === 61) break
    const value = lookup[char]
    if (value === 255) throw new Error("无效的 Base64 字符")
    buffer = (buffer << 6) | value
    bits += 6
    if (bits >= 8) {
      bits -= 8
      bytes[index++] = (buffer >> bits) & 0xff
    }
  }

  return bytes.subarray(0, index)
}

/** URL 安全 Base64 编码 */
export function encodeBase64Url(text: string): string {
  return encodeBase64(text).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
}

/** URL 安全 Base64 解码 */
export function decodeBase64Url(base64: string): string {
  return decodeBase64(base64)
}

/** 去除 Base64 中的空白与换行 */
export function cleanBase64(value: string): string {
  return value.replace(/\s/g, "")
}

export type Base64InputKind = "empty" | "text" | "base64" | "base64url" | "hex" | "data-uri"

/** 识别输入类型 */
export function detectBase64Input(value: string): Base64InputKind {
  const trimmed = value.trim()
  if (!trimmed) return "empty"
  if (trimmed.startsWith("data:")) return "data-uri"

  const hexCleaned = trimmed.replace(/\s/g, "")
  if (/^[0-9a-fA-F]+$/.test(hexCleaned) && hexCleaned.length >= 2 && hexCleaned.length % 2 === 0) {
    return "hex"
  }

  const cleaned = cleanBase64(trimmed)
  if (/^[A-Za-z0-9_-]+=*$/.test(cleaned) && (cleaned.includes("-") || cleaned.includes("_"))) {
    return "base64url"
  }
  if (isLikelyBase64(trimmed)) return "base64"
  return "text"
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

export type SmartConvertResult = {
  output: string
  action: string
  kind: Base64InputKind
}

/** 智能识别并转换 */
export function smartConvert(input: string, urlSafe = false): SmartConvertResult {
  const kind = detectBase64Input(input)
  const trimmed = input.trim()

  if (kind === "empty") throw new Error("源数据为空")

  if (kind === "data-uri") {
    return { output: fromDataUri(trimmed), action: "已从 Data URI 解码", kind }
  }

  if (kind === "hex") {
    return { output: hexToText(trimmed), action: "已从 Hex 解码", kind }
  }

  if (kind === "base64" || kind === "base64url") {
    const useUrl = kind === "base64url" || urlSafe
    return {
      output: useUrl ? decodeBase64Url(trimmed) : decodeBase64(trimmed),
      action: "已自动解码",
      kind,
    }
  }

  return {
    output: urlSafe ? encodeBase64Url(input) : encodeBase64(input),
    action: "已自动编码",
    kind,
  }
}

/** 生成 Data URI */
export function toDataUri(text: string, mime = "text/plain;charset=utf-8"): string {
  return `data:${mime};base64,${encodeBase64(text)}`
}

/** 从 Data URI 提取并解码内容（文本） */
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

/** 从 Data URI 提取 MIME */
export function getMimeFromDataUri(uri: string): string | null {
  const match = uri.trim().match(/^data:([^,]*?),/i)
  if (!match) return null
  const header = match[1].split(";")[0].trim()
  return header || null
}

/** Hex → Base64 */
export function hexToBase64(hex: string): string {
  const cleaned = hex.replace(/\s/g, "")
  if (!/^[0-9a-fA-F]*$/.test(cleaned) || cleaned.length % 2 !== 0) {
    throw new Error("无效的 Hex 字符串")
  }
  const bytes = Uint8Array.from(cleaned.match(/.{2}/g)!.map((b) => parseInt(b, 16)))
  return encodeBytesAsBase64(bytes)
}

/** Base64 → Hex */
export function base64ToHex(base64: string): string {
  const bytes = decodeBase64ToBytes(base64)
  return Array.from(bytes)
    .map((b) => b.toString(16).padStart(2, "0"))
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

/** 根据魔数推断 MIME */
export function sniffMimeFromBytes(bytes: Uint8Array): string {
  if (bytes.length >= 8 && bytes[0] === 0x89 && bytes[1] === 0x50 && bytes[2] === 0x4e && bytes[3] === 0x47) {
    return "image/png"
  }
  if (bytes.length >= 3 && bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff) {
    return "image/jpeg"
  }
  if (bytes.length >= 6 && bytes[0] === 0x47 && bytes[1] === 0x49 && bytes[2] === 0x46) {
    return "image/gif"
  }
  if (
    bytes.length >= 12 &&
    bytes[0] === 0x52 &&
    bytes[1] === 0x49 &&
    bytes[2] === 0x46 &&
    bytes[3] === 0x46 &&
    bytes[8] === 0x57 &&
    bytes[9] === 0x45 &&
    bytes[10] === 0x42 &&
    bytes[11] === 0x50
  ) {
    return "image/webp"
  }
  if (bytes.length >= 4 && bytes[0] === 0x25 && bytes[1] === 0x50 && bytes[2] === 0x44 && bytes[3] === 0x46) {
    return "application/pdf"
  }
  return "application/octet-stream"
}

export function isImageMime(mime: string): boolean {
  return mime.startsWith("image/")
}

/** Base64 → Blob */
export function decodeBase64ToBlob(base64: string, mime?: string): Blob {
  const bytes = decodeBase64ToBytes(base64)
  const type = mime ?? sniffMimeFromBytes(bytes)
  return new Blob([bytes], { type })
}

/** 获取可用于 img src 的预览 URL（data URI） */
export function getImagePreviewDataUri(value: string): string | null {
  const trimmed = value.trim()
  if (!trimmed) return null

  if (trimmed.startsWith("data:")) {
    const mime = getMimeFromDataUri(trimmed)
    if (mime && isImageMime(mime)) return trimmed
    return null
  }

  if (!isLikelyBase64(trimmed)) return null

  try {
    const bytes = decodeBase64ToBytes(trimmed)
    const mime = sniffMimeFromBytes(bytes)
    if (!isImageMime(mime)) return null
    const b64 = encodeBytesAsBase64(bytes)
    return `data:${mime};base64,${b64}`
  } catch {
    return null
  }
}

/** 格式化字节大小 */
export function formatByteSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`
}

export type ConvertMode =
  | "auto"
  | "text-to-datauri"
  | "datauri-to-text"
  | "text-to-hex"
  | "hex-to-text"
  | "text-to-base64"
  | "base64-to-text"
  | "base64-to-hex"
  | "hex-to-base64"

export const CONVERT_MODE_LABELS: Record<ConvertMode, string> = {
  auto: "自动识别",
  "text-to-datauri": "文本 → Data URI",
  "datauri-to-text": "Data URI → 文本",
  "text-to-hex": "文本 → Hex",
  "hex-to-text": "Hex → 文本",
  "text-to-base64": "文本 → Base64",
  "base64-to-text": "Base64 → 文本",
  "base64-to-hex": "Base64 → Hex",
  "hex-to-base64": "Hex → Base64",
}

/** 根据输入推断最合适的转换方向 */
export function inferConvertMode(input: string): ConvertMode {
  switch (detectBase64Input(input)) {
    case "data-uri":
      return "datauri-to-text"
    case "hex":
      return "hex-to-text"
    case "base64":
    case "base64url":
      return "base64-to-hex"
    case "text":
      return "text-to-datauri"
    default:
      return "text-to-base64"
  }
}

/** 执行格式转换 */
export function applyFormatConvert(input: string, mode: ConvertMode): string {
  const trimmed = input.trim()
  if (!trimmed) return ""

  const effective = mode === "auto" ? inferConvertMode(trimmed) : mode

  switch (effective) {
    case "text-to-datauri":
      return toDataUri(trimmed)
    case "datauri-to-text":
      return fromDataUri(trimmed)
    case "text-to-hex":
      return textToHex(trimmed)
    case "hex-to-text":
      return hexToText(trimmed)
    case "text-to-base64":
      return encodeBase64(trimmed)
    case "base64-to-text":
      return decodeBase64(trimmed)
    case "base64-to-hex":
      return base64ToHex(trimmed)
    case "hex-to-base64":
      return hexToBase64(trimmed)
    default:
      return ""
  }
}

export type FileProcessResult = {
  output: string
  label: string
  mime: string | null
  byteSize: number
}

/** 文件模块：自动识别并处理 */
export function applyFileAutoProcess(input: string, urlSafe = false): FileProcessResult {
  const trimmed = input.trim()
  if (!trimmed) throw new Error("源数据为空")

  const kind = detectBase64Input(trimmed)

  if (kind === "text") {
    const bytes = new TextEncoder().encode(trimmed)
    return {
      output: encodeBytesAsBase64(bytes, urlSafe),
      label: "文本 → Base64",
      mime: "text/plain;charset=utf-8",
      byteSize: bytes.length,
    }
  }

  if (kind === "data-uri") {
    const mime = getMimeFromDataUri(trimmed)
    const match = trimmed.match(/^data:([^,]*?),([\s\S]+)$/i)
    if (!match) throw new Error("无效的 Data URI 格式")
    const payload = match[2].trim()
    const bytes = match[1].includes(";base64") || isLikelyBase64(payload)
      ? decodeBase64ToBytes(payload)
      : new TextEncoder().encode(decodeURIComponent(payload))
    return {
      output: encodeBytesAsBase64(bytes, urlSafe),
      label: `Data URI → Base64 · ${mime ?? "未知类型"}`,
      mime,
      byteSize: bytes.length,
    }
  }

  if (kind === "hex") {
    const bytes = Uint8Array.from(
      trimmed.replace(/\s/g, "").match(/.{2}/g)!.map((b) => parseInt(b, 16))
    )
    const mime = sniffMimeFromBytes(bytes)
    return {
      output: encodeBytesAsBase64(bytes, urlSafe),
      label: `Hex → Base64 · ${mime}`,
      mime,
      byteSize: bytes.length,
    }
  }

  if (kind === "base64" || kind === "base64url") {
    const bytes = decodeBase64ToBytes(trimmed)
    const mime = sniffMimeFromBytes(bytes)
    return {
      output: encodeBytesAsBase64(bytes, urlSafe),
      label: `Base64 文件 · ${mime} · ${formatByteSize(bytes.length)}`,
      mime,
      byteSize: bytes.length,
    }
  }

  throw new Error("无法识别的输入格式")
}
