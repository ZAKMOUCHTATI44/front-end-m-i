import { Card, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Icon from 'src/@core/components/icon'
import NotAvailable from './NotAvailable'

interface Product {
  id: number
  title: string
  image: string
  category: string
}
const ProductsCard = ({ product }: { product: Product }) => {
  return (
    <Card
      sx={{
        padding: '20px',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <img src={product.image} width={250} alt='' />
      </Box>
      <span style={{ position: 'absolute', top: '15px', right: '15px' }}>
        <Icon icon='tabler:heart' fontSize={20} className='hover-icon-heart' />
      </span>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
          paddingTop: '25px',
          marginTop: '25px'
        }}
      >
        <Typography variant='caption'>{product.category}</Typography>
        <Typography variant='h6' sx={{ fontWeight: '900', height: '25px' }}>
          {product.title}
        </Typography>
        <Typography>
          <Icon icon='tabler:dollar' fontSize={20} />
          Commission: 15 $
        </Typography>

        <NotAvailable />
      </div>
    </Card>
  )
}

export default ProductsCard
