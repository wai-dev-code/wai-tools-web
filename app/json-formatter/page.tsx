import { createLocalizedJsonSeoPage } from "@/lib/create-localized-seo-page"

const { metadata, Page } = createLocalizedJsonSeoPage("json-formatter", "en")
export { metadata }
export default Page
