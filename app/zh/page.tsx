import { HomePageContent } from "@/components/pages/home-page-content"
import { createPageMetadata, getMessages } from "@/lib/i18n"

const m = getMessages("zh")

export const metadata = createPageMetadata("zh", "", m.home.metaTitle, m.home.metaDescription)

export default function ZhHomePage() {
  return <HomePageContent locale="zh" />
}
