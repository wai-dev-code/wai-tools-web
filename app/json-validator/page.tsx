import { createLocalizedJsonSeoPage } from "@/lib/create-localized-seo-page"

const { metadata, Page } = createLocalizedJsonSeoPage("json-validator", "en")
export { metadata }
export default Page
