import { AboutPageContent } from "@/components/pages/about-page-content"
import { createPageMetadata, getMessages } from "@/lib/i18n"

const m = getMessages("zh")

export const metadata = createPageMetadata("zh", "about", m.aboutPage.metaTitle, m.aboutPage.metaDescription)

export default function ZhAboutPage() {
  return <AboutPageContent locale="zh" />
}
