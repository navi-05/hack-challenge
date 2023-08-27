'use client'

import { useState, useEffect } from 'react'
import { Triangle } from "react-loader-spinner";

import Map from "./map"
import Preview from "./preview"
import Filters from './filters'
import { StationType } from "@/types"
import { defaultProps } from "@/utils"
import getPlaces from '@/actions/get-places'
import ProductNavbar from './product-navbar'

interface MainProps {
  darkModeToggler: boolean;
  setDarkModeToggler: (value: boolean) => void;
}

const Main: React.FC<MainProps> = ({
  darkModeToggler,
  setDarkModeToggler
}) => {

  const [coords, setCoords] = useState({
    lat: defaultProps.center.lat,
    lng: defaultProps.center.lng
  })
  const [isLoading, setIsLoading] = useState(false)
  const [stations, setStations] = useState<StationType>()
  const [limit, setLimit] = useState(20)
  const [radius, setRadius] = useState(500)
  const [connector, setConnector] = useState('all')
  const [level, setLevel] = useState('all')
  const [status, setStatus] = useState('all')
  const [access, setAccess] = useState('all')

  // Scroll functionality to the item selected in the map
  const [childClicked, setChildClicked] = useState(0)
  
  useEffect(() => {
    setIsLoading(true)
    const getPlacesE = async () => {
      const response = await getPlaces(coords.lat, coords.lng, limit, radius, status, access, connector, level)
      setStations(response)
    }
    getPlacesE().then(() => setIsLoading(false))
  }, [coords, limit, radius, connector, level, status, access])

  return (
    <div className='h-full flex flex-col justify-between gap-5'>

      <ProductNavbar 
        setCoords={setCoords}
        darkModeToggler={darkModeToggler}
        setDarkModeToggler={setDarkModeToggler}
        limit={limit}
        setLimit={setLimit}
        radius={radius}
        setRadius={setRadius}
        setConnector={setConnector}
        setLevel={setLevel}
        setStatus={setStatus}
        setAccess={setAccess}
      />

      <div className='flex sm:flex-row flex-col flex-grow max-sm:h-[80vh] h-[50vh] lg:h-[60vh] 2xl:h-[70vh] justify-between  gap-2.5'>
        <div className='flex-[3] max-sm:h-1/2 '>
          <Map 
            stations={stations!}
            coords={coords}
            setCoords={setCoords}
            setChildClicked={setChildClicked}
          />   
        </div>
        <div className='flex-1 max-sm:h-1/2'>
          {isLoading ? (
          <div className='w-full h-full flex justify-center items-center'>
            <Triangle
              height="80"
              width="80"
              color="#c3c3c3"
              ariaLabel="triangle-loading"
              visible={true}
            />
          </div>
          ): (
            <Preview
              stations={stations!}
              childClicked={childClicked}
            />
          )}
        </div>
      </div>

      <div>
        <Filters 
          limit={limit}
          setLimit={setLimit}
          radius={radius}
          setRadius={setRadius}
          setConnector={setConnector}
          setLevel={setLevel}
          setStatus={setStatus}
          setAccess={setAccess}
        />
      </div>

    </div>
  )
}

export default Main
