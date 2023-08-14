import { AiOutlineArrowDown } from "react-icons/ai"

import Navbar from "./navbar"

const Hero = () => {
  return (
    <div className="relative">
      <div className="h-screen w-full">
        <div className="bg-hero h-full w-full bg-center bg-cover">
          <Navbar />
          <div className="flex flex-col justify-center w-full mt-32 lg:px-32 px-10 leading-none text-primary ">
            <h6 className="text-3xl sm:text-5xl lg:px-32 px-10">Fast and Secure</h6>
            <h1 className="flex-1 font-bold tracking-tighter mx-auto text-transparent bg-clip-text bg-gradient-to-b from-white
            xs:text-6xl sm:text-[100px] md:text-[130px] lg:text-[150px] xl:text-[210px] 2xl:text-[280px]">
              CHARGING
            </h1>
            <div className="w-full lg:px-32 px-10 flex justify-end">
              <p className="w-80 text-right
              sm:text-lg text-sm">
                Be part of the transformation electric vehicles via partnership
                for the provision of filling Stations Public Electric Vehicles
              </p>
            </div>
          </div>
        </div>
        <div className="h-[8vh] w-full absolute bottom-0 z-50 bg-primary">
          <div className="flex flex-col h-full justify-center padding-x">
            <div className="relative flex items-center md:justify-between justify-center ">
              <h1 className="md:block hidden font-semibold">ELECTRIFICATION</h1>
              <div className=" h-20 w-20 md:ml-24 mb-10   rounded-full bg-black flex items-center justify-center shadow-xl shadow-neutral-600 box-shadow">
                <AiOutlineArrowDown className="text-white" size={40} />
              </div>
              <p className="md:block hidden text-secondary">&copy;2023, ALL RIGHTS RESERVED</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero