'use client'

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {BsArrowUpRight} from 'react-icons/bs'

const Features = () => {
  return (
    <div className="w-full lg:mt-24 mb-10 py-10">

      <div className="lg:w-1/2 w-full lg:px-0 px-5 mx-auto space-y-10">

        <div className="flex sm:flex-row flex-col space-y-2 items-center justify-between uppercase">
          <p className=" font-semibold tracking-tighter
          lg:text-3xl text-xl">Why Choose us</p>
          <Link href='/product' className="px-5 py-2 bg-black hover:bg-neutral-700 duration-200 transition ease-in text-white rounded-full uppercase text-sm">
            Get Started
          </Link>
        </div>

        <div className="w-full flex flex-col md:flex-row max-md:space-y-2.5 gap-2.5">
          <motion.div 
            className="group flex-1 w-full flex flex-col gap-5 cursor-default"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .5  }}
            viewport={{ amount: .2 }}
          >
            <div className="relative w-full h-[300px] sm:h-[400px] xl:h-[500px] overflow-hidden">
              <Image
                  src={'/images/feature1.jpg'}
                  alt="img"
                  fill
                  className="object-cover group-hover:scale-125 transition-all duration-300 ease-in-out"
              />
            </div>
            <h3 className="text-xl uppercase font-medium tracking-tighter">Charging Station</h3>
            <p className=" text-neutral-400 w-[70%] text-sm -mt-2.5">We have 1000+ charging points to satisfy any need</p>
          </motion.div>
          <motion.div 
            className="group flex-1 w-full flex flex-col gap-5 cursor-default"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .5 }}
            viewport={{ amount: .2 }}
          >
            <div className="relative w-full h-[300px] sm:h-[400px] xl:h-[500px] overflow-hidden">
              <Image
                  src={'/images/feature2.jpg'}
                  alt="img"
                  fill
                  className="object-cover group-hover:scale-125 transition-all duration-300 ease-in-out"
              />
            </div>
            <h3 className="text-xl uppercase font-medium tracking-tighter">Energy Consumption</h3>
            <p className=" text-neutral-400 w-[70%] text-sm -mt-2.5">we&apos;ve been power effecient since we started around 60 kwh per day</p>
          </motion.div>
          <motion.div 
            className="group flex-1 w-full flex flex-col gap-5 cursor-default"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .5 }}
            viewport={{ amount: .2 }}
          >
            <div className="relative w-full h-[300px] sm:h-[400px] xl:h-[500px] overflow-hidden">
              <Image
                  src={'/images/feature3.jpg'}
                  alt="img"
                  fill
                  className="object-cover group-hover:scale-125 transition-all duration-300 ease-in-out"
              />
            </div>
            <h3 className="text-xl uppercase font-medium tracking-tighter">Customer</h3>
            <p className=" text-neutral-400 w-[70%] text-sm -mt-2.5">We have 3000+ loyal customer using our service</p>
          </motion.div>
        </div>

      </div>

      <div className="lg:w-1/2 w-full mx-auto my-12 border border-b-1 border-neutral-200" />

      <div className="lg:w-1/2 w-full lg:p-0 padding-x mx-auto">

        <div className="flex flex-col justify-center items-center gap-5 ">

          <div className="uppercase 3xl:text-[120px] 2xl:text-[90px] xl:text-[80px] lg:text-[65px] md:text-[70px] sm:text-[45px] xs:text-[40px] text-[25px]  font-bold tracking-tighter">
            Fast charging
          </div>

          <div className="w-full h-[350px] relative rounded-full">
            <Image 
              src={'/images/plug.jpg'}
              alt="plug-image"
              fill
              className="object-cover rounded-full"
            />
          </div>

          <Link href='/product' className="w-24 h-24 rounded-full bg-inherit backdrop-blur-lg shadow-lg flex justify-center items-center text-white -mt-16 z-10 cursor-pointer">
            <BsArrowUpRight size={45} />
          </Link>

        </div>


      </div>

    </div>
  )
}

export default Features