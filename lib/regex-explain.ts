export interface RegexExplainPart {
  token: string
  meaningKey: string
  start: number
  end: number
}

export interface RegexExplainToken extends RegexExplainPart {
  meaning: string
}

/** Tokenize a regex pattern into explainable parts */
export function tokenizeRegexPattern(pattern: string): RegexExplainPart[] {
  const parts: RegexExplainPart[] = []
  let i = 0

  const push = (token: string, meaningKey: string, start: number, end: number) => {
    parts.push({ token, meaningKey, start, end })
  }

  while (i < pattern.length) {
    const start = i
    const char = pattern[i]

    if (char === "\\" && i + 1 < pattern.length) {
      const seq = pattern.slice(i, i + 2)
      push(seq, seq, start, i + 2)
      i += 2
      continue
    }

    if (char === "[") {
      let j = i + 1
      if (j < pattern.length && pattern[j] === "]") j++
      while (j < pattern.length && pattern[j] !== "]") {
        if (pattern[j] === "\\" && j + 1 < pattern.length) j += 2
        else j++
      }
      const end = Math.min(j + 1, pattern.length)
      push(pattern.slice(i, end), "[class]", start, end)
      i = end
      continue
    }

    if (char === "(") {
      let meaningKey = "(group)"
      if (pattern.startsWith("(?:", i)) meaningKey = "(?:"
      else if (pattern.startsWith("(?=", i)) meaningKey = "(?="
      else if (pattern.startsWith("(?!", i)) meaningKey = "(?!"
      else if (pattern.startsWith("(?<", i)) meaningKey = "(group)"

      let depth = 0
      let j = i
      do {
        if (pattern[j] === "\\" && j + 1 < pattern.length) {
          j += 2
          continue
        }
        if (pattern[j] === "(") depth++
        if (pattern[j] === ")") depth--
        j++
      } while (j < pattern.length && depth > 0)

      push(pattern.slice(i, j), meaningKey, start, j)
      i = j
      continue
    }

    if (char === "{") {
      let j = i + 1
      while (j < pattern.length && pattern[j] !== "}") j++
      const end = Math.min(j + 1, pattern.length)
      push(pattern.slice(i, end), "{quant}", start, end)
      i = end
      continue
    }

    if (char === "^") {
      push("^", "^", start, start + 1)
      i++
      continue
    }
    if (char === "$") {
      push("$", "$", start, start + 1)
      i++
      continue
    }
    if (char === ".") {
      push(".", ".", start, start + 1)
      i++
      continue
    }
    if (char === "|") {
      push("|", "|", start, start + 1)
      i++
      continue
    }
    if (char === "+" || char === "*" || char === "?") {
      push(char, char, start, start + 1)
      i++
      continue
    }

    push(char, "literal", start, start + 1)
    i++
  }

  return parts
}

export function buildRegexExplanation(
  pattern: string,
  meanings: Record<string, string>
): RegexExplainToken[] {
  const trimmed = pattern.trim()
  if (!trimmed) return []

  try {
    RegExp(trimmed)
  } catch {
    return []
  }

  return tokenizeRegexPattern(trimmed).map(({ token, meaningKey, start, end }) => ({
    token,
    meaningKey,
    start,
    end,
    meaning: meanings[meaningKey] ?? meanings.literal ?? token,
  }))
}
