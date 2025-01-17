import { Card, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'

const CardDetails = ({ influencer }: { influencer: any }) => {
  return (
    <Card>
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
            background: 'linear-gradient(45deg, #e269e7, #48abef)',
            padding: '3px',
            marginRight: '10px',
            mb: 2
          }}
        >

          <img
           style={{ width: 100, height: 100, backgroundColor: '#fff', borderRadius: '50%' }}
          src="https://instagram.fcmn2-1.fna.fbcdn.net/v/t51.2885-19/458412218_1593916881194621_2508687106525925276_n.jpg?stp=dst-jpg_s320x320_tt6&_nc_ht=instagram.fcmn2-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=LM_oQoy8sjoQ7kNvgFBcE33&_nc_gid=21ec811fe20e46bebde45c41532dedf7&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AYCZzUTLfNWg8eoFdo_5paVi8UDEsJ8p74y7eKWkPnWrqA&oe=679009A4&_nc_sid=8b3546" alt="" />
        </Box>

        <Typography variant='h4' sx={{ mb: 1 }}>
          {influencer.name}&nbsp;
        </Typography>
        <Typography variant='subtitle2' style={{ display: 'block' }}>
          {influencer.title}
        </Typography>
        <p style={{ textAlign: 'justify' }}>{influencer.description}</p>
      </CardContent>
    </Card>
  )
}

export default CardDetails
