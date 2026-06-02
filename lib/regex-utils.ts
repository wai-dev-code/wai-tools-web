export type RegexFlagKey = "g" | "i" | "m" | "s" | "u" | "y"

export type RegexFlags = Record<RegexFlagKey, boolean>

export const DEFAULT_REGEX_FLAGS: RegexFlags = {
  g: true,
  i: false,
  m: false,
  s: false,
  u: false,
  y: false,
}

export interface CaptureGroupInfo {
  index: number
  value: string
  name?: string
}

export interface RegexMatchInfo {
  matchNumber: number
  value: string
  index: number
  length: number
  line: number
  column: number
  groups: CaptureGroupInfo[]
}

export type RegexStatus = "empty" | "valid" | "invalid"

export interface RegexErrorInfo {
  message: string
  position: number | null
}

export interface RegexExecutionResult {
  status: RegexStatus
  error: RegexErrorInfo | null
  matches: RegexMatchInfo[]
  matchCount: number
  captureGroupCount: number
  flagString: string
}

export interface HighlightSegment {
  text: string
  highlighted: boolean
  matchNumber?: number
}

export interface RegexUnitTestResult {
  id: string
  text: string
  shouldMatch: boolean
  passed: boolean
}

export function flagsToString(flags: RegexFlags): string {
  return (flags.g ? "g" : "") + (flags.i ? "i" : "") + (flags.m ? "m" : "") + (flags.s ? "s" : "") + (flags.u ? "u" : "") + (flags.y ? "y" : "")
}

/** Count numbered capturing groups in a pattern source string */
export function countCaptureGroups(source: string): number {
  try {
    return new RegExp(`${source}|`).exec("")!.length - 1
  } catch {
    return 0
  }
}

export function getLineColumn(text: string, index: number): { line: number; column: number } {
  const before = text.slice(0, index)
  const lines = before.split("\n")
  return { line: lines.length, column: (lines[lines.length - 1]?.length ?? 0) + 1 }
}

export function parseRegexError(error: unknown, pattern: string): RegexErrorInfo {
  const message = error instanceof Error ? error.message : "Invalid regular expression"
  const position = parseErrorPosition(message, pattern)
  return { message, position }
}

function parseErrorPosition(message: string, pattern: string): number | null {
  const patterns = [/position (\d+)/i, /at index (\d+)/i, /position: (\d+)/i, /column (\d+)/i]
  for (const re of patterns) {
    const m = message.match(re)
    if (m) {
      const pos = Number.parseInt(m[1], 10)
      if (Number.isFinite(pos) && pos >= 0 && pos <= pattern.length) return pos
    }
  }
  return findApproximateErrorIndex(pattern)
}

/** Incrementally compile prefixes to locate first invalid index */
function findApproximateErrorIndex(pattern: string): number | null {
  if (!pattern) return null
  for (let i = 1; i <= pattern.length; i++) {
    try {
      RegExp(pattern.slice(0, i))
    } catch {
      return i - 1
    }
  }
  return null
}

function extractGroups(match: RegExpMatchArray): CaptureGroupInfo[] {
  const groups: CaptureGroupInfo[] = []

  for (let i = 1; i < match.length; i++) {
    const value = match[i]
    if (value === undefined) continue
    groups.push({ index: i, value })
  }

  if (match.groups) {
    for (const [name, value] of Object.entries(match.groups)) {
      if (value === undefined) continue
      const str = String(value)
      const existing = groups.find((g) => g.value === str && !g.name)
      if (existing) {
        existing.name = name
      } else if (!groups.some((g) => g.name === name)) {
        groups.push({ index: groups.length + 1, name, value: str })
      }
    }
  }

  return groups
}

function buildMatchInfo(match: RegExpMatchArray, matchNumber: number, text: string): RegexMatchInfo {
  const index = match.index ?? 0
  const { line, column } = getLineColumn(text, index)
  return {
    matchNumber,
    value: match[0],
    index,
    length: match[0].length,
    line,
    column,
    groups: extractGroups(match),
  }
}

export function formatCaptureGroupsForCopy(matches: RegexMatchInfo[]): string {
  const blocks = matches
    .map((m) => {
      if (m.groups.length === 0) return null
      const lines = m.groups.map((g) =>
        g.name ? `Match #${m.matchNumber} — <${g.name}>: ${g.value}` : `Match #${m.matchNumber} — Group ${g.index}: ${g.value}`
      )
      return lines.join("\n")
    })
    .filter(Boolean)
  return blocks.join("\n\n")
}

export function executeRegex(pattern: string, flags: RegexFlags, text: string): RegexExecutionResult {
  const trimmed = pattern.trim()
  const flagString = flagsToString(flags)

  if (!trimmed) {
    return {
      status: "empty",
      error: null,
      matches: [],
      matchCount: 0,
      captureGroupCount: 0,
      flagString,
    }
  }

  let regex: RegExp
  try {
    regex = new RegExp(trimmed, flagString)
  } catch (e) {
    return {
      status: "invalid",
      error: parseRegexError(e, trimmed),
      matches: [],
      matchCount: 0,
      captureGroupCount: 0,
      flagString,
    }
  }

  const captureGroupCount = countCaptureGroups(trimmed)
  const matches: RegexMatchInfo[] = []

  try {
    if (flags.g) {
      const globalFlags = flagString.includes("g") ? flagString : `${flagString}g`
      for (const m of text.matchAll(new RegExp(trimmed, globalFlags))) {
        matches.push(buildMatchInfo(m, matches.length + 1, text))
      }
    } else {
      const m = regex.exec(text)
      if (m) matches.push(buildMatchInfo(m, 1, text))
    }
  } catch (e) {
    return {
      status: "invalid",
      error: parseRegexError(e, trimmed),
      matches: [],
      matchCount: 0,
      captureGroupCount,
      flagString,
    }
  }

  return {
    status: "valid",
    error: null,
    matches,
    matchCount: matches.length,
    captureGroupCount,
    flagString,
  }
}

export function buildHighlightSegments(text: string, matches: RegexMatchInfo[]): HighlightSegment[] {
  if (!text) return []
  if (matches.length === 0) return [{ text, highlighted: false }]

  const sorted = [...matches].sort((a, b) => a.index - b.index)
  const segments: HighlightSegment[] = []
  let cursor = 0

  for (const match of sorted) {
    if (match.index < cursor) continue
    if (match.index > cursor) {
      segments.push({ text: text.slice(cursor, match.index), highlighted: false })
    }
    segments.push({
      text: match.value,
      highlighted: true,
      matchNumber: match.matchNumber,
    })
    cursor = match.index + match.value.length
  }

  if (cursor < text.length) {
    segments.push({ text: text.slice(cursor), highlighted: false })
  }

  return segments
}

export function formatPatternWithFlags(pattern: string, flagString: string): string {
  const trimmed = pattern.trim()
  if (!trimmed) return ""
  return `/${trimmed}/${flagString}`
}

export function formatMatchResultsForCopy(matches: RegexMatchInfo[]): string {
  if (matches.length === 0) return ""

  return matches
    .map((m) => {
      const lines = [
        `Match #${m.matchNumber}`,
        `Value: ${m.value}`,
        `Position: ${m.index} (length ${m.length}, line ${m.line}, col ${m.column})`,
      ]
      for (const g of m.groups) {
        if (g.name) lines.push(`Group <${g.name}>: ${g.value}`)
        else lines.push(`Group ${g.index}: ${g.value}`)
      }
      return lines.join("\n")
    })
    .join("\n\n")
}

export type MatchExportFormat = "lines" | "csv" | "json"

export function formatMatchValuesExport(matches: RegexMatchInfo[], format: MatchExportFormat): string {
  const values = matches.map((m) => m.value)
  if (format === "lines") return values.join("\n")
  if (format === "csv") {
    return values.map((v) => `"${v.replace(/"/g, '""')}"`).join(",")
  }
  return JSON.stringify(values, null, 2)
}

export function executeReplace(
  pattern: string,
  flags: RegexFlags,
  text: string,
  replacement: string
): { output: string; error: RegexErrorInfo | null } {
  const trimmed = pattern.trim()
  if (!trimmed || !text) {
    return { output: text, error: null }
  }

  try {
    const regex = new RegExp(trimmed, flagsToString(flags))
    return { output: text.replace(regex, replacement), error: null }
  } catch (e) {
    return { output: text, error: parseRegexError(e, trimmed) }
  }
}

export function executeSplit(
  pattern: string,
  flags: RegexFlags,
  text: string
): { parts: string[]; error: RegexErrorInfo | null } {
  const trimmed = pattern.trim()
  if (!trimmed || !text) {
    return { parts: text ? [text] : [], error: null }
  }

  try {
    const flagString = flagsToString(flags)
    const splitFlags = flagString.includes("g") ? flagString : `${flagString}g`
    const parts = text.split(new RegExp(trimmed, splitFlags))
    return { parts, error: null }
  } catch (e) {
    return { parts: [], error: parseRegexError(e, trimmed) }
  }
}

export function runUnitTests(
  pattern: string,
  flags: RegexFlags,
  cases: { id: string; text: string; shouldMatch: boolean }[]
): RegexUnitTestResult[] {
  const trimmed = pattern.trim()
  if (!trimmed) {
    return cases.map((c) => ({ ...c, passed: false }))
  }

  const flagString = flagsToString(flags)
  try {
    new RegExp(trimmed, flagString)
  } catch {
    return cases.map((c) => ({ ...c, passed: false }))
  }

  return cases.map((c) => {
    const matched = new RegExp(trimmed, flagString).test(c.text)
    return { ...c, passed: matched === c.shouldMatch }
  })
}

export function doesPatternMatch(pattern: string, flags: RegexFlags, text: string): boolean {
  const trimmed = pattern.trim()
  if (!trimmed) return false
  try {
    return new RegExp(trimmed, flagsToString(flags)).test(text)
  } catch {
    return false
  }
}
