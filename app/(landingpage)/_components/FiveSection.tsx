"use client"

import { useState, useRef } from "react"
import { Pause, Play } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function FiveSection() {
    const [isPlaying, setIsPlaying] = useState(false)
    const videoRef = useRef<HTMLVideoElement>(null)

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause()
            } else {
                videoRef.current.play()
            }
            setIsPlaying(!isPlaying)
        }
    }

    return (
        <section className="min-h-screen">
            <div className="grid lg:grid-cols-2 min-h-screen">
                {/* Video Section */}
                <div className="relative w-full h-[50vh] lg:h-screen">
                    <video
                        ref={videoRef}
                        className="w-full h-full object-cover"
                        loop
                        muted
                        playsInline
                        poster="/Header/Flowers1.jpg"  // Aquí reemplazas la ruta del video por una imagen
                    >
                        <source src="/Video/Flowers.mp4" type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>

                    {/* Play/Pause Button */}
                    <button
                        onClick={togglePlay}
                        className="absolute bottom-6 left-6 w-12 h-12 rounded-full bg-white/90 flex items-center justify-center hover:bg-black transition-colors z-10"
                        aria-label={isPlaying ? "Pause video" : "Play video"}
                    >
                        {isPlaying ? (
                            <Pause className="w-6 h-6 text-gray-900"/>
                        ) : (
                            <Play className="w-6 h-6 text-gray-900"/>
                        )}
                    </button>
                </div>

                {/* Content Section */}
                <div className="flex items-center justify-center p-8 lg:p-16">
                    <div className="max-w-xl">
                        <div className="space-y-6">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight">
                                Flower Subscriptions Starting at Just $55 With Free Shipping on Every Delivery
                            </h1>

                            <p className="text-lg text-gray-600">
                                Keep the mood fresh with stunning bouquets, delivered right on time.
                                Whether for you or someone else, the simplest way to turn
                                a simple gesture into an ongoing experience.
                            </p>

                            <div className="flex items-center gap-8">
                                <Button
                                    size="lg"
                                    className="bg-primary-300 hover:bg-primary-700 text-black hover:text-white px-8"
                                >
                                    Comprar ahora
                                </Button>

                                {/* Brand Stamp */}
                                <div className="relative w-24 h-24 animate-spin-slow">
                                    <svg viewBox="0 0 100 100" className="absolute inset-0">
                                        <path
                                            id="curve"
                                            d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                                            fill="none"
                                        />
                                        <text fontSize="11">
                                            <textPath href="#curve">
                                                Diseñado en Colombia
                                            </textPath>
                                        </text>
                                    </svg>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-xs font-medium">Petal</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
