import type { Metadata } from "next"
import { PrivacyPageContent } from "@/components/pages/legal-page-content"
import { siteConfig } from "@/lib/tools-data"
import { legalEn } from "@/lib/i18n/messages/legal-pages"

export const metadata: Metadata = {
  title: legalEn.privacy.metaTitle,
  description: legalEn.privacy.metaDescription,
  alternates: { canonical: `${siteConfig.url}/privacy` },
}

export default function PrivacyPage() {
  return <PrivacyPageContent />
}
