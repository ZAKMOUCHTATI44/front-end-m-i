// ** React Imports
import { SyntheticEvent, useState } from 'react'

// ** MUI Imports
import Tab from '@mui/material/Tab'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import MuiTabList, { TabListProps } from '@mui/lab/TabList'
import { Card, Grid } from '@mui/material'
import CardTagged from './CardTagged'
import PostMedia from 'src/components/influencers/PostMedia'
import data from '../../../data/social-listening.json'

// Styled TabList component
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

const PostMediaTag = () => {
  const [value, setValue] = useState<string>('1')

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  const hasTagged: string[] = []

  const wasTaggedBy = [
    {
      name: 'Safae Hbirkou',
      mention: '1',
      pictureUrl: 'https://favikon-medias.s3.eu-west-3.amazonaws.com/in/965109348.jpg'
    },
    {
      name: 'Lina Agdour',
      mention: '1',
      pictureUrl: 'https://favikon-medias.s3.eu-west-3.amazonaws.com/in/3411018535.jpg'
    },
    {
      name: 'Selma Faida',
      mention: '2',
      pictureUrl: 'https://favikon-medias.s3.eu-west-3.amazonaws.com/in/1718712370.jpg'
    },
    {
      name: 'Sara Laajaj',
      mention: '2',
      pictureUrl: 'https://favikon-medias.s3.eu-west-3.amazonaws.com/in/588083112.jpg'
    },
    {
      name: 'Safae Hbirkou',
      mention: '1',
      pictureUrl: 'https://favikon-medias.s3.eu-west-3.amazonaws.com/in/965109348.jpg'
    },
    {
      name: 'Lina Agdour',
      mention: '1',
      pictureUrl: 'https://favikon-medias.s3.eu-west-3.amazonaws.com/in/3411018535.jpg'
    },
    {
      name: 'Selma Faida',
      mention: '2',
      pictureUrl: 'https://favikon-medias.s3.eu-west-3.amazonaws.com/in/1718712370.jpg'
    },
    {
      name: 'Sara Laajaj',
      mention: '2',
      pictureUrl: 'https://favikon-medias.s3.eu-west-3.amazonaws.com/in/588083112.jpg'
    }
  ]

  return (
    <Grid container>
      <Grid item lg={3} sx={{ position: 'sticky', top: '90px', height: '600px' }}>
        <Card>
          <Typography variant='h6' padding={5}>
            Carrefour Market Maroc Network
          </Typography>
          <TabContext value={value}>
            <TabList onChange={handleChange} aria-label='customized tabs example' sx={{ margin: 2 }}>
              <Tab value='1' label='Has Tagged' sx={{ width: '50%' }} />
              <Tab value='2' label='Was Tagged by' sx={{ width: '50%' }} />
            </TabList>
            <TabPanel value='1'>
              {hasTagged.map(item => (
                <div key={item}></div>
              ))}
            </TabPanel>
            <TabPanel value='2'>
              {wasTaggedBy.map(item => (
                <CardTagged key={item.name} data={item} />
              ))}
            </TabPanel>
          </TabContext>
        </Card>
      </Grid>
      <Grid item lg={9} pl={5}>
        <Card sx={{ padding: '10px' }}>
          <PostMedia data={data} gridSize={4} />
        </Card>
      </Grid>
    </Grid>
  )
}

export default PostMediaTag
