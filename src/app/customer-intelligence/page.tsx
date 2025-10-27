"use client"

import { useState } from "react"
import MainNav from "@/components/MainNav"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Users, 
  TrendingUp,
  DollarSign,
  Target,
  Zap,
  Award,
  BarChart3,
  PieChart,
  Activity,
  Flame,
  Trophy,
  Star
} from "lucide-react"
import { Progress } from "@/components/ui/progress"

const customers = [
  { name: "Tech Corp", segment: "Enterprise", ltv: "$125K", health: 95, activity: "high" },
  { name: "StartupXYZ", segment: "Growth", ltv: "$45K", health: 88, activity: "high" },
  { name: "Local Business", segment: "SMB", ltv: "$12K", health: 72, activity: "medium" },
  { name: "E-commerce Plus", segment: "Growth", ltv: "$67K", health: 91, activity: "high" },
]

const roiMetrics = [
  { campaign: "Summer Campaign", spend: "$25K", revenue: "$95K", roi: "280%", status: "excellent" },
  { campaign: "Product Launch", spend: "$18K", revenue: "$58K", roi: "222%", status: "good" },
  { campaign: "Email Series", spend: "$5K", revenue: "$22K", roi: "340%", status: "excellent" },
  { campaign: "Social Ads", spend: "$12K", revenue: "$31K", roi: "158%", status: "good" },
]

const financialInsights = [
  { metric: "Projected MRR", value: "$245K", change: "+18%", trend: "up" },
  { metric: "Customer CAC", value: "$1,850", change: "-12%", trend: "down" },
  { metric: "Churn Rate", value: "2.3%", change: "-0.8%", trend: "down" },
  { metric: "ARPU", value: "$2,450", change: "+25%", trend: "up" },
]

const achievements = [
  { title: "Revenue Master", desc: "Hit $1M revenue milestone", icon: Trophy, color: "from-yellow-600 to-orange-600", earned: true },
  { title: "Conversion King", desc: "Achieve 5% conversion rate", icon: Target, color: "from-blue-600 to-indigo-600", earned: true },
  { title: "Engagement Hero", desc: "90% customer satisfaction", icon: Star, color: "from-purple-600 to-pink-600", earned: true },
  { title: "Growth Champion", desc: "100% MoM growth", icon: TrendingUp, color: "from-green-600 to-emerald-600", earned: false },
]

export default function CustomerIntelligence() {
  const [energyScore] = useState(87)

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-blue-50/20 dark:to-blue-950/20">
      <MainNav />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Customer Intelligence Center</h1>
              <p className="text-muted-foreground">360° customer insights, ROI tracking, and predictive analytics</p>
            </div>
          </div>
        </div>

        {/* Marketing Energy Score - Featured */}
        <Card className="mb-6 border-2 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Flame className="w-6 h-6 text-orange-600" />
                  <h3 className="text-2xl font-bold">Marketing Energy Score</h3>
                  <Badge className="bg-gradient-to-r from-orange-600 to-red-600">Live</Badge>
                </div>
                <p className="text-muted-foreground mb-4">
                  Your real-time marketing performance and momentum indicator
                </p>
                <div className="flex items-center gap-6">
                  <div className="relative w-32 h-32">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        className="text-muted"
                      />
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="url(#gradient)"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray={`${2 * Math.PI * 56}`}
                        strokeDashoffset={`${2 * Math.PI * 56 * (1 - energyScore / 100)}`}
                        className="transition-all duration-1000"
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#ea580c" />
                          <stop offset="100%" stopColor="#dc2626" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-3xl font-bold">{energyScore}</span>
                      <Flame className="w-5 h-5 text-orange-600" />
                    </div>
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Campaign Momentum</span>
                      <span className="text-sm font-medium">92%</span>
                    </div>
                    <Progress value={92} className="h-2" />
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Engagement Power</span>
                      <span className="text-sm font-medium">85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                    <div className="flex items-center justify-between">
                      <span className="text-sm">ROI Velocity</span>
                      <span className="text-sm font-medium">84%</span>
                    </div>
                    <Progress value={84} className="h-2" />
                  </div>
                </div>
              </div>
              <div className="space-y-3 pl-6 border-l">
                <div className="text-center p-4 bg-background/50 rounded-lg">
                  <Award className="w-8 h-8 mx-auto mb-2 text-orange-600" />
                  <p className="text-sm font-medium">Level 8</p>
                  <p className="text-xs text-muted-foreground">Marketing Maven</p>
                </div>
                <div className="text-center p-4 bg-background/50 rounded-lg">
                  <Zap className="w-8 h-8 mx-auto mb-2 text-yellow-600" />
                  <p className="text-sm font-medium">24 Day Streak</p>
                  <p className="text-xs text-muted-foreground">Keep it up!</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="cdp" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="cdp">Customer Data</TabsTrigger>
            <TabsTrigger value="roi">ROI Dashboard</TabsTrigger>
            <TabsTrigger value="financial">Financial Insights</TabsTrigger>
            <TabsTrigger value="gamification">Achievements</TabsTrigger>
          </TabsList>

          {/* Customer Data Platform Tab */}
          <TabsContent value="cdp" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Customers</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2,847</div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-green-600">+18%</span> from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Avg LTV</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$62,450</div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-green-600">+25%</span> vs last quarter
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Segments</CardTitle>
                  <PieChart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-muted-foreground">
                    AI-generated segments
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Health Score</CardTitle>
                  <Activity className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">86.5</div>
                  <p className="text-xs text-muted-foreground">
                    Overall customer health
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Customer Insights</CardTitle>
                    <CardDescription>AI-analyzed customer profiles and engagement</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {customers.map((customer, idx) => (
                        <div key={idx} className="p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                          <div className="flex items-center justify-between mb-3">
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="font-medium">{customer.name}</span>
                                <Badge variant="outline">{customer.segment}</Badge>
                              </div>
                              <p className="text-xs text-muted-foreground mt-1">
                                Lifetime Value: {customer.ltv}
                              </p>
                            </div>
                            <Badge 
                              variant={customer.activity === "high" ? "default" : "secondary"}
                              className={customer.activity === "high" ? "bg-green-600" : ""}
                            >
                              {customer.activity} activity
                            </Badge>
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">Customer Health</span>
                              <span className="font-medium">{customer.health}%</span>
                            </div>
                            <Progress value={customer.health} />
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
                    <CardTitle>Segment Distribution</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Enterprise</span>
                        <span className="font-medium">35%</span>
                      </div>
                      <Progress value={35} />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Growth</span>
                        <span className="font-medium">42%</span>
                      </div>
                      <Progress value={42} />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>SMB</span>
                        <span className="font-medium">23%</span>
                      </div>
                      <Progress value={23} />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>AI Insights</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="p-3 bg-accent/50 rounded-lg">
                      <p className="text-sm">🎯 15 customers at risk of churn</p>
                    </div>
                    <div className="p-3 bg-accent/50 rounded-lg">
                      <p className="text-sm">📈 42 upsell opportunities</p>
                    </div>
                    <div className="p-3 bg-accent/50 rounded-lg">
                      <p className="text-sm">💰 Avg deal size up 28%</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* ROI Dashboard Tab */}
          <TabsContent value="roi" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Overall ROI</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">285%</div>
                  <p className="text-xs text-muted-foreground">
                    Across all campaigns
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$206K</div>
                  <p className="text-xs text-muted-foreground">
                    From marketing activities
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Spend</CardTitle>
                  <BarChart3 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$60K</div>
                  <p className="text-xs text-muted-foreground">
                    Marketing investment
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Campaign ROI Analysis</CardTitle>
                <CardDescription>Performance and profitability by campaign</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {roiMetrics.map((campaign, idx) => (
                    <div key={idx} className="p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <span className="font-medium">{campaign.campaign}</span>
                          <p className="text-xs text-muted-foreground mt-1">
                            Spend: {campaign.spend} → Revenue: {campaign.revenue}
                          </p>
                        </div>
                        <Badge 
                          variant={campaign.status === "excellent" ? "default" : "secondary"}
                          className={campaign.status === "excellent" ? "bg-green-600" : ""}
                        >
                          ROI: {campaign.roi}
                        </Badge>
                      </div>
                      <Progress 
                        value={parseInt(campaign.roi)} 
                        className="h-2"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Financial Insights Tab */}
          <TabsContent value="financial" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {financialInsights.map((insight, idx) => (
                <Card key={idx}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">{insight.metric}</CardTitle>
                    <TrendingUp className={`h-4 w-4 ${insight.trend === "up" ? "text-green-600" : "text-red-600"}`} />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{insight.value}</div>
                    <p className="text-xs text-muted-foreground">
                      <span className={insight.trend === "up" ? "text-green-600" : "text-red-600"}>
                        {insight.change}
                      </span> vs last period
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Revenue Predictions</CardTitle>
                  <CardDescription>AI-powered financial forecasting</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-lg border">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Next Month Projection</span>
                      <Badge>95% confidence</Badge>
                    </div>
                    <p className="text-3xl font-bold">$287K</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Expected revenue based on current trends
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 border rounded-lg">
                      <span className="text-sm">Q1 2025 Forecast</span>
                      <span className="font-medium">$825K</span>
                    </div>
                    <div className="flex justify-between items-center p-3 border rounded-lg">
                      <span className="text-sm">Annual Run Rate</span>
                      <span className="font-medium">$3.2M</span>
                    </div>
                    <div className="flex justify-between items-center p-3 border rounded-lg">
                      <span className="text-sm">Break-even Point</span>
                      <span className="font-medium">Achieved ✓</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Financial Health</CardTitle>
                  <CardDescription>Key business metrics and indicators</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Cash Flow Health</span>
                      <span className="font-medium">Excellent</span>
                    </div>
                    <Progress value={92} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Profit Margin</span>
                      <span className="font-medium">68%</span>
                    </div>
                    <Progress value={68} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Growth Rate</span>
                      <span className="font-medium">45%</span>
                    </div>
                    <Progress value={45} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Customer Retention</span>
                      <span className="font-medium">97.7%</span>
                    </div>
                    <Progress value={98} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Gamification Tab */}
          <TabsContent value="gamification" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Your Achievements</CardTitle>
                <CardDescription>Unlock badges and level up your marketing game</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  {achievements.map((achievement, idx) => (
                    <div 
                      key={idx}
                      className={`p-6 border-2 rounded-lg text-center transition-all ${
                        achievement.earned 
                          ? "bg-gradient-to-br " + achievement.color + " text-white border-transparent" 
                          : "bg-muted/50 border-dashed opacity-60"
                      }`}
                    >
                      <achievement.icon className={`w-12 h-12 mx-auto mb-3 ${achievement.earned ? "" : "text-muted-foreground"}`} />
                      <h4 className="font-bold mb-1">{achievement.title}</h4>
                      <p className={`text-xs ${achievement.earned ? "text-white/80" : "text-muted-foreground"}`}>
                        {achievement.desc}
                      </p>
                      {achievement.earned && (
                        <Badge className="mt-3 bg-white/20">Unlocked ✓</Badge>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Leaderboard</CardTitle>
                  <CardDescription>Top marketing performers this month</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { rank: 1, name: "You", score: 87, badge: "🥇" },
                      { rank: 2, name: "Marketing Pro", score: 82, badge: "🥈" },
                      { rank: 3, name: "Growth Hacker", score: 78, badge: "🥉" },
                      { rank: 4, name: "Campaign Master", score: 75, badge: "4" },
                      { rank: 5, name: "ROI Wizard", score: 71, badge: "5" },
                    ].map((player) => (
                      <div 
                        key={player.rank}
                        className={`flex items-center justify-between p-3 rounded-lg ${
                          player.rank === 1 ? "bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-950/20 dark:to-orange-950/20 border-2 border-yellow-400" : "border"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{player.badge}</span>
                          <div>
                            <p className="font-medium">{player.name}</p>
                            <p className="text-xs text-muted-foreground">Energy Score: {player.score}</p>
                          </div>
                        </div>
                        {player.rank === 1 && <Badge className="bg-yellow-600">Leader</Badge>}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Progress & Challenges</CardTitle>
                  <CardDescription>Complete challenges to earn rewards</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">🎯 Launch 5 Campaigns</span>
                      <span className="text-xs text-muted-foreground">3/5</span>
                    </div>
                    <Progress value={60} className="h-2 mb-2" />
                    <p className="text-xs text-muted-foreground">Reward: +500 XP</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">💰 Achieve 250% ROI</span>
                      <span className="text-xs text-muted-foreground">Complete!</span>
                    </div>
                    <Progress value={100} className="h-2 mb-2" />
                    <Badge className="bg-green-600">+1000 XP Earned</Badge>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">🔥 30 Day Streak</span>
                      <span className="text-xs text-muted-foreground">24/30</span>
                    </div>
                    <Progress value={80} className="h-2 mb-2" />
                    <p className="text-xs text-muted-foreground">Reward: Exclusive Badge</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
