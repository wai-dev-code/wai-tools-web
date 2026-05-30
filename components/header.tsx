"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { LocaleSwitcher } from "@/components/locale-switcher"
import { defaultLocale, type Locale } from "@/lib/i18n/config"
import { getMessages, localizeHref } from "@/lib/i18n"

export function Header({ locale = defaultLocale }: { locale?: Locale }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const m = getMessages(locale)

  const navLinks = [
    { name: m.common.tools, href: localizeHref(locale, "tools") },
    { name: m.common.blog, href: localizeHref(locale, "blog") },
    { name: m.common.about, href: localizeHref(locale, "about") },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-6">
        <Link href={localizeHref(locale, "")} className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <span className="text-lg font-bold text-primary-foreground">W</span>
          </div>
          <span className="text-xl font-semibold text-foreground">WaiHub</span>
        </Link>

        <div className="hidden md:flex md:items-center md:gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.name}
            </Link>
          ))}
          <Button size="sm" asChild>
            <Link href={localizeHref(locale, "tools")}>{m.common.openTools}</Link>
          </Button>
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
        <div className="border-t border-border bg-background px-4 py-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-2 text-base text-muted-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Button size="sm" className="mt-3 w-full" asChild>
            <Link href={localizeHref(locale, "tools")} onClick={() => setMobileMenuOpen(false)}>
              {m.common.openTools}
            </Link>
          </Button>
        </div>
      )}
    </header>
  )
}
