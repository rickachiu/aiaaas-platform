import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  BookOpen, 
  Calendar, 
  User, 
  ArrowRight,
  TrendingUp,
  Brain,
  Zap,
  Shield
} from "lucide-react"
import Link from "next/link"

const featuredPost = {
  title: "The Future of AI in Enterprise: 2024 Trends and Predictions",
  excerpt: "Explore the latest trends shaping enterprise AI adoption, from generative AI to autonomous systems, and what it means for your business strategy.",
  author: "Dr. Sarah Chen",
  date: "March 15, 2024",
  readTime: "8 min read",
  image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
  category: "Industry Insights",
  featured: true
}

const blogPosts = [
  {
    title: "Building Ethical AI: A Comprehensive Guide for Businesses",
    excerpt: "Learn how to implement ethical AI practices in your organization, from bias detection to transparent decision-making processes.",
    author: "Dr. Emily Watson",
    date: "March 12, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=250&fit=crop",
    category: "Ethics & Governance"
  },
  {
    title: "ROI of AI Implementation: Real Case Studies from Fortune 500",
    excerpt: "Discover how leading companies achieved 300%+ ROI through strategic AI implementation across different business functions.",
    author: "Michael Rodriguez",
    date: "March 10, 2024",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
    category: "Business Strategy"
  },
  {
    title: "Computer Vision in Manufacturing: Reducing Defects by 85%",
    excerpt: "How AI-powered quality control systems are revolutionizing manufacturing processes and dramatically improving product quality.",
    author: "James Thompson",
    date: "March 8, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop",
    category: "Use Cases"
  },
  {
    title: "Natural Language Processing: From Chatbots to Document Intelligence",
    excerpt: "Explore the evolution of NLP technology and its applications in modern business, from customer service to legal document analysis.",
    author: "Lisa Park",
    date: "March 5, 2024",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
    category: "Technology Deep Dive"
  },
  {
    title: "AI Security Best Practices: Protecting Your Models and Data",
    excerpt: "Essential security measures every organization should implement when deploying AI systems in production environments.",
    author: "David Kumar",
    date: "March 3, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=250&fit=crop",
    category: "Security"
  },
  {
    title: "Predictive Analytics in Healthcare: Saving Lives with AI",
    excerpt: "How predictive AI models are helping healthcare providers identify at-risk patients and improve treatment outcomes.",
    author: "Dr. Sarah Chen",
    date: "March 1, 2024",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop",
    category: "Healthcare"
  }
]

const categories = [
  { name: "All Posts", count: 24, active: true },
  { name: "Industry Insights", count: 8 },
  { name: "Technology Deep Dive", count: 6 },
  { name: "Use Cases", count: 5 },
  { name: "Business Strategy", count: 3 },
  { name: "Ethics & Governance", count: 2 }
]

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <BookOpen className="w-4 h-4 mr-2" />
              AI Insights Blog
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Latest Insights on{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AI Innovation
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay ahead of the curve with expert insights, industry trends, case studies, 
              and practical guides on artificial intelligence and machine learning.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-8 flex items-center">
              <TrendingUp className="h-6 w-6 mr-2 text-primary" />
              Featured Article
            </h2>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <Badge className="mb-4">{featuredPost.category}</Badge>
                  <h3 className="text-2xl font-bold mb-4">{featuredPost.title}</h3>
                  <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center text-sm text-muted-foreground mb-6">
                    <User className="h-4 w-4 mr-1" />
                    <span className="mr-4">{featuredPost.author}</span>
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="mr-4">{featuredPost.date}</span>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <Button asChild>
                    <Link href="/blog/future-of-ai-enterprise-2024">
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Categories & Posts */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar */}
            <div className="lg:w-1/4">
              <div className="sticky top-8">
                <h3 className="text-lg font-semibold mb-6">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.name}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        category.active
                          ? 'bg-primary text-primary-foreground'
                          : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span>{category.name}</span>
                        <span className="text-sm opacity-70">({category.count})</span>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Newsletter Signup */}
                <Card className="mt-8">
                  <CardHeader>
                    <CardTitle className="text-lg">Stay Updated</CardTitle>
                    <CardDescription>
                      Get the latest AI insights delivered to your inbox.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                      <Button size="sm" className="w-full">
                        Subscribe
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="lg:w-3/4">
              <div className="grid md:grid-cols-2 gap-8">
                {blogPosts.map((post, index) => (
                  <Card key={post.title} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader>
                      <Badge variant="secondary" className="w-fit mb-2">
                        {post.category}
                      </Badge>
                      <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
                      <CardDescription className="line-clamp-3">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center text-sm text-muted-foreground mb-4">
                        <User className="h-4 w-4 mr-1" />
                        <span className="mr-4">{post.author}</span>
                        <Calendar className="h-4 w-4 mr-1" />
                        <span className="mr-4">{post.date}</span>
                        <span>{post.readTime}</span>
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/blog/${post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <Button variant="outline" size="lg">
                  Load More Articles
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}