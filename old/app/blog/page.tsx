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
        </div>
      </footer>
    </div>
  )
}
