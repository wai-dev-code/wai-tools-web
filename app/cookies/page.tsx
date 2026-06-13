import type { Metadata } from "next"
import { CookiesPageContent } from "@/components/pages/legal-page-content"
import { siteConfig } from "@/lib/tools-data"
import { legalEn } from "@/lib/i18n/messages/legal-pages"

export const metadata: Metadata = {
  title: legalEn.cookies.metaTitle,
  description: legalEn.cookies.metaDescription,
  alternates: { canonical: `${siteConfig.url}/cookies` },
}

export default function CookiesPage() {
  return <CookiesPageContent />
}
