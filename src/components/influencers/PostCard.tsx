import { Card, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Link from 'next/link'
import React, { useState, useEffect, useRef } from 'react'
import Icon from 'src/@core/components/icon'
import { formatNumber } from 'src/lib/numbers'

const PostCard = ({ post }: { post: any }) => {
  const [isInView, setIsInView] = useState(false)
  const boxRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.1 }
    )

    if (boxRef.current) {
      observer.observe(boxRef.current)
    }

    return () => {
      if (boxRef.current) {
        observer.unobserve(boxRef.current)
      }
    }
  }, [])

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
            src={`https://api.inflauditor.ma/media/account?id=${post.account}`}
            alt={post.handle}
            width={35}
            height={35}
            style={{ borderRadius: '50%' }}
          />
          <Typography variant='caption'>@{post.handle}</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <img src={`/images/social-media/new/${post.network}.png`} alt='' width={15} height={15} />
          <span>{post.network}</span>
          <Link href={post.url} target='_blank'>
            <Icon icon='tabler:share-2' fontSize={20} color='#ff56e3' />
          </Link>
        </Box>
      </Box>
      <Box>
        <Box
          ref={boxRef}
          sx={{
            width: '100%',
            height: '270px',
            display: 'flex',
            borderRadius: '12px',
            marginInline: 'auto',
            my: theme => theme.spacing(3),
            backgroundImage: isInView ? `url(${post.profileImageUrl})` : 'none',
            backgroundSize: 'cover'

            // backgroundColor: '#f0f0f0' // Placeholder color while the image is loading
          }}
        >
          {!isInView && (
            <Box
              sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#888',
                fontSize: '16px'
              }}
            >
              Loading...
            </Box>
          )}
        </Box>
      </Box>

      <Typography variant='caption'>{post.date}</Typography>
      <Typography variant='caption' sx={{ my: theme => theme.spacing(3) }}>
        {post.caption && `${post.caption.substring(0, 100)} ...`}
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: theme => theme.spacing(3) }}>
        {post.views ? (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <Icon icon='tabler:eye' fontSize={15} />
            <Typography variant='caption'>{formatNumber(post.views)}</Typography>
          </Box>
        ) : (
          <></>
        )}
        {post.likes && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <Icon icon='tabler:heart' fontSize={15} />
            <Typography variant='caption'>{formatNumber(post.likes)}</Typography>
          </Box>
        )}
        {post.comments && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <Icon icon='tabler:message' fontSize={15} />
            <Typography variant='caption'>{formatNumber(post.comments)}</Typography>
          </Box>
        )}
      </Box>
    </Card>
  )
}

export default PostCard
