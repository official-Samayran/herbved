'use client'
import { useState } from 'react'
import { Trash2, Minus, Plus, ShoppingCart, User } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'
/* import { Separator } from "@/components/ui/separator"
 */
// Define the structure of a cart item
interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
  image: string
}

export default function HerbalCart() {
  // Initial cart items
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, name: "Patanjali Special Chyawanprash", price: 129.99, quantity: 2, image: "/pat_chavanpras.png?height=100&width=100" },
    { id: 2, name: "Brahmi Capsules", price: 139.99, quantity: 1, image: "/Brahmi.png?height=100&width=100" },
    { id: 3, name: "Patanjali Coconut Oil", price: 15.99, quantity: 1, image: "/pat_coco.png?height=100&width=100" },
  ])

  // Function to remove an item from the cart
  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id))
  }

  // Function to update item quantity
  const updateQuantity = (id: number, change: number) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: Math.max(0, item.quantity + change) } : item
    ).filter(item => item.quantity > 0))
  }

  // Calculate total price
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      {/* Header */}
      <header className="bg-white shadow-md  dark:bg-gray-800 shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
           <a href="/"> <Image src="/favicon.ico?height=40&width=40" alt="HerbVed Logo"  width={500} height={500} className="h-10 w-10" />
           </a>
            <h1 className="text-3xl font-bold text-emerald-800 dark:text-emerald-400"><a href="/shop">Cart</a></h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="/" className="text-emerald-700 dark:text-emerald-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">Home</a>
            <a href="/blog" className="text-emerald-700 dark:text-emerald-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">Blog</a>
            <a href="/community" className="text-emerald-700 dark:text-emerald-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">Community</a>
            <a href="/shop" className="text-emerald-700 dark:text-emerald-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">Shop</a>
            <a href="/virtual-tour" className="text-emerald-700 dark:text-emerald-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">Virtual Tour</a>
            <a href="/virtual-garden" className="text-emerald-700 dark:text-emerald-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">Virtual Garden</a>
            <Button variant="ghost" size="icon">
             <a href="/profile"> <User className="h-5 w-5" />
             </a>
            </Button>
          </nav>
        </div>
      </header>
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Your Herbal Product Cart</CardTitle>
        </CardHeader>
        <CardContent>
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500">Your cart is empty</p>
          ) : (
            <ul className="space-y-4">
              {cartItems.map((item) => (
                <li key={item.id} className="flex flex-col sm:flex-row items-center justify-between dark:bg-gray-800 bg-white p-4 rounded-lg shadow">
                  <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                    <div>
                      <h3 className="dark:text-emerald-500 font-semibold">{item.name}</h3>
                      <p className="text-sm text-gray-500">₹{item.price.toFixed(2)} each</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <Button 
                        variant="outline" 
                        size="icon"
                        onClick={() => updateQuantity(item.id, -1)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button 
                        variant="outline" 
                        size="icon"
                        onClick={() => updateQuantity(item.id, 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="font-semibold w-20 text-right">
                    ₹                  {(item.price * item.quantity).toFixed(2)}
                    </p>
                    <Button 
                      variant="destructive" 
                      size="icon"
                      onClick={() => removeItem(item.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
       <hr className="border-t border-gray-300 my-4" ></hr>
        <CardFooter className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xl font-bold mb-4 sm:mb-0">Total: ₹{total.toFixed(2)}</p>
          <Button className="w-full sm:w-auto" disabled={cartItems.length === 0}>
            <ShoppingCart className="mr-2 h-4 w-4" /> Proceed to Checkout
          </Button>
        </CardFooter>
      </Card>  
      <div className="w-auto">
      <footer className="bg-emerald-900 dark:bg-gray-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 HerbVed Virtual Garden. All rights reserved.</p>
        </div>
        </footer>   
        </div>   
    </div>

    
  )
}