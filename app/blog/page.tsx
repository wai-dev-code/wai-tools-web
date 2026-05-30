import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Calendar, ArrowRight } from "lucide-react"
import type { Metadata } from "next"
import { getVisibleBlogPosts } from "@/lib/blog-data"
import { siteConfig } from "@/lib/tools-data"

export const metadata: Metadata = {
  title: `博客 | ${siteConfig.name}`,
  description: "开发者工具使用教程、技术原理与安全最佳实践。",
  alternates: { canonical: `${siteConfig.url}/blog` },
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-3xl px-4 pt-24 pb-16 lg:px-6">
        <h1 className="mb-2 text-3xl font-bold text-foreground">博客</h1>
        <p className="mb-10 text-muted-foreground">开发者技巧、教程与最佳实践</p>

        <div className="space-y-6">
          {getVisibleBlogPosts().map((post) => (
            <article
              key={post.slug}
              className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
            >
              <div className="mb-3 flex items-center gap-3 text-xs text-muted-foreground">
                <span className="rounded-full bg-primary/10 px-2.5 py-0.5 font-medium text-primary">
                  {post.category}
                </span>
                <span>{post.readTime}</span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" />
                  {post.date}
                </span>
              </div>
              <h2 className="mb-2 text-xl font-semibold text-foreground">
                <Link href={`/blog/${post.slug}`} className="hover:text-primary">
                  {post.title}
                </Link>
              </h2>
              <p className="mb-4 text-sm text-muted-foreground">{post.description}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center text-sm font-medium text-primary hover:underline"
              >
                阅读全文
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
