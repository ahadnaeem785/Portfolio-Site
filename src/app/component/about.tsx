import Image from "next/image";

export default function About(){
    return(
        <div id="abt" className="bg-fixed bg-cover bg-center custom">
            <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image
        className="object-cover object-center rounded mx-auto w-[300px] h-[390px]"
        alt="hero"
        width={300}
        height={390}
        src={require("../../../public/asset/tour.jpg")}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        About Me
      </h1>
      <p className="mb-5 leading-relaxed">
        Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
        plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk
        tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard
        chambray.
      </p>
      <div className="flex justify-center">
        <a href="/asset/fakeCv.pdf">
        <button className="inline-flex text-white bg-gray-600 border-0 py-2 px-4 focus:outline-none hover:bg-gray-800 rounded-lg text-lg">
          View CV
        </button>
        </a>
     
      </div>
    </div>
  </div>
</section>

        </div>
    )
}