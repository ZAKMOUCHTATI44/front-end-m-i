import React from 'react'
import PostCard from './PostCard'
import { Grid } from '@mui/material'
import { Box } from '@mui/system'

const PostMedia = ({ data, gridSize }: { data: any; gridSize?: number }) => {
  return (
    <Grid item container>
      {data.map((post: any) => (
        <Grid item xs={12} sm={6} md={gridSize ?? 3} spacing={5} sx={{ padding: 4 }} key={post.media_id}>
          <PostCard post={{ ...post, profileImageUrl: `https://api.inflauditor.ma/media/post?id=${post.id}` }} />
        </Grid>
      ))}
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
