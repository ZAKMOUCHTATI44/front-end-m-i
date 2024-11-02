import { Card, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'


import CardContent from '@mui/material/CardContent'
import CustomAvatar from 'src/@core/components/mui/avatar'
import CardMedia from '@mui/material/CardMedia'

const CardDetails = ({ influencer }: { influencer: CreatorData }) => {
  return (
    <Grid item xs={12} md={5} lg={4}>
      <Card sx={{ borderRadius: '14px', border: '1px solid #e2e8f0' }}>
        <CardMedia
          component='img'
          alt='profile-header'
          image='/images/pages/profile-banner.png'
          sx={{
            height: { xs: 30, md: 60 }
          }}
        />

        <CardContent sx={{ mt: -13.5, display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
          <Box
            sx={{
              display: 'inline-block',
              borderRadius: '50%',
              background: 'linear-gradient(45deg, #e269e7, #48abef)', // Dégradé de couleurs
              padding: '3px', // Espace pour le contour
              marginRight:  '10px',
              mb: 2,
            }}
          >
          <CustomAvatar
            src={influencer.pictureUrl}
            variant='rounded'
            alt={influencer.fullName}
            sx={{ width: 100, height: 100, backgroundColor: '#fff',  borderRadius: '50%' }}
          />
          </Box>

          <Typography variant='h4' sx={{ mb: 1, color: '#000' }}>
            {influencer.fullName}&nbsp;
            <img src='/images/social-media/verified.png' width={22} height={22} style={{marginTop: '4px', position: 'absolute'}} alt='Verified' />
          </Typography>
          <Typography variant='subtitle2' style={{ display: 'block' }}>
            {influencer.title}
          </Typography>
          <p style={{textAlign: 'justify'}}>{influencer.biography}</p>
        </CardContent>


      </Card>
    </Grid>
  )
}

export default CardDetails
