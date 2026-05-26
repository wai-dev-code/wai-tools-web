import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { PopularToolsSection } from "@/components/popular-tools-section"
import { CategoriesSection } from "@/components/categories-section"
import { WhyChooseSection } from "@/components/why-choose-section"
import { BlogSection } from "@/components/blog-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <PopularToolsSection />
        <CategoriesSection />
        <WhyChooseSection />
        <BlogSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  )
}
