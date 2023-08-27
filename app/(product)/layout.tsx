import ModalProvider from "@/providers/ModalProvider"

const ProductLayout = ({ children }: { children: React.ReactNode}) => {
  return (
      <div>
        <ModalProvider />
        {children}
        <script src={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}></script>
      </div>
  )
}

export default ProductLayout