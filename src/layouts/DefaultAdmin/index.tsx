/* eslint-disable @typescript-eslint/no-explicit-any */
// import Header from "../../components/adminUI/Footer"
// import Footer from "../../components/adminUI/Header"
import { Box } from "@mui/material"

function AdminDefalutLayout({children}:any) {
  return (
    <Box height={"100vh"}>
    {children}
    </Box>
  )
}

export default AdminDefalutLayout