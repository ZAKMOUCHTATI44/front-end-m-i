import { Grid } from '@mui/material'
import React from 'react'
import SourcesFilter from './SourcesFilter'
import { Box } from '@mui/system'

const FilterFeed = () => {
  return (
    <Box sx={{ margin: '10px' }}>
      <Grid item xs={12}>
        <SourcesFilter />
      </Grid>
    </Box>
  )
}

export default FilterFeed
