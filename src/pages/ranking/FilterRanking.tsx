import React from 'react'
import categories from '../../data/categories.json'
import SelectBox from 'src/components/ui/SelectBox'
import { Button, Grid } from '@mui/material'
import Icon from 'src/@core/components/icon'
import { useRouter } from 'next/router'

const FilterRanking = ({ setCategroy }: { setCategroy: (e: string) => void }) => {
  const router = useRouter()
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
    <div>
      <Grid container mt={2} spacing={6} sx={{ alignItems: 'end' }}>
        <Grid item xs={3}>
          <SelectBox
            handleChange={e => {
              setCategroy(e)
              router.push({
                query: { ...router.query, niche: e }
              })
            }}
            items={categories}
            label='All Industries'
            id='category'
            defaultValue='0'
          />
        </Grid>
        <Grid item xs={3}>
          <SelectBox
            handleChange={e => {
              console.log(e)
            }}
            items={socialMedia}
            label='All Social Medias'
            id='category'
            defaultValue='0'
          />
        </Grid>
        <Grid item xs={3}>
          <SelectBox
            handleChange={e => {
              console.log(e)
            }}
            items={genders}
            label='All Genders'
            id='genders'
            defaultValue='0'
          />
        </Grid>
        <Grid item xs={3}>
          <Button variant='contained' fullWidth sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <Icon icon='tabler:search' fontSize={20} />
            Search
          </Button>
        </Grid>
      </Grid>
    </div>
  )
}

export default FilterRanking
