// ** React Imports

// ** MUI Imports
import Box from '@mui/material/Box'

// ** Custom Component Import

// ** Third Party Imports

// ** Icon Imports
import SelectBox from './ui/SelectBox'
import categories from '../data/categories.json'
import { Button, Grid } from '@mui/material'
import Icon from 'src/@core/components/icon'

// ** Store Imports

// ** Actions Imports

const FiltersInfluenceurs = () => {
  // ** Props

  const scoreList = [
    { label: 'Audience Growth', value: 'audienceGrowth' },
    { label: 'Instagram Score', value: 'instagramScore' },
    { label: 'Tiktok Score', value: 'tiktokScore' },
    { label: 'Youtube Score', value: 'youtubeScore' },
    { label: 'Twitter Score', value: 'twitterScore' },
    { label: 'Linkedin Score', value: 'linkedinScore' },
    { label: 'Instagram Followers', value: 'instagramFollowers' },
    { label: 'Tiktok Followers', value: 'tiktokFollowers' }
  ]

  const socialMedia = [
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

  return (
    <Grid>
      <Box
        className='height-fill-available'
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 1fr)',
          gap: theme => theme.spacing(6),
          alignItems: 'end',
          p: theme => theme.spacing(3)
        }}
      >
        <Box sx={{ gridColumn: 'span 2' }}>
          <SelectBox items={scoreList} label='Sélectionner un ordre' id='orderBy' defaultValue='0' />
        </Box>
        <Box sx={{ gridColumn: 'span 2' }}>
          <SelectBox items={categories} label='Sélectionner une niche' id='category' defaultValue='0' />
        </Box>
        <SelectBox items={socialMedia} label='Social Media' id='social-media' defaultValue='0' />
        <SelectBox items={genders} label='Le sexe' id='sexe' defaultValue='0' />
        <Button variant='contained' sx={{ '& svg': { mr: 2 }, backgroundColor: '#655BD3' }}>
          <Icon fontSize='1.125rem' icon='tabler:search' />
          Search
        </Button>
      </Box>
    </Grid>
  )
}

export default FiltersInfluenceurs
