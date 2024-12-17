import { Card, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

interface Type {
  id: number
  name: string
  weight: number
}
const DetailsList = ({ data, title }: { data: Type[]; title: string }) => {
  return (
    <Card sx={{ padding: '30px', height: '100%' }}>
      <Typography variant='h6' mb={6}>
        {title}
      </Typography>
      <Box>
        {data.map(item => (
          <Box key={item.id} sx={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
            <div style={{ width: '-webkit-fill-available' }}>
              <Typography
                variant='subtitle2'
                style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}
              >
                <span style={{ textTransform: 'capitalize' }}>{item.name}</span>
                <Typography variant='caption'>{(item.weight * 100).toFixed(2)} %</Typography>
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
                    width: `${item.weight * 100}%`,
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
  )
}

export default DetailsList
