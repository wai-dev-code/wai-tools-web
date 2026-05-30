import type { Metadata } from "next"
import { getToolBySlug, siteConfig } from "@/lib/tools-data"

export function generateToolMetadata(slug: string): Metadata {
  const tool = getToolBySlug(slug)
  if (!tool) return { title: "工具未找到" }

  const url = `${siteConfig.url}/tools/${slug}`
  return {
    title: `${tool.name} - 免费在线工具 | ${siteConfig.name}`,
    description: tool.description,
    keywords: tool.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: `${tool.name} | ${siteConfig.name}`,
      description: tool.description,
      url,
      type: "website",
    },
  }
}

export function getToolOrNotFound(slug: string) {
  const tool = getToolBySlug(slug)
  if (!tool || tool.hidden) return null
  return tool
}
