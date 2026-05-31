export type UrlEncodeMode =
  | "component-encode"
  | "component-decode"
  | "uri-encode"
  | "uri-decode"
  | "query-parse"
  | "query-build"

export type UrlErrorCode = "invalidJsonObject" | "processFailed"

export interface UrlTransformResult {
  output: string
  error: UrlErrorCode | null
}

export function transformUrl(input: string, mode: UrlEncodeMode): UrlTransformResult {
  const text = input.trim()
  if (!text) return { output: "", error: null }

  try {
    switch (mode) {
      case "component-encode":
        return { output: encodeURIComponent(text), error: null }
      case "component-decode":
        return { output: decodeURIComponent(text.replace(/\+/g, "%20")), error: null }
      case "uri-encode":
        return { output: encodeURI(text), error: null }
      case "uri-decode":
        return { output: decodeURI(text), error: null }
      case "query-parse": {
        const params = new URLSearchParams(text.startsWith("?") ? text.slice(1) : text)
        const obj: Record<string, string> = {}
        params.forEach((value, key) => {
          obj[key] = value
        })
        return { output: JSON.stringify(obj, null, 2), error: null }
      }
      case "query-build": {
        const parsed = JSON.parse(text) as unknown
        if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
          return { output: "", error: "invalidJsonObject" }
        }
        const params = new URLSearchParams()
        for (const [key, value] of Object.entries(parsed as Record<string, unknown>)) {
          if (value == null) continue
          params.append(key, String(value))
        }
        return { output: params.toString(), error: null }
      }
      default:
        return { output: "", error: "processFailed" }
    }
  } catch {
    return { output: "", error: "processFailed" }
  }
}
