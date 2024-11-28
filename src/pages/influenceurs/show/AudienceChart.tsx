import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import FollowersCredibility from 'src/components/influencers/FollowersCredibility'
import SplitGender from 'src/components/influencers/SplitGender'
import data from '../../../data/audience.json'
import WordCloud from './[id]/WordCloud'

const AudienceChart = () => {
  return (
    <Grid spacing={2}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: `repeat(2, 1fr)`
        }}
      >
        <Grid spacing={6} lg={9}>
          <FollowersCredibility props={data.audience_type} />
        </Grid>
        <Grid lg={4} pl={2}>
          <SplitGender props={data.audience_type} />
        </Grid>
      </Box>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: `repeat(3, 1fr)`,
          marginTop: '20px'
        }}
      >
        {/* <LocationByCountries demography={data.demography} /> */}
      </Box>

      <Box
        sx={{
          marginTop: '20px'
        }}
      >
        <WordCloud hashtags={data.hashtags} title='Hash Tags' />
      </Box>
      <Box
        sx={{
          marginTop: '20px'
        }}
      >
        <WordCloud hashtags={data.captions} title='Captions most used' />
      </Box>

      {/* <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: `repeat(3, 1fr)`,
          marginTop: '20px'
        }}
      >
        <LocationByCities />
        <Languages />
      </Box>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: `repeat(2, 1fr)`,
          gap: '10px',
          marginTop: '20px'
        }}
      >
        
        <AgeAndGenderSplit />
      </Box> */}
    </Grid>
  )
}

export default AudienceChart
