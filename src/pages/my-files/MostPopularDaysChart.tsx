import { Box, Card, Typography } from '@mui/material'
import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Legend, LabelList } from 'recharts'

// Sample data for the chart (assuming data in the thousands to be represented in millions)
const data = [
  { day: 'Monday', interaction: 15200000 },
  { day: 'Tuesday', interaction: 15400000 },
  { day: 'Wednesday', interaction: 17400000 },
  { day: 'Thursday', interaction: 15000000 },
  { day: 'Friday', interaction: 17500000 },
  { day: 'Saturday', interaction: 14300000 },
  { day: 'Sunday', interaction: 13200000 }
]

const MostPopularDaysChart: React.FC = () => {
  const barColor = '#4C6EF5'

  const formatLabel = (value: number) => {
    // Format numbers to show in millions (5M format)
    return `${(value / 1000000).toFixed(1)}M`
  }

  return (
    <Card
      sx={{
        color: '#EDEDED',
        padding: theme => theme.spacing(4),
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
        borderRadius: '8px',
        backgroundColor: '#2F3348'
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
          Most Popular Days by Interaction
        </Typography>
      </Box>
      <Box sx={{ width: '100%', height: '300px' }}>
        <ResponsiveContainer width='100%' height='100%'>
          <BarChart data={data} margin={{ top: 1, right: 1, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray='1 1' stroke='#444' />
            <XAxis dataKey='day' tick={{ fontSize: 12, fill: '#CCCCCC' }} />
            <YAxis
              tickFormatter={formatLabel} // Format Y-axis to show values as millions (5M)
              tick={{ fontSize: 10, fill: '#CCCCCC' }}
              domain={[0, 'dataMax']} // Ensure the Y-axis starts at 0
              interval='preserveStartEnd' // Keeps a neat display for large values
              ticks={[5000000, 10000000, 15000000, 20000000, 25000000]} // Custom Y-axis ticks in "5M" increments
            />
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
            <Bar dataKey='interaction' fill={barColor} radius={[2, 2, 0, 0]} barSize={10}>
              <LabelList
                dataKey='interaction'
                position='top'
                formatter={formatLabel} // Format the labels as millions (5M, 10M, etc.)
                style={{ fontSize: 12, fill: '#EDEDED' }}
              />
            </Bar>
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

export default MostPopularDaysChart
