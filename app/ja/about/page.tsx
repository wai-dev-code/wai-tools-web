import { AboutPageContent } from "@/components/pages/about-page-content"
import { createPageMetadata, getMessages } from "@/lib/i18n"

const m = getMessages("ja")

export const metadata = createPageMetadata("ja", "about", m.aboutPage.metaTitle, m.aboutPage.metaDescription)

export default function JaAboutPage() {
  return <AboutPageContent locale="ja" />
}
