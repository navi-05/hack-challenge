'use client'

import Modal from "@/components/ui/modal"
import useDarkMode from "@/hooks/useDarkMode"
import usePreviewModal from "@/hooks/usePreviewModal"

const PreviewModal = () => {

  const {isOpen, onClose, station} = usePreviewModal()
  const { isDarkMode } = useDarkMode()

  // @ts-ignore
  const filteredStation = Object.entries(station).filter(([key, value]) => value !== null )

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
    > 
      <div className="flex flex-col gap-5">
      <div className="flex justify-between w-full space-x-10 items-center">
          <div>
            <h1 className={`uppercase font-semibold text-xl 
              ${isDarkMode && 'text-white'}
            `} >{station.station_name}</h1>          
            <p className="capitalize text-neutral-600 text-md">
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

        <div className="flex items-center justify-evenly max-xs:justify-between mt-5">
          <div className="flex flex-col items-center justify-center">
            <p className="uppercase tracking-tighter text-sm text-neutral-400">Started on</p>
            <p className={`tracking-wide text-lg
              ${isDarkMode && 'text-white'}
            `}>{station.open_date?.toString()}</p>
          </div>
          <div className="h-16 border-l border-neutral-200 -mx-10" />
          <div className="flex flex-col items-center justify-center">
            <p className="uppercase tracking-tighter text-sm text-neutral-400">Last Updated</p>
            <p className={`tracking-wide text-lg
              ${isDarkMode && 'text-white'}
            `}>{station.date_last_confirmed?.toString()}</p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-4 max-h-[400px] overflow-y-scroll">
          {filteredStation.map(([key, value]) => (
            <div
              key={key}
              className="w-full flex justify-between gap-5"
            >
              <h4 className={`w-1/2 text-right uppercase font-medium
                ${isDarkMode && 'text-neutral-400'}
              `}>
                {key.split('_').join(' ')}
              </h4>
              <p className="w-1/2 text-neutral-500 capitalize text-left">
                {value?.toString()}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </Modal>
  )
}

export default PreviewModal