import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { BlogArticleContent } from "@/components/pages/blog-article-content"
import { getBlogPost, getVisibleBlogPosts } from "@/lib/blog-data"
import { createPageMetadata, getMessages } from "@/lib/i18n"

interface Props {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getVisibleBlogPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)
  const m = getMessages("en").blogPage.posts[slug]
  if (!post || !m) return { title: getMessages("en").common.notFoundMessage }
  return createPageMetadata("en", `blog/${slug}`, m.title, m.description)
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  if (!getBlogPost(slug)) notFound()
  return <BlogArticleContent locale="en" slug={slug} />
}
