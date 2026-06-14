"use client"

import { useEffect, useRef, useState } from "react"
import { Search } from "lucide-react"
import { defaultLocale, type Locale } from "@/lib/i18n/config"
import { getMessages } from "@/lib/i18n"
import { cn } from "@/lib/utils"

interface HomeSearchInputProps {
  locale?: Locale
  value: string
  onChange: (value: string) => void
}

export function HomeSearchInput({ locale = defaultLocale, value, onChange }: HomeSearchInputProps) {
  const m = getMessages(locale).home
  const inputRef = useRef<HTMLInputElement>(null)
  const [focused, setFocused] = useState(false)

  const [hintIndex, setHintIndex] = useState(0)
  const [typedText, setTypedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  const hints = m.searchTypewriterHints
  const currentHint = hints[hintIndex] ?? ""
  const showTypewriter = !focused && value.length === 0
  const showBorderGlow = !focused && value.length === 0

  useEffect(() => {
    if (!showTypewriter) return

    const typeSpeed = isDeleting ? 45 : 85
    const pauseAfterType = 1800

    const timer = window.setTimeout(() => {
      if (!isDeleting) {
        if (typedText.length < currentHint.length) {
          setTypedText(currentHint.slice(0, typedText.length + 1))
        } else {
          window.setTimeout(() => setIsDeleting(true), pauseAfterType)
        }
      } else if (typedText.length > 0) {
        setTypedText(typedText.slice(0, -1))
      } else {
        setIsDeleting(false)
        setHintIndex((i) => (i + 1) % hints.length)
      }
    }, typeSpeed)

    return () => window.clearTimeout(timer)
  }, [showTypewriter, typedText, isDeleting, hintIndex, currentHint, hints.length])

  useEffect(() => {
    if (!showTypewriter) {
      setTypedText("")
      setIsDeleting(false)
    }
  }, [showTypewriter])

  return (
    <div className="relative mx-auto mb-6 max-w-2xl">
      {/* Rotating light border — visible when idle */}
      <div
        className={cn(
          "pointer-events-none absolute -inset-[1px] rounded-2xl transition-opacity duration-500",
          showBorderGlow ? "opacity-100" : "opacity-0"
        )}
        aria-hidden
      >
        <div className="home-search-border-glow absolute inset-0 rounded-2xl" />
      </div>

      <div
        className={cn(
          "relative flex h-14 items-center rounded-2xl border bg-card/60 backdrop-blur-md transition-all duration-300 sm:h-[3.75rem]",
          showBorderGlow ? "border-transparent shadow-lg shadow-primary/5" : "border-border/60",
          focused && "border-primary/40 bg-card/80 shadow-md shadow-primary/10 ring-2 ring-primary/15"
        )}
      >
        <Search
          className={cn(
            "absolute left-4 h-5 w-5 transition-colors duration-300 sm:h-[1.375rem] sm:w-[1.375rem]",
            showBorderGlow ? "text-primary/80" : "text-muted-foreground",
            focused && "text-primary"
          )}
          aria-hidden
        />

        <input
          ref={inputRef}
          type="search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={showTypewriter ? "" : m.searchPlaceholder}
          className="h-full w-full rounded-2xl bg-transparent pl-12 pr-5 text-base text-foreground outline-none placeholder:text-muted-foreground sm:text-lg"
          aria-label={m.searchPlaceholder}
        />

        {showTypewriter && (
          <div
            className="pointer-events-none absolute left-12 right-5 top-1/2 -translate-y-1/2 truncate text-base text-muted-foreground sm:text-lg"
            aria-hidden
          >
            <span>{m.searchTypewriterPrefix}</span>
            <span className="text-foreground/90">{typedText}</span>
            <span className="home-search-cursor ml-px text-primary">|</span>
          </div>
        )}
      </div>
    </div>
  )
}
