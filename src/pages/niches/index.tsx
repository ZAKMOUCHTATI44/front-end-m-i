import { Box, Card, Grid, Typography } from '@mui/material'
import React from 'react'
import CustomTextField from 'src/@core/components/mui/text-field'
import CardNiche from './CardNiche'
import UseQueryHooks from 'src/lib/react-query'
import api from 'src/lib/api'
import Loading from 'src/components/Loading'
import Error500 from '../500'

interface NicheResponse {
  data: {
    label: string
    value: string
  }[]
}

const Niches = () => {
  const data = [
    {
      label: ' Business & Startups',
      value: '1',
      image: '/niches/Business & Startup.jpeg'
    },
    {
      label: 'Careers & Office',
      value: '1',
      image: '/niches/Career & Office.jpg'
    },
    {
      label: 'Finance & Investments',
      value: '1',
      image: '/niches/Finance & Web 3.jpg'
    },
    {
      label: 'Marketing & Sales',
      value: '1',
      image: '/niches/Marketing & Sales.jpeg'
    },
    {
      label: 'Technology & Innovation',
      value: '1',
      image: '/niches/IT & Tech.jpg'
    },
    {
      label: 'Global News',
      value: '1',
      image: '/niches/Global affairs.jpg'
    },
    {
      label: 'Art & Creativity',
      value: '1',
      image: '/niches/Art & Culture.jpeg'
    },
    {
      label: 'Food & Lifestyle',
      value: '1',
      image: '/niches/Food & Nutrition.jpeg'
    },
    {
      label: 'Travel & Adventures',
      value: '1',
      image: '/niches/Travel.jpeg'
    },
    {
      label: 'Motorsports & Automobiles',
      value: '1',
      image: '/niches/Motorsports & Biking.jpg'
    },
    {
      label: 'Health & Wellness',
      value: '1',
      image: '/niches/Health and Medical.jpg'
    },
    {
      label: 'Fitness & Self-Care',
      value: '1',
      image: '/niches/Fitness & Personnal Growth.jpg'
    },
    {
      label: 'Learning & Growth',
      value: '1',
      image: '/niches/Learning & Growth.jpg'
    },
    {
      label: 'Sports & Performance',
      value: '1',
      image: '/niches/Sports.jpg'
    },
    {
      label: 'Gaming & Entertainment',
      value: '1',
      image: '/niches/Gaming & Streaming.jpg'
    },
    {
      label: 'Family & Relationships',
      value: '1',
      image: '/niches/Family & Relationships.jpg'
    },
    {
      label: 'Pets & Animals',
      value: '1',
      image: '/niches/Animals.jpg'
    },
    {
      label: 'Fashion & Trends',
      value: '1',
      image: '/niches/Fashion.jpg'
    },
    {
      label: 'Beauty & Skincare',
      value: '1',
      image: '/niches/Beauty.jpg'
    },
    {
      label: 'Inclusion & Social Impact',
      value: '1',
      image: '/niches/Inclusion & Social Impact.jpg'
    },
    {
      label: 'Religions & Spirituality',
      value: '1',
      image: '/niches/Relationships & Family.jpg'
    },
    {
      label: 'STEM',
      value: '1',
      image: '/niches/STEM.jpeg'
    },
    {
      label: 'Environment & Energy',
      value: '1',
      image: '/niches/Environment & Energy.jpeg'
    },
    {
      label: 'Music & Audio',
      value: '1',
      image: '/niches/Music & Audio.jpeg'
    },
    {
      label: 'TV, Movies & Video',
      value: '1',
      image: '/niches/TV, Movies & Video.jpeg'
    },
    {
      label: 'Home & Indoor Activities',
      value: '1',
      image: '/niches/Home & Indoor Activities.jpeg'
    },
    {
      label: 'Nature & Outdoor Activities',
      value: '1',
      image: '/niches/Nature & Outdoor Activities.jpeg'
    },
    {
      label: 'Law, Medias & Politics',
      value: '1',
      image: '/niches/Law Medias & Politics.jpg'
    },
    {
      label: 'Magic & Paranormal',
      value: '1',
      image: '/niches/Magic & Paranormal.jpg'
    },
    {
      label: 'Ecommerce & Retail',
      value: '1',
      image: '/niches/Ecommerce.jpg'
    },
    {
      label: 'Cars & Urbanism',
      value: '1',
      image: '/niches/Cars & Urbanism.jpeg'
    },
    {
      label: 'Humanities & Social Sciences',
      value: '1',
      image: '/niches/Humanities & Social Sciences.jpg'
    }
  ]
  const { error, isLoading } = UseQueryHooks<NicheResponse>(['niches'], async () => {
    const response = await api.get<NicheResponse>('/niches/')

    return response.data
  })

  if (isLoading) return <Loading />
  if (error) return <Error500 />

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} lg={12}>
        <Card
          sx={{
            position: 'relative',
            padding: '40px 60px',
            display: 'flex',
            flexDirection: 'column',
            gap: '25px'
          }}
        >
          <Box>
            <Typography variant='h4' sx={{ mb: 1.5, textAlign: 'center', fontWeight: 'bold' }}>
              Discover Influencers in Every Niche
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', width: '50%', marginInline: 'auto' }}>
            <CustomTextField fullWidth autoFocus value={''} placeholder='Search for an Industry or a niche' />
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} lg={12}>
        <Typography variant='h5'>All Industries and All Categories</Typography>
      </Grid>
      {data &&
        data.length > 0 &&
        data.map(category => (
          <Grid key={category.value} item xs={12} sm={6} md={3}>
            <CardNiche category={category} />
          </Grid>
        ))}

      {/* {categories.map(category => (
        <Grid key={category.id} item xs={12} sm={6} md={4}>
          <CardNiche category={category} />
        </Grid>
      ))} */}
    </Grid>
  )
}

export default Niches
