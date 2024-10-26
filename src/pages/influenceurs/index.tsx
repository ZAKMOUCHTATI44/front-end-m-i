import { Card, Grid, Pagination, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import FiltersInfluenceurs from 'src/components/FiltersInfluenceurs'
import CardInfluencer from './CardInfluencer'

import data from '../../data/1.json'

const Page = () => {
  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={12} lg={12}>
          <Card sx={{ position: 'relative', padding: '40px 20px' }}>
            <Box>
              <Typography variant='h4' sx={{ mb: 1.5, textAlign: 'center', fontWeight: 'bold' }}>
                Find the right creators according to your needs
              </Typography>
              <FiltersInfluenceurs />
            </Box>
          </Card>
        </Grid>
        {data.map(influencer => (
          <Grid item xs={12} sm={6} md={4} key={influencer._id}>
            <CardInfluencer influencer={influencer} />
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: theme => theme.spacing(6) }}>
        <Pagination count={200} color='primary' onChange={(e, value) => console.log(value)} />
      </Box>
    </>
  )
}
export default Page
