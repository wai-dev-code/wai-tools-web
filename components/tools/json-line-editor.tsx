"use client"

import { useRef, useEffect, useMemo } from "react"
import { cn } from "@/lib/utils"

interface JsonLineEditorProps {
  value: string
  onChange: (value: string) => void
  showLineNumbers?: boolean
  readOnly?: boolean
  placeholder?: string
  className?: string
}

const LINE_HEIGHT = 21

export function JsonLineEditor({
  value,
  onChange,
  showLineNumbers = true,
  readOnly = false,
  placeholder,
  className,
}: JsonLineEditorProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const gutterRef = useRef<HTMLDivElement>(null)

  const lineCount = useMemo(() => {
    if (!value) return 1
    return value.split("\n").length
  }, [value])

  const lineNumbers = useMemo(
    () => Array.from({ length: lineCount }, (_, i) => i + 1),
    [lineCount]
  )

  useEffect(() => {
    const ta = textareaRef.current
    const gutter = gutterRef.current
    if (!ta || !gutter || !showLineNumbers) return

    const syncScroll = () => {
      gutter.scrollTop = ta.scrollTop
    }
    ta.addEventListener("scroll", syncScroll)
    return () => ta.removeEventListener("scroll", syncScroll)
  }, [showLineNumbers])

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

  return (
    <div
      className={cn(
        "flex h-[min(60vh,520px)] min-h-[280px] overflow-hidden rounded-lg border border-border bg-secondary/20",
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
            <div key={n} style={{ height: LINE_HEIGHT, lineHeight: `${LINE_HEIGHT}px` }}>
              {n}
            </div>
          ))}
        </div>
      )}
      <textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        readOnly={readOnly}
        placeholder={placeholder}
        spellCheck={false}
        className={cn(
          "min-h-0 flex-1 resize-none overflow-y-auto bg-transparent px-3 py-3 font-mono text-sm text-foreground outline-none",
          "placeholder:text-muted-foreground/60",
          readOnly && "cursor-default"
        )}
        style={{ lineHeight: `${LINE_HEIGHT}px`, tabSize: 2 }}
      />
    </div>
  )
}
