import { Card, Grid, Typography } from '@mui/material'
import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement)

const AgeAndGenderSplit = () => {
  const ageGenderData = {
    labels: ['13-17', '18-24', '25-34', '35-44', '45-64'],
    datasets: [
      {
        label: 'Female',
        data: [5, 20, 35, 10, 3], // Example data for female
        backgroundColor: '#FF6384' // Red for Female
      },
      {
        label: 'Male',
        data: [5, 25, 40, 15, 5], // Example data for male
        backgroundColor: '#4BC0C0' // Blue for Male
      }
    ]
  }

  // Options for the age and gender split chart
  const ageGenderOptions = {
    plugins: {
      legend: {
        display: false // Hide legend inside the chart
      }
    },
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false
        },
        ticks: {
          color: '#666' // Optional: color for x-axis labels
        }
      },
      y: {
        stacked: true,
        grid: {
          display: false
        },
        ticks: {
          color: '#666' // Optional: color for y-axis labels
        }
      }
    }
  }

  return (
    <Grid lg={8}>
      <Card sx={{ padding: '30px', height: '100%' }}>
        <Typography>Age and gender split</Typography>

        <div style={{ height: '250px' }}>
          <Bar data={ageGenderData} options={ageGenderOptions} />
        </div>
      </Card>
    </Grid>
  )
}

export default AgeAndGenderSplit
