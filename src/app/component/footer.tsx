import Link from "next/link";
import Image from "next/image";
import { FaYoutube } from "react-icons/fa";
export default function Footer() {
    return (
        <div className="bg-gray-400">
            <footer className="text-gray-600 body-font">
                <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <Image src={require("../../../public/asset/anarchy_2097309.png")}
                            alt="A"
                            width={500}
                            height={500}
                            className="w-[25px]"
                        />
                        <span className="ml-3 text-xl">Muhammad Ahad</span>
                    </a>
                    <p className="text-sm text-white/80 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                        © 2023 web developer —
                        <a
                            href="https://twitter.com/ahadnaeem785"
                            className="text-gray-600 ml-1"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <span className="text-sm text-white/80 sm:py-2 sm:mt-0">@muhammadahad</span>
                        </a>
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <>
                            <Link
                                target="_blank"
                                href={"https://www.youtube.com/@ahadnaeem4996"}>
                                <FaYoutube className="text-3xl hover:text-[#ff0000]" />
                            </Link>
                        </>


                    </span>
                </div>
            </footer>

        </div>
    )
}