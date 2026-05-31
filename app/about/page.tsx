import { AboutPageContent } from "@/components/pages/about-page-content"
import { createPageMetadata, getMessages } from "@/lib/i18n"

const m = getMessages("en")

export const metadata = createPageMetadata("en", "about", m.aboutPage.metaTitle, m.aboutPage.metaDescription)

export default function AboutPage() {
  return <AboutPageContent locale="en" />
}
