"use client"

import type { Locale } from "@/lib/i18n/config"
import type { ToolPageSeoContent, ToolPageSectionLabels } from "@/lib/i18n/messages/tool-page-content-types"
import { getLocalizedToolText, localizeHref } from "@/lib/i18n"
import { getToolBySlug } from "@/lib/tools-data"
import { isLocalizedToolSlug } from "@/lib/i18n/localized-tool-slug"
import Link from "next/link"

function CodeBlock({ code, language }: { code: string; language?: string }) {
  return (
    <pre
      className="overflow-x-auto rounded-lg border border-border bg-muted/50 p-4 text-sm leading-relaxed"
      tabIndex={0}
    >
      <code className={`font-mono text-foreground ${language ? `language-${language}` : ""}`}>
        {code}
      </code>
    </pre>
  )
}

export function ToolContentSections({
  content,
  labels,
  locale,
}: {
  content: ToolPageSeoContent
  labels: ToolPageSectionLabels
  locale: Locale
}) {
  return (
    <div className="space-y-10">
      <section className="rounded-xl border border-border bg-card/50 p-6">
        <h2 className="mb-4 text-lg font-semibold text-foreground">{content.whatIs.title}</h2>
        <div className="space-y-3 text-sm text-muted-foreground">
          {content.whatIs.paragraphs.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
          {content.whatIs.benefits && content.whatIs.benefits.length > 0 && (
            <ul className="mt-4 list-inside list-disc space-y-1">
              {content.whatIs.benefits.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <section className="rounded-xl border border-border bg-card/50 p-6">
        <h2 className="mb-4 text-lg font-semibold text-foreground">{content.features.title}</h2>
        <ul className="grid gap-2 sm:grid-cols-2">
          {content.features.items.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-xl border border-border bg-card/50 p-6">
        <h2 className="mb-4 text-lg font-semibold text-foreground">{content.howToUse.title}</h2>
        <ol className="space-y-4">
          {content.howToUse.steps.map((step, i) => (
            <li key={step.title} className="flex gap-4">
              <span
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary"
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <div>
                <h3 className="font-medium text-foreground">{step.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="rounded-xl border border-border bg-card/50 p-6">
        <h2 className="mb-4 text-lg font-semibold text-foreground">{content.examples.title}</h2>
        <div className="space-y-6">
          {content.examples.items.map((ex, i) => (
            <div key={i} className="space-y-3">
              {ex.label && (
                <h3 className="text-sm font-medium text-foreground">{ex.label}</h3>
              )}
              <div className="grid gap-4 lg:grid-cols-2">
                <div>
                  <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    {content.examples.inputLabel}
                  </p>
                  <CodeBlock code={ex.input} language={ex.language} />
                </div>
                <div>
                  <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    {content.examples.outputLabel}
                  </p>
                  <CodeBlock code={ex.output} language={ex.language} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {content.faq.length > 0 && (
        <section className="rounded-xl border border-border bg-card/50 p-6">
          <h2 className="mb-4 text-lg font-semibold text-foreground">{labels.faq}</h2>
          <dl className="space-y-4">
            {content.faq.map((item) => (
              <div key={item.q}>
                <dt className="font-medium text-foreground">{item.q}</dt>
                <dd className="mt-1 text-sm text-muted-foreground">{item.a}</dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      {content.relatedToolSlugs.length > 0 && (
        <CuratedRelatedTools slugs={content.relatedToolSlugs} locale={locale} title={labels.relatedTools} />
      )}
    </div>
  )
}

function CuratedRelatedTools({
  slugs,
  locale,
  title,
}: {
  slugs: string[]
  locale: Locale
  title: string
}) {
  const tools = slugs.map((slug) => getToolBySlug(slug)).filter(Boolean)
  if (tools.length === 0) return null

  return (
    <section>
      <h2 className="mb-4 text-lg font-semibold text-foreground">{title}</h2>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((t) => {
          const label = isLocalizedToolSlug(t.slug)
            ? getLocalizedToolText(t.slug, locale).name
            : t.name
          const short = isLocalizedToolSlug(t.slug)
            ? getLocalizedToolText(t.slug, locale).short
            : t.shortDescription
          return (
            <Link
              key={t.slug}
              href={localizeHref(locale, `tools/${t.slug}`)}
              className="rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/50 hover:bg-card/80"
            >
              <div className="font-medium text-foreground">{label}</div>
              <div className="mt-1 text-xs text-muted-foreground">{short}</div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
