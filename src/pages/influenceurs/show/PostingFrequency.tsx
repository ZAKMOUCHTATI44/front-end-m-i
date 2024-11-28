import { Card, Grid, Typography } from '@mui/material'
import React from 'react'

const PostingFrequency = () => {
  const data = [
    {
      title: 'Average Engagement',
      number: '35.1 K',
      subtitle: 'Followers'
    },
    {
      title: 'Average Likes',
      number: '26.8 K',
      subtitle: 'likes per post'
    },
    {
      title: 'Average Comments',
      number: '8.3 K',
      subtitle: 'comments per post'
    },
    {
      title: 'Authentic Engagement',
      number: '31.9 K',
      subtitle: 'followers per post'
    },
    {
      title: 'Likes-Comments Ratio',
      number: '321',
      subtitle: 'comments per 100 likes'
    },
    {
      title: 'Avg posts per week',
      number: '4.00',
      subtitle: ''
    }

    // {
    //   title: 'Avg posts per day',
    //   number: '0.55',
    //   subtitle: ''
    // },
    // {
    //   title: 'Avg posts per month',
    //   number: '25',
    //   subtitle: ''
    // }
  ]

  return (
    <Grid
      lg={8}
      pl={2}
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '10px'
      }}
    >
      {data.map(item => (
        <Card key={item.title} sx={{ padding: '30px' }}>
          <Typography>{item.title}</Typography>
          <Typography variant='h3' sx={{ fontWeight: 'bold' }}>
            {item.number}
          </Typography>
          <Typography variant='caption'>{item.subtitle}</Typography>
        </Card>
      ))}
    </Grid>
  )
}

export default PostingFrequency
