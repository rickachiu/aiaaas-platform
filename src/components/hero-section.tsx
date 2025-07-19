"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Sparkles, Zap, Shield } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <Badge variant="outline" className="w-fit">
              <Sparkles className="w-4 h-4 mr-2" />
              AI-Powered Business Solutions
            </Badge>
            
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                Transform Your Business with{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Intelligent AI
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Unlock the power of artificial intelligence with our comprehensive AIaaS platform. 
                From automated workflows to predictive analytics, we help businesses scale efficiently 
                and make data-driven decisions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8" asChild>
                <Link href="/get-started">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                <Link href="/demo">
                  Watch Demo
                </Link>
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div className="flex items-center space-x-2">
                <Zap className="h-5 w-5 text-green-500" />
                <span className="text-sm font-medium">99.9% Uptime</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-blue-500" />
                <span className="text-sm font-medium">Enterprise Security</span>
              </div>
            </div>
          </motion.div>

          {/* Right Content - AI Visualization */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 shadow-2xl">
              <div className="grid grid-cols-3 gap-4">
                {/* AI Service Cards */}
                {[
                  { title: "NLP", icon: "🧠", color: "bg-blue-500" },
                  { title: "Vision", icon: "👁️", color: "bg-purple-500" },
                  { title: "Analytics", icon: "📊", color: "bg-green-500" },
                  { title: "Automation", icon: "⚡", color: "bg-yellow-500" },
                  { title: "ML Models", icon: "🤖", color: "bg-red-500" },
                  { title: "Insights", icon: "💡", color: "bg-indigo-500" },
                ].map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center text-white"
                  >
                    <div className="text-2xl mb-2">{service.icon}</div>
                    <div className="text-sm font-medium">{service.title}</div>
                  </motion.div>
                ))}
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full animate-pulse delay-1000"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection