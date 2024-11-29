import React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Icon from 'src/@core/components/icon'
import Link from 'next/link'
import { Button } from '@mui/material'

const CardInfluencer = ({
  influencer,
  setSelectedInfluencer,
  selected
}: {
  influencer: Influencer
  setSelectedInfluencer: (e: Influencer) => void
  selected: boolean
}) => {
  return (
    <Card
      sx={{
        border: selected ? '1px solid #ff56e3' : 'none', // Ombre sur le survol
        padding: '15px',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        height: '100%',
        justifyContent: 'start',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Animation pour l'effet d'ombre et de transformation
        color: '#ccceef',
        '&:hover': {
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)', // Ombre sur le survol
          transform: 'translateY(-5px)' // Légère élévation sur le survol
        }
      }}
    >
      <Box
        sx={{
          display: 'flex',
          paddingBottom: '15px',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Typography variant='h4' sx={{ color: '#ff56e3' }}>
          # {influencer.rank}
        </Typography>
        <Link href={`influenceurs/show/${influencer._id}`} target='_blank' style={{ color: '#ff56e3' }}>
          <Icon icon='tabler:arrow-left-from-arc' fontSize={20} />
        </Link>
      </Box>

      <Box
        onClick={() => {
          setSelectedInfluencer(influencer)
        }}
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: 'pointer'
        }}
      >
        <Box sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
          <Box
            sx={{
              display: 'inline-block',
              borderRadius: '50%',
              background: 'linear-gradient(45deg, #4ec6fb, #ff56e3)', // Dégradé de couleurs
              padding: '3px', // Espace pour le contour
              marginRight: '10px'
            }}
          >
            <Avatar
              alt='Maroc influence'
              src={influencer.pictureUrl}
              sx={{
                width: 55,
                height: 55,
                backgroundColor: '#fff' // Couleur d'arrière-plan de l'avatar pour séparer le contour
              }}
            />
          </Box>
          <div>
            <Typography sx={{ display: 'flex', alignItems: 'center', gap: '5px', fontWeight: 'bold' }}>
              {influencer.fullName}
              <img src='/images/social-media/verified.png' width={18} height={18} alt='Verified' />
            </Typography>
            <Typography>{influencer.nicheName}</Typography>
            <Typography variant='caption'>{influencer.title}</Typography>
          </div>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', gap: '15px' }}>
        <Button
          color={influencer.growth.type === 'lower' ? 'error' : 'success'}
          variant='tonal'
          sx={{ fontWeight: 'bold' }}
        >
          {influencer.growth.value}
        </Button>
        <Button color={'secondary'} variant='tonal' sx={{ gap: '15px', fontWeight: 'bold' }}>
          <img
            src={`/images/social-media/${influencer.networksStats[0]?.network}.png`}
            alt={influencer.networksStats[0]?.network}
            width={20}
            height={20}
          />
          {Number(influencer.networksStats[0]?.score).toFixed(2)} / 100
        </Button>
      </Box>
      <Typography>{influencer.biography.substring(0, 80)} ...</Typography>

      <Box sx={{ display: 'flex', gap: '10px' }}>
        {influencer.networksStats.map(item => (
          <Typography key={item.network}>
            <img src={`/images/social-media/${item.network}.png`} alt={item.network} width={20} height={20} />
          </Typography>
        ))}
      </Box>
    </Card>
  )
}

export default CardInfluencer
