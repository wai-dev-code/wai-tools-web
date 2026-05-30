"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Globe } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { localeLabels, locales, type Locale } from "@/lib/i18n/config"
import { localizeHref, stripLocalePrefix } from "@/lib/i18n"
import { useSetLocale } from "@/components/locale-provider"

export function LocaleSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname()
  const basePath = stripLocalePrefix(pathname)
  const setLocale = useSetLocale()

  const pathForHref = basePath === "/" ? "" : basePath.replace(/^\//, "")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8 gap-1.5 px-2 text-xs" aria-label="Language">
          <Globe className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">{localeLabels[locale]}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {locales.map((loc) => (
          <DropdownMenuItem key={loc} asChild>
            <Link
              href={localizeHref(loc, pathForHref)}
              className={loc === locale ? "font-medium text-primary" : ""}
              onClick={() => setLocale(loc)}
            >
              {localeLabels[loc]}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
