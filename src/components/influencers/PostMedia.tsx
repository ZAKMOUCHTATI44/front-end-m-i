import React from 'react'
import data from '../../data/details.json'
import PostCard from './PostCard'
import { Grid, Pagination } from '@mui/material'
import { Box } from '@mui/system'

const PostMedia = () => {
  return (
    <Grid container spacing={6}>
      <Grid container spacing={6}>
        {data.posts.map(post => (
          <Grid item xs={12} sm={6} md={3} key={post.media_id}>
            <PostCard post={post} />
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: theme => theme.spacing(6) }}>
        <Pagination count={200} color='primary' onChange={(e, value) => console.log(value)} />
      </Box>
    </Grid>
  )
}

export default PostMedia
