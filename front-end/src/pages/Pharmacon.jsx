import { Box, Typography, useTheme } from "@mui/material"
import { tokens } from "../theme"
import Header from "../components/Header"
import PharmaPredictor from "../components/PharmaPredictor"

import { useEffect } from 'react'

const Pharmacon = () => {

  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [])

  return (
    <Box mt="80px" maxWidth={"70%"} mx="auto" textAlign={"justify"}>
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="AI applicata alla farmacogenomica" subtitle="Cristian Toffolon" />
      </Box>

      {/* GRID & CHARTS */}

      <Box id="demo">
        <Box
          mt="25px"
          mb="25px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Typography
              variant="h3"
              fontWeight="600"
              color={colors.grey[100]}
            >
              Demo
            </Typography>
          </Box>
        </Box>
        <PharmaPredictor />
      </Box>
    </Box>
  )
}

export default Pharmacon