function base64UrlToBytes(str: string): Uint8Array | null {
  try {
    let base64 = str.replace(/-/g, "+").replace(/_/g, "/")
    const pad = base64.length % 4
    if (pad) base64 += "=".repeat(4 - pad)
    const binary = atob(base64)
    return Uint8Array.from(binary, (c) => c.charCodeAt(0))
  } catch {
    return null
  }
}

function bytesToBase64Url(bytes: Uint8Array): string {
  let binary = ""
  for (const b of bytes) binary += String.fromCharCode(b)
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "")
}

export type JwtVerifyResult =
  | { status: "skipped" }
  | { status: "invalid-structure" }
  | { status: "unsupported-alg"; alg: string }
  | { status: "valid" }
  | { status: "invalid" }

/** Verify HS256 JWT signature with a secret (browser Web Crypto) */
export async function verifyJwtHs256(token: string, secret: string): Promise<JwtVerifyResult> {
  const trimmed = token.trim()
  if (!trimmed) return { status: "skipped" }

  const parts = trimmed.split(".")
  if (parts.length !== 3) return { status: "invalid-structure" }

  const [headerPart, payloadPart, signaturePart] = parts

  let alg: string | null = null
  try {
    const headerJson = JSON.parse(
      new TextDecoder().decode(base64UrlToBytes(headerPart) ?? new Uint8Array()),
    ) as { alg?: string }
    alg = headerJson.alg ?? null
  } catch {
    return { status: "invalid-structure" }
  }

  if (alg !== "HS256") {
    return { status: "unsupported-alg", alg: alg ?? "unknown" }
  }

  if (!secret) return { status: "skipped" }

  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  )

  const data = new TextEncoder().encode(`${headerPart}.${payloadPart}`)
  const sigBuffer = await crypto.subtle.sign("HMAC", key, data)
  const expected = bytesToBase64Url(new Uint8Array(sigBuffer))

  return expected === signaturePart ? { status: "valid" } : { status: "invalid" }
}
