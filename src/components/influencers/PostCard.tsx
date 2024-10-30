import { Card, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Link from 'next/link'
import React from 'react'
import Icon from 'src/@core/components/icon'

interface MediaPost {
  media_id: string
  username: string
  profileImageUrl: string
  date: string
  network: string
  caption: string
  thumbnailUrl: string
  mediaUrl: string
  viewCount: string | null
  buzzCount: number | null
  buzzCountRaw: number | null
  likeCount: string // You may want to consider changing this to number if you prefer to work with raw counts
  likeCountRaw: number
  commentCount: string // Same as above
  commentCountRaw: number
  shareCount: number | null
  shareCountRaw: number | null
  engagementRate: string // You may also consider using a number if you want to perform calculations
  engagementRateRaw: number
  postType: {
    label: string
    network: string
  }
}

const PostCard = ({ post }: { post: MediaPost }) => {
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
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '5px' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <img src={post.profileImageUrl} alt={post.username} width={35} height={35} style={{ borderRadius: '50%' }} />
          <Typography>{post.username}</Typography>
        </Box>
        <Link href={post.mediaUrl} target='_blank'>
          <Icon icon='tabler:share-2' fontSize={20} color='#000' />
        </Link>
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
        {post.caption.substring(0, 100)} ...
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: theme => theme.spacing(3) }}>
        {post.viewCount && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <Icon icon='tabler:eye' fontSize={15} />
            <Typography variant='caption'>{post.viewCount}</Typography>
          </Box>
        )}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <Icon icon='tabler:heart' fontSize={15} />
          <Typography variant='caption'>{post.likeCount}</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <Icon icon='tabler:message' fontSize={15} />
          <Typography variant='caption'>{post.commentCount}</Typography>
        </Box>
      </Box>
    </Card>
  )
}

export default PostCard
