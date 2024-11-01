import { Button, Card, Typography } from '@mui/material'
import React from 'react'
import Icon from 'src/@core/components/icon'

interface Product {
  id: number
  title: string
  image: string
  category: string
}
const ProductsCard = ({ product }: { product: Product }) => {
  return (
    <Card sx={{ padding: '20px', position: 'relative' }}>
      <div
        className='product-image'
        style={{
          backgroundImage: `url(${product.image})`,
          width: '100%',
          height: '200px',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>
      <span style={{ position: 'absolute', top: '15px', right: '15px' }}>
        <Icon icon='tabler:heart' fontSize={20} className='hover-icon-heart' />
      </span>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
          borderTop: '2px solid #f8f7fa',
          paddingTop: '25px',
          marginTop: '25px'
        }}
      >
        <Typography variant='caption'>{product.category}</Typography>
        <Typography variant='h6' sx={{ fontWeight: '900' }}>
          {product.title}
        </Typography>
        <Button variant='contained' size='medium' color='primary'>
          Show details
        </Button>
      </div>
    </Card>
  )
}

export default ProductsCard
