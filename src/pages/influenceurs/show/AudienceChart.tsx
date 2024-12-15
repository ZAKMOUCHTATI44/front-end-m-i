import { Grid } from '@mui/material'
import React from 'react'
import FollowersCredibility from 'src/components/influencers/FollowersCredibility'
import SplitGender from 'src/components/influencers/SplitGender'

// import WordCloud from './[id]/WordCloud'
// import ProfilesSimilar from './ProfilesSimilar'
// import Intersets from 'src/pages/my-files/Intersets'
// import LocationByCountries from 'src/components/influencers/LocationByCountries'
// import MostPopularPosting from 'src/pages/my-files/MostPopularPosting'
// import ApexHeatmapChart from 'src/pages/my-files/ApexHeatmapChart'
import UseQueryHooks from 'src/lib/react-query'
import api from 'src/lib/api'
import Error500 from 'src/pages/500'
import Loading from 'src/components/Loading'

import { SyntheticEvent, useState } from 'react'

// ** MUI Imports
import Tab from '@mui/material/Tab'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { styled } from '@mui/material/styles'
import MuiTabList, { TabListProps } from '@mui/lab/TabList'

// Styled TabList component
const TabList = styled(MuiTabList)<TabListProps>(({ theme }) => ({
  borderBottom: '0 !important',
  '&, & .MuiTabs-scroller': {},
  '& .MuiTabs-indicator': {
    display: 'none'
  },
  '& .Mui-selected': {
    boxShadow: theme.shadows[2],
    backgroundColor: theme.palette.primary.main,
    color: '#FFF !important'
  },
  '& .MuiTab-root': {
    lineHeight: 1,
    borderRadius: theme.shape.borderRadius,
    '&:hover': {
      color: theme.palette.primary.main
    }
  }
}))

interface ResponseType {
  id: string
  handle: string
  network: string
  snapshot: string
  audience: {
    analysis: {
      cleared: number
      flagged: number
    }
    gender: {
      F: number
      M: number
      U: number
    }
    age_groups: any[]
    countries: any[]
    cities: any[]
    languages: any[]
    affinities: {
      brands: any[]
      interests: any[]
    }
    lookalikes: any[]
  }
}
;[]

const AudienceChart = ({ id }: { id: string }) => {
  const [value, setValue] = useState<string>('IG')

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  const { error, isLoading, data } = UseQueryHooks<ResponseType[]>(
    [`/creators/${id}/audience`],
    async () => {
      const response = await api.get<ResponseType[]>(`/creators/${id}/audience`)

      return response.data
    },
    { enabled: !!id }
  )
  if (error) return <Error500 />

  if (isLoading)
    return (
      <div style={{ height: '100vh', display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
        <Loading />
      </div>
    )

  // const followerInterest = [
  //   {
  //     label: 'Sports',
  //     value: 41.15
  //   },
  //   {
  //     label: 'Clothes, Shoes, Handbags & Accessories Camera & Photography',
  //     value: 38.29
  //   },
  //   {
  //     label: 'Friends, Family & Relationships',
  //     value: 33.52
  //   },
  //   {
  //     label: 'Travel, Tourism & Aviation',
  //     value: 27.3
  //   },
  //   {
  //     label: 'Restaurants, Food & Grocery Beauty & Cosmetics',
  //     value: 22.6
  //   }
  // ]
  // const followerBrand = [
  //   {
  //     label: 'Nike',
  //     value: 10.7,
  //     image: '/logo/956.png'
  //   },
  //   {
  //     label: 'Adidas',
  //     value: 7.9,
  //     image: '/logo/34.png'
  //   },
  //   {
  //     label: 'Apple',
  //     value: 5.3,
  //     image: '/logo/138.png'
  //   },
  //   {
  //     label: 'FIFA',
  //     value: 5,
  //     image: '/logo/138.png'
  //   },
  //   {
  //     label: 'Travelgram',
  //     value: 5,
  //     image: '/logo/34.png'
  //   }
  // ]
  // const likerInterests = [
  //   {
  //     label: 'Sports',
  //     value: 41.15
  //   },
  //   {
  //     label: 'Clothes, Shoes, Handbags & Accessories Camera & Photography',
  //     value: 38.29
  //   },
  //   {
  //     label: 'Friends, Family & Relationships',
  //     value: 33.52
  //   },
  //   {
  //     label: 'Travel, Tourism & Aviation',
  //     value: 27.3
  //   },
  //   {
  //     label: 'Restaurants, Food & Grocery Beauty & Cosmetics',
  //     value: 22.6
  //   }
  // ]
  // const brandAffinity = [
  //   {
  //     label: 'Nike',
  //     value: 10.7
  //   },
  //   {
  //     label: 'Adidas',
  //     value: 7.9
  //   },
  //   {
  //     label: 'Apple',
  //     value: 5.3
  //   },
  //   {
  //     label: 'CFIFA',
  //     value: 5
  //   },
  //   {
  //     label: 'Travelgram',
  //     value: 5
  //   }
  // ]

  return (
    <>
      {data && data.length < 0 && <> Audience Not Found</>}
      <TabContext value={value}>
        <TabList sx={{ marginBottom: '10px' }} onChange={handleChange} aria-label='customized tabs example'>
          {data && data.map(item => <Tab key={item.network} value={item.network} label={`${item.network} Audience`} />)}
        </TabList>
        {data &&
          data.map(item => (
            <TabPanel sx={{ padding: '0px !important' }} key={item.id} value={item.network}>
              <Grid spacing={2} container>
                <Grid item spacing={6} lg={4}>
                  <FollowersCredibility props={item.audience.analysis} />
                </Grid>
                <Grid item lg={4} pl={2}>
                  <SplitGender props={item.audience.gender} />
                </Grid>
              </Grid>
            </TabPanel>
          ))}
      </TabContext>
      {/* <Grid container spacing={2} mt={2}>
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
        </Grid> */}

      {/* <Box
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
        </Box> */}

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
    </>
  )
}

export default AudienceChart
