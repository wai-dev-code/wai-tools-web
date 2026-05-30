import type { Locale } from "@/lib/i18n/config"
import type { Base64ToolMessages } from "@/lib/i18n/messages/base64-tool-messages"
import type { JsonToolMessages } from "@/lib/i18n/messages/json-tool-messages"
import type { LegalPagesMessages } from "@/lib/i18n/messages/legal-pages"
import type { SeoPagesMessages } from "@/lib/i18n/messages/seo-pages"
import type { StaticPageMessages } from "@/lib/i18n/messages/static-pages"

export interface FaqItem {
  q: string
  a: string
}

export interface ToolText {
  name: string
  short: string
  desc: string
}

export interface SeoPageText {
  title: string
  description: string
  keywords: string[]
  instruction: string
}

export interface Messages {
  locale: Locale
  common: {
    home: string
    tools: string
    blog: string
    about: string
    openTools: string
    footerTagline: string
    footerTools: string
    footerResources: string
    footerLegal: string
    allTools: string
    jsonFormatter: string
    base64: string
    privacy: string
    terms: string
    contact: string
    localRun: string
    free: string
    instructions: string
    faq: string
    relatedTools: string
    copyright: string
    notFoundMessage: string
    notFoundHome: string
    notFoundBrowseTools: string
  }
  home: {
    metaTitle: string
    metaDescription: string
    title: string
    subtitle: string
    searchPlaceholder: string
    categoryAll: string
    useNow: string
    noResults: string
    toolsCount: string
    viewAll: string
    faqTitle: string
    faqs: FaqItem[]
  }
  toolsPage: {
    metaTitle: string
    metaDescription: string
    title: string
    subtitle: string
    searchPlaceholder: string
    noResults: string
  }
  categories: {
    json: string
    encoding: string
  }
  tools: {
    jsonFormatter: ToolText
    base64: ToolText
  }
  jsonFormatterPage: {
    metaTitle: string
    metaDescription: string
    instructions: string[]
    faq: FaqItem[]
  }
  base64Page: {
    metaTitle: string
    metaDescription: string
    instructions: string[]
    faq: FaqItem[]
  }
  seo: SeoPagesMessages
  jsonTool: JsonToolMessages
  base64Tool: Base64ToolMessages
  aboutPage: StaticPageMessages["about"]
  contactPage: StaticPageMessages["contact"]
  blogPage: StaticPageMessages["blog"]
  theme: StaticPageMessages["theme"]
  errors: StaticPageMessages["errors"]
  legal: LegalPagesMessages
}
