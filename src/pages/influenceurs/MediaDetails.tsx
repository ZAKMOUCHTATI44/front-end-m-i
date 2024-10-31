import React from 'react'

// ** React Imports
import { useState } from 'react'

// ** Next Import

// ** MUI Imports
import Box from '@mui/material/Box'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { styled } from '@mui/material/styles'
import MuiTab, { TabProps } from '@mui/material/Tab'
import MuiTabList, { TabListProps } from '@mui/lab/TabList'
import PostMedia from 'src/components/influencers/PostMedia'
import SocialCoverage from 'src/components/influencers/SocialCoverage'

// ** Icon Imports

// ** Styled Tab component
const Tab = styled(MuiTab)<TabProps>(({ theme }) => ({
  flexDirection: 'row',
  '& svg': {
    marginBottom: '0 !important',
    marginRight: theme.spacing(1.5)
  }
}))

const TabList = styled(MuiTabList)<TabListProps>(({ theme }) => ({
  borderBottom: '0 !important',
  '&, & .MuiTabs-scroller': {
    boxSizing: 'content-box',
    padding: theme.spacing(1.25, 1.25, 2),
    margin: `${theme.spacing(-1.25, -1.25, -2)} !important`
  },
  '& .MuiTabs-indicator': {
    display: 'none'
  },
  '& .Mui-selected': {
    boxShadow: theme.shadows[2],
    backgroundColor: theme.palette.primary.main,
    color: `${theme.palette.common.white} !important`
  },
  '& .MuiTab-root': {
    lineHeight: 1,
    borderRadius: theme.shape.borderRadius,
    '&:hover': {
      color: theme.palette.primary.main
    }
  }
}))

const MediaDetails = ({ data }: { data: Data }) => {
  // ** State
  const [activeTab, setActiveTab] = useState<string>('media')

  return (
    <TabContext value={activeTab}>
      <TabList
        variant='scrollable'
        scrollButtons='auto'
        onChange={(e, value) => setActiveTab(value)}
        aria-label='forced scroll tabs example'
        sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}` }}
      >
        <Tab value='media' label='Posts' />
        <Tab value='social-coverage' label='Social Coverage' />
        <Tab value='billing-plan' label='Creator Network' />
        <Tab value='notification' label='Audience' />
        <Tab value='connection' label='Scoring' />
      </TabList>
      <Box sx={{ mt: 4 }}>
        <>
          <TabPanel sx={{ p: 0 }} value='media'>
            <PostMedia data={data} />
          </TabPanel>
          <TabPanel sx={{ p: 0 }} value='social-coverage'>
            <SocialCoverage />
          </TabPanel>
        </>
      </Box>
    </TabContext>
  )
}

export default MediaDetails
