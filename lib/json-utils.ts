export interface JsonNodeStats {
  objects: number
  arrays: number
  keys: number
}

export interface JsonSizeStats {
  originalBytes: number
  minifiedBytes: number | null
  originalLabel: string
  minifiedLabel: string
  savedPercent: number | null
}

export interface JsonParseErrorInfo {
  line: number
  column: number
  message: string
  position: number
}

export interface JsonSearchMatch {
  path: string
  value: unknown
  line?: number
  column?: number
}

export interface LineHighlight {
  line: number
  startCol: number
  endCol: number
  kind: "search" | "error"
}

export function countJsonNodes(value: unknown): JsonNodeStats {
  const stats: JsonNodeStats = { objects: 0, arrays: 0, keys: 0 }

  function walk(v: unknown) {
    if (Array.isArray(v)) {
      stats.arrays++
      v.forEach(walk)
      return
    }
    if (v !== null && typeof v === "object") {
      stats.objects++
      for (const [key, child] of Object.entries(v as Record<string, unknown>)) {
        stats.keys++
        void key
        walk(child)
      }
    }
  }

  walk(value)
  return stats
}

export function formatByteSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`
  const kb = bytes / 1024
  if (kb < 1024) return `${kb.toFixed(1)} KB`
  return `${(kb / 1024).toFixed(2)} MB`
}

export function getJsonSizeStats(text: string, parsed: unknown | null): JsonSizeStats {
  const originalBytes = new TextEncoder().encode(text).length
  if (parsed === null) {
    return {
      originalBytes,
      minifiedBytes: null,
      originalLabel: formatByteSize(originalBytes),
      minifiedLabel: "—",
      savedPercent: null,
    }
  }

  const minified = JSON.stringify(parsed)
  const minifiedBytes = new TextEncoder().encode(minified).length
  const savedPercent =
    originalBytes > 0 ? Math.round((1 - minifiedBytes / originalBytes) * 100) : 0

  return {
    originalBytes,
    minifiedBytes,
    originalLabel: formatByteSize(originalBytes),
    minifiedLabel: formatByteSize(minifiedBytes),
    savedPercent,
  }
}

function positionToLineColumn(text: string, position: number): { line: number; column: number } {
  let line = 1
  let column = 1
  const pos = Math.max(0, Math.min(position, text.length))

  for (let i = 0; i < pos; i++) {
    if (text[i] === "\n") {
      line++
      column = 1
    } else {
      column++
    }
  }

  return { line, column }
}

function extractErrorPosition(message: string): number | null {
  const positionMatch = message.match(/position\s+(\d+)/i)
  if (positionMatch) return Number(positionMatch[1])

  const lineColMatch = message.match(/line\s+(\d+)\s+column\s+(\d+)/i)
  if (lineColMatch) return null

  return null
}

function extractLineColumn(message: string): { line: number; column: number } | null {
  const lineColMatch = message.match(/line\s+(\d+)\s+column\s+(\d+)/i)
  if (!lineColMatch) return null
  return { line: Number(lineColMatch[1]), column: Number(lineColMatch[2]) }
}

function cleanParseMessage(message: string): string {
  return message
    .replace(/^JSON Parse error:\s*/i, "")
    .replace(/\s*in JSON at position \d+$/i, "")
    .replace(/\s*at position \d+$/i, "")
    .trim()
}

function trimmedBounds(text: string): { trimmed: string; start: number } {
  const withoutBom = text.replace(/^\uFEFF/, "")
  const start = withoutBom.search(/\S/)
  if (start === -1) return { trimmed: "", start: 0 }
  const end = withoutBom.search(/\S\s*$/)
  const trimmed = withoutBom.slice(start, end === -1 ? undefined : end + 1)
  return { trimmed, start }
}

export function parseJsonDetailed(
  text: string
): { ok: true; value: unknown } | { ok: false; error: JsonParseErrorInfo } {
  const { trimmed, start } = trimmedBounds(text)
  if (!trimmed) {
    return {
      ok: false,
      error: { line: 1, column: 1, message: "内容为空", position: 0 },
    }
  }

  try {
    return { ok: true, value: JSON.parse(trimmed) }
  } catch (e) {
    const rawMessage = e instanceof Error ? e.message : "JSON 解析失败"
    const lineColFromMsg = extractLineColumn(rawMessage)
    const positionInTrimmed = extractErrorPosition(rawMessage)
    const absolutePosition =
      positionInTrimmed !== null ? start + positionInTrimmed : start

    let line: number
    let column: number

    if (lineColFromMsg) {
      line = lineColFromMsg.line
      column = lineColFromMsg.column
    } else {
      const lc = positionToLineColumn(text, absolutePosition)
      line = lc.line
      column = lc.column
    }

    return {
      ok: false,
      error: {
        line,
        column,
        message: cleanParseMessage(rawMessage) || "Unexpected token",
        position: absolutePosition,
      },
    }
  }
}

export function searchJson(data: unknown, query: string): JsonSearchMatch[] {
  const q = query.trim()
  if (!q) return []

  if (q.includes(".")) {
    const match = resolveJsonPath(data, q)
    return match ? [match] : []
  }

  const results: JsonSearchMatch[] = []
  walkJson(data, "", (path, key, value) => {
    if (key === q) {
      results.push({ path: path ? `${path}.${key}` : key, value })
    }
  })
  return results
}

function resolveJsonPath(data: unknown, path: string): JsonSearchMatch | null {
  const parts = path.split(".").filter(Boolean)
  let current: unknown = data
  let currentPath = ""

  for (const part of parts) {
    if (current === null || typeof current !== "object") return null

    if (Array.isArray(current)) {
      const index = Number(part)
      if (!Number.isInteger(index) || index < 0 || index >= current.length) return null
      current = current[index]
      currentPath = currentPath ? `${currentPath}[${index}]` : `[${index}]`
      continue
    }

    const record = current as Record<string, unknown>
    if (!(part in record)) return null
    current = record[part]
    currentPath = currentPath ? `${currentPath}.${part}` : part
  }

  if (current === undefined) return null
  return { path: currentPath || parts.join("."), value: current }
}

function walkJson(
  value: unknown,
  path: string,
  visit: (path: string, key: string, value: unknown) => void
) {
  if (Array.isArray(value)) {
    value.forEach((item, index) => {
      const nextPath = path ? `${path}[${index}]` : `[${index}]`
      if (item !== null && typeof item === "object") {
        walkJson(item, nextPath, visit)
      }
    })
    return
  }

  if (value !== null && typeof value === "object") {
    for (const [key, child] of Object.entries(value as Record<string, unknown>)) {
      visit(path, key, child)
      if (child !== null && typeof child === "object") {
        const nextPath = path ? `${path}.${key}` : key
        walkJson(child, nextPath, visit)
      }
    }
  }
}

function escapeRegExp(text: string): string {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}

function findKeyLines(text: string, key: string, fromLine = 0): number[] {
  const lines = text.split("\n")
  const pattern = new RegExp(`"${escapeRegExp(key)}"\\s*:`)
  const hits: number[] = []

  for (let i = fromLine; i < lines.length; i++) {
    if (pattern.test(lines[i])) hits.push(i + 1)
  }

  return hits
}

function lineColumnToIndex(text: string, line: number, column: number): number {
  const lines = text.split("\n")
  let index = 0
  for (let i = 0; i < line - 1 && i < lines.length; i++) {
    index += lines[i].length + 1
  }
  index += Math.max(0, column - 1)
  return index
}

export function buildSearchHighlights(
  text: string,
  matches: JsonSearchMatch[],
  query: string
): LineHighlight[] {
  if (!query.trim() || matches.length === 0) return []

  const highlights: LineHighlight[] = []
  const q = query.trim()

  if (q.includes(".")) {
    const parts = q.split(".").filter(Boolean)
    const lastKey = parts[parts.length - 1]
    let fromLine = 0

    for (let i = 0; i < parts.length - 1; i++) {
      const lines = findKeyLines(text, parts[i], fromLine)
      if (lines.length === 0) break
      fromLine = lines[0]
    }

    const targetLines = findKeyLines(text, lastKey, fromLine)
    for (const line of targetLines.slice(0, 1)) {
      const lineText = text.split("\n")[line - 1] ?? ""
      const match = lineText.match(new RegExp(`"${escapeRegExp(lastKey)}"\\s*:`))
      if (match?.index !== undefined) {
        highlights.push({
          line,
          startCol: match.index + 1,
          endCol: match.index + match[0].length + 1,
          kind: "search",
        })
      }
    }
    return highlights
  }

  const key = q
  const usedLines = new Set<number>()
  for (const _match of matches) {
    const lines = findKeyLines(text, key)
    for (const line of lines) {
      if (usedLines.has(line)) continue
      usedLines.add(line)
      const lineText = text.split("\n")[line - 1] ?? ""
      const re = new RegExp(`"${escapeRegExp(key)}"\\s*:`)
      const hit = lineText.match(re)
      if (hit?.index !== undefined) {
        highlights.push({
          line,
          startCol: hit.index + 1,
          endCol: hit.index + hit[0].length + 1,
          kind: "search",
        })
      }
    }
  }

  return highlights
}

export function buildErrorHighlight(error: JsonParseErrorInfo, text: string): LineHighlight[] {
  const lines = text.split("\n")
  const lineText = lines[error.line - 1] ?? ""
  const startCol = error.column
  let endCol = startCol

  const rest = lineText.slice(error.column - 1)
  const tokenMatch = rest.match(/^(\s*[^\s,\]}]+|\s+)/)
  if (tokenMatch) {
    endCol = startCol + tokenMatch[0].length
  } else {
    endCol = Math.min(lineText.length + 1, startCol + 1)
  }

  return [{ line: error.line, startCol, endCol, kind: "error" }]
}

export function formatSearchValue(value: unknown): string {
  if (typeof value === "string") return `"${value}"`
  return JSON.stringify(value)
}

export function scrollEditorToLine(textarea: HTMLTextAreaElement, line: number) {
  const lineHeight = parseInt(getComputedStyle(textarea).lineHeight, 10) || 21
  textarea.scrollTop = Math.max(0, (line - 3) * lineHeight)
}

export const MAX_JSON_BYTES = 5 * 1024 * 1024

export function getTextByteSize(text: string): number {
  return new TextEncoder().encode(text).length
}

function parseJsonPathTokens(expression: string): (string | number)[] {
  let rest = expression.trim()
  if (!rest.startsWith("$")) {
    throw new Error("JSONPath 格式无效")
  }
  rest = rest.slice(1)
  if (rest.startsWith(".")) rest = rest.slice(1)

  const tokens: (string | number)[] = []
  while (rest.length > 0) {
    if (rest.startsWith(".")) {
      rest = rest.slice(1)
    }
    if (!rest) break

    if (rest.startsWith("[")) {
      const match = rest.match(/^\[(\d+)\]/)
      if (!match) throw new Error(`无效 JSONPath: ${expression}`)
      tokens.push(Number(match[1]))
      rest = rest.slice(match[0].length)
    } else {
      const match = rest.match(/^([a-zA-Z_][\w-]*)/)
      if (!match) throw new Error(`无效 JSONPath: ${expression}`)
      tokens.push(match[1])
      rest = rest.slice(match[1].length)
    }
  }
  return tokens
}

/** 用户输入可省略 $ 与开头的 .，如 user.name、[0].name */
export function normalizeJsonPathInput(input: string): string {
  const q = input.trim().replace(/^\./, "")
  if (!q) return "$"
  if (q.startsWith("$")) {
    const rest = q.slice(1).replace(/^\./, "")
    if (!rest) return "$"
    if (rest.startsWith("[")) return `$${rest}`
    return `$.${rest}`
  }
  if (q.startsWith("[")) return `$${q}`
  return `$.${q}`
}

/** 粘贴带 $ 前缀的路径时，只保留用户需编辑的部分 */
export function stripJsonPathPrefix(input: string): string {
  let q = input.trim()
  if (q.startsWith("$.")) return q.slice(2)
  if (q.startsWith("$")) return q.slice(1).replace(/^\./, "")
  if (q.startsWith(".")) return q.slice(1)
  return q
}

export function evaluateJsonPath(data: unknown, expression: string): unknown {
  const normalized = normalizeJsonPathInput(expression)
  const tokens = parseJsonPathTokens(normalized)
  if (tokens.length === 0) return data

  let current: unknown = data

  for (const token of tokens) {
    if (current === null || current === undefined) {
      throw new Error(`路径无法解析：中间值为 null/undefined`)
    }
    if (typeof token === "number") {
      if (!Array.isArray(current)) {
        throw new Error(`路径无法解析：期望数组，可使用 [${token}] 访问`)
      }
      if (token < 0 || token >= current.length) {
        throw new Error(`数组索引 [${token}] 越界（长度 ${current.length}）`)
      }
      current = current[token]
    } else {
      if (Array.isArray(current)) {
        throw new Error(`当前是数组，请用 [0].${token} 等形式访问（如 [0].${token}）`)
      }
      if (typeof current !== "object") {
        throw new Error(`路径无法解析：期望对象`)
      }
      current = (current as Record<string, unknown>)[token]
    }
    if (current === undefined) {
      throw new Error(`路径 ${normalized} 不存在`)
    }
  }

  return current
}

export function formatJsonPathResult(value: unknown): string {
  if (typeof value === "string") return value
  return JSON.stringify(value)
}

export { lineColumnToIndex }
