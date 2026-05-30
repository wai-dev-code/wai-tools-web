import { parse as parseYaml, stringify as stringifyYaml } from "yaml"

export function isLikelyYaml(text: string): boolean {
  const t = text.trim()
  if (!t || t.startsWith("{") || t.startsWith("[") || t.startsWith("<")) return false
  return /^[\w-]+:\s*.+/m.test(t) || t.startsWith("- ")
}

export function jsonToYaml(value: unknown): string {
  return stringifyYaml(value, { indent: 2, lineWidth: 0 })
}

export function yamlToJson(text: string): unknown {
  const trimmed = text.trim().replace(/^\uFEFF/, "")
  if (!trimmed) throw new Error("内容为空")
  const parsed = parseYaml(trimmed)
  if (parsed === undefined) throw new Error("YAML 内容为空")
  return parsed
}
