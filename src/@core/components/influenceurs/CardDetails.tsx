import { Card, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

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
      </Card>
    </Grid>
  )
}

export default CardDetails
