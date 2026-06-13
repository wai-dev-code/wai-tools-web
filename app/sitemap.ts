import type { MetadataRoute } from "next"
import { getVisibleBlogPosts } from "@/lib/blog-data"
import { base64ToolPages } from "@/lib/base64-tool-pages"
import { jsonToolPages } from "@/lib/json-tool-pages"
import { coreLocalizedPaths } from "@/lib/i18n/config"
import { getAllLocalizedUrls } from "@/lib/i18n"
import { siteConfig } from "@/lib/tools-data"

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["/privacy", "/terms", "/cookies", "/changelog"].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }))

  const localizedCorePages = coreLocalizedPaths.flatMap((path) =>
    getAllLocalizedUrls(path).map((url) => ({
      url,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : path.startsWith("tools/") ? 0.9 : path === "tools" ? 0.8 : 0.95,
    }))
  )

  const blogArticlePages = getVisibleBlogPosts().flatMap((post) =>
    getAllLocalizedUrls(`blog/${post.slug}`).map((url) => ({
      url,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))
  )

  const seoLandingPages = [...jsonToolPages, ...base64ToolPages].flatMap((page) =>
    getAllLocalizedUrls(page.slug).map((url) => ({
      url,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.95,
    }))
  )

  return [...localizedCorePages, ...staticPages, ...seoLandingPages, ...blogArticlePages]
}
