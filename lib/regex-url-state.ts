import type { RegexFlags } from "@/lib/regex-utils"
import { DEFAULT_REGEX_FLAGS, flagsToString } from "@/lib/regex-utils"

export interface RegexUrlState {
  pattern: string
  text: string
  flags: RegexFlags
  replacement: string
  mode?: "match" | "replace" | "split"
}

const FLAG_KEYS = ["g", "i", "m", "s", "u", "y"] as const
const MODE_KEYS = ["match", "replace", "split"] as const

export function encodeRegexUrlState(state: RegexUrlState): URLSearchParams {
  const params = new URLSearchParams()
  if (state.pattern) params.set("p", state.pattern)
  if (state.text) params.set("t", state.text)
  const flagString = flagsToString(state.flags)
  if (flagString) params.set("f", flagString)
  if (state.replacement) params.set("r", state.replacement)
  if (state.mode && state.mode !== "match") params.set("mode", state.mode)
  return params
}

export function decodeRegexUrlState(searchParams: URLSearchParams): Partial<RegexUrlState> {
  const pattern = searchParams.get("p") ?? ""
  const text = searchParams.get("t") ?? ""
  const replacement = searchParams.get("r") ?? ""
  const modeRaw = searchParams.get("mode")
  const mode =
    modeRaw && MODE_KEYS.includes(modeRaw as RegexUrlState["mode"])
      ? (modeRaw as RegexUrlState["mode"])
      : undefined
  const flagString = searchParams.get("f") ?? flagsToString(DEFAULT_REGEX_FLAGS)
  const flags = { ...DEFAULT_REGEX_FLAGS }

  for (const key of FLAG_KEYS) {
    flags[key] = flagString.includes(key)
  }

  return { pattern, text, flags, replacement, mode }
}

export function buildShareUrl(basePath: string, state: RegexUrlState): string {
  const params = encodeRegexUrlState(state)
  const query = params.toString()
  return query ? `${basePath}?${query}` : basePath
}
