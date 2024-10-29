import { Grid } from '@mui/material'
import React from 'react'
import CardDetails from 'src/@core/components/influenceurs/CardDetails'
import influencers from '../../../../data/1.json'
import MediaDetails from '../../MediaDetails'
import InfluenceScore from '../../InfluenceScore'

const Page = () => {
  const influencer = influencers[0]

  return (
    <div>
      <Grid container spacing={6}>
        <CardDetails influencer={influencer} />
        <InfluenceScore networksStats={influencer.networksStats} />
      </Grid>
      <div style={{ marginTop: '80px' }}>
        <MediaDetails />
      </div>
    </div>
  )
}

export default Page
