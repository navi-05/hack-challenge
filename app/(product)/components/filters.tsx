'use client'

import CarDemo from './car-demo'
import LimitSlider from './slider/limit-slider'
import LevelSelect from './select/level-select'
import RadiusSlider from './slider/radius-slider'
import StatusSelect from './select/status-select'
import AccessSelect from './select/access-select'
import ConnectorSelect from './select/connector-select'


interface FiltersProps {
  limit: number,
  setLimit: (value: number) => void;
  radius: number,
  setRadius: (value: number) => void;
  setConnector: (value: string) => void;
  setLevel: (value: string) => void;
  setStatus: (value: string) => void;
  setAccess: (value: string) => void;
}

const Filters: React.FC<FiltersProps> = ({
  limit,
  setLimit,
  radius,
  setRadius,
  setConnector,
  setLevel,
  setStatus,
  setAccess
}) => {
  return (
    <>
      <div className='sm:flex hidden gap-5 bg-primary dark:bg-primaryDark '>

        <div className=' flex-[3] flex justify-between gap-5 rounded-lg'>
          
          {/* Limit & Radius */}
          <div className="flex-1 bg-white dark:bg-secondaryDark p-4 rounded-lg shadow-lg">
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

          <div className="flex-1 bg-white dark:bg-secondaryDark p-3 rounded-lg shadow-lg space-y-3">
            <ConnectorSelect 
              setConnector={setConnector}
            />
            <LevelSelect 
              setLevel={setLevel}
            />
          </div>
          <div className="flex-1 bg-white dark:bg-secondaryDark p-3 rounded-lg shadow-lg space-y-3">
            <StatusSelect 
              setStatus={setStatus}
            />
            <AccessSelect 
              setAccess={setAccess}
            />
          </div>
        </div>

        <div className='flex-[1] '>
          <CarDemo />
        </div>

      </div>
    </>
  )
}

export default Filters