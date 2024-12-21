import React from 'react'
import { Radar } from 'react-chartjs-2'
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js'
import { Card, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend)

interface Scoring {
  audience: number
  growth: number
  engagement: number
  views: number
  activity: number
}

const ScoringTab = ({ scoring, label, network }: { scoring: Scoring; label: string; network: string }) => {
  const data = {
    labels: [
      `Audience (${scoring.audience})`,
      `Growth (${scoring.growth})`,
      `Engagement (${scoring.engagement})`,
      `Views (${scoring.views})`,
      `Activity (${scoring.activity})`
    ],
    datasets: [
      {
        label: 'Instagram Score',
        data: [scoring.audience, scoring.growth, scoring.engagement, scoring.views, scoring.activity],
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        borderColor: '#ff55e3',
        borderWidth: 2,
        pointBackgroundColor: '#ffffff',
        pointBorderColor: '#ff55e3'
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
          stepSize: 20,
          display: false // Hides the ticks in the center
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.2)' // Set grid color to white with transparency
        },
        pointLabels: {
          color: '#ffffff', // Set label color to white
          font: {
            size: 14
          }
        }
      }
    },
    plugins: {
      tooltip: {
        enabled: true,
        callbacks: {
          label: function (tooltipItem: any) {
            return `${tooltipItem.label}: ${tooltipItem.raw}`
          }
        },
        backgroundColor: '#000000',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        borderColor: '#ffffff',
        borderWidth: 1
      },
      legend: {
        display: false,
        labels: {
          color: '#ffffff' // Set legend text color to white
        }
      }
    }
  }

  return (
    <Grid item xs={12} sm={6} lg={4}>
      <Card
        sx={{
          display: 'flex',
          flexDirection: 'column',
          paddingInline: '30px',
          paddingTop: '20px',
          justifyContent: 'center'
        }}
      >
        <Box sx={{ display: 'flex', gap: '5px', justifyContent: 'center' }}>
          <img src={`/images/social-media/new/${network}.png`} alt='' width={25} height={25} />
          <Typography sx={{ textTransform: 'capitalize' }}>{label}</Typography>
        </Box>
        <Radar data={data} options={options} />
      </Card>
    </Grid>
  )
}

export default ScoringTab
