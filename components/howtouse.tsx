import Image from "next/image"
import Link from "next/link"

const HowToUse = () => {
  return (
    <div className="xl:w-1/2 w-full mx-auto py-10">

      <div className="w-full flex flex-col justify-center items-center space-y-10 ">

        <div className="w-full uppercase flex max-sm:flex-col flex-row items-center justify-center gap-2 text-primary font-semibold
        3xl:text-5xl 2xl:text-4xl xl:text-3xl lg:text-5xl md:text-4xl sm:text-2xl text-4xl">
          <p>How to Use</p>
          <p className="text-black">How to Use</p>
          <p>How to Use</p>
        </div>

        <div className="z-10 p-16 relative mr-3 ">
          <div className="z-0 flex lg:flex-row flex-col">

            <div className="flex-1 flex-col space-y-10">
              <div className="flex flex-col gap-2 items-end ">
                <p className="text-3xl font-semibold mb-4">01</p>
                <p className="uppercase text-sm font-semibold">Determine the type of charger</p>
                <p className="text-end text-neutral-500 max-lg:text-neutral-500 text-[14px]">Electric cars can be charged using different types of chargers, including Level1, Level2, and DC Fast Chargers.</p>
              </div>
              <div className="border-neutral-300 border-b-1 border"/>
              <div className="flex flex-col gap-2 items-end ">
                <p className="text-3xl font-semibold mb-4">02</p>
                <p className="uppercase text-sm font-semibold">Check the car&apos;s charging port</p>
                <p className="text-end text-neutral-500 max-lg:text-neutral-500 text-[14px]">Locate the charging port on your electric car. The location varies depending on the make and model but is usually located on one of the sides or at the front or rear of the vehicle.</p>
              </div>
              <div className="border-neutral-300 border-b-1 border"/>
              <div className="flex flex-col gap-2 items-end ">
                <p className="text-3xl font-semibold mb-4">03</p>
                <p className="uppercase text-sm font-semibold">Check the charger compatibility</p>
                <p className="text-end text-neutral-500 max-lg:text-neutral-500 text-[14px]">Ensure that the charger you plan to use is compatible with your electric car. Different car models&apos; may have specific charging requirements, so consult your car&apos;s manual or manufacturer.</p>
              </div>
            </div>

            <div className="flex-1 flex-col">
              <div className="absolute h-full w-full top-0 left-3 -z-10">
                <Image 
                  src={'/images/howtouse.jpg'}
                  alt="How to use"
                  fill
                  className="scale-95 object-cover rounded-xl"
                />
              </div>
            </div>

            <div className="flex-1 flex-col space-y-10">
              <div className="flex flex-col gap-2 items-start ">
                <p className="text-3xl font-semibold mb-4">04</p>
                <p className="uppercase text-sm font-semibold">Connect the Charger</p>
                <p className=" text-neutral-500 max-lg:text-neutral-500 text-[14px]">Depending on the charger type, follow these steps: Level1 Charger: Plug the charger into a standard 120V household outlet. Level2 Charger: connect the charger&apos;s plug to the 240V outlet. Then, connect the other end of the charger to your car&apos;s charging port. DC Fast Charger: They usually involve scanning a QR code or using an app, selecting the appropriate connector, and plugging it into your car&apos;s charing port.</p>
              </div>
              <div className="border-neutral-300 border-b-1 border"/>
              <div className="flex flex-col gap-2 items-start ">
                <p className="text-3xl font-semibold mb-4">05</p>
                <p className="uppercase text-sm font-semibold">Start the charging process</p>
                <p className=" text-neutral-500 max-lg:text-neutral-500 text-[14px]">Once the charger is securely connected, you can start the charging process. Some chargers may require you to initiate charging.</p>
              </div>
              <div className="border-neutral-300 border-b-1 border"/>
              <div className="flex flex-col gap-2 items-start ">
                <p className="text-3xl font-semibold mb-4">06</p>
                <p className="uppercase text-sm font-semibold">Unplug and finish chargin</p>
                <p className=" text-neutral-500 max-lg:text-neutral-500 text-[14px]">When your car reaches the desired battery level or when you&apos;re ready to stop charging.</p>
              </div>
            </div>
          </div>
        </div>
        
      </div>

      <div className="lg:padding-0 px-8">
        <div className="relative z-0 h-[600px]">

          <div className="absolute inset-0 -z-10 h-full w-full  mx-auto">
            <Image
              src={'/images/howtouse2.jpg'}
              alt="How-to-use-2"
              className="object-cover"
              fill
            />
          </div>

          <div className="p-10 h-full flex flex-col justify-between ">

            <div className="flex w-full justify-end text-4xl text-white text-end uppercase mt-10">
              Easy experience <br />with electric<br /> vehicles
            </div>
            <div className="flex w-full justify-between items-center">
              <div className="flex flex-col">
                <p className="uppercase text-neutral-400/75 text-xs">Special Offer</p>
                <h3 className="uppercase text-white text-2xl">50% OFF Prices</h3>
              </div>
              <button className="px-5 py-2 bg-black text-white rounded-full uppercase text-sm">
                Learn More
              </button>
            </div>


          </div>

        </div>
        <div className="flex flex-row w-full">
          <div className="flex-1 relative w-96 h-[500px]">
            <Image
              src={'/images/howtouse3.webp'}
              alt="How-to-use-2"
              className="object-cover"
              fill
            />
          </div>
          <div className="flex-1 relative w-96 h-[500px] overflow-hidden">
            <div className="flex flex-col h-full justify-between sm:p-16 p-2.5">
              <div className="flex items-center justify-center gap-2.5">
                <div className=" flex-1 3xl:text-6xl md:text-4xl text-xl uppercase font-semibold">
                  port charging
                </div>
              </div>
              <div className="flex flex-col gap-2.5">
                <p className="text-sm text-neutral-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo commodi impedit illum nihil, laborum quaerat dolore laudantium debitis ad. Repellat assumenda rerum necessitatibus nihil atque fugiat excepturi ratione ipsam quaerat?</p>
                <Link href='/' className=" underline">
                  TYPE OF PORT
                </Link>
              </div>
            </div>
            
          </div>
        </div>
      </div>

    </div>
  )
}

export default HowToUse