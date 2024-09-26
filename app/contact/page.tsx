'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Instagram, Youtube, Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ContactUsComponent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    // Reset form after submission
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Navigation */}
      <nav className="bg-gray-800 shadow-md">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-blue-400">The Trending Vision</Link>
            <div className="hidden md:flex space-x-6">
                    {['About Us', 'Projects', 'Blog', 'Contact Us'].map((item) => {
                      const paths: { [key: string]: string } = {
                        'About Us': '/about',
                        'Projects': 'https://www.youtube.com/@Samayran', // External YouTube link for "Projects"
                        'Blog': '/blog',
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
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-blue-400">Contact Us</h1>
          <p className="text-xl md:text-2xl mb-8 text-silver-300 max-w-3xl mx-auto">
            Get in touch with The Trending Vision team. We're here to answer your questions and explore potential collaborations.
          </p>
        </div>
      </section>

    

      {/* Map Section */}
      <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-gray-700 border-gray-600">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6 text-purple-400">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-silver-300 mb-1">Name</label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-gray-600 text-white border-gray-500 focus:border-blue-400"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-silver-300 mb-1">Email</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-gray-600 text-white border-gray-500 focus:border-blue-400"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-silver-300 mb-1">Subject</label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full bg-gray-600 text-white border-gray-500 focus:border-blue-400"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-silver-300 mb-1">Message</label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full bg-gray-600 text-white border-gray-500 focus:border-blue-400"
                      rows={4}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-400 text-white">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-blue-400">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-purple-400 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-silver-300">Address</h3>
                    <p className="text-gray-400">123 Trending Street, Visionary City, 12345, Country</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-purple-400 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-silver-300">Phone</h3>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-purple-400 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-silver-300">Email</h3>
                    <p className="text-gray-400">info@trendingvision.com</p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold mt-12 mb-6 text-blue-400">Follow Us</h2>
              <div className="flex space-x-4">
                <a href="#" className="text-silver-300 hover:text-blue-400 transition-colors duration-300">
                  <Instagram size={32} />
                </a>
                <a href="#" className="text-silver-300 hover:text-blue-400 transition-colors duration-300">
                  <Youtube size={32} />
                </a>
              </div>
            </div>
          </div>
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