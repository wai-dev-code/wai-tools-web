"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { LocaleSwitcher } from "@/components/locale-switcher"
import { HeaderToolsDropdown, HeaderMobileNav } from "@/components/header-tools-nav"
import { SiteLogo } from "@/components/site-logo"
import { ToolCommandPalette } from "@/components/tool-command-palette"
import { defaultLocale, type Locale } from "@/lib/i18n/config"
import { getMessages, localizeHref } from "@/lib/i18n"

export function Header({ locale = defaultLocale }: { locale?: Locale }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const closeMobile = () => setMobileMenuOpen(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-6">
        <Link href={localizeHref(locale, "")} className="flex items-center gap-2">
          <SiteLogo size={32} />
          <span className="text-xl font-semibold text-foreground">WaiHub</span>
        </Link>

        <div className="hidden md:flex md:items-center md:gap-4">
          <HeaderToolsDropdown locale={locale} />
          <ToolCommandPalette />
          <Link
            href={localizeHref(locale, "blog")}
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {getMessages(locale).common.blog}
          </Link>
          <Link
            href={localizeHref(locale, "about")}
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {getMessages(locale).common.about}
          </Link>
          <LocaleSwitcher locale={locale} />
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <LocaleSwitcher locale={locale} />
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="border-t border-border bg-background px-4 py-3 md:hidden">
          <HeaderMobileNav locale={locale} onNavigate={closeMobile} />
        </div>
      )}
    </header>
  )
}
