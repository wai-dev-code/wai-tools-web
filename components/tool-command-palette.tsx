"use client"

import { useCallback, useEffect, useMemo, useState } from "react"
import { useRouter } from "next/navigation"
import { Search } from "lucide-react"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import { Button } from "@/components/ui/button"
import { useLocale, useMessages } from "@/components/locale-provider"
import { getVisibleTools } from "@/lib/tools-data"
import { getLocalizedToolText, localizeHref } from "@/lib/i18n"
import { isLocalizedToolSlug } from "@/lib/i18n/localized-tool-slug"
import { getRecentToolSlugs } from "@/lib/recent-tools"

export function ToolCommandPalette() {
  const [open, setOpen] = useState(false)
  const [recentSlugs, setRecentSlugs] = useState<string[]>([])
  const locale = useLocale()
  const m = useMessages()
  const router = useRouter()

  const refreshRecent = useCallback(() => {
    setRecentSlugs(getRecentToolSlugs())
  }, [])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((prev) => !prev)
      }
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [])

  useEffect(() => {
    if (open) refreshRecent()
  }, [open, refreshRecent])

  const tools = useMemo(() => getVisibleTools(), [])

  const recentTools = useMemo(
    () =>
      recentSlugs
        .map((slug) => tools.find((t) => t.slug === slug))
        .filter((t): t is NonNullable<typeof t> => Boolean(t)),
    [recentSlugs, tools],
  )

  const navigate = (slug: string) => {
    setOpen(false)
    router.push(localizeHref(locale, `tools/${slug}`))
  }

  return (
    <>
      <Button
        type="button"
        variant="outline"
        size="sm"
        className="hidden h-8 gap-2 px-2 text-muted-foreground md:flex"
        onClick={() => setOpen(true)}
        aria-label={m.common.openCommandPalette}
      >
        <Search className="h-3.5 w-3.5" />
        <span className="text-xs">{m.common.openCommandPalette}</span>
        <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px]">
          {m.common.commandPaletteShortcut}
        </kbd>
      </Button>

      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        title={m.common.commandPaletteTitle}
        description={m.common.commandPalettePlaceholder}
      >
        <CommandInput placeholder={m.common.commandPalettePlaceholder} />
        <CommandList>
          <CommandEmpty>{m.home.noResults}</CommandEmpty>
          {recentTools.length > 0 && (
            <CommandGroup heading={m.common.commandPaletteRecent}>
              {recentTools.map((tool) => {
                const text = isLocalizedToolSlug(tool.slug)
                  ? getLocalizedToolText(tool.slug, locale)
                  : { name: tool.name, short: tool.shortDescription }
                return (
                  <CommandItem key={`recent-${tool.slug}`} onSelect={() => navigate(tool.slug)}>
                    <tool.icon className="mr-2 h-4 w-4 text-primary" />
                    <span>{text.name}</span>
                    <span className="ml-2 text-xs text-muted-foreground">{text.short}</span>
                  </CommandItem>
                )
              })}
            </CommandGroup>
          )}
          {recentTools.length > 0 && <CommandSeparator />}
          <CommandGroup heading={m.common.commandPaletteAllTools}>
            {tools.map((tool) => {
              const text = isLocalizedToolSlug(tool.slug)
                ? getLocalizedToolText(tool.slug, locale)
                : { name: tool.name, short: tool.shortDescription }
              return (
                <CommandItem key={tool.slug} onSelect={() => navigate(tool.slug)}>
                  <tool.icon className="mr-2 h-4 w-4 text-primary" />
                  <span>{text.name}</span>
                  <span className="ml-2 text-xs text-muted-foreground">{text.short}</span>
                </CommandItem>
              )
            })}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
