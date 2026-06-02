"use client"

import { Plus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import type { RegexUnitTestResult } from "@/lib/regex-utils"
import { cn } from "@/lib/utils"

export interface UnitTestCase {
  id: string
  text: string
  shouldMatch: boolean
}

interface RegexSplitPanelProps {
  title: string
  hint: string
  emptyLabel: string
  parts: string[]
  className?: string
}

export function RegexSplitPanel({ title, hint, emptyLabel, parts, className }: RegexSplitPanelProps) {
  return (
    <div className={cn("space-y-2 rounded-md border border-border bg-card/50 p-3", className)}>
      <div>
        <Label>{title}</Label>
        <p className="mt-0.5 text-xs text-muted-foreground">{hint}</p>
      </div>
      {parts.length === 0 ? (
        <p className="text-sm text-muted-foreground">{emptyLabel}</p>
      ) : (
        <ul className="max-h-[160px] space-y-1 overflow-auto font-mono text-sm">
          {parts.map((part, i) => (
            <li key={i} className="rounded bg-secondary/30 px-2 py-1 break-all">
              [{i}] {part === "" ? '""' : part}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

interface RegexUnitTestsPanelProps {
  title: string
  passLabel: string
  failLabel: string
  shouldMatchLabel: string
  shouldNotMatchLabel: string
  addLabel: string
  placeholder: string
  cases: UnitTestCase[]
  results: RegexUnitTestResult[]
  onChangeCase: (id: string, patch: Partial<UnitTestCase>) => void
  onAddCase: () => void
  onRemoveCase: (id: string) => void
  className?: string
}

export function RegexUnitTestsPanel({
  title,
  passLabel,
  failLabel,
  shouldMatchLabel,
  shouldNotMatchLabel,
  addLabel,
  placeholder,
  cases,
  results,
  onChangeCase,
  onAddCase,
  onRemoveCase,
  className,
}: RegexUnitTestsPanelProps) {
  const resultMap = new Map(results.map((r) => [r.id, r]))

  return (
    <div className={cn("space-y-2 rounded-md border border-border bg-card/50 p-3", className)}>
      <div className="flex items-center justify-between gap-2">
        <Label>{title}</Label>
        <Button variant="outline" size="sm" className="h-7 px-2 text-xs" onClick={onAddCase}>
          <Plus className="mr-1 h-3 w-3" />
          {addLabel}
        </Button>
      </div>
      <div className="space-y-2">
        {cases.map((c) => {
          const result = resultMap.get(c.id)
          return (
            <div key={c.id} className="flex flex-wrap items-center gap-2">
              <Input
                value={c.text}
                onChange={(e) => onChangeCase(c.id, { text: e.target.value })}
                className="min-w-[120px] flex-1 font-mono text-xs"
                placeholder={placeholder}
              />
              <select
                value={c.shouldMatch ? "match" : "no"}
                onChange={(e) => onChangeCase(c.id, { shouldMatch: e.target.value === "match" })}
                className="h-9 rounded-md border border-border bg-background px-2 text-xs"
              >
                <option value="match">{shouldMatchLabel}</option>
                <option value="no">{shouldNotMatchLabel}</option>
              </select>
              {result && (
                <span
                  className={cn(
                    "rounded px-2 py-0.5 text-xs font-medium",
                    result.passed
                      ? "bg-green-500/15 text-green-700 dark:text-green-400"
                      : "bg-destructive/15 text-destructive"
                  )}
                >
                  {result.passed ? passLabel : failLabel}
                </span>
              )}
              <Button
                variant="ghost"
                size="sm"
                className="h-7 w-7 p-0"
                onClick={() => onRemoveCase(c.id)}
                aria-label="Remove"
              >
                <Trash2 className="h-3 w-3" />
              </Button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

interface RegexHubLinksProps {
  title: string
  description: string
  links: { id: string; href: string; label: string }[]
  className?: string
}

export function RegexHubLinks({ title, description, links, className }: RegexHubLinksProps) {
  return (
    <div className={cn("rounded-md border border-border bg-card/50 p-3", className)}>
      <p className="text-sm font-medium">{title}</p>
      <p className="mt-0.5 text-xs text-muted-foreground">{description}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {links.map((link) => (
          <a
            key={link.id}
            href={link.href}
            className="rounded-md border border-border bg-secondary/30 px-2 py-1 text-xs transition-colors hover:bg-accent/50"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  )
}

interface RegexHistoryPanelProps {
  title: string
  emptyLabel: string
  saveLabel: string
  entries: { pattern: string; text: string; label: string }[]
  onSave: () => void
  onLoad: (index: number) => void
  className?: string
}

export function RegexHistoryPanel({
  title,
  emptyLabel,
  saveLabel,
  entries,
  onSave,
  onLoad,
  className,
}: RegexHistoryPanelProps) {
  return (
    <div className={cn("rounded-md border border-border bg-card/50 p-3", className)}>
      <div className="flex items-center justify-between gap-2">
        <p className="text-sm font-medium">{title}</p>
        <Button variant="outline" size="sm" className="h-7 px-2 text-xs" onClick={onSave}>
          {saveLabel}
        </Button>
      </div>
      {entries.length === 0 ? (
        <p className="mt-2 text-xs text-muted-foreground">{emptyLabel}</p>
      ) : (
        <ul className="mt-2 space-y-1">
          {entries.map((entry, i) => (
            <li key={i}>
              <button
                type="button"
                onClick={() => onLoad(i)}
                className="w-full rounded px-2 py-1.5 text-left text-xs transition-colors hover:bg-accent/50"
              >
                <span className="block truncate font-mono text-primary">/{entry.pattern}/</span>
                <span className="block truncate text-muted-foreground">{entry.label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export function RegexSplitPreview({ value, className }: { value: string; className?: string }) {
  return (
    <Textarea readOnly value={value} className={cn("min-h-[80px] resize-none font-mono text-xs bg-secondary/20", className)} />
  )
}
