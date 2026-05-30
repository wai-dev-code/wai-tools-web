import type { ReactNode } from "react"

const TOKEN_CLASS = {
  key: "text-sky-600 dark:text-sky-400",
  string: "text-emerald-600 dark:text-emerald-400",
  number: "text-amber-600 dark:text-amber-400",
  boolean: "text-purple-600 dark:text-purple-400",
  null: "text-orange-500 dark:text-orange-400",
  punctuation: "text-muted-foreground",
} as const

export function highlightJsonLine(line: string): ReactNode {
  if (!line.trim()) return line || "\u00a0"

  const parts: ReactNode[] = []
  const re =
    /("(?:\\.|[^"\\])*")\s*(?=:)|("(?:\\.|[^"\\])*")|\b(true|false|null)\b|-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?|[{}\[\],:]/g

  let last = 0
  let match: RegExpExecArray | null

  while ((match = re.exec(line)) !== null) {
    if (match.index > last) {
      parts.push(line.slice(last, match.index))
    }

    const token = match[0]
    let className: string = TOKEN_CLASS.punctuation

    if (/^"/.test(token)) {
      className =
        line[match.index + token.length] === ":"
          ? TOKEN_CLASS.key
          : TOKEN_CLASS.string
    } else if (/^(true|false)$/.test(token)) {
      className = TOKEN_CLASS.boolean
    } else if (token === "null") {
      className = TOKEN_CLASS.null
    } else if (/^-?\d/.test(token)) {
      className = TOKEN_CLASS.number
    }

    parts.push(
      <span key={match.index} className={className}>
        {token}
      </span>
    )
    last = match.index + token.length
  }

  if (last < line.length) parts.push(line.slice(last))
  return parts.length ? parts : line
}
