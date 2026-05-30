"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { useLocale, useMessages } from "@/components/locale-provider"
import { localizeHref } from "@/lib/i18n"

export function NotFoundContent() {
  const locale = useLocale()
  const m = useMessages().common

  return (
    <div className="min-h-screen bg-background">
      <Header locale={locale} />
      <main className="flex flex-col items-center justify-center px-4 py-32 text-center">
        <h1 className="text-6xl font-bold text-foreground">404</h1>
        <p className="mt-4 text-muted-foreground">{m.notFoundMessage}</p>
        <div className="mt-8 flex gap-4">
          <Button asChild>
            <Link href={localizeHref(locale, "")}>{m.notFoundHome}</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href={localizeHref(locale, "tools")}>{m.notFoundBrowseTools}</Link>
          </Button>
        </div>
      </main>
      <Footer locale={locale} />
    </div>
  )
}
