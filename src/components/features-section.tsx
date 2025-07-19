"use client"

import { Badge } from "@/components/ui/badge"
import { 
  Cloud, 
  Shield, 
  Zap, 
  Users, 
  BarChart3, 
  Smartphone,
  Globe,
  Lock,
  RefreshCw,
  Headphones,
  Code,
  Gauge
} from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: Cloud,
    title: "Cloud-Native Architecture",
    description: "Scalable, reliable infrastructure that grows with your business needs."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security with SOC 2 compliance and end-to-end encryption."
  },
  {
    icon: Zap,
    title: "Real-Time Processing",
    description: "Lightning-fast AI inference with sub-second response times."
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Built-in collaboration tools for seamless team workflows."
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Comprehensive dashboards and reporting for data-driven decisions."
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Access your AI tools anywhere with our responsive mobile interface."
  },
  {
    icon: Globe,
    title: "Global Deployment",
    description: "Deploy AI models across multiple regions for optimal performance."
  },
  {
    icon: Lock,
    title: "Data Privacy",
    description: "Your data stays yours with strict privacy controls and GDPR compliance."
  },
  {
    icon: RefreshCw,
    title: "Continuous Learning",
    description: "Models that improve over time with automated retraining capabilities."
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock expert support to keep your AI systems running smoothly."
  },
  {
    icon: Code,
    title: "API-First Platform",
    description: "Integrate seamlessly with existing systems using our comprehensive APIs."
  },
  {
    icon: Gauge,
    title: "Performance Monitoring",
    description: "Real-time monitoring and alerting for optimal AI model performance."
  }
]

const stats = [
  { value: "99.9%", label: "Uptime SLA" },
  { value: "<100ms", label: "Response Time" },
  { value: "500+", label: "Enterprise Clients" },
  { value: "50+", label: "AI Models Available" }
]

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            <Zap className="w-4 h-4 mr-2" />
            Platform Features
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Built for{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Enterprise Scale
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our platform combines cutting-edge AI technology with enterprise-grade infrastructure 
            to deliver reliable, scalable, and secure AI solutions.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="text-center space-y-4 p-6 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center group-hover:from-primary/20 group-hover:to-primary/10 transition-all">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-800 dark:to-gray-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Experience the Difference?</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
              Join thousands of businesses already using our AI platform to transform their operations 
              and drive unprecedented growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Free Trial
              </button>
              <button className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturesSection