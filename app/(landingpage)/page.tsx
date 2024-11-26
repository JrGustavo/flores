import Footer from "@/app/(landingpage)/_components/Footer";
import Header from "@/app/(landingpage)/_components/Header";
import Navbar from "@/components/navbar/navbar";
import SecondSection from "@/app/(landingpage)/_components/SecondSection";
import FourSection from "@/app/(landingpage)/_components/FourSection";
import ThirdSection from "@/app/(landingpage)/_components/ThirdSection";
import SixSection from "@/app/(landingpage)/_components/SixSection";
import SevenSection from "@/app/(landingpage)/_components/SevenSection";
import FiveSection from "@/app/(landingpage)/_components/FiveSection";
import AditionalSection from "@/app/(landingpage)/_components/AditionalSection";


export default function LandingPage() {
    return (
        <>
        <Navbar/>
        <Header/>
         <SecondSection/>
            <AditionalSection/>
            <ThirdSection/>
            <FourSection/>
            <FiveSection/>
            <SixSection/>
            <SevenSection/>
        <Footer/>
        </>
    );
}
