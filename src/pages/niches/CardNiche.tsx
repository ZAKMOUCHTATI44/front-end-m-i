import { Button, Card, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import Icon from 'src/@core/components/icon'

interface Category {
  id: string
  value: string
  label: string
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
            {category.label.split(' ', 1)}
          </Button>
          {category.label.slice(2)}
        </div>
        <Link href={`influenceurs/${category.value}`}>
          <Icon icon='tabler:arrow-left-from-arc' fontSize={20} />
        </Link>
      </Typography>
    </Card>
  )
}

export default CardNiche
