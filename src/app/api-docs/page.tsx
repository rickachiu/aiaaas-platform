import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Code, 
  Book, 
  Zap, 
  Shield,
  Copy,
  ExternalLink,
  CheckCircle,
  AlertCircle
} from "lucide-react"

const apiEndpoints = [
  {
    category: "Natural Language Processing",
    endpoints: [
      {
        method: "POST",
        path: "/api/v1/nlp/sentiment",
        description: "Analyze sentiment of text",
        params: ["text", "language?"],
        response: "sentiment, confidence, emotions"
      },
      {
        method: "POST", 
        path: "/api/v1/nlp/classify",
        description: "Classify text into categories",
        params: ["text", "categories", "model?"],
        response: "category, confidence, alternatives"
      },
      {
        method: "POST",
        path: "/api/v1/nlp/translate",
        description: "Translate text between languages",
        params: ["text", "from", "to"],
        response: "translated_text, confidence"
      }
    ]
  },
  {
    category: "Computer Vision",
    endpoints: [
      {
        method: "POST",
        path: "/api/v1/vision/detect",
        description: "Detect objects in images",
        params: ["image", "confidence_threshold?"],
        response: "objects, bounding_boxes, confidence"
      },
      {
        method: "POST",
        path: "/api/v1/vision/classify",
        description: "Classify image content",
        params: ["image", "top_k?"],
        response: "categories, confidence_scores"
      },
      {
        method: "POST",
        path: "/api/v1/vision/ocr",
        description: "Extract text from images",
        params: ["image", "language?"],
        response: "text, bounding_boxes, confidence"
      }
    ]
  },
  {
    category: "Machine Learning",
    endpoints: [
      {
        method: "POST",
        path: "/api/v1/ml/predict",
        description: "Make predictions with custom models",
        params: ["model_id", "features"],
        response: "prediction, confidence, feature_importance"
      },
      {
        method: "POST",
        path: "/api/v1/ml/train",
        description: "Train a new model",
        params: ["dataset", "model_type", "parameters"],
        response: "model_id, training_status, metrics"
      },
      {
        method: "GET",
        path: "/api/v1/ml/models",
        description: "List available models",
        params: ["category?", "status?"],
        response: "models, metadata, performance"
      }
    ]
  }
]

const codeExamples = {
  curl: `curl -X POST "https://api.ai-enterprise.com/v1/nlp/sentiment" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "text": "I love this product!",
    "language": "en"
  }'`,
  
  python: `import requests

url = "https://api.ai-enterprise.com/v1/nlp/sentiment"
headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}
data = {
    "text": "I love this product!",
    "language": "en"
}

response = requests.post(url, headers=headers, json=data)
result = response.json()
print(result)`,

  javascript: `const response = await fetch('https://api.ai-enterprise.com/v1/nlp/sentiment', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    text: 'I love this product!',
    language: 'en'
  })
});

const result = await response.json();
console.log(result);`
}

export default function ApiDocsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <Code className="w-4 h-4 mr-2" />
              API Documentation
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Developer-Friendly{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AI APIs
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive documentation for integrating our AI capabilities into your applications. 
              RESTful APIs with SDKs for popular programming languages.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Quick Start Guide</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card>
                <CardHeader>
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <CardTitle className="text-lg">Get API Key</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Sign up for an account and generate your API key from the dashboard.
                  </p>
                  <Button variant="outline" size="sm">
                    Get Started
                  </Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <CardTitle className="text-lg">Make API Call</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Use our RESTful endpoints to integrate AI into your application.
                  </p>
                  <Button variant="outline" size="sm">
                    View Examples
                  </Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <CardTitle className="text-lg">Scale & Deploy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Monitor usage, optimize performance, and scale your AI applications.
                  </p>
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* API Endpoints */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">API Endpoints</h2>
            <div className="space-y-8">
              {apiEndpoints.map((category, index) => (
                <Card key={category.category}>
                  <CardHeader>
                    <CardTitle className="text-xl">{category.category}</CardTitle>
                    <CardDescription>
                      Available endpoints for {category.category.toLowerCase()} operations
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {category.endpoints.map((endpoint, idx) => (
                        <div key={idx} className="border rounded-lg p-4">
                          <div className="flex items-center space-x-4 mb-3">
                            <Badge variant={endpoint.method === 'GET' ? 'secondary' : 'default'}>
                              {endpoint.method}
                            </Badge>
                            <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                              {endpoint.path}
                            </code>
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">{endpoint.description}</p>
                          <div className="grid md:grid-cols-2 gap-4 text-sm">
                            <div>
                              <h5 className="font-medium mb-2">Parameters:</h5>
                              <ul className="space-y-1">
                                {endpoint.params.map((param, pidx) => (
                                  <li key={pidx} className="text-muted-foreground">
                                    <code className="text-xs bg-gray-100 dark:bg-gray-700 px-1 rounded">
                                      {param}
                                    </code>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h5 className="font-medium mb-2">Response:</h5>
                              <p className="text-muted-foreground">{endpoint.response}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Code Examples</h2>
            <div className="space-y-6">
              {Object.entries(codeExamples).map(([language, code]) => (
                <Card key={language}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg capitalize">{language}</CardTitle>
                      <Button variant="outline" size="sm">
                        <Copy className="h-4 w-4 mr-2" />
                        Copy
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                      <code>{code}</code>
                    </pre>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Authentication */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Authentication</h2>
            <Card>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <Shield className="h-5 w-5 mr-2 text-primary" />
                      API Key Authentication
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      All API requests must include your API key in the Authorization header:
                    </p>
                    <pre className="bg-gray-900 text-gray-100 p-3 rounded text-sm">
                      <code>Authorization: Bearer YOUR_API_KEY</code>
                    </pre>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <Zap className="h-5 w-5 mr-2 text-primary" />
                      Rate Limits
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Starter Plan:</span>
                        <span className="font-medium">1,000 requests/hour</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Professional:</span>
                        <span className="font-medium">10,000 requests/hour</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Enterprise:</span>
                        <span className="font-medium">Unlimited</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Error Handling */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Error Handling</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-green-600">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    Success Response
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded text-sm">
                    <code>{`{
  "status": "success",
  "data": {
    "sentiment": "positive",
    "confidence": 0.95,
    "emotions": ["joy", "satisfaction"]
  },
  "request_id": "req_123456"
}`}</code>
                  </pre>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-red-600">
                    <AlertCircle className="h-5 w-5 mr-2" />
                    Error Response
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded text-sm">
                    <code>{`{
  "status": "error",
  "error": {
    "code": "INVALID_INPUT",
    "message": "Text parameter is required",
    "details": "The 'text' field cannot be empty"
  },
  "request_id": "req_123456"
}`}</code>
                  </pre>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* SDKs */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Official SDKs</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Use our official SDKs to integrate AI capabilities into your applications faster.
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { name: "Python", icon: "🐍", status: "Available" },
                { name: "JavaScript", icon: "🟨", status: "Available" },
                { name: "Java", icon: "☕", status: "Available" },
                { name: "Go", icon: "🐹", status: "Coming Soon" }
              ].map((sdk) => (
                <Card key={sdk.name} className="text-center">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{sdk.icon}</div>
                    <h3 className="font-semibold mb-2">{sdk.name}</h3>
                    <Badge variant={sdk.status === 'Available' ? 'default' : 'secondary'}>
                      {sdk.status}
                    </Badge>
                    {sdk.status === 'Available' && (
                      <Button variant="outline" size="sm" className="mt-4 w-full">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}