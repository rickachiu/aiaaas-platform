"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Rocket, 
  CheckCircle, 
  ArrowRight,
  Brain,
  MessageSquare,
  Eye,
  BarChart3,
  Zap,
  Users,
  Building2,
  Code,
  Play
} from "lucide-react"
import Link from "next/link"

const steps = [
  {
    number: "01",
    title: "Choose Your Plan",
    description: "Select the perfect plan for your business needs",
    icon: Rocket,
    details: [
      "Start with our free trial",
      "No credit card required",
      "Access to core AI models",
      "14-day full access"
    ]
  },
  {
    number: "02", 
    title: "Set Up Your Account",
    description: "Quick setup process to get you started",
    icon: Users,
    details: [
      "Create your workspace",
      "Invite team members",
      "Configure security settings",
      "Set up integrations"
    ]
  },
  {
    number: "03",
    title: "Integrate AI Models",
    description: "Connect our AI capabilities to your applications",
    icon: Code,
    details: [
      "Get your API keys",
      "Choose AI models",
      "Test with sample data",
      "Deploy to production"
    ]
  },
  {
    number: "04",
    title: "Scale & Optimize",
    description: "Monitor performance and scale as you grow",
    icon: BarChart3,
    details: [
      "Monitor usage analytics",
      "Optimize model performance",
      "Scale infrastructure",
      "Get expert support"
    ]
  }
]

const aiCapabilities = [
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Custom ML models for your specific use cases",
    features: ["Predictive Analytics", "Classification", "Regression", "Clustering"]
  },
  {
    icon: MessageSquare,
    title: "Natural Language Processing",
    description: "Understand and process human language",
    features: ["Sentiment Analysis", "Text Classification", "Language Translation", "Chatbots"]
  },
  {
    icon: Eye,
    title: "Computer Vision",
    description: "Analyze and understand visual content",
    features: ["Object Detection", "Image Classification", "OCR", "Facial Recognition"]
  },
  {
    icon: BarChart3,
    title: "Predictive Analytics",
    description: "Forecast trends and predict outcomes",
    features: ["Sales Forecasting", "Risk Assessment", "Customer Churn", "Demand Planning"]
  }
]

export default function GetStartedPage() {
  const [selectedPlan, setSelectedPlan] = useState("professional")

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <Rocket className="w-4 h-4 mr-2" />
              Get Started
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Start Your{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AI Journey
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform your business with AI in just a few simple steps. 
              Get up and running with our platform in minutes, not months.
            </p>
          </div>
        </div>
      </section>

      {/* Getting Started Steps */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">How to Get Started</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Follow these simple steps to integrate AI into your business workflow
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <Card key={step.number} className="relative hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary/20 mb-2">{step.number}</div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                  <CardDescription>{step.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-muted-foreground" />
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Capabilities Preview */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">What You Can Build</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore the AI capabilities available on our platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiCapabilities.map((capability, index) => (
              <Card key={capability.title} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <capability.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{capability.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {capability.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {capability.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start Options */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Choose Your Starting Point</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Pick the option that best fits your current needs and experience level
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Play className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <CardTitle>Try Interactive Demo</CardTitle>
                <CardDescription>
                  Explore our AI capabilities with hands-on demos
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                  <li>• No signup required</li>
                  <li>• Test real AI models</li>
                  <li>• See instant results</li>
                  <li>• Learn by doing</li>
                </ul>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/demo">
                    Try Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-primary">
              <CardHeader className="text-center">
                <Zap className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <CardTitle>Start Free Trial</CardTitle>
                <CardDescription>
                  Get full access to our platform for 14 days
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                  <li>• 14-day free trial</li>
                  <li>• No credit card required</li>
                  <li>• Full platform access</li>
                  <li>• Expert onboarding</li>
                </ul>
                <Button className="w-full" asChild>
                  <Link href="/signup">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Building2 className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                <CardTitle>Enterprise Consultation</CardTitle>
                <CardDescription>
                  Custom AI solutions for large organizations
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                  <li>• Custom implementation</li>
                  <li>• Dedicated support</li>
                  <li>• On-premise options</li>
                  <li>• SLA guarantees</li>
                </ul>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/contact">
                    Schedule Call
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Helpful Resources</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to succeed with AI implementation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "API Documentation",
                description: "Complete guide to our APIs and SDKs",
                link: "/api-docs",
                icon: Code
              },
              {
                title: "Case Studies",
                description: "Real success stories from our customers",
                link: "/case-studies", 
                icon: Building2
              },
              {
                title: "Blog & Insights",
                description: "Latest AI trends and best practices",
                link: "/blog",
                icon: MessageSquare
              },
              {
                title: "Support Center",
                description: "Get help from our expert team",
                link: "/contact",
                icon: Users
              }
            ].map((resource, index) => (
              <Card key={resource.title} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <resource.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                  <CardTitle className="text-lg">{resource.title}</CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={resource.link}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of companies already using AI to drive growth and innovation. 
            Start your free trial today and see results within hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/signup">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
              <Link href="/demo">
                Try Interactive Demo
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}