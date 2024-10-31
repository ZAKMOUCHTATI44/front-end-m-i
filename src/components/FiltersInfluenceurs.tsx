// ** React Imports

// ** MUI Imports
import Drawer from '@mui/material/Drawer'
import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Box, { BoxProps } from '@mui/material/Box'

// ** Custom Component Import

// ** Third Party Imports

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import SelectBox from './ui/SelectBox'
import categories from '../data/categories.json'
import CustoumRadio from './ui/CustoumRadio'
import { Button } from '@mui/material'
import { useState } from 'react'
import { useRouter } from 'next/router'

// ** Store Imports

// ** Actions Imports

const Header = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(3),
  justifyContent: 'space-between'
}))

const FiltersInfluenceurs = ({ open, toggle }: { open: boolean; toggle: () => void }) => {
  // ** Props

  const router = useRouter()

  const handleClose = () => {
    toggle()
  }

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
      title: 'All',
      value: 'all',
      isSelected: true
    },
    {
      title: 'Male',
      value: 'male'
    },
    {
      title: 'Female',
      value: 'female'
    }
  ]

  const profileType = [
    {
      title: 'All',
      value: 'all',
      isSelected: true
    },
    {
      title: 'Creators',
      value: 'creators'
    },
    {
      title: 'Brands',
      value: 'brands'
    }
  ]

  const [filters, setFilters] = useState({
    orderBy: '0',
    category: '',
    socialMedia: '',
    gender: '',
    profileType: ''
  })

  const setTheFilters = () => {
    router.push({
      query: { ...router.query, ...filters }
    })
    handleClose()
  }

  return (
    <Drawer
      open={open}
      anchor='right'
      variant='temporary'
      onClose={handleClose}
      ModalProps={{ keepMounted: true }}
      sx={{ '& .MuiDrawer-paper': { width: { xs: 300, sm: 400 } } }}
    >
      <Header sx={{ borderBottom: theme => `2px solid rgba(${theme.palette.customColors.main}, 0.16)` }}>
        <Typography variant='h5'>Filters</Typography>
        <IconButton
          size='small'
          onClick={handleClose}
          sx={{
            p: '0.438rem',
            borderRadius: 1,
            color: 'text.primary',
            backgroundColor: 'action.selected',
            '&:hover': {
              backgroundColor: theme => `rgba(${theme.palette.customColors.main}, 0.16)`
            }
          }}
        >
          <Icon icon='tabler:x' fontSize='1.125rem' />
        </IconButton>
      </Header>
      <Box
        className='height-fill-available'
        sx={{ display: 'flex', flexDirection: 'column', gap: theme => theme.spacing(6), p: theme => theme.spacing(3) }}
      >
        <SelectBox
          handleChange={e => {
            setFilters({ ...filters, orderBy: e })
          }}
          items={scoreList}
          label='Sélectionner un ordre'
          id='orderBy'
          defaultValue='0'
        />
        <SelectBox
          handleChange={e => {
            setFilters({ ...filters, category: e })
          }}
          items={categories}
          label='Sélectionner une niche'
          id='category'
          defaultValue='0'
        />
        <SelectBox
          handleChange={e => {
            setFilters({ ...filters, socialMedia: e })
          }}
          items={socialMedia}
          label='Social Media'
          id='social-media'
          defaultValue='0'
        />
        <CustoumRadio
          handleChange={e => {
            setFilters({ ...filters, socialMedia: e })
          }}
          data={genders}
          label='Le sexe'
        />
        <CustoumRadio
          handleChange={e => {
            setFilters({ ...filters, socialMedia: e })
          }}
          data={profileType}
          label='Type de profil'
        />
      </Box>
      <Box sx={{ display: 'flex', gap: theme => theme.spacing(2), p: theme => theme.spacing(3) }}>
        <Button onClick={() => setTheFilters()} variant='contained' color='primary' style={{ width: '75%' }}>
          Rafraîchir la recherche
        </Button>
        <Button onClick={handleClose} variant='outlined' color='secondary' style={{ width: '50%' }}>
          Clear
        </Button>
      </Box>
    </Drawer>
  )
}

export default FiltersInfluenceurs
