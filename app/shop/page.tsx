'use client';
import { useState } from 'react'
import { ArrowUpDown, Star, ShoppingCart, User } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
/* import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu" */
import { Card, CardContent, CardFooter } from "@/components/ui/card"
/* import { toast, useToast } from "@/components/ui/use-toast" */

// Sample product data with added brand
const initialProducts = [
  { id: 1, name: "Ubtan Foaming Face Wash | 150.0 ml", brand: "MamaEarth", price: 129.99, rating: 4.5, image: "/mama_facewash.jpeg "},
  { id: 2, name: "Patanjali Special Chyawanprash", brand: "Patanjali", price: 129.99, rating: 4.2, image: "/pat_chavanpras.png?height=200&width=200" },
  { id: 3, name: "Patanjali Coconut Oil", brand: "Patanjali", price: 79.99, rating: 4.8, image: "/pat_coco.png?height=200&width=200" },
  { id: 4, name: "Green Tea", brand: "HCC", price: 249.99, rating: 4.6, image: "/green-tea.png?height=200&width=200" },
  { id: 5, name: "Brahmi Capsules", brand: "SuAyu", price: 139.99, rating: 4.3, image: "/Brahmi.png?height=200&width=200" },
  { id: 6, name: "Aloevera Capsules", brand: "Tymon", price: 209.99, rating: 4.4, image: "/aloevera-capsules.jpg?height=200&width=200" },
]

type SortOption = 'featured' | 'price-low-high' | 'price-high-low' | 'rating' | 'brand'

export default function ProductListing() {
  const [products, setProducts] = useState(initialProducts)
  const [sortOption, setSortOption] = useState<SortOption>('featured')
/*   const { toast } = useToast() */

  const sortProducts = (option: SortOption) => {
    let sortedProducts = [...products]
    switch (option) {
      case 'price-low-high':
        sortedProducts.sort((a, b) => a.price - b.price)
        break
      case 'price-high-low':
        sortedProducts.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        sortedProducts.sort((a, b) => b.rating - a.rating)
        break
      case 'brand':
        sortedProducts.sort((a, b) => a.brand.localeCompare(b.brand))
        break
      default:
        // 'featured' - no sorting, keep original order
        sortedProducts = initialProducts
    }
    setProducts(sortedProducts)
    setSortOption(option)
  }

  const addToCart = (product: typeof initialProducts[0]) => {
/*     toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
    }) */
  }

  return (
    <div className="min-h-screen bg-sage-50 dark:bg-gray-900 text-emerald-900 dark:text-emerald-100">
       {/* Header */}
       <header className="bg-white shadow-md  dark:bg-gray-800 shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
           <a href="/"> <Image src="/favicon.ico?height=40&width=40" alt="HerbVed Logo "  width={500} height={500} className="h-10 w-10" />
           </a>
            <h1 className="text-3xl font-bold text-emerald-800 dark:text-emerald-400"><a href="/shop">Shop</a></h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="/" className="text-emerald-700 dark:text-emerald-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">Home</a>
            <a href="/blog" className="text-emerald-700 dark:text-emerald-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">Blog</a>
            <a href="/community" className="text-emerald-700 dark:text-emerald-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">Community</a>
            <a href="/virtual-tour" className="text-emerald-700 dark:text-emerald-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">Virtual Tour</a>
            <a href="/virtual-garden" className="text-emerald-700 dark:text-emerald-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">Virtual Garden</a>
            <Button variant="ghost" size="icon">
             <a href="/profile"> <User className="h-5 w-5" />
             </a>
            </Button>
          </nav>
        </div>
      </header>
  
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Our Products</h1>
     {/*    <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <ArrowUpDown className="mr-2 h-4 w-4" />
              Sort by: {sortOption.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => sortProducts('featured')}>Featured</DropdownMenuItem>
            <DropdownMenuItem onClick={() => sortProducts('price-low-high')}>Price: Low to High</DropdownMenuItem>
            <DropdownMenuItem onClick={() => sortProducts('price-high-low')}>Price: High to Low</DropdownMenuItem>
            <DropdownMenuItem onClick={() => sortProducts('rating')}>Highest Rated</DropdownMenuItem>
            <DropdownMenuItem onClick={() => sortProducts('brand')}>Brand</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu> */}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="flex flex-col">
            <Image
              src={product.image}
              alt={product.name}
              width={200}
              height={200}
              className="w-full h-48 object-cover"
            />
            <CardContent className="p-4 flex-grow">
              <h2 className="text-lg font-semibold mb-1">{product.name}</h2>
              <p className="text-sm text-gray-500 mb-2">{product.brand}</p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold">₹{product.price.toFixed(2)}</span>
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="ml-1">{product.rating.toFixed(1)}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-4">
              <Button className="w-full" onClick={() => addToCart(product)}>
                <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
    <footer className="bg-emerald-900 dark:bg-gray-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 HerbVed Virtual Garden. All rights reserved.</p>
        </div>
        </footer>
  </div>
  )
}