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
  ArrowRight,
  CheckCircle2
} from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

const featureCategories = [
  {
    title: "One-Click Ad Launch",
    description: "Launch campaigns across multiple platforms instantly with zero manual work. Connect once, publish everywhere with intelligent platform-specific optimization.",
    icon: Zap,
    color: "from-violet-600 to-indigo-600",
    features: [
      { 
        icon: Zap, 
        name: "Automated Ad Launch Tool", 
        desc: "One-click publish to Meta, Google & LinkedIn. Set up your campaign once and deploy across all platforms simultaneously with platform-optimized creatives and targeting.",
        benefits: ["Save 5+ hours per campaign", "Zero platform switching", "Instant multi-channel presence"]
      },
      { 
        icon: Rocket, 
        name: "Multi-Platform Publishing", 
        desc: "Simultaneous launch across all connected platforms with intelligent asset adaptation. Each platform gets optimized creative formats and targeting parameters automatically.",
        benefits: ["Unified campaign management", "Format auto-optimization", "Centralized scheduling"]
      },
      { 
        icon: Settings, 
        name: "Ad Launch Plus", 
        desc: "Advanced scheduling with timezone intelligence, budget allocation presets, and audience templates. Save successful campaign configurations as templates for instant reuse.",
        benefits: ["Campaign templates", "Smart scheduling", "Budget presets"]
      },
      { 
        icon: Facebook, 
        name: "Facebook Ads Orchestrator", 
        desc: "Streamlined Meta campaign deployment with automatic creative variants generation. A/B test setup, audience layering, and budget pacing—all automated from one interface.",
        benefits: ["Auto A/B testing", "Audience stacking", "Smart budget pacing"]
      }
    ]
  },
  {
    title: "AI Creative Intelligence",
    description: "Generate unlimited high-performing creatives that understand Indian culture, regional contexts, and trending memes. AI learns your brand voice and creates content that resonates.",
    icon: Brain,
    color: "from-blue-600 to-cyan-600",
    features: [
      { 
        icon: Wand2, 
        name: "AI Ads Generator", 
        desc: "Create compelling ad copy in Hindi and 10+ regional languages with automatic brand voice learning. AI analyzes your best-performing content and replicates your unique tone across all new creatives.",
        benefits: ["10+ regional languages", "Brand voice cloning", "Unlimited variations"]
      },
      { 
        icon: Palette, 
        name: "Meme-Style Creative Adaptation", 
        desc: "Automated image and video refresh with culturally relevant meme formats and trending styles. AI monitors social trends and adapts your creatives to match current cultural moments in real-time.",
        benefits: ["Trend-aware generation", "Cultural adaptation", "Viral format detection"]
      },
      { 
        icon: RefreshCw, 
        name: "Creative Refresh Agent", 
        desc: "Auto-generates new creative variants based on performance data. When a creative starts to fatigue, the AI creates fresh versions maintaining your brand guidelines while testing new angles.",
        benefits: ["Auto-variant generation", "Performance-based refresh", "Brand guideline compliance"]
      },
      { 
        icon: Brain, 
        name: "AI Creative Director", 
        desc: "Intelligent creative strategy with composition analysis, color psychology, and emotional resonance scoring. Get AI recommendations on what creative directions will perform best for your specific audience.",
        benefits: ["Creative scoring", "Emotion analysis", "Strategic recommendations"]
      },
      { 
        icon: Sparkles, 
        name: "AI Copywriter", 
        desc: "High-converting ad copy generation in multiple languages with pain-point addressing, benefit highlighting, and CTA optimization. Trained on millions of high-performing Indian market ads.",
        benefits: ["Conversion-optimized copy", "Pain-point targeting", "CTA testing"]
      }
    ]
  },
  {
    title: "Smart Automation & Optimization",
    description: "AI-powered fatigue detection, real-time performance monitoring, and automatic optimization. Your campaigns run on autopilot with continuous improvement while you sleep.",
    icon: RefreshCw,
    color: "from-purple-600 to-pink-600",
    features: [
      { 
        icon: Eye, 
        name: "Ad Fatigue Detector", 
        desc: "Monitors CTR, ROAS, engagement rates, and conversion patterns 24/7. Detects early signs of fatigue and automatically triggers creative refresh before performance drops significantly.",
        benefits: ["Predictive fatigue detection", "Auto-refresh triggers", "Performance recovery"]
      },
      { 
        icon: RefreshCw, 
        name: "AI Fatigue-Based Rotation", 
        desc: "Smart ad rotation logic that maintains peak performance by automatically cycling creatives based on engagement patterns, audience segments, and time-of-day effectiveness.",
        benefits: ["Intelligent rotation", "Segment-based cycling", "Performance maintenance"]
      },
      { 
        icon: Target, 
        name: "Campaign Optimization Engine", 
        desc: "Real-time budget reallocation, bid adjustments, and targeting refinement across all platforms. AI continuously optimizes towards your KPIs whether it's conversions, reach, or engagement.",
        benefits: ["Real-time optimization", "Budget rebalancing", "KPI-focused tuning"]
      },
      { 
        icon: Activity, 
        name: "Real-Time Meta Ads Optimizer", 
        desc: "Continuous monitoring of Facebook and Instagram campaigns with instant adjustments. Pauses underperforming ad sets, scales winners, and optimizes creative delivery automatically.",
        benefits: ["Instant adjustments", "Auto pause/scale", "Delivery optimization"]
      },
      { 
        icon: Settings, 
        name: "Autonomous Marketing Manager", 
        desc: "Fully automated campaign management from launch to optimization to scaling. Set your goals and budget limits—AI handles everything else including creative production, targeting, and optimization.",
        benefits: ["Full automation", "Goal-based operation", "Hands-free scaling"]
      }
    ]
  },
  {
    title: "Analytics & Performance Intelligence",
    description: "Cross-platform insights with predictive ROAS forecasting, financial analytics, and AI-powered recommendations. Know exactly what's working and why, with predictions on what will work next.",
    icon: BarChart3,
    color: "from-orange-600 to-red-600",
    features: [
      { 
        icon: BarChart3, 
        name: "Ad Analyzer Dashboard", 
        desc: "Unified cross-platform analytics showing all your campaigns in one view. Compare performance across Meta, Google, LinkedIn with normalized metrics and consolidated spend tracking.",
        benefits: ["Unified reporting", "Cross-platform comparison", "Normalized metrics"]
      },
      { 
        icon: TrendingUp, 
        name: "Performance Intelligence", 
        desc: "AI-powered 7-day ROAS prediction with confidence intervals. Get early warnings of performance degradation and opportunity alerts when campaigns are ready to scale.",
        benefits: ["7-day ROAS forecasting", "Early warning system", "Scaling opportunities"]
      },
      { 
        icon: Facebook, 
        name: "Facebook Performance Dashboard", 
        desc: "Deep Meta ads insights with engagement breakdown, audience overlap analysis, creative performance scoring, and comment sentiment tracking. Understand exactly why campaigns succeed or fail.",
        benefits: ["Deep Meta insights", "Engagement analysis", "Sentiment tracking"]
      },
      { 
        icon: DollarSign, 
        name: "Ad Intelligence Tools", 
        desc: "Spend optimization engine with budget pacing recommendations, dayparting insights, and cost anomaly detection. Maximize ROI by ensuring every rupee is spent at the optimal time and place.",
        benefits: ["Spend optimization", "Budget pacing", "Cost anomaly alerts"]
      },
      { 
        icon: FileText, 
        name: "Automated Reporting", 
        desc: "One-click PDF and email reports with executive summaries, detailed metrics, and AI-generated insights. Schedule weekly/monthly reports for stakeholders with customizable KPIs.",
        benefits: ["One-click reports", "Auto scheduling", "Custom KPIs"]
      }
    ]
  },
  {
    title: "AI Campaign Management",
    description: "End-to-end campaign creation and management with AI guidance at every step. From strategy to execution to optimization—your personal AI marketing team.",
    icon: Sparkles,
    color: "from-green-600 to-emerald-600",
    features: [
      { 
        icon: Sparkles, 
        name: "AI Campaign Manager", 
        desc: "Complete 30-minute campaign setup with AI-guided configuration. Smart objective selection, audience building, budget recommendations, and creative generation—all with contextual AI suggestions.",
        benefits: ["30-min setup", "AI guidance", "Smart recommendations"]
      },
      { 
        icon: Brain, 
        name: "AI Performance Marketer", 
        desc: "Data-driven campaign strategy based on historical performance patterns and market trends. Get strategic recommendations on targeting, messaging, and budget allocation for maximum impact.",
        benefits: ["Data-driven strategy", "Market insights", "Strategic planning"]
      },
      { 
        icon: Target, 
        name: "AI Paid Social Manager", 
        desc: "Specialized social media campaign optimization across Meta, LinkedIn, and Instagram. Understands platform-specific best practices and automatically applies winning strategies.",
        benefits: ["Platform expertise", "Best practice automation", "Social-first optimization"]
      },
      { 
        icon: Settings, 
        name: "Campaign Tools Suite", 
        desc: "Complete toolkit for campaign management including bulk editing, campaign cloning, cross-platform duplication, and batch optimization. Manage hundreds of campaigns effortlessly.",
        benefits: ["Bulk operations", "Campaign cloning", "Batch editing"]
      },
      { 
        icon: Users, 
        name: "AI Media Buyer", 
        desc: "Automated ad buying with intelligent bid optimization, placement selection, and inventory forecasting. AI negotiates the best placements and timing for your budget.",
        benefits: ["Auto bidding", "Smart placement", "Cost efficiency"]
      }
    ]
  },
  {
    title: "Social Media Management",
    description: "Instagram, Facebook & Meta platform tools with AI-powered engagement, comment management, and automated community building. Turn your social presence into a growth engine.",
    icon: MessageSquare,
    color: "from-pink-600 to-rose-600",
    features: [
      { 
        icon: MessageSquare, 
        name: "Meta AI Comment Responder", 
        desc: "Automatically respond to comments on Facebook and Instagram ads with context-aware AI. Handles customer queries, filters spam, thanks positive feedback, and addresses concerns instantly.",
        benefits: ["24/7 engagement", "Context-aware replies", "Spam filtering"]
      },
      { 
        icon: MessageSquare, 
        name: "Meta AI Comment Manager", 
        desc: "Intelligent comment moderation with sentiment analysis, priority escalation, and response templates. Flag important conversations, hide spam, and maintain positive community engagement.",
        benefits: ["Sentiment analysis", "Smart escalation", "Community management"]
      },
      { 
        icon: Instagram, 
        name: "Instagram AI Automation", 
        desc: "Automated Instagram posting, story scheduling, and engagement optimization. AI determines best posting times, optimal caption lengths, and hashtag strategies for maximum reach.",
        benefits: ["Auto posting", "Timing optimization", "Hashtag strategy"]
      },
      { 
        icon: Instagram, 
        name: "Instagram Management Tools", 
        desc: "Complete Instagram marketing platform with content calendar, performance analytics, influencer tracking, and story insights. Manage your entire Instagram presence in one place.",
        benefits: ["Content calendar", "Story insights", "Influencer tracking"]
      },
      { 
        icon: Facebook, 
        name: "Facebook Marketing Tools", 
        desc: "Full Facebook campaign suite with audience building, lookalike generation, retargeting automation, and creative testing. Master Facebook advertising with AI-powered tools.",
        benefits: ["Audience building", "Lookalike automation", "Retargeting flows"]
      }
    ]
  },
  {
    title: "GEO & Targeting Intelligence",
    description: "Location-aware optimization with local trends, cultural insights, and regional performance data. Dominate your market with hyper-local targeting intelligence.",
    icon: Globe,
    color: "from-indigo-600 to-violet-600",
    features: [
      { 
        icon: Globe, 
        name: "Generative Engine Optimization", 
        desc: "AI-powered content optimization for search engines and generative AI platforms. Ensure your brand appears in AI-generated recommendations and voice search results.",
        benefits: ["AI search optimization", "Voice search ready", "Future-proof visibility"]
      },
      { 
        icon: Target, 
        name: "GEO + Local Trend Layer", 
        desc: "Region-specific creative recommendations based on local festivals, cultural events, and trending topics. AI adapts your messaging to resonate with each geographic segment.",
        benefits: ["Local trend detection", "Cultural adaptation", "Regional optimization"]
      },
      { 
        icon: Eye, 
        name: "Competitor Benchmarking AI", 
        desc: "Track competitors across all platforms with spend estimates, creative strategy analysis, and audience targeting insights. Know what's working in your market and stay ahead.",
        benefits: ["Competitor tracking", "Spend estimation", "Strategy insights"]
      },
      { 
        icon: BarChart3, 
        name: "Ad Intelligence Platform", 
        desc: "Market insights with category performance trends, seasonal patterns, and emerging opportunities. Make data-driven decisions based on comprehensive market intelligence.",
        benefits: ["Market trends", "Seasonal insights", "Opportunity detection"]
      }
    ]
  },
  {
    title: "Agency & Enterprise Tools",
    description: "Multi-client workspace, white-label reporting, and advanced collaboration features. Scale your agency operations with enterprise-grade tools.",
    icon: Users,
    color: "from-cyan-600 to-blue-600",
    features: [
      { 
        icon: Users, 
        name: "Multi-Client Workspace", 
        desc: "Manage multiple brands from unified dashboard with client-level permissions, billing separation, and consolidated reporting. Switch between clients instantly with complete data isolation.",
        benefits: ["Client isolation", "Role-based access", "Unified management"]
      },
      { 
        icon: ShoppingCart, 
        name: "Ecommerce Ad Platform", 
        desc: "Specialized tools for online stores with product catalog sync, dynamic product ads, shopping campaign optimization, and ROI tracking tied to actual sales data.",
        benefits: ["Catalog sync", "Dynamic ads", "Sales attribution"]
      },
      { 
        icon: Settings, 
        name: "Ad Management Suite", 
        desc: "Advanced agency controls with bulk operations, campaign templates, approval workflows, and client notification systems. Streamline agency operations at scale.",
        benefits: ["Bulk operations", "Approval workflows", "Client notifications"]
      },
      { 
        icon: Rocket, 
        name: "Optimization Software", 
        desc: "Enterprise-grade automation with custom optimization rules, performance triggers, and automated scaling logic. Build sophisticated marketing automation without code.",
        benefits: ["Custom rules", "Auto-scaling", "No-code automation"]
      }
    ]
  }
]

export default function FeaturesPage() {
  const [expandedFeature, setExpandedFeature] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState(0)

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
                  className="flex items-center gap-3 px-6 py-3 bg-background rounded-lg border transition-all hover:border-violet-600/50 hover:shadow-md cursor-pointer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.05 }}
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
                onViewportEnter={() => setActiveCategory(catIdx)}
              >
                <div className="text-center mb-12">
                  <div className="flex items-center justify-center mb-4">
                    <motion.div 
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <category.icon className="w-8 h-8 text-white" />
                    </motion.div>
                  </div>
                  <h2 className="text-3xl font-bold mb-3">{category.title}</h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">{category.description}</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                  {category.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ y: -4 }}
                    >
                      <Card 
                        className={`h-full hover:border-violet-600/50 transition-all hover:shadow-lg group cursor-pointer ${
                          expandedFeature === `${catIdx}-${idx}` ? 'border-violet-600 shadow-lg' : ''
                        }`}
                        onClick={() => setExpandedFeature(expandedFeature === `${catIdx}-${idx}` ? null : `${catIdx}-${idx}`)}
                      >
                        <CardContent className="p-6 space-y-4">
                          <div className="flex items-start gap-4">
                            <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0`}>
                              <feature.icon className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-bold text-lg mb-2">{feature.name}</h3>
                              <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                            </div>
                          </div>
                          
                          <motion.div
                            initial={false}
                            animate={{ height: expandedFeature === `${catIdx}-${idx}` ? 'auto' : 0, opacity: expandedFeature === `${catIdx}-${idx}` ? 1 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="pt-4 border-t space-y-2">
                              <p className="text-xs font-semibold text-violet-600 mb-3">KEY BENEFITS:</p>
                              {feature.benefits.map((benefit, bIdx) => (
                                <div key={bIdx} className="flex items-start gap-2">
                                  <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                                  <span className="text-sm">{benefit}</span>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                          
                          <div className="pt-2">
                            <Button variant="ghost" size="sm" className="w-full text-violet-600 hover:text-violet-700 hover:bg-violet-50 dark:hover:bg-violet-950/30">
                              {expandedFeature === `${catIdx}-${idx}` ? 'Show Less' : 'Learn More'}
                              <ArrowRight className={`ml-2 w-4 h-4 transition-transform ${expandedFeature === `${catIdx}-${idx}` ? 'rotate-90' : ''}`} />
                            </Button>
                          </div>
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
                    <Button size="lg" variant="secondary" className="text-lg px-8 group transition-all hover:scale-105">
                      View Pricing
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 transition-all hover:scale-105">
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