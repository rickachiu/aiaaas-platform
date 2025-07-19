"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Building2, 
  ShoppingCart, 
  Heart, 
  Car, 
  Banknote, 
  GraduationCap,
  Factory,
  Smartphone,
  ArrowRight
} from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

const solutions = [
  {
    icon: Building2,
    title: "Enterprise AI",
    description: "Scalable AI solutions for large organizations with complex workflows and data requirements.",
    useCases: ["Document Processing", "Workflow Automation", "Decision Support", "Risk Management"],
    industries: ["Fortune 500", "Government", "Consulting"],
    roi: "40% efficiency gain"
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Intelligence",
    description: "AI-powered recommendations, inventory optimization, and customer behavior analysis.",
    useCases: ["Product Recommendations", "Price Optimization", "Fraud Detection", "Customer Segmentation"],
    industries: ["Retail", "Marketplace", "B2B Commerce"],
    roi: "25% revenue increase"
  },
  {
    icon: Heart,
    title: "Healthcare AI",
    description: "Medical imaging analysis, patient data processing, and diagnostic assistance tools.",
    useCases: ["Medical Imaging", "Drug Discovery", "Patient Monitoring", "Clinical Decision Support"],
    industries: ["Hospitals", "Pharma", "MedTech"],
    roi: "30% faster diagnosis"
  },
  {
    icon: Banknote,
    title: "Financial Services",
    description: "Risk assessment, fraud detection, algorithmic trading, and regulatory compliance.",
    useCases: ["Credit Scoring", "Fraud Prevention", "Algorithmic Trading", "Compliance Monitoring"],
    industries: ["Banks", "Insurance", "FinTech"],
    roi: "50% fraud reduction"
  },
  {
    icon: Factory,
    title: "Manufacturing 4.0",
    description: "Predictive maintenance, quality control, supply chain optimization, and smart manufacturing.",
    useCases: ["Predictive Maintenance", "Quality Control", "Supply Chain", "Production Optimization"],
    industries: ["Automotive", "Aerospace", "Electronics"],
    roi: "35% downtime reduction"
  },
  {
    icon: GraduationCap,
    title: "Education Technology",
    description: "Personalized learning, automated grading, and educational content generation.",
    useCases: ["Personalized Learning", "Automated Grading", "Content Generation", "Student Analytics"],
    industries: ["Universities", "K-12", "Online Learning"],
    roi: "60% time savings"
  }
]

const SolutionsSection = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            <Building2 className="w-4 h-4 mr-2" />
            Industry Solutions
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            AI Solutions Tailored for{" "}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Your Industry
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We understand that every industry has unique challenges. Our AI solutions are 
            specifically designed to address sector-specific needs and deliver measurable ROI.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl group-hover:from-primary/20 group-hover:to-primary/10 transition-all">
                      <solution.icon className="h-8 w-8 text-primary" />
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                      {solution.roi}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mb-2">{solution.title}</CardTitle>
                  <CardDescription className="text-base">
                    {solution.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-sm mb-3 text-primary">Key Use Cases</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {solution.useCases.map((useCase, idx) => (
                        <div key={idx} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                          <span className="truncate">{useCase}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-sm mb-3 text-primary">Target Industries</h4>
                    <div className="flex flex-wrap gap-2">
                      {solution.industries.map((industry, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {industry}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
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
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Don't See Your Industry?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              We work with businesses across all sectors. Our AI experts can create custom solutions 
              tailored to your specific industry requirements and challenges.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Discuss Custom Solution
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SolutionsSection