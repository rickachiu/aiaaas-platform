import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import PricingSection from "@/components/pricing-section"
import { Badge } from "@/components/ui/badge"
import { Crown } from "lucide-react"

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge variant="outline" className="mb-4">
              <Crown className="w-4 h-4 mr-2" />
              Transparent Pricing
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Simple, Transparent{" "}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Pricing
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the perfect plan for your business. Start free, scale as you grow, 
              and only pay for what you use.
            </p>
          </div>
        </div>
      </section>

      <PricingSection />
      <Footer />
    </main>
  )
}