import Link from "next/link"
import { Calendar, ArrowRight } from "lucide-react"
import type { Locale } from "@/lib/i18n/config"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { formatBlogDate } from "@/lib/blog-i18n"
import { getMessages, localizeHref } from "@/lib/i18n"
import { getVisibleBlogPosts } from "@/lib/blog-data"

export function BlogPageContent({ locale }: { locale: Locale }) {
  const m = getMessages(locale).blogPage
  const posts = getVisibleBlogPosts()
  const lang = locale === "zh" ? "zh-CN" : locale === "ja" ? "ja" : "en"

  return (
    <div className="min-h-screen bg-background" lang={lang}>
      <Header locale={locale} />
      <main className="mx-auto max-w-3xl px-4 pt-24 pb-16 lg:px-6">
        <h1 className="mb-2 text-3xl font-bold text-foreground">{m.title}</h1>
        <p className="mb-10 text-muted-foreground">{m.subtitle}</p>

        <div className="space-y-6">
          {posts.map((post) => {
            const localized = m.posts[post.slug]
            if (!localized) return null
            return (
              <article
                key={post.slug}
                className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
              >
                <div className="mb-3 flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 font-medium text-primary">
                    {localized.category}
                  </span>
                  <span>{localized.readTime}</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {formatBlogDate(post.date, locale)}
                  </span>
                </div>
                <h2 className="mb-2 text-xl font-semibold text-foreground">
                  <Link href={localizeHref(locale, `blog/${post.slug}`)} className="hover:text-primary">
                    {localized.title}
                  </Link>
                </h2>
                <p className="mb-4 text-sm text-muted-foreground">{localized.description}</p>
                <Link
                  href={localizeHref(locale, `blog/${post.slug}`)}
                  className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  {m.readMore}
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </article>
            )
          })}
        </div>
      </main>
      <Footer locale={locale} />
    </div>
  )
}
