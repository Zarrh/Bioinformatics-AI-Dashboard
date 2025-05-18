import React, { useState, useEffect } from 'react'
import { useTheme } from '@mui/material'
import { tokens } from '../theme'

const BrainImage = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const [images, setImages] = useState([])

  const fetchImage = async () => {
    const response = await fetch('http://localhost:5000/api/random-image')
    const blob = await response.blob()
    const url = URL.createObjectURL(blob)
    return {
      url,
      prediction: response.headers.get('X-Prediction'),
      actual: response.headers.get('X-Actual'),
    }
  }

  const fetchImagesInParallel = async () => {
    const results = await Promise.all(
      Array.from({ length: 9 }).map(() => fetchImage())
    )
    setImages(results)
  }

  useEffect(() => {
    fetchImagesInParallel()
    const interval = setInterval(fetchImagesInParallel, 10000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)', // 3 columns
        gridTemplateRows: 'repeat(2, auto)',   // 2 rows
        gap: '2rem',
        padding: '2rem',
      }}
    >
      {images.map((img, idx) => (
        <div
          key={idx}
          style={{
            padding: '10px',
            borderRadius: '12px',
            backgroundColor: colors.primary[400],
          }}
        >
          <img
            src={img.url}
            alt="Brain MRI"
            style={{
              display: 'block',
              width: '100%',
              height: 'auto',
              borderRadius: '7px',
            }}
          />
          <p style={{ fontSize: 18, marginTop: '0.5rem' }}>
            Prediction:{' '}
            <span style={{ color: img.prediction === img.actual ? 'gold' : 'crimson' }}>
              {img.prediction}
            </span>
          </p>
          <p style={{ fontSize: 18 }}>Actual: {img.actual}</p>
        </div>
      ))}
    </div>
  )
}

export default BrainImage
