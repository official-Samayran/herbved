'use client'

import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

export default function ApplicationSubmittedComponent() {
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
        <div className="relative z-10 w-full max-w-md">
          <div className="absolute inset-0 backdrop-blur-md rounded-lg"></div>
          <Card className="relative bg-gray-800/80 border-gray-700">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center text-blue-400">Application Submitted!</CardTitle>
              <CardDescription className="text-center text-silver-300">
                Thank you for your interest in joining The Trending Vision
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-white mb-4">
                We've received your application and will review it shortly. Our team will be in touch with you soon.
              </p>
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <p className="text-gray-300 text-sm">
                Application ID: <span className="font-mono font-bold">TTV-{Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
              </p>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button 
                onClick={() => window.location.href = '/'}
                className="bg-blue-500 hover:bg-blue-400 text-white transition-colors duration-300"
              >
                Return to Home
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}