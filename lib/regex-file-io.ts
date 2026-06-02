import type { RegexMatchInfo } from "@/lib/regex-utils"
import { formatMatchResultsForCopy, formatMatchValuesExport } from "@/lib/regex-utils"

export type RegexUploadFormat = "txt" | "csv" | "json"

export function detectUploadFormat(filename: string): RegexUploadFormat | null {
  const ext = filename.split(".").pop()?.toLowerCase()
  if (ext === "txt") return "txt"
  if (ext === "csv") return "csv"
  if (ext === "json") return "json"
  return null
}

export async function readRegexTestFile(file: File): Promise<string> {
  const format = detectUploadFormat(file.name)
  const raw = await file.text()
  if (format === "json") {
    try {
      const parsed = JSON.parse(raw) as unknown
      if (typeof parsed === "string") return parsed
      if (Array.isArray(parsed)) {
        return parsed.map((item) => (typeof item === "string" ? item : JSON.stringify(item))).join("\n")
      }
      if (parsed && typeof parsed === "object" && "text" in parsed && typeof (parsed as { text: string }).text === "string") {
        return (parsed as { text: string }).text
      }
      return JSON.stringify(parsed, null, 2)
    } catch {
      return raw
    }
  }
  if (format === "csv") {
    return raw
      .split(/\r?\n/)
      .map((line) => line.split(",")[0]?.replace(/^"|"$/g, "") ?? "")
      .filter(Boolean)
      .join("\n")
  }
  return raw
}

export function buildExportTxt(matches: RegexMatchInfo[]): string {
  const detailed = formatMatchResultsForCopy(matches)
  if (detailed) return detailed
  return formatMatchValuesExport(matches, "lines")
}

export function buildExportJson(matches: RegexMatchInfo[]): string {
  return JSON.stringify(
    matches.map((m) => ({
      matchNumber: m.matchNumber,
      value: m.value,
      index: m.index,
      length: m.length,
      line: m.line,
      column: m.column,
      groups: m.groups,
    })),
    null,
    2
  )
}

export function downloadTextFile(filename: string, content: string, mime = "text/plain;charset=utf-8"): void {
  const blob = new Blob([content], { type: mime })
  const url = URL.createObjectURL(blob)
  const anchor = document.createElement("a")
  anchor.href = url
  anchor.download = filename
  anchor.click()
  URL.revokeObjectURL(url)
}
