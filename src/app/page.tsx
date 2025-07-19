import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import SolutionsSection from "@/components/solutions-section"
import FeaturesSection from "@/components/features-section"
import TestimonialsSection from "@/components/testimonials-section"
import PricingSection from "@/components/pricing-section"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <SolutionsSection />
      <FeaturesSection />
      <TestimonialsSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </main>
  )
}