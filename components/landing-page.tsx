'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Input } from './ui/input';
import { Button } from './ui/button';

export function LandingPageComponent() {
  const [isActive, setIsActive] = useState(true);
  const [isMuted, setIsMuted] = useState(true); // State to manage mute status
  const [isBlurred, setIsBlurred] = useState(true); // State to manage blur status
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleActivity = () => {
      setIsActive(true);
      setIsMuted(true); // Mute video when active
      setIsBlurred(true); // Blur video when active
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setIsActive(false);
        setIsMuted(false); // Unmute video when fading out
        setIsBlurred(false); // Unblur video when fading out
      }, 3000);
    };

    window.addEventListener('mousemove', handleActivity);
    window.addEventListener('scroll', handleActivity);

    return () => {
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('scroll', handleActivity);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Navigation */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.1 }}
            className="relative z-10 text-center"
          >
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
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/XO8wew38VM8?autoplay=1&loop=1&playlist=XO8wew38VM8"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          className={`absolute w-full h-full object-cover ${isBlurred ? 'blur-sm' : ''}`} // Apply blur based on state
          style={{ filter: isBlurred ? 'blur(10px)' : 'none' }} // Alternative way to apply blur
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-70"></div>

        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="relative z-10 text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-4 text-blue-400 leading-tight">
                Welcome to <br />
                <span className="text-purple-400">The Trending Vision</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-silver-400">Where Films and Music Meet the Future</p>
              <Link
                href="/latest-project"
                className="bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-400 transition-colors duration-300 inline-block"
              >
                Explore Our Latest Project
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
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
                <li><Link href="/blog" className="text-silver-300 hover:text-blue-400 transition-colors duration-300">Blog</Link></li>
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
  );
}
