"use client"

import Link from "next/link"
import MainNav from "@/components/MainNav"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  TrendingUp, 
  Sparkles, 
  Target, 
  Users,
  Zap,
  ArrowRight,
  Award,
  Shield,
  Brain,
  RefreshCw,
  BarChart3,
  MessageSquare,
  Wand2,
  Eye,
  Globe,
  Settings,
  CheckCircle2,
  Play
} from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

const stats = [
  { label: "Active Users", value: "50K+", icon: Users },
  { label: "Campaigns Managed", value: "2.4M", icon: Target },
  { label: "AI Insights Generated", value: "18M", icon: Sparkles },
  { label: "Average ROI", value: "342%", icon: TrendingUp },
]

const howItWorksSteps = [
  {
    step: "01",
    title: "Connect Your Platforms",
    description: "Link your Meta, Google, LinkedIn, and Instagram accounts in under 2 minutes. Raftra securely integrates with all major ad platforms.",
    icon: Settings,
    color: "from-violet-600 to-indigo-600",
    details: [
      "One-click OAuth integration",
      "Secure API connections",
      "Auto-sync your existing campaigns",
      "Multi-account support"
    ]
  },
  {
    step: "02",
    title: "AI Analyzes Your Brand",
    description: "Our AI studies your brand voice, target audience, and historical performance to create a personalized growth strategy.",
    icon: Brain,
    color: "from-blue-600 to-cyan-600",
    details: [
      "Brand voice learning",
      "Audience analysis",
      "Competitor benchmarking",
      "Performance pattern detection"
    ]
  },
  {
    step: "03",
    title: "Generate & Launch Campaigns",
    description: "Create high-performing ads in Hindi & regional languages, select your targeting, and launch across all platforms with one click.",
    icon: Zap,
    color: "from-purple-600 to-pink-600",
    details: [
      "AI copywriting in multiple languages",
      "Meme-style creative generation",
      "Smart audience targeting",
      "One-click multi-platform launch"
    ]
  },
  {
    step: "04",
    title: "AI Optimizes Automatically",
    description: "Raftra monitors performance 24/7, detects ad fatigue, refreshes creatives, optimizes budgets, and responds to comments automatically.",
    icon: RefreshCw,
    color: "from-orange-600 to-red-600",
    details: [
      "Real-time performance monitoring",
      "Auto ad fatigue detection",
      "Budget optimization",
      "Comment management"
    ]
  },
  {
    step: "05",
    title: "Scale with Intelligence",
    description: "Get ROAS predictions, financial insights, and AI-powered recommendations to scale winning campaigns across all channels.",
    icon: TrendingUp,
    color: "from-green-600 to-emerald-600",
    details: [
      "ROAS forecasting",
      "Smart scaling recommendations",
      "Budget allocation insights",
      "Cross-platform analytics"
    ]
  }
]

const mvpFeatures = [
  {
    title: "AI Creative Studio",
    description: "Generate unlimited ad creatives with AI that understands Indian culture, memes, and regional contexts. Supports Hindi and 10+ regional languages with automatic brand voice learning.",
    icon: Wand2,
    color: "from-violet-600 to-indigo-600",
    highlights: ["Meme-style adaptation", "Regional language support", "Brand voice learning", "Auto image/video refresh"]
  },
  {
    title: "Smart Ad Fatigue Detection",
    description: "AI continuously monitors CTR and ROAS drops across all campaigns. Automatically detects fatigue and triggers creative refresh before performance declines.",
    icon: Eye,
    color: "from-blue-600 to-cyan-600",
    highlights: ["Real-time monitoring", "Predictive alerts", "Auto-refresh triggers", "Performance recovery"]
  },
  {
    title: "One-Click Multi-Platform Launch",
    description: "Launch campaigns across Meta, Google, LinkedIn, and Instagram simultaneously. Set up once, publish everywhere with platform-optimized creatives and targeting.",
    icon: Zap,
    color: "from-purple-600 to-pink-600",
    highlights: ["Multi-platform publish", "Platform optimization", "Unified dashboard", "Batch campaign creation"]
  },
  {
    title: "AI Comment Manager",
    description: "Automated comment response for Meta platforms using AI that understands context and brand tone. Handles customer queries, filters spam, and escalates important messages.",
    icon: MessageSquare,
    color: "from-orange-600 to-red-600",
    highlights: ["Auto-responses", "Sentiment analysis", "Spam filtering", "Smart escalation"]
  },
  {
    title: "GEO + Local Trends Layer",
    description: "Location-intelligent targeting with real-time local trend analysis. AI identifies regional preferences, cultural moments, and location-specific opportunities for better performance.",
    icon: Globe,
    color: "from-green-600 to-emerald-600",
    highlights: ["Regional insights", "Local trend tracking", "GEO optimization", "Cultural adaptation"]
  },
  {
    title: "ROAS Prediction Engine",
    description: "AI forecasts campaign performance before you spend. Get 7-day ROAS predictions, budget recommendations, and financial insights to maximize ROI and prevent wasted ad spend.",
    icon: BarChart3,
    color: "from-pink-600 to-rose-600",
    highlights: ["7-day forecasting", "Budget optimization", "Spend recommendations", "ROI tracking"]
  }
]

export default function Home() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-violet-50/20 dark:to-violet-950/20">
      <MainNav />
      
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-slate-900/[0.04] dark:bg-grid-slate-400/[0.05] bg-[size:40px_40px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
            <div className="text-center space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Badge className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white border-0 animate-pulse">
                  <Zap className="w-3 h-3 mr-1" />
                  AI Marketing Growth OS
                </Badge>
              </motion.div>
              
              <motion.h1 
                className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <span className="block">Raftra</span>
                <span className="block bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-gradient">
                  Full Growth OS for Your Brand
                </span>
              </motion.h1>
              
              <motion.p 
                className="max-w-2xl mx-auto text-xl text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Complete AI-powered marketing operating system. Launch campaigns in 30 minutes, 
                automate creative production, optimize performance, and scale your brand growth—all in one platform.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Button size="lg" className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:opacity-90 text-lg px-8 transition-all hover:scale-105 group">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 transition-all hover:scale-105 group">
                  <Play className="mr-2 w-5 h-5" />
                  Watch Demo
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-muted/30 border-y">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, idx) => (
                <motion.div 
                  key={idx} 
                  className="text-center group cursor-pointer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center justify-center mb-2">
                    <stat.icon className="w-5 h-5 text-violet-600 dark:text-violet-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How Raftra Works Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="mb-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white border-0">
              <Sparkles className="w-3 h-3 mr-1" />
              Simple 5-Step Process
            </Badge>
            <h2 className="text-4xl font-bold mb-4">How Raftra Works</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From setup to scale in under 30 minutes. Our AI handles the complexity 
              while you focus on growing your business.
            </p>
          </motion.div>

          <div className="space-y-8">
            {howItWorksSteps.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                onViewportEnter={() => setActiveStep(idx)}
              >
                <Card className={`border-2 transition-all duration-300 cursor-pointer overflow-hidden ${
                  activeStep === idx 
                    ? 'border-violet-600 shadow-lg shadow-violet-600/20 scale-[1.02]' 
                    : 'border-border hover:border-violet-600/50'
                }`}>
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0">
                        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center relative`}>
                          <item.icon className="w-10 h-10 text-white" />
                          <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-background border-2 border-violet-600 flex items-center justify-center">
                            <span className="text-xs font-bold text-violet-600">{item.step}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex-1 space-y-4">
                        <div>
                          <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                          <p className="text-muted-foreground text-lg">{item.description}</p>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                          {item.details.map((detail, detailIdx) => (
                            <motion.div
                              key={detailIdx}
                              className="flex items-start gap-2"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: detailIdx * 0.1 }}
                            >
                              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                              <span className="text-sm">{detail}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground mb-6 text-lg">
              Complete setup in under 30 minutes • No technical expertise required
            </p>
            <Button size="lg" className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:opacity-90 text-lg px-8">
              Get Started Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </section>

        {/* MVP Features Section */}
        <section className="bg-muted/30 border-y py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="mb-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white border-0">
                <Target className="w-3 h-3 mr-1" />
                MVP Features
              </Badge>
              <h2 className="text-4xl font-bold mb-4">Core Features That Drive Results</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Six powerful features designed to transform your marketing from manual to automated, 
                from guesswork to data-driven growth.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mvpFeatures.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <Card className="border-2 hover:border-violet-600/50 transition-all h-full group">
                    <CardContent className="p-6 space-y-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <feature.icon className="w-7 h-7 text-white" />
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                      </div>
                      
                      <div className="pt-2 space-y-2">
                        {feature.highlights.map((highlight, hIdx) => (
                          <div key={hIdx} className="flex items-center gap-2">
                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${feature.color}`} />
                            <span className="text-xs text-muted-foreground">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Link href="/features">
                <Button size="lg" variant="outline" className="text-lg px-8 group">
                  Explore All 50+ Features
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* What is Raftra Growth OS Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="mb-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white border-0">
              <Target className="w-3 h-3 mr-1" />
              Why Brands Need Raftra
            </Badge>
            <h2 className="text-4xl font-bold mb-4">The Complete Growth OS Your Brand Deserves</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Traditional marketing tools are fragmented, manual, and time-consuming. 
              Raftra unifies everything into one intelligent platform that works 24/7 for your brand's growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                title: "From Hours to Minutes",
                description: "Marketing teams spend 15+ hours weekly on repetitive tasks. Raftra automates creative production, ad fatigue detection, budget optimization, and comment management—freeing your team to focus on strategy and growth.",
                icon: Zap,
                color: "from-violet-600 to-indigo-600",
                stats: "Save 15+ hours/week"
              },
              {
                title: "Multi-Platform Chaos, Simplified",
                description: "Managing Meta, Google, LinkedIn, Instagram separately is inefficient and error-prone. Raftra provides one unified dashboard to launch, monitor, and optimize campaigns across all platforms simultaneously.",
                icon: Globe,
                color: "from-blue-600 to-cyan-600",
                stats: "4 platforms, 1 dashboard"
              },
              {
                title: "Stop Guessing, Start Growing",
                description: "Without AI-powered insights, brands waste ad spend on underperforming campaigns. Raftra's ROAS prediction and financial insights ensure every rupee is invested strategically for maximum returns.",
                icon: TrendingUp,
                color: "from-purple-600 to-pink-600",
                stats: "342% average ROI"
              },
              {
                title: "Scale Without Breaking",
                description: "Growing brands struggle to scale campaigns without increasing team size. Raftra's AI handles creative refresh, fatigue detection, and optimization automatically—allowing you to 10x your output with the same team.",
                icon: Sparkles,
                color: "from-orange-600 to-red-600",
                stats: "10x campaign capacity"
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="border-2 hover:border-violet-600/50 transition-all h-full group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0`}>
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <Badge variant="outline" className="mb-2">{item.stats}</Badge>
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Card className="border-2 border-violet-200 dark:border-violet-800 bg-gradient-to-br from-violet-50/50 to-indigo-50/50 dark:from-violet-950/20 dark:to-indigo-950/20">
              <CardContent className="p-8">
                <div className="max-w-3xl mx-auto">
                  <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
                    <Award className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                    Raftra: Full Growth OS for Brands
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Not just a tool, but a complete operating system that handles every aspect of your brand's marketing growth—from AI-powered creative production to automated optimization, real-time analytics, and intelligent scaling. Everything you need to grow, in one platform.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative overflow-hidden rounded-2xl border-2 bg-gradient-to-br from-violet-600 to-indigo-600 p-12 text-white">
              <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:40px_40px]" />
              <div className="relative max-w-3xl mx-auto text-center space-y-6">
                <h2 className="text-4xl font-bold">Ready to Scale Your Brand?</h2>
                <p className="text-xl text-white/90">
                  Join thousands of brands using Raftra as their complete marketing growth operating system
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <Button size="lg" variant="secondary" className="text-lg px-8 transition-all hover:scale-105 group">
                    Start Free Trial
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Link href="/contact">
                    <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent border-white text-white hover:bg-white/10 transition-all hover:scale-105">
                      Contact Sales
                    </Button>
                  </Link>
                </div>
                <div className="flex items-center justify-center gap-8 pt-8 text-sm text-white/80">
                  {[
                    { icon: Award, text: "No credit card required" },
                    { icon: Zap, text: "Setup in 5 minutes" },
                    { icon: Shield, text: "Cancel anytime" }
                  ].map((item, idx) => (
                    <motion.div 
                      key={idx}
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="border-t bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-semibold mb-4">Product</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><Link href="/features" className="hover:text-foreground transition-colors">Features</Link></li>
                  <li><Link href="/pricing" className="hover:text-foreground transition-colors">Pricing</Link></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Integrations</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">API</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Solutions</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-foreground transition-colors">For SMEs</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">For Agencies</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">For Enterprise</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">For Startups</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Resources</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-foreground transition-colors">Documentation</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Help Center</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Case Studies</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Company</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
                  <li><Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Privacy</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t pt-8 flex flex-col md:flex-row items-center justify-between">
              <motion.div 
                className="flex items-center gap-2 mb-4 md:mb-0"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-8 h-8 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-xl bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                  Raftra
                </span>
              </motion.div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  © 2024 Raftra
                </p>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}