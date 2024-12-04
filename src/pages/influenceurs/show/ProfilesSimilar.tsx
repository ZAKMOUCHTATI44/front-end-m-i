import React from 'react'
import { Card, Grid, Typography } from '@mui/material'
import Icon from 'src/@core/components/icon'
import CustomAvatar from 'src/@core/components/mui/avatar'

type ProfilesSimilar = {
  id: number
  fullName: string
  niche: string
  pictureUrl: string
}

const ProfilesSimilar = ({ influencers }: { influencers: ProfilesSimilar[] }) => {
  return (
    <Card sx={{ width: '100%', padding: '30px 10px' }}>
      <Typography
        variant='h6'
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
          marginBottom: '25px'
        }}
      >
        <Icon icon='tabler:users' fontSize={20} />
        Profiles with similar audience
      </Typography>
      <Grid container spacing={6}>
        {influencers.map(influencer => (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            key={influencer.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '5px'
            }}
          >
            <CustomAvatar
              src={influencer.pictureUrl}
              variant='rounded'
              alt={influencer.fullName}
              sx={{ width: '55px', height: '55px', backgroundColor: '#fff', borderRadius: '50%' }}
            />
            <Typography>{influencer.fullName}</Typography>
          </Grid>
        ))}
      </Grid>
    </Card>
  )
}

export default ProfilesSimilar
