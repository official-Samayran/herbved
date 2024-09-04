'use client'

import React, { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Search, Menu, X, ChevronRight, Volume2, PlayCircle, ShoppingCart, User, Globe, Sun, Moon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const { scrollYProgress } = useScroll()
  const parallaxY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
           <a href="/">
           
            <img src="/placeholder.svg?height=40&width=40" alt="AYUSH Botanicum Logo" className="h-10 w-10"/>
            <h1 className="text-2xl font-bold text-emerald-800 dark:text-emerald-400">AYUSH Botanicum</h1>
            </a>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="/home" className="text-emerald-700 dark:text-emerald-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">Home</a>
            <a href="/plants" className="text-emerald-700 dark:text-emerald-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">Plants</a>
            <a href="/blog" className="text-emerald-700 dark:text-emerald-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">Blog</a>
            <a href="/shop" className="text-emerald-700 dark:text-emerald-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">Shop</a>
            <a href="/communtity" className="text-emerald-700 dark:text-emerald-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">Community</a>
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
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white dark:bg-gray-800 shadow-lg absolute top-16 left-0 right-0 z-40"
        >
          <nav className="flex flex-col p-4 space-y-4">
            <a href="#" className="text-emerald-700 dark:text-emerald-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">Home</a>
            <a href="#" className="text-emerald-700 dark:text-emerald-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">Plants</a>
            <a href="#" className="text-emerald-700 dark:text-emerald-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">Blog</a>
            <a href="#" className="text-emerald-700 dark:text-emerald-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">Shop</a>
            <a href="#" className="text-emerald-700 dark:text-emerald-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">Community</a>
            <form className="flex items-center">
              <Input type="search" placeholder="Search plants..." className="rounded-r-none" />
              <Button type="submit" variant="default" className="rounded-l-none">
                <Search className="h-4 w-4" />
                <span className="sr-only">Search</span>
              </Button>
            </form>
          </nav>
        </motion.div>
      )}

      <main className="bg-sage-50 dark:bg-gray-900 text-emerald-900 dark:text-emerald-100">
        <section className="relative h-[80vh] overflow-hidden">
          <motion.div style={{ y: parallaxY }} className="absolute inset-0">
            <img
              src="/placeholder.svg?height=1080&width=1920&text=Lush+Herbal+Garden"
              alt="Lush herbal garden"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold mb-4"
              >
                Discover the Healing Power of Nature
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl mb-8"
              >
                Explore our virtual garden of AYUSH medicinal plants
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                  Start Exploring
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Featured Medicinal Plants</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="bg-sage-100 dark:bg-gray-700 rounded-lg overflow-hidden shadow-md"
                >
                  <img
                    src={`/placeholder.svg?height=300&width=400&text=Plant+${i}`}
                    alt={`Medicinal Plant ${i}`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">Medicinal Plant {i}</h3>
                    <p className="text-emerald-700 dark:text-emerald-300 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <Button variant="outline" className="w-full">Learn More</Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-sage-100 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Explore Our Virtual Garden</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative">
                <img
                  src="/placeholder.svg?height=600&width=800&text=Interactive+3D+Garden"
                  alt="Interactive 3D Garden"
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                    <PlayCircle className="mr-2 h-5 w-5" />
                    Start 360° Tour
                  </Button>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Immerse Yourself in Nature</h3>
                <p className="text-lg mb-6">
                  Experience our virtual 3D garden and discover the rich diversity of AYUSH medicinal plants. 
                  Interact with each plant to learn about its properties, uses, and cultural significance.
                </p>
                <div className="flex space-x-4">
                  <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                    <Volume2 className="mr-2 h-5 w-5" />
                    Audio Guide
                  </Button>
                  <Button variant="outline">
                    <PlayCircle className="mr-2 h-5 w-5" />
                    Watch Video Tour
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Learn and Engage</h2>
            <Tabs defaultValue="quiz" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="quiz">Quiz</TabsTrigger>
                <TabsTrigger value="forum">Forum</TabsTrigger>
                <TabsTrigger value="blog">Blog</TabsTrigger>
              </TabsList>
              <TabsContent value="quiz">
                <Card>
                  <CardHeader>
                    <CardTitle>Test Your Knowledge</CardTitle>
                    <CardDescription>Take a quick quiz about AYUSH medicinal plants.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Sample quiz question goes here...</p>
                  </CardContent>
                  <CardFooter>
                    <Button>Start Quiz</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="forum">
                <Card>
                  <CardHeader>
                    <CardTitle>Community Forum</CardTitle>
                    <CardDescription>Join discussions about herbal medicine and AYUSH practices.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Recent forum topics go here...</p>
                  </CardContent>
                  <CardFooter>
                    <Button>Join Forum</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="blog">
                <Card>
                  <CardHeader>
                    <CardTitle>Latest Blog Posts</CardTitle>
                    <CardDescription>Read our latest articles on AYUSH and herbal medicine.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Recent blog post previews go here...</p>
                  </CardContent>
                  <CardFooter>
                    <Button>Read More</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="py-16 bg-sage-100 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i}>
                  <CardHeader>
                    <img
                      src={`/placeholder.svg?height=200&width=200&text=Product+${i}`}
                      alt={`Product ${i}`}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                  </CardHeader>
                  <CardContent>
                    <CardTitle>Herbal Product {i}</CardTitle>
                    <CardDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardDescription>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <span className="text-lg font-bold">$19.99</span>
                    <Button>Add to Cart</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-emerald-900 dark:bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">AYUSH Botanicum</h3>
              <p>Exploring the healing wisdom of traditional Indian medicine through our virtual herbal garden.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-emerald-300 transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-emerald-300 transition-colors">Plants Database</a></li>
                <li><a href="#" className="hover:text-emerald-300 transition-colors">Virtual Garden Tour</a></li>
                <li><a href="#" className="hover:text-emerald-300 transition-colors">About AYUSH</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
              <p className="mb-4">Stay updated with our latest discoveries and events.</p>
              <form className="flex">
                <Input type="email" placeholder="Enter your email" className="rounded-r-none" />
                <Button type="submit" className="bg-emerald-600 hover:bg-emerald-700 rounded-l-none">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
          <div className="mt-8 text-center text-emerald-300 dark:text-emerald-400">
            <p>&copy; 2023 AYUSH Botanicum. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}