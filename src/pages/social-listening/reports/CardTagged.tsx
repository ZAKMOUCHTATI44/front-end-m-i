import { Card, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

interface Data {
  name: string
  pictureUrl: string
  mention: string
}
const CardTagged = ({ data }: { data: Data }) => {
  return (
    <Card
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '10px 0px',
        padding: '10px 5px',
        gap: '15px'
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
        <img src={data.pictureUrl} alt={data.name} height={35} width={35} style={{ borderRadius: '50%' }} />
        <Typography>{data.name}</Typography>
      </Box>
      <Box
        sx={{
          width: '30px',
          height: '30px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '50%',
          backgroundColor: '#ebecff',
          color: '#6443ea',
          fontSize: '12px'
        }}
      >
        {data.mention}
      </Box>
    </Card>
  )
}

export default CardTagged
