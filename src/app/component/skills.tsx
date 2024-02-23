import { CiSquareCheck } from "react-icons/ci";
export default function Skill(){
    return(
        <div id="skill" className="bg-fixed bg-cover bg-center custom">
            <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h2 className="text-xs text-gray-600 tracking-widest font-medium title-font mb-1">
        Skills
      </h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
        My Skills
      </h1>
    </div>
    <div className="flex flex-wrap flex-col lg:flex-row -m-4 -mt-[4rem]">

      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-gray-500 text-white flex-shrink-0">
                <CiSquareCheck className="text-xl font-semibold"/>
            </div>
            <h2 className="text-gray-900  text-lg title-font font-medium">
              HTML
            </h2>
          </div>
          <div className="flex-grow">
            <div className=" relative h-1 w-full bg-gray-200 rounded-xl">
                 {/* absolute ,relative k upr khud ko align kry ga */}
            <div className="absolute h-1 bg-gray-500 w-[100%]"></div>
            </div>        
            <p className="font-semibold text-gray-500 text-right">100%</p>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-gray-500 text-white flex-shrink-0">
                <CiSquareCheck className="text-xl font-semibold"/>
            </div>
            <h2 className="text-gray-900  text-lg title-font font-medium">
              CSS
            </h2>
          </div>
          <div className="flex-grow">
            <div className=" relative h-1 w-full bg-gray-200 rounded-xl">
                 {/* absolute ,relative k upr khud ko align kry ga */}
            <div className="absolute h-1 bg-gray-500 w-[90%]"></div>
            </div>        
            <p className="font-semibold text-gray-500 text-right">90%</p>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-gray-500 text-white flex-shrink-0">
                <CiSquareCheck className="text-xl font-semibold"/>
            </div>
            <h2 className="text-gray-900  text-lg title-font font-medium">
              JAVASCRIPT/TYPESCRIPT
            </h2>
          </div>
          <div className="flex-grow">
            <div className=" relative h-1 w-full bg-gray-200 rounded-xl">
                 {/* absolute ,relative k upr khud ko align kry ga */}
            <div className="absolute h-1 bg-gray-500 w-[95%]"></div>
            </div>        
            <p className="font-semibold text-gray-500 text-right">95%</p>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-gray-500 text-white flex-shrink-0">
                <CiSquareCheck className="text-xl font-semibold"/>
            </div>
            <h2 className="text-gray-900  text-lg title-font font-medium">
              WORDPRESS
            </h2>
          </div>
          <div className="flex-grow">
            <div className=" relative h-1 w-full bg-gray-200 rounded-xl">
                 {/* absolute ,relative k upr khud ko align kry ga */}
            <div className="absolute h-1 bg-gray-500 w-[65%]"></div>
            </div>        
            <p className="font-semibold text-gray-500 text-right">65%</p>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-gray-500 text-white flex-shrink-0">
                <CiSquareCheck className="text-xl font-semibold"/>
            </div>
            <h2 className="text-gray-900  text-lg title-font font-medium">
              NEXT JS
            </h2>
          </div>
          <div className="flex-grow">
            <div className=" relative h-1 w-full bg-gray-200 rounded-xl">
                 {/* absolute ,relative k upr khud ko align kry ga */}
            <div className="absolute h-1 bg-gray-500 w-[85%]"></div>
            </div>        
            <p className="font-semibold text-gray-500 text-right">85%</p>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-gray-500 text-white flex-shrink-0">
                <CiSquareCheck className="text-xl font-semibold"/>
            </div>
            <h2 className="text-gray-900  text-lg title-font font-medium">
              GRAPHIC DESIGNING
            </h2>
          </div>
          <div className="flex-grow">
            <div className=" relative h-1 w-full bg-gray-200 rounded-xl">
                 {/* absolute ,relative k upr khud ko align kry ga */}
            <div className="absolute h-1 bg-gray-500 w-[70%]"></div>
            </div>        
            <p className="font-semibold text-gray-500 text-right">70%</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        </div>
    )
}