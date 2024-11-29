import { Card, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Link from 'next/link'
import React from 'react'
import Icon from 'src/@core/components/icon'

const PostCard = ({ post }: { post: Post }) => {
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
          <img src={post.profileImageUrl} alt={post.username} width={35} height={35} style={{ borderRadius: '50%' }} />
          <Typography variant='caption'>{post.username}</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <img src={`/images/social-media/${post.network}.png`} alt='' width={15} height={15} />
          <span>{post.postType.label}</span>
          <Link href={post.mediaUrl} target='_blank'>
            <Icon icon='tabler:share-2' fontSize={20} color='#ff56e3' />
          </Link>
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
