import { Grid } from '@mui/material'
import React from 'react'
import FollowersCredibility from 'src/components/influencers/FollowersCredibility'
import SplitGender from 'src/components/influencers/SplitGender'
import Loading from 'src/components/Loading'
import api from 'src/lib/api'
import UseQueryHooks from 'src/lib/react-query'
import Error500 from 'src/pages/500'

type Audience = {
  analysis: {
    cleared: number
    flagged: number
  }
  gender: {
    F: number
    M: number
    U: number
  }
}

interface ResponseType {
  id: string
  handle: string
  network: string
  snapshot: string
  audience: Audience
}

const AudienceChart = ({ id }: { id: string }) => {
  const { error, isLoading, data } = UseQueryHooks<ResponseType[]>(
    [`/creators/${id}/audience`],
    async () => {
      const response = await api.get<ResponseType[]>(`/creators/${id}/audience`)

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
    <>
      {data && (
        <>
          <Grid container spacing={6}>
            <Grid item xs={12} lg={7}>
              <FollowersCredibility props={data[0].audience.analysis} />
            </Grid>
            <Grid item xs={12} lg={5}>
              <SplitGender props={data[0].audience.gender} />
            </Grid>
          </Grid>
        </>
      )}
    </>
  )
}

export default AudienceChart
