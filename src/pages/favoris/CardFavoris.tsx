import React from 'react'
import { Box, Button, Card, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import Icon from 'src/@core/components/icon'
import SettingsFavoris from './SettingsFavoris'

const containerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '12px',
  padding: '20px 10px',
  cursor: 'pointer',
  color: '#C0B6E0',
  fontFamily: 'Arial, sans-serif',
  fontSize: '18px',
  fontWeight: '500'
}

const CardFavoris = ({ favorite, queryKey }: { favorite: ListType; queryKey: string }) => {
  const router = useRouter()

  return (
    <Card style={containerStyle}>
      <Box
        sx={{
          // borderBottom: '1px solid #D3D3D3',
          padding: '10px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Typography
          onClick={() => {
            router.push(`favoris/${favorite.id}`)
          }}
          style={{
            fontWeight: 'bold'
          }}
        >
          {favorite.name}
        </Typography>
        <Button
          size='small'
          sx={{
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            gap: '5px'
          }}
        >
          {Array.from(favorite.influencers)
            .slice(0, 4)
            .map((influencer, index) => (
              <div key={index}>
                <img
                  src={influencer.pictureUrl}
                  alt={''}
                  width={35}
                  height={35}
                  style={{
                    borderRadius: '50%',
                    marginLeft: `-${5 * index}px`
                  }}
                />
              </div>
            ))}
        </Button>
      </Box>
      <div
        onClick={() => {
          router.push(`favoris/${favorite.id}`)
        }}
        style={{
          height: '-webkit-fill-available',
          padding: '10px'
        }}
      >
        <div
          onClick={() => {
            router.push(`favoris/${favorite.id}`)
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '5px'
          }}
        >
          <Icon icon='tabler:users' fontSize={15} />
          <Typography>{favorite.influencers_count} Influencers</Typography>
        </div>
      </div>

      <div
        style={{
          padding: '10px'

          // borderTop: '1px solid #D3D3D3'
        }}
      >
        {/* <Typography variant='caption'>Created at : {moment(favorite.created_at).fromNow()}</Typography> */}
        <Box sx={{ display: 'flex', gap: '5px' }}>
          <Button
            onClick={() => {
              router.push(`favoris/${favorite.id}`)
            }}
            variant='outlined'
            fullWidth
            size='small'
            sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}
          >
            <Icon icon='tabler:users' fontSize={20} />
            View creators
          </Button>

          <SettingsFavoris id={favorite.id} name={favorite.name} queryKey={queryKey} />
        </Box>
      </div>
    </Card>
  )
}

export default CardFavoris
