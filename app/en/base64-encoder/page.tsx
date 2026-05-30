import { createLocalizedBase64SeoPage } from "@/lib/create-localized-seo-page"

const { metadata, Page } = createLocalizedBase64SeoPage("base64-encoder", "en")
export { metadata }
export default Page
