import type { FaqItem } from "@/lib/i18n/messages/types"
import type { LocalizedToolSlug } from "@/lib/i18n/localized-tool-slug"

export interface ToolPageExample {
  label?: string
  input: string
  output: string
  language?: string
}

export interface ToolPageSeoContent {
  whatIs: {
    title: string
    paragraphs: string[]
    benefits?: string[]
  }
  features: {
    title: string
    items: string[]
  }
  howToUse: {
    title: string
    steps: { title: string; description: string }[]
  }
  examples: {
    title: string
    inputLabel: string
    outputLabel: string
    items: ToolPageExample[]
  }
  faq: FaqItem[]
  relatedToolSlugs: LocalizedToolSlug[]
}

export interface ToolPageSectionLabels {
  features: string
  howToUse: string
  examples: string
  faq: string
  relatedTools: string
}
