"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Brain, 
  Eye, 
  MessageSquare, 
  BarChart3, 
  Cog, 
  Shield,
  Zap,
  Database,
  FileText,
  Mic,
  Image,
  TrendingUp
} from "lucide-react"
import { motion } from "framer-motion"

const services = [
  {
    icon: Brain,
    title: "Machine Learning Models",
    description: "Custom ML models trained on your data for predictive analytics, classification, and pattern recognition.",
    features: ["Custom Model Training", "AutoML Solutions", "Model Deployment", "Performance Monitoring"],
    badge: "Popular"
  },
  {
    icon: MessageSquare,
    title: "Natural Language Processing",
    description: "Advanced text analysis, sentiment analysis, chatbots, and language understanding capabilities.",
    features: ["Sentiment Analysis", "Text Classification", "Chatbot Development", "Language Translation"],
    badge: "AI-Powered"
  },
  {
    icon: Eye,
    title: "Computer Vision",
    description: "Image and video analysis, object detection, facial recognition, and visual quality control.",
    features: ["Object Detection", "Image Classification", "OCR Technology", "Video Analytics"],
    badge: "Advanced"
  },
  {
    icon: BarChart3,
    title: "Predictive Analytics",
    description: "Forecast trends, predict customer behavior, and optimize business operations with AI-driven insights.",
    features: ["Demand Forecasting", "Risk Assessment", "Customer Analytics", "Market Prediction"],
    badge: "Business Critical"
  },
  {
    icon: Cog,
    title: "Process Automation",
    description: "Intelligent automation of repetitive tasks, workflow optimization, and robotic process automation.",
    features: ["RPA Solutions", "Workflow Automation", "Task Scheduling", "Process Optimization"],
    badge: "Efficiency"
  },
  {
    icon: Database,
    title: "Data Intelligence",
    description: "Transform raw data into actionable insights with advanced analytics and data processing.",
    features: ["Data Mining", "Pattern Recognition", "Anomaly Detection", "Real-time Processing"],
    badge: "Insights"
  },
  {
    icon: Mic,
    title: "Speech & Audio AI",
    description: "Speech recognition, voice synthesis, audio analysis, and conversational AI solutions.",
    features: ["Speech-to-Text", "Voice Synthesis", "Audio Classification", "Voice Assistants"],
    badge: "Voice Tech"
  },
  {
    icon: Shield,
    title: "AI Security & Compliance",
    description: "Secure AI implementations with compliance monitoring, bias detection, and ethical AI practices.",
    features: ["Bias Detection", "Compliance Monitoring", "Security Audits", "Ethical AI"],
    badge: "Secure"
  }
]

const ServicesSection = () => {
  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            <Zap className="w-4 h-4 mr-2" />
            AI Services
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Comprehensive AI Solutions for{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Every Business Need
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From machine learning to natural language processing, our AI services are designed 
            to solve real business challenges and drive measurable results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {service.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" size="sm" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button size="lg" className="text-lg px-8">
            Explore All Services
            <TrendingUp className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection