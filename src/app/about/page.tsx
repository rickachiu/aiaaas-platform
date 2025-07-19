import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Users, 
  Target, 
  Award, 
  Globe,
  Brain,
  Lightbulb,
  Shield,
  Heart
} from "lucide-react"

const team = [
  {
    name: "Dr. Sarah Chen",
    role: "CEO & Co-Founder",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
    bio: "Former AI Research Director at Google. PhD in Machine Learning from Stanford.",
    linkedin: "#"
  },
  {
    name: "Michael Rodriguez",
    role: "CTO & Co-Founder", 
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    bio: "Ex-Tesla AI Engineering Lead. 15+ years in AI infrastructure and scalable systems.",
    linkedin: "#"
  },
  {
    name: "Dr. Emily Watson",
    role: "Head of AI Research",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face",
    bio: "Former Microsoft Research Principal Scientist. Expert in NLP and Computer Vision.",
    linkedin: "#"
  },
  {
    name: "James Thompson",
    role: "VP of Engineering",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    bio: "Ex-Amazon Principal Engineer. Specialist in cloud-native AI infrastructure.",
    linkedin: "#"
  }
]

const values = [
  {
    icon: Brain,
    title: "Innovation First",
    description: "We push the boundaries of what's possible with AI, constantly exploring new frontiers."
  },
  {
    icon: Shield,
    title: "Trust & Security",
    description: "Your data security and privacy are paramount in everything we build."
  },
  {
    icon: Users,
    title: "Customer Success",
    description: "We measure our success by the transformative impact we have on your business."
  },
  {
    icon: Heart,
    title: "Ethical AI",
    description: "We're committed to developing AI that's fair, transparent, and beneficial for all."
  }
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <Users className="w-4 h-4 mr-2" />
              About Us
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Pioneering the Future of{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Artificial Intelligence
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're on a mission to democratize AI and make advanced artificial intelligence 
              accessible to businesses of all sizes, driving innovation and growth across industries.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-8">
                To empower every business with the transformative power of AI, making advanced 
                artificial intelligence accessible, ethical, and impactful. We believe AI should 
                augment human capabilities, not replace them.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Enterprise Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50M+</div>
                  <div className="text-sm text-muted-foreground">API Calls Monthly</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                  <div className="text-sm text-muted-foreground">Uptime SLA</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">150+</div>
                  <div className="text-sm text-muted-foreground">AI Experts</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 text-white">
              <Target className="h-12 w-12 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-blue-100">
                To create a world where AI enhances human potential, drives sustainable innovation, 
                and solves humanity's greatest challenges. We envision AI as a force for good that 
                creates opportunities, improves lives, and builds a better future for all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do, from product development to customer relationships.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={value.title} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto p-4 bg-primary/10 rounded-full w-fit mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Meet Our Leadership Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              World-class experts in AI, engineering, and business, united by a shared vision 
              of making AI accessible to everyone.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={member.name} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                  <Button variant="outline" size="sm">
                    Connect on LinkedIn
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Journey</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From a small research team to a global AI platform serving thousands of businesses.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  year: "2019",
                  title: "Company Founded",
                  description: "Started as an AI research lab with a vision to democratize artificial intelligence."
                },
                {
                  year: "2020",
                  title: "First Product Launch",
                  description: "Launched our first AI API for natural language processing, serving 50+ early customers."
                },
                {
                  year: "2021",
                  title: "Series A Funding",
                  description: "Raised $15M Series A to expand our AI platform and grow the team to 50+ experts."
                },
                {
                  year: "2022",
                  title: "Enterprise Platform",
                  description: "Launched enterprise-grade platform with advanced security and compliance features."
                },
                {
                  year: "2023",
                  title: "Global Expansion",
                  description: "Expanded to serve customers in 50+ countries with localized AI solutions."
                },
                {
                  year: "2024",
                  title: "AI Innovation Hub",
                  description: "Opened AI Innovation Hub and launched next-generation multimodal AI capabilities."
                }
              ].map((milestone, index) => (
                <div key={milestone.year} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                      {milestone.year.slice(-2)}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}