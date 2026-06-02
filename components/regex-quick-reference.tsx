"use client"

import type { RegexToolMessages } from "@/lib/i18n/messages/regex-tool-messages"
import { cn } from "@/lib/utils"

interface RegexQuickReferenceProps {
  ui: Pick<RegexToolMessages, "quickRefTitle" | "quickRefHint" | "quickRefCategories">
  onInsert: (token: string) => void
  className?: string
}

export function RegexQuickReference({ ui, onInsert, className }: RegexQuickReferenceProps) {
  return (
    <div
      className={cn(
        "flex max-h-[min(420px,50vh)] flex-col rounded-md border border-border bg-card/60",
        className
      )}
    >
      <div className="shrink-0 border-b border-border px-3 py-2">
        <h3 className="text-sm font-medium">{ui.quickRefTitle}</h3>
        <p className="mt-0.5 text-xs text-muted-foreground">{ui.quickRefHint}</p>
      </div>
      <div className="min-h-0 flex-1 overflow-y-auto px-2 py-2">
        {ui.quickRefCategories.map((category) => (
          <div key={category.title} className="mb-3 last:mb-0">
            <p className="mb-1 px-1 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
              {category.title}
            </p>
            <div className="space-y-0.5">
              {category.items.map((item) => (
                <button
                  key={`${category.title}-${item.token}`}
                  type="button"
                  onClick={() => onInsert(item.insert)}
                  className="flex w-full items-start justify-between gap-2 rounded px-1 py-1 text-left text-xs transition-colors hover:bg-accent/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  title={item.desc}
                >
                  <span className="shrink-0 font-mono text-primary">{item.token}</span>
                  <span className="text-right text-muted-foreground">{item.desc}</span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
