'use client'

import Image from "next/image"
import { useMemo } from 'react'

import { FuelStationType } from "@/types"
import usePreviewModal from "@/hooks/usePreviewModal"

interface PreviewCardProps {
  station: FuelStationType,
  selected: boolean,
  refProp: any
}

const PreviewCard: React.FC<PreviewCardProps> = ({
  station,
  selected,
  refProp
}) => {

  const previewModal = usePreviewModal()

  if(selected) refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" })

  const buttonColor = useMemo(() => {
    return station.ev_pricing === "Free" ? "from-green-400 via-green-500 to-green-600" : "from-rose-400 via-rose-500 bg-rose-600"
  }, [station]) 

  const onClick = () => {
    previewModal.onOpen()
    previewModal.setStation(station)
  }

  return (
    <div className="w-full rounded-md bg-white dark:bg-secondaryDark p-4 my-2">
      <div className="flex flex-col gap-5">

        <div className="flex justify-between w-full space-x-10 items-center">
          <div>
            <h1 className="uppercase font-semibold text-xl dark:text-white max-xs:text-base max-sm:text-lg">{station.station_name}</h1>          
            <p className="capitalize text-neutral-600 max-xs:text-xs max-sm:text-sm">
              {station.access_code} - {station.access_days_time !== null ? station.access_days_time : "N/A"}
            </p>
          </div>
          <div>
            <h1>{station.ev_pricing === "Free" ? (
              <span className="px-2 py-1 rounded-full bg-green-600 text-sm text-white">
                Free
              </span> 
            ) : (
              <span className="px-2 py-1 rounded-full bg-rose-500 text-sm text-white">
                Paid
              </span> 
            )}</h1>
          </div>
        </div>

        <div className="flex items-center justify-between 2xl:justify-evenly mt-5 px-4 2xl:p-0">
          <div className="flex flex-col items-center justify-center">
            <p className="uppercase tracking-tighter text-sm text-neutral-400">Started on</p>
            <p className="tracking-wide text-lg dark:text-white max-xs:text-base" >{station.open_date?.toString()}</p>
          </div>
          <div className="h-16 border-l border-neutral-200 -mx-10" />
          <div className="flex flex-col items-center justify-center">
            <p className="uppercase tracking-tighter text-sm text-neutral-400">Last Updated</p>
            <p className="tracking-wide text-lg dark:text-white max-xs:text-base ">{station.date_last_confirmed?.toString()}</p>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-2.5">
          <div className="flex items-center gap-2">
            <Image 
              src={'/images/ev1.png'}
              alt="ev-logo"
              width={24}
              height={24}
              className=""
            />
            <p className=" text-neutral-500 max-xs:text-xs max-sm:text-sm">
              {station.ev_network}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Image 
              src={'/images/ev2.png'}
              alt="ev-logo"
              width={24}
              height={24}
              className=""
            />
            <p className=" text-neutral-500 max-xs:text-xs max-sm:text-sm">
              {station.street_address},&nbsp;
              {station.city},&nbsp;
              {station.state},&nbsp;
              {station.country}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Image 
              src={'/images/phone.png'}
              alt="ev-logo"
              width={24}
              height={24}
              className=""
            />
            <p className=" text-neutral-500 max-xs:text-xs max-sm:text-sm">
              {station.station_phone}
            </p>
          </div>
        </div>

        <div className="w-full mt-5">
          <button
            className={`w-full px-5 py-2.5 rounded-md font-medium bg-gradient-to-tl text-white
              ${buttonColor}
              hover:opacity-90 hover:ring-1 hover:ring-neutral-600 dark:hover:ring-white
            `}
            onClick={onClick}
          >
            View more details
          </button>
        </div>

      </div>
    </div>
  )
}

export default PreviewCard