import { Grid } from '@mui/material'
import React from 'react'
import CardDetails from 'src/@core/components/influenceurs/CardDetails'
import MediaDetails from '../../MediaDetails'
import InfluenceScore from '../../InfluenceScore'
import { useRouter } from 'next/router'
import Error500 from 'src/pages/500'
import api from 'src/lib/api'
import Loading from 'src/components/Loading'
import UseQueryHooks from 'src/lib/react-query'
import GeneratePDFButton from 'src/@core/components/influenceurs/GenerateReport'

const Page = () => {
  const router = useRouter()

  const { id } = router.query

  const { error, isLoading, data } = UseQueryHooks<Data>(
    [`/influencers/${id}`],
    async () => {
      const response = await api.get<Data>(`/influencers/${id}`)

      return response.data
    },
    { enabled: !!id }
  )
  if (error) return <Error500 />

  if (isLoading)
    return (
      <div style={{ height: '100vh', display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
        <Loading />
      </div>
    )

  return (
    <div>
      {data && (
        <div>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6} lg={6}>
              <CardDetails influencer={data.creator} />
              <GeneratePDFButton id={data.creator.id} />
            </Grid>
            <InfluenceScore data={data} />
          </Grid>
          <div style={{ marginTop: '80px' }}>
            <MediaDetails data={data} />
          </div>
        </div>
      )}
    </div>
  )
}

export default Page
