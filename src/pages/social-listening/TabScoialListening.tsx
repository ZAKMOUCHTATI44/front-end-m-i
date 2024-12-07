import TabContext from '@mui/lab/TabContext'
import React, { useState } from 'react'
import MuiTabList from '@mui/lab/TabList'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import TabPanel from '@mui/lab/TabPanel'
import PostFeed from './feed/PostFeed'
import { Grid } from '@mui/material'
import FilterFeed from './feed/FilterFeed'
import CreatorNetwork from '../influenceurs/show/CreatorNetwork'
import PostMediaTag from './reports/PostMediaTag'
import CompetitiveIntelligence from './feed/CompetitiveIntelligence'
import Charts from './feed/Charts'

const TabScoialListening = () => {
  const [activeTab, setActiveTab] = useState<string>('media')

  return (
    <TabContext value={activeTab}>
      <MuiTabList
        style={{ marginTop: '40px' }}
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
        <Tab value='media' label='Feed' />
        <Tab value='network-watch' label='Network Watch' />
        <Tab value='posts' label='Creator Network' />
        <Tab value={'competitiveIntelligence'} label={'Veille concurrentielle'} />

        <Tab value={'sentiment'} label={'Sentiment'} />
      </MuiTabList>
      <Box sx={{ mt: 4 }}>
        <Box>
          <TabPanel sx={{ p: 0 }} value='media'>
            <Grid container item>
              <Grid lg={8} item>
                <PostFeed />
              </Grid>
              <Grid lg={4} item>
                <FilterFeed />
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel sx={{ p: 0 }} value='network-watch'>
            <CreatorNetwork />
          </TabPanel>
          <TabPanel sx={{ p: 0 }} value='posts'>
            <PostMediaTag />
          </TabPanel>
          <TabPanel value='competitiveIntelligence' sx={{ p: 0 }}>
            <CompetitiveIntelligence />
          </TabPanel>
          <TabPanel value='sentiment'>
            <Charts />
          </TabPanel>
        </Box>
      </Box>
    </TabContext>
  )
}

export default TabScoialListening
