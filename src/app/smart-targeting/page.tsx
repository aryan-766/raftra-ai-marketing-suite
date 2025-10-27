"use client"

import { useState } from "react"
import MainNav from "@/components/MainNav"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Target, 
  Map,
  MessageSquare,
  Mic,
  Gift,
  Send,
  Globe,
  Users,
  TrendingUp,
  Clock,
  Zap,
  Bot,
  Volume2
} from "lucide-react"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"

const geoTargets = [
  { region: "North America", users: "2.4M", engagement: "High", revenue: "$1.2M" },
  { region: "Europe", users: "1.8M", engagement: "Medium", revenue: "$890K" },
  { region: "Asia Pacific", users: "3.2M", engagement: "High", revenue: "$1.5M" },
  { region: "Latin America", users: "980K", engagement: "Medium", revenue: "$420K" },
]

const dynamicOffers = [
  { name: "Flash Sale 20%", status: "active", conversions: 324, revenue: "$12.4K" },
  { name: "First-Time Buyer", status: "active", conversions: 156, revenue: "$8.9K" },
  { name: "Cart Abandonment", status: "paused", conversions: 89, revenue: "$5.2K" },
  { name: "VIP Customer Bonus", status: "active", conversions: 67, revenue: "$18.7K" },
]

const chatbotStats = [
  { metric: "Active Conversations", value: "234", trend: "+12%" },
  { metric: "Avg Response Time", value: "1.2s", trend: "-23%" },
  { metric: "Satisfaction Rate", value: "94%", trend: "+5%" },
  { metric: "Conversions", value: "89", trend: "+18%" },
]

const voiceCampaigns = [
  { name: "Product Launch Announcement", status: "scheduled", reach: "15K", date: "Dec 15" },
  { name: "Holiday Promotion", status: "active", reach: "28K", date: "Dec 12" },
  { name: "Customer Survey", status: "completed", reach: "12K", date: "Dec 8" },
]

export default function SmartTargeting() {
  const [offerDiscount, setOfferDiscount] = useState([20])
  const [chatMessage, setChatMessage] = useState("")
  const [voiceScript, setVoiceScript] = useState("")

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-emerald-50/20 dark:to-emerald-950/20">
      <MainNav />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center">
              <Target className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Smart Targeting & Automation</h1>
              <p className="text-muted-foreground">AI-powered targeting, offers, and customer engagement</p>
            </div>
          </div>
        </div>

        <Tabs defaultValue="geo" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="geo">GEO Targeting</TabsTrigger>
            <TabsTrigger value="offers">Dynamic Offers</TabsTrigger>
            <TabsTrigger value="chatbot">AI Chatbot</TabsTrigger>
            <TabsTrigger value="voice">Voice Campaigns</TabsTrigger>
          </TabsList>

          {/* GEO Targeting Tab */}
          <TabsContent value="geo" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Geographic Intelligence Map</CardTitle>
                    <CardDescription>AI-powered location-based targeting and insights</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-950 dark:to-teal-950 rounded-lg flex items-center justify-center border-2 border-dashed mb-4">
                      <div className="text-center space-y-2">
                        <Map className="w-16 h-16 mx-auto text-muted-foreground" />
                        <p className="text-sm text-muted-foreground">Interactive World Map</p>
                        <p className="text-xs text-muted-foreground">Click regions to view detailed analytics</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Target Country/Region</Label>
                        <Select defaultValue="global">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="global">Global</SelectItem>
                            <SelectItem value="us">United States</SelectItem>
                            <SelectItem value="eu">European Union</SelectItem>
                            <SelectItem value="asia">Asia Pacific</SelectItem>
                            <SelectItem value="latam">Latin America</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Targeting Precision</Label>
                        <Select defaultValue="city">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="country">Country Level</SelectItem>
                            <SelectItem value="state">State/Province</SelectItem>
                            <SelectItem value="city">City Level</SelectItem>
                            <SelectItem value="zip">ZIP/Postal Code</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Regional Performance</CardTitle>
                    <CardDescription>Market insights by geographic location</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {geoTargets.map((target, idx) => (
                        <div key={idx} className="p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2">
                              <Globe className="w-4 h-4 text-muted-foreground" />
                              <span className="font-medium">{target.region}</span>
                            </div>
                            <Badge variant={target.engagement === "High" ? "default" : "secondary"}>
                              {target.engagement} Engagement
                            </Badge>
                          </div>
                          <div className="grid grid-cols-3 gap-4 text-sm">
                            <div>
                              <p className="text-xs text-muted-foreground">Users</p>
                              <p className="font-medium">{target.users}</p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground">Revenue</p>
                              <p className="font-medium">{target.revenue}</p>
                            </div>
                            <div className="flex items-end">
                              <Button size="sm" variant="outline" className="w-full">
                                Optimize
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Targeting Stats</CardTitle>
                    <CardDescription>Overall performance</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Active Regions</span>
                        <span className="font-medium">24</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Total Reach</span>
                        <span className="font-medium">8.4M</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Conversion Rate</span>
                        <span className="font-medium">3.8%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Total Revenue</span>
                        <span className="font-medium">$4.01M</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>AI Recommendations</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="p-3 bg-accent/50 rounded-lg">
                      <p className="text-sm">🎯 Increase budget in Asia Pacific by 25% for optimal ROI</p>
                    </div>
                    <div className="p-3 bg-accent/50 rounded-lg">
                      <p className="text-sm">📈 Morning campaigns perform 35% better in Europe</p>
                    </div>
                    <div className="p-3 bg-accent/50 rounded-lg">
                      <p className="text-sm">🌍 Consider expanding to Middle East market</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Dynamic Offers Tab */}
          <TabsContent value="offers" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Create Dynamic Offer</CardTitle>
                    <CardDescription>AI-optimized offers based on user behavior</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label>Offer Name</Label>
                      <Input placeholder="E.g., Flash Sale Friday" />
                    </div>

                    <div className="space-y-2">
                      <Label>Trigger Condition</Label>
                      <Select defaultValue="cart">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cart">Cart Abandonment</SelectItem>
                          <SelectItem value="firsttime">First-Time Visitor</SelectItem>
                          <SelectItem value="returning">Returning Customer</SelectItem>
                          <SelectItem value="highvalue">High-Value Browser</SelectItem>
                          <SelectItem value="timebased">Time-Based</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Discount Amount: {offerDiscount[0]}%</Label>
                      <Slider
                        value={offerDiscount}
                        onValueChange={setOfferDiscount}
                        max={50}
                        step={5}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Target Audience</Label>
                      <Select defaultValue="all">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Users</SelectItem>
                          <SelectItem value="new">New Visitors</SelectItem>
                          <SelectItem value="active">Active Customers</SelectItem>
                          <SelectItem value="vip">VIP Tier</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium text-sm">AI Auto-Optimization</p>
                        <p className="text-xs text-muted-foreground">Let AI adjust offer parameters</p>
                      </div>
                      <Switch defaultChecked />
                    </div>

                    <Button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600">
                      <Gift className="w-4 h-4 mr-2" />
                      Create Offer
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Active Dynamic Offers</CardTitle>
                    <CardDescription>Real-time offer performance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {dynamicOffers.map((offer, idx) => (
                        <div key={idx} className="p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2">
                              <Gift className="w-4 h-4 text-muted-foreground" />
                              <span className="font-medium">{offer.name}</span>
                            </div>
                            <Badge variant={offer.status === "active" ? "default" : "secondary"}>
                              {offer.status}
                            </Badge>
                          </div>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <p className="text-xs text-muted-foreground">Conversions</p>
                              <p className="font-medium">{offer.conversions}</p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground">Revenue</p>
                              <p className="font-medium">{offer.revenue}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* AI Chatbot Tab */}
          <TabsContent value="chatbot" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>AI Chatbot Interface</CardTitle>
                    <CardDescription>WhatsApp & Multi-channel assistant</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-96 border rounded-lg p-4 mb-4 overflow-y-auto bg-accent/20">
                      <div className="space-y-4">
                        <div className="flex gap-2">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center flex-shrink-0">
                            <Bot className="w-4 h-4 text-white" />
                          </div>
                          <div className="bg-card border rounded-lg p-3 max-w-sm">
                            <p className="text-sm">Hello! I'm your AI marketing assistant. How can I help you today?</p>
                          </div>
                        </div>
                        <div className="flex gap-2 justify-end">
                          <div className="bg-primary text-primary-foreground rounded-lg p-3 max-w-sm">
                            <p className="text-sm">What are my campaign stats?</p>
                          </div>
                          <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                            <Users className="w-4 h-4" />
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center flex-shrink-0">
                            <Bot className="w-4 h-4 text-white" />
                          </div>
                          <div className="bg-card border rounded-lg p-3 max-w-sm">
                            <p className="text-sm">Your campaigns are performing great! 📊</p>
                            <ul className="text-sm mt-2 space-y-1">
                              <li>• Active campaigns: 12</li>
                              <li>• Total reach: 8.4M</li>
                              <li>• Conversion rate: 3.8%</li>
                              <li>• ROI: 285%</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Input
                        placeholder="Type your message..."
                        value={chatMessage}
                        onChange={(e) => setChatMessage(e.target.value)}
                      />
                      <Button className="bg-gradient-to-r from-emerald-600 to-teal-600">
                        <Send className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Chatbot Configuration</CardTitle>
                    <CardDescription>Customize AI behavior and responses</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label>Response Style</Label>
                      <Select defaultValue="friendly">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="professional">Professional</SelectItem>
                          <SelectItem value="friendly">Friendly & Casual</SelectItem>
                          <SelectItem value="concise">Concise & Direct</SelectItem>
                          <SelectItem value="detailed">Detailed & Helpful</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium text-sm">WhatsApp</p>
                          <p className="text-xs text-muted-foreground">Integration</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium text-sm">Facebook</p>
                          <p className="text-xs text-muted-foreground">Messenger</p>
                        </div>
                        <Switch />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Chatbot Analytics</CardTitle>
                    <CardDescription>Real-time performance metrics</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {chatbotStats.map((stat, idx) => (
                      <div key={idx} className="p-3 border rounded-lg">
                        <p className="text-xs text-muted-foreground mb-1">{stat.metric}</p>
                        <div className="flex items-center justify-between">
                          <p className="text-xl font-bold">{stat.value}</p>
                          <Badge variant="outline" className="text-xs">
                            {stat.trend}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Voice Campaigns Tab */}
          <TabsContent value="voice" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Create Voice Campaign</CardTitle>
                    <CardDescription>AI-powered voice messaging for your audience</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label>Campaign Name</Label>
                      <Input placeholder="E.g., Holiday Greetings 2024" />
                    </div>

                    <div className="space-y-2">
                      <Label>Voice Type</Label>
                      <Select defaultValue="female">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="female">Female - Professional</SelectItem>
                          <SelectItem value="male">Male - Professional</SelectItem>
                          <SelectItem value="female-casual">Female - Casual</SelectItem>
                          <SelectItem value="male-casual">Male - Casual</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Voice Script</Label>
                      <Textarea
                        placeholder="Enter your message script here..."
                        value={voiceScript}
                        onChange={(e) => setVoiceScript(e.target.value)}
                        rows={6}
                      />
                      <p className="text-xs text-muted-foreground">
                        AI will optimize pauses and emphasis for natural delivery
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label>Target Audience</Label>
                      <Select defaultValue="all">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Contacts</SelectItem>
                          <SelectItem value="engaged">Engaged Users</SelectItem>
                          <SelectItem value="inactive">Inactive Users</SelectItem>
                          <SelectItem value="segment">Custom Segment</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" className="flex-1">
                        <Volume2 className="w-4 h-4 mr-2" />
                        Preview
                      </Button>
                      <Button className="flex-1 bg-gradient-to-r from-emerald-600 to-teal-600">
                        <Mic className="w-4 h-4 mr-2" />
                        Launch Campaign
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Voice Campaigns</CardTitle>
                    <CardDescription>Active and scheduled voice outreach</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {voiceCampaigns.map((campaign, idx) => (
                        <div key={idx} className="p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2">
                              <Mic className="w-4 h-4 text-muted-foreground" />
                              <span className="font-medium text-sm">{campaign.name}</span>
                            </div>
                            <Badge 
                              variant={
                                campaign.status === "active" ? "default" : 
                                campaign.status === "scheduled" ? "secondary" : 
                                "outline"
                              }
                            >
                              {campaign.status}
                            </Badge>
                          </div>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <p className="text-xs text-muted-foreground">Reach</p>
                              <p className="font-medium">{campaign.reach}</p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground">Date</p>
                              <p className="font-medium">{campaign.date}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>Campaign Stats</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Total Sent</span>
                      <span className="font-medium">55,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Delivery Rate</span>
                      <span className="font-medium">97.8%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Listen Rate</span>
                      <span className="font-medium">68.5%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Action Taken</span>
                      <span className="font-medium">12.3%</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
