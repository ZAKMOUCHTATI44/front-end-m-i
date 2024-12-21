import React from 'react'
import PostMedia from 'src/components/influencers/PostMedia'
import Loading from 'src/components/Loading'
import api from 'src/lib/api'
import UseQueryHooks from 'src/lib/react-query'
import Error500 from 'src/pages/500'

const CreatorPost = ({ id }: { id: string }) => {
  const { error, isLoading, data } = UseQueryHooks<Data>(
    [`/creators/${id}/posts`],
    async () => {
      const response = await api.get<Data>(`/creators/${id}/posts`)

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

  return <div>{data && <PostMedia data={data} />}</div>
}

export default CreatorPost
