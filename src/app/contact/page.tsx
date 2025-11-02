"use client"

import { useState } from "react"
import MainNav from "@/components/MainNav"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { 
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  Sparkles,
  CheckCircle2,
  Building,
  Users,
  Zap
} from "lucide-react"
import { motion } from "framer-motion"

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    details: "support@raftra.io",
    description: "Get a response within 24 hours",
    color: "from-blue-600 to-cyan-600"
  },
  {
    icon: Phone,
    title: "Call Us",
    details: "+91 98765 43210",
    description: "Mon-Fri, 9AM-6PM IST",
    color: "from-violet-600 to-indigo-600"
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    details: "Available Now",
    description: "Instant support via chat",
    color: "from-purple-600 to-pink-600"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: "Bangalore, India",
    description: "Schedule an in-person meeting",
    color: "from-orange-600 to-red-600"
  }
]

const offices = [
  {
    city: "Bangalore",
    address: "Koramangala, 560034",
    type: "Headquarters",
    icon: Building
  },
  {
    city: "Mumbai",
    address: "BKC, 400051",
    type: "Sales Office",
    icon: Users
  },
  {
    city: "Delhi NCR",
    address: "Gurgaon, 122001",
    type: "Regional Office",
    icon: Zap
  }
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    interest: "",
    message: ""
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

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
                  <MessageSquare className="w-3 h-3 mr-1" />
                  Get in Touch
                </Badge>
              </motion.div>
              
              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <span className="block">We're Here to Help</span>
                <span className="block bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Let's Talk About Your Growth
                </span>
              </motion.h1>
              
              <motion.p 
                className="max-w-2xl mx-auto text-xl text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Whether you have questions, need a demo, or want to discuss custom solutions - our team is ready to assist.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="text-center hover:border-violet-600/50 transition-all hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center mx-auto mb-4`}>
                      <method.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-bold text-lg mb-1">{method.title}</h3>
                    <p className="text-violet-600 dark:text-violet-400 font-semibold mb-2">{method.details}</p>
                    <p className="text-sm text-muted-foreground">{method.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Main Content - Form + Info */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-8 h-8 text-green-600 dark:text-green-400" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">Message Sent Successfully!</h3>
                      <p className="text-muted-foreground">We'll be in touch soon.</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="john@company.com"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="+91 98765 43210"
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company">Company Name</Label>
                          <Input
                            id="company"
                            placeholder="Your Company"
                            value={formData.company}
                            onChange={(e) => setFormData({...formData, company: e.target.value})}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="interest">I'm Interested In</Label>
                        <select
                          id="interest"
                          className="w-full px-3 py-2 rounded-md border border-input bg-background text-foreground"
                          value={formData.interest}
                          onChange={(e) => setFormData({...formData, interest: e.target.value})}
                        >
                          <option value="">Select an option</option>
                          <option value="demo">Product Demo</option>
                          <option value="pricing">Pricing Information</option>
                          <option value="agency">Agency Partnership</option>
                          <option value="enterprise">Enterprise Solutions</option>
                          <option value="support">Technical Support</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us about your marketing goals and how we can help..."
                          rows={6}
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                          required
                        />
                      </div>

                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:opacity-90"
                      >
                        Send Message
                        <Send className="ml-2 w-4 h-4" />
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Info Sidebar */}
            <div className="space-y-8">
              {/* Office Locations */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-violet-600" />
                      Our Offices
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {offices.map((office, idx) => (
                      <div key={idx} className="flex items-start gap-4 pb-6 border-b last:border-0 last:pb-0">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center shrink-0">
                          <office.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-bold">{office.city}</h3>
                            <Badge variant="secondary" className="text-xs">{office.type}</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{office.address}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>

              {/* Business Hours */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-violet-600" />
                      Business Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Monday - Friday</span>
                      <span className="font-semibold">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Saturday</span>
                      <span className="font-semibold">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sunday</span>
                      <span className="font-semibold">Closed</span>
                    </div>
                    <p className="text-sm text-muted-foreground pt-4 border-t">
                      All times are in Indian Standard Time (IST)
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Quick Links */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Card className="bg-gradient-to-br from-violet-600 to-indigo-600 text-white border-0">
                  <CardContent className="p-6">
                    <Sparkles className="w-8 h-8 mb-4" />
                    <h3 className="text-xl font-bold mb-2">Need Immediate Help?</h3>
                    <p className="text-white/90 mb-4">
                      Check out our comprehensive help center or schedule a live demo
                    </p>
                    <div className="space-y-2">
                      <Button variant="secondary" className="w-full justify-start">
                        Visit Help Center
                      </Button>
                      <Button variant="outline" className="w-full justify-start bg-transparent border-white text-white hover:bg-white/10">
                        Schedule Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
