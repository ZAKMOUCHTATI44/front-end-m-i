import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import AgeAndGenderSplit from 'src/components/influencers/AgeAndGenderSplit'
import FollowersCredibility from 'src/components/influencers/FollowersCredibility'
import Languages from 'src/components/influencers/Languages'
import LocationByCities from 'src/components/influencers/LocationByCities'
import LocationByCountries from 'src/components/influencers/LocationByCountries'
import NotableFollowers from 'src/components/influencers/NotableFollowers'
import SplitGender from 'src/components/influencers/SplitGender'

const AudienceChart = () => {
  return (
    <Grid spacing={2}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: `repeat(2, 1fr)`
        }}
      >
        <FollowersCredibility />
        <NotableFollowers />
      </Box>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: `repeat(3, 1fr)`,
          marginTop: '20px'
        }}
      >
        <LocationByCountries />
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
        <SplitGender />
        <AgeAndGenderSplit />
      </Box>
    </Grid>
  )
}

export default AudienceChart
