import { Box, Card, Typography } from '@mui/material'
import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Legend, LabelList } from 'recharts'

interface WeekDayType {
  posts: number
  ratio: string
  day: number
}

const MostPopularDaysChart = ({ data }: { data: WeekDayType[] }) => {
  const barColor = '#4C6EF5'

  // Array to map day indices to names
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

  // Preprocess data to replace numeric day index with day name
  const processedData = data.map(item => ({
    ...item,
    day: days[item.day] // Map index to day name
  }))

  const formatLabel = (value: number) => {
    return value.toString()
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
          <BarChart data={processedData} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
            <CartesianGrid strokeDasharray='3 3' stroke='#444' />
            <XAxis dataKey='day' tick={{ fontSize: 12, fill: '#CCCCCC' }} />
            <YAxis tickFormatter={formatLabel} tick={{ fontSize: 10, fill: '#CCCCCC' }} domain={[0, 'dataMax']} />
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
            <Bar dataKey='posts' fill={barColor} radius={[2, 2, 0, 0]} barSize={20}>
              <LabelList
                dataKey='posts'
                position='top'
                formatter={formatLabel}
                style={{ fontSize: 12, fill: '#EDEDED' }}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Card>
  )
}

export default MostPopularDaysChart
