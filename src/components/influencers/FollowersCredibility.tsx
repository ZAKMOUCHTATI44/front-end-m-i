import React from 'react'
import { Card, Typography } from '@mui/material'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

interface PropsType {
  influencer_percent: number
  suspicious_accounts_percent: number
  mass_followers_percent: number
  real_people_percent: number
}
const FollowersCredibility = ({ props }: { props: PropsType }) => {
  const credibilityData = {
    datasets: [
      {
        data: [props.real_people_percent, 100 - props.real_people_percent], // 63% Bad, 37% Remaining
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
        data: [
          props.mass_followers_percent,
          props.suspicious_accounts_percent,
          props.influencer_percent,
          props.real_people_percent
        ], // Mass followers, Suspicious, Influencers, Real
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
            <div style={{ fontSize: '20px', fontWeight: 'bold' }}>{props.real_people_percent}%</div>
            <div style={{ color: '#FF6384' }}>Real People</div>
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
            Mass followers {props.mass_followers_percent}%
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
            Suspicious {props.suspicious_accounts_percent}%
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
            Influencers {props.influencer_percent}%
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
            Real {props.real_people_percent}%
          </p>
        </div>
      </div>
      <Typography variant='caption'>
        Bots have been detected even though the overall audience remains authentic.
      </Typography>
    </Card>
  )
}

export default FollowersCredibility
