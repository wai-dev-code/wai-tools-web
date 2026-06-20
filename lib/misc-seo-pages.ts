import type { UrlEncodeMode } from "@/lib/url-utils"

export interface MiscSeoPageToolProps {
  urlMode?: UrlEncodeMode
}

export interface MiscSeoPageConfig {
  slug: string
  path: string
  toolSlug: string
  toolProps?: MiscSeoPageToolProps
}

export const miscSeoPages: MiscSeoPageConfig[] = [
  {
    slug: "url-encode",
    path: "/url-encode",
    toolSlug: "url-encoder",
    toolProps: { urlMode: "component-encode" },
  },
  {
    slug: "url-decode",
    path: "/url-decode",
    toolSlug: "url-encoder",
    toolProps: { urlMode: "component-decode" },
  },
  {
    slug: "query-string-parser",
    path: "/query-string-parser",
    toolSlug: "url-encoder",
    toolProps: { urlMode: "query-parse" },
  },
  {
    slug: "unix-timestamp",
    path: "/unix-timestamp",
    toolSlug: "timestamp",
  },
  {
    slug: "epoch-converter",
    path: "/epoch-converter",
    toolSlug: "timestamp",
  },
  {
    slug: "jwt-debugger",
    path: "/jwt-debugger",
    toolSlug: "jwt-decoder",
  },
  {
    slug: "md5-generator",
    path: "/md5-generator",
    toolSlug: "hash-generator",
  },
  {
    slug: "sha256-generator",
    path: "/sha256-generator",
    toolSlug: "hash-generator",
  },
]

export function getMiscSeoPage(slug: string): MiscSeoPageConfig | undefined {
  return miscSeoPages.find((p) => p.slug === slug)
}
