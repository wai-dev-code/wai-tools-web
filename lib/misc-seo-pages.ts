import type { UrlEncodeMode } from "@/lib/url-utils"
import type { HtmlEntityMode } from "@/lib/html-entity-utils"

export interface MiscSeoPageToolProps {
  urlMode?: UrlEncodeMode
  htmlMode?: HtmlEntityMode
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
  {
    slug: "cron-parser",
    path: "/cron-parser",
    toolSlug: "cron-parser",
  },
  {
    slug: "text-diff",
    path: "/text-diff",
    toolSlug: "text-diff",
  },
  {
    slug: "html-encode",
    path: "/html-encode",
    toolSlug: "html-encoder",
    toolProps: { htmlMode: "encode" },
  },
  {
    slug: "html-decode",
    path: "/html-decode",
    toolSlug: "html-encoder",
    toolProps: { htmlMode: "decode" },
  },
  {
    slug: "color-converter",
    path: "/color-converter",
    toolSlug: "color-converter",
  },
  {
    slug: "regex-tester",
    path: "/regex-tester",
    toolSlug: "regex-tester",
  },
]

export function getMiscSeoPage(slug: string): MiscSeoPageConfig | undefined {
  return miscSeoPages.find((p) => p.slug === slug)
}
