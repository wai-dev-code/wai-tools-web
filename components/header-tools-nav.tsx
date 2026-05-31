"use client"

import Link from "next/link"
import { Braces, Clock, FileCode2, Fingerprint, KeyRound, Link2 } from "lucide-react"
import { getVisibleTools } from "@/lib/tools-data"
import { defaultLocale, type Locale } from "@/lib/i18n/config"
import { getMessages, localizeHref } from "@/lib/i18n"
import {
  getToolCategoryLabel,
  getToolLabel,
  getToolShort,
  toolNavCategories,
} from "@/lib/tool-display"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const toolIcons: Record<string, typeof Braces> = {
  "json-formatter": Braces,
  base64: FileCode2,
  "url-encoder": Link2,
  timestamp: Clock,
  "uuid-generator": Fingerprint,
  "jwt-decoder": KeyRound,
}

const triggerClassName =
  "group h-auto gap-0.5 bg-transparent px-0 py-0 text-sm font-normal text-muted-foreground shadow-none hover:bg-transparent hover:text-foreground focus:bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-foreground"

const mobileLinkClass =
  "inline-flex shrink-0 items-center rounded-md border border-border bg-muted/30 px-2.5 py-1.5 text-sm text-foreground transition-colors hover:bg-muted/60"

/** 桌面端：「工具」悬浮下拉 */
export function HeaderToolsDropdown({ locale = defaultLocale }: { locale?: Locale }) {
  const m = getMessages(locale)
  const categories = toolNavCategories

  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className={triggerClassName}>
            {m.common.tools}
          </NavigationMenuTrigger>
          <NavigationMenuContent className="min-w-[280px] p-2">
            <NavigationMenuLink asChild>
              <Link
                href={localizeHref(locale, "tools")}
                className="mb-1 block rounded-md px-2 py-1.5 text-sm font-medium text-foreground hover:bg-accent"
              >
                {m.common.allTools}
              </Link>
            </NavigationMenuLink>
            {categories.map((cat) => {
              const catTools = getVisibleTools().filter((t) => t.category === cat)
              if (catTools.length === 0) return null
              return (
                <div key={cat} className="mt-2 first:mt-0">
                  <p className="px-2 pb-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground/70">
                    {getToolCategoryLabel(locale, cat)}
                  </p>
                  <ul className="space-y-0.5">
                    {catTools.map((tool) => {
                      const Icon = toolIcons[tool.slug] ?? tool.icon
                      const label = getToolLabel(locale, tool.slug, tool.name)
                      const short = getToolShort(locale, tool.slug, tool.shortDescription)
                      return (
                        <li key={tool.slug}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={localizeHref(locale, `tools/${tool.slug}`)}
                              className="flex items-start gap-2 rounded-md px-2 py-2 hover:bg-accent"
                            >
                              <Icon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                              <span>
                                <span className="block text-sm font-medium text-foreground">{label}</span>
                                <span className="block text-xs text-muted-foreground">{short}</span>
                              </span>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              )
            })}
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

/** 移动端：紧凑横排导航 */
export function HeaderMobileNav({
  locale = defaultLocale,
  onNavigate,
}: {
  locale?: Locale
  onNavigate?: () => void
}) {
  const m = getMessages(locale)
  const tools = getVisibleTools()

  return (
    <nav className="flex flex-wrap gap-2" aria-label={m.common.tools}>
      <Link href={localizeHref(locale, "tools")} className={mobileLinkClass} onClick={onNavigate}>
        {m.common.allTools}
      </Link>
      {tools.map((tool) => {
        const Icon = toolIcons[tool.slug] ?? tool.icon
        return (
          <Link
            key={tool.slug}
            href={localizeHref(locale, `tools/${tool.slug}`)}
            className={mobileLinkClass}
            onClick={onNavigate}
          >
            <Icon className="mr-1.5 h-3.5 w-3.5 shrink-0 text-primary" />
            {getToolLabel(locale, tool.slug, tool.name)}
          </Link>
        )
      })}
      <Link href={localizeHref(locale, "blog")} className={mobileLinkClass} onClick={onNavigate}>
        {m.common.blog}
      </Link>
      <Link href={localizeHref(locale, "about")} className={mobileLinkClass} onClick={onNavigate}>
        {m.common.about}
      </Link>
    </nav>
  )
}
