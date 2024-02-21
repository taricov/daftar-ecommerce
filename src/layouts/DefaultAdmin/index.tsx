/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box } from "@mui/material"

function AdminDefalutLayout({children}:any) {
  return (
    <Box height={"100vh"}>
    {children}
    </Box>
  )
}

export default AdminDefalutLayout