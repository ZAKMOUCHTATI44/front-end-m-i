import { Card, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

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
    <Card sx={{ p: theme => theme.spacing(3) }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
        <img src={post.profileImageUrl} alt={post.username} width={35} height={35} style={{ borderRadius: '50%' }} />
        <Typography>{post.username}</Typography>
      </Box>
      <Box>
        <Box
          sx={{
            width: '100%',
            height: '270px',
            display: 'flex',
            borderRadius: '20px',
            marginInline: 'auto',
            mt: theme => theme.spacing(6),
            backgroundImage: `url(${post.thumbnailUrl})`,
            backgroundSize: 'cover'
          }}
        />
      </Box>
    </Card>
  )
}

export default PostCard
