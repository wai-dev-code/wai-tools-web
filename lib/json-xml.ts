import { isLikelyYaml, yamlToJson } from "@/lib/json-yaml"

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")
}

function sanitizeTagName(name: string): string {
  const cleaned = name.replace(/[^a-zA-Z0-9_\-.]/g, "_")
  return cleaned && !/^\d/.test(cleaned) ? cleaned : `_${cleaned || "item"}`
}

function valueToXml(value: unknown, tagName: string, indent = 0): string {
  const pad = "  ".repeat(indent)
  const tag = sanitizeTagName(tagName)

  if (value === null || value === undefined) {
    return `${pad}<${tag}/>\n`
  }

  if (typeof value === "object" && Array.isArray(value)) {
    if (value.length === 0) return `${pad}<${tag}></${tag}>\n`
    return value.map((item) => valueToXml(item, tag, indent)).join("")
  }

  if (typeof value === "object") {
    const entries = Object.entries(value as Record<string, unknown>)
    if (entries.length === 0) return `${pad}<${tag}></${tag}>\n`
    const inner = entries.map(([k, v]) => valueToXml(v, k, indent + 1)).join("")
    return `${pad}<${tag}>\n${inner}${pad}</${tag}>\n`
  }

  if (typeof value === "boolean" || typeof value === "number") {
    return `${pad}<${tag}>${value}</${tag}>\n`
  }

  return `${pad}<${tag}>${escapeXml(String(value))}</${tag}>\n`
}

export function jsonToXml(json: unknown, rootName = "root"): string {
  let body: string
  if (Array.isArray(json)) {
    const inner = json.map((item) => valueToXml(item, "item", 1)).join("").trimEnd()
    body = `<${rootName}>\n${inner}\n</${rootName}>`
  } else {
    body = valueToXml(json, rootName, 0).trimEnd()
  }
  return `<?xml version="1.0" encoding="UTF-8"?>\n${body}`
}

function xmlElementToJson(node: Element): unknown {
  const result: Record<string, unknown> = {}

  if (node.attributes.length > 0) {
    const attrs: Record<string, string> = {}
    for (let i = 0; i < node.attributes.length; i++) {
      const attr = node.attributes.item(i)!
      attrs[attr.name] = attr.value
    }
    result["@attributes"] = attrs
  }

  const childElements = Array.from(node.children)
  const textParts: string[] = []

  for (const child of node.childNodes) {
    if (child.nodeType === Node.TEXT_NODE || child.nodeType === Node.CDATA_SECTION_NODE) {
      const t = child.textContent?.trim()
      if (t) textParts.push(t)
    }
  }

  for (const child of childElements) {
    const key = child.tagName
    const val = xmlElementToJson(child)
    if (result[key] === undefined) {
      result[key] = val
    } else if (Array.isArray(result[key])) {
      ;(result[key] as unknown[]).push(val)
    } else {
      result[key] = [result[key], val]
    }
  }

  const text = textParts.join(" ").trim()

  if (childElements.length === 0) {
    if (text) {
      if (Object.keys(result).length === 0) return text
      result["#text"] = text
      return result
    }
    if (Object.keys(result).length === 0) return ""
    return result
  }

  if (text) result["#text"] = text
  return result
}

export function xmlToJson(xmlString: string): unknown {
  const parser = new DOMParser()
  const doc = parser.parseFromString(xmlString.trim(), "application/xml")
  const err = doc.querySelector("parsererror")
  if (err) {
    throw new Error(err.textContent?.trim() || "XML 解析失败")
  }
  const root = doc.documentElement
  if (!root) throw new Error("XML 内容为空")
  const json = xmlElementToJson(root)
  if (typeof json === "object" && json !== null && !Array.isArray(json)) {
    const { ["@attributes"]: _a, ...rest } = json as Record<string, unknown>
    const keys = Object.keys(rest)
    if (keys.length === 1 && keys[0] === "#text") return { [root.tagName]: rest["#text"] }
    return { [root.tagName]: json }
  }
  return { [root.tagName]: json }
}

export function parseJson(text: string): unknown {
  const trimmed = text.trim().replace(/^\uFEFF/, "")
  if (!trimmed) throw new Error("内容为空")
  return JSON.parse(trimmed)
}

/** 尝试解析为 JSON；XML 或无效内容返回 null */
export function tryParseJson(text: string): unknown | null {
  if (!text.trim() || isLikelyXml(text)) return null
  try {
    return parseJson(text)
  } catch {
    return null
  }
}

export function formatJson(value: unknown, indent = 2): string {
  return JSON.stringify(value, null, indent)
}

export function minifyJson(value: unknown): string {
  return JSON.stringify(value)
}

export function isLikelyXml(text: string): boolean {
  const t = text.trim()
  return t.startsWith("<") && (t.includes("</") || t.endsWith("/>") || t.startsWith("<?xml"))
}

/** 递归按 key 排序对象字段 */
export function sortJsonKeys(value: unknown, order: "asc" | "desc" = "asc"): unknown {
  if (Array.isArray(value)) {
    return value.map((item) => sortJsonKeys(item, order))
  }
  if (value !== null && typeof value === "object") {
    const keys = Object.keys(value as Record<string, unknown>).sort((a, b) =>
      order === "asc" ? a.localeCompare(b) : b.localeCompare(a)
    )
    return keys.reduce<Record<string, unknown>>((acc, key) => {
      acc[key] = sortJsonKeys((value as Record<string, unknown>)[key], order)
      return acc
    }, {})
  }
  return value
}

export function parseInputToJson(text: string, type: "json" | "xml" | "yaml"): unknown {
  if (type === "yaml" || isLikelyYaml(text)) {
    return yamlToJson(text)
  }
  if (type === "xml" || isLikelyXml(text)) {
    return xmlToJson(text)
  }
  return parseJson(text)
}
