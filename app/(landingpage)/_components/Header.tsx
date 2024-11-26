"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function BlackFridayBanner() {
    return (
        <section className="grid md:grid-cols-2 min-h-[600px]">
            {/* Left Panel - Content */}
            <div className="relative flex items-center justify-center p-8 md:p-12 lg:p-16 bg-[#1A332F]">
                <div
                    className="absolute inset-0 opacity-40"
                    style={{
                        backgroundImage: "url('/Flower3s.jpg')", // Asegúrate de que esta imagen esté en la carpeta 'public'
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                />
                <div className="relative z-10 text-center md:text-left max-w-xl mx-auto md:mx-0">
                    <p className="text-white/90 tracking-wide uppercase mb-4">
                        Black Friday Cyber Monday
                    </p>
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-8">
                        25% Off Everything
                    </h1>
                    <Button
                        variant="outline"
                        className="bg-white text-[#1A332F] hover:bg-white/90 border-0 text-lg px-8 py-6"
                    >
                        Shop Now
                    </Button>
                </div>
            </div>

            {/* Right Panel - Image */}
            <div className="relative h-[400px] md:h-auto">
                <Image
                    src="/Header/Flowers3.jpg" // Ruta correcta de la imagen (debe estar en la carpeta 'public/Header')
                    alt="Elegant floral arrangement with roses in a gold vase alongside wine and cheese"
                    className="h-full w-full object-cover"
                    height={600} // Se especifica un valor de altura
                    width={800}  // Se especifica un valor de anchura
                />
            </div>
        </section>
    );
}
