import { Box, Card, Grid, Typography } from '@mui/material'
import React from 'react'
import UseQueryHooks from 'src/lib/react-query'
import api from 'src/lib/api'
import Error500 from '../500'
import Loading from 'src/components/Loading'
import DataTableInfluencersRanking from './DataTableInfluencersRanking'
import FiltersInfluenceurs from 'src/components/FiltersInfluenceurs'
import { useRouter } from 'next/router'

interface Response {
  totalCount: number
  data: Influencer[]
  currentPage: number
  lastPage: number
}

const Page = () => {
  const router = useRouter()
  const routerParams = router.query

  const buildQueryString = (): string => {
    let queryString = `/influencers?limit=50`
    function concatenateVariableNamesAndValues(obj: any) {
      // Loop through the object keys dynamically
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          if (obj[key] && obj[key] !== '0') {
            queryString += `&${key}=${obj[key]}`
          }
        }
      }
    }
    concatenateVariableNamesAndValues(routerParams)

    return queryString
  }

  const { error, isLoading, data } = UseQueryHooks<Response>([buildQueryString()], async () => {
    const response = await api.get<Response>(buildQueryString())

    return response.data
  })
  if (error) return <Error500 />

  return (
    <div>
      <Grid item xs={12} lg={12}>
        <Card sx={{ position: 'relative', padding: '40px 20px' }}>
          <Box>
            <Typography variant='h4' sx={{ mb: 1.5, textAlign: 'center', fontWeight: 'bold' }}>
              🏆 Top 50 Creators
            </Typography>
          </Box>
          <FiltersInfluenceurs />
        </Card>
        {isLoading && <Loading />}
        {data && <DataTableInfluencersRanking data={data?.data} />}
      </Grid>
    </div>
  )
}

export default Page
