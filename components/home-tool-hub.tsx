"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { getVisibleTools, searchTools, type ToolCategory } from "@/lib/tools-data"
import { defaultLocale, type Locale } from "@/lib/i18n/config"
import { formatMessage, getLocalizedToolText, getMessages, localizeHref } from "@/lib/i18n"
import { cn } from "@/lib/utils"
import { AdSlot } from "@/components/ad-slot"

const visibleTools = getVisibleTools()
const visibleCategories = [
  "all",
  ...Array.from(new Set(visibleTools.map((t) => t.category))),
] as const

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

export function HomeToolHub({ locale = defaultLocale }: { locale?: Locale }) {
  const m = getMessages(locale)
  const [query, setQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState<(typeof visibleCategories)[number]>("all")

  const filtered = useMemo(() => {
    let result = searchTools(query)
    if (activeCategory !== "all") {
      result = result.filter((t) => t.category === activeCategory)
    }
    return result
  }, [query, activeCategory])

  return (
    <section className="px-4 pt-24 pb-12 lg:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 text-center">
          <h1 className="mb-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {m.home.title}
          </h1>
          <p className="text-muted-foreground">{m.home.subtitle}</p>
        </div>

        <div className="relative mx-auto mb-6 max-w-xl">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder={m.home.searchPlaceholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="h-12 rounded-xl border-border bg-secondary/50 pl-10 text-base"
            autoFocus
          />
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {visibleCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "rounded-full px-3 py-1.5 text-sm transition-colors",
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              )}
            >
              {cat === "all" ? m.home.categoryAll : getCategoryLabel(locale, cat as ToolCategory)}
            </button>
          ))}
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((tool) => (
            <Link
              key={tool.slug}
              href={localizeHref(locale, `tools/${tool.slug}`)}
              className="group flex items-start gap-3 rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/50 hover:shadow-md hover:shadow-primary/5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <tool.icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <h2 className="font-semibold text-foreground group-hover:text-primary">
                  {getToolLabel(locale, tool.slug, tool.name)}
                </h2>
                <p className="mt-0.5 text-sm text-muted-foreground line-clamp-2">
                  {getToolShort(locale, tool.slug, tool.shortDescription)}
                </p>
                <span className="mt-2 inline-block text-xs text-primary">{m.home.useNow}</span>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="py-12 text-center text-muted-foreground">{m.home.noResults}</p>
        )}

        <AdSlot name="homeMid" className="mx-auto max-w-2xl" />

        <p className="mt-8 text-center text-sm text-muted-foreground">
          {formatMessage(m.home.toolsCount, { n: visibleTools.length })} ·{" "}
          <Link href={localizeHref(locale, "tools")} className="text-primary hover:underline">
            {m.home.viewAll}
          </Link>
        </p>
      </div>
    </section>
  )
}
