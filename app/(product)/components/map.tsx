'use client'

import Image from 'next/image';
import GoogleMapReact from 'google-map-react'

import { StationType } from '@/types';

interface MapProps {
  stations: StationType;
  coords: {
    lat: number;
    lng: number;
  };
  setCoords: (e: any) => void;
  setChildClicked: (e: number) => void;
}

const Child = ({
  key,
  lat,
  lng,
  children
}: {
  key: number | null;
  lat: number | null;
  lng: number | null;
  children: React.ReactNode
}) => {
  return (
    <>
      {children}
    </>
  )
}

const Map: React.FC<MapProps> = ({ stations, coords, setCoords, setChildClicked }) => {
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY! }}
        defaultCenter={coords}
        center={coords}
        defaultZoom={15}
        options={{ disableDefaultUI: true, zoomControl: false }}
        onChange={(e) => {
          setCoords({
            lat: e.center.lat,
            lng: e.center.lng
          })
        }}
        onChildClick={(e) => setChildClicked(e)}
      >
        {stations?.fuel_stations.map((fuel_station, i) => (
          <Child
            key={i}
            lat={fuel_station.latitude}
            lng={fuel_station.longitude}
          >
            <div className='group relative space-y-1'>

              <Image
                src={'/images/ev.png'}
                alt="ev-icon"
                width={40}
                height={40}
                className={`cursor-pointer group-hover:scale-[2] origin-bottom transition duration-100 ease-in-out`}
              />

              <div className='absolute bottom-[95px] -left-6 bg-white p-4 shadow-lg rounded-lg w-[150px] hidden group-hover:block transition duration-1000 ease-in-out '>
                <div className='flex flex-col gap-5 '>
                  <div className='flex flex-col gap-1 '>
                    <h3 className='uppercase font-bold'>{fuel_station.station_name}</h3>
                    <p className='text-md capitalize text-neutral-600'>
                      {fuel_station.access_code} - &nbsp;
                      {fuel_station.station_phone === null ? "N/A" : fuel_station.station_phone}
                    </p>
                  </div>

                  <div>
                    <p className='text-gray-400 text-[12px]'>Click to preview</p>
                  </div>

                  <div className='absolute -bottom-2 w-6 h-6 rotate-[45deg] bg-black -z-10'>

                  </div>

                </div> 
              </div>

            </div>
          </Child>
        ))}
      </GoogleMapReact>
    </div>
  )
}

export default Map