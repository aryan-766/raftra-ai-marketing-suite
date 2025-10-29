"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  TrendingUp, 
  Sparkles, 
  Target, 
  Users, 
  CreditCard, 
  Home,
  Menu,
  X,
  Brain
} from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Competitor Intelligence", href: "/competitor-intelligence", icon: TrendingUp },
  { name: "AI Content Studio", href: "/content-studio", icon: Sparkles },
  { name: "GEO Optimization", href: "/geo-optimization", icon: Brain, isNew: true },
  { name: "Smart Targeting", href: "/smart-targeting", icon: Target },
  { name: "Customer Intelligence", href: "/customer-intelligence", icon: Users },
  { name: "Ad Financing", href: "/ad-financing", icon: CreditCard },
]

export default function MainNav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                MarketAI
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all flex items-center gap-2 hover:scale-105 relative ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.name}
                  {item.isNew && (
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
                  )}
                </Link>
              )
            })}
            <ThemeToggle />
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64">
                <div className="flex flex-col space-y-4 mt-8">
                  {navigation.map((item) => {
                    const Icon = item.icon
                    const isActive = pathname === item.href
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2 relative ${
                          isActive
                            ? "bg-primary text-primary-foreground"
                            : "text-muted-foreground hover:text-foreground hover:bg-accent"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        {item.name}
                        {item.isNew && (
                          <span className="ml-auto text-xs bg-cyan-500 text-white px-2 py-0.5 rounded-full">NEW</span>
                        )}
                      </Link>
                    )
                  })}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}