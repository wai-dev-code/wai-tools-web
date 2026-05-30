"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { getVisibleTools, type ToolCategory } from "@/lib/tools-data"
import { defaultLocale, type Locale } from "@/lib/i18n/config"
import { getLocalizedToolText, getMessages, localizeHref, stripLocalePrefix } from "@/lib/i18n"

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

export function ToolSidebar({
  currentSlug,
  locale = defaultLocale,
}: {
  currentSlug?: string
  locale?: Locale
}) {
  const pathname = usePathname()
  const basePath = stripLocalePrefix(pathname)
  const m = getMessages(locale)
  const categories = ["json", "encoding"] as ToolCategory[]

  return (
    <aside className="hidden w-56 shrink-0 lg:block">
      <div className="sticky top-20 space-y-6">
        <div>
          <Link
            href={localizeHref(locale, "tools")}
            className={cn(
              "mb-3 block text-sm font-semibold text-foreground hover:text-primary",
              basePath === "/tools" && "text-primary"
            )}
          >
            {m.common.allTools}
          </Link>
        </div>
        {categories.map((cat) => {
          const catTools = getVisibleTools().filter((t) => t.category === cat)
          if (catTools.length === 0) return null
          return (
            <div key={cat}>
              <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {getCategoryLabel(locale, cat)}
              </h3>
              <ul className="space-y-0.5">
                {catTools.map((tool) => (
                  <li key={tool.slug}>
                    <Link
                      href={localizeHref(locale, `tools/${tool.slug}`)}
                      className={cn(
                        "block rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-secondary hover:text-foreground",
                        currentSlug === tool.slug
                          ? "bg-primary/10 font-medium text-primary"
                          : "text-muted-foreground"
                      )}
                    >
                      {getToolLabel(locale, tool.slug, tool.name)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </aside>
  )
}
