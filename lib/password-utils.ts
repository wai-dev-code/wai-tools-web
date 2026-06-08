export const CHARSET = {
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  symbols: "!@#$%^&*()_+-=[]{}|;:,.<>?",
} as const

export type PasswordCharsetOptions = {
  uppercase: boolean
  lowercase: boolean
  numbers: boolean
  symbols: boolean
  customChars?: string
  excludeChars?: string
}

export type PasswordStrength = "weak" | "average" | "strong"

export const PASSWORD_MIN_LENGTH = 4
export const PASSWORD_MAX_LENGTH = 128
export const PASSWORD_DEFAULT_LENGTH = 16

function dedupeChars(value: string): string {
  return [...new Set(value.split(""))].join("")
}

export function buildCharsetPool(opts: PasswordCharsetOptions): string {
  let pool = ""
  if (opts.uppercase) pool += CHARSET.uppercase
  if (opts.lowercase) pool += CHARSET.lowercase
  if (opts.numbers) pool += CHARSET.numbers
  if (opts.symbols) pool += CHARSET.symbols
  if (opts.customChars) {
    for (const ch of opts.customChars) {
      if (!pool.includes(ch)) pool += ch
    }
  }
  pool = dedupeChars(pool)
  const exclude = new Set((opts.excludeChars ?? "").split(""))
  if (exclude.size > 0) {
    pool = pool
      .split("")
      .filter((c) => !exclude.has(c))
      .join("")
  }
  return pool
}

function pickRandomChar(pool: string): string {
  const arr = new Uint32Array(1)
  crypto.getRandomValues(arr)
  return pool[arr[0]! % pool.length]!
}

function ensureCharsetCoverage(
  password: string,
  opts: PasswordCharsetOptions,
  pool: string,
): string {
  const sets: string[] = []
  if (opts.uppercase) sets.push(CHARSET.uppercase)
  if (opts.lowercase) sets.push(CHARSET.lowercase)
  if (opts.numbers) sets.push(CHARSET.numbers)
  if (opts.symbols) sets.push(CHARSET.symbols)

  const exclude = new Set((opts.excludeChars ?? "").split(""))
  const chars = password.split("")

  for (const set of sets) {
    const available = [...set].filter((c) => pool.includes(c) && !exclude.has(c))
    if (available.length === 0) continue
    const has = chars.some((c) => available.includes(c))
    if (!has) {
      const posArr = new Uint32Array(2)
      crypto.getRandomValues(posArr)
      const pos = posArr[0]! % chars.length
      chars[pos] = available[posArr[1]! % available.length]!
    }
  }

  return chars.join("")
}

export function generatePassword(
  length: number,
  opts: PasswordCharsetOptions,
): { password: string | null; error?: "empty_pool" | "invalid_length" } {
  const clamped = Math.min(PASSWORD_MAX_LENGTH, Math.max(PASSWORD_MIN_LENGTH, length))
  const pool = buildCharsetPool(opts)
  if (!pool) return { password: null, error: "empty_pool" }
  if (clamped < 1) return { password: null, error: "invalid_length" }

  const arr = new Uint32Array(clamped)
  crypto.getRandomValues(arr)
  let password = ""
  for (let i = 0; i < clamped; i++) {
    password += pool[arr[i]! % pool.length]!
  }

  return { password: ensureCharsetCoverage(password, opts, pool) }
}

export function assessPasswordStrength(
  password: string,
  opts: PasswordCharsetOptions,
): { level: PasswordStrength; score: number } {
  if (!password) return { level: "weak", score: 0 }

  let score = 0
  const len = password.length

  if (len >= 8) score += 12
  if (len >= 12) score += 12
  if (len >= 16) score += 10
  if (len >= 20) score += 8

  const hasLower = /[a-z]/.test(password)
  const hasUpper = /[A-Z]/.test(password)
  const hasNumber = /[0-9]/.test(password)
  const hasSymbol = /[^A-Za-z0-9]/.test(password)
  const variety = [hasLower, hasUpper, hasNumber, hasSymbol].filter(Boolean).length
  score += variety * 10

  const poolSize = Math.max(1, buildCharsetPool(opts).length)
  const entropy = len * Math.log2(poolSize)
  if (entropy >= 40) score += 8
  if (entropy >= 60) score += 8
  if (entropy >= 80) score += 6

  score = Math.min(100, score)

  let level: PasswordStrength = "weak"
  if (score >= 70) level = "strong"
  else if (score >= 40) level = "average"

  return { level, score }
}
