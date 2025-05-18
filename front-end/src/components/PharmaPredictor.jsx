import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js'
import ConfusionMatrix from './ConfusionMatrix'

import { Box, Typography, FormControl, InputLabel, Select, MenuItem, useTheme, Button } from '@mui/material'
import { tokens } from "../theme"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement)

const PharmaPredictor = () => {

  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const [diagnosis, setDiagnosis] = useState("Depressione")
  const [cyp2d6, setCYP2D6] = useState("PM")
  const [cyp2c19, setCYP2C19] = useState("PM")
  const [prediction, setPrediction] = useState("")
  const [losses, setLosses] = useState([])
  const [confusion, setConfusion] = useState(null)

  const handleSubmit = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/predict', { diagnosis, CYP2D6: cyp2d6, CYP2C19: cyp2c19 })
      setPrediction(res.data.prediction)
    } catch (err) {
      console.error(err)
      setPrediction("Errore nella predizione")
    }
  }

  useEffect(() => {
    axios.get('http://localhost:5000/api/loss').then(res => setLosses(res.data.losses))
    axios.get('http://localhost:5000/api/confusion').then(res => setConfusion(res.data))
  }, [])

  const lossChartData = {
    labels: losses.map((_, i) => i + 1),
    datasets: [{
      label: "Loss",
      data: losses,
      borderColor: "#00ff7f",
      backgroundColor: "rgba(0,255,127,0.2)",
    }]
  }

  return (
    <div>
      <Box>
        <Box
          mt="25px"
          mb="25px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Typography
              variant="h1"
              fontWeight="600"
              mb="25px"
              color={colors.grey[100]}
            >
              💊 Predizione Farmacogenomica
            </Typography>
          </Box>
        </Box>
        <Box
          mt="25px"
          mb="5px"
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
              Diagnosi:
            </Typography>
          </Box>
        </Box>
        <Box mt="5px" mb="25px" display="flex" justifyContent="space-between" alignItems="center">
          <FormControl fullWidth style={{ marginTop: "2rem", marginBottom: "2rem", fontVariant: "h3" }}>
            <InputLabel id="diagnosis-label">Seleziona diagnosi</InputLabel>
            <Select
              labelId="diagnosis-label"
              value={diagnosis}
              label="Seleziona diagnosi"
              onChange={(e) => setDiagnosis(e.target.value)}
            >
              <MenuItem value="Depressione">Depressione</MenuItem>
              <MenuItem value="Ipertensione">Ipertensione</MenuItem>
              <MenuItem value="Asma">Asma</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box
          mt="25px"
          mb="5px"
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
              CYP2D6:
            </Typography>
          </Box>
        </Box>
        <Box mt="5px" mb="25px" display="flex" justifyContent="space-between" alignItems="center">
          <FormControl fullWidth style={{ marginTop: "2rem", marginBottom: "2rem", fontVariant: "h3" }}>
            <InputLabel id="cyp2d6-label">Seleziona CYP2D6</InputLabel>
            <Select
              labelId="cyp2d6-label"
              value={cyp2d6}
              label="Seleziona CYP2D6"
              onChange={(e) => setCYP2D6(e.target.value)}
            >
              <MenuItem value="PM">PM</MenuItem>
              <MenuItem value="IM">IM</MenuItem>
              <MenuItem value="EM">EM</MenuItem>
              <MenuItem value="EM">UM</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box
          mt="25px"
          mb="5px"
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
              CYP2C19:
            </Typography>
          </Box>
        </Box>
        <Box mt="5px" mb="25px" display="flex" justifyContent="space-between" alignItems="center">
          <FormControl fullWidth style={{ marginTop: "2rem", marginBottom: "2rem", fontVariant: "h3" }}>
            <InputLabel id="cyp2c19-label">Seleziona CYP2C19</InputLabel>
            <Select
              labelId="cyp2c19-label"
              value={cyp2c19}
              label="Seleziona CYP2C19"
              onChange={(e) => setCYP2C19(e.target.value)}
            >
              <MenuItem value="PM">PM</MenuItem>
              <MenuItem value="IM">IM</MenuItem>
              <MenuItem value="EM">EM</MenuItem>
              <MenuItem value="EM">UM</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      
      <Button 
        variant="contained" 
        color="secondary" 
        onClick={handleSubmit}
        style={{ marginTop: "1rem", marginBottom: "2rem" }}
      >
        Calcola Farmaco
      </Button>
      {prediction && <h2>Risultato: 💊 <span style={{ color: "gold" }}>{prediction}</span></h2>}

      <h3>📉 Andamento della Loss</h3>
      {losses.length > 0 ? <Line data={lossChartData} /> : <p>Loading loss...</p>}

      <h3>📊 Matrice di Confusione</h3>
      {confusion ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <ConfusionMatrix data={confusion} />
        </div>
      ) : (
        <p>Loading confusion matrix...</p>
      )}
    </div>
  )
}

export default PharmaPredictor
