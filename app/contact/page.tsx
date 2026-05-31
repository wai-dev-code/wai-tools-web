import { ContactPageContent } from "@/components/pages/contact-page-content"
import { createPageMetadata, getMessages } from "@/lib/i18n"

const m = getMessages("en")

export const metadata = createPageMetadata("en", "contact", m.contactPage.metaTitle, m.contactPage.metaDescription)

export default function ContactPage() {
  return <ContactPageContent locale="en" />
}
