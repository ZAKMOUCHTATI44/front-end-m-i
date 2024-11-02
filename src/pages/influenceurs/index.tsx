import { Button, Card, Grid, Pagination, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import CustomTextField from 'src/@core/components/mui/text-field'
import Icon from 'src/@core/components/icon'
import FiltersInfluenceurs from 'src/components/FiltersInfluenceurs'
import CardInfluencer from './CardInfluencer'

import { useQuery } from 'react-query'
import api from 'src/lib/api'
import Loading from 'src/components/Loading'
import Error500 from '../500'
import { useRouter } from 'next/router'

const Page = () => {
  const [addUserOpen, setAddUserOpen] = useState<boolean>(false)
  const toggleAddUserDrawer = () => setAddUserOpen(!addUserOpen)
  const router = useRouter()
  const routerParams = router.query

  const buildQueryString = (): string => {
    let queryString = `/influencers?key=1`
    function concatenateVariableNamesAndValues(obj: any) {
      // Loop through the object keys dynamically
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          if (obj[key]) {
            queryString += `&${key}=${obj[key]}`
          }
        }
      }
    }
    concatenateVariableNamesAndValues(routerParams)

    return queryString
  }

  const { error, isLoading, data } = useQuery<Influencer[]>([buildQueryString()], async () => {
    const response = await api.get<Influencer[]>(buildQueryString())

    return response.data
  })
  if (error) return <Error500 />

  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={12} lg={12}>
          <Card sx={{ position: 'relative', padding: '30px 60px',  overflow: 'visible' }}>
            <Box>
              <Typography variant='h4' sx={{ mb: 1.5, textAlign: 'center', fontWeight: 'bold', color: '#000' }}>
                Find the right creators according to your needs
              </Typography>
              <FiltersInfluenceurs open={addUserOpen} toggle={toggleAddUserDrawer} />

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
              {/* Image ajoutée à droite du Box */}
              <Box
                component="img"
                src="/images/avatars/illustration-influ.png"
                alt="Description de l'image"
                sx={{
                  position: 'absolute',
                  bottom: '-90px',
                  right: '0px',
                  width: '288px',
                  height: 'auto',
                  transform: 'translateY(-50%)', // Décale pour dépasser légèrement en haut
                  display: { xs: 'none', sm: 'none', md: 'block' }
                }}
              />
              {/* Fin de l'ajout de l'image */}
            </Box>
          </Card>
        </Grid>
        {isLoading && (
          <Grid
            item
            xs={12}
            lg={12}
            style={{ height: '50vh', display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center' }}
          >
            <Loading />
          </Grid>
        )}
        {data &&
          data.length > 0 &&
          data.map(influencer => (
            <Grid item xs={12} sm={6} md={3} key={influencer._id}>
              <CardInfluencer influencer={influencer} />
            </Grid>
          ))}
        {/* {data.map(influencer => (

        ))} */}
      </Grid>

      {!isLoading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: theme => theme.spacing(6) }}>
          <Pagination
            count={200}
            page={Number(routerParams.page) || 1}
            color='primary'
            onChange={(e, value) => {
              router.push({
                query: { ...router.query, page: value }
              })
            }}
          />
        </Box>
      )}
    </>
  )
}
export default Page
