import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import FollowersCredibility from 'src/components/influencers/FollowersCredibility'
import SplitGender from 'src/components/influencers/SplitGender'
import data from '../../../data/audience.json'
import WordCloud from './[id]/WordCloud'
import ProfilesSimilar from './ProfilesSimilar'
import Intersets from 'src/pages/my-files/Intersets'
import LocationByCountries from 'src/components/influencers/LocationByCountries'
import MostPopularPosting from 'src/pages/my-files/MostPopularPosting'
import ApexHeatmapChart from 'src/pages/my-files/ApexHeatmapChart'

const AudienceChart = () => {
  const followerInterest = [
    {
      label: 'Sports',
      value: 41.15
    },
    {
      label: 'Clothes, Shoes, Handbags & Accessories Camera & Photography',
      value: 38.29
    },
    {
      label: 'Friends, Family & Relationships',
      value: 33.52
    },
    {
      label: 'Travel, Tourism & Aviation',
      value: 27.3
    },
    {
      label: 'Restaurants, Food & Grocery Beauty & Cosmetics',
      value: 22.6
    }
  ]
  const followerBrand = [
    {
      label: 'Nike',
      value: 10.7,
      image: '/logo/956.png'
    },
    {
      label: 'Adidas',
      value: 7.9,
      image: '/logo/34.png'
    },
    {
      label: 'Apple',
      value: 5.3,
      image: '/logo/138.png'
    },
    {
      label: 'FIFA',
      value: 5,
      image: '/logo/138.png'
    },
    {
      label: 'Travelgram',
      value: 5,
      image: '/logo/34.png'
    }
  ]
  const likerInterests = [
    {
      label: 'Sports',
      value: 41.15
    },
    {
      label: 'Clothes, Shoes, Handbags & Accessories Camera & Photography',
      value: 38.29
    },
    {
      label: 'Friends, Family & Relationships',
      value: 33.52
    },
    {
      label: 'Travel, Tourism & Aviation',
      value: 27.3
    },
    {
      label: 'Restaurants, Food & Grocery Beauty & Cosmetics',
      value: 22.6
    }
  ]
  const brandAffinity = [
    {
      label: 'Nike',
      value: 10.7
    },
    {
      label: 'Adidas',
      value: 7.9
    },
    {
      label: 'Apple',
      value: 5.3
    },
    {
      label: 'CFIFA',
      value: 5
    },
    {
      label: 'Travelgram',
      value: 5
    }
  ]

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

      <Grid container spacing={2} mt={2}>
        <LocationByCountries />

        <Grid item lg={8}>
          <MostPopularPosting />
        </Grid>

        <Grid item lg={6}>
          <Intersets label={'Follower Interests'} data={followerInterest} />
        </Grid>
        <Grid item lg={6}>
          <Intersets label={'Follower brand affinity'} data={followerBrand} />
        </Grid>
        <Grid item lg={6}>
          <Intersets label={'Liker interests'} data={likerInterests} />
        </Grid>
        <Grid item lg={6}>
          <Intersets label={'Liker brand affinity'} data={brandAffinity} />
        </Grid>
        <Grid item lg={6}>
          <ApexHeatmapChart label='Daily Sales States' />
        </Grid>
        <Grid item lg={6}>
          <ApexHeatmapChart label='Engagement Times' />
        </Grid>
        <Grid lg={12} item>
          <ProfilesSimilar influencers={data.similarProfiles} />
        </Grid>
      </Grid>

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
