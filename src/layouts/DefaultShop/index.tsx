/* eslint-disable @typescript-eslint/no-explicit-any */
import Footer from "../../components/adminUI/Header"

function ShopDefalutLayout({children}:{ children: React.ReactNode }) {
  return (
    <>
    {children}
    <Footer />
    </>
  )
}

export default ShopDefalutLayout