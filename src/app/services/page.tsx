import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Brain, 
  MessageSquare, 
  Eye, 
  BarChart3, 
  Cog, 
  Database,
  ArrowRight,
  CheckCircle
} from "lucide-react"

const services = [
  {
    icon: Brain,
    title: "Machine Learning Models",
    description: "Custom ML models trained on your data for predictive analytics, classification, and pattern recognition.",
    features: [
      "Custom model development",
      "AutoML solutions",
      "Model deployment & monitoring",
      "Performance optimization",
      "A/B testing frameworks"
    ],
    pricing: "Starting at $299/month",
    popular: true
  },
  {
    icon: MessageSquare,
    title: "Natural Language Processing",
    description: "Advanced text analysis, sentiment analysis, chatbots, and language understanding capabilities.",
    features: [
      "Sentiment analysis",
      "Text classification",
      "Named entity recognition",
      "Language translation",
      "Chatbot development"
    ],
    pricing: "Starting at $199/month"
  },
  {
    icon: Eye,
    title: "Computer Vision",
    description: "Image and video analysis, object detection, facial recognition, and visual quality control.",
    features: [
      "Object detection & tracking",
      "Image classification",
      "OCR technology",
      "Facial recognition",
      "Video analytics"
    ],
    pricing: "Starting at $399/month"
  },
  {
    icon: BarChart3,
    title: "Predictive Analytics",
    description: "Forecast trends, predict customer behavior, and optimize business operations with AI-driven insights.",
    features: [
      "Demand forecasting",
      "Customer lifetime value",
      "Risk assessment",
      "Market prediction",
      "Anomaly detection"
    ],
    pricing: "Starting at $249/month"
  },
  {
    icon: Cog,
    title: "Process Automation",
    description: "Intelligent automation of repetitive tasks, workflow optimization, and robotic process automation.",
    features: [
      "RPA solutions",
      "Workflow automation",
      "Task scheduling",
      "Process optimization",
      "Integration management"
    ],
    pricing: "Starting at $349/month"
  },
  {
    icon: Database,
    title: "Data Intelligence",
    description: "Transform raw data into actionable insights with advanced analytics and data processing.",
    features: [
      "Data mining",
      "Pattern recognition",
      "Real-time processing",
      "Data visualization",
      "Business intelligence"
    ],
    pricing: "Starting at $199/month"
  }
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <Brain className="w-4 h-4 mr-2" />
              AI Services
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Comprehensive AI Solutions for{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Every Business
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From machine learning to computer vision, our AI services are designed to solve 
              real business challenges and drive measurable results across all industries.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={service.title} className="relative hover:shadow-lg transition-shadow">
                {service.popular && (
                  <Badge className="absolute -top-3 left-6 bg-primary">
                    Most Popular
                  </Badge>
                )}
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <div className="text-sm text-primary font-semibold">{service.pricing}</div>
                    </div>
                  </div>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <h4 className="font-semibold">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-6">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}