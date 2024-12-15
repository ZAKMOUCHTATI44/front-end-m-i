import { Button, Card, Grid, Typography } from '@mui/material'
import React from 'react'
import Loading from 'src/components/Loading'
import api from 'src/lib/api'
import UseQueryHooks from 'src/lib/react-query'
import Error500 from 'src/pages/500'
import CustomAvatar from 'src/@core/components/mui/avatar'
import { Box } from '@mui/system'
import Link from 'next/link'

// import SocialMediaChart from 'src/components/influencers/SocialMediaChart'

// import { formatNumber } from 'src/lib/numbers'
import fakedata from '../../data/audience.json'
import SocialCoverage from 'src/components/influencers/SocialCoverage'

// import LocationByCountries from 'src/components/influencers/LocationByCountries'
import PostingFreaquency from 'src/pages/influenceurs/show/PostingFrequency'
import PostMedia from 'src/components/influencers/PostMedia'
import ProfilesSimilar from 'src/pages/influenceurs/show/ProfilesSimilar'
import WordCloud from 'src/pages/influenceurs/show/[id]/WordCloud'
import LocationByCountries from 'src/components/influencers/LocationByCountries'
import MostPopularPosting from './MostPopularPosting'
import MostPopularDaysChart from './MostPopularDaysChart'
import Intersets from './Intersets'
import ApexHeatmapChart from './ApexHeatmapChart'

const Rapport = ({ id }: { id: string }) => {
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

  const { error, isLoading, data } = UseQueryHooks<Data>(
    [`/reports/${id}`],
    async () => {
      const response = await api.get<Data>(`/reports/${id}`)

      return response.data
    },
    { enabled: !!id }
  )
  if (error) return <Error500 />

  if (isLoading) return <Loading />

  return (
    <div>
      {data && (
        <>
          <Grid className='section-class' container spacing={6}>
            <Grid item xs={4} lg={4}>
              <Card
                sx={{
                  padding: '10px',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '510px',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <div>
                  <Box
                    sx={{
                      display: 'inline-block',
                      borderRadius: '50%',
                      background: 'linear-gradient(45deg, #e269e7, #48abef)',
                      padding: '3px',
                      marginRight: '10px',
                      mb: 2
                    }}
                  >
                    <CustomAvatar
                      src={data.creator.pictureUrl}
                      variant='rounded'
                      alt={data.creator.fullName}
                      sx={{ width: 100, height: 100, backgroundColor: '#fff', borderRadius: '50%' }}
                    />
                  </Box>
                  <Typography>{data.creator.fullName}</Typography>
                  <Box sx={{ display: 'flex', gap: '10px', marginTop: '10px', justifyContent: 'center' }}>
                    {data.creator.networksStats.map(item => (
                      <Link href={item.profileUrl} target='_blank' key={item.network}>
                        <img
                          src={`/images/social-media/${item.network}.png`}
                          alt={item.network}
                          width={20}
                          height={20}
                        />
                      </Link>
                    ))}
                  </Box>
                </div>
                <Box
                  sx={{
                    marginTop: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                  }}
                >
                  <Typography variant='h6' mb={4}>
                    Biography :
                  </Typography>
                  <Typography variant='body2' mb={4}>
                    {data.creator.biography}
                  </Typography>
                </Box>
              </Card>
            </Grid>
            <Grid item xs={8} lg={8}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px'
                }}
              >
                <Grid sx={{ display: 'flex', gap: '10px' }}>
                  <Grid xs={12} lg={4}>
                    <EngagementRate />
                  </Grid>
                  <Grid xs={12} lg={8}>
                    <Card
                      sx={{
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'start',
                        padding: '25px 10px'
                      }}
                    >
                      <Grid
                        xs={12}
                        lg={6}
                        sx={{
                          my: 5,
                          display: 'flex',
                          flexDirection: 'column',
                          padding: '10px 10px',
                          gap: '10px',
                          borderRight: '1px solid #e2e8f0'
                        }}
                      >
                        <Typography variant='h6' style={{ display: 'block', fontWeight: 'bold' }}>
                          Industries & Niches
                        </Typography>
                        <Typography variant='subtitle2' style={{ display: 'block', fontWeight: 'bold' }}>
                          {data.creator.industries?.name}
                        </Typography>
                      </Grid>
                      <Grid xs={12} lg={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                        {/* <SocialMediaChart data={data} /> */}
                      </Grid>
                    </Card>
                  </Grid>
                </Grid>
                <Grid sx={{ display: 'flex', gap: '10px' }}>
                  {/* <Grid xs={12} lg={8}>
                    <FollowersCredibility props={fakedata.audience_type} />
                  </Grid>
                  <Grid xs={12} lg={4}>
                    <SplitGender props={fakedata.audience_type} />
                  </Grid> */}
                </Grid>
              </Box>
            </Grid>
            <Grid
              item
              mt={5}
              spacing={6}
              sx={{
                padding: '30px 10px',
                width: '100%',
                overflowX: 'hidden'
              }}
            >
              <SocialCoverage />
            </Grid>
            <LocationByCountries />
            <PostingFreaquency />
          </Grid>

          <Grid className='section-class' pt={5} container spacing={6}>
            <Grid
              item
              sx={{
                width: '100%'
              }}
            >
              <ProfilesSimilar influencers={data.similarProfiles} />
            </Grid>
            <Grid item lg={6}>
              <MostPopularPosting />
            </Grid>
            <Grid item lg={6}>
              <MostPopularDaysChart />
            </Grid>

            <Grid item lg={6}>
              <Intersets label={'Follower Interests'} data={followerInterest} />
            </Grid>
            <Grid item lg={6}>
              <Intersets label={'Follower brand affinity'} data={followerBrand} />
            </Grid>
          </Grid>
          <Grid className='section-class' container spacing={6}>
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
          </Grid>

          <Grid className='section-class' container spacing={6}>
            <Grid item>
              <Box
                mt={5}
                sx={{
                  padding: '30px 10px'
                }}
              >
                <PostMedia data={data} />
              </Box>
            </Grid>
          </Grid>
          <Grid className='section-class' container spacing={6}>
            <Box
              sx={{
                marginTop: '20px'
              }}
            >
              <WordCloud hashtags={fakedata.hashtags} title='Hash Tags' />
            </Box>
            <Box
              sx={{
                marginTop: '20px'
              }}
            >
              <WordCloud hashtags={fakedata.captions} title='Captions most used' />
            </Box>
            <div
              style={{
                padding: '160px 10px',
                marginTop: '10px',
                width: '100%',
                background:
                  'linear-gradient(94deg, #ff56e3 10.66%, #3dd1fe 53.03%, #410093 96.34%, rgba(255,0,238,0.26) 191.41%, rgba(255,59,212,0) 191.43%)'
              }}
            >
              <Typography
                variant='h3'
                sx={{
                  color: '#FFF',
                  textAlign: 'center',
                  fontWeight: 'bold'
                }}
              >
                This report has been delivered by
              </Typography>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <img src='/images/logo.png' width={150} alt='' />
              </div>
            </div>
          </Grid>
        </>
      )}
    </div>
  )
}

export default Rapport

const EngagementRate = () => {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: '10px 10px',
        gap: '10px',
        height: '100%'
      }}
    >
      <Typography variant='h4' style={{ display: 'block', fontWeight: 'bold' }}>
        Engagement Rate
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '5px'
        }}
      >
        <Typography variant='h2' color='#3ed1fe' style={{ display: 'block', fontWeight: 'bold' }}>
          0.89%
        </Typography>
        <Typography variant='h6'>
          Posts : <span>924</span>
        </Typography>
        <Typography variant='h6'>
          Average like rate:<span>1.81%</span>
        </Typography>
        <Typography variant='h6'>
          Average comment rate:<span>0.01%</span>
        </Typography>
      </Box>
      <Button variant='contained' color='success'>
        PERCENTAGE: Good
      </Button>
    </Card>
  )
}
