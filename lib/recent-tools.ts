import type { LocalizedToolSlug } from "@/lib/i18n/localized-tool-slug"
import { isLocalizedToolSlug } from "@/lib/i18n/localized-tool-slug"

const STORAGE_KEY = "waihub-recent-tools"
const MAX_RECENT = 6

export function getRecentToolSlugs(): LocalizedToolSlug[] {
  if (typeof window === "undefined") return []
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw) as string[]
    return parsed.filter((s) => isLocalizedToolSlug(s)).slice(0, MAX_RECENT)
  } catch {
    return []
  }
}

export function recordRecentTool(slug: string): void {
  if (!isLocalizedToolSlug(slug)) return
  if (typeof window === "undefined") return
  try {
    const current = getRecentToolSlugs().filter((s) => s !== slug)
    const next = [slug, ...current].slice(0, MAX_RECENT)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
  } catch {
    // ignore quota errors
  }
}
