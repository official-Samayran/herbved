//virtual tours
'use client';
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, User } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
///Arpit: below compent need
/* import { Slider } from "@/components/ui/slider" */
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from 'next/image';

const videoTours = [
  { id: 1, title: "Welcome to HerbVed", duration: "5:30", thumbnail: "/placeholder.svg?height=200&width=300&text=Welcome" },
  { id: 2, title: "Medicinal Herbs Garden", duration: "8:45", thumbnail: "/placeholder.svg?height=200&width=300&text=Herbs+Garden" },
  { id: 3, title: "Ayurvedic Plants Section", duration: "7:15", thumbnail: "/placeholder.svg?height=200&width=300&text=Ayurvedic+Plants" },
  { id: 4, title: "Rare Species Conservatory", duration: "6:20", thumbnail: "/placeholder.svg?height=200&width=300&text=Rare+Species" },
  { id: 5, title: "Healing Plants Walkthrough", duration: "9:10", thumbnail: "/placeholder.svg?height=200&width=300&text=Healing+Plants" },
  { id: 6, title: "Seasonal Herbs Showcase", duration: "4:55", thumbnail: "/placeholder.svg?height=200&width=300&text=Seasonal+Herbs" },
]

export default function VideoTour() {
  const [currentVideo, setCurrentVideo] = useState(videoTours[0])
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [volume, setVolume] = useState(100)

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
    // Here you would typically start or pause the actual video playback
  }

  const handleMute = () => {
    setIsMuted(!isMuted)
    // Here you would typically mute or unmute the actual video
  }

  const handleVolumeChange = (newVolume: number[]) => {
    setVolume(newVolume[0])
    // Here you would typically change the actual video volume
  }

  const handleTimeChange = (newTime: number[]) => {
    setCurrentTime(newTime[0])
    // Here you would typically seek the actual video to the new time
  }

  const handleNextVideo = () => {
    const currentIndex = videoTours.findIndex(video => video.id === currentVideo.id)
    const nextIndex = (currentIndex + 1) % videoTours.length
    setCurrentVideo(videoTours[nextIndex])
    setCurrentTime(0)
    setIsPlaying(true)
  }

  const handlePreviousVideo = () => {
    const currentIndex = videoTours.findIndex(video => video.id === currentVideo.id)
    const previousIndex = (currentIndex - 1 + videoTours.length) % videoTours.length
    setCurrentVideo(videoTours[previousIndex])
    setCurrentTime(0)
    setIsPlaying(true)
  }

  return (
<div className="min-h-screen bg-sage-50 dark:bg-gray-900 text-emerald-900 dark:text-emerald-100">
       {/* Header */}
       <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
           <a href="/"> <Image src="/favicon.ico?height=40&width=40" alt="HerbVed Logo "  width={500} height={500} className="h-10 w-10" />
           </a>
            <h1 className="text-3xl font-bold text-emerald-800 dark:text-emerald-400"><a href="/virtual-tour">Virtual Tour</a></h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="/" className="text-emerald-700 dark:text-emerald-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">Home</a>
            <a href="/blog" className="text-emerald-700 dark:text-emerald-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">Blog</a>
            <a href="/community" className="text-emerald-700 dark:text-emerald-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">Community</a>
            <a href="/shop" className="text-emerald-700 dark:text-emerald-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">Shop</a>
            <a href="/virtual-garden" className="text-emerald-700 dark:text-emerald-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">Virtual Garden</a>
            <Button variant="ghost" size="icon">
             <a href="/profile"> <User className="h-5 w-5" />
             </a>
            </Button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card className="overflow-hidden">
              <div className="relative aspect-video bg-black">
                <Image
                  src={currentVideo.thumbnail}
                  alt={currentVideo.title}
                  className="w-full h-full object-cover"
                  width={500} height={500}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button
                    variant="secondary"
                    size="icon"
                    className="w-16 h-16 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white"
                    onClick={handlePlayPause}
                  >
                    {isPlaying ? (
                      <Pause className="h-8 w-8" />
                    ) : (
                      <Play className="h-8 w-8" />
                    )}
                  </Button>
                </div>
              </div>
              <CardContent className="p-4">
                <h2 className="text-2xl font-bold mb-2">{currentVideo.title}</h2>
                <div className="flex items-center space-x-4 mb-4">
                  <Button variant="outline" size="icon" onClick={handlePreviousVideo}>
                    <SkipBack className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" onClick={handlePlayPause}>
                    {isPlaying ? (
                      <Pause className="h-4 w-4" />
                    ) : (
                      <Play className="h-4 w-4" />
                    )}
                  </Button>
                  <Button variant="outline" size="icon" onClick={handleNextVideo}>
                    <SkipForward className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" onClick={handleMute}>
                    {isMuted ? (
                      <VolumeX className="h-4 w-4" />
                    ) : (
                      <Volume2 className="h-4 w-4" />
                    )}
                  </Button>
                  {/* <Slider
                    min={0}
                    max={100}
                    step={1}
                    value={[volume]}
                    onValueChange={handleVolumeChange}
                    className="w-[100px]"
                  /> */}
                </div>
                {/* <Slider
                  min={0}
                  max={parseFloat(currentVideo.duration.split(':')[0]) * 60 + parseFloat(currentVideo.duration.split(':')[1])}
                  step={1}
                  value={[currentTime]}
                  onValueChange={handleTimeChange}
                  className="w-full"
                /> */}
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>{formatTime(currentTime)}</span>
                  <span>{currentVideo.duration}</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Video Tour Playlist</CardTitle>
                <CardDescription>Explore our virtual garden through guided video tours</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="all" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="all">All Videos</TabsTrigger>
                    <TabsTrigger value="favorites">Favorites</TabsTrigger>
                  </TabsList>
                  <TabsContent value="all">
                    <div className="space-y-4">
                      {videoTours.map((video) => (
                        <motion.div
                          key={video.id}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className={`flex items-center space-x-4 p-2 rounded-lg cursor-pointer ${
                            currentVideo.id === video.id ? 'bg-emerald-100 dark:bg-emerald-900' : ''
                          }`}
                          onClick={() => setCurrentVideo(video)}
                        >
                          <Image
                            src={video.thumbnail}
                            alt={video.title}
                            className="w-20 h-12 object-cover rounded"
                            width={500} height={500}
                          />
                          <div>
                            <h3 className="font-semibold">{video.title}</h3>
                            <p className="text-sm text-gray-500">{video.duration}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="favorites">
                    <p className="text-center text-gray-500 py-4">No favorites yet. Start adding some!</p>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <footer className="bg-emerald-900 dark:bg-gray-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 HerbVed Video Tours. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

function formatTime(seconds: number): string {
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = Math.floor(seconds % 60)
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
}
