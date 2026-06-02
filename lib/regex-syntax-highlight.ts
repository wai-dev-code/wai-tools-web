import { tokenizeRegexPattern, type RegexExplainPart } from "@/lib/regex-explain"

export type SyntaxTokenKind =
  | "anchor"
  | "charclass"
  | "group"
  | "quantifier"
  | "escape"
  | "literal"
  | "alternation"

export interface SyntaxHighlightPart extends RegexExplainPart {
  kind: SyntaxTokenKind
}

const KIND_MAP: Record<string, SyntaxTokenKind> = {
  "^": "anchor",
  $: "anchor",
  ".": "charclass",
  "[class]": "charclass",
  "(group)": "group",
  "(?:": "group",
  "(?=": "group",
  "(?!": "group",
  "?": "quantifier",
  "*": "quantifier",
  "+": "quantifier",
  "{quant}": "quantifier",
  "|": "alternation",
  literal: "literal",
}

function kindForPart(part: RegexExplainPart): SyntaxTokenKind {
  if (part.meaningKey.startsWith("\\")) return "escape"
  return KIND_MAP[part.meaningKey] ?? "literal"
}

export function buildSyntaxHighlightParts(pattern: string): SyntaxHighlightPart[] {
  return tokenizeRegexPattern(pattern).map((part) => ({
    ...part,
    kind: kindForPart(part),
  }))
}

export const SYNTAX_KIND_CLASS: Record<SyntaxTokenKind, string> = {
  anchor: "text-violet-600 dark:text-violet-400",
  charclass: "text-amber-600 dark:text-amber-400",
  group: "text-sky-600 dark:text-sky-400",
  quantifier: "text-rose-600 dark:text-rose-400",
  escape: "text-emerald-600 dark:text-emerald-400",
  literal: "text-foreground",
  alternation: "text-orange-600 dark:text-orange-400",
}
