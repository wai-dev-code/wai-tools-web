"use client"

import { createContext, useCallback, useContext, useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { defaultLocale, locales, type Locale } from "@/lib/i18n/config"
import { getMessages, type Messages } from "@/lib/i18n"

const LOCALE_STORAGE_KEY = "waihub-locale"

interface LocaleContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
}

const LocaleContext = createContext<LocaleContextValue>({
  locale: defaultLocale,
  setLocale: () => {},
})

export function getLocaleFromPathname(pathname: string): Locale | null {
  const parts = pathname.split("/").filter(Boolean)
  if (parts.length > 0 && locales.includes(parts[0] as Locale)) {
    return parts[0] as Locale
  }
  return null
}

export function LocaleProvider({
  locale: initialLocale,
  children,
}: {
  locale?: Locale
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const fromPath = getLocaleFromPathname(pathname)
  const [locale, setLocaleState] = useState<Locale>(initialLocale ?? fromPath ?? defaultLocale)

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    sessionStorage.setItem(LOCALE_STORAGE_KEY, next)
  }, [])

  useEffect(() => {
    if (fromPath) {
      setLocale(fromPath)
      return
    }
    if (initialLocale) {
      setLocaleState(initialLocale)
      return
    }
    const stored = sessionStorage.getItem(LOCALE_STORAGE_KEY) as Locale | null
    if (stored && locales.includes(stored)) {
      setLocaleState(stored)
    }
  }, [fromPath, initialLocale, pathname, setLocale])

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>{children}</LocaleContext.Provider>
  )
}

export function useLocale(): Locale {
  return useContext(LocaleContext).locale
}

export function useSetLocale(): (locale: Locale) => void {
  return useContext(LocaleContext).setLocale
}

export function useMessages(): Messages {
  return getMessages(useLocale())
}

/** @deprecated 使用 useSetLocale */
export function persistLocale(locale: Locale) {
  sessionStorage.setItem(LOCALE_STORAGE_KEY, locale)
}

export { stripLocalePrefix } from "@/lib/i18n"
