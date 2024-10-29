import { Card, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import SocialMediaChart from 'src/components/influencers/SocialMediaChart'

const CardDetails = ({ influencer }: { influencer: Influencer }) => {
  return (
    <Grid item xs={6} lg={5}>
      <Card sx={{ padding: '20px' }}>
        <Box style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <img
            src={influencer.pictureUrl}
            alt={influencer.fullName}
            width={55}
            height={55}
            style={{ borderRadius: '50%' }}
          />
          <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <p>
              <Typography sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                {influencer.fullName}
                <img src='/images/social-media/verified.png' width={18} height={18} alt='Verified' />
              </Typography>
              <Typography variant='subtitle2' style={{ display: 'block' }}>
                {influencer.title}
              </Typography>
            </p>
          </div>
        </Box>
        <Box sx={{ my: 2.5 }}>{influencer.biography}</Box>

        <Grid spacing={6} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
          <Grid
            xs={12}
            lg={6}
            sx={{
              my: 5,
              border: '1px solid ',
              display: 'flex',
              flexDirection: 'column',
              padding: '20px 10px',
              borderRadius: '10px',
              gap: '10px'
            }}
          >
            <Typography variant='h6' style={{ display: 'block' }}>
              Industries & Niches
            </Typography>
            <Typography variant='subtitle2' style={{ display: 'block' }}>
              {influencer.nicheName}
            </Typography>
          </Grid>
          <Grid xs={12} lg={6} sx={{ display: 'flex', justifyContent: 'center' }}>
            <SocialMediaChart />
          </Grid>
        </Grid>
      </Card>
    </Grid>
  )
}

export default CardDetails
