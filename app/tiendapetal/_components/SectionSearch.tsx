"use client";

import { useState } from "react";
import { Menu, Search, User, X, Flower2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const flowerCategories = [
    { name: "Rosas", href: "/category/rosas" },
    { name: "Girasoles", href: "/category/girasoles" },
    { name: "Orquídeas", href: "/category/orquideas" },
    { name: "Lirios", href: "/category/lirios" },
    { name: "Claveles", href: "/category/claveles" },
];

export default function SectionSearch() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    return (
        <header className="border-b">
            <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="md:hidden">
                        <Menu className="h-5 w-5" />
                    </Button>
                    <div className="hidden md:flex items-center gap-2">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="text-neutral-700 font-medium">
                                    Categories
                                    <svg
                                        className="ml-1 h-4 w-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="bg-primary-700">
                                {flowerCategories.map((category) => (
                                    <DropdownMenuItem key={category.name}>
                                        <Link
                                            href={category.href}
                                            className="flex items-center gap-2 text-white hover:text-black transition-colors"
                                        >
                                            <Flower2 className="h-4 w-4" />
                                            {category.name}
                                        </Link>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <Button className="bg-primary-700 hover:bg-primary-300 text-white hover:text-black">
                        Explorar tienda
                    </Button>
                    <Button variant="ghost" className="hidden md:flex items-center gap-2">
                        <svg
                            className="h-5 w-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                      Ofertas
                    </Button>
                    <Button variant="ghost" className="hidden md:flex items-center gap-2">
                        <User className="h-5 w-5" />
                       Perfil
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsSearchOpen(!isSearchOpen)}
                    >
                        {isSearchOpen ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
                    </Button>
                </div>
            </nav>
            {isSearchOpen && (
                <div className="border-t p-4">
                    <div className="max-w-3xl mx-auto">
                        <input
                            type="search"
                            placeholder="Buscar productos..."
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-700"
                        />
                    </div>
                </div>
            )}
        </header>
    );
}
