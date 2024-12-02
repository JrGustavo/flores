'use client'

import Image from 'next/image'

interface SizeSelectorProps {
    sizes: {
        name: string
        image: string
        hoverImage: string
    }[]
    onSelect: (index: number) => void
    selectedSize: number
    onImageClick: (image: string) => void
}

export function SizeSelector({ sizes, onSelect, selectedSize, onImageClick }: SizeSelectorProps) {
    return (
        <div className="flex justify-center gap-4 mt-4">
            {sizes.map((size, index) => (
                <button
                    key={size.name}
                    onClick={() => onSelect(index)}
                    className={`relative w-12 h-12 rounded-full border-2 ${
                        selectedSize === index ? 'border-primary' : 'border-gray-200'
                    }`}
                >
                    <Image
                        src={size.image}
                        alt={size.name}
                        fill
                        className="rounded-full object-cover cursor-pointer"
                        onClick={(e) => {
                            e.stopPropagation();
                            onImageClick(size.image);
                        }}
                    />
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-gray-600">
            {size.name}
          </span>
                </button>
            ))}
        </div>
    )
}

