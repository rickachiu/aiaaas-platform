import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Clock,
  ArrowRight,
  Building2,
  ShoppingCart,
  Heart,
  Factory,
  Banknote,
  GraduationCap
} from "lucide-react"
import Link from "next/link"

const caseStudies = [
  {
    company: "TechFlow Solutions",
    industry: "SaaS",
    icon: Building2,
    challenge: "Customer support was overwhelmed with 10,000+ monthly tickets, leading to long response times and customer dissatisfaction.",
    solution: "Implemented AI-powered chatbot with sentiment analysis and automated ticket routing system.",
    results: [
      { metric: "Response Time", improvement: "85% faster", value: "2 minutes avg" },
      { metric: "Customer Satisfaction", improvement: "40% increase", value: "4.8/5 rating" },
      { metric: "Cost Savings", improvement: "$2.3M annually", value: "60% reduction" },
      { metric: "Ticket Resolution", improvement: "70% automated", value: "First contact resolution" }
    ],
    testimonial: "The AI solution transformed our customer service. We now handle 3x more customers with the same team size.",
    author: "Sarah Chen, CTO",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
    tags: ["NLP", "Automation", "Customer Service"]
  },
  {
    company: "RetailMax Corp",
    industry: "E-commerce",
    icon: ShoppingCart,
    challenge: "Low conversion rates and poor product discovery leading to $5M in lost revenue annually.",
    solution: "Deployed AI recommendation engine with real-time personalization and dynamic pricing optimization.",
    results: [
      { metric: "Conversion Rate", improvement: "28% increase", value: "6.2% overall" },
      { metric: "Revenue Growth", improvement: "$8.5M additional", value: "15% YoY growth" },
      { metric: "Customer Engagement", improvement: "45% longer sessions", value: "8.3 min avg" },
      { metric: "Cart Abandonment", improvement: "35% reduction", value: "22% rate" }
    ],
    testimonial: "Our AI-powered recommendations now drive 40% of our total revenue. The ROI was evident within the first quarter.",
    author: "Michael Rodriguez, VP of Operations",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    tags: ["ML", "Personalization", "Revenue Optimization"]
  },
  {
    company: "HealthTech Innovations",
    industry: "Healthcare",
    icon: Heart,
    challenge: "Radiologists were overwhelmed with image analysis, causing diagnostic delays and potential missed conditions.",
    solution: "Implemented computer vision AI for medical imaging analysis with radiologist workflow integration.",
    results: [
      { metric: "Diagnostic Accuracy", improvement: "35% improvement", value: "97.3% accuracy" },
      { metric: "Analysis Time", improvement: "75% faster", value: "3 minutes avg" },
      { metric: "Patient Throughput", improvement: "2x increase", value: "200 scans/day" },
      { metric: "Early Detection", improvement: "60% more cases", value: "Stage 1 detection" }
    ],
    testimonial: "The AI system has become an indispensable tool for our radiologists, significantly improving both speed and accuracy.",
    author: "Dr. Emily Watson, Chief Medical Officer",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
    tags: ["Computer Vision", "Healthcare", "Diagnostics"]
  },
  {
    company: "Global Manufacturing Inc",
    industry: "Manufacturing",
    icon: Factory,
    challenge: "Unexpected equipment failures causing $12M in annual downtime costs and production delays.",
    solution: "Deployed predictive maintenance AI with IoT sensors and real-time monitoring across all production lines.",
    results: [
      { metric: "Downtime Reduction", improvement: "85% decrease", value: "2 hours/month" },
      { metric: "Maintenance Costs", improvement: "$8M savings", value: "40% reduction" },
      { metric: "Equipment Efficiency", improvement: "25% increase", value: "94% OEE" },
      { metric: "Defect Rate", improvement: "60% reduction", value: "0.1% defects" }
    ],
    testimonial: "Predictive maintenance AI has revolutionized our operations. We now prevent failures before they happen.",
    author: "James Thompson, Operations Director",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
    tags: ["Predictive Analytics", "IoT", "Manufacturing"]
  },
  {
    company: "SecureBank Financial",
    industry: "Financial Services",
    icon: Banknote,
    challenge: "Rising fraud losses of $15M annually with traditional rule-based detection missing sophisticated attacks.",
    solution: "Implemented real-time AI fraud detection with behavioral analysis and risk scoring.",
    results: [
      { metric: "Fraud Detection", improvement: "45% more accurate", value: "99.2% accuracy" },
      { metric: "False Positives", improvement: "70% reduction", value: "0.8% rate" },
      { metric: "Loss Prevention", improvement: "$12M saved", value: "80% reduction" },
      { metric: "Processing Speed", improvement: "Real-time", value: "<100ms response" }
    ],
    testimonial: "Our AI fraud detection system has dramatically improved our security posture while enhancing customer experience.",
    author: "Lisa Park, Risk Management Director",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
    tags: ["Fraud Detection", "Real-time Analytics", "Risk Management"]
  },
  {
    company: "EduTech Solutions",
    industry: "Education",
    icon: GraduationCap,
    challenge: "Students struggling with one-size-fits-all learning approach, leading to 40% dropout rates.",
    solution: "Developed personalized learning AI that adapts to individual student needs and learning patterns.",
    results: [
      { metric: "Student Engagement", improvement: "50% increase", value: "85% completion" },
      { metric: "Learning Outcomes", improvement: "35% better scores", value: "Grade improvement" },
      { metric: "Dropout Rate", improvement: "60% reduction", value: "16% dropout" },
      { metric: "Teacher Efficiency", improvement: "40% time savings", value: "Focus on teaching" }
    ],
    testimonial: "Personalized AI learning has transformed education outcomes. Students are more engaged and successful than ever.",
    author: "David Kumar, Director of Innovation",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
    tags: ["Personalization", "Education", "Adaptive Learning"]
  }
]

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <TrendingUp className="w-4 h-4 mr-2" />
              Success Stories
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Real Results from{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Real Businesses
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how leading companies across industries have transformed their operations 
              and achieved remarkable ROI with our AI solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {caseStudies.map((study, index) => (
              <div key={study.company} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <study.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">{study.company}</h2>
                      <Badge variant="secondary">{study.industry}</Badge>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-red-600">Challenge</h3>
                      <p className="text-muted-foreground">{study.challenge}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-blue-600">Solution</h3>
                      <p className="text-muted-foreground">{study.solution}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-green-600">Results</h3>
                      <div className="grid grid-cols-2 gap-4">
                        {study.results.map((result, idx) => (
                          <div key={idx} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                            <div className="text-2xl font-bold text-primary mb-1">{result.improvement}</div>
                            <div className="text-sm font-medium mb-1">{result.metric}</div>
                            <div className="text-xs text-muted-foreground">{result.value}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-l-4 border-blue-500">
                      <blockquote className="text-blue-900 dark:text-blue-100 italic mb-3">
                        "{study.testimonial}"
                      </blockquote>
                      <cite className="text-blue-700 dark:text-blue-300 text-sm font-medium">
                        — {study.author}
                      </cite>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {study.tags.map((tag, idx) => (
                        <Badge key={idx} variant="outline">{tag}</Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative">
                    <img
                      src={study.image}
                      alt={study.company}
                      className="w-full h-96 object-cover rounded-2xl shadow-xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Summary */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Aggregate Impact Across All Clients</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Combined results from our AI implementations across 500+ enterprise clients
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: DollarSign, value: "$2.8B", label: "Total Cost Savings", color: "text-green-600" },
              { icon: TrendingUp, value: "340%", label: "Average ROI", color: "text-blue-600" },
              { icon: Clock, value: "65%", label: "Time Reduction", color: "text-purple-600" },
              { icon: Users, value: "98%", label: "Customer Satisfaction", color: "text-orange-600" }
            ].map((stat, index) => (
              <Card key={stat.label} className="text-center">
                <CardContent className="p-8">
                  <div className={`mx-auto w-16 h-16 ${stat.color} bg-current/10 rounded-full flex items-center justify-center mb-4`}>
                    <stat.icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Ready to Write Your Success Story?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies that have transformed their business with our AI solutions. 
            Let's discuss how we can help you achieve similar results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Schedule Consultation
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