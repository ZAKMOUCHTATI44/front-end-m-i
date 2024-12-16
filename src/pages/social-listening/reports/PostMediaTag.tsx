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
import data from '../../../data/social-listening.json'
import { Box } from '@mui/system'
import { formatNumber } from 'src/lib/numbers'
import Icon from 'src/@core/components/icon'

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

  const hasTagged = [
    {
      name: 'Mauboussin',
      mention: '1',
      pictureUrl: 'https://favikon-medias.s3.eu-west-3.amazonaws.com/in/336134941.jpg'
    },
    {
      name: 'NOOĀNCE PARIS',
      mention: '1',
      pictureUrl: 'https://favikon-medias.s3.eu-west-3.amazonaws.com/in/50925947296.jpg'
    },
    {
      name: 'Julie Lellouche',
      mention: '1',
      pictureUrl: 'https://favikon-medias.s3.eu-west-3.amazonaws.com/in/468540951.jpg'
    },
    {
      name: 'Tony Bouge',
      mention: '1',
      pictureUrl: 'https://favikon-medias.s3.eu-west-3.amazonaws.com/tt/6640437645468860421.jpg'
    }
  ]

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
                <CardTagged key={item.name} data={item} />
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
          <Grid item container>
            {data.posts.map((post: any) => (
              <Grid item xs={12} sm={6} md={4} spacing={5} sx={{ padding: 4 }} key={post.media_id}>
                <PostCard post={{ ...post, profileImageUrl: `https://api.inflauditor.ma/media/post?id=${post.id}` }} />
              </Grid>
            ))}
          </Grid>
        </Card>
      </Grid>
    </Grid>
  )
}

const PostCard = ({ post }: { post: any }) => {
  return (
    <Card
      sx={{
        p: theme => theme.spacing(3),
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '5px',
          paddingInline: '10px'
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <img
            src={'https://favikon-medias.s3.eu-west-3.amazonaws.com/in/1314863628.jpg'}
            alt={post.handle}
            width={35}
            height={35}
            style={{ borderRadius: '50%' }}
          />
          <Typography variant='caption'>@filorga_maroc</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <img src={`/images/social-media/${post.network}.png`} alt='' width={15} height={15} />
          <span>{post.postType.label}</span>
          <a href={post.url} target='_blank'>
            <Icon icon='tabler:share-2' fontSize={20} color='#ff56e3' />
          </a>
        </Box>
      </Box>
      <Box>
        <Box
          sx={{
            width: '100%',
            height: '270px',
            display: 'flex',
            borderRadius: '12px',
            marginInline: 'auto',
            my: theme => theme.spacing(3),
            backgroundImage: `url(${post.thumbnailUrl})`,
            backgroundSize: 'cover'
          }}
        />
      </Box>

      <Typography variant='caption'>{post.date}</Typography>
      <Typography variant='caption' sx={{ my: theme => theme.spacing(3) }}>
        {post.caption && `${post.caption.substring(0, 100)} ...`}
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: theme => theme.spacing(3) }}>
        {post.viewCount ? (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <Icon icon='tabler:eye' fontSize={15} />
            <Typography variant='caption'>{formatNumber(post.viewCount)}</Typography>
          </Box>
        ) : (
          <></>
        )}
        {post.likeCount && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <Icon icon='tabler:heart' fontSize={15} />
            <Typography variant='caption'>{formatNumber(post.likeCount)}</Typography>
          </Box>
        )}
        {post.commentCount && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <Icon icon='tabler:message' fontSize={15} />
            <Typography variant='caption'>{formatNumber(post.commentCount)}</Typography>
          </Box>
        )}
      </Box>
    </Card>
  )
}

export default PostMediaTag
