import Script from "next/script"
import { auth } from "@clerk/nextjs"
import { redirect } from "next/navigation"
import ModalProvider from "@/providers/ModalProvider"

const ProductLayout = ({ children }: { children: React.ReactNode}) => {

  const { userId } = auth()
  if(!userId) redirect('/sign-up')

  return (
      <div>
        <ModalProvider />
        {children}
        <Script src={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`} async />
      </div>
  )
}

export default ProductLayout