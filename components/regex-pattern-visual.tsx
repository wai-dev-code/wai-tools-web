"use client"

import type { RegexExplainToken } from "@/lib/regex-explain"
import { cn } from "@/lib/utils"

const TOKEN_COLORS = [
  "bg-sky-500/15 text-sky-800 dark:text-sky-300",
  "bg-violet-500/15 text-violet-800 dark:text-violet-300",
  "bg-amber-500/15 text-amber-900 dark:text-amber-300",
  "bg-emerald-500/15 text-emerald-800 dark:text-emerald-300",
  "bg-rose-500/15 text-rose-800 dark:text-rose-300",
  "bg-cyan-500/15 text-cyan-800 dark:text-cyan-300",
]

interface RegexPatternVisualProps {
  title: string
  tokens: RegexExplainToken[]
  onSelectPart?: (start: number, end: number) => void
  className?: string
}

export function RegexPatternVisual({
  title,
  tokens,
  onSelectPart,
  className,
}: RegexPatternVisualProps) {
  if (tokens.length === 0) return null

  return (
    <div className={cn("rounded-md border border-border bg-card/40 px-3 py-2", className)}>
      <p className="mb-2 text-xs font-medium text-muted-foreground">{title}</p>
      <div className="flex flex-wrap gap-1 font-mono text-sm leading-relaxed">
        {tokens.map((token, index) => (
          <button
            key={`${token.start}-${token.end}-${index}`}
            type="button"
            title={token.meaning}
            onClick={() => onSelectPart?.(token.start, token.end)}
            className={cn(
              "rounded px-1.5 py-0.5 transition-colors hover:ring-1 hover:ring-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              TOKEN_COLORS[index % TOKEN_COLORS.length],
            )}
          >
            {token.token}
          </button>
        ))}
      </div>
    </div>
  )
}
