//forum edited
'use client';
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageSquare, Rss, Search, Plus, ThumbsUp, MessageCircle, Share2, MoreVertical, User } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from 'next/image';

//Arpit: needed components
/* import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea" */

const communityPosts = [
  {
    id: 1,
    author: "Ayush Kumar",
    avatar: "/placeholder.svg?height=40&width=40&text=AK",
    title: "Benefits of Ashwagandha for Stress Relief",
    content: "I've been using Ashwagandha for a month now, and I've noticed a significant reduction in my stress levels. Has anyone else had similar experiences?",
    likes: 24,
    comments: 8,
    shares: 3,
  },
  {
    id: 2,
    author: "Priya Sharma",
    avatar: "/placeholder.svg?height=40&width=40&text=PS",
    title: "Growing Tulsi at Home: Tips and Tricks",
    content: "I'm planning to start growing Tulsi at home. Any advice on the best soil, watering schedule, and sunlight requirements?",
    likes: 18,
    comments: 12,
    shares: 2,
  },
  {
    id: 3,
    author: "Rahul Verma",
    avatar: "/placeholder.svg?height=40&width=40&text=RV",
    title: "Ayurvedic Remedies for Digestive Issues",
    content: "Looking for natural Ayurvedic remedies to improve digestion. What herbs or practices do you recommend?",
    likes: 32,
    comments: 15,
    shares: 7,
  },
]

const feedPosts = [
  {
    id: 1,
    source: "AYUSH Ministry",
    title: "New Research on Turmeric's Anti-inflammatory Properties",
    summary: "Recent studies have shown promising results in turmeric's ability to reduce inflammation in various health conditions.",
    image: "/placeholder.svg?height=200&width=300&text=Turmeric+Research",
  },
  {
    id: 2,
    source: "Herbal Medicine Journal",
    title: "Traditional Use of Neem in Skin Care",
    summary: "Exploring the historical and modern applications of Neem in treating various skin conditions and promoting overall skin health.",
    image: "/placeholder.svg?height=200&width=300&text=Neem+Skincare",
  },
  {
    id: 3,
    source: "Ayurveda Today",
    title: "Seasonal Eating: Ayurvedic Perspective",
    summary: "Learn how to align your diet with the seasons according to Ayurvedic principles for optimal health and well-being.",
    image: "/placeholder.svg?height=200&width=300&text=Seasonal+Eating",
  },
]

export default function ForumPage() {
  const [activeTab, setActiveTab] = useState("community")

  return (
    <div className="min-h-screen bg-sage-50 dark:bg-gray-900 text-emerald-900 dark:text-emerald-100">
    {/* Header */}
    <header className="bg-white shadow-md">
     <div className="container mx-auto px-4 py-4 flex justify-between items-center">
       <div className="flex items-center space-x-4">
        <a href="/"> <Image src="/favicon.ico?height=40&width=40" alt="HerbVed Logo "  width={500} height={500} className="h-10 w-10" />
        </a>
         <h1 className="text-3xl font-bold text-emerald-800 dark:text-emerald-400"><a href="/community">Community</a></h1>
       </div>
       <nav className="hidden md:flex space-x-6">
         <a href="/" className="text-emerald-700 dark:text-emerald-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">Home</a>
         <a href="/blog" className="text-emerald-700 dark:text-emerald-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">Blog</a>
         <a href="/shop" className="text-emerald-700 dark:text-emerald-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">Shop</a>
         <a href="virtual-tour" className="text-emerald-700 dark:text-emerald-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">Virtual Tour</a>
         <a href="virtual-garden" className="text-emerald-700 dark:text-emerald-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">Virtual Garden</a>
         <Button variant="ghost" size="icon">
             <a href="/profile"> <User className="h-5 w-5" />
             </a>
            </Button>
       </nav>
     </div>
   </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="community" className="w-full" onValueChange={(value) => setActiveTab(value)}>
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="community">
              <MessageSquare className="h-5 w-5 mr-2" />
              Community
            </TabsTrigger>
            <TabsTrigger value="feeds">
              <Rss className="h-5 w-5 mr-2" />
              Feeds
            </TabsTrigger>
          </TabsList>

          <div className="flex justify-between items-center mb-6">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input type="search" placeholder="Search discussions..." className="pl-10" />
            </div>
            {/* <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="h-5 w-5 mr-2" />
                  New Post
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Create a New Post</DialogTitle>
                  <DialogDescription>Share your thoughts, questions, or experiences with the community.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="title">Title</Label>
                    <Input id="title" placeholder="Enter the title of your post" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="content">Content</Label>
                    <Textarea id="content" placeholder="Write your post content here..." />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Post</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>*/}

          </div> 

          <TabsContent value="community">
            <div className="space-y-6">
              {communityPosts.map((post) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card>
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarImage src={post.avatar} alt={post.author} />
                          <AvatarFallback>{post.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle>{post.title}</CardTitle>
                          <CardDescription>Posted by {post.author}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p>{post.content}</p>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <div className="flex space-x-4">
                        <Button variant="ghost" size="sm">
                          <ThumbsUp className="h-4 w-4 mr-2" />
                          {post.likes}
                        </Button>
                        <Button variant="ghost" size="sm">
                          <MessageCircle className="h-4 w-4 mr-2" />
                          {post.comments}
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Share2 className="h-4 w-4 mr-2" />
                          {post.shares}
                        </Button>
                      </div>
                     {/*  <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>Save Post</DropdownMenuItem>
                          <DropdownMenuItem>Report</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu> */}
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="feeds">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {feedPosts.map((post) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card>
                    <CardHeader>
                      <img src={post.image} alt={post.title} className="w-full h-40 object-cover rounded-t-lg" />
                    </CardHeader>
                    <CardContent>
                      <CardTitle>{post.title}</CardTitle>
                      <CardDescription className="mt-2">{post.source}</CardDescription>
                      <p className="mt-4">{post.summary}</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">Read More</Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="bg-emerald-900 dark:bg-gray-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 HerbVed Forum. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
