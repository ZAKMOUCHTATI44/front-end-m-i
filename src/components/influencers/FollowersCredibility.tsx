import React from 'react'
import { Card, Grid, Typography } from '@mui/material'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

const FollowersCredibility = () => {
  const credibilityData = {
    datasets: [
      {
        data: [63, 37], // 63% Bad, 37% Remaining
        backgroundColor: ['#FF6384', '#EDEDED'], // Red for "Bad", Grey for remaining
        borderWidth: 0
      }
    ],
    labels: ['Bad', 'Good']
  }

  // Data for the followers breakdown chart (right)
  const breakdownData = {
    datasets: [
      {
        data: [38, 13.7, 4.7, 43.7], // Mass followers, Suspicious, Influencers, Real
        backgroundColor: ['#FFA500', '#FF6384', '#8A2BE2', '#32CD32'], // Colors for each category
        borderWidth: 0
      }
    ],
    labels: ['Mass followers', 'Suspicious', 'Influencers', 'Real']
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
    <Grid spacing={6} lg={6}>
      <Card sx={{ padding: '30px', height: '100%' }}>
        <Typography variant='h6'>Followers Credibility</Typography>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <div style={{ position: 'relative', width: '150px' }}>
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
              <div style={{ fontSize: '20px', fontWeight: 'bold' }}>63%</div>
              <div style={{ color: '#FF6384' }}>Bad</div>
            </div>
          </div>
          <div style={{ width: '150px' }}>
            <Doughnut data={breakdownData} options={options} />
          </div>
          <div style={{ marginTop: '1rem', fontSize: '14px', color: '#666' }}>
            <p>
              <span
                style={{
                  width: '10px',
                  height: '10px',
                  display: 'inline-flex',
                  borderRadius: '50%',
                  backgroundColor: '#FFA500'
                }}
              ></span>{' '}
              Mass followers 38%
            </p>
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
              Suspicious 13.7%
            </p>
            <p>
              <span
                style={{
                  width: '10px',
                  height: '10px',
                  display: 'inline-flex',
                  borderRadius: '50%',
                  backgroundColor: '#8A2BE2'
                }}
              ></span>{' '}
              Influencers 4.7%
            </p>
            <p>
              <span
                style={{
                  width: '10px',
                  height: '10px',
                  display: 'inline-flex',
                  borderRadius: '50%',
                  backgroundColor: '#32CD32'
                }}
              ></span>{' '}
              Real 43.7%
            </p>
          </div>
        </div>
        <Typography variant='caption'>
          Bots have been detected even though the overall audience remains authentic.
        </Typography>
      </Card>
    </Grid>
  )
}

export default FollowersCredibility
