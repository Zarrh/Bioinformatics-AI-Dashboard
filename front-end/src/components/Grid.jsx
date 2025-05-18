import React, { useEffect, useState } from "react"
import { DigitsRecognitionNN } from "../models"
import model from "../data/model.json"
import { argMax, toRowVector } from "../functions"
import { useTheme, Button } from '@mui/material'
import { tokens } from "../theme"

import 'katex/dist/katex.min.css'
import { InlineMath, BlockMath } from 'react-katex'

const GRID_SIZE = 28
const SQUARE_SIZE = 18
const SPACING = 8
const MAX_INTENSITY = 1

const brushOffsets = [
  [0, 0, 1.0],
  [-1, 0, 0.8], [1, 0, 0.8], [0, -1, 0.8], [0, 1, 0.8],
  [-1, -1, 0.5], [-1, 1, 0.5], [1, -1, 0.5], [1, 1, 0.5],
  [-2, 0, 0.3], [2, 0, 0.3], [0, -2, 0.3], [0, 2, 0.3],
]


const network = new DigitsRecognitionNN(model.Size, model.W, model.B)


const Grid = ({ backgroundColor }) => {

  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const [grid, setGrid] = useState(
    Array(GRID_SIZE).fill().map(() => Array(GRID_SIZE).fill(0))
  )
  const [mouseDown, setMouseDown] = useState(false)

  const [prediction, setPrediction] = useState(null)
  const [output, setOutput] = useState(Array(10).fill(0))

  const applyBrush = (row, col) => {
    const newGrid = grid.map(r => [...r])
    for (const [dx, dy, intensity] of brushOffsets) {
      const r = row + dx
      const c = col + dy
      if (r >= 0 && r < GRID_SIZE && c >= 0 && c < GRID_SIZE) {
        newGrid[r][c] = Math.min(MAX_INTENSITY, newGrid[r][c] + intensity)
      }
    }
    setGrid(newGrid)
  }

  const resetGrid = () => {
    setGrid(Array(GRID_SIZE).fill().map(() => Array(GRID_SIZE).fill(0)))
  }

  const handleMouseDown = (row, col) => {
    setMouseDown(true)
    applyBrush(row, col)
  }

  const handleMouseEnter = (row, col) => {
    if (mouseDown) applyBrush(row, col)
  }


  useEffect(() => {
    const flatGrid = grid.flat()
    const o = toRowVector(network.y(flatGrid))

    setPrediction(argMax(o))
    setOutput(o)
  }, [grid])


  return (
    <>
      <div 
        style={{
          display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: "2%"
        }}
      >
        <div
          onMouseUp={() => setMouseDown(false)}
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${GRID_SIZE}, ${SQUARE_SIZE}px)`,
            width: (SQUARE_SIZE) * GRID_SIZE,
            userSelect: "none",
            marginBottom: "1rem",
          }}
        >
          {grid.map((row, rowIndex) =>
            row.map((cell, colIndex) => {
              const intensity = Math.min(255, Math.round(cell * 255))
              return (
                <div
                  key={`${rowIndex}-${colIndex}`}
                  onMouseDown={() => handleMouseDown(rowIndex, colIndex)}
                  onMouseEnter={() => handleMouseEnter(rowIndex, colIndex)}
                  style={{
                    width: SQUARE_SIZE,
                    height: SQUARE_SIZE,
                    borderRadius: "50%",
                    // margin: `${SPACING / 2}px`,
                    backgroundColor: `rgba(${255 - intensity}, ${255 - intensity}, ${255 - intensity}, 0.75)`,
                    // border: "1px solid #eee",
                    border: `${SPACING / 2}px solid`,
                    borderColor: backgroundColor,
                  }}
                />
              )
            })
          )}
        </div>
        <div style={{fontSize: 32}}>
          <BlockMath math={"y = \\begin{bmatrix} " + output.map(x => x.toFixed(3)).join(' \\\\ ') + "  \\end{bmatrix}"} />
        </div>
        <div style={{fontSize: 32}}>
          Prediction: <span style={{color: "gold"}}>{prediction}</span>
        </div>
      </div>
      <Button 
        variant="contained" 
        color="secondary" 
        onClick={resetGrid}
        style={{ marginTop: "1rem", marginBottom: "2rem" }}
      >
        Clean
      </Button>
    </>
  )
}

export default Grid
