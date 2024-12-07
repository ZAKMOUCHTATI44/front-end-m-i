import React from 'react'
import ChartPerPage from './ChartPerPage'
import { Card, Typography } from '@mui/material'

const FansPerPage = ({ title }: { title: string }) => {
  return (
    <Card sx={{ margin: '20px auto', padding: '20px' }}>
      <Typography variant='h3' sx={{ padding: '30px' }}>
        {title}
      </Typography>
      <ChartPerPage />
    </Card>
  )
}

export default FansPerPage
