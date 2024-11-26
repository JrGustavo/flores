
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return (
        <div>
            <Link href={"/"}>
                <Image
                    src="/Logo/Petal-Principal.svg"
                    alt="logo"
                    width={100}
                    height={12}
                    className="w-30"
                />
            </Link>
        </div> );
}

export default Logo
