"use client"

import Link from "next/link"
import MainNav from "@/components/MainNav"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  TrendingUp, 
  Sparkles, 
  Target, 
  Users, 
  CreditCard,
  Zap,
  ArrowRight,
  BarChart3,
  Bot,
  Globe,
  Flame,
  Award,
  Brain
} from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    title: "Competitor Intelligence",
    description: "AI-powered competitive analysis, market positioning, and keyword gap analysis",
    icon: TrendingUp,
    href: "/competitor-intelligence",
    gradient: "from-violet-600 to-indigo-600",
    stats: "Track 100+ competitors"
  },
  {
    title: "AI Content Studio",
    description: "SEO optimizer, AI copywriter, and meme generator for viral marketing content",
    icon: Sparkles,
    href: "/content-studio",
    gradient: "from-indigo-600 to-purple-600",
    stats: "Generate unlimited content"
  },
  {
    title: "GEO Optimization",
    description: "Future-proof your content for AI search engines like ChatGPT, Perplexity & Bard",
    icon: Brain,
    href: "/geo-optimization",
    gradient: "from-cyan-600 to-blue-600",
    stats: "AI-first visibility",
    isNew: true
  },
  {
    title: "Smart Targeting",
    description: "GEO targeting, dynamic offers, AI chatbot, and voice campaigns automation",
    icon: Target,
    href: "/smart-targeting",
    gradient: "from-emerald-600 to-teal-600",
    stats: "Reach 50M+ users"
  },
  {
    title: "Customer Intelligence",
    description: "CDP, ROI dashboards, financial insights, and gamified marketing energy score",
    icon: Users,
    href: "/customer-intelligence",
    gradient: "from-blue-600 to-cyan-600",
    stats: "360° customer view"
  },
  {
    title: "Ad Financing",
    description: "Flexible credit solutions to scale your campaigns without cash flow constraints",
    icon: CreditCard,
    href: "/ad-financing",
    gradient: "from-purple-600 to-pink-600",
    stats: "Up to $250K credit"
  },
]

const stats = [
  { label: "Active Users", value: "50K+", icon: Users },
  { label: "Campaigns Managed", value: "2.4M", icon: Target },
  { label: "AI Insights Generated", value: "18M", icon: Sparkles },
  { label: "Average ROI", value: "342%", icon: TrendingUp },
]

export default function Home() {
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
                  AI-Powered Marketing Platform
                </Badge>
              </motion.div>
              
              <motion.h1 
                className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <span className="block">Marketing Intelligence</span>
                <span className="block bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-gradient">
                  Powered by AI
                </span>
              </motion.h1>
              
              <motion.p 
                className="max-w-2xl mx-auto text-xl text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                The complete AI marketing suite that combines competitor intelligence, content creation, 
                smart targeting, customer analytics, and flexible financing—all in one powerful platform.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Button size="lg" className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:opacity-90 text-lg px-8 transition-all hover:scale-105">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 transition-all hover:scale-105">
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
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <div className="flex items-center justify-center mb-2">
                    <stat.icon className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                  </div>
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="mb-4" variant="outline">
              Comprehensive Platform
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Everything You Need to Win</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Five powerful modules working together to supercharge your marketing performance
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <Link href={feature.href}>
                    <Card className="group h-full transition-all hover:shadow-xl cursor-pointer border-2 hover:border-violet-200 dark:hover:border-violet-800 relative overflow-hidden">
                      {feature.isNew && (
                        <div className="absolute top-3 right-3 z-10">
                          <Badge className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-0 animate-pulse shadow-lg">
                            <Zap className="w-3 h-3 mr-1" />
                            NEW
                          </Badge>
                        </div>
                      )}
                      <CardHeader>
                        <motion.div 
                          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4`}
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </motion.div>
                        <CardTitle className="flex items-center justify-between">
                          {feature.title}
                          <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
                        </CardTitle>
                        <CardDescription className="text-base">{feature.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Badge variant="secondary" className="bg-accent">
                          {feature.stats}
                        </Badge>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </section>

        {/* Marketing Energy Score CTA */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="relative overflow-hidden border-2 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 border-orange-200 dark:border-orange-800">
              <div className="absolute inset-0 bg-grid-slate-900/[0.04] dark:bg-grid-slate-400/[0.05] bg-[size:20px_20px]" />
              <CardContent className="relative pt-12 pb-12">
                <div className="max-w-3xl mx-auto text-center space-y-6">
                  <motion.div 
                    className="flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Flame className="w-12 h-12 text-orange-600 dark:text-orange-400 animate-pulse" />
                    <h2 className="text-4xl font-bold">Marketing Energy Score</h2>
                  </motion.div>
                  <p className="text-xl text-muted-foreground">
                    Track your real-time marketing momentum with our gamified energy score system. 
                    Earn achievements, climb leaderboards, and optimize your campaigns with AI insights.
                  </p>
                  <div className="flex items-center justify-center gap-8 pt-4">
                    {[
                      { value: "87", label: "Avg. Energy Score" },
                      { value: "12", label: "Achievement Badges" },
                      { value: "24", label: "Day Streaks" }
                    ].map((item, idx) => (
                      <motion.div 
                        key={idx}
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">{item.value}</div>
                        <div className="text-sm text-muted-foreground">{item.label}</div>
                      </motion.div>
                    ))}
                  </div>
                  <Button size="lg" className="bg-gradient-to-r from-orange-600 to-red-600 text-white hover:opacity-90 transition-all hover:scale-105">
                    <Link href="/customer-intelligence" className="flex items-center">
                      View Your Score
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* Integration Section */}
        <section className="bg-muted/30 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="mb-4" variant="outline">
                Powerful Integrations
              </Badge>
              <h2 className="text-4xl font-bold mb-4">Works With Your Tools</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Seamlessly integrate with your existing marketing stack
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {["Google Ads", "Meta Ads", "LinkedIn", "WhatsApp", "Shopify", "HubSpot"].map((platform, idx) => (
                <motion.div 
                  key={idx} 
                  className="flex items-center justify-center p-6 bg-card rounded-lg border hover:border-violet-200 dark:hover:border-violet-800 transition-colors cursor-pointer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ scale: 1.05, y: -4 }}
                >
                  <span className="font-semibold text-muted-foreground hover:text-foreground transition-colors">
                    {platform}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
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
                <h2 className="text-4xl font-bold">Ready to Transform Your Marketing?</h2>
                <p className="text-xl text-white/90">
                  Join thousands of marketers using AI to drive better results, faster decisions, and higher ROI.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <Button size="lg" variant="secondary" className="text-lg px-8 transition-all hover:scale-105">
                    Start Free Trial
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent border-white text-white hover:bg-white/10 transition-all hover:scale-105">
                    Schedule Demo
                  </Button>
                </div>
                <div className="flex items-center justify-center gap-8 pt-8 text-sm text-white/80">
                  {[
                    { icon: Award, text: "No credit card required" },
                    { icon: Zap, text: "Setup in 5 minutes" },
                    { icon: Globe, text: "Cancel anytime" }
                  ].map((item, idx) => (
                    <motion.div 
                      key={idx}
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
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
                  <li><Link href="/competitor-intelligence" className="hover:text-foreground transition-colors">Competitor Intelligence</Link></li>
                  <li><Link href="/content-studio" className="hover:text-foreground transition-colors">AI Content Studio</Link></li>
                  <li><Link href="/smart-targeting" className="hover:text-foreground transition-colors">Smart Targeting</Link></li>
                  <li><Link href="/customer-intelligence" className="hover:text-foreground transition-colors">Customer Intelligence</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Solutions</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-foreground transition-colors">For Agencies</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">For Enterprise</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">For Startups</a></li>
                  <li><Link href="/ad-financing" className="hover:text-foreground transition-colors">Ad Financing</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Resources</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-foreground transition-colors">Documentation</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">API Reference</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Case Studies</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Company</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
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
                  MarketAI
                </span>
              </motion.div>
              <p className="text-sm text-muted-foreground">
                © 2024 MarketAI. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}