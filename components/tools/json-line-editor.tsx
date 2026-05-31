"use client"

import { useRef, useEffect, useMemo, useCallback } from "react"
import { cn } from "@/lib/utils"
import type { LineHighlight } from "@/lib/json-utils"
import { highlightJsonLine } from "@/components/tools/json-syntax"

interface JsonLineEditorProps {
  value: string
  onChange: (value: string) => void
  showLineNumbers?: boolean
  readOnly?: boolean
  placeholder?: string
  className?: string
  highlights?: LineHighlight[]
  errorLine?: number
  scrollToLine?: number
  wordWrap?: boolean
  syntaxHighlight?: boolean
}

const LINE_HEIGHT = 21

export function JsonLineEditor({
  value,
  onChange,
  showLineNumbers = true,
  readOnly = false,
  placeholder,
  className,
  highlights = [],
  errorLine,
  scrollToLine,
  wordWrap = false,
  syntaxHighlight = false,
}: JsonLineEditorProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const gutterRef = useRef<HTMLDivElement>(null)
  const highlightRef = useRef<HTMLPreElement>(null)

  const lines = useMemo(() => value.split("\n"), [value])

  const lineCount = useMemo(() => {
    if (!value) return 1
    return lines.length
  }, [value, lines.length])

  const lineNumbers = useMemo(
    () => Array.from({ length: lineCount }, (_, i) => i + 1),
    [lineCount]
  )

  const highlightsByLine = useMemo(() => {
    const map = new Map<number, LineHighlight[]>()
    for (const h of highlights) {
      const list = map.get(h.line) ?? []
      list.push(h)
      map.set(h.line, list)
    }
    return map
  }, [highlights])

  const syncScroll = useCallback(() => {
    const ta = textareaRef.current
    const gutter = gutterRef.current
    const highlight = highlightRef.current
    if (!ta) return
    if (gutter) gutter.scrollTop = ta.scrollTop
    if (highlight) {
      highlight.scrollTop = ta.scrollTop
      highlight.scrollLeft = ta.scrollLeft
    }
  }, [])

  useEffect(() => {
    const ta = textareaRef.current
    if (!ta) return
    ta.addEventListener("scroll", syncScroll)
    return () => ta.removeEventListener("scroll", syncScroll)
  }, [syncScroll])

  useEffect(() => {
    if (!scrollToLine) return
    const ta = textareaRef.current
    if (!ta) return
    ta.scrollTop = Math.max(0, (scrollToLine - 3) * LINE_HEIGHT)
    syncScroll()
  }, [scrollToLine, syncScroll])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Tab") {
      e.preventDefault()
      const ta = e.currentTarget
      const start = ta.selectionStart
      const end = ta.selectionEnd
      const next = value.slice(0, start) + "  " + value.slice(end)
      onChange(next)
      requestAnimationFrame(() => {
        ta.selectionStart = ta.selectionEnd = start + 2
      })
    }
  }

  const renderHighlightedLine = (lineText: string, lineNumber: number) => {
    const lineHighlights = highlightsByLine.get(lineNumber)
    if (!lineHighlights?.length) {
      if (syntaxHighlight) return highlightJsonLine(lineText)
      return lineText || "\u00a0"
    }

    const sorted = [...lineHighlights].sort((a, b) => a.startCol - b.startCol)
    const parts: React.ReactNode[] = []
    let cursor = 0

    for (const h of sorted) {
      const start = Math.max(0, h.startCol - 1)
      const end = Math.max(start, h.endCol - 1)
      if (start > cursor) {
        const chunk = lineText.slice(cursor, start)
        parts.push(syntaxHighlight ? highlightJsonLine(chunk) : chunk)
      }
      parts.push(
        <mark
          key={`${lineNumber}-${start}-${h.kind}`}
          className={cn(
            "rounded-sm px-0",
            h.kind === "search" && "bg-yellow-400/35 text-foreground",
            h.kind === "error" && "bg-destructive/40 text-destructive-foreground underline decoration-destructive"
          )}
        >
          {lineText.slice(start, end) || "\u00a0"}
        </mark>
      )
      cursor = end
    }

    if (cursor < lineText.length) {
      const chunk = lineText.slice(cursor)
      parts.push(syntaxHighlight ? highlightJsonLine(chunk) : chunk)
    }

    return parts.length ? parts : "\u00a0"
  }

  const wrapClass = wordWrap ? "whitespace-pre-wrap break-all" : "whitespace-pre"
  const needsHighlightLayer = syntaxHighlight || highlights.length > 0
  const editorFontStyle = {
    lineHeight: `${LINE_HEIGHT}px`,
    tabSize: 2,
    fontVariantLigatures: "none" as const,
  }

  return (
    <div
      className={cn(
        "flex h-[var(--tool-editor-min-h)] min-h-[var(--tool-panel-min-h)] overflow-hidden rounded-lg border border-border bg-secondary/20",
        className
      )}
    >
      {showLineNumbers && (
        <div
          ref={gutterRef}
          className="hide-scrollbar w-11 shrink-0 overflow-y-auto border-r border-border bg-muted/40 py-3 text-right font-mono text-xs text-muted-foreground select-none"
          aria-hidden
        >
          {lineNumbers.map((n) => (
            <div
              key={n}
              className={cn(
                errorLine === n && "bg-destructive/15 font-semibold text-destructive"
              )}
              style={{ height: LINE_HEIGHT, lineHeight: `${LINE_HEIGHT}px` }}
            >
              {n}
            </div>
          ))}
        </div>
      )}

      <div className="relative min-h-0 min-w-0 flex-1">
        {needsHighlightLayer && (
          <pre
            ref={highlightRef}
            aria-hidden
            className={cn(
              "pointer-events-none absolute inset-0 overflow-hidden px-3 py-3 font-mono text-sm [font-variant-ligatures:none]",
              wrapClass
            )}
            style={editorFontStyle}
          >
            {lines.map((line, i) => (
              <div key={i} style={{ minHeight: LINE_HEIGHT, lineHeight: `${LINE_HEIGHT}px` }}>
                {renderHighlightedLine(line, i + 1)}
              </div>
            ))}
          </pre>
        )}

        <textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          onScroll={syncScroll}
          readOnly={readOnly}
          placeholder={placeholder}
          spellCheck={false}
          className={cn(
            "absolute inset-0 resize-none overflow-auto bg-transparent px-3 py-3 font-mono text-sm outline-none [font-variant-ligatures:none]",
            wrapClass,
            needsHighlightLayer
              ? "text-transparent caret-foreground selection:bg-primary/25"
              : "text-foreground",
            "placeholder:text-muted-foreground/60",
            readOnly && "cursor-default"
          )}
          style={editorFontStyle}
        />
      </div>
    </div>
  )
}
