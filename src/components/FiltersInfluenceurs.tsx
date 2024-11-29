// ** React Imports

// ** MUI Imports

// ** Custom Component Import

// ** Third Party Imports

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import SelectBox from './ui/SelectBox'
import { Button, Grid } from '@mui/material'
import { useState } from 'react'
import { useRouter } from 'next/router'
import api from 'src/lib/api'
import Error500 from 'src/pages/500'
import Loading from './Loading'
import UseQueryHooks from 'src/lib/react-query'

// ** Store Imports

// ** Actions Imports

interface NicheResponse {
  data: {
    label: string
    value: string
  }[]
}
const FiltersInfluenceurs = () => {
  // ** Props

  const router = useRouter()

  // const scoreList = [
  //   { label: 'Audience Growth', value: 'audienceGrowth' },
  //   { label: 'Instagram Score', value: 'instagramScore' },
  //   { label: 'Tiktok Score', value: 'tiktokScore' },
  //   { label: 'Youtube Score', value: 'youtubeScore' },
  //   { label: 'Twitter Score', value: 'twitterScore' },
  //   { label: 'Linkedin Score', value: 'linkedinScore' },
  //   { label: 'Instagram Followers', value: 'instagramFollowers' },
  //   { label: 'Tiktok Followers', value: 'tiktokFollowers' }
  // ]

  const socialMediaList = [
    {
      label: 'Twitter',
      value: 'twitter',
      image: '/images/social-media/twitter.png'
    },
    {
      label: 'Instagram',
      value: 'instagram',
      image: '/images/social-media/instagram.png'
    },
    {
      label: 'LinkedIn',
      value: 'linkedin',
      image: '/images/social-media/linkedin.png'
    },
    {
      label: 'YouTube',
      value: 'youtube',
      image: '/images/social-media/youtube.png'
    },
    {
      label: 'TikTok',
      value: 'tiktok',
      image: '/images/social-media/tiktok.png'
    },
    {
      label: 'Snapchat',
      value: 'snapchat',
      image: '/images/social-media/snapchat.png'
    }
  ]

  // const influencerCategories = ['nano', 'micro', 'micro', 'celebrities']
  const influencerCategories = [
    {
      label: 'Nano (1k - 30k)',
      value: 'nano'
    },
    {
      label: 'Micro (31k - 300k)',
      value: 'micro'
    },
    {
      label: 'Macro (300k - 2M)',
      value: 'macro'
    },
    {
      label: 'Celebrities ( +2M)',
      value: 'celebrities'
    }
  ]

  const genders = [
    {
      label: 'Male',
      value: 'male',
      image: '/images/icons/male.png'
    },
    {
      label: 'Female',
      value: 'female',
      image: '/images/icons/female.png'
    }
  ]

  const countries = [
    {
      label: 'Morocco',
      value: 'MA',
      image: 'https://flagcdn.com/w320/ma.png' // Flag image for Morocco
    },
    {
      label: 'Emirates',
      value: 'AE',
      image: 'https://flagcdn.com/w320/ae.png' // Flag image for UAE
    },
    {
      label: 'Qatar',
      value: 'QA',
      image: 'https://flagcdn.com/w320/qa.png' // Flag image for Qatar
    },
    {
      label: 'Egypte',
      value: 'eg',
      image: 'https://flagcdn.com/w320/eg.png' // Flag image for Qatar
    },
    {
      label: 'Saudi Arabia',
      value: 'sa',
      image: 'https://flagcdn.com/w320/sa.png' // Flag image for Qatar
    }
  ]

  const { influencerCategory, category, socialMedia, gender } = router.query as {
    influencerCategory?: string
    category?: string
    socialMedia?: string
    gender?: string
  }

  const [filters, setFilters] = useState({
    influencerCategory: '0',
    orderBy: '0',
    category: '0',
    socialMedia: '0',
    gender: '0',
    country: ''
  })

  const setTheFilters = () => {
    router.push({
      query: { ...router.query, ...filters }
    })
  }

  const { error, isLoading, data } = UseQueryHooks<NicheResponse>(['niches'], async () => {
    const response = await api.get<NicheResponse>('/niches')

    return response.data
  })

  if (isLoading) return <Loading />
  if (error) return <Error500 />

  return (
    <form action='' method='get' style={{ width: '100%' }}>
      <Grid container mt={2} spacing={6} sx={{ alignItems: 'end' }}>
        <Grid item xs={2}>
          <SelectBox
            handleChange={e => {
              setFilters({ ...filters, socialMedia: e })
            }}
            items={socialMediaList}
            defaultValue={socialMedia}
            value={filters.socialMedia}
            label='Social Media'
            id='social-media'
          />
        </Grid>
        <Grid item xs={2}>
          {data && data.data.length > 0 && (
            <>
              <SelectBox
                handleChange={e => {
                  setFilters({ ...filters, category: e })
                }}
                items={data.data}
                label='Niche'
                value={filters.category}
                defaultValue={category}
                id='category'
              />
            </>
          )}
        </Grid>

        <Grid item xs={2}>
          <SelectBox
            handleChange={e => {
              setFilters({ ...filters, influencerCategory: e })
            }}
            items={influencerCategories}
            label='Influencer category'
            value={filters.influencerCategory}
            defaultValue={influencerCategory}
            id='influencerCategory'
          />
        </Grid>

        <Grid item xs={2}>
          <SelectBox
            handleChange={e => {
              setFilters({ ...filters, gender: e })
            }}
            items={genders}
            defaultValue={gender}
            value={filters.gender}
            label='All Genders'
            id='gender'
          />
        </Grid>
        <Grid item xs={2}>
          <SelectBox
            handleChange={e => {
              setFilters({ ...filters, country: e })
            }}
            items={countries}
            defaultValue='0'
            label='Country'
            id='country'
          />
        </Grid>
        <Grid item xs={2}>
          <div
            style={{
              display: 'flex',
              gap: '10px'
            }}
          >
            <Button color='primary' onClick={() => setTheFilters()} variant='contained' sx={{ '& svg': { mr: 1 } }}>
              <Icon fontSize='1.125rem' icon='tabler:search' />
              Search
            </Button>
            <Button
              type='button'
              onClick={() => {
                router.push(router.pathname)
                setFilters({
                  orderBy: '0',
                  influencerCategory: '0',
                  category: '0',
                  socialMedia: '0',
                  gender: '0',
                  country: ''
                })
              }}
              variant='outlined'
              sx={{ '& svg': { mr: 1 } }}
            >
              <Icon fontSize='1.125rem' icon='tabler:refresh' />
            </Button>
          </div>
        </Grid>
      </Grid>
    </form>
  )
}

export default FiltersInfluenceurs
