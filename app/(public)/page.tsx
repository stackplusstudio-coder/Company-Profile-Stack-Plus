import { HeroSection } from "@/components/home/hero-section"
import { ServicesSection } from "@/components/home/services-section"
import { WhyChooseSection } from "@/components/home/why-choose-section"
import { PortfolioPreview } from "@/components/home/portfolio-preview"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyChooseSection />
      <PortfolioPreview />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
