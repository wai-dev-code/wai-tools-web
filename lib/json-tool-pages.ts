import type { Metadata } from "next"
import { siteConfig } from "@/lib/tools-data"

export type JsonToolFocus = "format" | "validate" | "minify" | "sort" | "to-xml"

export interface JsonToolPageConfig {
  slug: string
  path: string
  title: string
  description: string
  focus: JsonToolFocus
  keywords: string[]
}

export const jsonToolPages: JsonToolPageConfig[] = [
  {
    slug: "json-formatter",
    path: "/json-formatter",
    title: "JSON Formatter - 在线 JSON 格式化工具",
    description: "免费在线 JSON Formatter，支持美化、压缩、校验、排序、树形视图与语法高亮。",
    focus: "format",
    keywords: ["json formatter", "json 格式化", "json beautify", "json 美化"],
  },
  {
    slug: "json-validator",
    path: "/json-validator",
    title: "JSON Validator - 在线 JSON 校验工具",
    description: "免费 JSON Validator，精确定位错误行号与列号，支持错误高亮与详细提示。",
    focus: "validate",
    keywords: ["json validator", "json 校验", "json validate", "json 验证"],
  },
  {
    slug: "json-minify",
    path: "/json-minify",
    title: "JSON Minify - 在线 JSON 压缩工具",
    description: "免费 JSON Minify，一键压缩 JSON 并显示原始与压缩后体积对比。",
    focus: "minify",
    keywords: ["json minify", "json 压缩", "json compress"],
  },
  {
    slug: "json-to-xml",
    path: "/json-to-xml",
    title: "JSON to XML - 在线 JSON 转 XML",
    description: "免费 JSON to XML 转换器，支持 JSON 与 XML 双向互转。",
    focus: "to-xml",
    keywords: ["json to xml", "json 转 xml", "xml to json"],
  },
  {
    slug: "json-sort",
    path: "/json-sort",
    title: "JSON Sort - 在线 JSON 键排序",
    description: "免费 JSON Sort，按 key 升序或降序递归排序 JSON 对象。",
    focus: "sort",
    keywords: ["json sort", "json 排序", "sort json keys"],
  },
]

export function generateJsonToolMetadata(config: JsonToolPageConfig): Metadata {
  return {
    title: `${config.title} | ${siteConfig.name}`,
    description: config.description,
    keywords: config.keywords,
    alternates: { canonical: `${siteConfig.url}${config.path}` },
    openGraph: {
      title: config.title,
      description: config.description,
      url: `${siteConfig.url}${config.path}`,
      type: "website",
    },
  }
}

export function getJsonToolPage(slug: string): JsonToolPageConfig | undefined {
  return jsonToolPages.find((p) => p.slug === slug)
}
