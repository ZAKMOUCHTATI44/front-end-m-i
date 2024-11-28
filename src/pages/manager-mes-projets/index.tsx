import { Card, Typography } from '@mui/material'
import React from 'react'
import api from 'src/lib/api'
import UseQueryHooks from 'src/lib/react-query'
import Error500 from '../500'
import Loading from 'src/components/Loading'
import CreateProject from './CreateProject'
import ProjectDetails from './ProjectDetails'

const Page = () => {
  const { error, isLoading, data } = UseQueryHooks<Project[]>(['/projects'], async () => {
    const response = await api.get<Project[]>('/projects')

    return response.data
  })
  if (error) return <Error500 />

  return (
    <div>
      <Card sx={{ padding: '60px 15px' }}>
        <Typography variant='h5'>My Projets</Typography>
        {isLoading && (
          <div style={{ padding: '60px', display: 'flex', justifyContent: 'center' }}>
            <Loading />
          </div>
        )}

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '16px',
            marginTop: '30px'
          }}
        >
          <CreateProject />
          {data && data.length > 0 && data.map(project => <ProjectDetails key={project.id} project={project} />)}
        </div>
      </Card>
    </div>
  )
}

export default Page
