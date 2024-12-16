import React from 'react'
import TabScoialListening from '../TabScoialListening'
import { Grid } from '@mui/material'
import CardDetails from 'src/@core/components/influenceurs/CardDetails'
import InfluenceScore from 'src/pages/influenceurs/InfluenceScore'

// import data from '../../../data/social-listening.json'
import data from '../../../data/filorga_social_listening.json'

const Page = () => {
  return (
    <div>
      {data && (
        <Grid container spacing={6}>
          <Grid item xs={12} md={6} lg={6}>
            <CardDetails influencer={data} />
          </Grid>
          <InfluenceScore data={data} />
        </Grid>
      )}
      <TabScoialListening />
    </div>
  )
}

export default Page
