"use client"

import type { RegexExplainToken } from "@/lib/regex-explain"
import { cn } from "@/lib/utils"

interface RegexExplanationPanelProps {
  title: string
  emptyLabel: string
  tokens: RegexExplainToken[]
  onSelectPart?: (start: number, end: number) => void
  className?: string
}

export function RegexExplanationPanel({
  title,
  emptyLabel,
  tokens,
  onSelectPart,
  className,
}: RegexExplanationPanelProps) {
  return (
    <div className={cn("rounded-md border border-border bg-card/50", className)}>
      <div className="border-b border-border px-3 py-2">
        <h3 className="text-sm font-medium">{title}</h3>
      </div>
      {tokens.length === 0 ? (
        <p className="px-3 py-2 text-xs text-muted-foreground">{emptyLabel}</p>
      ) : (
        <ul className="max-h-[200px] divide-y divide-border overflow-y-auto">
          {tokens.map((item, index) => (
            <li key={`${item.start}-${item.end}-${index}`}>
              <button
                type="button"
                onClick={() => onSelectPart?.(item.start, item.end)}
                className="flex w-full items-start gap-3 px-3 py-2 text-left text-xs transition-colors hover:bg-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <code className="shrink-0 rounded bg-secondary/60 px-1.5 py-0.5 font-mono text-primary">
                  {item.token}
                </code>
                <span className="text-muted-foreground">{item.meaning}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
