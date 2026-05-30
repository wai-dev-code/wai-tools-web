import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { BlogArticleContent } from "@/components/pages/blog-article-content"
import { getBlogPost, getVisibleBlogPosts } from "@/lib/blog-data"
import { createPageMetadata, getMessages } from "@/lib/i18n"
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
  const m = getMessages("ja").blogPage.posts[slug]
  if (!post || !m) return { title: "Not found" }
  return createPageMetadata("ja", `blog/${slug}`, `${m.title} | ${siteConfig.name}`, m.description)
}

export default async function JaBlogPostPage({ params }: Props) {
  const { slug } = await params
  if (!getBlogPost(slug)) notFound()
  return <BlogArticleContent locale="ja" slug={slug} />
}
