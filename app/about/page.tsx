'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Instagram, Youtube, Mail, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutUsComponent() {
  const teamMembers = [
    {
      name: "Priyanshu Tiwari",
      role: "Founder & Creative Director",
      bio: "Priyanshu Tiwari is the Founder and Creative Director of The Trending Vision, bringing creativity and innovation to the forefront of film and music production.",
      image: "/priyanshu.heic"
    },
    {
      name: "Samayran Singh",
      role: "Co-Founder & DOP",
      bio: "Samayran Singh, Co-Founder and Director of Photography at The Trending Vision, blends visual creativity with technical expertise to bring stories to life through film.",
      image: "/samayran.webp"
    },
    {
      name: "Sakshi Mishra",
      role: "Social Media Manager & Designer",
      bio: "Sakshi Mishra, Social Media Manager and Designer at The Trending Vision, curates the team's online presence and ensures all designs reflect their creative vision.",
      image: "/sakshi.jpeg"
    },
    {
      name: "Ankit Singh",
      role: "Musician, Guitarist & Vocal Artist",
      bio: "Ankit Singh, musician, guitarist, and vocal artist at The Trending Vision, brings his diverse musical talents to the team's film and music projects.",
      image: "/ankit.heic"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
            <div className="text-2xl font-bold text-blue-400">The Trending Vision</div>
            </Link>
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
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-blue-400">About The Trending Vision</h1>
          <p className="text-xl md:text-2xl mb-8 text-silver-300 max-w-3xl mx-auto">
            Where innovation meets creativity in the world of films and music.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8 text-center text-purple-400">Our Story</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-silver-300 mb-6">
                Founded in 2015, The Trending Vision began as a small collective of filmmakers and musicians with a shared dream: to create immersive, boundary-pushing content that merges the worlds of visual and auditory art.
              </p>
              <p className="text-lg text-silver-300 mb-6">
                Over the years, we've grown into a full-fledged production house, collaborating with artists, brands, and visionaries from around the globe. Our work spans music videos, short films, commercials, and experimental pieces that challenge the status quo.
              </p>
              <p className="text-lg text-silver-300">
                At TTV, we believe in the power of storytelling to inspire, provoke thought, and create lasting impressions. Every project we undertake is an opportunity to push our creative limits and deliver something truly unique.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/about.webp"
                alt="The Trending Vision Studio"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center text-blue-400">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={300}
                    height={400}
                    className="w-full h-64 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2 text-blue-400">{member.name}</h3>
                  <p className="text-sm text-purple-400 mb-3">{member.role}</p>
                  <p className="text-sm text-pink-300">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8 text-purple-400">Join Our Team</h2>
          <p className="text-xl text-silver-300 max-w-3xl mx-auto mb-12">
            To revolutionize digital storytelling by seamlessly blending cutting-edge visuals with immersive soundscapes, creating experiences that resonate with audiences on a profound level.
          </p>
          <Link href="/join">
          <Button className="bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-400 transition-colors duration-300">
            Join Us
          </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">Contact Us</h3>
              <p className="text-silver-300 flex items-center mb-2">
                <Mail size={18} className="mr-2" />
                info@trendingvision.com
              </p>
              <p className="text-silver-300 flex items-center">
                <MapPin size={18} className="mr-2" />
                123 Trending Street, Visionary City, 12345
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-purple-400">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/projects" className="text-silver-300 hover:text-blue-400 transition-colors duration-300">Our Projects</Link></li>
                <li><Link href="/music" className="text-silver-300 hover:text-blue-400 transition-colors duration-300">Music Production</Link></li>
                <li><Link href="/careers" className="text-silver-300 hover:text-blue-400 transition-colors duration-300">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-silver-300 hover:text-blue-400 transition-colors duration-300">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-silver-300 hover:text-blue-400 transition-colors duration-300">
                  <Youtube size={24} />
                </a>
              </div>
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