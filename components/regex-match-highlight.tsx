"use client"

import { cn } from "@/lib/utils"
import type { HighlightSegment } from "@/lib/regex-utils"

const MATCH_HIGHLIGHT_CLASSES = [
  "bg-emerald-500/35 dark:bg-emerald-400/25",
  "bg-sky-500/35 dark:bg-sky-400/25",
  "bg-amber-500/35 dark:bg-amber-400/25",
  "bg-violet-500/35 dark:bg-violet-400/25",
  "bg-rose-500/35 dark:bg-rose-400/25",
  "bg-cyan-500/35 dark:bg-cyan-400/25",
] as const

const MATCH_BORDER_CLASSES = [
  "border-l-emerald-500",
  "border-l-sky-500",
  "border-l-amber-500",
  "border-l-violet-500",
  "border-l-rose-500",
  "border-l-cyan-500",
] as const

export function getMatchHighlightClass(matchNumber?: number): string {
  if (!matchNumber) return "bg-primary/25"
  return MATCH_HIGHLIGHT_CLASSES[(matchNumber - 1) % MATCH_HIGHLIGHT_CLASSES.length]
}

export function getMatchBorderClass(matchNumber: number): string {
  return MATCH_BORDER_CLASSES[(matchNumber - 1) % MATCH_BORDER_CLASSES.length]
}

interface RegexMatchHighlightProps {
  segments: HighlightSegment[]
  emptyLabel: string
  className?: string
  activeMatchNumber?: number | null
  containerRef?: React.RefObject<HTMLDivElement | null>
  onMatchClick?: (matchNumber: number) => void
  jumpToResultLabel?: string
}

export function RegexMatchHighlight({
  segments,
  emptyLabel,
  className,
  activeMatchNumber,
  containerRef,
  onMatchClick,
  jumpToResultLabel,
}: RegexMatchHighlightProps) {
  if (segments.length === 0) {
    return (
      <div
        className={cn(
          "rounded-md border border-border bg-secondary/20 p-3 text-sm text-muted-foreground",
          className
        )}
      >
        {emptyLabel}
      </div>
    )
  }

  return (
    <div className="space-y-1">
      {onMatchClick && jumpToResultLabel && (
        <p className="text-[11px] text-muted-foreground">{jumpToResultLabel}</p>
      )}
      <div
        ref={containerRef}
        className={cn(
          "max-h-[420px] overflow-auto rounded-md border border-border bg-secondary/20 p-3 font-mono text-sm leading-relaxed whitespace-pre-wrap break-words",
          className
        )}
        aria-live="polite"
      >
        {segments.map((segment, i) =>
          segment.highlighted ? (
            <mark
              key={i}
              id={segment.matchNumber ? `regex-match-${segment.matchNumber}` : undefined}
              role={onMatchClick && segment.matchNumber ? "button" : undefined}
              tabIndex={onMatchClick && segment.matchNumber ? 0 : undefined}
              onClick={
                onMatchClick && segment.matchNumber
                  ? () => onMatchClick(segment.matchNumber!)
                  : undefined
              }
              onKeyDown={
                onMatchClick && segment.matchNumber
                  ? (e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault()
                        onMatchClick(segment.matchNumber!)
                      }
                    }
                  : undefined
              }
              className={cn(
                "scroll-mt-24 rounded-sm px-0.5 ring-inset transition-shadow [color:inherit]",
                getMatchHighlightClass(segment.matchNumber),
                segment.matchNumber === activeMatchNumber &&
                  "ring-2 ring-primary shadow-sm shadow-primary/20",
                onMatchClick && segment.matchNumber && "cursor-pointer hover:ring-1 hover:ring-primary/50"
              )}
              title={segment.matchNumber ? `#${segment.matchNumber}` : undefined}
            >
              {segment.text}
            </mark>
          ) : (
            <span key={i}>{segment.text}</span>
          )
        )}
      </div>
    </div>
  )
}
