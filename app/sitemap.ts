import type { MetadataRoute } from "next"
import { getVisibleBlogPosts } from "@/lib/blog-data"
import { base64ToolPages } from "@/lib/base64-tool-pages"
import { jsonToolPages } from "@/lib/json-tool-pages"
import { siteConfig, getVisibleTools } from "@/lib/tools-data"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url

  const staticPages = ["", "/tools", "/blog", "/about", "/contact", "/privacy", "/terms"].map(
    (path) => ({
      url: `${base}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
    })
  )

  const toolPages = getVisibleTools().map((tool) => ({
    url: `${base}/tools/${tool.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }))

  const blogPages = getVisibleBlogPosts().map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  const jsonSeoPages = jsonToolPages.map((page) => ({
    url: `${base}${page.path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.95,
  }))

  const base64SeoPages = base64ToolPages.map((page) => ({
    url: `${base}${page.path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.95,
  }))

  return [...staticPages, ...toolPages, ...jsonSeoPages, ...base64SeoPages, ...blogPages]
}
