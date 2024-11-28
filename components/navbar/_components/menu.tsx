"use client";

import ContentMenu from "./content-menu";

import React, { useState } from "react";

import {
    BriefcaseBusiness, Cake, ChevronDown, Clover, Flower2Icon, FlowerIcon, Gem, Gift, HeartPulse, Leaf, PawPrint, Sprout


} from "lucide-react";
import {Balloon, Cactus, Cheers, Flame, FlowerTulip, Gif, Plant, Tree} from '@phosphor-icons/react';



interface MenuItem {
    title: string;
    menu: string;
    options: { label: string; emoji: React.ReactElement; href: string }[];
}

const items: MenuItem[] = [
    {
        title: "Flores",
        menu: "Arreglos florales",
        options: [
            {
                label: "Arreglos florales",
                emoji: <FlowerIcon className="text-[#1D3C34]" />,
                href: "/Plataforma",
            },
            {
                label: "Flores preservadas",
                emoji: <FlowerTulip className="text-[#1D3C34] text-2xl font-bold" />,
                href: "/Prevencion",
            },
            {
                label: "Todas las flores",
                emoji: <Flower2Icon className="text-[#1D3C34]" />,
                href: "/Prevencion",
            },
            {
                label: "Combos florales",
                emoji: <Clover className="text-[#1D3C34]" />,
                href: "/PetalScore",
            },
        ],
    },

    {
        title: "Plantas",
        menu: "Plantas",
        options: [
            {
                label: "Orquídeas",
                emoji: <Leaf className="text-[#1D3C34]" />,
                href: "/Bancos",
            },
            {
                label: "Mini Árboles",
                emoji: <Tree className="text-[#1D3C34] text-2xl font-bold"  />,
                href: "/Fintechs",
            },
            {
                label: "Plantas de exterior",
                emoji: <Cactus className="text-[#1D3C34] text-2xl font-bold" />,
                href: "/Startups",
            },
            {
                label: "Plantas de interior",
                emoji: <Sprout className="text-[#1D3C34] text-2xl font-bold"   />,
                href: "/Plataformas",
            },
        ],
    },
    {
        title: "Regalos",
        menu: "Regalos",
        options: [
            {
                label: "Peluches",
                emoji: <PawPrint className="text-[#1D3C34]" />,
                href: "/Documentacion",
            },
            {
                label: "Globos",
                emoji: <Balloon className="text-[#1D3C34] text-2xl font-bold" />,
                href: "/Bibliotecas",
            },
            {
                label: "Joyas",
                emoji: <Gem className="text-[#1D3C34]" />,
                href: "/Integraciones",
            },
            {
                label: "Velas & Aromas",
                emoji: <Flame className="text-[#1D3C34] text-2xl font-bold" />,
                href: "/PetalTemplates",
            },

        ],
    },
    {
        title: "Ocasiones",
        menu: "Ocasiones",
        options: [
            {
                label: "Aniversarios ",
                emoji: <Cheers className="text-[#1D3C34] text-2xl font-bold"/>,
                href: "/Centro",
            },
            {
                label: "Cumpleaños",
                emoji: <Cake className="text-[#1D3C34]" />,
                href: "/Contacto",
            },
            {
                label: "Graduación",
                emoji: <Gift className="text-[#1D3C34]" />,
                href: "/Noticias",
            },
            {
                label: "Mejórate pronto",
                emoji: <HeartPulse className="text-[#1D3C34]" />,
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
