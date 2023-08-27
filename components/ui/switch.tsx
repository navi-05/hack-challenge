import React from 'react';
import * as Switch from '@radix-ui/react-switch';
import { BsFillSunFill } from "react-icons/bs"
import { RiMoonClearFill } from 'react-icons/ri'
import useDarkMode from '@/hooks/useDarkMode';

interface SwitchDemoProps {
  setDarkModeToggler: (value: boolean) => void;
}

const SwitchDemo: React.FC<SwitchDemoProps> = ({
  setDarkModeToggler
}) => {

  const { setDarkMode } = useDarkMode()
  const { state: { isDarkMode } } = JSON.parse(sessionStorage.getItem('dark-mode-storage')!)

  return (
    <form>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <BsFillSunFill className="dark:text-white" />
        <Switch.Root 
          className="w-[42px] h-[25px] bg-neutral-300 rounded-full relative shadow-sm focus:shadow-lg data-[state='checked']:bg-rose-300" 
          id="dark-mode-toggler"
          checked={isDarkMode}
          onCheckedChange={(checked) => {
            setDarkModeToggler(checked)
            setDarkMode(checked)
          }}
          >
          <Switch.Thumb 
            className="block rounded-full w-[21px] h-[21px] bg-primaryDark dark:bg-secondaryDark shadow-sm transition duration-100 translate-x-[2px] will-change-transform data-[state='checked']:translate-x-[19px]" 
            />
        </Switch.Root>
        <RiMoonClearFill  className="dark:text-white" />
      </div>
    </form>
  )
}

export default SwitchDemo;