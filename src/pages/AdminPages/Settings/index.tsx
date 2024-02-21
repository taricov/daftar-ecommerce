import { Box, Divider } from "@mui/material"
import DarkModeToggle from "../../../components/commonUI/GlobalDarkMode"
import LocaleToggle from "../../../components/commonUI/GlobalLocale"
import PageTransitionWrapper from "../../../components/commonUI/PageTransitionWrapper/PageTransitionWrapper"

function Settings() {
  return (
    <>
    <PageTransitionWrapper>
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2
      }}>

    <LocaleToggle />
    <Divider/>
    <DarkModeToggle />
      </Box>
    </PageTransitionWrapper>
        
    </>
  )
}

export default Settings