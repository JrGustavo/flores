"use client"

import { Button } from "@/components/ui/button"

const features = [
    {
        title: "Suscripciones",
        description: "Save up to 30% and enjoy free shipping on all your deliveries and a vase with the first send.",
        image: "/placeholder.svg?height=600&width=450",
        alt: "Person holding a beautiful bouquet with peach and pink flowers",
        cta: "Comprar ahora"
    },
    {
        title: "Entregas el mismo día ",
        description: "Get it there fast with a same-day delivery in eight major cities including NYC, DC, LA, and Miami.",
        image: "/placeholder.svg?height=600&width=450",
        alt: "Person with bicycle carrying flower delivery",
        cta: "Realizar pedido"
    },
    {
        title: "Diseños especiales",
        description: "Our in-house floral designer works directly with our farms to source and create florals you won't find anywhere else.",
        image: "/placeholder.svg?height=600&width=450",
        alt: "Elegant white flower arrangement with candles",
        cta: "Descubir más"
    }
]

export default function FourSection() {
    return (
        <section className="px-4 py-16 max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl  text-gray-900 mb-12">
                Descubre Petal
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <div key={index} className="flex flex-col items-center text-center">
                        <div className="relative w-full aspect-[3/4] mb-6 overflow-hidden rounded-lg">
                            <div className="absolute inset-0 bg-black/5 transition-colors duration-300 hover:bg-black/20 z-10" />
                            <img
                                src={feature.image}
                                alt={feature.alt}
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                            />
                        </div>

                        <h3 className="text-2xl  text-gray-900 mb-3">
                            {feature.title}
                        </h3>

                        <p className="text-gray-600 mb-6 max-w-sm">
                            {feature.description}
                        </p>

                        <Button
                            variant="link"
                            className="text-gray-900 font-medium tracking-wider uppercase text-sm hover:text-gray-600 transition-colors"
                        >
                            {feature.cta}
                        </Button>
                    </div>
                ))}
            </div>
        </section>
    )
}

