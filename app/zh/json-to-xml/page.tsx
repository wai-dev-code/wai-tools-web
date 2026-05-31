import { createLocalizedJsonSeoPage } from "@/lib/create-localized-seo-page"

const { metadata, Page } = createLocalizedJsonSeoPage("json-to-xml", "zh")
export { metadata }
export default Page
