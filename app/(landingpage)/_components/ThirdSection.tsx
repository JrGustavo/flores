"use client"

import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

// Product type definition
type Product = {
    id: string
    name: string
    price: number
    image: string
    rating: number
    reviews: number
    isBestSeller?: boolean
    category: "flowers" | "plants" | "gifts"
}

// Sample products data
const products: Product[] = [
    {
        id: "firecracker",
        name: "The Firecracker",
        price: 70,
        image: "/placeholder.svg?height=400&width=300",
        rating: 5,
        reviews: 1161,
        category: "flowers"
    },
    {
        id: "verona",
        name: "The Verona",
        price: 68,
        image: "/placeholder.svg?height=400&width=300",
        rating: 5,
        reviews: 288,
        category: "flowers"
    },
    {
        id: "sorbet",
        name: "The Sorbet",
        price: 65,
        image: "/placeholder.svg?height=400&width=300",
        rating: 5,
        reviews: 48,
        isBestSeller: true,
        category: "flowers"
    },
    {
        id: "good-vibes",
        name: "The Good Vibes",
        price: 68,
        image: "/placeholder.svg?height=400&width=300",
        rating: 5,
        reviews: 264,
        category: "flowers"
    },
    // Add more products as needed
]

export default function ThirdSection() {
    const [activeTab, setActiveTab] = useState("flowers")
    const scrollContainerRef = useRef<HTMLDivElement>(null)

    const scroll = (direction: "left" | "right") => {
        if (scrollContainerRef.current) {
            const scrollAmount = 300
            scrollContainerRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth"
            })
        }
    }

    const filteredProducts = products.filter(product => product.category === activeTab)

    return (
        <section className="px-4 py-12 max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-4xl font-serif text-gray-900">Shop Our Best Sellers</h2>
                <Button variant="link" className="text-sm font-medium">
                    SHOP ALL
                </Button>
            </div>

            <Tabs defaultValue="flowers" onValueChange={setActiveTab}>
                <div className="flex items-center justify-between mb-6">
                    <TabsList>
                        <TabsTrigger value="flowers">Flowers</TabsTrigger>
                        <TabsTrigger value="plants">Plants</TabsTrigger>
                        <TabsTrigger value="gifts">Gifts</TabsTrigger>
                    </TabsList>
                </div>

                <TabsContent value={activeTab} className="relative">
                    <div className="relative">
                        <Button
                            variant="outline"
                            size="icon"
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 rounded-full bg-white shadow-lg"
                            onClick={() => scroll("left")}
                        >
                            <ChevronLeft className="h-4 w-4" />
                        </Button>

                        <div
                            ref={scrollContainerRef}
                            className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar"
                        >
                            {filteredProducts.map((product) => (
                                <Card
                                    key={product.id}
                                    className="flex-none w-[300px] snap-start"
                                >
                                    <CardContent className="p-4">
                                        <div className="relative mb-4">
                                            {product.isBestSeller && (
                                                <Badge className="absolute top-2 right-2 z-10">
                                                    Best Seller
                                                </Badge>
                                            )}
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full aspect-square object-cover rounded-lg"
                                            />
                                        </div>
                                        <h3 className="text-xl font-medium text-gray-900 mb-2">
                                            {product.name}
                                        </h3>
                                        <div className="flex items-center justify-between mb-2">
                      <span className="text-lg font-medium">
                        ${product.price}
                      </span>
                                            <div className="flex items-center gap-1">
                                                <div className="flex">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star
                                                            key={i}
                                                            className={`w-4 h-4 ${
                                                                i < product.rating
                                                                    ? "fill-primary text-primary"
                                                                    : "fill-muted text-muted-foreground"
                                                            }`}
                                                        />
                                                    ))}
                                                </div>
                                                <span className="text-sm text-muted-foreground">
                          ({product.reviews})
                        </span>
                                            </div>
                                        </div>
                                        <p className="text-sm text-red-600">
                                            25% off with code CYBER25
                                        </p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        <Button
                            variant="outline"
                            size="icon"
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 rounded-full bg-white shadow-lg"
                            onClick={() => scroll("right")}
                        >
                            <ChevronRight className="h-4 w-4" />
                        </Button>
                    </div>
                </TabsContent>
            </Tabs>
        </section>
    )
}

