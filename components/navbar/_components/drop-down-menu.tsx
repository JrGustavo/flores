import { Button } from "@/components/ui/button"
import Link from "next/link";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from '@/components/ui/accordion'

import {

    Building2,
    BookOpenText,
    CreditCard,
    LayoutDashboard,
    PencilRuler,
    Rocket,
    QrCode,
    LifeBuoy,
    Newspaper,
    TicketPercent,
    BriefcaseBusiness,
    ShoppingBasket,
    ScanEye,
    Pyramid, SquareDashedMousePointer, Github,

} from "lucide-react";
import React from "react";

interface DropDownMenuProps {
    onClose: () => void;
}

const DropdownMenu : React.FC<DropDownMenuProps> = ({onClose}) => {

    const handleLinkClick = () => {
        onClose();
    }

    return (
        <div className="w-screen h-screen bg-white pt-20 px-4 items-center justify-center absolute top-20 right-0 xl:hidden">
            <Accordion
                className="
            pl-2
            "
                type="single"
                collapsible
            >
                <AccordionItem
                    className="my-6 border-b"

                    value="item-1">
                    <AccordionTrigger className=''>Productos</AccordionTrigger>
                    <AccordionContent>
                        <Link
                            href="/Plataforma"
                            className='flex pt-10'
                            onClick={handleLinkClick}

                        >
                            <div>
                                <LayoutDashboard className='h-6 w-6 mr-4 text-[#3a10e5]' />
                            </div>
                            <div>
                                Plataforma Fleet
                            </div>
                        </Link>
                        <Link
                            href="/Prevencion"

                            className='flex pt-10'
                            onClick={handleLinkClick}
                        >
                            <div>
                                <SquareDashedMousePointer className='h-6 w-6 mr-4 text-[#3a10e5]' />
                            </div>

                            <div>
                                Prevención del fraude
                            </div>

                        </Link>
                        <Link
                            href="/Verificacion"
                            className='flex pt-10'
                            onClick={handleLinkClick}

                        >
                            <div>
                                <ScanEye className='h-6 w-6 mr-4 text-[#3a10e5]' />
                            </div>

                            <div>
                                Verificación KYB
                            </div>

                        </Link>
                        <Link
                            href="/FleetScore"
                            className='flex pt-10'
                            onClick={handleLinkClick}

                        >
                            <div>
                                <Pyramid  className='h-6 w-6 mr-4 text-[#3a10e5]' />
                            </div>

                            <div>
                                Fleet Score
                            </div>

                        </Link>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem
                    className="my-6 border-b"

                    value="item-2">
                    <AccordionTrigger>Soluciones</AccordionTrigger>
                    <AccordionContent>
                        <Link
                            href="/Bancos"
                            className='flex pt-10'
                            onClick={handleLinkClick}
                        >
                            <div>
                                <Building2 className='h-6 w-6 mr-4 text-[#3a10e5]' />
                            </div>
                            <div>
                                Bancos
                            </div>
                        </Link>
                        <Link
                            href="/Fintechs"

                            className='flex pt-10'
                            onClick={handleLinkClick}

                        >
                            <div>
                                <CreditCard className='h-6 w-6 mr-4 text-[#3a10e5]' />
                            </div>

                            <div>
                                Fintechs
                            </div>

                        </Link>
                        <Link
                            href="/Startups"

                            className='flex pt-10'
                            onClick={handleLinkClick}
                        >
                            <div>
                                <Rocket className='h-6 w-6 mr-4 text-[#3a10e5]' />
                            </div>

                            <div>
                                Startups
                            </div>

                        </Link>
                        <Link
                            href="/Plataformas"

                            className='flex pt-10'
                            onClick={handleLinkClick}
                        >
                            <div>
                                <ShoppingBasket className='h-6 w-6 mr-4 text-[#3a10e5]' />
                            </div>

                            <div>
                                Plataformas
                            </div>

                        </Link>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem
                    className="my-6 border-b"


                    value="item-3">
                    <AccordionTrigger>Developers</AccordionTrigger>
                    <AccordionContent>
                        <Link
                            href="/Documentacion"
                            className='flex pt-10'
                            onClick={handleLinkClick}

                        >
                            <div>
                                <QrCode className='h-6 w-6 mr-4 text-[#3a10e5]' />
                            </div>
                            <div>
                                Documentación
                            </div>
                        </Link>
                        <Link
                            href="/Bibliotecas"
                            className='flex pt-10'
                            onClick={handleLinkClick}

                        >
                            <div>
                                <BookOpenText className='h-6 w-6 mr-4 text-[#3a10e5]' />
                            </div>

                            <div>
                                Bibliotecas & API
                            </div>

                        </Link>
                        <Link
                            href="/Integraciones"

                            className='flex pt-10'
                            onClick={handleLinkClick}

                        >
                            <div>
                                <PencilRuler className='h-6 w-6 mr-4 text-[#3a10e5]' />
                            </div>

                            <div>
                                Integraciones
                            </div>

                        </Link>

                        <Link
                            href="/FleetTemplates"
                            className='flex pt-10'
                            onClick={handleLinkClick}

                        >
                            <div>
                                <Github  className='h-6 w-6 mr-4 text-[#3a10e5]' />
                            </div>
                            <div>
                                Fleet Templates
                            </div>

                        </Link>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem
                    className="my-6 border-b"

                    value="item-4">
                    <AccordionTrigger>Recursos</AccordionTrigger>
                    <AccordionContent>
                        <Link
                            href="/Centro"
                            className='flex pt-10'
                            onClick={handleLinkClick}

                        >
                            <div>
                                <LifeBuoy className='h-6 w-6 mr-4 text-[#3a10e5]' />
                            </div>
                            <div>
                                Centro de soporte
                            </div>
                        </Link>
                        <Link
                            href="/Contacto"
                            className='flex pt-10'

                            onClick={handleLinkClick}
                        >
                            <div>
                                <TicketPercent className='h-6 w-6 mr-4 text-[#3a10e5]' />
                            </div>

                            <div>
                                Contactar con ventas
                            </div>

                        </Link>
                        <Link
                            href="/Noticias"
                            className='flex pt-10'
                            onClick={handleLinkClick}
                        >
                            <div>
                                <Newspaper className='h-6 w-6 mr-4 text-[#3a10e5]' />
                            </div>

                            <div>
                                Noticias Fleet
                            </div>
                        </Link>
                        <Link
                            href="/Carreras"
                            className='flex pt-10'
                            onClick={handleLinkClick}
                        >
                            <div>
                                <BriefcaseBusiness className='h-6 w-6 mr-4 text-[#3a10e5]' />
                            </div>

                            <div>
                                Carreras
                            </div>
                        </Link>
                        <div className='flex pt-10'>
                        </div>
                    </AccordionContent>
                </AccordionItem>

                <Link
                    href="/Tarifas"
                    className="
            flex
            flex-1
            items-center
            justify-between
            text-xl
            px-6
            py-4
            my-6
            border-b
            font-bold
            "
                >
                    Tarifas
                </Link>
            </Accordion>
            <div className="md:pt-32">
                <div className="flex items-center justify-center space-x-4">
                    <Link href={"/"}>
                        <Button
                            className="
                        text-primary-100
                        text-sm
                        font-bold
                        bg-primary-300
                        p-6
                        rounded-[40px]
                        hover:scale-110
                        transition-all
                        duration-300
                        shadow-md
                        hover:700
                        hover:shadow-primary-700
                        ">
                            Ingresar
                        </Button>
                    </Link>
                    <Link href={"/"}>
                        <Button
                            className="
                        text-primary-200
                        text-sm
                        font-bold
                        bg-primary-700
                        p-6
                        rounded-[40px]
                        hover:scale-110
                        transition-all
                        duration-300
                        shadow-md
                        hover:700
                        hover:shadow-primary-700
                        ">
                            Contactar con ventas
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default DropdownMenu;
