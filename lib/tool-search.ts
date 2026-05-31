import { getMessages } from "@/lib/i18n"
import { locales, type Locale } from "@/lib/i18n/config"
import { isLocalizedToolSlug } from "@/lib/i18n/localized-tool-slug"
import { getToolCategoryLabel } from "@/lib/tool-display"
import { categoryLabels, getVisibleTools, type ToolDefinition } from "@/lib/tools-data"

const SLUG_TEXT_KEY: Record<
  "json-formatter" | "base64" | "url-encoder" | "jwt-decoder" | "timestamp" | "uuid-generator",
  "jsonFormatter" | "base64" | "urlEncoder" | "jwtDecoder" | "timestamp" | "uuidGenerator"
> = {
  "json-formatter": "jsonFormatter",
  base64: "base64",
  "url-encoder": "urlEncoder",
  "jwt-decoder": "jwtDecoder",
  timestamp: "timestamp",
  "uuid-generator": "uuidGenerator",
}

function normalizeSearchText(value: string): string {
  return value.toLowerCase().trim().replace(/[\s_-]+/g, " ")
}

function collapseSpaces(value: string): string {
  return normalizeSearchText(value).replace(/ /g, "")
}

function collectToolSearchTerms(tool: ToolDefinition): string[] {
  const terms = [
    tool.slug,
    tool.slug.replace(/-/g, " "),
    tool.name,
    tool.description,
    tool.shortDescription,
    ...tool.keywords,
    categoryLabels[tool.category],
  ]

  for (const locale of locales) {
    const m = getMessages(locale)
    terms.push(getToolCategoryLabel(locale, tool.category))
    if (isLocalizedToolSlug(tool.slug)) {
      const t = m.tools[SLUG_TEXT_KEY[tool.slug]]
      terms.push(t.name, t.short, t.desc)
    }
  }

  return terms
}

const toolSearchHaystacks = new Map<string, { normalized: string; collapsed: string }>()

function getToolHaystack(tool: ToolDefinition): { normalized: string; collapsed: string } {
  let haystack = toolSearchHaystacks.get(tool.slug)
  if (!haystack) {
    const normalized = normalizeSearchText(collectToolSearchTerms(tool).join(" "))
    haystack = { normalized, collapsed: collapseSpaces(normalized) }
    toolSearchHaystacks.set(tool.slug, haystack)
  }
  return haystack
}

function haystackMatches(haystack: { normalized: string; collapsed: string }, query: string): boolean {
  const normalizedQuery = normalizeSearchText(query)
  if (!normalizedQuery) return true

  const collapsedQuery = collapseSpaces(query)

  if (haystack.normalized.includes(normalizedQuery)) return true
  if (haystack.collapsed.includes(collapsedQuery)) return true

  const tokens = normalizedQuery.split(" ").filter(Boolean)
  if (tokens.length <= 1) return false

  return tokens.every(
    (token) =>
      haystack.normalized.includes(token) || haystack.collapsed.includes(collapseSpaces(token))
  )
}

/** 搜索可见工具：匹配 slug、各语言名称/描述、关键词与分类标签 */
export function searchTools(query: string, _locale?: Locale): ToolDefinition[] {
  const visible = getVisibleTools()
  const q = query.trim()
  if (!q) return visible

  return visible.filter((tool) => haystackMatches(getToolHaystack(tool), q))
}
