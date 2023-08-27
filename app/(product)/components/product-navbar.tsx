'use client'

import { useState } from 'react'
import { RiSearch2Fill } from 'react-icons/ri'
import Autocomplete from "react-google-autocomplete"
import { ImMenu } from 'react-icons/im'

import { UserButton } from "@clerk/nextjs";
import { dark } from '@clerk/themes'

import { PlaceType } from '@/types';
import SwitchDemo from '@/components/ui/switch'
import Link from 'next/link'
import Image from 'next/image'
import { IoClose } from 'react-icons/io5'
import LimitSlider from './slider/limit-slider'
import RadiusSlider from './slider/radius-slider'
import ConnectorSelect from './select/connector-select'
import LevelSelect from './select/level-select'
import StatusSelect from './select/status-select'
import AccessSelect from './select/access-select'

interface ProductNavbarProps {
  setCoords: (e: any) => void;
  darkModeToggler: boolean;
  setDarkModeToggler: (value: boolean) => void;
  limit: number,
  setLimit: (value: number) => void;
  radius: number,
  setRadius: (value: number) => void;
  setConnector: (value: string) => void;
  setLevel: (value: string) => void;
  setStatus: (value: string) => void;
  setAccess: (value: string) => void;
}

const ProductNavbar: React.FC<ProductNavbarProps> = ({
  setCoords,
  darkModeToggler,
  setDarkModeToggler,
  limit,
  setLimit,
  radius,
  setRadius,
  setConnector,
  setLevel,
  setStatus,
  setAccess
}) => {

  const onPlaceSelected = (place: PlaceType) => {
    place && setCoords({
      lat: place.geometry?.location?.lat()!,
      lng: place.geometry?.location?.lng()!
    })
  }

  const [toggle, setToggle] = useState(false)

  return (
    <div className="bg-white/70 dark:bg-secondaryDark shadow-md dark:shadow-neutral-700 p-3 rounded-lg">
      {/* Desktop Navbar */}
      <div className="max-sm:hidden flex justify-between items-center text-neutral-800">
        <div className="cursor-pointer  hover:opacity-80 transition duration-100 ease-in">
          <Link href="/">
            <Image
              src={'/images/logo.png'}
              alt='logo'
              height={100}
              width={100}
              className='bg-white rounded-full object-fill'
            />
          </Link>
        </div>
        <div className='flex gap-10'>
          <div className='flex items-center gap-2.5'>
            <RiSearch2Fill className="text-neutral-300 dark:text-white" size={20} />

            {darkModeToggler ? (
              <Autocomplete
                apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
                onPlaceSelected={(place) => onPlaceSelected(place)}
                style={{ padding: '4px', background: 'transparent', color: 'white', borderBottom: '1px solid white', outline: 'none'}}
              >
              </Autocomplete>
            ): (
              <Autocomplete
                apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
                onPlaceSelected={(place) => onPlaceSelected(place)}
                style={{ padding: '4px', borderBottom: '1px solid black', outline: 'none'}}
              >
              </Autocomplete>
            )}
          </div>
          <div className="flex items-center gap-10 ">
            <SwitchDemo 
              setDarkModeToggler={setDarkModeToggler}
            />
            {darkModeToggler ? (
              <UserButton 
                afterSignOutUrl='/' 
                appearance={{
                  baseTheme: dark
                }}
              />
            ) : (
              <UserButton 
                afterSignOutUrl='/' 
              />
            )}
          </div>
        </div>
      </div>

      <div className='max-sm:flex hidden justify-between items-center text-neutral-800'>
        <div className="cursor-pointer  hover:opacity-80 transition duration-100 ease-in">
            <Link href="/">
              <Image
                src={'/images/logo.png'}
                alt='logo'
                height={100}
                width={100}
                className='bg-white rounded-full object-fill'
              />
            </Link>
        </div>

        <div className='flex items-center gap-5'>
          <UserButton 
            afterSignOutUrl='/' 
            appearance={{
              baseTheme: dark
            }}
          />
          <ImMenu 
            size={25} 
            onClick={() => setToggle((prev) => !prev)} 
            className="dark:text-white"
          />
        </div>
      </div>

      {/* Mobile Navigation */}
      {toggle && (
        <div className='absolute sm:hidden top-0 right-0 w-2/3 bg-primary dark:bg-primaryDark h-screen z-10 p-8'>
          <div className='flex flex-col  gap-10'>

            <div className='flex sm:flex-row-reverse flex-col justify-evenly max-sm:gap-2.5 '>

              <IoClose 
                onClick={() => setToggle((prev) => !prev)} 
                size={25}
                className="dark:text-white "
              />

              <SwitchDemo 
                setDarkModeToggler={setDarkModeToggler}
              />    

              <h3 className='text-xl uppercase tracking-tighter font-semibold dark:text-white'>Filters</h3>
            </div>

            <div className='flex flex-col gap-2.5'>
              <div className=' flex max-sm:flex-col w-full justify-between gap-5 rounded-lg'>

                <div className="bg-white dark:bg-secondaryDark p-4 rounded-lg shadow-lg">
                  <div className="flex flex-col gap-5">
                    <LimitSlider
                      limit={limit}
                      setLimit={setLimit}
                    />
                    <RadiusSlider
                      radius={radius}
                      setRadius={setRadius}
                    />
                  </div>
                </div>

                <div className=" bg-white dark:bg-secondaryDark p-3 rounded-lg shadow-lg space-y-3">
                  <ConnectorSelect 
                    setConnector={setConnector}
                  />
                  <LevelSelect 
                    setLevel={setLevel}
                  />
                </div>

                <div className=" bg-white dark:bg-secondaryDark p-3 rounded-lg shadow-lg space-y-3">
                  <StatusSelect 
                    setStatus={setStatus}
                  />
                  <AccessSelect 
                    setAccess={setAccess}
                  />
                </div>

              </div>
            </div>

            <div className='dark:text-white flex flex-col gap-2 w-full'>
              <h3 className='font-semibold text-lg tracking-tighter text-center uppercase'>Search by Location</h3>
              {darkModeToggler ? (
                <Autocomplete
                  apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
                  onPlaceSelected={(place) => onPlaceSelected(place)}
                  style={{ padding: '4px', background: 'transparent', color: 'white', borderBottom: '1px solid white', outline: 'none'}}
                >
                </Autocomplete>
              ): (
                <Autocomplete
                  apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
                  onPlaceSelected={(place) => onPlaceSelected(place)}
                  style={{ padding: '4px', borderBottom: '1px solid black', outline: 'none'}}
                >
                </Autocomplete>
              )}
            </div>

          </div>

        </div>
      )}

    </div>    
  )
}

export default ProductNavbar