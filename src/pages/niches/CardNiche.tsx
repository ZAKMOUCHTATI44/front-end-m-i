import { Card, Typography } from '@mui/material'
import React from 'react'

interface Category {
  value: string
  label: string
  image: string
}

const CardNiche = ({ category }: { category: Category }) => {
  return (
    <Card
      sx={{
        position: 'relative',
        padding: '15px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        backgroundImage: `url("${category.image}")`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '250px',
        borderRadius: '10px',
        overflow: 'hidden',
        color: '#fff'
      }}
    >
      {/* Semi-transparent overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0 , 0.2)',
          zIndex: -1
        }}
      />
      {/* Content */}
      <Typography
        variant='h5'
        sx={{
          position: 'relative',
          zIndex: 2,
          color: '#fff',
          fontWeight: 'bold',
          marginBottom: '8px'
        }}
      >
        {category.label || 'Marketing & Sales'}
      </Typography>
      <Typography
        variant='h6'
        sx={{
          position: 'relative',
          color: '#fff',
          zIndex: 2,
          fontSize: '0.9rem'
        }}
      >
        Discover insights and resources in {category.label.toLowerCase()}.
      </Typography>
    </Card>
  )
}

export default CardNiche
