import Link from "next/link"
import { AiOutlineArrowRight } from "react-icons/ai"
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa'

import Input from "@/components/ui/input"

const Footer = () => {
  return (
    <>
    <div id="footer" className="xl:w-1/2 w-full mx-auto my-10 pb-10 px-14">
      <h1 className="font-semibold text-3xl uppercase mb-10">Newsletter Subs</h1>
      <div className="flex sm:flex-row flex-col justify-center items-center gap-10">
        <div className="flex-1 flex-col space-y-4">
          <div className="flex-1 flex items-center justify-center">
            <Input 
              type="email"
              placeholder="Enter your Email"
            />
            <AiOutlineArrowRight size={20} className="cursor-pointer" />
          </div>
          <p>Send us a mail to receive newsletters on our latest products and services.</p>
        </div>
        <div className="flex-1 flex-col space-y-10">
          <div className="flex flex-wrap sm:justify-end justify-center gap-10 leading-3 sm:px-10 text-secondary cursor-pointer">
            <a href="/" className="hover:text-neutral-400 duration-200 ease-in transition">HOME</a>
            <a href="/" className="hover:text-neutral-400 duration-200 ease-in transition">COMPANY</a>
            <a href="#contact" className="hover:text-neutral-400 duration-200 ease-in transition">CONTACT</a>
            <a href="#about" className="hover:text-neutral-400 duration-200 ease-in transition">ABOUT</a>
            <Link href="/product" className="hover:text-neutral-400 duration-200 ease-in transition">PRODUCT</Link>
          </div>
          <div className="flex items-center justify-center sm:justify-end px-10 gap-4">
            <Link href="/" className="w-10 h-10 bg-primary hover:bg-neutral-400 duration-200 ease-in transition cursor-pointer text-neutral-700 flex items-center justify-center rounded-full">
              <FaFacebook size={20} />
            </Link>
            <Link href="https://www.linkedin.com/in/naveen-kumar-bba000216" className="w-10 h-10 bg-primary hover:bg-neutral-400 duration-200 ease-in transition cursor-pointer text-neutral-700 flex items-center justify-center rounded-full">
              <FaLinkedin size={20} />
            </Link>
            <Link href="/" className="w-10 h-10 bg-primary hover:bg-neutral-400 duration-200 ease-in transition cursor-pointer text-neutral-700 flex items-center justify-center rounded-full">
              <FaInstagram size={20} />
            </Link>
          </div>
        </div>
      </div>
      

    </div>

    <div className="xl:w-1/2 w-full mx-auto border-b border-neutral-200 mt-20" />

    <div className="xl:w-1/2 xl:px-0 px-14 w-full mx-auto flex flex-col sm:flex-row justify-between items-center py-2 text-sm pb-10">
      <div className="flex flex-col sm:flex-row items-center sm:gap-2.5">
        <p>Privacy Policy</p>
        <p>Terms & Conditions</p>
      </div>
      <div>
        &copy;2023 All rights Reserved
      </div>
    </div>
    </>
  )
}

export default Footer