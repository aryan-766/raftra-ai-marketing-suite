"use client"

import Link from "next/link"
import MainNav from "@/components/MainNav"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Check,
  Sparkles,
  Zap,
  ArrowRight,
  Building,
  Users,
  Rocket
} from "lucide-react"
import { motion } from "framer-motion"

const pricingPlans = [
  {
    name: "Starter",
    price: "₹9,999",
    period: "/month",
    description: "Perfect for small businesses getting started with AI marketing",
    icon: Rocket,
    color: "from-blue-600 to-cyan-600",
    popular: false,
    features: [
      "Up to 3 ad campaigns",
      "Meta & Google Ads integration",
      "AI Ad Generator (50 creatives/month)",
      "Basic analytics dashboard",
      "Email support",
      "1 user account",
      "Standard creative refresh",
      "Basic ad fatigue detection"
    ]
  },
  {
    name: "Professional",
    price: "₹24,999",
    period: "/month",
    description: "For growing businesses ready to scale their marketing",
    icon: Zap,
    color: "from-violet-600 to-indigo-600",
    popular: true,
    features: [
      "Unlimited ad campaigns",
      "All platforms (Meta, Google, LinkedIn, YouTube)",
      "AI Ad Generator (Unlimited creatives)",
      "Advanced analytics & ROAS prediction",
      "Priority support + onboarding",
      "Up to 5 user accounts",
      "AI Creative Director",
      "Advanced fatigue-based rotation",
      "Meta comment responder",
      "GEO optimization",
      "Competitor benchmarking",
      "Creative intelligence platform",
      "One-click PDF reports"
    ]
  },
  {
    name: "Agency",
    price: "₹49,999",
    period: "/month",
    description: "Enterprise solution for agencies managing multiple clients",
    icon: Building,
    color: "from-purple-600 to-pink-600",
    popular: false,
    features: [
      "Everything in Professional",
      "Multi-client workspace",
      "Unlimited user accounts",
      "White-label reporting",
      "Dedicated account manager",
      "Custom integrations",
      "API access",
      "Advanced automation workflows",
      "Priority feature requests",
      "Custom brand voice training",
      "Advanced financial insights",
      "Bulk campaign management",
      "Agency dashboard"
    ]
  }
]

const addOns = [
  { name: "WhatsApp AI Integration", price: "₹4,999/month" },
  { name: "Voice Campaign Suite", price: "₹6,999/month" },
  { name: "Advanced Meme Studio", price: "₹3,999/month" },
  { name: "Ad Credit Financing", price: "Custom pricing" },
  { name: "Dedicated Success Manager", price: "₹15,999/month" }
]

export default function PricingPage() {
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
                  Flexible Pricing
                </Badge>
              </motion.div>
              
              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <span className="block">Choose Your Plan</span>
                <span className="block bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Start Free for 14 Days
                </span>
              </motion.h1>
              
              <motion.p 
                className="max-w-2xl mx-auto text-xl text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                No credit card required. Cancel anytime. All plans include core AI features.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={plan.popular ? "md:scale-105" : ""}
              >
                <Card className={`relative h-full ${plan.popular ? "border-violet-600 shadow-xl" : ""}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <Badge className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white border-0 px-4 py-1">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-8">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center mx-auto mb-4`}>
                      <plan.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                    <CardDescription className="text-base">{plan.description}</CardDescription>
                    <div className="mt-6">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <Button 
                      className={`w-full ${plan.popular ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:opacity-90" : ""}`}
                      variant={plan.popular ? "default" : "outline"}
                      size="lg"
                    >
                      Start Free Trial
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                    
                    <div className="space-y-3">
                      <p className="font-semibold text-sm">What's included:</p>
                      {plan.features.map((feature, featureIdx) => (
                        <div key={featureIdx} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-green-600 dark:text-green-400 shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Add-ons Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Power-Up with Add-Ons</h2>
              <p className="text-lg text-muted-foreground">
                Enhance your plan with premium features
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {addOns.map((addon, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Card className="hover:border-violet-600/50 transition-all">
                    <CardContent className="p-6">
                      <h3 className="font-bold mb-2">{addon.name}</h3>
                      <p className="text-violet-600 dark:text-violet-400 font-semibold">{addon.price}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  q: "Can I change plans later?",
                  a: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately."
                },
                {
                  q: "What payment methods do you accept?",
                  a: "We accept all major credit cards, UPI, net banking, and international payments."
                },
                {
                  q: "Is there a setup fee?",
                  a: "No setup fees. All plans include free onboarding and setup assistance."
                },
                {
                  q: "Can I cancel anytime?",
                  a: "Yes, you can cancel your subscription at any time. No questions asked, no penalties."
                },
                {
                  q: "Do you offer custom enterprise plans?",
                  a: "Yes! Contact our sales team for custom pricing for large organizations."
                }
              ].map((faq, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
                      <p className="text-muted-foreground">{faq.a}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
                <h2 className="text-4xl font-bold">Still Have Questions?</h2>
                <p className="text-xl text-white/90">
                  Our team is here to help you choose the perfect plan
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <Link href="/contact">
                    <Button size="lg" variant="secondary" className="text-lg px-8">
                      Contact Sales
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                  <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                    Schedule Demo
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  )
}
