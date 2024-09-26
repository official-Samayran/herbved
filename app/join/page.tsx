'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from 'next/link'

export default function JoinFormWithVideo() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    experience: '',
    motivation: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleRoleChange = (value: string) => {
    setFormData(prevData => ({
      ...prevData,
      role: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      role: '',
      experience: '',
      motivation: ''
    })
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/head2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <div className="relative z-10 w-full max-w-2xl">
          <div className="absolute inset-0 backdrop-blur-md rounded-lg"></div>
          <Card className="relative bg-gray-800/80 border-gray-700">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center text-blue-400">Join Our Team</CardTitle>
              <CardDescription className="text-center text-silver-300">
                Become a part of our creative team and help shape the future of digital storytelling
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-blue-300">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-blue-300">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role" className="text-blue-300">Desired Role</Label>
                  <Select onValueChange={handleRoleChange} value={formData.role}>
                    <SelectTrigger className="bg-gray-700/50 border-gray-600 text-gray">
                      <SelectValue placeholder="Select your desired role" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-700 border-gray-600 text-white">
                      <SelectItem value="filmmaker">Filmmaker</SelectItem>
                      <SelectItem value="musician">Musician</SelectItem>
                      <SelectItem value="vfx-artist">VFX Artist</SelectItem>
                      <SelectItem value="sound-designer">Sound Designer</SelectItem>
                      <SelectItem value="writer">Writer</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="experience" className="text-blue-300">Relevant Experience</Label>
                  <Textarea
                    id="experience"
                    name="experience"
                    placeholder="Briefly describe your relevant experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="motivation" className="text-blue-300">Why do you want to join TTV?</Label>
                  <Textarea
                    id="motivation"
                    name="motivation"
                    placeholder="Tell us why you're excited to join The Trending Vision"
                    value={formData.motivation}
                    onChange={handleInputChange}
                    className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400"
                  />
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Link href="/submitted">
              <Button 
                type="submit" 
                className="w-full bg-blue-500 hover:bg-blue-400 text-white transition-colors duration-300"
              >
                Submit Application
              </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}