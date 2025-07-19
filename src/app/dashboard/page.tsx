"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Zap,
  Brain,
  Eye,
  MessageSquare,
  Database,
  Settings,
  Bell,
  Search,
  Plus,
  Activity,
  DollarSign,
  Clock
} from "lucide-react"

const stats = [
  {
    title: "API Calls This Month",
    value: "2.4M",
    change: "+12.5%",
    icon: Zap,
    color: "text-blue-600"
  },
  {
    title: "Active Models",
    value: "24",
    change: "+3",
    icon: Brain,
    color: "text-purple-600"
  },
  {
    title: "Success Rate",
    value: "99.7%",
    change: "+0.2%",
    icon: TrendingUp,
    color: "text-green-600"
  },
  {
    title: "Monthly Cost",
    value: "$1,247",
    change: "-8.3%",
    icon: DollarSign,
    color: "text-orange-600"
  }
]

const recentActivity = [
  {
    action: "Model deployed",
    model: "Customer Sentiment Analysis v2.1",
    time: "2 minutes ago",
    status: "success"
  },
  {
    action: "API key generated",
    model: "Production Environment",
    time: "15 minutes ago",
    status: "info"
  },
  {
    action: "Training completed",
    model: "Product Recommendation Engine",
    time: "1 hour ago",
    status: "success"
  },
  {
    action: "Alert triggered",
    model: "Fraud Detection Model",
    time: "2 hours ago",
    status: "warning"
  }
]

const activeModels = [
  {
    name: "Customer Sentiment Analysis",
    type: "NLP",
    status: "Active",
    calls: "45.2K",
    accuracy: "94.7%",
    lastUpdated: "2 hours ago"
  },
  {
    name: "Product Recommendation",
    type: "ML",
    status: "Active", 
    calls: "32.1K",
    accuracy: "91.3%",
    lastUpdated: "4 hours ago"
  },
  {
    name: "Fraud Detection",
    type: "ML",
    status: "Training",
    calls: "28.7K",
    accuracy: "96.2%",
    lastUpdated: "6 hours ago"
  },
  {
    name: "Image Classification",
    type: "Computer Vision",
    status: "Active",
    calls: "19.8K",
    accuracy: "89.1%",
    lastUpdated: "8 hours ago"
  }
]

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">AI Dashboard</h1>
              <p className="text-muted-foreground">Monitor and manage your AI models</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search models..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <Button variant="outline" size="sm">
                <Bell className="h-4 w-4 mr-2" />
                Alerts
              </Button>
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Deploy Model
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="p-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={stat.title}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className={`text-sm ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                      {stat.change} from last month
                    </p>
                  </div>
                  <div className={`p-3 rounded-full bg-gray-100 dark:bg-gray-800 ${stat.color}`}>
                    <stat.icon className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Active Models */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Brain className="h-5 w-5 mr-2" />
                  Active Models
                </CardTitle>
                <CardDescription>
                  Monitor performance and usage of your deployed AI models
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {activeModels.map((model, index) => (
                    <div key={model.name} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          {model.type === 'NLP' && <MessageSquare className="h-5 w-5 text-primary" />}
                          {model.type === 'ML' && <Brain className="h-5 w-5 text-primary" />}
                          {model.type === 'Computer Vision' && <Eye className="h-5 w-5 text-primary" />}
                        </div>
                        <div>
                          <h4 className="font-semibold">{model.name}</h4>
                          <p className="text-sm text-muted-foreground">{model.type}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-6">
                        <div className="text-center">
                          <p className="text-sm font-medium">{model.calls}</p>
                          <p className="text-xs text-muted-foreground">API Calls</p>
                        </div>
                        <div className="text-center">
                          <p className="text-sm font-medium">{model.accuracy}</p>
                          <p className="text-xs text-muted-foreground">Accuracy</p>
                        </div>
                        <Badge variant={model.status === 'Active' ? 'default' : 'secondary'}>
                          {model.status}
                        </Badge>
                        <Button variant="outline" size="sm">
                          <Settings className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Activity className="h-5 w-5 mr-2" />
                  Recent Activity
                </CardTitle>
                <CardDescription>
                  Latest updates and events
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${
                        activity.status === 'success' ? 'bg-green-500' :
                        activity.status === 'warning' ? 'bg-yellow-500' :
                        'bg-blue-500'
                      }`}></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{activity.action}</p>
                        <p className="text-sm text-muted-foreground">{activity.model}</p>
                        <p className="text-xs text-muted-foreground flex items-center mt-1">
                          <Clock className="h-3 w-3 mr-1" />
                          {activity.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Plus className="h-4 w-4 mr-2" />
                  Deploy New Model
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Database className="h-4 w-4 mr-2" />
                  Upload Training Data
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  View Analytics
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Settings className="h-4 w-4 mr-2" />
                  API Settings
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Usage Chart */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>API Usage Trends</CardTitle>
            <CardDescription>
              Monitor your API usage patterns over the last 30 days
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Chart visualization would be implemented here</p>
                <p className="text-sm text-muted-foreground">Integration with charting library like Chart.js or Recharts</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}