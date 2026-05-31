import { createLocalizedJsonSeoPage } from "@/lib/create-localized-seo-page"

const { metadata, Page } = createLocalizedJsonSeoPage("json-to-xml", "en")
export { metadata }
export default Page
