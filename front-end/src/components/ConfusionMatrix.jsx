import React from 'react'
import Plot from 'react-plotly.js'

const ConfusionMatrix = ({ data }) => {
  const { true: actual, pred: predicted } = data

  const labels = Array.from(new Set([...actual, ...predicted])).sort()
  const size = labels.length

  const matrix = Array.from({ length: size }, () => Array(size).fill(0))

  actual.forEach((trueLabel, i) => {
    const predLabel = predicted[i]
    const row = labels.indexOf(trueLabel)
    const col = labels.indexOf(predLabel)
    if (row !== -1 && col !== -1) {
      matrix[row][col]++
    }
  })

  const yLabels = labels

  const xText = []
  const yText = []
  const textAnnotations = []

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      xText.push(labels[j])
      yText.push(labels[i])
      textAnnotations.push(matrix[i][j].toString())
    }
  }

  return (
    <Plot
      data={[
        {
          z: matrix,
          x: labels,
          y: yLabels,
          type: 'heatmap',
          colorscale: 'Greens',
          showscale: true,
          hoverongaps: false,
          zmin: 0,
          zauto: true,
        },
        {
          type: 'scatter',
          mode: 'text',
          x: xText,
          y: yText,
          text: textAnnotations,
          textposition: 'middle center',
          hoverinfo: 'skip',
          textfont: {
            color: 'grey',
            weight: 'bold',
            size: 14,
          },
        },
      ]}
      layout={{
        title: 'Confusion Matrix',
        xaxis: {
          title: 'Predicted',
          tickangle: 0,
          side: 'bottom',
        },
        yaxis: {
          title: 'Actual',
          autorange: true,
        },
        autosize: true,
        margin: { t: 50, b: 50 },
        paper_bgcolor: 'rgba(0,0,0,0)',
        plot_bgcolor: 'rgba(0,0,0,0)',
        width: 700,
      }}
      config={{ responsive: true }}
    />
  )
}

export default ConfusionMatrix

