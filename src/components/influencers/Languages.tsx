import { Card, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Languages = () => {
  const data = [
    {
      country: 'English',
      count: 69,
      picture: 'https://app.favikon.com/icons/speaking.png'
    },
    {
      country: 'Spanish',
      count: 6,
      picture: 'https://app.favikon.com/icons/speaking.png'
    },
    {
      country: 'Portuguese',
      count: 5.3,
      picture: 'https://app.favikon.com/icons/speaking.png'
    },
    {
      country: 'French',
      count: 4.6,
      picture: 'https://app.favikon.com/icons/speaking.png'
    },
    {
      country: 'Arabic',
      count: 4.3,
      picture: 'https://app.favikon.com/icons/speaking.png'
    }
  ]

  return (
    <Grid lg={4} pl={2}>
      <Card sx={{ padding: '30px' }}>
        <Typography variant='h6' mb={6}>
          Languages
        </Typography>
        <Box>
          {data.map(item => (
            <Box key={item.country} sx={{ display: 'flex', gap: '5px' }}>
              <img src={item.picture} alt={item.country} width={15} height={15} />
              <div style={{ width: '-webkit-fill-available' }}>
                <Typography
                  variant='subtitle2'
                  style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}
                >
                  <span>{item.country}</span>
                  <Typography variant='caption'>{item.count} %</Typography>
                </Typography>
                <span
                  className='border-progress'
                  style={{
                    height: '8px',
                    width: '100%',
                    borderRadius: '2px',
                    backgroundColor: '#ebecff',
                    display: 'inline-flex',
                    position: 'relative',
                    overflow: 'hidden' // Ensures the inner element doesn’t overflow the border radius
                  }}
                >
                  <span
                    style={{
                      content: '""',
                      height: `100%`,
                      width: `${item.count * 3}%`,
                      backgroundColor: '#7a6af6',
                      position: 'absolute',
                      top: 0,
                      left: 0
                    }}
                  ></span>
                </span>
              </div>
            </Box>
          ))}
        </Box>
      </Card>
    </Grid>
  )
}

export default Languages
