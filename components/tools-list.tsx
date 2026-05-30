"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { searchTools, type ToolCategory } from "@/lib/tools-data"
import { defaultLocale, type Locale } from "@/lib/i18n/config"
import { getLocalizedToolText, getMessages, localizeHref } from "@/lib/i18n"
import { cn } from "@/lib/utils"

function getCategoryLabel(locale: Locale, cat: ToolCategory): string {
  const m = getMessages(locale).categories
  if (cat === "json") return m.json
  if (cat === "encoding") return m.encoding
  return cat
}

function getToolLabel(locale: Locale, slug: string, fallback: string): string {
  if (slug === "json-formatter" || slug === "base64") {
    return getLocalizedToolText(slug, locale).name
  }
  return fallback
}

function getToolShort(locale: Locale, slug: string, fallback: string): string {
  if (slug === "json-formatter" || slug === "base64") {
    return getLocalizedToolText(slug, locale).short
  }
  return fallback
}

export function ToolsList({ locale = defaultLocale }: { locale?: Locale }) {
  const m = getMessages(locale)
  const [query, setQuery] = useState("")

  const filtered = useMemo(() => searchTools(query), [query])

  const grouped = useMemo(() => {
    const map = new Map<string, typeof filtered>()
    for (const tool of filtered) {
      const label = getCategoryLabel(locale, tool.category)
      if (!map.has(label)) map.set(label, [])
      map.get(label)!.push(tool)
    }
    return map
  }, [filtered, locale])

  return (
    <>
      <div className="relative mb-8 max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="search"
          placeholder={m.toolsPage.searchPlaceholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-9"
        />
      </div>

      <div className="space-y-8">
        {[...grouped.entries()].map(([category, catTools]) => (
          <section key={category}>
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              {category}
            </h2>
            <div className="grid gap-2 sm:grid-cols-2">
              {catTools.map((tool) => (
                <Link
                  key={tool.slug}
                  href={localizeHref(locale, `tools/${tool.slug}`)}
                  className={cn(
                    "flex items-center gap-3 rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/50"
                  )}
                >
                  <tool.icon className="h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <div className="font-medium text-foreground">
                      {getToolLabel(locale, tool.slug, tool.name)}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {getToolShort(locale, tool.slug, tool.shortDescription)}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-12 text-center text-muted-foreground">{m.toolsPage.noResults}</p>
      )}
    </>
  )
}
