import React, { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Search, Menu, X, ChevronRight, Volume2, PlayCircle, ShoppingCart, User, Globe, Sun, Moon, Eye, EyeOff, Facebook, Github, Twitter } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const { scrollYProgress } = useScroll()
  const parallaxY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle('dark')
  }

  const LoginDialog = () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <User className="h-5 w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <div className="w-full max-w-md">
          <div className="flex justify-center mb-8">
            <img src="/placeholder.svg?height=60&width=60" alt="AYUSH Botanicum Logo" className="h-15 w-15" />
          </div>
          <h2 className="text-3xl font-bold text-center text-emerald-800 dark:text-emerald-400 mb-6">
            Welcome to AYUSH Botanicum
          </h2>
          <Tabs defaultValue="signin" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="signin">Sign In</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>
            <TabsContent value="signin">
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter your email" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2"
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5 text-gray-500" />
                        ) : (
                          <Eye className="h-5 w-5 text-gray-500" />
                        )}
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="remember" />
                      <Label htmlFor="remember">Remember me</Label>
                    </div>
                    <a href="#" className="text-sm text-emerald-600 hover:underline">
                      Forgot password?
                    </a>
                  </div>
                  <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700">
                    Sign In
                  </Button>
                </div>
              </form>
            </TabsContent>
            <TabsContent value="signup">
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="signup-name">Full Name</Label>
                    <Input id="signup-name" type="text" placeholder="Enter your full name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-email">Email</Label>
                    <Input id="signup-email" type="email" placeholder="Enter your email" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-password">Password</Label>
                    <div className="relative">
                      <Input
                        id="signup-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a password"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2"
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5 text-gray-500" />
                        ) : (
                          <Eye className="h-5 w-5 text-gray-500" />
                        )}
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" required />
                    <Label htmlFor="terms">
                      I agree to the{" "}
                      <a href="#" className="text-emerald-600 hover:underline">
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a href="#" className="text-emerald-600 hover:underline">
                        Privacy Policy
                      </a>
                    </Label>
                  </div>
                  <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700">
                    Sign Up
                  </Button>
                </div>
              </form>
            </TabsContent>
          </Tabs>
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-300"></span>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white dark:bg-gray-800 text-gray-500">Or continue with</span>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3">
              <Button variant="outline" className="w-full">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="outline" className="w-full">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="outline" className="w-full">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img src="/placeholder.svg?height=40&width=40" alt="AYUSH Botanicum Logo" className="h-10 w-10" />
            <h1 className="text-2xl font-bold text-emerald-800 dark:text-emerald-400">AYUSH Botanicum</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-emerald-700 dark:text-emerald-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">Home</a>
            <a href="#" className="text-emerald-700 dark:text-emerald-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">Plants</a>
            <a href="#" className="text-emerald-700 dark:text-emerald-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">Blog</a>
            <a href="#" className="text-emerald-700 dark:text-emerald-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">Shop</a>
            <a href="#" className="text-emerald-700 dark:text-emerald-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">Community</a>
          </nav>
          <div className="flex items-center space-x-4">
            <form className="hidden md:flex items-center">
              <Input type="search" placeholder="Search plants..." className="rounded-r-none" />
              <Button type="submit" variant="default" className="rounded-l-none">
                <Search className="h-4 w-4" />
                <span className="sr-only">Search</span>
              </Button>
            </form>
            <Select defaultValue="en">
              <SelectTrigger className="w-[70px]">
                <SelectValue placeholder="Language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">EN</SelectItem>
                <SelectItem value="hi">HI</SelectItem>
                <SelectItem value="sa">SA</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <LoginDialog />
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Rest of the HomePage component remains unchanged */}
      {/* ... */}

    </div>
  )
}
