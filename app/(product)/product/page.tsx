'use client'

import { useEffect, useState } from 'react'
import Main from "@/app/(product)/components/main"

const ProductPage = () => {

  // Using this trick to deal with the NextJS13 Hydration issues
  const [isMounted, setIsMounted] = useState(false)

  let isDarkMode: boolean = false;  
  const [darkModeToggler, setDarkModeToggler] = useState(isDarkMode)

  useEffect(() => {
    setDarkModeToggler(JSON.parse(sessionStorage?.getItem('dark-mode-storage')!)?.state?.isDarkMode)
    setIsMounted(true)
  }, [])

  
  
  if(!isMounted) return null;

  return (
    <div className={`${darkModeToggler && 'dark'}`}>
      <div className='h-screen p-5 space-y-4 bg-primary dark:bg-primaryDark'>
        <Main 
          darkModeToggler={darkModeToggler}
          setDarkModeToggler={setDarkModeToggler}
        />
      </div>
    </div>
  )
}

export default ProductPage