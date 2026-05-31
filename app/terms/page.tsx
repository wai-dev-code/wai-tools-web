import type { Metadata } from "next"
import { TermsPageContent } from "@/components/pages/legal-page-content"
import { siteConfig } from "@/lib/tools-data"
import { legalEn } from "@/lib/i18n/messages/legal-pages"

export const metadata: Metadata = {
  title: legalEn.terms.metaTitle,
  description: legalEn.terms.metaDescription,
  alternates: { canonical: `${siteConfig.url}/terms` },
}

export default function TermsPage() {
  return <TermsPageContent />
}
