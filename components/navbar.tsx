import {AiTwotoneThunderbolt} from 'react-icons/ai'
import {HiMenu} from 'react-icons/hi'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center lg:py-10 lg:px-32 py-8 px-10 text-primary'>
      <AiTwotoneThunderbolt size={40} />
      <div className='hidden sm:block'>
        <ul className='flex items-center gap-10 font-md cursor-pointer text-lg'>
          <li>HOME</li>
          <li>PRODUCT</li>
          <li>COMPANY</li>
          <li>CONTACT</li>
        </ul>
      </div>
      {/* Mobile Navigation */}
      <div className='sm:hidden block cursor-pointer'>
        <HiMenu size={40} />
      </div>
    </div>
  )
}

export default Navbar