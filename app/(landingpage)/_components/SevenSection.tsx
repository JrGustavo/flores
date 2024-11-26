"use client"

import { useState, useRef } from "react"
import { Pause, Play } from 'lucide-react'
import { Button } from "@/components/ui/button"

const instagramContent = [
    {
        id: 1,
        type: "video",
        url: "/placeholder.mp4",
        thumbnail: "/placeholder.svg?height=600&width=400",
        alt: "Person holding a white rose bouquet"
    },
    {
        id: 2,
        type: "video",
        url: "/placeholder.mp4",
        thumbnail: "/placeholder.svg?height=400&width=400",
        alt: "Customer receiving flower delivery"
    },
    {
        id: 3,
        type: "video",
        url: "/placeholder.mp4",
        thumbnail: "/placeholder.svg?height=600&width=400",
        alt: "Delivery person on bicycle"
    },
    {
        id: 4,
        type: "video",
        url: "/placeholder.mp4",
        thumbnail: "/placeholder.svg?height=600&width=800",
        alt: "People picking flowers in garden"
    },
    {
        id: 5,
        type: "video",
        url: "/placeholder.mp4",
        thumbnail: "/placeholder.svg?height=600&width=800",
        alt: "People picking flowers in garden"
    }
]

function VideoTile({ url, thumbnail, alt }: { url: string; thumbnail: string; alt: string }) {
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
        <div className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square sm:aspect-video">
            <video
                ref={videoRef}
                src={url}
                poster={thumbnail}
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
            />
            <button
                onClick={togglePlay}
                className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label={isPlaying ? "Pause video" : "Play video"}
            >
                <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                    {isPlaying ? (
                        <Pause className="w-6 h-6 text-gray-900" />
                    ) : (
                        <Play className="w-6 h-6 text-gray-900" />
                    )}
                </div>
            </button>
        </div>
    )
}

export default function SevenSection() {
    return (
        <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-8">
                    <h2 className="text-4xl font-serif text-gray-900 mb-6">
                        As Seen On Instagram
                    </h2>
                    <Button
                        variant="secondary"
                        className="bg-[#2D3436] text-white hover:bg-[#2D3436]/90"
                    >
                        FOLLOW ALONG
                    </Button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Large tile - spans 2 columns and 2 rows */}
                    <div className="sm:col-span-2 sm:row-span-2">
                        <VideoTile {...instagramContent[0]} />
                    </div>

                    {/* Regular tiles */}
                    <div>
                        <VideoTile {...instagramContent[1]} />
                    </div>
                    <div>
                        <VideoTile {...instagramContent[2]} />
                    </div>
                    <div>
                        <VideoTile {...instagramContent[3]} />
                    </div>
                    <div className="sm:col-span-2">
                        <VideoTile {...instagramContent[4] || instagramContent[0]} />
                    </div>
                </div>
            </div>
        </section>
    )
}

