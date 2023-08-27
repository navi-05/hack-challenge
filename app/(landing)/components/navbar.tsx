'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu } from 'react-icons/hi'
import { IoCloseCircle } from 'react-icons/io5'

const Navbar = () => {

  const [toggle, setToggle] = useState(false)

  return (
    <div className='relative flex justify-between items-center lg:py-10 lg:px-32 py-8 px-10 text-primary'>
      <Link href="/">
        <Image
          src={'/images/logo.png'}
          alt='logo'
          height={100}
          width={100}
        />
      </Link>
      <div className='hidden sm:block'>
        <ul className='flex items-center gap-10 font-md cursor-pointer text-lg'>
          <Link href="/">
            <li className='hover:text-neutral-400 transition ease-in duration-200'>HOME</li>
          </Link>
          <Link href="/product">
            <li className='hover:text-neutral-400 transition ease-in duration-200'>PRODUCT</li>
          </Link>
          <Link href="/">
            <li className='hover:text-neutral-400 transition ease-in duration-200'>COMPANY</li>
          </Link>
          <li className='hover:text-neutral-400 transition ease-in duration-200'><a href="#footer">CONTACT</a></li>
        </ul>
      </div>

      {/* Mobile Navigation */}
      {toggle ? (
      <AnimatePresence>
        <motion.div 
          className='sm:hidden fixed h-screen bg-neutral-200 w-2/3  top-0 right-0 z-20'
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 100, x: 0}}
          exit={{ opacity: 0, x: 300 }}
          transition={{ duration: .5}}
        >
          <IoCloseCircle 
            size={30} 
            className="absolute right-5 top-5 text-secondary" 
            onClick={() => setToggle(false)}  
          />
          <ul className='flex flex-col items-start p-20 text-secondary gap-10 font-md cursor-pointer text-lg'>
            <Link href="/" onClick={() => setToggle(false)}>
              <li className='hover:text-neutral-400 transition ease-in duration-200'>HOME</li>
            </Link>
            <Link href="/product" onClick={() => setToggle(false)}>
              <li className='hover:text-neutral-400 transition ease-in duration-200'>PRODUCT</li>
            </Link>
            <Link href="/" onClick={() => setToggle(false)}>
              <li className='hover:text-neutral-400 transition ease-in duration-200'>COMPANY</li>
            </Link>
            <li className='hover:text-neutral-400 transition ease-in duration-200'><a href="#footer" onClick={() => setToggle(false)}>CONTACT</a></li>
          </ul>
        </motion.div>
      </AnimatePresence>
      ): (
        <div className='sm:hidden block cursor-pointer'>
          <HiMenu size={40} onClick={() => setToggle(true)} />
        </div>
      )}
    </div>
  )
}

export default Navbar