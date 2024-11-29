// RadarChart.tsx
import React from 'react'
import { Radar } from 'react-chartjs-2'
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js'
import { Card, Typography } from '@mui/material'

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend)

const ScoringTab = () => {
  const data = {
    labels: ['Audience', 'Growth', 'Engagement', 'Views', 'Activity'],
    datasets: [
      {
        label: 'Instagram Score',
        data: [100, 65, 100, 35, 92],
        backgroundColor: 'rgba(72, 61, 139, 0.2)',
        borderColor: 'rgba(72, 61, 139, 1)',
        borderWidth: 1
      }
    ]
  }
  const dataYoutube = {
    labels: ['Audience', 'Growth', 'Engagement', 'Views', 'Activity'],
    datasets: [
      {
        label: 'Instagram Score',
        data: [93, 65, 59, 75, 92],
        backgroundColor: 'rgba(72, 61, 139, 0.2)',
        borderColor: 'rgba(72, 61, 139, 1)',
        borderWidth: 1
      }
    ]
  }
  const datatiktok = {
    labels: ['Audience', 'Growth', 'Engagement', 'Views', 'Activity'],
    datasets: [
      {
        label: 'Instagram Score',
        data: [82, 92, 73, 75, 100],
        backgroundColor: 'rgba(72, 61, 139, 0.2)',
        borderColor: 'rgba(72, 61, 139, 1)',
        borderWidth: 1
      }
    ]
  }

  const options = {
    scales: {
      r: {
        angleLines: {
          display: false
        },
        suggestedMin: 0,
        suggestedMax: 100,
        ticks: {
          stepSize: 20
        }
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(3, 1fr)`, gap: '20px', justifyContent: 'center' }}>
      <Card
        sx={{
          display: 'flex',
          flexDirection: 'column',
          paddingInline: '30px',
          paddingTop: '20px',
          justifyContent: 'center'
        }}
      >
        <Typography variant='h5' sx={{ textAlign: 'center' }}>
          Instagram Score
        </Typography>
        <Radar data={data} options={options} />
      </Card>
      <Card
        sx={{
          display: 'flex',
          flexDirection: 'column',
          paddingInline: '30px',
          paddingTop: '20px',
          justifyContent: 'center'
        }}
      >
        <Typography variant='h5' sx={{ textAlign: 'center' }}>
          TikTok Score
        </Typography>
        <Radar data={dataYoutube} options={options} />
      </Card>
      <Card
        sx={{
          display: 'flex',
          flexDirection: 'column',
          paddingInline: '30px',
          paddingTop: '20px',
          justifyContent: 'center'
        }}
      >
        <Typography variant='h5' sx={{ textAlign: 'center' }}>
          YouTube Score
        </Typography>
        <Radar data={datatiktok} options={options} />
      </Card>
    </div>
  )
}

export default ScoringTab
