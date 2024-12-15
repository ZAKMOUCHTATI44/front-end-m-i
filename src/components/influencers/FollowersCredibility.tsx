import React from 'react'
import { Card, Typography } from '@mui/material'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

interface PropsType {
  cleared: number
  flagged: number

  // mass_followers_percent: number
  // real_people_percent: number
}
const FollowersCredibility = ({ props }: { props: PropsType }) => {
  const credibilityData = {
    datasets: [
      {
        data: [props.cleared, props.flagged], // 63% Bad, 37% Remaining
        backgroundColor: ['#32CD32', '#FF6384'], // Red for "Bad", Grey for remaining
        borderWidth: 0
      }
    ],
    labels: ['Bad', 'Good']
  }

  // Data for the followers breakdown chart (right)
  const breakdownData = {
    datasets: [
      {
        data: [
          props.cleared,
          props.flagged

          // props.influencer_percent,
          // props.real_people_percent
        ], // Mass followers, Suspicious, Influencers, Real
        backgroundColor: ['#32CD32', '#FF6384'], // Colors for each category
        borderWidth: 0
      }
    ],
    labels: ['Real', 'Suspicious']
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
      <Typography variant='h6'>Followers Credibility</Typography>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '15px' }}>
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
            <div style={{ fontSize: '20px', fontWeight: 'bold' }}>{props.cleared * 100}%</div>
            <div style={{ color: '#FF6384' }}>Real People</div>
          </div>
        </div>
        <div style={{ width: '150px', display: 'none' }}>
          <Doughnut data={breakdownData} options={options} />
        </div>
        <div style={{ marginTop: '1rem', fontSize: '14px' }}>
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
            Real {(props.cleared * 100).toFixed(2)}%
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
            Suspicious {(props.flagged * 100).toFixed(2)}%
          </p>
          {/* <p>
            <span
              style={{
                width: '10px',
                height: '10px',
                display: 'inline-flex',
                borderRadius: '50%',
                backgroundColor: '#8A2BE2'
              }}
            ></span>{' '}
            Influencers {props.cleared}%
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
            Real {props.cleared}%
          </p> */}
        </div>
      </div>
      <Typography variant='caption'>
        Bots have been detected even though the overall audience remains authentic.
      </Typography>
    </Card>
  )
}

export default FollowersCredibility
