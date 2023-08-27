'use client'

import Image from "next/image"
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center" id="about">

      <div className="flex flex-col justify-center items-center lg:w-1/2 w-full padding-x lg:px-0 mx-auto uppercase text-secondary text-center tracking-wide pt-24">
        <p className="text-black text-xl font-semibold">About us</p>
        <div className="relative 2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl text-xl 2xl:leading-[75px] xl:leading-[75px] lg:leading-[75px] md:leading-[75px] leading-[50px] py-10 font-normal">
          <span className="text-black">A Cloud-Based,</span>
          State-of-the-art platform that makes it easier for you to manage the 
          <div className=" text-black inline-flex flex-col mx-2.5 justify-end items-end">
            <div className="relative w-full top-8">
              <div className="w-[150px] h-[50px] bg-secondary rounded-full">
                <Image
                  src={'/images/about.png'}
                  alt="about-image"
                  className=" inline scale-150 absolute bottom-7 right-0"
                  height={150}
                  width={150}
                />
              </div>
            </div>
          </div>network.
          Platform we incorporate has the most advanced <span className="text-black">technology.</span>
        </div>
      </div>

       <motion.div 
          className="md:w-1/2 w-full h-1/2 md:scale-110 scale-75 relative"
          initial={{ opacity: 0, translateY: '100px' }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: .5 }}
        >
        <Image 
          src={'/images/tesla.png'}
          alt="tesla-image"
          fill
          className="lg:object-cover object-contain"
        />
      </motion.div>

    </div>
  )
}

export default About