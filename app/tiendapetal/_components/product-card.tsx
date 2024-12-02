'use client'

import { useState } from 'react'
import Image from 'next/image'
import { StarRating } from './star-rating'
import { SizeSelector } from './size-selector'

interface ProductCardProps {
    name: string
    price: number
    rating: number
    reviewCount: number
    deliveryDate: string
    images: {
        main: string
        hover: string
    }
    sizes: {
        name: string
        image: string
        hoverImage: string
    }[]
    promoCode: string
}

export function ProductCard({
                                name,
                                price,
                                rating,
                                reviewCount,
                                deliveryDate,
                                images,
                                sizes,
                                promoCode,
                            }: ProductCardProps) {
    const [isHovered, setIsHovered] = useState(false)
    const [selectedSize, setSelectedSize] = useState(0)
    const [currentImage, setCurrentImage] = useState(images.main)

    const handleImageChange = (newImage: string) => {
        setCurrentImage(newImage)
    }

    return (
        <div className="flex flex-col items-center p-4">
            <div
                className="relative w-full aspect-square mb-4"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Image
                    src={isHovered ? images.hover : currentImage}
                    alt={name}
                    fill
                    className="object-cover transition-opacity duration-300"
                />
            </div>
            <p className="text-sm text-gray-600 mb-2">Receive on {deliveryDate}</p>
            <h2 className="text-xl font-semibold mb-2">{name}</h2>
            <p className="text-lg mb-2">${price}</p>
            <StarRating rating={rating} count={reviewCount} />
            <SizeSelector
                sizes={sizes}
                selectedSize={selectedSize}
                onSelect={setSelectedSize}
                onImageClick={handleImageChange}
            />
            <p className="text-primary mt-4">{promoCode}</p>
        </div>
    )
}

