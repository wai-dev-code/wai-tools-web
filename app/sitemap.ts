import type { MetadataRoute } from "next"
import { blogPosts } from "@/lib/blog-data"
import { siteConfig, tools } from "@/lib/tools-data"

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

  const toolPages = tools.map((tool) => ({
    url: `${base}/tools/${tool.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }))

  const blogPages = blogPosts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [...staticPages, ...toolPages, ...blogPages]
}
