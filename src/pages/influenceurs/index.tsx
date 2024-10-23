import { Button, Card, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import CustomTextField from 'src/@core/components/mui/text-field'
import Icon from 'src/@core/components/icon'
import FiltersInfluenceurs from 'src/components/FiltersInfluenceurs'
import CardInfluencer from './CardInfluencer'

import data from '../../data/1.json'

const Page = () => {
  const [addUserOpen, setAddUserOpen] = useState<boolean>(false)
  const toggleAddUserDrawer = () => setAddUserOpen(!addUserOpen)

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} lg={12}>
        <Card sx={{ position: 'relative', padding: '40px 60px', boxShadow: `0 0 0 2px #EFEFEF` }}>
          <Box>
            <Typography variant='h4' sx={{ mb: 1.5, textAlign: 'center', fontWeight: 'bold' }}>
              Find the right creators according to your needs
            </Typography>

            <Box
              sx={{
                py: 4,
                px: 6,
                rowGap: 2,
                columnGap: 4,
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <FiltersInfluenceurs open={addUserOpen} toggle={toggleAddUserDrawer} />
              <Button
                onClick={toggleAddUserDrawer}
                variant='contained'
                sx={{ '& svg': { mr: 2 }, backgroundColor: '#655BD3' }}
              >
                <Icon fontSize='1.125rem' icon='tabler:adjustments' />
                Filters
              </Button>
              <CustomTextField autoFocus value={''} placeholder='Add  a Keyword' />
              <Button variant='contained' sx={{ '& svg': { mr: 2 }, backgroundColor: '#655BD3' }}>
                <Icon fontSize='1.125rem' icon='tabler:search' />
                Search
              </Button>
            </Box>
          </Box>
        </Card>
      </Grid>

      {data.map(influencer => (
        <Grid item xs={12} sm={6} md={4} key={influencer._id}>
          <CardInfluencer influencer={influencer} />
        </Grid>
      ))}
    </Grid>
  )
}
export default Page
