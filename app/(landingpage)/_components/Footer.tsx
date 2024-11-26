'use client'

import { ChevronRight, Instagram,  Linkedin, X } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import Link from "next/link";

const footerLinks = [
    {
        title: "Petal",
        links: [
            { name: "Nosotros", href: "#" },
            { name: "Centro de soporte", href: "#" },
            { name: "Carreras", href: "#" },
            { name: "Noticias Petal", href: "#" }

        ]
    },
    {
        title: "Productos",
        links: [
            { name: "Plataforma Petal", href: "#" },
            { name: "Prevención del fraude", href: "#" },
            { name: "Verificación KYB", href: "#" },
            { name: "Petal Score", href: "#" }
        ]
    },
    {
        title: "Developers",
        links: [
            { name: "Documentación", href: "#" },
            { name: "Bibliotecas & API", href: "#" },
            { name: "Integraciones", href: "#" },
            { name: "Petal templates", href: "#" },
        ]
    }
]

const footerLinksEn = [
    {
        title: "Petal",
        links: [
            { name: "About Us", href: "#" },
            { name: "Support Center", href: "#" },
            { name: "Careers", href: "#" },
            { name: "Petal News", href: "#" }
        ]
    },
    {
        title: "Products",
        links: [
            { name: "Petal Platform", href: "#" },
            { name: "Fraud Prevention", href: "#" },
            { name: "KYB Verification", href: "#" },
            { name: "Petal Score", href: "#" }
        ]
    },
    {
        title: "Developers",
        links: [
            { name: "Documentation", href: "#" },
            { name: "Libraries & API", href: "#" },
            { name: "Integrations", href: "#" },
            { name: "Petal Templates", href: "#" }
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
        <footer className="bg-secondary-300 text-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="space-y-6">
                    <Image src="/Logo/Petal-Secondary.svg" alt="Fleet Logo" width={120} height={40} />
                    <button
                        onClick={toggleLanguage}
                        className="flex items-center space-x-2 bg-gray-800 rounded-full py-2 px-4 w-fit hover:bg-gray-700 transition-colors"
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
                            <Linkedin size={24} className="hover:text-[#ffd140]" />
                        </Link>
                        <Link href="https://x.com/" aria-label="Twitter">
                            <X size={24} className="hover:text-[#ffd140]" />
                        </Link>
                        <Link href="https://www.instagram.com/" aria-label="Instagram">
                            <Instagram size={24} className="hover:text-[#ffd140]" />
                        </Link>
                    </div>
                </div>
                {currentLinks.map((section, index) => (
                    <div key={index} className="space-y-4">
                        <h3 className="text-lg font-semibold">{section.title}</h3>
                        <ul className="space-y-2">
                            {section.links.map((link, linkIndex) => (
                                <li key={linkIndex}>
                                    <Link href={link.href} className="text-[#ffffff] hover:underline hover:text-[#ffd140]">
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
