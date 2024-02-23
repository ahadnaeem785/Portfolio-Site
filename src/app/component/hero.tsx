"use client"
import Image from "next/image"
import Link from "next/link";
import Typewriter from 'typewriter-effect';
export default function Hero() {
    return (

        <section className="text-gray-600 body-font bg-fixed bg-cover bg-center custom">
            <div className="container mx-auto flex px-8 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font font-sans font-bold sm:text-4xl text-3xl mb-4 text-gray-900">
                        I AM
                        <br className="hidden lg:inline-block" />
                        <Typewriter
                            options={{
                                strings: ['Web Develeoper', "UI/UX Designer", 'Gen-Ai Developer'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                        <div className="w-[100px] h-[2px] bg-blue-600"></div>

                    </h1>
                    <p className="mb-8 leading-relaxed ">
                        Hey, I'm Muhammad Ahad and I'm web developer or front end developer for  
                        1 year, who creates professional responsive websites which improves the lives of people around me.
                    </p>
                    <div className="flex -mt-2 justify-center">
                        <Link href={"#contact"}>
                        <button className="inline-flex text-white bg-gray-600 border-0 py-2 px-5 focus:outline-none hover:bg-gray-800 rounded-md text-base">
                            Contact
                        </button>
                        </Link>

                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <Image
                        className="object-cover object-center rounded mx-auto w-[18rem] "
                        alt="hero"
                        width={400}
                        height={400}
                        src={require("../../../public/asset/tour.jpg")}
                    />
                </div>
            </div>
        </section>


    )
}