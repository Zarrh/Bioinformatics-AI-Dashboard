import { Box, IconButton, useTheme, Typography } from "@mui/material"
import { useContext } from "react"
import { ColorModeContext, tokens } from "../theme"
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined"
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined"
import GitHubIcon from '@mui/icons-material/GitHub'
import { logo4 } from "../assets"

const Topbar = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const colorMode = useContext(ColorModeContext)

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Box
        display="flex"
        alignItems="center" 
        borderRadius="3px"
      >
        <img src={logo4} style={{width: "160px", height: "160px"}} />
      </Box>

      <Box 
        display="flex" 
        alignItems="center" 
        justifyContent="space-between"
      >
        <Box mr="20px">
          <a href="https://github.com/Zarrh/Bioinformatics-AI-Dashboard" target="_blank"><GitHubIcon style={{ fontSize: "38", cursor: "pointer", color: colors.teal}} /></a>
        </Box>
        <Box mr="20px">
          <Typography variant="h4" fontWeight="600">
            Bardini - Fagaraz - Tbibi - Toffolon
          </Typography>
        </Box>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
      </Box>
    </Box>
  )
}

export default Topbar
