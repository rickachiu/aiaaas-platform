"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Brain, 
  MessageSquare, 
  Eye, 
  BarChart3,
  Play,
  Zap,
  CheckCircle,
  Copy,
  Download,
  Settings
} from "lucide-react"

const playgroundTools = [
  {
    id: "sentiment",
    title: "Sentiment Analysis",
    description: "Analyze the emotional tone of text",
    icon: MessageSquare,
    category: "NLP",
    inputType: "text",
    placeholder: "Enter text to analyze sentiment...",
    sampleInput: "I absolutely love this new AI platform! It's incredibly powerful and easy to use."
  },
  {
    id: "classification",
    title: "Text Classification",
    description: "Categorize text into predefined classes",
    icon: Brain,
    category: "NLP", 
    inputType: "text",
    placeholder: "Enter text to classify...",
    sampleInput: "The quarterly revenue exceeded expectations by 15% due to strong performance in the AI division."
  },
  {
    id: "objectDetection",
    title: "Object Detection",
    description: "Detect and identify objects in images",
    icon: Eye,
    category: "Computer Vision",
    inputType: "image",
    placeholder: "Upload an image for object detection"
  },
  {
    id: "prediction",
    title: "Sales Prediction",
    description: "Predict future sales based on historical data",
    icon: BarChart3,
    category: "ML",
    inputType: "data",
    placeholder: "Enter historical sales data..."
  }
]

export default function AIPlayground() {
  const [selectedTool, setSelectedTool] = useState("sentiment")
  const [input, setInput] = useState("")
  const [result, setResult] = useState(null)
  const [isProcessing, setIsProcessing] = useState(false)

  const currentTool = playgroundTools.find(tool => tool.id === selectedTool)

  const runAnalysis = async () => {
    setIsProcessing(true)
    
    // Simulate API call with realistic delay
    setTimeout(() => {
      let mockResult = {}
      
      switch (selectedTool) {
        case "sentiment":
          mockResult = {
            sentiment: "positive",
            confidence: 0.94,
            emotions: ["joy", "satisfaction", "excitement"],
            breakdown: {
              positive: 0.94,
              neutral: 0.04,
              negative: 0.02
            }
          }
          break
        case "classification":
          mockResult = {
            category: "Business/Finance",
            confidence: 0.89,
            alternatives: [
              { category: "Technology", confidence: 0.08 },
              { category: "News", confidence: 0.03 }
            ]
          }
          break
        case "objectDetection":
          mockResult = {
            objects: [
              { name: "person", confidence: 0.95, bbox: [100, 50, 200, 300] },
              { name: "laptop", confidence: 0.87, bbox: [250, 150, 400, 250] },
              { name: "coffee cup", confidence: 0.76, bbox: [450, 100, 500, 180] }
            ],
            processingTime: "1.2s"
          }
          break
        case "prediction":
          mockResult = {
            prediction: "$2.4M",
            confidence: 0.82,
            trend: "increasing",
            factors: ["seasonal growth", "market expansion", "product launch"],
            nextQuarter: "$2.8M"
          }
          break
      }
      
      setResult(mockResult)
      setIsProcessing(false)
    }, 2000)
  }

  const copyResult = () => {
    navigator.clipboard.writeText(JSON.stringify(result, null, 2))
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">AI Playground</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Experiment with our AI models in real-time. Test different inputs and see how our AI responds.
        </p>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Tool Selection */}
        <div className="lg:col-span-1">
          <h3 className="font-semibold mb-4">AI Tools</h3>
          <div className="space-y-2">
            {playgroundTools.map((tool) => (
              <button
                key={tool.id}
                onClick={() => {
                  setSelectedTool(tool.id)
                  setInput(tool.sampleInput || "")
                  setResult(null)
                }}
                className={`w-full text-left p-3 rounded-lg transition-colors ${
                  selectedTool === tool.id
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <tool.icon className="h-5 w-5" />
                  <div>
                    <div className="font-medium text-sm">{tool.title}</div>
                    <div className="text-xs opacity-70">{tool.category}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Main Interface */}
        <div className="lg:col-span-3">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <currentTool.icon className="h-6 w-6 text-primary" />
                  <div>
                    <CardTitle>{currentTool.title}</CardTitle>
                    <CardDescription>{currentTool.description}</CardDescription>
                  </div>
                </div>
                <Badge variant="secondary">{currentTool.category}</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Input Section */}
              <div>
                <label className="block text-sm font-medium mb-2">Input</label>
                {currentTool.inputType === "text" && (
                  <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={currentTool.placeholder}
                    className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  />
                )}
                {currentTool.inputType === "image" && (
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <Eye className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-muted-foreground mb-4">{currentTool.placeholder}</p>
                    <Button variant="outline">
                      Choose File
                    </Button>
                  </div>
                )}
                {currentTool.inputType === "data" && (
                  <div className="grid grid-cols-3 gap-4">
                    <input
                      type="number"
                      placeholder="Q1 Sales"
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                    <input
                      type="number"
                      placeholder="Q2 Sales"
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                    <input
                      type="number"
                      placeholder="Q3 Sales"
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-4">
                <Button 
                  onClick={runAnalysis}
                  disabled={isProcessing || (!input && currentTool.inputType === "text")}
                  className="flex-1"
                >
                  {isProcessing ? (
                    <>
                      <Zap className="h-4 w-4 mr-2 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Play className="h-4 w-4 mr-2" />
                      Run Analysis
                    </>
                  )}
                </Button>
                <Button variant="outline" size="sm">
                  <Settings className="h-4 w-4" />
                </Button>
              </div>

              {/* Results Section */}
              {result && (
                <div className="border-t pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold">Results</h4>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" onClick={copyResult}>
                        <Copy className="h-4 w-4 mr-2" />
                        Copy
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Export
                      </Button>
                    </div>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                    {selectedTool === "sentiment" && (
                      <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <div>
                            <div className="font-medium capitalize">{result.sentiment}</div>
                            <div className="text-sm text-muted-foreground">
                              Confidence: {(result.confidence * 100).toFixed(1)}%
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="text-sm font-medium mb-2">Emotion Breakdown:</div>
                          <div className="flex flex-wrap gap-2">
                            {result.emotions.map((emotion, idx) => (
                              <Badge key={idx} variant="secondary">{emotion}</Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <div className="text-sm font-medium mb-2">Score Distribution:</div>
                          <div className="space-y-2">
                            {Object.entries(result.breakdown).map(([key, value]) => (
                              <div key={key} className="flex justify-between text-sm">
                                <span className="capitalize">{key}:</span>
                                <span>{(value * 100).toFixed(1)}%</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {selectedTool === "classification" && (
                      <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <div>
                            <div className="font-medium">{result.category}</div>
                            <div className="text-sm text-muted-foreground">
                              Confidence: {(result.confidence * 100).toFixed(1)}%
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="text-sm font-medium mb-2">Alternative Classifications:</div>
                          <div className="space-y-1">
                            {result.alternatives.map((alt, idx) => (
                              <div key={idx} className="flex justify-between text-sm">
                                <span>{alt.category}</span>
                                <span>{(alt.confidence * 100).toFixed(1)}%</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {selectedTool === "objectDetection" && (
                      <div className="space-y-4">
                        <div className="text-sm font-medium">Detected Objects:</div>
                        {result.objects.map((obj, idx) => (
                          <div key={idx} className="flex items-center justify-between p-2 bg-white dark:bg-gray-700 rounded">
                            <div className="flex items-center space-x-3">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              <span className="capitalize">{obj.name}</span>
                            </div>
                            <Badge variant="secondary">
                              {(obj.confidence * 100).toFixed(1)}%
                            </Badge>
                          </div>
                        ))}
                        <div className="text-xs text-muted-foreground">
                          Processing time: {result.processingTime}
                        </div>
                      </div>
                    )}

                    {selectedTool === "prediction" && (
                      <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <div>
                            <div className="font-medium text-lg">{result.prediction}</div>
                            <div className="text-sm text-muted-foreground">
                              Predicted next quarter revenue
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="text-sm font-medium mb-2">Key Factors:</div>
                          <div className="flex flex-wrap gap-2">
                            {result.factors.map((factor, idx) => (
                              <Badge key={idx} variant="outline">{factor}</Badge>
                            ))}
                          </div>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Confidence:</span>
                          <span>{(result.confidence * 100).toFixed(1)}%</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}