import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { Locale } from "@/lib/i18n/config"
import { getVisibleBlogPosts } from "@/lib/blog-data"
import { getMessages, localizeHref } from "@/lib/i18n"

const HOME_BLOG_LIMIT = 2

export function HomeBlogTeaser({ locale }: { locale: Locale }) {
  const m = getMessages(locale)
  const postMap = m.blogPage.posts

  const items = getVisibleBlogPosts()
    .slice(0, HOME_BLOG_LIMIT)
    .map((post) => {
      const localized = postMap[post.slug as keyof typeof postMap]
      if (!localized) return null
      return {
        slug: post.slug,
        title: localized.title,
        description: localized.description,
      }
    })
    .filter((item): item is NonNullable<typeof item> => item !== null)

  if (items.length === 0) return null

  return (
    <section className="border-t border-border bg-card/30 px-4 py-12 lg:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <h2 className="text-xl font-semibold text-foreground">{m.home.blogSectionTitle}</h2>
          <Link
            href={localizeHref(locale, "blog")}
            className="inline-flex items-center text-sm font-medium text-primary hover:underline"
          >
            {m.home.blogViewAll}
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {items.map((item) => (
            <article
              key={item.slug}
              className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/50"
            >
              <h3 className="text-base font-semibold leading-snug text-foreground">
                <Link href={localizeHref(locale, `blog/${item.slug}`)} className="hover:text-primary">
                  {item.title}
                </Link>
              </h3>
              <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{item.description}</p>
              <Link
                href={localizeHref(locale, `blog/${item.slug}`)}
                className="mt-3 inline-flex items-center text-sm font-medium text-primary hover:underline"
              >
                {m.blogPage.readMore}
                <ArrowRight className="ml-1 h-3.5 w-3.5" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
