import React, { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import MuiTabList from '@mui/lab/TabList'
import PostMedia from 'src/components/influencers/PostMedia'
import SocialCoverage from 'src/components/influencers/SocialCoverage'
import Tab from '@mui/material/Tab'

// import AudienceChart from './show/AudienceChart'
// import ScoringTab from 'src/components/influencers/ScoringTab'
// import CreatorNetwork from './show/CreatorNetwork'
import UseQueryHooks from 'src/lib/react-query'
import api from 'src/lib/api'
import Error500 from '../500'
import Loading from 'src/components/Loading'

const MediaDetails = ({ id }: { id: string }) => {
  // ** State
  const [activeTab, setActiveTab] = useState<string>('media')

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

  return (
    <TabContext value={activeTab}>
      <MuiTabList
        centered
        onChange={(e, value) => setActiveTab(value)}
        aria-label='centered tabs example'
        sx={{
          borderBottom: theme => `1px solid ${theme.palette.divider}`,
          justifyContent: 'center', // Centrer les onglets
          display: 'flex',
          '& .MuiTabs-flexContainer': {
            justifyContent: 'center' // Centrer le conteneur des onglets
          },
          '& .MuiTab-root': {
            flex: 'none', // Empêche les onglets de s'étendre
            fontSize: '1.2rem',
            fontWeight: '600',

            '&:hover': {
              color: theme => theme.palette.primary.main
            }
          }
        }}
      >
        <Tab value='media' label='Posts' />
        <Tab value='social-coverage' label='Social Coverage' />
        <Tab value='creator-network' label='Creator Network' />
        <Tab value='audience' label='Audience' />
        <Tab value='scoring' label='Scoring' />
      </MuiTabList>
      <Box sx={{ mt: 4 }}>
        <Box>
          <TabPanel sx={{ p: 0 }} value='media'>
            <PostMedia data={data} />
          </TabPanel>
          <TabPanel sx={{ p: 0 }} value='social-coverage'>
            <SocialCoverage />
          </TabPanel>
          {/* 
          <TabPanel sx={{ p: 0 }} value='creator-network'>
            <CreatorNetwork />
          </TabPanel>
          <TabPanel sx={{ p: 0 }} value='audience'>
            <AudienceChart />
          </TabPanel>
          <TabPanel sx={{ p: 0 }} value='scoring'>
            <ScoringTab />
          </TabPanel> */}
        </Box>
      </Box>
    </TabContext>
  )
}

export default MediaDetails
