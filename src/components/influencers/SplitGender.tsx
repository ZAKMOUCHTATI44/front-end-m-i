import { Box, Card, Typography } from '@mui/material'
import React from 'react'
import { Doughnut } from 'react-chartjs-2'

interface GenderProps {
  core_male_percent: number
  core_female_percent: number
}
const SplitGender = ({ props }: { props: GenderProps }) => {
  const credibilityData = {
    datasets: [
      {
        data: [props.core_male_percent, props.core_female_percent], // 63% Bad, 37% Remaining
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
    <Card sx={{ padding: '30px', height: '100%' }}>
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
            <div style={{ fontSize: '20px', fontWeight: 'bold' }}>{props.core_male_percent}%</div>
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
            Male {props.core_male_percent}%
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
            Female {props.core_female_percent}%
          </p>
        </div>
      </Box>
    </Card>
  )
}

export default SplitGender
