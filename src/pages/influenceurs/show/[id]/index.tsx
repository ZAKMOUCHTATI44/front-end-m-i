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

type Account = {
  id: string
  name: string
  network: string
  handle: string
  bio: string | null
  verified: boolean | null
  subscribers: number | null
  score: number
}

type Data = {
  id: string
  name: string
  title: string
  description: string | null
  categories: string[]
  accounts: Account[]
}

const Page = () => {
  const router = useRouter()

  const { id } = router.query

  const { error, isLoading, data } = UseQueryHooks<Data>(
    [`/creators/${id}`],
    async () => {
      const response = await api.get<Data>(`/creators/${id}`)

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
              <CardDetails influencer={data} />
              <GeneratePDFButton id={data.id} />
            </Grid>
            <InfluenceScore data={data} />
          </Grid>
          <div style={{ marginTop: '80px' }}>
            <MediaDetails id={data.id} />
          </div>
        </div>
      )}
    </div>
  )
}

export default Page
