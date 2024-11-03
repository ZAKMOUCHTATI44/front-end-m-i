import { Box, Card, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import DataTableInfluencers from '../Tables/DataTableInfluencers'
import FilterRanking from './FilterRanking'
import { useRouter } from 'next/router'

const Page = () => {
  const router = useRouter()

  const { niche } = router.query
  const [currentCategroy, setCategroy] = useState<string>(niche?.toString() ?? 'all-categories')

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
