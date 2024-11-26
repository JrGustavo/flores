"use client";

import React, { useState } from "react";

import { Button } from "@/components/ui/button";

import { X, AlignJustify } from "lucide-react";
import Link from "next/link";
import DropdownMenu from "./drop-down-menu";

const ActionButtons = () => {

    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    }

    const closeDropdown = () => {
        setDropdownVisible(false);
    }



    return (
        <div
            className="
    flex
    items-center
    md:justify-end
    md:space-x-6
    sm:px-10
    "
        >
            <div className="flex xl:space-x-6">
                <Link
                    href="/Tarifas"
                    className="
            xl:flex
            items-center
            hidden
            "
                >
                    <div className="font-bold flex ">Tarifas</div>
                </Link>


            </div>

            <div className="flex lg:space-x-4 items-center">

                <Link href={"/Contacto"}>
                    <Button
                        className="
                        hidden
                        text-primary-600
                        text-md
                        font-bold
                        bg-primary-700
                        p-6
                        rounded-[40px]
                        hover:scale-110
                        transition-all
                        duration-300
                        shadow-md
                        md:hidden
                        lg:flex
                        hover:shadow-primary-700
                ">
                        Contactar con ventas
                    </Button>
                </Link>
                <Link href={"/Login"}>
                    <Button
                        className="
              hidden
              text-primary-600
              text-md
              font-bold
              bg-secondary-300
              p-6
              rounded-[40px]
              hover:scale-110
              transition-all
              duration-300
              shadow-md
              md:hidden
              lg:flex
              hover:shadow-primary-700
                ">
                        Ingresar
                    </Button>
                </Link>
            </div>
            {isDropdownVisible && (
                <div
                    onClick={toggleDropdown}
                    className="
             bg-secondary-300
             p-3
             rounded-full
             xl:hidden
             ">
                    <X className="h-6 w-6 text-primary-600 items-center justify-center rounded-full" />
                </div>
            )}
            {!isDropdownVisible && (
                <div
                    onClick={toggleDropdown}
                    className="bg-secondary-300 p-3 rounded-full xl:hidden">
                    <AlignJustify className="h-6 w-6 text-primary-600 items-center justify-center rounded-full" />
                </div>
            )}

            {isDropdownVisible && <DropdownMenu onClose={closeDropdown} />}
        </div>
    );
};

export default ActionButtons;
