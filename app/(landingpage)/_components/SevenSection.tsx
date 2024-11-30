"use client";

import { useState, useRef } from "react";
import { Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const VideoGrid = () => {
    const videos = Array.from({ length: 5 }, () => useRef<HTMLVideoElement>(null));
    const [playing, setPlaying] = useState<boolean[]>(Array(5).fill(false));

    const togglePlayPause = (index: number) => {
        const videoElement = videos[index]?.current;
        if (!videoElement) return;

        const isPlaying = playing[index];
        if (isPlaying) {
            videoElement.pause();
        } else {
            videoElement.play();
        }

        const newPlayingState = [...playing];
        newPlayingState[index] = !isPlaying;
        setPlaying(newPlayingState);
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {videos.map((ref, index) => (
                <div
                    key={index}
                    className={`${
                        index === 0 ? "sm:col-span-2 sm:row-span-2" : ""
                    } relative`}
                >
                    {/* Video element */}
                    <video
                        ref={ref}
                        src="/Video/Flowers.mp4"
                        className="w-full h-full object-cover rounded-lg"
                        loop
                        muted
                    />

                    {/* Custom play/pause button */}
                    <button
                        onClick={() => togglePlayPause(index)}
                        className="absolute bottom-4 right-4 bg-primary-700 hover:bg-black text-white hover:text-white rounded-full p-3"
                    >
                        {playing[index] ? (
                            <Pause className="w-6 h-6"/>
                        ) : (
                            <Play className="w-6 h-6"/>
                        )}
                    </button>
                </div>
            ))}
        </div>
    );
};

const VideoTile = ({
                       url,
                       thumbnail,
                       alt,
                   }: {
    url: string;
    thumbnail: string;
    alt: string;
}) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

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
    );
};

export default function SevenSection() {
    return (
        <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-8">
                    <h2 className="text-4xl text-gray-900 mb-6">Síguenos en Instagram</h2>
                    <Button
                        variant="secondary"
                        className="bg-primary-700 font-bold text-white hover:bg-primary-300 hover:text-black"
                    >
                        @petal_flores
                    </Button>
                </div>
                <VideoGrid />
            </div>
        </section>
    );
}
