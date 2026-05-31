export interface UuidFormatOptions {
  uppercase: boolean
  noHyphens: boolean
  braces: boolean
}

export type UuidCopySeparator = "newline" | "comma"

export function generateUuidV4(): string {
  return crypto.randomUUID()
}

export function formatUuid(uuid: string, opts: UuidFormatOptions): string {
  let result = uuid
  if (opts.noHyphens) result = result.replace(/-/g, "")
  if (opts.uppercase) result = result.toUpperCase()
  if (opts.braces) result = `{${result}}`
  return result
}

export function joinFormattedUuids(uuids: string[], separator: UuidCopySeparator): string {
  return separator === "comma" ? uuids.join(", ") : uuids.join("\n")
}

export function downloadUuidFile(uuids: string[], separator: UuidCopySeparator): void {
  const content = joinFormattedUuids(uuids, separator)
  const blob = new Blob([content], { type: "text/plain;charset=utf-8" })
  const url = URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = url
  a.download = `uuids-${Date.now()}.txt`
  a.click()
  URL.revokeObjectURL(url)
}

export const UUID_MAX_BATCH = 1000

export function clampBatchCount(n: number): number {
  return Math.min(Math.max(1, Math.trunc(n) || 1), UUID_MAX_BATCH)
}
