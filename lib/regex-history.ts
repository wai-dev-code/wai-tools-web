import type { RegexFlags } from "@/lib/regex-utils"
import { DEFAULT_REGEX_FLAGS } from "@/lib/regex-utils"

const STORAGE_KEY = "waihub-regex-history"
const MAX_ENTRIES = 5

export interface RegexHistoryEntry {
  pattern: string
  text: string
  flags: RegexFlags
  savedAt: number
}

export function loadRegexHistory(): RegexHistoryEntry[] {
  if (typeof window === "undefined") return []
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw) as RegexHistoryEntry[]
    if (!Array.isArray(parsed)) return []
    return parsed.slice(0, MAX_ENTRIES)
  } catch {
    return []
  }
}

export function saveRegexHistoryEntry(entry: Omit<RegexHistoryEntry, "savedAt">): RegexHistoryEntry[] {
  if (typeof window === "undefined") return []
  const next: RegexHistoryEntry = { ...entry, savedAt: Date.now() }
  const existing = loadRegexHistory().filter(
    (item) => item.pattern !== next.pattern || item.text !== next.text || flagsKey(item.flags) !== flagsKey(next.flags)
  )
  const merged = [next, ...existing].slice(0, MAX_ENTRIES)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(merged))
  return merged
}

function flagsKey(flags: RegexFlags): string {
  return (["g", "i", "m", "s", "u", "y"] as const).filter((f) => flags[f]).join("")
}

export function mergeFlags(stored: Partial<RegexFlags>): RegexFlags {
  return { ...DEFAULT_REGEX_FLAGS, ...stored }
}
