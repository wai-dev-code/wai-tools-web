import type { Metadata } from "next"
import { siteConfig } from "@/lib/tools-data"

export type Base64Module = "core" | "file" | "convert" | "utils"

export interface Base64ToolPageConfig {
  slug: string
  path: string
  title: string
  description: string
  module: Base64Module
  keywords: string[]
}

export const base64ToolPages: Base64ToolPageConfig[] = [
  {
    slug: "base64-encoder",
    path: "/base64-encoder",
    title: "Base64 Encoder - 在线 Base64 编码工具",
    description: "免费在线 Base64 Encoder，支持 UTF-8 文本编码、URL 安全 Base64 与智能识别。",
    module: "core",
    keywords: ["base64 encoder", "base64 编码", "base64 encode", "encode base64"],
  },
  {
    slug: "base64-decoder",
    path: "/base64-decoder",
    title: "Base64 Decoder - 在线 Base64 解码工具",
    description: "免费在线 Base64 Decoder，快速解码 Base64 字符串，支持 URL 安全格式与智能识别。",
    module: "core",
    keywords: ["base64 decoder", "base64 解码", "base64 decode", "decode base64"],
  },
  {
    slug: "base64-file",
    path: "/base64-file",
    title: "Base64 File - 文件 Base64 编解码",
    description: "免费 Base64 文件工具，上传文件转 Base64、Base64 还原下载，支持图片预览。",
    module: "file",
    keywords: ["base64 file", "file to base64", "base64 to file", "图片 base64"],
  },
  {
    slug: "base64-converter",
    path: "/base64-converter",
    title: "Base64 Converter - Hex / Data URI 转换",
    description: "免费 Base64 格式转换：Hex ↔ Base64、Data URI 生成与解析。",
    module: "convert",
    keywords: ["base64 converter", "base64 to hex", "hex to base64", "data uri"],
  },
  {
    slug: "base64-utilities",
    path: "/base64-utilities",
    title: "Base64 Utilities - 校验与清理工具",
    description: "Base64 实用工具：校验有效性、去除空白、字节统计与格式检测。",
    module: "utils",
    keywords: ["base64 validator", "base64 校验", "base64 clean", "base64 utilities"],
  },
]

export function generateBase64ToolMetadata(config: Base64ToolPageConfig): Metadata {
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

export function getBase64ToolPage(slug: string): Base64ToolPageConfig | undefined {
  return base64ToolPages.find((p) => p.slug === slug)
}
