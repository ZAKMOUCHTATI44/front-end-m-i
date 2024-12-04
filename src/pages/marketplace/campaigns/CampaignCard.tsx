import React from 'react'
import { Button, Card, Typography } from '@mui/material'

// import Icon from 'src/@core/components/icon'

interface Campaign {
  title: string
  picture: string
  logo: string
}
const CampaignCard = ({ campaign }: { campaign: Campaign }) => {
  return (
    <Card sx={{ padding: 2 }}>
      <img src={campaign.picture} alt='' style={{ width: '100%' }} />
      <div
        style={{
          display: 'flex',
          justifyContent: 'end'
        }}
      >
        <img
          src={campaign.logo}
          alt={campaign.title}
          width={55}
          height={55}
          style={{ zIndex: '99', marginTop: '-50px', textAlign: 'end', borderRadius: '50%' }}
        />
      </div>
      <Typography
        padding={3}
        height={'75px'}
        sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
      >
        {campaign.title}
      </Typography>

      <Button
        fullWidth
        variant='contained'
        size='medium'
        color='primary'
        sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}
      >
        {/* <Icon icon='tabler:join' fontSize={20} /> */}
        Join This Campaign
      </Button>
    </Card>
  )
}

export default CampaignCard
