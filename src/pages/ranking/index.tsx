import { Box, Card, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import categories from '../../data/categories.json'
import DataTableInfluencers from '../Tables/DataTableInfluencers'
import FilterRanking from './FilterRanking'

const Page = () => {
  const [currentCategroy, setCategroy] = useState<string>(categories[0].value)

  return (
    <div>
      <Grid item xs={12} lg={12}>
        <Card sx={{ position: 'relative', padding: '40px 20px' }}>
          <Box>
            <Typography variant='h4' sx={{ mb: 1.5, textAlign: 'center', fontWeight: 'bold' }}>
              🏆 Top 200 Creators - {currentCategroy}
            </Typography>
          </Box>
          <FilterRanking setCategroy={setCategroy} />
        </Card>
        <DataTableInfluencers slug={currentCategroy} />
      </Grid>
    </div>
  )
}

export default Page
