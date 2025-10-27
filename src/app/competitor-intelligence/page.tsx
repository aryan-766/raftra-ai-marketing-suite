"use client"

import { useState } from "react"
import MainNav from "@/components/MainNav"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  TrendingUp, 
  TrendingDown, 
  Search, 
  Eye, 
  DollarSign,
  Target,
  Sparkles,
  BarChart3,
  AlertCircle
} from "lucide-react"
import { Progress } from "@/components/ui/progress"

const mockCompetitors = [
  { 
    name: "CompetitorA", 
    marketShare: 32, 
    adSpend: "$125K",
    campaigns: 24,
    trend: "up",
    strength: 85,
    keywords: 1250
  },
  { 
    name: "CompetitorB", 
    marketShare: 28, 
    adSpend: "$98K",
    campaigns: 18,
    trend: "up",
    strength: 78,
    keywords: 980
  },
  { 
    name: "CompetitorC", 
    marketShare: 22, 
    adSpend: "$87K",
    campaigns: 15,
    trend: "down",
    strength: 72,
    keywords: 750
  },
  { 
    name: "Your Brand", 
    marketShare: 18, 
    adSpend: "$75K",
    campaigns: 12,
    trend: "up",
    strength: 68,
    keywords: 620
  },
]

const keywordGaps = [
  { keyword: "ai marketing automation", difficulty: 65, volume: "12K", gap: "high", cpc: "$8.50" },
  { keyword: "social media analytics", difficulty: 58, volume: "8.5K", gap: "high", cpc: "$6.20" },
  { keyword: "marketing intelligence platform", difficulty: 72, volume: "5.2K", gap: "medium", cpc: "$12.30" },
  { keyword: "competitor tracking tool", difficulty: 45, volume: "3.8K", gap: "medium", cpc: "$7.80" },
  { keyword: "brand monitoring software", difficulty: 52, volume: "2.9K", gap: "low", cpc: "$5.40" },
]

const campaigns = [
  { 
    competitor: "CompetitorA",
    campaign: "Summer Sale 2024",
    platform: "Google Ads",
    budget: "$25K",
    impressions: "1.2M",
    status: "active"
  },
  { 
    competitor: "CompetitorA",
    campaign: "Brand Awareness Q2",
    platform: "Meta",
    budget: "$18K",
    impressions: "890K",
    status: "active"
  },
  { 
    competitor: "CompetitorB",
    campaign: "Product Launch",
    platform: "LinkedIn",
    budget: "$12K",
    impressions: "450K",
    status: "active"
  },
  { 
    competitor: "CompetitorB",
    campaign: "Retargeting Campaign",
    platform: "Google Display",
    budget: "$8K",
    impressions: "320K",
    status: "paused"
  },
]

export default function CompetitorIntelligence() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-violet-50/20 dark:to-violet-950/20">
      <MainNav />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Competitor Intelligence</h1>
              <p className="text-muted-foreground">AI-powered competitive analysis and market insights</p>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search competitors, keywords, or campaigns..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button className="bg-gradient-to-r from-violet-600 to-indigo-600">
                <Sparkles className="w-4 h-4 mr-2" />
                AI Analyze
              </Button>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="campaigns">Campaign Tracking</TabsTrigger>
            <TabsTrigger value="keywords">Keyword Gap</TabsTrigger>
            <TabsTrigger value="positioning">Market Position</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Market Leaders</CardTitle>
                  <Target className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">4</div>
                  <p className="text-xs text-muted-foreground">
                    Tracked competitors
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Ad Spend</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$385K</div>
                  <p className="text-xs text-muted-foreground">
                    Combined monthly spend
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Campaigns</CardTitle>
                  <Eye className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">69</div>
                  <p className="text-xs text-muted-foreground">
                    Across all platforms
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Keyword Gaps</CardTitle>
                  <AlertCircle className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">127</div>
                  <p className="text-xs text-muted-foreground">
                    Opportunities found
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Competitor Market Share</CardTitle>
                <CardDescription>AI-analyzed competitive landscape</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {mockCompetitors.map((competitor) => (
                  <div key={competitor.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="font-medium">{competitor.name}</span>
                        {competitor.trend === "up" ? (
                          <TrendingUp className="w-4 h-4 text-green-500" />
                        ) : (
                          <TrendingDown className="w-4 h-4 text-red-500" />
                        )}
                      </div>
                      <span className="text-sm text-muted-foreground">{competitor.marketShare}%</span>
                    </div>
                    <Progress value={competitor.marketShare} className="h-2" />
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>Ad Spend: {competitor.adSpend}</span>
                      <span>Campaigns: {competitor.campaigns}</span>
                      <span>Keywords: {competitor.keywords}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Campaign Tracking Tab */}
          <TabsContent value="campaigns" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Competitor Campaign Tracker</CardTitle>
                <CardDescription>Real-time monitoring of competitor advertising activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {campaigns.map((campaign, idx) => (
                    <div key={idx} className="p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="font-medium">{campaign.campaign}</h4>
                          <p className="text-sm text-muted-foreground">{campaign.competitor}</p>
                        </div>
                        <Badge variant={campaign.status === "active" ? "default" : "secondary"}>
                          {campaign.status}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-3 gap-4 mt-3">
                        <div>
                          <p className="text-xs text-muted-foreground">Platform</p>
                          <p className="text-sm font-medium">{campaign.platform}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Budget</p>
                          <p className="text-sm font-medium">{campaign.budget}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Impressions</p>
                          <p className="text-sm font-medium">{campaign.impressions}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Keyword Gap Tab */}
          <TabsContent value="keywords" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Keyword Gap Analysis</CardTitle>
                <CardDescription>Discover high-value keywords your competitors rank for</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {keywordGaps.map((keyword, idx) => (
                    <div key={idx} className="p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-medium">{keyword.keyword}</h4>
                        <Badge 
                          variant={keyword.gap === "high" ? "default" : keyword.gap === "medium" ? "secondary" : "outline"}
                        >
                          {keyword.gap} opportunity
                        </Badge>
                      </div>
                      <div className="grid grid-cols-4 gap-4">
                        <div>
                          <p className="text-xs text-muted-foreground">Search Volume</p>
                          <p className="text-sm font-medium">{keyword.volume}/mo</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Difficulty</p>
                          <p className="text-sm font-medium">{keyword.difficulty}/100</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">CPC</p>
                          <p className="text-sm font-medium">{keyword.cpc}</p>
                        </div>
                        <div className="flex items-end">
                          <Button size="sm" variant="outline" className="w-full">
                            Target Keyword
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Market Position Tab */}
          <TabsContent value="positioning" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              {mockCompetitors.map((competitor) => (
                <Card key={competitor.name}>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {competitor.name}
                      {competitor.trend === "up" ? (
                        <TrendingUp className="w-5 h-5 text-green-500" />
                      ) : (
                        <TrendingDown className="w-5 h-5 text-red-500" />
                      )}
                    </CardTitle>
                    <CardDescription>Competitive strength analysis</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm">Overall Strength</span>
                        <span className="text-sm font-medium">{competitor.strength}/100</span>
                      </div>
                      <Progress value={competitor.strength} />
                    </div>
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                      <div>
                        <p className="text-xs text-muted-foreground">Market Share</p>
                        <p className="text-lg font-bold">{competitor.marketShare}%</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Ad Investment</p>
                        <p className="text-lg font-bold">{competitor.adSpend}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Active Campaigns</p>
                        <p className="text-lg font-bold">{competitor.campaigns}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Keywords</p>
                        <p className="text-lg font-bold">{competitor.keywords}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
