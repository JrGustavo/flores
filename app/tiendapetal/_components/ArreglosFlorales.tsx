"use client"



import {ProductCard} from "@/app/tiendapetal/_components/product-card";

const products = [
    {
        name: "The Firecracker",
        price: 70,
        rating: 5,
        reviewCount: 1164,
        deliveryDate: "Dec 3",
        images: {
            main: "/productos/PetalFlores.jpg?height=400&width=400",
            hover: "/placeholder.svg?height=400&width=400",
        },
        sizes: [
            {
                name: "Single",
                image: "/productos/Cartuchos.jpg?height=50&width=50&text=Single",
                hoverImage: "/placeholder.svg?height=400&width=400&text=Single",
            },
            {
                name: "Double",
                image: "/productos/Orquidea1.jpg?height=50&width=50&text=Double",
                hoverImage: "/placeholder.svg?height=400&width=400&text=Double",
            },
            {
                name: "Triple",
                image: "/productos/Gira1.jpg?height=50&width=50&text=Triple",
                hoverImage: "/placeholder.svg?height=400&width=400&text=Triple",
            },
        ],
        promoCode: "25% off with code CYBER25",
    },
    {
        name: "The Good Vibes",
        price: 68,
        rating: 5,
        reviewCount: 264,
        deliveryDate: "Dec 3",
        images: {
            main: "/placeholder.svg?height=400&width=400",
            hover: "/placeholder.svg?height=400&width=400",
        },
        sizes: [
            {
                name: "Single",
                image: "/placeholder.svg?height=50&width=50&text=Single",
                hoverImage: "/placeholder.svg?height=400&width=400&text=Single",
            },
            {
                name: "Double",
                image: "/placeholder.svg?height=50&width=50&text=Double",
                hoverImage: "/placeholder.svg?height=400&width=400&text=Double",
            },
            {
                name: "Triple",
                image: "/placeholder.svg?height=50&width=50&text=Triple",
                hoverImage: "/placeholder.svg?height=400&width=400&text=Triple",
            },
        ],
        promoCode: "25% off with code CYBER25",
    },
    {
        name: "The Verona",
        price: 68,
        rating: 5,
        reviewCount: 291,
        deliveryDate: "Dec 3",
        images: {
            main: "/placeholder.svg?height=400&width=400",
            hover: "/placeholder.svg?height=400&width=400",
        },
        sizes: [
            {
                name: "Single",
                image: "/placeholder.svg?height=50&width=50&text=Single",
                hoverImage: "/placeholder.svg?height=400&width=400&text=Single",
            },
            {
                name: "Double",
                image: "/placeholder.svg?height=50&width=50&text=Double",
                hoverImage: "/placeholder.svg?height=400&width=400&text=Double",
            },
            {
                name: "Triple",
                image: "/placeholder.svg?height=50&width=50&text=Triple",
                hoverImage: "/placeholder.svg?height=400&width=400&text=Triple",
            },
        ],
        promoCode: "25% off with code CYBER25",
    },
]

export default function Page() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                    <ProductCard key={product.name} {...product} />
                ))}
            </div>
        </div>
    )
}

