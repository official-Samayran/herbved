<<<<<<< HEAD
'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Instagram, Youtube, Mail, MapPin, Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function BlogsComponent() {
  const [searchTerm, setSearchTerm] = useState("")

  const blogPosts = [
    {
      title: "The Future of Music Videos in the Digital Age",
      excerpt: "Exploring how technology is reshaping the way we create and consume music videos.",
      author: "Alex Johnson",
      date: "2023-09-15",
      category: "Music",
      image: "/placeholder.svg?height=400&width=600"
    },
    {
      title: "Behind the Scenes: Making of 'Neon Dreams'",
      excerpt: "A deep dive into the creative process and technical challenges of our latest music video.",
      author: "Samantha Lee",
      date: "2023-08-28",
      category: "Production",
      image: "/placeholder.svg?height=400&width=600"
    },
    {
      title: "The Rise of Interactive Storytelling in Film",
      excerpt: "How interactive elements are changing the landscape of modern filmmaking.",
      author: "Marcus Chen",
      date: "2023-08-10",
      category: "Film",
      image: "/placeholder.svg?height=400&width=600"
    },
    {
      title: "5 Emerging Technologies Shaping the Future of VFX",
      excerpt: "From AI-powered tools to real-time rendering, discover the tech revolutionizing visual effects.",
      author: "Olivia Patel",
      date: "2023-07-22",
      category: "Technology",
      image: "/placeholder.svg?height=400&width=600"
    },
    {
      title: "The Art of Sound Design in Immersive Experiences",
      excerpt: "Exploring the crucial role of audio in creating truly immersive digital environments.",
      author: "Alex Johnson",
      date: "2023-07-05",
      category: "Audio",
      image: "/placeholder.svg?height=400&width=600"
    },
    {
      title: "Sustainability in Film Production: Our Commitment",
      excerpt: "How The Trending Vision is working towards more environmentally friendly production practices.",
      author: "Samantha Lee",
      date: "2023-06-18",
      category: "Company News",
      image: "/placeholder.svg?height=400&width=600"
    }
  ]

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.author.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Navigation */}
      <nav className="bg-gray-800 shadow-md">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-blue-400">The Trending Vision</Link>
            <div className="hidden md:flex space-x-6">
                    {['About Us', 'Projects', 'Blogs', 'Contact Us'].map((item) => {
                      const paths: { [key: string]: string } = {
                        'About Us': '/about',
                        'Projects': 'https://www.youtube.com/@Samayran', // External YouTube link for "Projects"
                        'Blogs': '/blog',
                        'Contact Us': '/contact',
                      };

                      const isExternalLink = item === 'Projects';  // Check if it's an external link

                      return (
                        <a
                          key={item}
                          href={paths[item]}
                          target={isExternalLink ? '_blank' : '_self'}
                          rel={isExternalLink ? 'noopener noreferrer' : undefined}
                          className="text-sm uppercase tracking-wider hover:text-blue-400 transition-colors duration-300"
                        >
                          {item}
                        </a>
                      );
                    })}
                  </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-blue-400">TTV Blogs</h1>
          <p className="text-xl md:text-2xl mb-8 text-silver-300 max-w-3xl mx-auto">
            Insights, behind-the-scenes, and industry trends from The Trending Vision team.
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-10 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex items-center max-w-md mx-auto">
            <Input
              type="text"
              placeholder="Search blogs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-grow bg-gray-700 text-white border-gray-600 focus:border-blue-400"
            />
            <Button className="ml-2 bg-blue-500 hover:bg-blue-400">
              <Search size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 overflow-hidden">
                <CardContent className="p-0">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <p className="text-sm text-purple-400 mb-2">{post.category}</p>
                    <h3 className="text-xl font-semibold mb-2 text-blue-400">{post.title}</h3>
                    <p className="text-sm text-silver-300 mb-4">{post.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <p className="text-xs text-gray-400">{post.author} • {post.date}</p>
                      <Button variant="outline" className="text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-white">
                        Read More
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8 text-purple-400">Stay Updated</h2>
          <p className="text-xl text-silver-300 max-w-2xl mx-auto mb-8">
            Subscribe to our newsletter for the latest insights, behind-the-scenes content, and exclusive offers.
          </p>
          <form className="max-w-md mx-auto flex">
            <Input
              type="email"
              placeholder="Your email address"
              className="flex-grow bg-gray-700 text-white border-gray-600 focus:border-blue-400"
            />
            <Button type="submit" className="ml-2 bg-purple-500 hover:bg-purple-400 text-white">
              Subscribe
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">The Trending Vision</h3>
              <p className="text-silver-300">
                Where Films and Music Meet the Future
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-purple-400">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-silver-300 hover:text-blue-400 transition-colors duration-300">About Us</Link></li>
                <li><Link href="/projects" className="text-silver-300 hover:text-blue-400 transition-colors duration-300">Our Projects</Link></li>
                <li><Link href="/blogs" className="text-silver-300 hover:text-blue-400 transition-colors duration-300">Blog</Link></li>
                <li><Link href="/careers" className="text-silver-300 hover:text-blue-400 transition-colors duration-300">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">Newsletter</h3>
              <p className="text-silver-300 mb-4">Stay updated with our latest news and offers.</p>
              <form className="flex">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow bg-gray-700 text-white border-gray-600 focus:border-blue-400"
                />
                <Button type="submit" className="ml-2 bg-purple-500 hover:bg-purple-400 text-white">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
          <div className="mt-8 text-center text-silver-300">
            <p>&copy; {new Date().getFullYear()} The Trending Vision. All rights reserved.</p>
          </div>
=======
"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, MessageCircle, Share2, Send, MoreVertical, User } from 'lucide-react'
import { Button } from "@/components/ui/button"
/* import { Input } from "@/components/ui/input" */
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'
///Arpit: implement below components needed
 
/* import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Textarea } from "@/components/ui/textarea" */

const blogPosts = [
  {
    id: 1,
    title: "The Healing Power of Tulsi",
    author: "Dr. Ayush Kumar",
    date: "May 15, 2023",
    content: "Tulsi, also known as Holy Basil, has been revered in Ayurveda for thousands of years. This article explores its numerous health benefits and how to incorporate it into your daily routine.",
    image: "/tulsi.jpg?height=300&width=500&text=Tulsi+Plant",
    likes: 124,
    comments: [
      { id: 1, author: "Priya Sharma", content: "I've been using Tulsi in my tea for years. It's amazing!" },
      { id: 2, author: "Rahul Verma", content: "Great article! Can you please share more about its cultivation?" }
    ]
  },
  {
    id: 2,
    title: "Ashwagandha: The Stress-Busting Herb",
    author: "Dr. Meera Patel",
    date: "June 2, 2023",
    content: "Ashwagandha is an ancient medicinal herb with multiple health benefits. This post delves into its stress-reducing properties and other potential health improvements.",
    image: "/ashwagandha.jpg?height=100&width=200&text=Ashwagandha",
    likes: 98,
    comments: [
      { id: 1, author: "Amit Singh", content: "I've noticed a significant improvement in my sleep quality since taking Ashwagandha." }
    ]
  },
  {
    id: 3,
    title: "Exploring the Benefits of Brahmi",
    author: "Dr. Rajesh Gupta",
    date: "June 10, 2023",
    content: "Brahmi is a powerful herb known for its cognitive-enhancing properties. Learn about its benefits for memory, focus, and overall brain health in this comprehensive guide.",
    image: "/brahmi.jpg?height=300&width=500&text=Brahmi+Leaves",
    likes: 156,
    comments: []
  }
]

export default function BlogPage() {
  const [posts, setPosts] = useState(blogPosts)

  const handleLike = (postId: number) => {
    setPosts(posts.map(post => 
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    ))
  }

  const handleComment = (postId: number, comment: string) => {
    setPosts(posts.map(post => 
      post.id === postId ? { 
        ...post, 
        comments: [...post.comments, { id: post.comments.length + 1, author: "You", content: comment }]
      } : post
    ))
  }

  const handleShare = (postId: number) => {
    // Implement sharing functionality here
    console.log(`Sharing post ${postId}`)
  }

  return (
   
    <div className="min-h-screen bg-sage-50 dark:bg-gray-900 text-emerald-900 dark:text-emerald-100">
    {/* Header */}
    <header className="bg-white shadow-md  dark:bg-gray-800 shadow-sm sticky top-0 z-50">
     <div className="container mx-auto px-4 py-4 flex justify-between items-center">
       <div className="flex items-center space-x-4">
        <a href="/"> <Image src="/favicon.ico?height=40&width=40" alt="HerbVed Logo "  width={500} height={500} className="h-10 w-10" />
        </a>
         <h1 className="text-3xl font-bold text-emerald-800 dark:text-emerald-400"><a href="/blog">Blogs</a></h1>
       </div>
       <nav className="hidden md:flex space-x-6">
         <a href="/" className="text-emerald-700 dark:text-emerald-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">Home</a>
         <a href="/community" className="text-emerald-700 dark:text-emerald-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">Community</a>
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
        <div className="grid gap-8">
          {posts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardHeader>
                  {
                  /////////////////////////////
                  /* <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{post.title}</CardTitle>
                      <CardDescription>
                        By {post.author} | {post.date}
                      </CardDescription>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="h-4 w-4" />
                          <span className="sr-only">More options</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Save post</DropdownMenuItem>
                        <DropdownMenuItem>Report</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div> */}
                </CardHeader>
                <CardContent>
                  <img src={post.image} alt={post.title} className="w-full h-64 object-cover rounded-lg mb-4" />
                  <p>{post.content}</p>
                </CardContent>
                <CardFooter className="flex flex-col items-start">
                  <div className="flex justify-between w-full mb-4">
                    <Button variant="ghost" onClick={() => handleLike(post.id)}>
                      <Heart className="h-4 w-4 mr-2" />
                      {post.likes} Likes
                    </Button>
                    <Button variant="ghost">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      {post.comments.length} Comments
                    </Button>
                    <Button variant="ghost" onClick={() => handleShare(post.id)}>
                      <Share2 className="h-4 w-4 mr-2" />
                      Share
                    </Button>
                  </div>
                  <div className="w-full">
                    <h3 className="font-semibold mb-2">Comments</h3>
                    {post.comments.map((comment) => (
                      <div key={comment.id} className="flex items-start space-x-2 mb-2">
                        <Avatar>
                          <AvatarFallback>{comment.author[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <p className="font-semibold">{comment.author}</p>
                          <p>{comment.content}</p>
                        </div>
                      </div>
                    ))}
                    <form
                      onSubmit={(e) => {
                        e.preventDefault()
                        const comment = (e.target as HTMLFormElement).comment.value
                        if (comment.trim()) {
                          handleComment(post.id, comment)
                          ;(e.target as HTMLFormElement).reset()
                        }
                      }}
                      className="mt-4"
                    >
                      <div className="flex items-center space-x-2">
                      {/*   <Textarea
                          name="comment"
                          placeholder="Add a comment..."
                          className="flex-1"
                        /> */}
                        <Button type="submit" size="icon">
                          <Send className="h-4 w-4" />
                          <span className="sr-only">Post comment</span>
                        </Button>
                      </div>
                    </form>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </main>

      <footer className="bg-emerald-900 dark:bg-gray-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 HerbVed Blog. All rights reserved.</p>
>>>>>>> a7e3686 (Initial commit for Virtual Garden project)
        </div>
      </footer>
    </div>
  )
<<<<<<< HEAD
}
=======
}
>>>>>>> a7e3686 (Initial commit for Virtual Garden project)
