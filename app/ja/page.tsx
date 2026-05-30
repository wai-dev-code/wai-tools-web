import { HomePageContent } from "@/components/pages/home-page-content"
import { createPageMetadata, getMessages } from "@/lib/i18n"

const m = getMessages("ja")

export const metadata = createPageMetadata("ja", "", m.home.metaTitle, m.home.metaDescription)

export default function JaHomePage() {
  return <HomePageContent locale="ja" />
}
