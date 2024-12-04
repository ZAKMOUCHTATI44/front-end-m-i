import { Box, Card, Typography } from '@mui/material'
import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Legend } from 'recharts'

// Sample data for the chart
const data = [
  { day: 'Monday', posts: 152 },
  { day: 'Tuesday', posts: 154 },
  { day: 'Wednesday', posts: 174 },
  { day: 'Thursday', posts: 150 },
  { day: 'Friday', posts: 175 },
  { day: 'Saturday', posts: 143 },
  { day: 'Sunday', posts: 132 }
]

const MostPopularPosting: React.FC = () => {
  const barColor = '#4C6EF5'

  return (
    <Card
      sx={{
        color: '#EDEDED',
        padding: theme => theme.spacing(4),
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
        borderRadius: '8px',
        backgroundColor: '#2F3348',
        height: '100%'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          paddingBottom: theme => theme.spacing(2)
        }}
      >
        <Typography variant='h5' sx={{ textTransform: 'capitalize', fontWeight: 600, margin: '20px auto' }}>
          Most Popular Posting Days
        </Typography>
      </Box>
      <Box sx={{ width: '100%', height: '300px' }}>
        <ResponsiveContainer width='100%' height='100%'>
          <BarChart data={data} margin={{ top: 1, right: 1, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray='1 1' stroke='#444' />
            <XAxis dataKey='day' tick={{ fontSize: 12, fill: '#CCCCCC' }} />
            <YAxis tick={{ fontSize: 10, fill: '#CCCCCC' }} />
            <Tooltip
              contentStyle={{
                backgroundColor: '#2A2A3A',
                border: 'none',
                borderRadius: '8px'
              }}
              itemStyle={{ color: '#EDEDED' }}
              labelStyle={{ color: '#CCCCCC' }}
            />
            <Legend wrapperStyle={{ color: '#CCCCCC' }} />
            <Bar dataKey='posts' fill={barColor} radius={[2, 2, 0, 0]} barSize={10} />
          </BarChart>
        </ResponsiveContainer>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: theme => theme.spacing(3)
        }}
      >
        <Typography variant='caption' sx={{ color: '#AAAAAA' }}>
          Data collected over a week
        </Typography>
      </Box>
    </Card>
  )
}

export default MostPopularPosting
