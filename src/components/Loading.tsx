import { CircularProgress } from '@mui/material'
import React from 'react'

const Loading = () => {
  return (
    <div>
      <CircularProgress disableShrink sx={{ mt: 6 }} />
    </div>
  )
}

export default Loading
