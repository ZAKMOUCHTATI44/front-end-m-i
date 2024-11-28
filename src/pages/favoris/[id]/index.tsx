import { useRouter } from 'next/router'
import React from 'react'
import Loading from 'src/components/Loading'
import api from 'src/lib/api'
import UseQueryHooks from 'src/lib/react-query'
import Error500 from 'src/pages/500'
import DataTableInfluencers from 'src/pages/Tables/DataTableInfluencers'

const Page = () => {
  const router = useRouter()

  const { id } = router.query

  const { error, isLoading, data } = UseQueryHooks<ListType>([`/favorite-lists/${id}`], async () => {
    const response = await api.get<ListType>(`/favorite-lists/${id}`)

    return response.data
  })
  if (error) return <Error500 />

  return (
    <div>
      {isLoading && <Loading />}
      {data && data.influencers && data.influencers.length && <DataTableInfluencers data={data?.influencers} />}
    </div>
  )
}

export default Page
