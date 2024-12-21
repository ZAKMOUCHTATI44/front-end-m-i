import React from 'react'
import { Typography } from '@mui/material'
import Icon from 'src/@core/components/icon'
import moment from 'moment'
import { useRouter } from 'next/router'
import EditProjetName from './EditProjetName'
import { Box } from '@mui/system'
import DeleteProjet from './show/DeleteProjet'

const containerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  border: '2px dashed #D3D3D3',
  borderRadius: '12px',
  cursor: 'pointer',
  color: '#C0B6E0',
  fontFamily: 'Arial, sans-serif',
  fontSize: '18px',
  fontWeight: '500'
}

const ProjectDetails = ({ project }: { project: Project }) => {
  const router = useRouter()

  return (
    <div style={containerStyle}>
      <Box
        sx={{
          borderBottom: '1px solid #D3D3D3',
          padding: '10px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Typography
          onClick={() => {
            router.push(`manager-mes-projets/show/${project.id}`)
          }}
        >
          {project.label}
        </Typography>
        <EditProjetName id={project.id} name={project.label} />
        <DeleteProjet id={project.id} />
      </Box>
      <div
        onClick={() => {
          router.push(`manager-mes-projets/show/${project.id}`)
        }}
        style={{
          height: '-webkit-fill-available',
          padding: '10px'
        }}
      >
        <div
          onClick={() => {
            router.push(`manager-mes-projets/show/${project.id}`)
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '5px'
          }}
        >
          <Icon icon='tabler:users' fontSize={15} />
          <Typography>{project.creators} Influencers</Typography>
        </div>
      </div>

      <div
        style={{
          padding: '10px',
          borderTop: '1px solid #D3D3D3'
        }}
      >
        <Typography variant='caption'>Created at : {moment(project.created_at).fromNow()}</Typography>
      </div>
    </div>
  )
}

export default ProjectDetails
