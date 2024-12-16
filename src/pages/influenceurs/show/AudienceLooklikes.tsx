import { Card, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

type Lookalike = {
  username: string
  full_name: string
  picture_url: string
  url: string
}

const AudienceLooklikes = ({ data }: { data: Lookalike[] }) => {
  return (
    <Card sx={{ padding: '30px', height: '100%' }}>
      <Typography variant='h6' mb={6}>
        Languages
      </Typography>
      <Box>
        {data.map(item => (
          <Box key={item.username} sx={{ display: 'flex', gap: '5px', alignItems: 'center', margin: '10px 0px' }}>
            <img src={item.picture_url} alt={item.full_name} width={30} height={30} style={{ borderRadius: '50%' }} />
            <div style={{ width: '-webkit-fill-available' }}>
              <Typography
                variant='subtitle2'
                style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}
              >
                <span style={{ textTransform: 'capitalize' }}>{item.username}</span>
              </Typography>
            </div>
          </Box>
        ))}
      </Box>
    </Card>
  )
}

export default AudienceLooklikes
