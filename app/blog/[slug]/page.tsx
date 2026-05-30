import Link from "next/link"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AdSlot } from "@/components/ad-slot"
import { ChevronRight, Calendar } from "lucide-react"
import type { Metadata } from "next"
import { getBlogPost, getVisibleBlogPosts } from "@/lib/blog-data"
import { siteConfig } from "@/lib/tools-data"

interface Props {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getVisibleBlogPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) return { title: "文章未找到" }
  return {
    title: `${post.title} | ${siteConfig.name}`,
    description: post.description,
    alternates: { canonical: `${siteConfig.url}/blog/${slug}` },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) notFound()

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-3xl px-4 pt-24 pb-16 lg:px-6">
        <nav className="mb-6 flex items-center gap-1 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground">首页</Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/blog" className="hover:text-foreground">博客</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground line-clamp-1">{post.title}</span>
        </nav>

        <header className="mb-8">
          <div className="mb-3 flex items-center gap-3 text-sm text-muted-foreground">
            <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
              {post.category}
            </span>
            <span>{post.readTime}</span>
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              {post.date}
            </span>
          </div>
          <h1 className="text-3xl font-bold text-foreground">{post.title}</h1>
          <p className="mt-3 text-muted-foreground">{post.description}</p>
        </header>

        <article className="space-y-6">
          {post.content.map((section, i) => (
            <section key={i}>
              {section.heading && (
                <h2 className="mb-3 text-xl font-semibold text-foreground">{section.heading}</h2>
              )}
              {section.paragraphs.map((p, j) => (
                <p key={j} className="mb-3 text-muted-foreground leading-relaxed">
                  {p}
                </p>
              ))}
            </section>
          ))}
        </article>

        <AdSlot name="blogArticle" />

        <div className="mt-10 border-t border-border pt-6">
          <Link href="/blog" className="text-sm text-primary hover:underline">
            ← 返回博客列表
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}
