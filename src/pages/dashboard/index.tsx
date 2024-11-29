import { Button, Card, Typography } from '@mui/material'
import React from 'react'
import CustomTextField from 'src/@core/components/mui/text-field'
import Icon from 'src/@core/components/icon'
import EmptyFilters from './EmptyFilters'

const Page = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
      }}
    >
      <Card
        sx={{
          padding: '30px 50px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '20px'
        }}
      >
        <Typography variant='h5' sx={{ textTransform: 'uppercase' }}>
          Influencer Auditor
        </Typography>

        <div
          style={{
            width: '75%',
            justifyContent: 'center',
            gap: '5px',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <CustomTextField
            sx={{
              width: '65%'
            }}
            autoFocus
            fullWidth
            value={''}
            placeholder='Search for you influencer'
          />
          <Button variant='contained' sx={{ '& svg': { mr: 1 }, backgroundColor: '#655BD3' }}>
            <Icon fontSize='1.125rem' icon='tabler:search' />
            Search
          </Button>
        </div>
        <Typography variant='caption' sx={{ width: '50%', marginInline: 'auto', textAlign: 'center' }}>
          Disclaimer: This report relies on statistics from a sample set of followers and should only be used as an
          estimate guide. The report results may vary and may be significantly different from real life data.
        </Typography>
      </Card>

      <Card
        sx={{
          padding: '30px 50px',
          gap: '20px'
        }}
      >
        <EmptyFilters />
      </Card>
    </div>
  )
}

export default Page
