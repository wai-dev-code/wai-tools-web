import Link from "next/link"
import { notFound } from "next/navigation"
import type { Locale } from "@/lib/i18n/config"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AdSlot } from "@/components/ad-slot"
import { formatBlogDate } from "@/lib/blog-i18n"
import { getBlogPost } from "@/lib/blog-data"
import { getMessages, localizeHref } from "@/lib/i18n"

export function BlogArticleContent({ locale, slug }: { locale: Locale; slug: string }) {
  const post = getBlogPost(slug)
  if (!post) notFound()

  const m = getMessages(locale).blogPage
  const localized = m.posts[slug]
  if (!localized) notFound()

  const lang = locale === "zh" ? "zh-CN" : locale === "ja" ? "ja" : "en"

  return (
    <div className="min-h-screen bg-background" lang={lang}>
      <Header locale={locale} />
      <main className="mx-auto max-w-3xl px-4 pt-24 pb-16 lg:px-6">
        <Link
          href={localizeHref(locale, "blog")}
          className="mb-6 inline-block text-sm text-muted-foreground hover:text-primary"
        >
          ← {m.title}
        </Link>
        <article>
          <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
            <span className="rounded-full bg-primary/10 px-2.5 py-0.5 font-medium text-primary">
              {localized.category}
            </span>
            <span>{formatBlogDate(post.date, locale)}</span>
          </div>
          <h1 className="mb-6 text-3xl font-bold text-foreground">{localized.title}</h1>
          <div className="space-y-6 text-muted-foreground">
            {localized.content.map((section, i) => (
              <section key={i}>
                {section.heading && (
                  <h2 className="mb-3 text-xl font-semibold text-foreground">{section.heading}</h2>
                )}
                {section.paragraphs.map((p, j) => (
                  <p key={j} className={j > 0 ? "mt-3" : ""}>
                    {p}
                  </p>
                ))}
              </section>
            ))}
          </div>
        </article>

        <AdSlot name="blogArticle" />
      </main>
      <Footer locale={locale} />
    </div>
  )
}
