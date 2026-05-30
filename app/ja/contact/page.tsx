import { ContactPageContent } from "@/components/pages/contact-page-content"
import { createPageMetadata, getMessages } from "@/lib/i18n"

const m = getMessages("ja")

export const metadata = createPageMetadata("ja", "contact", m.contactPage.metaTitle, m.contactPage.metaDescription)

export default function JaContactPage() {
  return <ContactPageContent locale="ja" />
}
