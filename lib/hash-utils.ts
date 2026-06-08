import md5 from "js-md5"

export const HASH_ALGORITHMS = ["MD5", "SHA-1", "SHA-256", "SHA-512"] as const

export type HashAlgorithm = (typeof HASH_ALGORITHMS)[number]

export type HashResults = Record<HashAlgorithm, string>

const emptyResults = (): HashResults => ({
  MD5: "",
  "SHA-1": "",
  "SHA-256": "",
  "SHA-512": "",
})

function bufferToHex(buffer: ArrayBuffer): string {
  return Array.from(new Uint8Array(buffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("")
}

async function digestSubtle(algorithm: HashAlgorithm, text: string): Promise<string> {
  const data = new TextEncoder().encode(text)
  const buffer = await crypto.subtle.digest(algorithm, data)
  return bufferToHex(buffer)
}

export async function computeHash(algorithm: HashAlgorithm, text: string): Promise<string> {
  if (algorithm === "MD5") {
    return md5(text)
  }
  return digestSubtle(algorithm, text)
}

export async function computeAllHashes(text: string): Promise<HashResults> {
  if (!text) return emptyResults()

  const [md5Hash, sha1, sha256, sha512] = await Promise.all([
    Promise.resolve(md5(text)),
    digestSubtle("SHA-1", text),
    digestSubtle("SHA-256", text),
    digestSubtle("SHA-512", text),
  ])

  return {
    MD5: md5Hash,
    "SHA-1": sha1,
    "SHA-256": sha256,
    "SHA-512": sha512,
  }
}
