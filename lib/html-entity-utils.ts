export type HtmlEntityMode = "encode" | "decode"

const NAMED_ENTITIES: Record<string, string> = {
  amp: "&",
  lt: "<",
  gt: ">",
  quot: '"',
  apos: "'",
  nbsp: "\u00a0",
}

const ENCODE_MAP: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
}

export function encodeHtmlEntities(text: string, encodeAll = false): string {
  if (!encodeAll) {
    return text.replace(/[&<>"']/g, (ch) => ENCODE_MAP[ch] ?? ch)
  }
  return [...text]
    .map((ch) => {
      const code = ch.charCodeAt(0)
      if (code > 127) return `&#${code};`
      return ENCODE_MAP[ch] ?? ch
    })
    .join("")
}

export function decodeHtmlEntities(text: string): string {
  return text.replace(/&(#x?[0-9a-fA-F]+|[a-zA-Z]+);/g, (match, entity: string) => {
    if (entity.startsWith("#x") || entity.startsWith("#X")) {
      const code = parseInt(entity.slice(2), 16)
      return Number.isFinite(code) ? String.fromCodePoint(code) : match
    }
    if (entity.startsWith("#")) {
      const code = parseInt(entity.slice(1), 10)
      return Number.isFinite(code) ? String.fromCodePoint(code) : match
    }
    return NAMED_ENTITIES[entity.toLowerCase()] ?? match
  })
}

export function transformHtmlEntity(
  input: string,
  mode: HtmlEntityMode,
  encodeAll = false,
): { output: string; error?: string } {
  if (!input) return { output: "" }
  try {
    const output =
      mode === "encode" ? encodeHtmlEntities(input, encodeAll) : decodeHtmlEntities(input)
    return { output }
  } catch {
    return { output: "", error: "invalid" }
  }
}
