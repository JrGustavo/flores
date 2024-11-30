"use client"

import { Heart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function AditionalSection() {
    return (
        <section className="max-w-7xl mx-auto px-4 py-12">
            <h2 className="text-4xl  text-gray-900 mb-8">
                Colección floral de temporada
            </h2>

            <div className="relative rounded-2xl overflow-hidden">
                {/* Main Image */}
                <div className="relative aspect-[16/9] md:aspect-[21/9]">
                    <img
                        src="/placeholder.svg?height=900&width=1600"
                        alt="Person wearing winter attire holding a holiday wreath"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Product Card Overlay */}
                <div className="absolute top-1/2 right-8 transform translate-y-[-50%]">
                    <Card className="w-[300px] bg-white/95 backdrop-blur-sm shadow-lg">
                        <CardContent className="p-4">
                            <div className="flex gap-4">
                                {/* Product Thumbnail */}
                                <div className="relative w-20 h-20">
                                    <img
                                        src="/placeholder.svg?height=80&width=80"
                                        alt="Golden Cedar Wreath"
                                        className="rounded-lg object-cover"
                                    />
                                    <button
                                        className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
                                        aria-label="Add to wishlist"
                                    >
                                        <Heart className="w-4 h-4" />
                                    </button>
                                </div>

                                {/* Product Info */}
                                <div className="flex-1">
                                    <h3 className="font-medium text-lg text-gray-900 mb-1">
                                        Golden Cedar Wreath
                                    </h3>
                                    <p className="text-lg font-medium text-gray-900 mb-2">
                                        $200
                                    </p>
                                    <p className="text-sm text-gray-600 mb-4">
                                        Handmade with magnolia leaves and a festive green bow.
                                    </p>
                                    <Button className="w-full bg-primary-600 hover:bg-gray-800 text-white">
                                        Comprar ahora
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

