import { Card, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const NotableFollowers = () => {
  const data = [
    {
      name: 'Jennifer Lopez',
      username: '@jlo',
      picture:
        'https://imgp.sptds.icu/v2?mb0KwpL92uYofJiSjDn1%2F6peL1lBwv3s%2BUvShHERlDbi%2FzCyzJZ6fg43%2BYylAG3qGd2lEjyApjfiOTMal90sfgJkGM09ZF68ZZCOYKRFRjpgoqm2YRPdcY7BiIUi0czigNlJUwVYqIiahjW32e%2BqWA%3D%3D'
    },
    {
      name: 'Kevin Hart',
      username: '@kevinhart4real',
      picture:
        'https://imgp.sptds.icu/v2?mb0KwpL92uYofJiSjDn1%2F6peL1lBwv3s%2BUvShHERlDbi%2FzCyzJZ6fg43%2BYylAG3qGd2lEjyApjfiOTMal90sfgJkGM09ZF68ZZCOYKRFRjpgoqm2YRPdcY7BiIUi0czigNlJUwVYqIiahjW32e%2BqWA%3D%3D'
    },
    {
      name: 'Cardi B',
      username: '@iamcardib',
      picture:
        'https://imgp.sptds.icu/v2?mb0KwpL92uYofJiSjDn1%2F6peL1lBwv3s%2BUvShHERlDbi%2FzCyzJZ6fg43%2BYylAG3qGd2lEjyApjfiOTMal90sfgJkGM09ZF68ZZCOYKRFRjpgoqm2YRPdcY7BiIUi0czigNlJUwVYqIiahjW32e%2BqWA%3D%3D'
    }
  ]

  return (
    <>
      <Grid lg={3} sx={{ height: '100%' }}>
        <Card sx={{ marginLeft: '10px', padding: '30px', height: '100%' }}>
          <Typography variant='h6' mb={6}>
            16.8% Notable Followers
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            {data.map(item => (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }} key={item.name}>
                <img src={item.picture} alt={item.name} width={45} height={45} style={{ borderRadius: '50%' }} />
                <div>
                  <Typography>
                    {item.name}
                    <Typography sx={{ display: 'block' }} variant='caption'>
                      {item.username}{' '}
                    </Typography>
                  </Typography>
                </div>
              </Box>
            ))}
          </Box>
        </Card>
      </Grid>
    </>
  )
}

export default NotableFollowers
