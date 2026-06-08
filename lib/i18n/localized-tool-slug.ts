export const localizedToolSlugs = [
  "json-formatter",
  "base64",
  "url-encoder",
  "jwt-decoder",
  "timestamp",
  "uuid-generator",
  "password-generator",
  "qr-code-generator",
  "regex-tester",
] as const

export type LocalizedToolSlug = (typeof localizedToolSlugs)[number]

export function isLocalizedToolSlug(slug: string): slug is LocalizedToolSlug {
  return localizedToolSlugs.includes(slug as LocalizedToolSlug)
}
