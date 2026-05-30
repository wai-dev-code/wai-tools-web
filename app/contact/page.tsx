import { ContactPageContent } from "@/components/pages/contact-page-content"
import { createPageMetadata, getMessages } from "@/lib/i18n"

const m = getMessages("zh")

export const metadata = createPageMetadata("zh", "contact", m.contactPage.metaTitle, m.contactPage.metaDescription)

export default function ContactPage() {
  return <ContactPageContent locale="zh" />
}
