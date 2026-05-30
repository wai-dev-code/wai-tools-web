import { createPageMetadata, getMessages } from "@/lib/i18n"
import { HomePageContent } from "@/components/pages/home-page-content"

const m = getMessages("zh")

export const metadata = createPageMetadata("zh", "", m.home.metaTitle, m.home.metaDescription)

export default function HomePage() {
  return <HomePageContent locale="zh" />
}
