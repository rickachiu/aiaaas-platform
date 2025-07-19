"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Play, 
  Brain, 
  MessageSquare, 
  Eye, 
  BarChart3,
  Upload,
  Download,
  Mic,
  Image as ImageIcon,
  FileText,
  Zap
} from "lucide-react"

const demoCategories = [
  {
    id: "nlp",
    title: "Natural Language Processing",
    icon: MessageSquare,
    description: "Text analysis, sentiment detection, and language understanding",
    demos: [
      {
        name: "Sentiment Analysis",
        description: "Analyze the emotional tone of text in real-time",
        inputType: "text",
        placeholder: "Enter text to analyze sentiment..."
      },
      {
        name: "Text Classification",
        description: "Automatically categorize text into predefined categories",
        inputType: "text",
        placeholder: "Enter text to classify..."
      },
      {
        name: "Language Translation",
        description: "Translate text between multiple languages",
        inputType: "text",
        placeholder: "Enter text to translate..."
      }
    ]
  },
  {
    id: "vision",
    title: "Computer Vision",
    icon: Eye,
    description: "Image and video analysis, object detection, and recognition",
    demos: [
      {
        name: "Object Detection",
        description: "Identify and locate objects in images",
        inputType: "image",
        placeholder: "Upload an image for object detection"
      },
      {
        name: "Image Classification",
        description: "Classify images into categories",
        inputType: "image",
        placeholder: "Upload an image to classify"
      },
      {
        name: "OCR Text Extraction",
        description: "Extract text from images and documents",
        inputType: "image",
        placeholder: "Upload an image with text"
      }
    ]
  },
  {
    id: "analytics",
    title: "Predictive Analytics",
    icon: BarChart3,
    description: "Forecast trends and predict outcomes using machine learning",
    demos: [
      {
        name: "Sales Forecasting",
        description: "Predict future sales based on historical data",
        inputType: "data",
        placeholder: "Upload sales data (CSV format)"
      },
      {
        name: "Customer Churn Prediction",
        description: "Identify customers likely to churn",
        inputType: "data",
        placeholder: "Upload customer data"
      },
      {
        name: "Demand Forecasting",
        description: "Predict product demand patterns",
        inputType: "data",
        placeholder: "Upload demand history data"
      }
    ]
  }
]

export default function DemoPage() {
  const [activeCategory, setActiveCategory] = useState("nlp")
  const [activeDemo, setActiveDemo] = useState(0)
  const [inputText, setInputText] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [result, setResult] = useState(null)

  const currentCategory = demoCategories.find(cat => cat.id === activeCategory)
  const currentDemo = currentCategory?.demos[activeDemo]

  const handleRunDemo = async () => {
    setIsProcessing(true)
    // Simulate API call
    setTimeout(() => {
      setResult({
        sentiment: "Positive",
        confidence: "94.7%",
        details: "The text expresses positive sentiment with high confidence."
      })
      setIsProcessing(false)
    }, 2000)
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <Play className="w-4 h-4 mr-2" />
              Interactive Demos
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Experience AI{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                In Action
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Try our AI capabilities hands-on with interactive demos. See how our technology 
              can transform your business processes in real-time.
            </p>
          </div>
        </div>
      </section>

      {/* Demo Interface */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Category Sidebar */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-semibold mb-6">AI Categories</h3>
              <div className="space-y-2">
                {demoCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setActiveCategory(category.id)
                      setActiveDemo(0)
                      setResult(null)
                    }}
                    className={`w-full text-left p-4 rounded-lg transition-colors ${
                      activeCategory === category.id
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <category.icon className="h-5 w-5" />
                      <div>
                        <div className="font-medium">{category.title}</div>
                        <div className="text-sm opacity-70">{category.description}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Demo Interface */}
            <div className="lg:col-span-3">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    {currentCategory && <currentCategory.icon className="h-6 w-6 text-primary" />}
                    <div>
                      <CardTitle>{currentCategory?.title}</CardTitle>
                      <CardDescription>{currentCategory?.description}</CardDescription>
                    </div>
                  </div>
                  
                  {/* Demo Tabs */}
                  <div className="flex space-x-2">
                    {currentCategory?.demos.map((demo, index) => (
                      <button
                        key={demo.name}
                        onClick={() => {
                          setActiveDemo(index)
                          setResult(null)
                        }}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                          activeDemo === index
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
                        }`}
                      >
                        {demo.name}
                      </button>
                    ))}
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {currentDemo && (
                    <>
                      <div>
                        <h4 className="font-semibold mb-2">{currentDemo.name}</h4>
                        <p className="text-muted-foreground">{currentDemo.description}</p>
                      </div>

                      {/* Input Area */}
                      <div className="space-y-4">
                        {currentDemo.inputType === 'text' && (
                          <div>
                            <label className="block text-sm font-medium mb-2">Input Text</label>
                            <textarea
                              value={inputText}
                              onChange={(e) => setInputText(e.target.value)}
                              placeholder={currentDemo.placeholder}
                              className="w-full h-32 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                            />
                          </div>
                        )}

                        {currentDemo.inputType === 'image' && (
                          <div>
                            <label className="block text-sm font-medium mb-2">Upload Image</label>
                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                              <ImageIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                              <p className="text-muted-foreground mb-4">{currentDemo.placeholder}</p>
                              <Button variant="outline">
                                <Upload className="h-4 w-4 mr-2" />
                                Choose File
                              </Button>
                            </div>
                          </div>
                        )}

                        {currentDemo.inputType === 'data' && (
                          <div>
                            <label className="block text-sm font-medium mb-2">Upload Data File</label>
                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                              <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                              <p className="text-muted-foreground mb-4">{currentDemo.placeholder}</p>
                              <Button variant="outline">
                                <Upload className="h-4 w-4 mr-2" />
                                Upload CSV
                              </Button>
                            </div>
                          </div>
                        )}

                        <Button 
                          onClick={handleRunDemo}
                          disabled={isProcessing || (!inputText && currentDemo.inputType === 'text')}
                          className="w-full"
                        >
                          {isProcessing ? (
                            <>
                              <Zap className="h-4 w-4 mr-2 animate-spin" />
                              Processing...
                            </>
                          ) : (
                            <>
                              <Play className="h-4 w-4 mr-2" />
                              Run Demo
                            </>
                          )}
                        </Button>
                      </div>

                      {/* Results */}
                      {result && (
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                          <h4 className="font-semibold mb-4">Results</h4>
                          <div className="space-y-3">
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Sentiment:</span>
                              <Badge variant="secondary">{result.sentiment}</Badge>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Confidence:</span>
                              <span className="font-medium">{result.confidence}</span>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Analysis:</span>
                              <p className="mt-1">{result.details}</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </CardContent>
              </Card>

              {/* API Code Example */}
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle>API Integration</CardTitle>
                  <CardDescription>
                    See how easy it is to integrate this functionality into your application
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
                    <div className="text-gray-500">// Example API call</div>
                    <div className="mt-2">
                      <span className="text-blue-400">const</span> response = <span className="text-blue-400">await</span> <span className="text-yellow-400">fetch</span>(<span className="text-orange-400">'https://api.ai-enterprise.com/v1/nlp/sentiment'</span>, {'{'}
                    </div>
                    <div className="ml-4">
                      method: <span className="text-orange-400">'POST'</span>,
                    </div>
                    <div className="ml-4">
                      headers: {'{'}
                    </div>
                    <div className="ml-8">
                      <span className="text-orange-400">'Authorization'</span>: <span className="text-orange-400">'Bearer YOUR_API_KEY'</span>,
                    </div>
                    <div className="ml-8">
                      <span className="text-orange-400">'Content-Type'</span>: <span className="text-orange-400">'application/json'</span>
                    </div>
                    <div className="ml-4">{'}'}</div>
                    <div className="ml-4">
                      body: <span className="text-yellow-400">JSON</span>.<span className="text-yellow-400">stringify</span>({'{'}
                    </div>
                    <div className="ml-8">
                      text: <span className="text-orange-400">"{inputText || 'Your text here'}"</span>
                    </div>
                    <div className="ml-4">{'}'}</div>
                    <div>{'}'});</div>
                  </div>
                  <Button variant="outline" size="sm" className="mt-4">
                    <Download className="h-4 w-4 mr-2" />
                    Download SDK
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            These demos show just a fraction of what's possible. Start your free trial 
            and access the full suite of AI capabilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}