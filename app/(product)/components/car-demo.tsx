import Image from 'next/image'

const CarDemo = () => {
  return (
    <div className='bg-white dark:bg-secondaryDark  h-full p-4 rounded-lg shadow-md flex flex-col items-center justify-evenly'>
      <Image 
        src={'/images/tesla.png'}
        width={260}
        height={200}
        alt='tesla-model'
      />
      <p className='-mt-6 uppercase text-sm font-bold tracking-tighter dark:text-neutral-400'>Tesla Model S</p>
    </div>
  )
}

export default CarDemo