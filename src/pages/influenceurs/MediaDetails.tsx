import React, { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import MuiTab from '@mui/material/Tab'
import MuiTabList from '@mui/lab/TabList'
import PostMedia from 'src/components/influencers/PostMedia'
import SocialCoverage from 'src/components/influencers/SocialCoverage'

const MediaDetails = ({ data }: { data: Data }) => {
  // ** State
  const [activeTab, setActiveTab] = useState<string>('media')

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
        <MuiTab value='media' label='Posts' />
        <MuiTab value='social-coverage' label='Social Coverage' />
        <MuiTab value='billing-plan' label='Creator Network' />
        <MuiTab value='notification' label='Audience' />
        <MuiTab value='connection' label='Scoring' />
      </MuiTabList>
      <Box sx={{ mt: 8 }}>
        <TabPanel sx={{ p: 0 }} value='media'>
          <PostMedia data={data} />
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value='social-coverage'>
          <SocialCoverage />
        </TabPanel>
      </Box>
    </TabContext>
  )
}

export default MediaDetails
