import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useRouter } from 'next/router'
import React from 'react'
import Icon from 'src/@core/components/icon'

const EmptyFilters = () => {
  const router = useRouter()

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '32px 10px',
        gap: '15px'
      }}
    >
      <img src='/empty-result.png' alt='' width={250} />
      <Typography variant='h4'>The whole creator economy is at your fingertips.</Typography>
      <Typography variant='h6'>Start by selecting some filters.</Typography>
      <Button
        onClick={() => router.push('/influenceurs')}
        variant='contained'
        color='primary'
        sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}
      >
        Search with filters
        <Icon icon='tabler:adjustments-horizontal' fontSize={20} />
      </Button>
    </Box>
  )
}

export default EmptyFilters
