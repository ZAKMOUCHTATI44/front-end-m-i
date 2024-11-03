import { Box, Card, Grid, Typography } from '@mui/material'
import React from 'react'
import { Doughnut } from 'react-chartjs-2'

const SplitGender = () => {
  const credibilityData = {
    datasets: [
      {
        data: [38, 61], // 63% Bad, 37% Remaining
        backgroundColor: ['#FF6384', '#4BC0C0'], // Red for "Bad", Grey for remaining
        borderWidth: 0
      }
    ],
    labels: ['Male', 'Female']
  }

  const options = {
    plugins: {
      legend: {
        display: false // Hide legend inside the chart
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem: any) => {
            return `${tooltipItem.label}: ${tooltipItem.raw}%`
          }
        }
      }
    },
    cutout: '80%' // Adjusts the cutout size of the chart to create a doughnut
  }

  return (
    <Grid lg={4}>
      <Card sx={{ padding: '30px' }}>
        <Typography variant='h6'>Gender split</Typography>
        <Box sx={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
          <div style={{ position: 'relative', width: '150px', marginTop: '20px' }}>
            <Doughnut data={credibilityData} options={options} />
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center'
              }}
            >
              <div style={{ fontSize: '20px', fontWeight: 'bold' }}>61%</div>
              <div style={{ color: '#FF6384' }}>Male</div>
            </div>
          </div>

          <div style={{ marginTop: '1rem', fontSize: '14px', color: '#666' }}>
            <p>
              <span
                style={{
                  width: '10px',
                  height: '10px',
                  display: 'inline-flex',
                  borderRadius: '50%',
                  backgroundColor: '#FF6384'
                }}
              ></span>{' '}
              Female 38%
            </p>
            <p>
              <span
                style={{
                  width: '10px',
                  height: '10px',
                  display: 'inline-flex',
                  borderRadius: '50%',
                  backgroundColor: '#4BC0C0'
                }}
              ></span>{' '}
              Male 61%
            </p>
          </div>
        </Box>
      </Card>
    </Grid>
  )
}

export default SplitGender
