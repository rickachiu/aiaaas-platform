"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Sparkles, Clock, Shield } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/50 to-purple-600/50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-white"
        >
          <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
            <Sparkles className="w-4 h-4 mr-2" />
            Ready to Get Started?
          </Badge>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Transform Your Business
            <br />
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Starting Today
            </span>
          </h2>
          
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-12 leading-relaxed">
            Join thousands of businesses already using our AI platform to automate processes, 
            gain insights, and drive growth. Start your free trial today and see results within hours.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button size="lg" className="text-lg px-8 py-4 bg-white text-blue-600 hover:bg-gray-100" asChild>
              <Link href="/get-started">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10" asChild>
              <Link href="/demo">
                Schedule Demo
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center space-x-3"
            >
              <Clock className="h-8 w-8 text-yellow-300" />
              <div className="text-left">
                <div className="font-semibold text-lg">Setup in Minutes</div>
                <div className="text-blue-200 text-sm">No technical expertise required</div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center justify-center space-x-3"
            >
              <Shield className="h-8 w-8 text-green-300" />
              <div className="text-left">
                <div className="font-semibold text-lg">Enterprise Security</div>
                <div className="text-blue-200 text-sm">SOC 2 & GDPR compliant</div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex items-center justify-center space-x-3"
            >
              <Sparkles className="h-8 w-8 text-purple-300" />
              <div className="text-left">
                <div className="font-semibold text-lg">24/7 Support</div>
                <div className="text-blue-200 text-sm">Expert help when you need it</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection