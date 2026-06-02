"use client"

import { cn } from "@/lib/utils"

export interface PatternSnippet {
  label: string
  insert: string
}

interface RegexPatternSnippetsProps {
  title: string
  snippets: PatternSnippet[]
  onInsert: (token: string) => void
  className?: string
}

export function RegexPatternSnippets({ title, snippets, onInsert, className }: RegexPatternSnippetsProps) {
  return (
    <div className={cn("space-y-1.5", className)}>
      <p className="text-xs font-medium text-muted-foreground">{title}</p>
      <div className="flex flex-wrap gap-1.5">
        {snippets.map((snippet) => (
          <button
            key={snippet.insert}
            type="button"
            onClick={() => onInsert(snippet.insert)}
            className="rounded-md border border-border bg-secondary/40 px-2 py-1 font-mono text-xs transition-colors hover:bg-accent/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            title={snippet.insert}
          >
            {snippet.label}
          </button>
        ))}
      </div>
    </div>
  )
}
