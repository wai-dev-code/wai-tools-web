function minifyJsonText(text: string): string {
  const trimmed = text.trim().replace(/^\uFEFF/, "")
  try {
    return JSON.stringify(JSON.parse(trimmed))
  } catch {
    return trimmed.replace(/\r\n?|\n/g, "")
  }
}

/**
 * Escape：压缩 JSON 并输出带外层双引号的代码字符串。
 * 例：{"name":"Tom"} → "{\"name\":\"Tom\"}"
 */
export function escapeJsonForCodeQuoted(text: string): string {
  const payload = minifyJsonText(text)
  if (!payload) return ""
  return JSON.stringify(payload)
}

/** @deprecated 使用 escapeJsonForCodeQuoted */
export function escapeJsonForCode(text: string): string {
  const quoted = escapeJsonForCodeQuoted(text)
  if (!quoted) return ""
  return quoted.slice(1, -1)
}

/**
 * Unescape：从带外层双引号的转义字符串还原为格式化 JSON。
 */
export function unescapeJsonFromCode(text: string): string {
  const trimmed = text.trim().replace(/^\uFEFF/, "")
  if (!trimmed) return ""

  let raw: string
  if (trimmed.startsWith('"') && trimmed.endsWith('"')) {
    raw = JSON.parse(trimmed) as string
  } else {
    try {
      raw = JSON.parse(`"${trimmed}"`) as string
    } catch {
      throw new Error("无法解析转义内容，请检查格式（需为带双引号的转义字符串）")
    }
  }

  try {
    return JSON.stringify(JSON.parse(raw), null, 2)
  } catch {
    return raw
  }
}
