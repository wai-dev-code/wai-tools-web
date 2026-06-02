"use client"

import Link from "next/link"
import {
  Braces,
  ChevronDown,
  ChevronRight,
  Clock,
  FileCode2,
  FileSearch,
  Fingerprint,
  KeyRound,
  Link2,
} from "lucide-react"
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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

const toolIcons: Record<string, typeof Braces> = {
  "json-formatter": Braces,
  base64: FileCode2,
  "url-encoder": Link2,
  timestamp: Clock,
  "uuid-generator": Fingerprint,
  "regex-tester": FileSearch,
  "jwt-decoder": KeyRound,
}

const toolsTriggerClassName =
  "inline-flex items-center gap-0.5 rounded-md px-1 py-0.5 text-sm text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/50 data-[state=open]:text-foreground"

const mobileLinkClass =
  "inline-flex shrink-0 items-center rounded-md border border-border bg-muted/30 px-2.5 py-1.5 text-sm text-foreground transition-colors hover:bg-muted/60"

/** 桌面端：「工具」下拉菜单 */
export function HeaderToolsDropdown({ locale = defaultLocale }: { locale?: Locale }) {
  const m = getMessages(locale)
  const tools = getVisibleTools()
  const categories = toolNavCategories.filter((cat) =>
    tools.some((t) => t.category === cat),
  )

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={cn(toolsTriggerClassName, "group")}>
        {m.common.tools}
        <ChevronDown className="h-3.5 w-3.5 opacity-60 transition-transform duration-200 group-data-[state=open]:rotate-180" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        sideOffset={8}
        className="w-[min(20rem,calc(100vw-2rem))] p-0"
      >
        <div className="border-b border-border/60 p-2">
          <DropdownMenuItem asChild className="cursor-pointer rounded-lg p-0 focus:bg-transparent">
            <Link
              href={localizeHref(locale, "tools")}
              className="flex items-center justify-between gap-3 rounded-lg border border-border/80 bg-muted/40 px-3 py-2.5 transition-colors hover:bg-accent"
            >
              <span className="font-medium text-foreground">{m.common.allTools}</span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <span className="tabular-nums">{tools.length}</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          </DropdownMenuItem>
        </div>

        <div className="max-h-[min(70vh,24rem)] overflow-y-auto p-1.5">
          {categories.map((cat, index) => {
            const catTools = tools.filter((t) => t.category === cat)
            return (
              <div key={cat}>
                {index > 0 ? <DropdownMenuSeparator className="my-1.5" /> : null}
                <DropdownMenuLabel className="px-2 py-1 text-[10px] font-semibold tracking-wider text-muted-foreground/90 uppercase">
                  {getToolCategoryLabel(locale, cat)}
                </DropdownMenuLabel>
                {catTools.map((tool) => {
                  const Icon = toolIcons[tool.slug] ?? tool.icon
                  const label = getToolLabel(locale, tool.slug, tool.name)
                  const short = getToolShort(locale, tool.slug, tool.shortDescription)
                  return (
                    <DropdownMenuItem key={tool.slug} asChild className="cursor-pointer p-0">
                      <Link
                        href={localizeHref(locale, `tools/${tool.slug}`)}
                        title={short}
                        className="flex w-full items-start gap-2.5 rounded-md px-2 py-2"
                      >
                        <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary/10">
                          <Icon className="h-3.5 w-3.5 text-primary" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block truncate text-sm font-medium leading-snug">
                            {label}
                          </span>
                          <span className="block truncate text-xs leading-snug text-muted-foreground">
                            {short}
                          </span>
                        </span>
                      </Link>
                    </DropdownMenuItem>
                  )
                })}
              </div>
            )
          })}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
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
