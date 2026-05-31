import { createLocalizedJsonSeoPage } from "@/lib/create-localized-seo-page"

const { metadata, Page } = createLocalizedJsonSeoPage("json-minify", "zh")
export { metadata }
export default Page
