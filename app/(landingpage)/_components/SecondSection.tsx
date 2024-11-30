"use client"

import { useRef, useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"

const occasions = [
    {
        title: "Arreglos florales",
        image: "/placeholder.svg?height=400&width=300",
        alt: "Pink and white flower arrangement with roses and carnations"
    },
    {
        title: "Orquídeas",
        image: "/placeholder.svg?height=400&width=300",
        alt: "Yellow and orange roses in a gold vase with table setting"
    },
    {
        title: "Cumpleaños",
        image: "/placeholder.svg?height=400&width=300",
        alt: "Friends walking with flower bouquets"
    },
    {
        title: "Aniversarios",
        image: "/placeholder.svg?height=400&width=300",
        alt: "White and cream sympathy bouquet with anemones"
    },
    {
        title: "Mejórate pronto",
        image: "/placeholder.svg?height=400&width=300",
        alt: "Orange and pink roses with greenery"
    }
]

export default function SecondSection() {
    const scrollRef = useRef<HTMLDivElement>(null)
    const [scrollProgress, setScrollProgress] = useState(0)
    const [isDragging, setIsDragging] = useState(false)
    const [startX, setStartX] = useState(0)
    const [scrollLeft, setScrollLeft] = useState(0)

    const handleScroll = () => {
        if (!scrollRef.current) return

        const element = scrollRef.current
        const scrollWidth = element.scrollWidth - element.clientWidth
        const progress = (element.scrollLeft / scrollWidth) * 100
        setScrollProgress(progress)
    }

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true)
        setStartX(e.pageX - scrollRef.current!.offsetLeft)
        setScrollLeft(scrollRef.current!.scrollLeft)
    }

    const handleMouseUp = () => {
        setIsDragging(false)
    }

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return

        e.preventDefault()
        if (!scrollRef.current) return

        const x = e.pageX - scrollRef.current.offsetLeft
        const walk = (x - startX) * 2
        scrollRef.current.scrollLeft = scrollLeft - walk
    }

    useEffect(() => {
        const element = scrollRef.current
        if (!element) return

        element.addEventListener('scroll', handleScroll)
        return () => element.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <section className="px-4 py-12 max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl  text-gray-900 mb-8">
                Flores y regalos para todos los días
            </h1>

            <div
                ref={scrollRef}
                className="flex overflow-x-auto gap-6 pb-8 cursor-grab active:cursor-grabbing no-scrollbar"
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onMouseMove={handleMouseMove}
            >
                {occasions.map((occasion, index) => (
                    <Card
                        key={index}
                        className="flex-none w-[300px] transition-transform hover:scale-[1.02]"
                    >
                        <CardContent className="p-0">
                            <div className="relative aspect-[3/4]">
                                <img
                                    src={occasion.image}
                                    alt={occasion.alt}
                                    className="object-cover w-full h-full rounded-t-lg"
                                />
                            </div>
                            <div className="p-4">
                                <h2 className="text-xl font-medium text-gray-900">{occasion.title}</h2>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Progress Bar */}
            <div className="h-1 bg-gray-200 rounded-full mt-4">
                <div
                    className="h-full bg-gray-900 rounded-full transition-all duration-300 ease-out"
                    style={{ width: `${scrollProgress}%` }}
                />
            </div>
        </section>
    )
}

