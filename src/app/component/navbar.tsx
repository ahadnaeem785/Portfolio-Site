import Image from "next/image";
import Link from "next/link";
import { IoCloudDownloadOutline } from 'react-icons/io5';

export default function Navbar() {
    return (
        <div className="bg-gray-400 z-50 sticky top-0">
            <header className="text-gray-600 body-font ">
                <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <Image src={require("../../../public/asset/anarchy_2097309.png")}
                            alt="A"
                            width={500}
                            height={500}
                            className="w-[25px]"
                        />
                        <span className="ml-3 text-xl">Muhammad Ahad</span>
                    </a>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap text-white/80 items-center text-base justify-center">
                        <Link href={"/"} className="mr-5 hover:underline">Home</Link>
                        <Link href={"#abt"} className="mr-5 hover:underline">About</Link>
                        <Link href={"#skill"} className="mr-5 hover:underline">Skills</Link>
                        <Link href={"#proj"} className="mr-5 hover:underline">Projects</Link>
                        <Link href={"#contact"} className="mr-5 hover:underline">Contact</Link>
                    </nav>
                    <Link href="/asset/fakeCv.pdf">
                    <button className="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded-md text-base mt-4 md:mt-0">
                        Download Cv
                        <IoCloudDownloadOutline className="ml-3" />

                    </button>
                    </Link>
               
                </div>
            </header>
        </div>
    )
}