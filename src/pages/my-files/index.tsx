import React from 'react'
import FormSearchFile from './FormSearchFile'
import DataTableFIle from './DataTableFIle'
import UseQueryHooks from 'src/lib/react-query'
import api from 'src/lib/api'
import Error500 from '../500'

const Page = () => {
  const queryBuilder = () => {
    return `/reports`
  }
  const { error, data } = UseQueryHooks<Influencer[]>([queryBuilder()], async () => {
    const response = await api.get<Influencer[]>(queryBuilder())

    return response.data
  })
  if (error) return <Error500 />

  return (
    <div>
      <FormSearchFile />
      {data && <DataTableFIle data={data} />}
    </div>
  )
}

export default Page
