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
  Shield
} from "lucide-react"
import { motion } from "framer-motion"

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
              Complete Growth Operating System
            </Badge>
            <h2 className="text-4xl font-bold mb-4">What is Raftra?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Raftra is an <span className="font-semibold text-foreground">AI Marketing Growth OS</span> — 
              a unified platform that handles everything from ad creation to optimization, 
              giving you complete control over your brand's growth journey.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Launch in 30 Minutes",
                description: "Connect platforms → Generate creatives → Launch campaigns across Meta, Google, LinkedIn automatically",
                icon: Zap,
                color: "from-violet-600 to-indigo-600"
              },
              {
                title: "AI Does the Work",
                description: "Auto-generate ads, detect fatigue, refresh creatives, optimize budgets, and manage comments—all on autopilot",
                icon: Sparkles,
                color: "from-purple-600 to-pink-600"
              },
              {
                title: "Full Brand Control",
                description: "One dashboard for all campaigns, real-time analytics, ROAS prediction, and financial insights for your entire brand",
                icon: Target,
                color: "from-blue-600 to-cyan-600"
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="border-2 hover:border-violet-600/50 transition-all h-full">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center mb-4`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link href="/features">
              <Button size="lg" variant="outline" className="text-lg px-8">
                Explore All Features
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
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
                  <Button size="lg" variant="secondary" className="text-lg px-8 transition-all hover:scale-105">
                    Start Free Trial
                    <ArrowRight className="ml-2 w-5 h-5" />
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