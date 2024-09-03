import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, MessageCircle, Share2, Send, MoreVertical } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Textarea } from "@/components/ui/textarea"

const blogPosts = [
  {
    id: 1,
    title: "The Healing Power of Tulsi",
    author: "Dr. Ayush Kumar",
    date: "May 15, 2023",
    content: "Tulsi, also known as Holy Basil, has been revered in Ayurveda for thousands of years. This article explores its numerous health benefits and how to incorporate it into your daily routine.",
    image: "/placeholder.svg?height=300&width=500&text=Tulsi+Plant",
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
    image: "/placeholder.svg?height=300&width=500&text=Ashwagandha",
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
    image: "/placeholder.svg?height=300&width=500&text=Brahmi+Leaves",
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
      <header className="bg-white dark:bg-gray-800 shadow-sm py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-emerald-800 dark:text-emerald-400">AYUSH Botanicum Blog</h1>
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
                  <div className="flex justify-between items-start">
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
                  </div>
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
                        <Textarea
                          name="comment"
                          placeholder="Add a comment..."
                          className="flex-1"
                        />
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
          <p>&copy; 2023 AYUSH Botanicum Blog. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
