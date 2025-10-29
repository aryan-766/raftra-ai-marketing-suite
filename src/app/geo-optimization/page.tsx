"use client"

import { useState } from "react"
import Link from "next/link"
import MainNav from "@/components/MainNav"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { 
  Brain,
  Sparkles,
  TrendingUp,
  Search,
  FileText,
  Eye,
  CheckCircle2,
  AlertCircle,
  Zap,
  ArrowRight,
  BarChart3,
  Target,
  Globe,
  Lightbulb,
  MessageSquare,
  Bot,
  Link2,
  Award,
  RefreshCw,
  ChevronRight,
  Rocket
} from "lucide-react"
import { motion } from "framer-motion"

const aiEngines = [
  { name: "ChatGPT", coverage: 87, color: "from-green-500 to-emerald-500", status: "excellent" },
  { name: "Perplexity", coverage: 92, color: "from-blue-500 to-cyan-500", status: "excellent" },
  { name: "Claude", coverage: 84, color: "from-orange-500 to-amber-500", status: "good" },
  { name: "Bard", coverage: 78, color: "from-purple-500 to-pink-500", status: "good" },
  { name: "Bing Chat", coverage: 81, color: "from-indigo-500 to-blue-500", status: "good" },
]

const optimizationMetrics = [
  { label: "Citation Score", value: 94, icon: Link2, color: "text-green-600 dark:text-green-400" },
  { label: "Authority Score", value: 88, icon: Award, color: "text-blue-600 dark:text-blue-400" },
  { label: "Relevance Score", value: 91, icon: Target, color: "text-purple-600 dark:text-purple-400" },
  { label: "Freshness Score", value: 96, icon: RefreshCw, color: "text-cyan-600 dark:text-cyan-400" },
]

const topQueries = [
  { query: "best AI marketing tools 2024", mentions: 47, trend: "+12%", color: "text-green-600" },
  { query: "automated marketing solutions", mentions: 38, trend: "+8%", color: "text-green-600" },
  { query: "competitor analysis software", mentions: 34, trend: "+15%", color: "text-green-600" },
  { query: "AI content optimization", mentions: 29, trend: "-3%", color: "text-red-600" },
  { query: "marketing automation platform", mentions: 26, trend: "+5%", color: "text-green-600" },
]

const features = [
  {
    title: "AI Query Monitoring",
    description: "Track how AI engines respond to queries about your brand, products, and industry",
    icon: Search,
    gradient: "from-violet-600 to-purple-600"
  },
  {
    title: "Citation Optimization",
    description: "Maximize citation frequency and accuracy across all major AI search platforms",
    icon: Link2,
    gradient: "from-blue-600 to-cyan-600"
  },
  {
    title: "Content Structuring",
    description: "Format content for optimal AI comprehension with semantic markup and clear hierarchies",
    icon: FileText,
    gradient: "from-emerald-600 to-teal-600"
  },
  {
    title: "Authority Building",
    description: "Enhance your brand's authority signals that AI models use to rank information sources",
    icon: Award,
    gradient: "from-orange-600 to-red-600"
  },
  {
    title: "Real-time Tracking",
    description: "Monitor your GEO performance with live updates across all AI search engines",
    icon: Eye,
    gradient: "from-pink-600 to-rose-600"
  },
  {
    title: "Competitive Analysis",
    description: "See how competitors appear in AI responses and identify opportunities to outrank them",
    icon: TrendingUp,
    gradient: "from-indigo-600 to-blue-600"
  },
]

const recommendations = [
  {
    title: "Add structured FAQ schema",
    impact: "High",
    effort: "Low",
    status: "pending",
    description: "Implement FAQ schema markup on product pages to improve AI comprehension"
  },
  {
    title: "Enhance author credentials",
    impact: "High",
    effort: "Medium",
    status: "in-progress",
    description: "Add E-E-A-T signals with detailed author bios and credentials"
  },
  {
    title: "Update citation sources",
    impact: "Medium",
    effort: "Low",
    status: "completed",
    description: "Refresh external links and add authoritative source citations"
  },
]

export default function GEOOptimizationPage() {
  const [selectedEngine, setSelectedEngine] = useState("all")

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-cyan-50/20 dark:to-cyan-950/20">
      <MainNav />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-3xl blur-3xl" />
          <Card className="relative border-2">
            <CardContent className="pt-12 pb-12">
              <div className="flex items-start justify-between">
                <div className="space-y-4 flex-1">
                  <div className="flex items-center gap-3">
                    <motion.div 
                      className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-2xl flex items-center justify-center"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Brain className="w-8 h-8 text-white" />
                    </motion.div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h1 className="text-4xl font-bold">GEO Optimization</h1>
                        <Badge className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-0">
                          <Zap className="w-3 h-3 mr-1" />
                          Future-Proof
                        </Badge>
                      </div>
                      <p className="text-muted-foreground mt-1">
                        Generative Engine Optimization
                      </p>
                    </div>
                  </div>
                  <p className="text-lg text-muted-foreground max-w-3xl">
                    Future-proof your content visibility by optimizing for AI-powered search engines. 
                    Track mentions, improve citations, and dominate AI-generated responses across ChatGPT, 
                    Perplexity, Claude, and more.
                  </p>
                  <div className="flex gap-3">
                    <Button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:opacity-90">
                      <Rocket className="w-4 h-4 mr-2" />
                      Start Optimization
                    </Button>
                    <Button variant="outline">
                      <BarChart3 className="w-4 h-4 mr-2" />
                      View Analytics
                    </Button>
                  </div>
                </div>
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="hidden lg:block"
                >
                  <div className="relative w-48 h-48">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full opacity-20 animate-pulse" />
                    <div className="absolute inset-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full opacity-40 animate-pulse" style={{ animationDelay: "0.5s" }} />
                    <div className="absolute inset-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                      <Sparkles className="w-12 h-12 text-white animate-pulse" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Performance Metrics */}
        <div className="grid gap-6 md:grid-cols-4">
          {optimizationMetrics.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className="relative overflow-hidden border-2 hover:border-cyan-200 dark:hover:border-cyan-800 transition-all">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <metric.icon className={`w-8 h-8 ${metric.color}`} />
                    <span className="text-3xl font-bold">{metric.value}</span>
                  </div>
                  <p className="text-sm font-medium text-muted-foreground">{metric.label}</p>
                  <Progress value={metric.value} className="mt-3 h-2" />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* AI Engine Coverage */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="border-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                    AI Search Engine Coverage
                  </CardTitle>
                  <CardDescription>Your visibility across major AI platforms</CardDescription>
                </div>
                <Button variant="outline" size="sm">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Refresh
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {aiEngines.map((engine, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${engine.color}`} />
                        <span className="font-medium">{engine.name}</span>
                        <Badge variant={engine.status === "excellent" ? "default" : "secondary"} className="text-xs">
                          {engine.status}
                        </Badge>
                      </div>
                      <span className="text-sm font-semibold">{engine.coverage}%</span>
                    </div>
                    <div className="relative h-3 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${engine.coverage}%` }}
                        transition={{ duration: 1, delay: idx * 0.1 }}
                        className={`h-full bg-gradient-to-r ${engine.color} rounded-full`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="queries" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-auto">
            <TabsTrigger value="queries">
              <Search className="w-4 h-4 mr-2" />
              Query Analysis
            </TabsTrigger>
            <TabsTrigger value="recommendations">
              <Lightbulb className="w-4 h-4 mr-2" />
              Recommendations
            </TabsTrigger>
            <TabsTrigger value="features">
              <Sparkles className="w-4 h-4 mr-2" />
              Features
            </TabsTrigger>
          </TabsList>

          {/* Query Analysis Tab */}
          <TabsContent value="queries" className="space-y-6">
            <Card className="border-2">
              <CardHeader>
                <CardTitle>Top Queries Mentioning Your Brand</CardTitle>
                <CardDescription>
                  AI search queries where your content appears in responses
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topQueries.map((query, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                      className="flex items-center justify-between p-4 rounded-lg border hover:border-cyan-200 dark:hover:border-cyan-800 transition-all cursor-pointer group"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <MessageSquare className="w-4 h-4 text-muted-foreground" />
                          <span className="font-medium group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                            {query.query}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="text-right">
                          <div className="text-sm text-muted-foreground">Mentions</div>
                          <div className="text-lg font-bold">{query.mentions}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-muted-foreground">Trend</div>
                          <div className={`text-lg font-bold ${query.color}`}>{query.trend}</div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Recommendations Tab */}
          <TabsContent value="recommendations" className="space-y-6">
            <Card className="border-2">
              <CardHeader>
                <CardTitle>AI-Powered Optimization Recommendations</CardTitle>
                <CardDescription>
                  Prioritized actions to improve your GEO performance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recommendations.map((rec, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="p-5 rounded-lg border-2 hover:border-cyan-200 dark:hover:border-cyan-800 transition-all"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-start gap-3 flex-1">
                          {rec.status === "completed" ? (
                            <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5" />
                          ) : rec.status === "in-progress" ? (
                            <RefreshCw className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 animate-spin" />
                          ) : (
                            <AlertCircle className="w-5 h-5 text-orange-600 dark:text-orange-400 mt-0.5" />
                          )}
                          <div className="flex-1">
                            <h4 className="font-semibold mb-1">{rec.title}</h4>
                            <p className="text-sm text-muted-foreground">{rec.description}</p>
                          </div>
                        </div>
                        <div className="flex gap-2 ml-4">
                          <Badge variant={rec.impact === "High" ? "default" : "secondary"}>
                            {rec.impact} Impact
                          </Badge>
                          <Badge variant="outline">{rec.effort} Effort</Badge>
                        </div>
                      </div>
                      {rec.status !== "completed" && (
                        <Button size="sm" className="mt-3" variant="outline">
                          <Rocket className="w-4 h-4 mr-2" />
                          {rec.status === "in-progress" ? "View Progress" : "Start Task"}
                        </Button>
                      )}
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Features Tab */}
          <TabsContent value="features" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <Card className="h-full border-2 hover:border-cyan-200 dark:hover:border-cyan-800 transition-all cursor-pointer group">
                    <CardHeader>
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="flex items-center justify-between">
                        {feature.title}
                        <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                      </CardTitle>
                      <CardDescription className="text-base">
                        {feature.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="relative overflow-hidden border-2 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-200 dark:border-cyan-800">
            <div className="absolute inset-0 bg-grid-slate-900/[0.04] dark:bg-grid-slate-400/[0.05] bg-[size:20px_20px]" />
            <CardContent className="relative pt-12 pb-12">
              <div className="max-w-3xl mx-auto text-center space-y-6">
                <div className="flex items-center justify-center gap-3">
                  <Bot className="w-12 h-12 text-cyan-600 dark:text-cyan-400" />
                  <h2 className="text-3xl font-bold">Stay Ahead of the Curve</h2>
                </div>
                <p className="text-xl text-muted-foreground">
                  AI search is the future. Start optimizing your content today to dominate tomorrow's search landscape.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <Button size="lg" className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:opacity-90">
                    <Rocket className="w-5 h-5 mr-2" />
                    Get Started Free
                  </Button>
                  <Button size="lg" variant="outline">
                    <FileText className="w-5 h-5 mr-2" />
                    Read Documentation
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </main>
    </div>
  )
}
