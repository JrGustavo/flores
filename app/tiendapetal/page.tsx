import Footer from "@/app/(landingpage)/_components/Footer";
import CategoriasPetal from "@/app/tiendapetal/_components/CategoriasPetal";
import SectionSearch from "@/app/tiendapetal/_components/SectionSearch";
import PromoBanner from "@/app/tiendapetal/_components/promo-banner";
import {SectionFlores} from "@/app/tiendapetal/_components/SectionFlores";



export default function LandingPage() {
    return (
        <>
            <SectionSearch/>
            <PromoBanner/>
            <CategoriasPetal/>
            <SectionFlores/>
            <Footer/>
        </>
    );
}
