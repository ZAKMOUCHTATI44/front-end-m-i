import { Box, Card, Grid, Typography } from '@mui/material'
import React from 'react'
import categories from '../../data/categories.json'
import DataTableInfluencers from '../Tables/DataTableInfluencers'

const page = () => {
  return (
    <div>
      <Grid item xs={12} lg={12}>
        <Card sx={{ position: 'relative', padding: '40px 20px' }}>
          <Box>
            <Typography variant='h4' sx={{ mb: 1.5, textAlign: 'center', fontWeight: 'bold' }}>
              🏆 Top 200 Creators - {categories[0].label}
            </Typography>
          </Box>
        </Card>
        <DataTableInfluencers />
      </Grid>
    </div>
  )
}

export default page
