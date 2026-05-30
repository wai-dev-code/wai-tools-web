import { HomePageContent } from "@/components/pages/home-page-content"
import { createPageMetadata, getMessages } from "@/lib/i18n"

const m = getMessages("en")

export const metadata = createPageMetadata("en", "", m.home.metaTitle, m.home.metaDescription)

export default function EnHomePage() {
  return <HomePageContent locale="en" />
}
