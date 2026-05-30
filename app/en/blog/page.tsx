import { BlogPageContent } from "@/components/pages/blog-page-content"
import { createPageMetadata, getMessages } from "@/lib/i18n"

const m = getMessages("en")

export const metadata = createPageMetadata("en", "blog", m.blogPage.metaTitle, m.blogPage.metaDescription)

export default function EnBlogPage() {
  return <BlogPageContent locale="en" />
}
