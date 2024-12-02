'use client'

import { ChevronRight, Instagram,  Linkedin, X } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import Link from "next/link";

const footerLinks = [
    {
        title: "Petal Flores",
        links: [
            { name: "Nuestra historia", href: "#" },
            { name: "Impacto Social", href: "#" },
            { name: "Prensa", href: "#" },
            { name: "Términos y condiciones ", href: "#" }

        ]
    },
    {
        title: "Categorías",
        links: [
            { name: "Arreglos florales", href: "#" },
            { name: "Plantas", href: "#" },
            { name: "Comprar al por mayor", href: "#" },
            { name: "Regalos corporativos", href: "#" }
        ]
    },
    {
        title: "Experiencia al cliente",
        links: [
            { name: "¿Cómo hacer un pedido?", href: "#" },
            { name: "Atención al cliente", href: "#" },
            { name: "Zona de proveedores", href: "#" },
            { name: "Trabaja con nosotros", href: "#" },
        ]
    }
]

const footerLinksEn = [
    {
        title: "Petal Flowers",
        links: [
            { name: "Our history", href: "#" },
            { name: "Social impact", href: "#" },
            { name: "Press", href: "#" },
            { name: "Terms and Conditions", href: "#" }
        ]
    },
    {
        title: "Categories",
        links: [
            { name: "Floral arrangements", href: "#" },
            { name: "Plants", href: "#" },
            { name: "Buy wholesale", href: "#" },
            { name: "Corporate gifts", href: "#" }
        ]
    },
    {
        title: "Customer experience",
        links: [
            { name: "How to place an order?", href: "#" },
            { name: "Customer Service", href: "#" },
            { name: "Suppliers Area", href: "#" },
            { name: "Work with us", href: "#" }
        ]
    }
]

type Language = 'es' | 'en'

export default function Footer() {
    const [language, setLanguage] = useState<Language>('es')

    const toggleLanguage = () => {
        setLanguage(prevLang => prevLang === 'es' ? 'en' : 'es')
    }

    const currentLinks = language === 'es' ? footerLinks : footerLinksEn

    return (
        <footer className="bg-primary-700 text-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="space-y-6">
                    <Image src="/Logo/PetalFloresWhite.svg" alt="Petal Logo" width={120} height={40} />
                    <button
                        onClick={toggleLanguage}
                        className="flex items-center space-x-2 bg-primary-700 rounded-full py-2 px-4 w-fit hover:bg-primary-600 transition-colors"
                        aria-label={`Change language to ${language === 'es' ? 'English' : 'Spanish'}`}
                    >
                        <Image
                            src={language === 'es' ? "/Banderas/Español.png" : "/Banderas/Ingles.png"}
                            alt={language === 'es' ? "Spanish Flag" : "US Flag"}
                            width={30}
                            height={20}
                        />
                        <span>{language === 'es' ? 'Español' : 'English'}</span>
                        <ChevronRight size={16} />
                    </button>
                    <div className="flex space-x-4">
                        <Link href="https://www.linkedin.com/company/fleet-ai" aria-label="LinkedIn">
                            <Linkedin size={24} className="hover:text-[#FDF888]" />
                        </Link>
                        <Link href="https://x.com/" aria-label="Twitter">
                            <X size={24} className="hover:text-[#FDF888]" />
                        </Link>
                        <Link href="https://www.instagram.com/" aria-label="Instagram">
                            <Instagram size={24} className="hover:text-[#FDF888]" />
                        </Link>
                    </div>
                </div>
                {currentLinks.map((section, index) => (
                    <div key={index} className="space-y-4">
                        <h3 className="text-lg font-semibold">{section.title}</h3>
                        <ul className="space-y-2">
                            {section.links.map((link, linkIndex) => (
                                <li key={linkIndex}>
                                    <Link href={link.href} className="text-[#ffffff] hover:underline hover:text-[#FDF888]">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </footer>
    )
}
