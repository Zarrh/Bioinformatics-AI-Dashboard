import { Box, Typography, useTheme, Button } from "@mui/material"
import { tokens } from "../theme"
import Header from "../components/Header"
import { Link } from "react-router-dom"

import HubIcon from '@mui/icons-material/Hub'
import MedicationIcon from '@mui/icons-material/Medication'
import BiotechIcon from '@mui/icons-material/Biotech'
import SearchIcon from '@mui/icons-material/Search'

const Homepage = () => {

  const theme = useTheme()
  const colors = tokens(theme.palette.mode)


  return (
    <Box mt="80px" maxWidth={"70%"} mx="auto" textAlign={"justify"}>
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="AI e CV applicate all'anatomia" subtitle="Bardini - Fagaraz - Tbibi - Toffolon" />
      </Box>

      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
        mb="40px"
      >
        <Box
          gridColumn="span 6"
          gridRow="span 3"
          backgroundColor={colors.primary[400]}
          borderRadius={3}
        >
          <Box
            height="100%"
            mt="25px"
            p="0 30px"
            pb="20px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            flexDirection="column"
          >
            <Box width="100%">
              <Typography
                variant="h3"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Introduzione alle reti neurali
              </Typography>
              <Typography
                mt="8px"
                variant="h3"
                fontWeight="bold"
                color={colors.teal}
              >
                Luca Fagaraz
              </Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              alignContent="center"
            >
              <HubIcon color="white" sx={{ fontSize: "178px" }} />
            </Box>
            <Box>
              <Button 
                variant="contained" 
                color="secondary" 
                style={{ marginTop: "1rem", marginBottom: "2rem" }}
                component={Link}
                to="/NeuralNetwork#demo"
              >
                Progetto pratico
              </Button>
            </Box>
          </Box>
        </Box>
        <Box
          gridColumn="span 6"
          gridRow="span 3"
          backgroundColor={colors.primary[400]}
          borderRadius={3}
        >
          <Box
            height="100%"
            mt="25px"
            p="0 30px"
            pb="20px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            flexDirection="column"
          >
            <Box width="100%">
              <Typography
                variant="h3"
                fontWeight="600"
                color={colors.grey[100]}
              >
                AI per la diagnosi
              </Typography>
              <Typography
                mt="8px"
                variant="h3"
                fontWeight="bold"
                color={colors.teal}
              >
                Tommaso Bardini
              </Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              alignContent="center"
            >
              <MedicationIcon color="white" sx={{ fontSize: "178px" }} />
            </Box>
            <Box>
              <Button 
                variant="contained" 
                color="secondary" 
                style={{ marginTop: "1rem", marginBottom: "2rem" }}
                component={Link}
                to="/Healthcare#demo"
              >
                Progetto pratico
              </Button>
            </Box>
          </Box>
        </Box>
        {/* ROW 2 */}
        <Box
          gridColumn="span 6"
          gridRow="span 3"
          backgroundColor={colors.primary[400]}
          borderRadius={3}
        >
          <Box
            height="100%"
            mt="25px"
            p="0 30px"
            pb="20px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
            flexDirection="column"
          >
            <Box width="100%">
              <Typography
                variant="h3"
                fontWeight="600"
                color={colors.grey[100]}
              >
                AI per la farmacogenomica
              </Typography>
              <Typography
                mt="8px"
                variant="h3"
                fontWeight="bold"
                color={colors.teal}
              >
                Cristian Toffolon
              </Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              alignContent="center"
            >
              <BiotechIcon color="white" sx={{ fontSize: "178px" }} />
            </Box>
            <Box>
              <Button 
                variant="contained" 
                color="secondary" 
                style={{ marginTop: "1rem", marginBottom: "2rem" }}
                component={Link}
                to="/Pharmacon#demo"
              >
                Progetto pratico
              </Button>
            </Box>
          </Box>
        </Box>
        <Box
          gridColumn="span 6"
          gridRow="span 3"
          backgroundColor={colors.primary[400]}
          borderRadius={3}
        >
          <Box
            height="100%"
            mt="25px"
            p="0 30px"
            pb="20px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            flexDirection="column"
          >
            <Box width="100%">
              <Typography
                variant="h3"
                fontWeight="600"
                color={colors.grey[100]}
                textAlign="left"
              >
                CV per l'analisi forense
              </Typography>
              <Typography
                mt="8px"
                variant="h3"
                fontWeight="bold"
                color={colors.teal}
              >
                Manal Tbibi
              </Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              alignContent="center"
            >
              <SearchIcon color="white" sx={{ fontSize: "178px" }} />
            </Box>
            <Box>
              <Button 
                variant="contained" 
                color="secondary" 
                style={{ marginTop: "1rem", marginBottom: "2rem" }}
                component={Link}
                to="/Forensics#demo"
              >
                Progetto pratico
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Homepage
