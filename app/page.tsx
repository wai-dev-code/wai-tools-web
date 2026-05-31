import { createPageMetadata, getMessages } from "@/lib/i18n"
import { HomePageContent } from "@/components/pages/home-page-content"

const m = getMessages("en")

export const metadata = createPageMetadata("en", "", m.home.metaTitle, m.home.metaDescription)

export default function HomePage() {
  return <HomePageContent locale="en" />
}
