/** Standalone regex logic checks (no TS path aliases) */

const DEFAULT_REGEX_FLAGS = { g: true, i: false, m: false, s: false, u: false, y: false }

function flagsToString(flags) {
  return (flags.g ? "g" : "") + (flags.i ? "i" : "") + (flags.m ? "m" : "") + (flags.s ? "s" : "") + (flags.u ? "u" : "") + (flags.y ? "y" : "")
}

function extractGroups(match) {
  const groups = []
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
      if (existing) existing.name = name
      else if (!groups.some((g) => g.name === name)) {
        groups.push({ index: groups.length + 1, name, value: str })
      }
    }
  }
  return groups
}

function executeRegex(pattern, flags, text) {
  const trimmed = pattern.trim()
  const flagString = flagsToString(flags)
  if (!trimmed) return { status: "empty", matches: [] }
  let regex
  try {
    regex = new RegExp(trimmed, flagString)
  } catch {
    return { status: "invalid", matches: [] }
  }
  const matches = []
  if (flags.g) {
    const globalFlags = flagString.includes("g") ? flagString : `${flagString}g`
    for (const m of text.matchAll(new RegExp(trimmed, globalFlags))) {
      matches.push({ value: m[0], groups: extractGroups(m) })
    }
  } else {
    const m = regex.exec(text)
    if (m) matches.push({ value: m[0], groups: extractGroups(m) })
  }
  return { status: "valid", matches }
}

function runUnitTests(pattern, flags, cases) {
  const trimmed = pattern.trim()
  const flagString = flagsToString(flags)
  return cases.map((c) => {
    const matched = new RegExp(trimmed, flagString).test(c.text)
    return { ...c, passed: matched === c.shouldMatch }
  })
}

const failures = []
const ok = (name, cond, detail = "") => {
  if (!cond) failures.push(`${name}${detail ? `: ${detail}` : ""}`)
}

const emailPat = "^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$"
const emailText = "alice@example.com\nbad@domain\nbob.smith+tag@company.co.uk"
const emailFlags = { ...DEFAULT_REGEX_FLAGS, g: true, m: true }
const emailR = executeRegex(emailPat, emailFlags, emailText)
ok("email 2 matches", emailR.matches.length === 2, String(emailR.matches.length))

const mdPat = "\\[([^\\]]+)\\]\\(([^)]+)\\)"
const mdText = "See [WaiHub](https://waihub.net) and [docs](/docs)."
const mdR = executeRegex(mdPat, { ...DEFAULT_REGEX_FLAGS, g: true }, mdText)
const g = mdR.matches[0]?.groups ?? []
const vals = g.map((x) => x.value)
ok("markdown no dup group values", vals.length === new Set(vals).size, JSON.stringify(g))

const ut = runUnitTests("\\d+", { ...DEFAULT_REGEX_FLAGS, g: true }, [
  { text: "a1", shouldMatch: true },
  { text: "b2", shouldMatch: true },
])
ok("unit test g lastIndex (fixed)", ut.every((t) => t.passed), JSON.stringify(ut))

const named = executeRegex("(?<x>\\w+) (\\d+)", { ...DEFAULT_REGEX_FLAGS, g: true }, "foo 42")
const ng = named.matches[0]?.groups ?? []
ok("named groups no duplicate", ng.length === 2 && ng.every((g) => g.name || g.index <= 2), JSON.stringify(ng))

const patterns = [
  ["url", "https?:\\/\\/[\\w.-]+(?:\\.[\\w.-]+)+[\\w\\-._~:/?#[\\]@!$&'()*+,;=.]*"],
  ["ipv6", "^(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$|^::(?:[0-9a-fA-F]{1,4}:){0,6}[0-9a-fA-F]{1,4}$|^(?:[0-9a-fA-F]{1,4}:){1,7}:$"],
]
for (const [id, p] of patterns) {
  try {
    new RegExp(p, "g")
    ok(`${id} compiles`, true)
  } catch (e) {
    ok(`${id} compiles`, false, e.message)
  }
}

if (failures.length) {
  console.log("FAILURES:\n" + failures.map((f) => `  - ${f}`).join("\n"))
  process.exit(1)
}
console.log("All standalone checks passed")
