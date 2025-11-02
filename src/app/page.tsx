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
  Bot,
  Globe,
  Award,
  Check,
  X
} from "lucide-react"
import { motion } from "framer-motion"

const competitiveMatrix = [
  {
    category: "1️⃣ Competitor Intelligence Layer",
    features: [
      {
        name: "Ad Spy & Competitor Benchmarking",
        madgicx: true,
        raftra: true,
        advantage: "Uses Indian SME dataset + trend visual insights"
      },
      {
        name: "Creative Library Analysis",
        madgicx: true,
        raftra: true,
        advantage: "GEO-aware creative recommendations"
      },
      {
        name: "Industry Performance Tracker",
        madgicx: true,
        raftra: true,
        advantage: "Local industry vs national benchmarks"
      },
      {
        name: "Audience Overlap AI",
        madgicx: false,
        raftra: true,
        advantage: "Raftra detects overlap across Meta + Google"
      }
    ]
  },
  {
    category: "2️⃣ Smart Targeting & Generative Optimization Engine",
    features: [
      {
        name: "AI Audience Segmentation",
        madgicx: true,
        raftra: true,
        advantage: "Raftra auto-segments by behavior + region"
      },
      {
        name: "Generative Engine Optimization (GEO)",
        madgicx: false,
        raftra: true,
        advantage: "New layer creates region-specific ad copies & memes"
      },
      {
        name: "Predictive Targeting & ROAS Forecasting",
        madgicx: true,
        raftra: true,
        advantage: "Raftra adds real-time budget adjuster"
      },
      {
        name: "Multi-Platform Ad Launch",
        madgicx: true,
        raftra: true,
        advantage: "Raftra adds LinkedIn + YouTube support"
      }
    ]
  },
  {
    category: "3️⃣ AI Campaign & Automation Suite",
    features: [
      {
        name: "AI Campaign Builder",
        madgicx: true,
        raftra: true,
        advantage: "30-min plug-n-play flow"
      },
      {
        name: "Creative Refresh Agent",
        madgicx: true,
        raftra: true,
        advantage: "Cultural meme-based refresh capability"
      },
      {
        name: "AI Comment Responder / Manager",
        madgicx: false,
        raftra: true,
        advantage: "Raftra-only feature for Meta pages"
      },
      {
        name: "WhatsApp + Voice AI Follow-ups",
        madgicx: false,
        raftra: true,
        advantage: "Converts leads faster for Indian businesses"
      },
      {
        name: "Smart Ad Rotation Agent",
        madgicx: true,
        raftra: true,
        advantage: "Auto switches based on CTR drops"
      }
    ]
  },
  {
    category: "4️⃣ ROI & Insights Layer",
    features: [
      {
        name: "Unified Performance Dashboard",
        madgicx: true,
        raftra: true,
        advantage: "Power-BI-style visuals with storyline AI"
      },
      {
        name: "Cross-Platform Analytics (Google + Meta)",
        madgicx: true,
        raftra: true,
        advantage: "Raftra adds LinkedIn + Shopify"
      },
      {
        name: "Real-Time ROAS Prediction",
        madgicx: true,
        raftra: true,
        advantage: "Forecasts with India-specific CPC models"
      },
      {
        name: "Financial Insights Layer",
        madgicx: false,
        raftra: true,
        advantage: "Auto suggests budget redistribution"
      },
      {
        name: "Automated Report Generation",
        madgicx: true,
        raftra: true,
        advantage: "Raftra adds one-click PDF & email reports"
      }
    ]
  }
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
                <span className="block">Raftra 2.0</span>
                <span className="block bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-gradient">
                  Next-Gen Marketing Intelligence
                </span>
              </motion.h1>
              
              <motion.p 
                className="max-w-2xl mx-auto text-xl text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Built for Indian SMEs. Launch campaigns in 30 minutes with AI-powered automation,
                GEO optimization, and WhatsApp integration.
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

        {/* Competitive Matrix Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="mb-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white border-0">
              Competitive Analysis
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Raftra vs Madgicx – Feature Comparison</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how Raftra 2.0 delivers more value with India-specific features and automation
            </p>
          </motion.div>

          <div className="space-y-8">
            {competitiveMatrix.map((section, sectionIdx) => (
              <motion.div
                key={sectionIdx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: sectionIdx * 0.1 }}
              >
                <Card className="overflow-hidden border-2">
                  <div className="bg-gradient-to-r from-violet-600 to-indigo-600 p-4">
                    <h3 className="text-xl font-bold text-white">{section.category}</h3>
                  </div>
                  
                  {/* Desktop Table */}
                  <div className="hidden lg:block overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-muted/50">
                        <tr>
                          <th className="text-left p-4 font-semibold">Feature</th>
                          <th className="text-center p-4 font-semibold w-32">Madgicx</th>
                          <th className="text-center p-4 font-semibold w-32">Raftra 2.0</th>
                          <th className="text-left p-4 font-semibold">Raftra Advantage / Add-On</th>
                        </tr>
                      </thead>
                      <tbody>
                        {section.features.map((feature, idx) => (
                          <tr key={idx} className="border-t hover:bg-muted/30 transition-colors">
                            <td className="p-4">{feature.name}</td>
                            <td className="p-4 text-center">
                              {feature.madgicx ? (
                                <div className="flex items-center justify-center">
                                  <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                                    <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                                  </div>
                                </div>
                              ) : (
                                <div className="flex items-center justify-center">
                                  <div className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                                    <X className="w-4 h-4 text-red-600 dark:text-red-400" />
                                  </div>
                                </div>
                              )}
                            </td>
                            <td className="p-4 text-center">
                              <div className="flex items-center justify-center">
                                <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                                  <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                                </div>
                              </div>
                            </td>
                            <td className="p-4">
                              <div className="flex items-start gap-2">
                                {!feature.madgicx && (
                                  <Badge className="bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 border-0 shrink-0">
                                    Exclusive
                                  </Badge>
                                )}
                                <span className="text-sm text-muted-foreground">{feature.advantage}</span>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Mobile View */}
                  <div className="lg:hidden divide-y">
                    {section.features.map((feature, idx) => (
                      <div key={idx} className="p-4 space-y-3">
                        <div className="font-semibold">{feature.name}</div>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Madgicx:</span>
                            {feature.madgicx ? (
                              <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                            ) : (
                              <X className="w-4 h-4 text-red-600 dark:text-red-400" />
                            )}
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Raftra:</span>
                            <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                          </div>
                        </div>
                        <div className="flex items-start gap-2 pt-2 border-t">
                          {!feature.madgicx && (
                            <Badge className="bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 border-0 shrink-0">
                              Exclusive
                            </Badge>
                          )}
                          <span className="text-sm text-muted-foreground">{feature.advantage}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
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
            transition={{ duration: 0.6 }}
          >
            <div className="relative overflow-hidden rounded-2xl border-2 bg-gradient-to-br from-violet-600 to-indigo-600 p-12 text-white">
              <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:40px_40px]" />
              <div className="relative max-w-3xl mx-auto text-center space-y-6">
                <h2 className="text-4xl font-bold">Ready to Transform Your Marketing?</h2>
                <p className="text-xl text-white/90">
                  Join thousands of Indian SMEs using Raftra 2.0 to drive better results with AI automation
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
                  <li><a href="#" className="hover:text-foreground transition-colors">Features</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Pricing</a></li>
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
                  Raftra 2.0
                </span>
              </motion.div>
              <p className="text-sm text-muted-foreground">
                © 2024 Raftra. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}