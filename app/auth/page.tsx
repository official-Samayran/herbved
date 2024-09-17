'use client';
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Eye, EyeOff, Facebook, Github, Twitter } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
/* import { Label } from "@/components/ui/label" */
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
/* import { Checkbox } from "@/components/ui/checkbox" */

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen bg-sage-50 dark:bg-gray-900 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
          <div className="p-6 sm:p-8">
            <div className="flex justify-center mb-8">
              <img src="/favicon.ico" alt="HerbVed Logo" className="h-12 w-15" />
            </div>
            <h2 className="text-3xl font-bold text-center text-emerald-800 dark:text-emerald-400 mb-6">
              Welcome to HerbVed
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
                {/*       <Label htmlFor="email">Email</Label> */}
                <input type="email"  name='Enter your email'/> 
                      <Input id="email" type="email" placeholder="Enter your email" required />
                    </div>
                    <div className="space-y-2">
                     {/*  <Label htmlFor="password">Password</Label> */}
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
                    {/*     <Checkbox id="remember" />
                        <Label htmlFor="remember">Remember me</Label> */}
                      </div>
                      <a href="#" className="text-sm text-emerald-600 hover:underline">
                        Forgot password?
                      </a>
                    </div>
                    <Button  type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700">
                    <a href="/profile"> 
                    Sign In
                    </a>
                    </Button>
                  
                  </div>
                </form>
              </TabsContent>
              <TabsContent value="signup">
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-4">
                    <div className="space-y-2">
              {/*         <Label htmlFor="signup-name">Full Name</Label> */}
                      <Input id="signup-name" type="text" placeholder="Enter your full name" required />
                    </div>
                    <div className="space-y-2">
                      {/* <Label htmlFor="signup-email">Email</Label> */}
                      <Input id="signup-email" type="email" placeholder="Enter your email" required />
                    </div>
                    <div className="space-y-2">
                      {/* <Label htmlFor="signup-password">Password</Label> */}
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
                   {/*    <Checkbox id="terms" required />
                      <Label htmlFor="terms">
                        I agree to the{" "}
                        <a href="#" className="text-emerald-600 hover:underline">
                          Terms of Service
                        </a>{" "}
                        and{" "}
                        <a href="#" className="text-emerald-600 hover:underline">
                          Privacy Policy
                        </a>
                      </Label> */}
                    </div>
                    <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700">
                      <a href="/profile">Sign Up</a>
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
        </div>
      </motion.div>
    </div>
  )
}
