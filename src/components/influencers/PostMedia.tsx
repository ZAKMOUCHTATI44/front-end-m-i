import React from 'react'
import PostCard from './PostCard'
import { Grid } from '@mui/material'
import { Box } from '@mui/system'

const PostMedia = ({ data }: { data: Data }) => {
  return (
    <Grid spacing={6}>
      <Grid container spacing={6}>
        {data.posts.map(post => (
          <Grid item xs={12} sm={6} md={3} key={post.media_id}>
            <PostCard post={{ ...post, profileImageUrl: data.creator.pictureUrl }} />
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: theme => theme.spacing(6) }}>
        {/*         
        <Pagination
          count={Math.round(data.totalCount / 12)}
          color='primary'
          onChange={(e, value) => console.log(value)}
        /> */}
      </Box>
    </Grid>
  )
}

export default PostMedia
