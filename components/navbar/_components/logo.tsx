
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return (
        <div>
            <Link href={"/"}>
                <Image
                    src="/Logo/PetalFlores.svg"
                    alt="logo"
                    width={200}
                    height={12}
                    className="w-30"
                />
            </Link>
        </div> );
}

export default Logo
