"use client"

import { useMemo } from "react"
import { buildSyntaxHighlightParts, SYNTAX_KIND_CLASS } from "@/lib/regex-syntax-highlight"
import { cn } from "@/lib/utils"

interface RegexPatternInputProps {
  id: string
  value: string
  onChange: (value: string) => void
  inputRef: React.RefObject<HTMLInputElement | null>
  placeholder: string
  invalid?: boolean
  selectionStart?: number
  selectionEnd?: number
  errorPosition?: number | null
  className?: string
}

export function RegexPatternInput({
  id,
  value,
  onChange,
  inputRef,
  placeholder,
  invalid,
  errorPosition,
  className,
}: RegexPatternInputProps) {
  const parts = useMemo(() => buildSyntaxHighlightParts(value), [value])

  return (
    <div className={cn("relative min-w-0 flex-1", className)}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex h-11 items-center overflow-hidden whitespace-pre px-0 font-mono text-base sm:text-lg"
      >
        {value ? (
          parts.map((part, i) => (
            <span key={`${part.start}-${i}`} className={SYNTAX_KIND_CLASS[part.kind]}>
              {part.token}
            </span>
          ))
        ) : (
          <span className="text-muted-foreground">{placeholder}</span>
        )}
        {errorPosition !== null && errorPosition !== undefined && errorPosition < value.length && (
          <span
            className="absolute bottom-1 h-0.5 bg-destructive"
            style={{
              left: `${estimateCharOffset(value, errorPosition, parts)}px`,
              width: "0.6em",
            }}
          />
        )}
      </div>
      <input
        ref={inputRef}
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="relative h-11 w-full min-w-0 border-0 bg-transparent px-0 py-0 text-left font-mono text-base text-transparent caret-foreground shadow-none outline-none focus-visible:ring-0 sm:text-lg"
        placeholder=""
        spellCheck={false}
        autoComplete="off"
        aria-invalid={invalid}
      />
    </div>
  )
}

function estimateCharOffset(value: string, index: number, parts: ReturnType<typeof buildSyntaxHighlightParts>): number {
  let offset = 0
  for (const part of parts) {
    if (index >= part.start && index < part.end) {
      return offset + (index - part.start) * 9
    }
    offset += part.token.length * 9
  }
  return Math.min(index * 9, value.length * 9)
}
