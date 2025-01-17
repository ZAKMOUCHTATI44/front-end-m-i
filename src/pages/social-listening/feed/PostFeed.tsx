import React from 'react'
import { Card, Typography, Box, Button } from '@mui/material'
import Icon from 'src/@core/components/icon'

const PostFeed = () => {
  const data = [
    {
      title: 'A Touch of Class in Every Stay — VIBEL STAY',
      logo: "data:image/jpeg;base64,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",
      platform: 'https://vibelstay.holidayfuture.com/',
      visits: '2M',
      influence_score: '10/10',
      date: '9 oct. 2024',
      sentiment: 'Neutral',
      description:
        "Our top properties · 2BR Luxe High-Level Creek View, Palace Residence · Stylish Noor 3 Studio with Poolside Views · Trendy 1BR Apartment with Balcony in Noor 2."
    },
    {
      title: 'Vibelhomes.com',
      logo: "data:image/jpeg;base64,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",
      platform: 'vibelhomes.com',
      visits: '50 K',
      influence_score: '10/10',
      date: 'Il y a 1 mois',
      sentiment: 'Neutral',
      description:
        "Vibel Stay focuses on creating a seamless blend of comfort and sophistication, catering to both short-term and long-term stays, setting a new standard for ..."
    }
  ]

  return (
    <div>
      {data.map((item, index) => (
        <Card sx={{ margin: '10px', padding: 3 }} key={index}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src={item.logo} alt={item.platform} width={75} height={75} style={{ borderRadius: '50%' }} />
            <Box>
              <Typography variant={'h5'}>{item.title}</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '5px' }}>
                <Typography variant='subtitle2'>{item.platform}</Typography>
                <Typography variant='subtitle2'>{item.visits}</Typography>
                <Typography variant='subtitle2'>Influence score {item.influence_score} </Typography>
              </Box>
            </Box>
          </Box>
          <Typography sx={{ padding: 2 }}>{item.description}</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px', marginTop: '20px' }}>
            <Button
              color='success'
              variant='outlined'
              size='small'
              sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}
            >
              <Icon icon='tabler:eye' fontSize={20} />
              Visit
            </Button>
            <Button
              color='warning'
              variant='outlined'
              size='small'
              sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}
            >
              <Icon icon='tabler:tags' fontSize={20} />
              Tags
            </Button>
            <Button
              color='error'
              variant='outlined'
              size='small'
              sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}
            >
              <Icon icon='tabler:trash' fontSize={20} />
              Delete
            </Button>
            <Button
              color='secondary'
              variant='outlined'
              size='small'
              sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}
            >
              <Icon icon='tabler:file-text' fontSize={20} />
              Add to PDF report
            </Button>
          </Box>
        </Card>
      ))}
    </div>
  )
}

export default PostFeed
