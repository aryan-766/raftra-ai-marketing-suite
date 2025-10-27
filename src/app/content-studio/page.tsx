"use client"

import { useState } from "react"
import MainNav from "@/components/MainNav"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Sparkles, 
  Search, 
  Copy,
  Wand2,
  Image as ImageIcon,
  FileText,
  Target,
  TrendingUp,
  Hash,
  Smile
} from "lucide-react"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"

const seoSuggestions = [
  { keyword: "AI marketing tools", volume: "18K", difficulty: 45, trend: "up" },
  { keyword: "marketing automation software", volume: "12K", difficulty: 52, trend: "up" },
  { keyword: "social media analytics", volume: "9.8K", difficulty: 38, trend: "up" },
  { keyword: "competitor analysis tool", volume: "7.5K", difficulty: 42, trend: "stable" },
  { keyword: "SEO optimization platform", volume: "6.2K", difficulty: 48, trend: "up" },
]

const copyTemplates = [
  { name: "Product Launch", type: "Ad Copy", platform: "Google Ads" },
  { name: "Limited Time Offer", type: "Email", platform: "Email Marketing" },
  { name: "Social Engagement", type: "Social Post", platform: "Instagram" },
  { name: "Brand Story", type: "Long-form", platform: "Blog" },
  { name: "CTA Optimized", type: "Landing Page", platform: "Website" },
]

const memeTemplates = [
  { id: 1, name: "Success Kid", category: "Classic", trending: true },
  { id: 2, name: "Distracted Boyfriend", category: "Comparison", trending: true },
  { id: 3, name: "Drake Hotline Bling", category: "Choice", trending: false },
  { id: 4, name: "Two Buttons", category: "Decision", trending: true },
  { id: 5, name: "Expanding Brain", category: "Evolution", trending: false },
  { id: 6, name: "This Is Fine", category: "Reaction", trending: true },
]

export default function ContentStudio() {
  const [seoKeyword, setSeoKeyword] = useState("")
  const [copyPrompt, setCopyPrompt] = useState("")
  const [generatedCopy, setGeneratedCopy] = useState("")
  const [memeText, setMemeText] = useState({ top: "", bottom: "" })
  const [creativity, setCreativity] = useState([70])

  const generateCopy = () => {
    const samples = [
      "🚀 Transform your marketing game with AI-powered insights. Get 30% more conversions with our intelligent automation platform. Limited time offer - Start free today!",
      "Stop guessing. Start growing. Our AI marketing suite analyzes your competitors, optimizes your content, and maximizes ROI. Join 10,000+ marketers who've 10x'd their results.",
      "Your competitors are already using AI. Don't get left behind. Unlock the power of intelligent marketing automation and watch your business soar. Try risk-free for 30 days.",
    ]
    setGeneratedCopy(samples[Math.floor(Math.random() * samples.length)])
  }

  const analyzeSEO = () => {
    // Simulated SEO analysis
    alert("AI SEO Analysis Complete! Found 23 optimization opportunities for your keyword.")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-indigo-50/20 dark:to-indigo-950/20">
      <MainNav />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">AI Content Studio</h1>
              <p className="text-muted-foreground">Create, optimize, and generate marketing content with AI</p>
            </div>
          </div>
        </div>

        <Tabs defaultValue="seo" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="seo">SEO Optimizer</TabsTrigger>
            <TabsTrigger value="copywriter">AI Copywriter</TabsTrigger>
            <TabsTrigger value="meme">Meme Studio</TabsTrigger>
          </TabsList>

          {/* SEO Optimizer Tab */}
          <TabsContent value="seo" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Keyword Research & Analysis</CardTitle>
                    <CardDescription>AI-powered keyword discovery and optimization</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label>Target Keyword or Topic</Label>
                      <div className="flex gap-2">
                        <Input
                          placeholder="Enter keyword or topic..."
                          value={seoKeyword}
                          onChange={(e) => setSeoKeyword(e.target.value)}
                        />
                        <Button onClick={analyzeSEO} className="bg-gradient-to-r from-indigo-600 to-purple-600">
                          <Sparkles className="w-4 h-4 mr-2" />
                          Analyze
                        </Button>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Content Type</Label>
                        <Select defaultValue="blog">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="blog">Blog Post</SelectItem>
                            <SelectItem value="product">Product Page</SelectItem>
                            <SelectItem value="landing">Landing Page</SelectItem>
                            <SelectItem value="social">Social Media</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Target Location</Label>
                        <Select defaultValue="global">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="global">Global</SelectItem>
                            <SelectItem value="us">United States</SelectItem>
                            <SelectItem value="uk">United Kingdom</SelectItem>
                            <SelectItem value="eu">Europe</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Keyword Suggestions</CardTitle>
                    <CardDescription>High-potential keywords for your content</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {seoSuggestions.map((keyword, idx) => (
                        <div key={idx} className="p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <Hash className="w-4 h-4 text-muted-foreground" />
                              <span className="font-medium">{keyword.keyword}</span>
                            </div>
                            <Button size="sm" variant="outline">
                              <Target className="w-3 h-3 mr-1" />
                              Target
                            </Button>
                          </div>
                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <span>Volume: {keyword.volume}/mo</span>
                            <span>Difficulty: {keyword.difficulty}/100</span>
                            <span className="flex items-center gap-1">
                              <TrendingUp className="w-3 h-3" />
                              {keyword.trend}
                            </span>
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
                    <CardTitle>SEO Score</CardTitle>
                    <CardDescription>Current optimization level</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col items-center justify-center py-8">
                      <div className="relative w-32 h-32 mb-4">
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
                            stroke="currentColor"
                            strokeWidth="8"
                            fill="none"
                            strokeDasharray={`${2 * Math.PI * 56}`}
                            strokeDashoffset={`${2 * Math.PI * 56 * (1 - 0.78)}`}
                            className="text-indigo-600"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-3xl font-bold">78</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground text-center">
                        Good - Room for improvement
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      <FileText className="w-4 h-4 mr-2" />
                      Generate Meta Tags
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Search className="w-4 h-4 mr-2" />
                      Analyze Competitors
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      Track Rankings
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* AI Copywriter Tab */}
          <TabsContent value="copywriter" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>AI Copy Generator</CardTitle>
                    <CardDescription>Create compelling marketing copy in seconds</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label>Copy Type</Label>
                      <Select defaultValue="ad">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ad">Ad Copy</SelectItem>
                          <SelectItem value="email">Email Marketing</SelectItem>
                          <SelectItem value="social">Social Media Post</SelectItem>
                          <SelectItem value="landing">Landing Page</SelectItem>
                          <SelectItem value="product">Product Description</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Tone & Style</Label>
                      <Select defaultValue="professional">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="professional">Professional</SelectItem>
                          <SelectItem value="casual">Casual & Friendly</SelectItem>
                          <SelectItem value="urgent">Urgent & Persuasive</SelectItem>
                          <SelectItem value="humorous">Humorous</SelectItem>
                          <SelectItem value="luxury">Luxury & Elegant</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Creativity Level: {creativity[0]}%</Label>
                      <Slider
                        value={creativity}
                        onValueChange={setCreativity}
                        max={100}
                        step={10}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Describe Your Product/Service</Label>
                      <Textarea
                        placeholder="E.g., AI-powered marketing platform that helps businesses automate campaigns and increase ROI..."
                        value={copyPrompt}
                        onChange={(e) => setCopyPrompt(e.target.value)}
                        rows={4}
                      />
                    </div>

                    <Button onClick={generateCopy} className="w-full bg-gradient-to-r from-indigo-600 to-purple-600">
                      <Wand2 className="w-4 h-4 mr-2" />
                      Generate Copy
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Copy Templates</CardTitle>
                    <CardDescription>Pre-built templates for common use cases</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {copyTemplates.map((template, idx) => (
                        <button
                          key={idx}
                          className="w-full p-3 border rounded-lg hover:bg-accent text-left transition-colors"
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">{template.name}</p>
                              <p className="text-xs text-muted-foreground">{template.type}</p>
                            </div>
                            <Badge variant="outline">{template.platform}</Badge>
                          </div>
                        </button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Generated Copy</CardTitle>
                    <CardDescription>AI-crafted marketing content</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {generatedCopy ? (
                      <div className="space-y-4">
                        <div className="p-4 bg-accent/50 rounded-lg border">
                          <p className="text-sm leading-relaxed">{generatedCopy}</p>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" className="flex-1">
                            <Copy className="w-4 h-4 mr-2" />
                            Copy
                          </Button>
                          <Button variant="outline" className="flex-1">
                            <Wand2 className="w-4 h-4 mr-2" />
                            Regenerate
                          </Button>
                        </div>
                        <div className="space-y-2 pt-4 border-t">
                          <h4 className="font-medium text-sm">Variations</h4>
                          <div className="space-y-2">
                            <div className="p-3 border rounded-lg hover:bg-accent/50 cursor-pointer text-sm">
                              🎯 Shorter version: "AI marketing automation that delivers 30% more conversions. Start free!"
                            </div>
                            <div className="p-3 border rounded-lg hover:bg-accent/50 cursor-pointer text-sm">
                              📧 Email version: "Hi there! Ready to transform your marketing with AI? Our platform helps..."
                            </div>
                            <div className="p-3 border rounded-lg hover:bg-accent/50 cursor-pointer text-sm">
                              📱 Social version: "Stop guessing 🤷‍♂️ Start growing 📈 AI-powered marketing is here..."
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center py-12 text-center">
                        <Wand2 className="w-12 h-12 text-muted-foreground mb-4" />
                        <p className="text-muted-foreground">
                          Configure your preferences and click "Generate Copy" to create AI-powered content
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Meme Studio Tab */}
          <TabsContent value="meme" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Meme Generator</CardTitle>
                    <CardDescription>Create viral-worthy memes for your marketing campaigns</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="aspect-video bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-950 dark:to-indigo-950 rounded-lg flex items-center justify-center border-2 border-dashed">
                      <div className="text-center space-y-4 p-8">
                        <Smile className="w-16 h-16 mx-auto text-muted-foreground" />
                        <div>
                          <p className="font-medium text-lg">{memeText.top || "TOP TEXT"}</p>
                          <p className="text-muted-foreground text-sm my-4">[ Meme Template ]</p>
                          <p className="font-medium text-lg">{memeText.bottom || "BOTTOM TEXT"}</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="space-y-2">
                        <Label>Top Text</Label>
                        <Input
                          placeholder="Enter top text..."
                          value={memeText.top}
                          onChange={(e) => setMemeText({ ...memeText, top: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Bottom Text</Label>
                        <Input
                          placeholder="Enter bottom text..."
                          value={memeText.bottom}
                          onChange={(e) => setMemeText({ ...memeText, bottom: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600">
                        <Sparkles className="w-4 h-4 mr-2" />
                        AI Suggest Text
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <ImageIcon className="w-4 h-4 mr-2" />
                        Download Meme
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Meme Templates</CardTitle>
                    <CardDescription>Popular meme formats</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {memeTemplates.map((template) => (
                        <button
                          key={template.id}
                          className="w-full p-3 border rounded-lg hover:bg-accent text-left transition-colors"
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium text-sm">{template.name}</p>
                              <p className="text-xs text-muted-foreground">{template.category}</p>
                            </div>
                            {template.trending && (
                              <Badge variant="default" className="text-xs">
                                🔥 Trending
                              </Badge>
                            )}
                          </div>
                        </button>
                      ))}
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
