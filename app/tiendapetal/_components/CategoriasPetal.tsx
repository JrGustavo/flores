import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

interface Category {
    id: number
    title: string
    image: string
    link: string
}

const categories: Category[] = [
    {
        id: 1,
        title: "Rosas Rojas",
        image: "/placeholder.svg?height=400&width=600",
        link: "/categoria/rosas-rojas"
    },
    {
        id: 2,
        title: "Girasoles",
        image: "/placeholder.svg?height=400&width=600",
        link: "/categoria/girasoles"
    },
    {
        id: 3,
        title: "Orquídeas",
        image: "/placeholder.svg?height=400&width=600",
        link: "/categoria/orquideas"
    },
    {
        id: 4,
        title: "Lirios",
        image: "/placeholder.svg?height=400&width=600",
        link: "/categoria/lirios"
    },
    {
        id: 5,
        title: "Claveles",
        image: "/placeholder.svg?height=400&width=600",
        link: "/categoria/claveles"
    },
]

export default function CategoriasPetal() {
    return (
        <section className="py-12 px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-8">Descubre nuestras categorías</h2>
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-2 md:-ml-4">
                        {categories.map((category) => (
                            <CarouselItem key={category.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                                <Link href={category.link} className="block">
                                    <Card className="overflow-hidden transition-transform hover:scale-[1.02]">
                                        <CardContent className="p-0">
                                            <div className="relative aspect-[4/3]">
                                                <Image
                                                    src={category.image}
                                                    alt={category.title}
                                                    fill
                                                    className="object-cover"
                                                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                                />
                                            </div>
                                            <div className="p-4">
                                                <h3 className="text-lg font-semibold">{category.title}</h3>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden md:flex" />
                    <CarouselNext className="hidden md:flex" />
                </Carousel>
            </div>
        </section>
    )
}

