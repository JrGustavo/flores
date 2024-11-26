"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Star } from 'lucide-react'
import { Button } from "@/components/ui/button"

const reviews = [
    {
        name: "Janna",
        location: "Santa Monica, CA",
        images: [
            "/placeholder.svg?height=400&width=300",
            "/placeholder.svg?height=400&width=300",
            "/placeholder.svg?height=400&width=300"
        ],
        review: "The flowers were absolutely beautiful and my best friend loved them. Would highly recommend UrbanStems."
    },
    {
        name: "Lew",
        location: "New York, New York",
        images: [
            "/placeholder.svg?height=400&width=300",
            "/placeholder.svg?height=400&width=300",
            "/placeholder.svg?height=400&width=300"
        ],
        review: "I ordered a hot pink arrangement for a big anniversary (aren't they all?) and it exceeded my expectations in every way. The arrangement was beautiful and the delivery was sensational."
    },
    {
        name: "Jennifer",
        location: "Tampa, FL",
        images: [
            "/placeholder.svg?height=400&width=300",
            "/placeholder.svg?height=400&width=300",
            "/placeholder.svg?height=400&width=300"
        ],
        review: "Finally an online florist with product that you aren't going to see the exact same thing at a dozen other online florists. UrbanStems by far offered the best selection, most reasonable pricing and their customer service is impeccable!!!"
    },
    {
        name: "Kara",
        location: "Arlington, VA",
        images: [
            "/placeholder.svg?height=400&width=300",
            "/placeholder.svg?height=400&width=300",
            "/placeholder.svg?height=400&width=300"
        ],
        review: "I've been using them for about a year now and I still get excited when the UrbanStems box arrives. The flowers are different every season and I now have an amazing vase collection. And their customer service is amazing!"
    }
]

export default function SixSection() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

    return (
        <section className="px-4 py-16 max-w-7xl mx-auto overflow-hidden">
            <div className="flex justify-between items-center mb-12">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900">
                    More Than 20,000 Five-Star Reviews
                </h2>
                <Button variant="link" className="text-sm font-medium hidden md:block">
                    SEE ALL REVIEWS
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {reviews.map((review, reviewIndex) => (
                    <div
                        key={reviewIndex}
                        className="relative h-[500px]"
                        onMouseEnter={() => setHoveredIndex(reviewIndex)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        {review.images.map((image, imageIndex) => (
                            <motion.div
                                key={imageIndex}
                                className="absolute w-full rounded-lg overflow-hidden bg-white shadow-lg"
                                initial={{
                                    rotate: -5 + (imageIndex * 5),
                                    y: imageIndex * 4,
                                    scale: 1
                                }}
                                animate={{
                                    rotate: hoveredIndex === reviewIndex ? -15 + (imageIndex * 15) : -5 + (imageIndex * 5),
                                    y: hoveredIndex === reviewIndex ? imageIndex * 20 : imageIndex * 4,
                                    scale: hoveredIndex === reviewIndex ? 1.02 : 1,
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <img
                                    src={image}
                                    alt=""
                                    className="w-full h-48 object-cover"
                                />
                                {imageIndex === review.images.length - 1 && (
                                    <div className="p-4">
                                        <div className="flex items-center gap-1 mb-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                                                />
                                            ))}
                                        </div>
                                        <div className="mb-3">
                                            <h3 className="font-medium text-gray-900">{review.name}</h3>
                                            <p className="text-sm text-gray-500">
                                                Verified Buyer - {review.location}
                                            </p>
                                        </div>
                                        <p className="text-sm text-gray-600 italic">
                                            {review.review}
                                        </p>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                ))}
            </div>

            <Button variant="link" className="text-sm font-medium w-full mt-8 md:hidden">
                SEE ALL REVIEWS
            </Button>
        </section>
    )
}

