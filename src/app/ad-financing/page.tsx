"use client"

import { useState } from "react"
import MainNav from "@/components/MainNav"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  CreditCard, 
  DollarSign,
  TrendingUp,
  Check,
  Zap,
  Shield,
  Clock,
  BarChart3
} from "lucide-react"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"

const creditTiers = [
  {
    name: "Starter",
    limit: "$10,000",
    apr: "8.9%",
    term: "12 months",
    features: ["Quick approval", "Basic support", "Monthly reports"],
  },
  {
    name: "Growth",
    limit: "$50,000",
    apr: "6.9%",
    term: "24 months",
    features: ["Priority approval", "Dedicated support", "Advanced analytics", "Flexible terms"],
    popular: true,
  },
  {
    name: "Enterprise",
    limit: "$250,000",
    apr: "4.9%",
    term: "36 months",
    features: ["Instant approval", "White-glove support", "Custom terms", "AI optimization", "Revenue sharing options"],
  },
]

const spendingData = [
  { month: "Jan", spend: "$8,200", paid: "$7,850", remaining: "$350" },
  { month: "Feb", spend: "$9,500", paid: "$9,100", remaining: "$400" },
  { month: "Mar", spend: "$12,300", paid: "$11,200", remaining: "$1,100" },
  { month: "Apr", spend: "$15,800", paid: "$14,500", remaining: "$1,300" },
]

export default function AdFinancing() {
  const [creditAmount, setCreditAmount] = useState([25000])
  const [monthlyPayment, setMonthlyPayment] = useState(2250)

  const calculatePayment = (amount: number, apr: number, months: number) => {
    const monthlyRate = apr / 100 / 12
    const payment = (amount * monthlyRate * Math.pow(1 + monthlyRate, months)) / 
                   (Math.pow(1 + monthlyRate, months) - 1)
    return payment.toFixed(0)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-purple-50/20 dark:to-purple-950/20">
      <MainNav />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
              <CreditCard className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Ad Credit Financing</h1>
              <p className="text-muted-foreground">Flexible financing solutions for your marketing campaigns</p>
            </div>
          </div>
        </div>

        <Tabs defaultValue="apply" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="apply">Apply for Credit</TabsTrigger>
            <TabsTrigger value="analytics">Spending Analytics</TabsTrigger>
            <TabsTrigger value="terms">Payment Terms</TabsTrigger>
          </TabsList>

          {/* Apply for Credit Tab */}
          <TabsContent value="apply" className="space-y-6">
            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-2">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Scale Your Marketing with Flexible Financing</h3>
                    <p className="text-muted-foreground mb-4">
                      Get instant credit approval and grow your campaigns without cash flow constraints
                    </p>
                    <div className="flex items-center gap-6 text-sm">
                      <div className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-purple-600" />
                        <span>Instant Approval</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-purple-600" />
                        <span>Secure & Safe</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-purple-600" />
                        <span>Flexible Terms</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-6 md:grid-cols-3">
              {creditTiers.map((tier, idx) => (
                <Card 
                  key={idx}
                  className={`relative ${
                    tier.popular 
                      ? "border-2 border-purple-600 shadow-lg" 
                      : ""
                  }`}
                >
                  {tier.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600">
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">{tier.name}</CardTitle>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">{tier.limit}</span>
                      <p className="text-sm text-muted-foreground mt-1">Credit Limit</p>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center pb-4 border-b">
                      <p className="text-sm text-muted-foreground">Starting at</p>
                      <p className="text-2xl font-bold text-purple-600">{tier.apr} APR</p>
                      <p className="text-xs text-muted-foreground">{tier.term}</p>
                    </div>
                    <ul className="space-y-2">
                      {tier.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={`w-full ${
                        tier.popular 
                          ? "bg-gradient-to-r from-purple-600 to-pink-600" 
                          : ""
                      }`}
                      variant={tier.popular ? "default" : "outline"}
                    >
                      Select Plan
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Credit Calculator</CardTitle>
                <CardDescription>Estimate your monthly payments</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Credit Amount: ${creditAmount[0].toLocaleString()}</Label>
                    <Slider
                      value={creditAmount}
                      onValueChange={(value) => {
                        setCreditAmount(value)
                        const payment = calculatePayment(value[0], 6.9, 24)
                        setMonthlyPayment(parseInt(payment))
                      }}
                      min={5000}
                      max={100000}
                      step={1000}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Repayment Term</Label>
                      <Select defaultValue="24">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="12">12 months</SelectItem>
                          <SelectItem value="24">24 months</SelectItem>
                          <SelectItem value="36">36 months</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Interest Rate</Label>
                      <Select defaultValue="6.9">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="4.9">4.9% APR</SelectItem>
                          <SelectItem value="6.9">6.9% APR</SelectItem>
                          <SelectItem value="8.9">8.9% APR</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-950/20 dark:to-pink-950/20 rounded-lg border-2 border-purple-200 dark:border-purple-800">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-2">Estimated Monthly Payment</p>
                    <p className="text-4xl font-bold text-purple-600">${monthlyPayment.toLocaleString()}</p>
                    <p className="text-xs text-muted-foreground mt-2">Based on selected terms</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center text-sm">
                  <div>
                    <p className="text-muted-foreground">Total Interest</p>
                    <p className="font-medium">${((monthlyPayment * 24) - creditAmount[0]).toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Total Repayment</p>
                    <p className="font-medium">${(monthlyPayment * 24).toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Effective APR</p>
                    <p className="font-medium">6.9%</p>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600" size="lg">
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Spending Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Credit Used</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$45,800</div>
                  <p className="text-xs text-muted-foreground">
                    91.6% of limit
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Remaining Credit</CardTitle>
                  <CreditCard className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$4,200</div>
                  <p className="text-xs text-muted-foreground">
                    Available to spend
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Paid This Month</CardTitle>
                  <Check className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$14,500</div>
                  <p className="text-xs text-muted-foreground">
                    On-time payment
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">ROI on Credit</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">342%</div>
                  <p className="text-xs text-muted-foreground">
                    Return on financed ads
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Spending History</CardTitle>
                <CardDescription>Monthly credit usage and payments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {spendingData.map((data, idx) => (
                    <div key={idx} className="p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">{data.month}</span>
                        <Badge variant="outline">Complete</Badge>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <p className="text-xs text-muted-foreground">Total Spend</p>
                          <p className="font-medium">{data.spend}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Amount Paid</p>
                          <p className="font-medium text-green-600">{data.paid}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Remaining</p>
                          <p className="font-medium">{data.remaining}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Campaign Financing Breakdown</CardTitle>
                  <CardDescription>Where your credit is being used</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Google Ads</span>
                      <span className="font-medium">$18,500 (40%)</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-purple-600 w-[40%]"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Meta Ads</span>
                      <span className="font-medium">$13,900 (30%)</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-pink-600 w-[30%]"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>LinkedIn Ads</span>
                      <span className="font-medium">$9,200 (20%)</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-blue-600 w-[20%]"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Other Platforms</span>
                      <span className="font-medium">$4,200 (10%)</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-600 w-[10%]"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Credit Score Impact</CardTitle>
                  <CardDescription>How financing affects your business credit</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-center py-6">
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
                          stroke="currentColor"
                          strokeWidth="8"
                          fill="none"
                          strokeDasharray={`${2 * Math.PI * 56}`}
                          strokeDashoffset={`${2 * Math.PI * 56 * (1 - 0.85)}`}
                          className="text-green-600"
                        />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-3xl font-bold">720</span>
                        <span className="text-xs text-muted-foreground">Excellent</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between p-2 bg-accent/50 rounded">
                      <span className="text-muted-foreground">Payment History</span>
                      <span className="font-medium text-green-600">100%</span>
                    </div>
                    <div className="flex justify-between p-2 bg-accent/50 rounded">
                      <span className="text-muted-foreground">Credit Utilization</span>
                      <span className="font-medium">91.6%</span>
                    </div>
                    <div className="flex justify-between p-2 bg-accent/50 rounded">
                      <span className="text-muted-foreground">Account Age</span>
                      <span className="font-medium">8 months</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Payment Terms Tab */}
          <TabsContent value="terms" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Payment Schedule</CardTitle>
                <CardDescription>Your upcoming payment obligations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { date: "Dec 15, 2024", amount: "$2,250", status: "upcoming", days: 3 },
                    { date: "Jan 15, 2025", amount: "$2,250", status: "scheduled", days: 33 },
                    { date: "Feb 15, 2025", amount: "$2,250", status: "scheduled", days: 64 },
                    { date: "Mar 15, 2025", amount: "$2,250", status: "scheduled", days: 92 },
                  ].map((payment, idx) => (
                    <div 
                      key={idx} 
                      className={`p-4 border rounded-lg hover:bg-accent/50 transition-colors ${
                        payment.status === "upcoming" ? "border-2 border-purple-600 bg-purple-50/50 dark:bg-purple-950/20" : ""
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{payment.date}</p>
                          <p className="text-xs text-muted-foreground">Due in {payment.days} days</p>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold">{payment.amount}</p>
                          <Badge variant={payment.status === "upcoming" ? "default" : "secondary"}>
                            {payment.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Payment Terms</CardTitle>
                  <CardDescription>Your current financing agreement</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between p-3 bg-accent/50 rounded-lg">
                      <span className="text-muted-foreground">Credit Limit</span>
                      <span className="font-medium">$50,000</span>
                    </div>
                    <div className="flex justify-between p-3 bg-accent/50 rounded-lg">
                      <span className="text-muted-foreground">Interest Rate</span>
                      <span className="font-medium">6.9% APR</span>
                    </div>
                    <div className="flex justify-between p-3 bg-accent/50 rounded-lg">
                      <span className="text-muted-foreground">Payment Term</span>
                      <span className="font-medium">24 months</span>
                    </div>
                    <div className="flex justify-between p-3 bg-accent/50 rounded-lg">
                      <span className="text-muted-foreground">Monthly Payment</span>
                      <span className="font-medium">$2,250</span>
                    </div>
                    <div className="flex justify-between p-3 bg-accent/50 rounded-lg">
                      <span className="text-muted-foreground">Remaining Balance</span>
                      <span className="font-medium">$45,800</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Early Payoff Options</CardTitle>
                  <CardDescription>Save on interest with early repayment</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-lg border-2 border-green-200 dark:border-green-800">
                    <p className="text-sm text-muted-foreground mb-2">Pay off now and save</p>
                    <p className="text-3xl font-bold text-green-600">$3,450</p>
                    <p className="text-xs text-muted-foreground mt-1">In interest charges</p>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Current balance</span>
                      <span className="font-medium">$45,800</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Remaining interest</span>
                      <span className="font-medium">$3,450</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold pt-2 border-t">
                      <span>Payoff amount</span>
                      <span>$45,800</span>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600">
                    Request Payoff Quote
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
