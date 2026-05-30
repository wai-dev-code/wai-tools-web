import { BlogPageContent } from "@/components/pages/blog-page-content"
import { createPageMetadata, getMessages } from "@/lib/i18n"

const m = getMessages("zh")

export const metadata = createPageMetadata("zh", "blog", m.blogPage.metaTitle, m.blogPage.metaDescription)

export default function BlogPage() {
  return <BlogPageContent locale="zh" />
}
