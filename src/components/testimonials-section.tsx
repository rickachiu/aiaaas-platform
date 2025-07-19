"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"
import { motion } from "framer-motion"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO",
    company: "TechFlow Solutions",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    content: "The AI automation platform transformed our customer service operations. We've seen a 60% reduction in response times and 40% increase in customer satisfaction.",
    rating: 5,
    industry: "SaaS"
  },
  {
    name: "Michael Rodriguez",
    role: "VP of Operations",
    company: "Global Manufacturing Inc",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    content: "Predictive maintenance AI has saved us millions in downtime costs. The ROI was evident within the first quarter of implementation.",
    rating: 5,
    industry: "Manufacturing"
  },
  {
    name: "Dr. Emily Watson",
    role: "Chief Medical Officer",
    company: "HealthTech Innovations",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
    content: "The medical imaging AI has enhanced our diagnostic accuracy by 35%. It's become an indispensable tool for our radiologists.",
    rating: 5,
    industry: "Healthcare"
  },
  {
    name: "James Thompson",
    role: "Head of Analytics",
    company: "RetailMax Corp",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    content: "The recommendation engine increased our conversion rates by 28%. The personalization capabilities are truly impressive.",
    rating: 5,
    industry: "E-commerce"
  },
  {
    name: "Lisa Park",
    role: "Risk Manager",
    company: "SecureBank Financial",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    content: "Fraud detection accuracy improved by 45% while reducing false positives. The AI learns and adapts to new fraud patterns continuously.",
    rating: 5,
    industry: "Financial Services"
  },
  {
    name: "David Kumar",
    role: "Director of Innovation",
    company: "EduTech Solutions",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    content: "Personalized learning AI has improved student engagement by 50%. Teachers can now focus on what they do best - teaching.",
    rating: 5,
    industry: "Education"
  }
]

const TestimonialsSection = () => {
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
            <Star className="w-4 h-4 mr-2" />
            Customer Success
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Industry Leaders
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how businesses across industries are transforming their operations 
            and achieving remarkable results with our AI solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Quote className="h-8 w-8 text-primary/20 mr-2" />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  
                  <blockquote className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-semibold text-sm">{testimonial.name}</div>
                        <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                        <div className="text-xs text-muted-foreground">{testimonial.company}</div>
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {testimonial.industry}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">Trusted by 500+ Companies Worldwide</h3>
            <p className="text-muted-foreground">From startups to Fortune 500 companies</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            {/* Company logos placeholder */}
            {[
              "TechCorp", "InnovateLab", "DataFlow", "AI Systems",
              "CloudTech", "SmartSolutions", "FutureAI", "NextGen"
            ].map((company, index) => (
              <div key={company} className="text-center">
                <div className="bg-gray-200 dark:bg-gray-700 rounded-lg p-6 mb-2">
                  <div className="text-lg font-bold text-gray-500 dark:text-gray-400">
                    {company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection