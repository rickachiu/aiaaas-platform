"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Check, Zap, Crown, Building2, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const plans = [
  {
    name: "Starter",
    description: "Perfect for small businesses and startups",
    price: "$99",
    period: "/month",
    icon: Zap,
    badge: "Most Popular",
    features: [
      "Up to 10,000 API calls/month",
      "5 AI models included",
      "Basic analytics dashboard",
      "Email support",
      "Standard security",
      "Community access",
      "Basic integrations"
    ],
    limitations: [
      "Limited customization",
      "Standard response time"
    ]
  },
  {
    name: "Professional",
    description: "Ideal for growing businesses with advanced needs",
    price: "$299",
    period: "/month",
    icon: Crown,
    badge: "Best Value",
    popular: true,
    features: [
      "Up to 100,000 API calls/month",
      "15 AI models included",
      "Advanced analytics & reporting",
      "Priority support (24/7)",
      "Enhanced security features",
      "Custom model training",
      "Advanced integrations",
      "Team collaboration tools",
      "A/B testing capabilities"
    ],
    limitations: []
  },
  {
    name: "Enterprise",
    description: "For large organizations with complex requirements",
    price: "Custom",
    period: "pricing",
    icon: Building2,
    badge: "Enterprise",
    features: [
      "Unlimited API calls",
      "All AI models + custom models",
      "Enterprise analytics suite",
      "Dedicated support manager",
      "Enterprise-grade security",
      "On-premise deployment option",
      "Custom integrations",
      "Advanced team management",
      "SLA guarantees",
      "Compliance certifications",
      "White-label options"
    ],
    limitations: []
  }
]

const PricingSection = () => {
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
            <Crown className="w-4 h-4 mr-2" />
            Pricing Plans
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Choose the{" "}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Perfect Plan
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Flexible pricing options designed to scale with your business. 
            Start free and upgrade as you grow.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative ${plan.popular ? 'lg:scale-105' : ''}`}
            >
              <Card className={`h-full ${plan.popular ? 'border-primary shadow-xl' : 'hover:shadow-lg'} transition-all duration-300`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">
                      {plan.badge}
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8 pt-8">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    <plan.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-base mt-2">
                    {plan.description}
                  </CardDescription>
                  <div className="mt-6">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground ml-1">{plan.period}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                    variant={plan.popular ? "default" : "outline"}
                    size="lg"
                  >
                    {plan.name === "Enterprise" ? "Contact Sales" : "Start Free Trial"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-sm">What's included:</h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <Check className="h-4 w-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {plan.limitations.length > 0 && (
                    <div className="pt-4 border-t">
                      <h4 className="font-semibold text-sm mb-3 text-muted-foreground">Limitations:</h4>
                      <ul className="space-y-2">
                        {plan.limitations.map((limitation, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="h-4 w-4 mr-3 mt-0.5 flex-shrink-0">
                              <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
                            </div>
                            <span className="text-sm text-muted-foreground">{limitation}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold mb-8">Frequently Asked Questions</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            {[
              {
                q: "Can I change plans anytime?",
                a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately."
              },
              {
                q: "Is there a free trial?",
                a: "Yes, all plans come with a 14-day free trial. No credit card required to start."
              },
              {
                q: "What happens if I exceed my API limits?",
                a: "We'll notify you before you reach your limits. You can upgrade or purchase additional capacity."
              },
              {
                q: "Do you offer custom enterprise solutions?",
                a: "Yes, we work with enterprise clients to create custom solutions tailored to their specific needs."
              }
            ].map((faq, index) => (
              <div key={index} className="space-y-2">
                <h4 className="font-semibold">{faq.q}</h4>
                <p className="text-muted-foreground text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PricingSection