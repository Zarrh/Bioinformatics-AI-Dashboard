import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import Topbar from "./global/Topbar"
import Sidebar from "./global/Sidebar"
import Homepage from "./pages/Homepage"
import NeuralNetwork from "./pages/NeuralNetwork"
import Healthcare from "./pages/Healthcare"
import Pharmacon from "./pages/Pharmacon"
import Forensics from "./pages/Forensics"
import { CssBaseline, ThemeProvider } from "@mui/material"
import { ColorModeContext, useMode } from "./theme"

const App = () => {
  const [theme, colorMode] = useMode()
  const [isSidebar, setIsSidebar] = useState(true)

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/NeuralNetwork" element={<NeuralNetwork />} />
              <Route path="/Healthcare" element={<Healthcare />} />
              <Route path="/Pharmacon" element={<Pharmacon />} />
              <Route path="/Forensics" element={<Forensics />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App