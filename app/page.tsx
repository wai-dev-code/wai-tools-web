import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HomeToolHub } from "@/components/home-tool-hub"
import { CompactFAQ } from "@/components/compact-faq"
import { JsonLd } from "@/components/json-ld"
import { siteConfig } from "@/lib/tools-data"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: siteConfig.name,
          url: siteConfig.url,
          description: siteConfig.description,
          potentialAction: {
            "@type": "SearchAction",
            target: `${siteConfig.url}/tools?q={search_term_string}`,
            "query-input": "required name=search_term_string",
          },
        }}
      />
      <Header />
      <main>
        <HomeToolHub />
        <CompactFAQ />
      </main>
      <Footer />
    </div>
  )
}
