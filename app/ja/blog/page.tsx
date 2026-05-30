import { BlogPageContent } from "@/components/pages/blog-page-content"
import { createPageMetadata, getMessages } from "@/lib/i18n"

const m = getMessages("ja")

export const metadata = createPageMetadata("ja", "blog", m.blogPage.metaTitle, m.blogPage.metaDescription)

export default function JaBlogPage() {
  return <BlogPageContent locale="ja" />
}
