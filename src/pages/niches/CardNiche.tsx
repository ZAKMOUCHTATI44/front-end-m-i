import { Button, Card, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import Icon from 'src/@core/components/icon'

interface SubCategory {
  name: string
  id: string
  slug: string
}

interface Category {
  id: string
  name: string
  slug: string
  desc: string
  sub_categories: SubCategory[]
}
const CardNiche = ({ category }: { category: Category }) => {
  return (
    <Card
      sx={{
        padding: '15px',
        boxShadow: `0 0 0 2px #EFEFEF`,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        gap: '15px',
        justifyContent: 'start'
      }}
    >
      <Typography variant='h5' sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <Button sx={{ padding: '5px 5px', fontSize: '25px', marginRight: '10px' }} color='primary' variant='tonal'>
            {category.name.split(' ', 1)}
          </Button>
          {category.name.slice(2)}
        </div>
        <Link href={`influenceurs/${category.slug}`}>
          <Icon icon='tabler:arrow-left-from-arc' fontSize={20} />
        </Link>
      </Typography>
    </Card>
  )
}

export default CardNiche
