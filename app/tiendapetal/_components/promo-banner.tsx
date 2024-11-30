import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function PromoBanner() {
    return (
        <div className="max-w-7xl mx-auto p-4">
            <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-pink-100 to-pink-50">
                <div className="grid md:grid-cols-2 items-center">
                    <div className="p-6 md:p-8">
                        <h2 className="text-3xl font-bold text-navy-900 mb-2">3€ Rabatt</h2>
                        <p className="text-lg text-navy-800 mb-4">
                            Kaufe Aktionsprodukte für 6€ und erhalte 3€ zurück!*
                        </p>
                        <p className="text-sm text-navy-600 mb-6">
                            *Kassenboh bei www.ferrero-blackweeks.de hochladen.
                        </p>
                        <Button className="bg-pink-500 hover:bg-pink-600 text-white">
                            Alle ansehen
                        </Button>
                    </div>
                    <div className="relative h-48 md:h-full bg-black rounded-r-lg">
                        <div className="absolute inset-0 flex items-center justify-center p-6">
                            <div className="relative w-full h-full">
                                <Image
                                    src="/placeholder.svg?height=200&width=400"
                                    alt="Snack Black Weeks"
                                    fill
                                    className="object-contain"
                                />
                                <div className="absolute bottom-4 right-4 bg-white rounded-full px-4 py-2">
                                    <span className="font-bold text-lg">3,19€</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

