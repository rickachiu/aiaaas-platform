import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import AIPlayground from "@/components/ai-playground"
import { Badge } from "@/components/ui/badge"
import { Play } from "lucide-react"

export default function PlaygroundPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <Play className="w-4 h-4 mr-2" />
              AI Playground
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Experiment with{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AI Models
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Test our AI capabilities in real-time. No coding required - just input your data 
              and see instant results from our state-of-the-art models.
            </p>
          </div>
        </div>
      </section>

      {/* Playground Component */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <AIPlayground />
        </div>
      </section>

      <Footer />
    </main>
  )
}