import { Card, Typography } from '@mui/material'
import React from 'react'
import ChartPerPage from './ChartPerPage'

const EngagementPerPage = ({ title }: { title: string }) => {
  return (
    <Card sx={{ margin: '20px auto', padding: '20px' }}>
      <Typography variant='h3' sx={{ padding: '30px' }}>
        {title}
      </Typography>
      <ChartPerPage />
    </Card>
  )
}

export default EngagementPerPage
