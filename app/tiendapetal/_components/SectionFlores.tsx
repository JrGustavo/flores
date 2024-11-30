'use client';

import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';

interface Product {
    id: string;
    name: string;
    image: string;
    price: number;
    oldPrice: number;
    discount: number;
    unit: string;
    unitPrice: string;
    deposit?: string;
}

const products: Product[] = [
    {
        id: '1',
        name: 'Rewe Beste Wahl Weinblätter Gefüllt mit Reis 200g x2',
        image: '/placeholder.svg?height=200&width=200',
        price: 3.39,
        oldPrice: 3.58,
        discount: 5,
        unit: '200g x2',
        unitPrice: '8.48 € / 1kg'
    },
    {
        id: '2',
        name: 'Schwartau Weniger Zucker Erdbeere 300g',
        image: '/placeholder.svg?height=200&width=200',
        price: 2.29,
        oldPrice: 2.89,
        discount: 21,
        unit: '300g',
        unitPrice: '7.63 € / 1kg'
    },
    {
        id: '3',
        name: 'Rewe Beste Wahl Weinblätter Gefüllt mit Reis 200g x2',
        image: '/placeholder.svg?height=200&width=200',
        price: 3.39,
        oldPrice: 3.58,
        discount: 5,
        unit: '200g x2',
        unitPrice: '8.48 € / 1kg'
    },
    {
        id: '4',
        name: 'Schwartau Weniger Zucker Erdbeere 300g',
        image: '/placeholder.svg?height=200&width=200',
        price: 2.29,
        oldPrice: 2.89,
        discount: 21,
        unit: '300g',
        unitPrice: '7.63 € / 1kg'
    },
];

export function SectionFlores() {
    const [showAddressModal, setShowAddressModal] = useState(false);
    const [visibleProducts, setVisibleProducts] = useState(products.slice(0, 5)); // Productos visibles iniciales.
    const carouselRef = useRef<HTMLDivElement>(null);

    const ITEMS_PER_PAGE = 5; // Número de productos visibles por página.

    const scroll = (direction: 'left' | 'right') => {
        if (carouselRef.current) {
            const currentStartIndex = products.findIndex(
                (product) => product.id === visibleProducts[0]?.id
            );
            let newStartIndex;

            if (direction === 'left') {
                newStartIndex =
                    currentStartIndex - ITEMS_PER_PAGE < 0
                        ? 0
                        : currentStartIndex - ITEMS_PER_PAGE;
            } else {
                newStartIndex =
                    currentStartIndex + ITEMS_PER_PAGE >= products.length
                        ? products.length - ITEMS_PER_PAGE
                        : currentStartIndex + ITEMS_PER_PAGE;
            }

            setVisibleProducts(
                products.slice(newStartIndex, newStartIndex + ITEMS_PER_PAGE)
            );

            // Desplazamiento visual del carrusel.
            const scrollAmount = 300;
            carouselRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-navy-900">Arreglos florales</h2>
                <div className="flex gap-2">
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => scroll('left')}
                        className="hidden md:flex"
                    >
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => scroll('right')}
                        className="hidden md:flex"
                    >
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </div>
            </div>

            <div
                ref={carouselRef}
                className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 scrollbar-hide"
            >
                {visibleProducts.map((product) => (
                    <div
                        key={product.id}
                        className="flex-none w-[200px] snap-start"
                    >
                        <div className="relative bg-white rounded-lg p-4 h-full">
                            {product.discount > 0 && (
                                <span className="absolute top-2 left-2 bg-pink-600 text-white text-xs font-bold px-2 py-1 rounded">
                  -{product.discount}%
                </span>
                            )}
                            <div className="relative h-[150px] mb-4">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-contain"
                                />
                                <Button
                                    size="icon"
                                    variant="outline"
                                    className="absolute bottom-0 right-0 bg-white"
                                    onClick={() => setShowAddressModal(true)}
                                >
                                    <Plus className="h-4 w-4" />
                                </Button>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-bold text-pink-600">
                    {product.price.toFixed(2).replace('.', ',')} €
                  </span>
                                    {product.oldPrice > product.price && (
                                        <span className="text-sm text-gray-500 line-through">
                      {product.oldPrice.toFixed(2).replace('.', ',')} €
                    </span>
                                    )}
                                </div>
                                <h3 className="text-sm font-medium line-clamp-2">
                                    {product.name}
                                </h3>
                                <div className="text-xs text-gray-500">
                                    <div>{product.unit}</div>
                                    <div>{product.unitPrice}</div>
                                    {product.deposit && (
                                        <div>excl. deposit {product.deposit}</div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <Dialog open={showAddressModal} onOpenChange={setShowAddressModal}>
                <DialogContent className="p-0 gap-0 max-w-3xl">
                    <div className="grid md:grid-cols-[300px,1fr]">
                        <div className="bg-pink-100 p-8">
                            <h2 className="text-2xl font-bold text-pink-600 mb-4">
                                Enter your address
                            </h2>
                            <p className="text-gray-600">
                                Get all your favorites delivered right to your door.
                            </p>
                            <div className="relative mt-8">
                                <div className="w-full aspect-square bg-pink-50 rounded-lg" />
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="relative">
                                <Input
                                    type="text"
                                    placeholder="Enter your delivery address here"
                                    className="w-full pl-10"
                                />
                                <svg
                                    className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </div>
                            <div className="h-[300px] bg-gray-100 rounded-lg mt-4" />
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}
