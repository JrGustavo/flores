"use client";

import ContentMenu from "./content-menu";

import React, { useState } from "react";

import {

    Building2,
    BookOpenText,
    ChevronDown,
    CreditCard,
    LayoutDashboard,
    PencilRuler,
    Rocket,
    QrCode,
    Github,
    LifeBuoy,
    Newspaper,
    TicketPercent,
    BriefcaseBusiness,
    ShoppingBasket,
    ScanEye,
    Pyramid, SquareDashedMousePointer,

} from "lucide-react";


interface MenuItem {
    title: string;
    menu: string;
    options: { label: string; emoji: React.ReactElement; href: string }[];
}

const items: MenuItem[] = [
    {
        title: "Productos ",
        menu: "productos-petal",
        options: [
            {
                label: "Plataforma Petal",
                emoji: <LayoutDashboard className="text-[#3a10e5] font-bold" />,
                href: "/Plataforma",
            },
            {
                label: "Prevención del fraude",
                emoji: <SquareDashedMousePointer className="text-[#3a10e5]" />,
                href: "/Prevencion",
            },
            {
                label: "Verificación KYB",
                emoji: <ScanEye className="text-[#3a10e5]" />,
                href: "/Verificacion",
            },
            {
                label: "Petal Score",
                emoji: <Pyramid className="text-[#3a10e5]" />,
                href: "/PetalScore",
            },
        ],
    },

    {
        title: "Soluciones",
        menu: "Soluciones",
        options: [
            {
                label: "Bancos",
                emoji: <Building2 className="text-[#3a10e5]" />,
                href: "/Bancos",
            },
            {
                label: "Fintechs",
                emoji: <CreditCard className="text-[#3a10e5]" />,
                href: "/Fintechs",
            },
            {
                label: "Startups",
                emoji: <Rocket className="text-[#3a10e5]" />,
                href: "/Startups",
            },
            {
                label: "Plataformas",
                emoji: <ShoppingBasket className="text-[#3a10e5]" />,
                href: "/Plataformas",
            },
        ],
    },
    {
        title: "Developers",
        menu: "Developers",
        options: [
            {
                label: "Documentación",
                emoji: <QrCode className="text-[#3a10e5]" />,
                href: "/Documentacion",
            },
            {
                label: "Bibliotecas & API",
                emoji: <BookOpenText className="text-[#3a10e5]" />,
                href: "/Bibliotecas",
            },
            {
                label: "Integraciones",
                emoji: <PencilRuler className="text-[#3a10e5]" />,
                href: "/Integraciones",
            },
            {
                label: "Petal Templates",
                emoji: <Github className="text-[#3a10e5]" />,
                href: "/PetalTemplates",
            },

        ],
    },
    {
        title: "Recursos",
        menu: "Recursos",
        options: [
            {
                label: "Centro de soporte ",
                emoji: <LifeBuoy className="text-[#3a10e5]" />,
                href: "/Centro",
            },
            {
                label: "Contactar Ventas",
                emoji: <TicketPercent className="text-[#3a10e5]" />,
                href: "/Contacto",
            },
            {
                label: "Noticias Petal",
                emoji: <Newspaper className="text-[#3a10e5]" />,
                href: "/Noticias",
            },
            {
                label: "Carreras",
                emoji: <BriefcaseBusiness className="text-[#3a10e5]" />,
                href: "/Carreras",
            },
        ],
    },
];

export function NavigationMenuBar() {
    const [activeMenu, setActiveMenu] = useState<string | null>(null);

    const handleMouseEnter = (menu: string) => {
        setActiveMenu(menu);
    };

    const handleMouseLeave = () => {
        setActiveMenu(null);
    };

    const renderMenu = (item: MenuItem) => {
        const { title, menu, options } = item;

        return (
            <div
                className="
         flex
         items-center
         relative

         "
                onMouseEnter={() => handleMouseEnter(menu)}
                onMouseLeave={handleMouseLeave}
            >
                <div className="flex items-center">
                    <div className="w-24">{title}</div>
                    <div>
                        <ChevronDown className="relative top-[1px] h-3 w-3" />
                    </div>
                    <div className="mt-20">
                        {activeMenu === menu && (
                            <ContentMenu
                                options={options.map((option) => ({
                                    ...option,
                                    href: option.href,
                                }))}
                            />
                        )}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div
            className="
        hidden
        text-md
        font-bold
        space-x-4
        w-full
        items-center
        xl:flex
        h-24
        "
        >
            {items.map((item, index) => (
                <React.Fragment key={index}>
                    <div className="cursor-pointer hidden xl:block">
                        {renderMenu(item)}
                    </div>
                </React.Fragment>
            ))}
        </div>
    );
}
