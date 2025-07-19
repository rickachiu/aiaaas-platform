import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import SolutionsSection from "@/components/solutions-section"
import { Badge } from "@/components/ui/badge"
import { Building2 } from "lucide-react"

export default function SolutionsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge variant="outline" className="mb-4">
              <Building2 className="w-4 h-4 mr-2" />
              Industry Solutions
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              AI Solutions for{" "}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Every Industry
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how our AI technology is transforming businesses across industries. 
              From healthcare to finance, we have the expertise to solve your unique challenges.
            </p>
          </div>
        </div>
      </section>

      <SolutionsSection />
      <Footer />
    </main>
  )
}