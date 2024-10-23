import { Box, Card, Grid, Typography } from '@mui/material'
import React from 'react'
import CustomTextField from 'src/@core/components/mui/text-field'
import categories from '../../data/categories.json'
import CardNiche from './CardNiche'

const Niches = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} lg={12}>
        <Card
          sx={{
            position: 'relative',
            padding: '40px 60px',
            display: 'flex',
            flexDirection: 'column',
            gap: '25px',
            boxShadow: `0 0 0 2px #EFEFEF`
          }}
        >
          <Box>
            <Typography variant='h4' sx={{ mb: 1.5, textAlign: 'center', fontWeight: 'bold' }}>
              Browse over 600+ Niches
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', width: '50%', marginInline: 'auto' }}>
            <CustomTextField fullWidth autoFocus value={''} placeholder='Search for an Industry or a niche' />
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} lg={12}>
        <Typography variant='h5'>Toutes les industries et tous les créneaux</Typography>
      </Grid>
      {categories.map(category => (
        <Grid key={category.id} item xs={12} sm={6} md={4}>
          <CardNiche category={category} />
        </Grid>
      ))}
    </Grid>
  )
}

export default Niches
