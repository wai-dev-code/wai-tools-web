import { notFound } from "next/navigation"
import { ToolLayout } from "@/components/tool-layout"
import { JsonFormatterTool } from "@/components/tools/json-formatter-tool"
import { Base64Tool } from "@/components/tools/base64-tool"
import { UrlEncoderTool } from "@/components/tools/url-encoder-tool"
import { TimestampTool } from "@/components/tools/timestamp-tool"
import { JwtDecoderTool } from "@/components/tools/jwt-decoder-tool"
import { HashGeneratorTool } from "@/components/tools/hash-generator-tool"
import { ColorConverterTool } from "@/components/tools/color-converter-tool"
import { CronParserTool } from "@/components/tools/cron-parser-tool"
import { HtmlEncoderTool } from "@/components/tools/html-encoder-tool"
import { TextDiffTool } from "@/components/tools/text-diff-tool"
import { RegexTesterTool } from "@/components/tools/regex-tester-tool"
import type { Locale } from "@/lib/i18n/config"
import { getMessages } from "@/lib/i18n"
import { getSeoPageKey } from "@/lib/i18n/messages/seo-pages"
import { getBase64ToolPage } from "@/lib/base64-tool-pages"
import { getJsonToolPage } from "@/lib/json-tool-pages"
import { getMiscSeoPage, type MiscSeoPageConfig } from "@/lib/misc-seo-pages"
import { getToolOrNotFound } from "@/lib/tool-metadata"
import { getToolPageContent } from "@/lib/tool-page-content"

export function JsonSeoPageContent({ locale, slug }: { locale: Locale; slug: string }) {
  const config = getJsonToolPage(slug)
  const key = getSeoPageKey(slug)
  if (!config || !key) notFound()

  const tool = getToolOrNotFound("json-formatter")
  if (!tool) notFound()

  const seo = getMessages(locale).seo[key]
  const baseContent = getToolPageContent("json-formatter", locale)

  const content = {
    ...baseContent,
    whatIs: {
      title: seo.title,
      paragraphs: [seo.description, seo.instruction, ...baseContent.whatIs.paragraphs.slice(1)],
      benefits: baseContent.whatIs.benefits,
    },
  }

  return (
    <ToolLayout toolSlug={tool.slug} locale={locale} content={content}>
      <JsonFormatterTool focus={config.focus} locale={locale} />
    </ToolLayout>
  )
}

export function Base64SeoPageContent({ locale, slug }: { locale: Locale; slug: string }) {
  const config = getBase64ToolPage(slug)
  const key = getSeoPageKey(slug)
  if (!config || !key) notFound()

  const tool = getToolOrNotFound("base64")
  if (!tool) notFound()

  const seo = getMessages(locale).seo[key]
  const baseContent = getToolPageContent("base64", locale)

  const content = {
    ...baseContent,
    whatIs: {
      title: seo.title,
      paragraphs: [seo.description, seo.instruction, ...baseContent.whatIs.paragraphs.slice(1)],
      benefits: baseContent.whatIs.benefits,
    },
  }

  return (
    <ToolLayout toolSlug={tool.slug} locale={locale} content={content}>
      <Base64Tool module={config.module} locale={locale} />
    </ToolLayout>
  )
}

function renderMiscTool(config: MiscSeoPageConfig, locale: Locale) {
  switch (config.toolSlug) {
    case "url-encoder":
      return <UrlEncoderTool locale={locale} defaultMode={config.toolProps?.urlMode} />
    case "timestamp":
      return <TimestampTool locale={locale} />
    case "jwt-decoder":
      return <JwtDecoderTool locale={locale} />
    case "hash-generator":
      return <HashGeneratorTool locale={locale} />
    case "cron-parser":
      return <CronParserTool locale={locale} />
    case "text-diff":
      return <TextDiffTool locale={locale} />
    case "html-encoder":
      return (
        <HtmlEncoderTool
          locale={locale}
          defaultMode={config.toolProps?.htmlMode ?? "encode"}
        />
      )
    case "color-converter":
      return <ColorConverterTool locale={locale} />
    case "regex-tester":
      return <RegexTesterTool locale={locale} />
    default:
      notFound()
  }
}

export function MiscSeoPageContent({ locale, slug }: { locale: Locale; slug: string }) {
  const config = getMiscSeoPage(slug)
  const key = getSeoPageKey(slug)
  if (!config || !key) notFound()

  const tool = getToolOrNotFound(config.toolSlug)
  if (!tool) notFound()

  const seo = getMessages(locale).seo[key]
  const baseContent = getToolPageContent(config.toolSlug, locale)

  const content = {
    ...baseContent,
    whatIs: {
      title: seo.title,
      paragraphs: [seo.description, seo.instruction, ...baseContent.whatIs.paragraphs.slice(1)],
      benefits: baseContent.whatIs.benefits,
    },
  }

  return (
    <ToolLayout toolSlug={tool.slug} locale={locale} content={content}>
      {renderMiscTool(config, locale)}
    </ToolLayout>
  )
}

/** @deprecated Use JsonSeoPageContent */
export function JsonFormatterSeoPageContent({ locale }: { locale: Locale }) {
  return <JsonSeoPageContent locale={locale} slug="json-formatter" />
}

/** @deprecated Use Base64SeoPageContent */
export function Base64EncoderSeoPageContent({ locale }: { locale: Locale }) {
  return <Base64SeoPageContent locale={locale} slug="base64-encoder" />
}

/** @deprecated Use Base64SeoPageContent */
export function Base64DecoderSeoPageContent({ locale }: { locale: Locale }) {
  return <Base64SeoPageContent locale={locale} slug="base64-decoder" />
}
