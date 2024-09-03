import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Info, Volume2, Maximize2, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"

const plants = [
  { id: 1, name: "Tulsi", scientificName: "Ocimum sanctum", description: "Tulsi, also known as Holy Basil, is revered for its medicinal properties in Ayurveda." },
  { id: 2, name: "Ashwagandha", scientificName: "Withania somnifera", description: "Ashwagandha is an ancient medicinal herb known for its stress-reducing and energy-boosting properties." },
  { id: 3, name: "Brahmi", scientificName: "Bacopa monnieri", description: "Brahmi is used in Ayurveda to improve memory, reduce anxiety, and treat epilepsy." },
  { id: 4, name: "Amla", scientificName: "Phyllanthus emblica", description: "Amla, or Indian Gooseberry, is a potent source of Vitamin C and is used to boost immunity." },
  { id: 5, name: "Neem", scientificName: "Azadirachta indica", description: "Neem is known for its antibacterial, antifungal, and blood-purifying properties." },
  { id: 6, name: "Shatavari", scientificName: "Asparagus racemosus", description: "Shatavari is known for its benefits to the female reproductive system and as a natural antioxidant." }
]

export default function VirtualGarden() {
  const [selectedPlant, setSelectedPlant] = useState(plants[0])
  const [isAudioPlaying, setIsAudioPlaying] = useState(false)
  const [zoomLevel, setZoomLevel] = useState(100)

  const handleNextPlant = () => {
    const currentIndex = plants.findIndex(plant => plant.id === selectedPlant.id)
    const nextIndex = (currentIndex + 1) % plants.length
    setSelectedPlant(plants[nextIndex])
  }

  const handlePreviousPlant = () => {
    const currentIndex = plants.findIndex(plant => plant.id === selectedPlant.id)
    const previousIndex = (currentIndex - 1 + plants.length) % plants.length
    setSelectedPlant(plants[previousIndex])
  }

  const toggleAudio = () => {
    setIsAudioPlaying(!isAudioPlaying)
    // Here you would typically start or stop the actual audio playback
  }

  return (
    <div className="min-h-screen bg-sage-50 dark:bg-gray-900 text-emerald-900 dark:text-emerald-100">
      <header className="bg-white dark:bg-gray-800 shadow-sm py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-emerald-800 dark:text-emerald-400">Virtual Garden</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <form className="flex items-center space-x-2">
            <Input type="search" placeholder="Search plants..." className="max-w-sm" />
            <Button type="submit" variant="default">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </form>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <motion.img
                key={selectedPlant.id}
                src={`/placeholder.svg?height=400&width=600&text=${selectedPlant.name}`}
                alt={selectedPlant.name}
                className="w-full h-[400px] object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                style={{ transform: `scale(${zoomLevel / 100})` }}
              />
              <div className="absolute top-4 right-4 space-x-2">
                <Button variant="secondary" size="icon" onClick={toggleAudio}>
                  <Volume2 className={`h-4 w-4 ${isAudioPlaying ? 'text-emerald-500' : ''}`} />
                </Button>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="secondary" size="icon">
                      <Maximize2 className="h-4 w-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl">
                    <DialogHeader>
                      <DialogTitle>{selectedPlant.name}</DialogTitle>
                      <DialogDescription>{selectedPlant.scientificName}</DialogDescription>
                    </DialogHeader>
                    <img
                      src={`/placeholder.svg?height=600&width=800&text=${selectedPlant.name}`}
                      alt={selectedPlant.name}
                      className="w-full h-auto object-cover rounded-lg"
                    />
                  </DialogContent>
                </Dialog>
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                <Button variant="secondary" size="icon" onClick={handlePreviousPlant}>
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="secondary" size="icon" onClick={handleNextPlant}>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="mt-4 flex items-center space-x-4">
              <span className="text-sm font-medium">Zoom:</span>
              <Slider
                min={100}
                max={200}
                step={10}
                value={[zoomLevel]}
                onValueChange={(value) => setZoomLevel(value[0])}
                className="w-[200px]"
              />
              <span className="text-sm font-medium">{zoomLevel}%</span>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>{selectedPlant.name}</CardTitle>
              <CardDescription>{selectedPlant.scientificName}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{selectedPlant.description}</p>
            </CardContent>
            <CardFooter>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select view" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="info">Plant Information</SelectItem>
                  <SelectItem value="uses">Medicinal Uses</SelectItem>
                  <SelectItem value="cultivation">Cultivation Tips</SelectItem>
                </SelectContent>
              </Select>
            </CardFooter>
          </Card>
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Explore More Plants</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {plants.map((plant) => (
              <motion.div
                key={plant.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="cursor-pointer" onClick={() => setSelectedPlant(plant)}>
                  <CardHeader>
                    <img
                      src={`/placeholder.svg?height=150&width=200&text=${plant.name}`}
                      alt={plant.name}
                      className="w-full h-[150px] object-cover rounded-t-lg"
                    />
                  </CardHeader>
                  <CardContent>
                    <h3 className="font-semibold">{plant.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{plant.scientificName}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-emerald-900 dark:bg-gray-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 AYUSH Botanicum Virtual Garden. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
