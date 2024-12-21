import { Grid } from '@mui/material'
import React from 'react'

// import { Box } from '@mui/system'

// import SocialMediaChart from 'src/components/influencers/SocialMediaChart'

// import { formatNumber } from 'src/lib/numbers'
// import fakedata from '../../data/audience.json'
import SocialCoverage from 'src/components/influencers/SocialCoverage'

// import LocationByCountries from 'src/components/influencers/LocationByCountries'
// import PostingFreaquency from 'src/pages/influenceurs/show/PostingFrequency'
// import PostMedia from 'src/components/influencers/PostMedia'
// import ProfilesSimilar from 'src/pages/influenceurs/show/ProfilesSimilar'
// import WordCloud from 'src/pages/influenceurs/show/[id]/WordCloud'

// import LocationByCountries from 'src/components/influencers/LocationByCountries'

// import MostPopularDaysChart from './MostPopularDaysChart'
import CreatorDetail from './Rapport/CreatorDetail'
import CreatorPost from './Rapport/CreatorPost'

const Rapport = ({ id }: { id: string }) => {
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
    <div>
      <>
        <Grid className='section-class' container spacing={6}>
          <CreatorDetail id={id} />
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
        </Grid>
        <Grid className='section-class' container spacing={6}>
          <CreatorPost id={id} />
        </Grid>
        {/* <LocationByCountries />
            <PostingFreaquency /> */}

        {/* <Grid className='section-class' pt={5} container spacing={6}>
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
        </Grid> */}
        {/* <Grid className='section-class' container spacing={6}>
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
        </Grid> */}

        {/* <Grid className='section-class' container spacing={6}>
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
        </Grid> */}
        {/* <Grid className='section-class' container spacing={6}>
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
        </Grid> */}
      </>
    </div>
  )
}

export default Rapport
