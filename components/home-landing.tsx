"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Layers,
  Sparkles,
  Shield,
  Zap,
} from "lucide-react"
import { HomeSearchInput } from "@/components/home-search-input"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { AdSlot } from "@/components/ad-slot"
import { getVisibleTools, type ToolCategory } from "@/lib/tools-data"
import { searchTools } from "@/lib/tool-search"
import { getVisibleBlogPosts } from "@/lib/blog-data"
import { defaultLocale, type Locale } from "@/lib/i18n/config"
import { formatMessage, getMessages, localizeHref } from "@/lib/i18n"
import { getToolCategoryLabel, getToolLabel, getToolShort } from "@/lib/tool-display"
import { cn } from "@/lib/utils"

const visibleTools = getVisibleTools()
const visibleCategories = [
  "all",
  ...Array.from(new Set(visibleTools.map((t) => t.category))),
] as const

const HOME_BLOG_LIMIT = 3

const featureIcons = [Zap, Shield, Sparkles, Layers, BookOpen]

export function HomeLanding({ locale = defaultLocale }: { locale?: Locale }) {
  const m = getMessages(locale).home
  const blogM = getMessages(locale).blogPage
  const [query, setQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState<(typeof visibleCategories)[number]>("all")

  const filtered = useMemo(() => {
    let result = searchTools(query, locale)
    if (activeCategory !== "all") {
      result = result.filter((t) => t.category === activeCategory)
    }
    return result
  }, [query, activeCategory, locale])

  const blogItems = getVisibleBlogPosts()
    .slice(0, HOME_BLOG_LIMIT)
    .map((post) => {
      const localized = blogM.posts[post.slug as keyof typeof blogM.posts]
      if (!localized) return null
      return { slug: post.slug, title: localized.title, description: localized.description }
    })
    .filter((item): item is NonNullable<typeof item> => item !== null)

  return (
    <div className="relative">
      {/* Hero + gradient mesh */}
      <section className="relative overflow-hidden px-4 pt-28 pb-16 lg:px-6 lg:pb-24">
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,oklch(0.55_0.19_250/0.25),transparent)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-32 top-0 -z-10 h-96 w-96 rounded-full bg-violet-500/10 blur-[100px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-32 top-32 -z-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[100px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,transparent_0%,var(--background)_85%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[size:72px_72px] bg-[linear-gradient(rgba(128,128,128,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(128,128,128,0.06)_1px,transparent_1px)] [mask-image:linear-gradient(to_bottom,black_40%,transparent)]"
          aria-hidden
        />

        <div className="mx-auto max-w-4xl text-center home-animate-in">
          <div
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/40 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur-sm"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            {m.heroBadge}
          </div>

          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {m.title}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg">
            {formatMessage(m.subtitle, { n: visibleTools.length })}
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground/90">
            {m.whatIsParagraphs[0]}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={localizeHref(locale, "tools")}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-primary/30"
            >
              {m.heroCta}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={localizeHref(locale, "blog")}
              className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/50 px-5 py-2.5 text-sm font-medium text-foreground backdrop-blur-sm transition-colors hover:border-primary/40 hover:bg-card"
            >
              {m.heroCtaSecondary}
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="border-y border-border/50 bg-card/20 px-4 py-12 lg:px-6">
        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {m.stats.map((stat, i) => (
            <div
              key={stat.label}
              className="home-animate-in text-center"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <p className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tools grid */}
      <section id="tools" className="px-4 py-20 lg:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center home-animate-in">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {m.toolsSectionTitle}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">{m.toolsSectionSubtitle}</p>
          </div>

          <HomeSearchInput locale={locale} value={query} onChange={setQuery} />

          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {visibleCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "rounded-full px-3.5 py-1.5 text-sm font-medium transition-all duration-200",
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                    : "border border-border/60 bg-card/40 text-muted-foreground hover:border-primary/30 hover:text-foreground"
                )}
              >
                {cat === "all" ? m.categoryAll : getToolCategoryLabel(locale, cat as ToolCategory)}
              </button>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((tool, i) => (
              <Link
                key={tool.slug}
                href={localizeHref(locale, `tools/${tool.slug}`)}
                className={cn(
                  "group relative overflow-hidden rounded-2xl border border-border/50 bg-card/30 p-5 backdrop-blur-sm",
                  "transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-card/60 hover:shadow-lg hover:shadow-primary/5",
                  "home-animate-in"
                )}
                style={{ animationDelay: `${Math.min(i * 40, 400)}ms` }}
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden
                >
                  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
                </div>
                <div className="flex items-start gap-4">
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border/50 bg-primary/10 text-primary transition-all duration-300 group-hover:border-primary/30 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-md group-hover:shadow-primary/20"
                  >
                    <tool.icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-semibold text-foreground transition-colors group-hover:text-primary">
                        {getToolLabel(locale, tool.slug, tool.name)}
                      </h3>
                      <ArrowUpRight
                        className="h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-all group-hover:opacity-100 group-hover:text-primary"
                        aria-hidden
                      />
                    </div>
                    <p className="mt-1.5 line-clamp-2 text-sm text-muted-foreground">
                      {getToolShort(locale, tool.slug, tool.shortDescription)}
                    </p>
                    <span className="mt-3 inline-flex items-center text-xs font-medium text-primary">
                      {m.useNow}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="py-16 text-center text-muted-foreground">{m.noResults}</p>
          )}

          <AdSlot name="homeMid" className="mx-auto mt-12 max-w-2xl" />

          <p className="mt-8 text-center text-sm text-muted-foreground">
            {formatMessage(m.toolsCount, { n: visibleTools.length })} ·{" "}
            <Link href={localizeHref(locale, "tools")} className="font-medium text-primary hover:underline">
              {m.viewAll}
            </Link>
          </p>
        </div>
      </section>

      {/* Why choose — bento */}
      <section className="border-t border-border/50 bg-card/10 px-4 py-20 lg:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {m.whyChooseTitle}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {m.whyChooseItems.map((item, i) => {
              const Icon = featureIcons[i % featureIcons.length]
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-border/50 bg-card/40 p-6 backdrop-blur-sm transition-colors hover:border-primary/30 hover:bg-card/60"
                >
                  <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="px-4 py-20 lg:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {m.useCasesTitle}
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {m.useCasesItems.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border/40 bg-muted/20 px-4 py-4 transition-colors hover:border-border hover:bg-muted/30"
              >
                <h3 className="font-medium text-foreground">{item.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog preview */}
      {blogItems.length > 0 && (
        <section className="border-t border-border/50 bg-card/10 px-4 py-20 lg:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  {m.blogSectionTitle}
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">{m.blogSectionSubtitle}</p>
              </div>
              <Link
                href={localizeHref(locale, "blog")}
                className="inline-flex items-center text-sm font-medium text-primary hover:underline"
              >
                {m.blogViewAll}
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {blogItems.map((item) => (
                <article
                  key={item.slug}
                  className="group rounded-2xl border border-border/50 bg-card/40 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                >
                  <h3 className="text-base font-semibold leading-snug text-foreground">
                    <Link
                      href={localizeHref(locale, `blog/${item.slug}`)}
                      className="hover:text-primary"
                    >
                      {item.title}
                    </Link>
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{item.description}</p>
                  <Link
                    href={localizeHref(locale, `blog/${item.slug}`)}
                    className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
                  >
                    {blogM.readMore}
                    <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section id="faq" className="px-4 py-20 lg:px-6">
        <div className="mx-auto max-w-2xl">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">{m.faqTitle}</h2>
            <p className="mt-3 text-sm text-muted-foreground">{m.faqSubtitle}</p>
          </div>
          <Accordion type="single" collapsible className="w-full rounded-2xl border border-border/50 bg-card/30 px-4 backdrop-blur-sm">
            {m.faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border/50">
                <AccordionTrigger className="text-left text-sm font-medium hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  )
}
