import type { Metadata } from "next"
import { ChangelogPageContent } from "@/components/pages/legal-page-content"
import { siteConfig } from "@/lib/tools-data"
import { legalEn } from "@/lib/i18n/messages/legal-pages"

export const metadata: Metadata = {
  title: legalEn.changelog.metaTitle,
  description: legalEn.changelog.metaDescription,
  alternates: { canonical: `${siteConfig.url}/changelog` },
}

export default function ChangelogPage() {
  return <ChangelogPageContent />
}
