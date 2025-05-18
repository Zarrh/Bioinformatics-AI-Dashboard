import { useState } from "react"
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar"
import { Box, IconButton, Typography, useTheme } from "@mui/material"
import { Link } from "react-router-dom"
import "react-pro-sidebar/dist/css/styles.css"
import { tokens } from "../theme"
import HomeIcon from '@mui/icons-material/Home'
import HubIcon from '@mui/icons-material/Hub'
import MedicationIcon from '@mui/icons-material/Medication'
import BiotechIcon from '@mui/icons-material/Biotech'
import SearchIcon from '@mui/icons-material/Search'
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined"

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  )
}

const Sidebar = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [selected, setSelected] = useState("Homepage")

  return (
    <Box
      sx={{
        height: '100vh',
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: `${colors.teal} !important`,
        },
        "& .pro-menu-item.active": {
          color: `${colors.teal} !important`,
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" fontWeight={600} color={colors.grey[100]}>
                  Bioinformatica
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Homepage"
              to="/"
              icon={<HomeIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Sezioni
            </Typography>
            <Item
              title="Introduzione alle reti"
              to="/NeuralNetwork"
              icon={<HubIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="AI per la diagnosi"
              to="/Healthcare"
              icon={<MedicationIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="AI e farmaci"
              to="/Pharmacon"
              icon={<BiotechIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="CV e analisi forense"
              to="/Forensics"
              icon={<SearchIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  )
}

export default Sidebar
