import type { Locale } from "@/lib/i18n/config"
import type { Base64ToolMessages } from "@/lib/i18n/messages/base64-tool-messages"
import type { JsonToolMessages } from "@/lib/i18n/messages/json-tool-messages"
import type { JwtToolMessages, JwtDecoderPageMessages } from "@/lib/i18n/messages/jwt-tool-messages"
import type { TimestampToolMessages, TimestampPageMessages } from "@/lib/i18n/messages/timestamp-tool-messages"
import type { UrlToolMessages, UrlEncoderPageMessages } from "@/lib/i18n/messages/url-tool-messages"
import type { UuidToolMessages, UuidGeneratorPageMessages } from "@/lib/i18n/messages/uuid-tool-messages"
import type { RegexToolMessages, RegexTesterPageMessages } from "@/lib/i18n/messages/regex-tool-messages"
import type {
  PasswordToolMessages,
  PasswordGeneratorPageMessages,
} from "@/lib/i18n/messages/password-tool-messages"
import type {
  QrToolMessages,
  QrCodeGeneratorPageMessages,
} from "@/lib/i18n/messages/qr-tool-messages"
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
    adLabel: string
    adDisclaimer: string
  }
  workspace: {
    sidebarExpand: string
    sidebarCollapse: string
    scaleCompact: string
    scaleComfortable: string
    scaleLarge: string
    focusMode: string
    exitFocus: string
    panelFullscreen: string
    panelExitFullscreen: string
    reset: string
    zoomIn: string
    zoomOut: string
    workspaceSize: string
    workspaceHint: string
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
    blogSectionTitle: string
    blogViewAll: string
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
    dev: string
    api: string
  }
  tools: {
    jsonFormatter: ToolText
    base64: ToolText
    urlEncoder: ToolText
    jwtDecoder: ToolText
    timestamp: ToolText
    uuidGenerator: ToolText
    passwordGenerator: ToolText
    qrCodeGenerator: ToolText
    regexTester: ToolText
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
  urlEncoderPage: UrlEncoderPageMessages
  jwtDecoderPage: JwtDecoderPageMessages
  timestampPage: TimestampPageMessages
  uuidGeneratorPage: UuidGeneratorPageMessages
  passwordGeneratorPage: PasswordGeneratorPageMessages
  qrCodeGeneratorPage: QrCodeGeneratorPageMessages
  regexTesterPage: RegexTesterPageMessages
  seo: SeoPagesMessages
  jsonTool: JsonToolMessages
  base64Tool: Base64ToolMessages
  urlTool: UrlToolMessages
  jwtTool: JwtToolMessages
  timestampTool: TimestampToolMessages
  uuidTool: UuidToolMessages
  passwordTool: PasswordToolMessages
  qrTool: QrToolMessages
  regexTool: RegexToolMessages
  aboutPage: StaticPageMessages["about"]
  contactPage: StaticPageMessages["contact"]
  blogPage: StaticPageMessages["blog"]
  theme: StaticPageMessages["theme"]
  errors: StaticPageMessages["errors"]
  legal: LegalPagesMessages
}
