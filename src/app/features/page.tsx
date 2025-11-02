"use client"

import Link from "next/link"
import MainNav from "@/components/MainNav"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Zap, 
  Brain, 
  BarChart3, 
  Target, 
  MessageSquare, 
  Palette,
  RefreshCw,
  Wand2,
  Globe,
  Users,
  TrendingUp,
  Eye,
  Settings,
  Sparkles,
  Activity,
  DollarSign,
  FileText,
  Rocket,
  ShoppingCart,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  ArrowRight
} from "lucide-react"
import { motion } from "framer-motion"

const featureCategories = [
  {
    title: "One-Click Ad Launch",
    description: "Launch campaigns across multiple platforms instantly",
    icon: Zap,
    color: "from-violet-600 to-indigo-600",
    features: [
      { icon: Zap, name: "Automated Ad Launch Tool", desc: "One-click publish to Meta, Google & LinkedIn" },
      { icon: Rocket, name: "Multi-Platform Publishing", desc: "Simultaneous launch across all connected platforms" },
      { icon: Settings, name: "Ad Launch Plus", desc: "Advanced scheduling & targeting presets" },
      { icon: Facebook, name: "Facebook Ads Orchestrator", desc: "Streamlined Meta campaign deployment" }
    ]
  },
  {
    title: "AI Creative Intelligence",
    description: "Auto-generate high-performing creatives with regional context",
    icon: Brain,
    color: "from-blue-600 to-cyan-600",
    features: [
      { icon: Wand2, name: "AI Ads Generator", desc: "Hindi + regional tone with brand voice learning" },
      { icon: Palette, name: "Meme-Style Creative Adaptation", desc: "Automated image/video refresh with cultural trends" },
      { icon: RefreshCw, name: "Creative Refresh Agent", desc: "Auto-generates new variants based on performance" },
      { icon: Brain, name: "AI Creative Director", desc: "Intelligent creative strategy & optimization" },
      { icon: Sparkles, name: "AI Copywriter", desc: "High-converting ad copy in multiple languages" }
    ]
  },
  {
    title: "Smart Automation & Optimization",
    description: "AI-powered fatigue detection and auto-optimization",
    icon: RefreshCw,
    color: "from-purple-600 to-pink-600",
    features: [
      { icon: Eye, name: "Ad Fatigue Detector", desc: "Detects CTR/ROAS drops and triggers auto-refresh" },
      { icon: RefreshCw, name: "AI Fatigue-Based Rotation", desc: "Smart ad rotation logic to maintain performance" },
      { icon: Target, name: "Campaign Optimization Engine", desc: "Real-time budget and targeting adjustments" },
      { icon: Activity, name: "Real-Time Meta Ads Optimizer", desc: "Continuous performance monitoring & tweaks" },
      { icon: Settings, name: "Autonomous Marketing Manager", desc: "Fully automated campaign management" }
    ]
  },
  {
    title: "Analytics & Performance Intelligence",
    description: "Cross-platform insights with predictive ROAS forecasting",
    icon: BarChart3,
    color: "from-orange-600 to-red-600",
    features: [
      { icon: BarChart3, name: "Ad Analyzer Dashboard", desc: "Cross-platform analytics with unified view" },
      { icon: TrendingUp, name: "Performance Intelligence", desc: "ROAS prediction with AI-powered forecasting" },
      { icon: Facebook, name: "Facebook Performance Dashboard", desc: "Deep Meta ads insights & metrics" },
      { icon: DollarSign, name: "Ad Intelligence Tools", desc: "Spend optimization & ROI tracking" },
      { icon: FileText, name: "Automated Reporting", desc: "One-click PDF & email reports" }
    ]
  },
  {
    title: "AI Campaign Management",
    description: "End-to-end campaign creation and management",
    icon: Sparkles,
    color: "from-green-600 to-emerald-600",
    features: [
      { icon: Sparkles, name: "AI Campaign Manager", desc: "30-minute campaign setup with AI guidance" },
      { icon: Brain, name: "AI Performance Marketer", desc: "Data-driven campaign strategy" },
      { icon: Target, name: "AI Paid Social Manager", desc: "Specialized social media campaign optimization" },
      { icon: Settings, name: "Campaign Tools Suite", desc: "Complete toolkit for campaign management" },
      { icon: Users, name: "AI Media Buyer", desc: "Automated ad buying & bid optimization" }
    ]
  },
  {
    title: "Social Media Management",
    description: "Instagram, Facebook & Meta platform tools",
    icon: MessageSquare,
    color: "from-pink-600 to-rose-600",
    features: [
      { icon: MessageSquare, name: "Meta AI Comment Responder", desc: "Auto-respond to comments with AI" },
      { icon: MessageSquare, name: "Meta AI Comment Manager", desc: "Intelligent engagement & moderation" },
      { icon: Instagram, name: "Instagram AI Automation", desc: "Automated posting & engagement" },
      { icon: Instagram, name: "Instagram Management Tools", desc: "Complete Insta marketing platform" },
      { icon: Facebook, name: "Facebook Marketing Tools", desc: "Full Facebook campaign suite" }
    ]
  },
  {
    title: "GEO & Targeting Intelligence",
    description: "Location-aware optimization with local trends",
    icon: Globe,
    color: "from-indigo-600 to-violet-600",
    features: [
      { icon: Globe, name: "Generative Engine Optimization", desc: "AI-powered content for search engines" },
      { icon: Target, name: "GEO + Local Trend Layer", desc: "Region-specific creative recommendations" },
      { icon: Eye, name: "Competitor Benchmarking AI", desc: "Track competitors across platforms" },
      { icon: BarChart3, name: "Ad Intelligence Platform", desc: "Market insights & trend analysis" }
    ]
  },
  {
    title: "Agency & Enterprise Tools",
    description: "Multi-client workspace and advanced features",
    icon: Users,
    color: "from-cyan-600 to-blue-600",
    features: [
      { icon: Users, name: "Multi-Client Workspace", desc: "Manage multiple brands from one dashboard" },
      { icon: ShoppingCart, name: "Ecommerce Ad Platform", desc: "Specialized tools for online stores" },
      { icon: Settings, name: "Ad Management Suite", desc: "Advanced controls for agencies" },
      { icon: Rocket, name: "Optimization Software", desc: "Enterprise-grade automation" }
    ]
  }
]

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-violet-50/20 dark:to-violet-950/20">
      <MainNav />
      
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b">
          <div className="absolute inset-0 bg-grid-slate-900/[0.04] dark:bg-grid-slate-400/[0.05] bg-[size:40px_40px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Badge className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white border-0">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Complete Feature Set
                </Badge>
              </motion.div>
              
              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <span className="block">Everything You Need</span>
                <span className="block bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  To Dominate Digital Marketing
                </span>
              </motion.h1>
              
              <motion.p 
                className="max-w-3xl mx-auto text-xl text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                From AI-powered creative generation to automated optimization across Meta, Google, LinkedIn & YouTube. 
                Built specifically for Indian SMEs and agencies.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Platform Support */}
        <section className="bg-muted/30 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Supported Platforms</h2>
              <p className="text-muted-foreground">Launch and manage campaigns across all major channels</p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {[
                { icon: Facebook, name: "Meta Ads", color: "text-blue-600" },
                { icon: Instagram, name: "Instagram", color: "text-pink-600" },
                { icon: Globe, name: "Google Ads", color: "text-red-600" },
                { icon: Linkedin, name: "LinkedIn", color: "text-blue-700" },
                { icon: Youtube, name: "YouTube", color: "text-red-600" },
                { icon: ShoppingCart, name: "Shopify", color: "text-green-600" }
              ].map((platform, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center gap-3 px-6 py-3 bg-background rounded-lg border"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <platform.icon className={`w-6 h-6 ${platform.color}`} />
                  <span className="font-semibold">{platform.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="space-y-24">
            {featureCategories.map((category, catIdx) => (
              <motion.div
                key={catIdx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-center mb-12">
                  <div className="flex items-center justify-center mb-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold mb-3">{category.title}</h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{category.description}</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <Card className="h-full hover:border-violet-600/50 transition-all hover:shadow-lg group">
                        <CardContent className="p-6">
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                            <feature.icon className="w-5 h-5 text-white" />
                          </div>
                          <h3 className="font-bold text-lg mb-2">{feature.name}</h3>
                          <p className="text-sm text-muted-foreground">{feature.desc}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-2xl border-2 bg-gradient-to-br from-violet-600 to-indigo-600 p-12 text-white text-center">
              <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:40px_40px]" />
              <div className="relative max-w-2xl mx-auto space-y-6">
                <h2 className="text-4xl font-bold">Ready to Get Started?</h2>
                <p className="text-xl text-white/90">
                  Start your free trial and experience the power of AI-driven marketing automation
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <Link href="/pricing">
                    <Button size="lg" variant="secondary" className="text-lg px-8">
                      View Pricing
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                      Contact Sales
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  )
}
