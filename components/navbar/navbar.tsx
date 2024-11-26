import Logo from "./_components/logo";
import ActionButtons from "@/components/navbar/_components/action-buttons";
import {NavigationMenuBar} from "@/components/navbar/_components/menu";



export default function Navbar() {
    return (
        <div
            className="
    flex
    items-center
    justify-between
    pr-10
    lg:px-20
    sticky
    top-0
    z-50
    bg-secondary-40
    h-24
    "
        >
            <div
                className="
        px-4
        "
            >
                <Logo />
                <div className="w-40">
                </div>
            </div>

            <div className="flex items-center">
                <NavigationMenuBar />
                <ActionButtons />
            </div>
        </div>
    );
};
