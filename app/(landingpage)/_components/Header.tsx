"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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
                        Vive momentos especiales con Petal Flores
                    </p>
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-8">
                        10% de descuento en toda la tienda
                    </h1>
                    <Link href={"/Contacto"}>
                        <Button
                            className="
                        hidden
                        text-primary-100
                        text-md
                        font-bold
                        bg-primary-200
                        p-6
                        rounded-[40px]
                        hover:scale-110
                        transition-all
                        duration-300
                        shadow-md
                        md:hidden
                        lg:flex
                        hover:shadow-primary-600
                ">
                            Comprar ahora
                        </Button>
                    </Link>
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
