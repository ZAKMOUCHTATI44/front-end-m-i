import React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Icon from 'src/@core/components/icon'
import Link from 'next/link'
import { formatNumber } from 'src/lib/numbers'
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
        justifyContent: 'space-between',
        gap: '15px',
        height: '100%',
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
        <Link href={`influenceurs/show/${influencer.id}`} target='_blank' style={{ color: '#ff56e3' }}>
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
              background: 'linear-gradient(45deg, #4ec6fb, #ff56e3)',
              padding: '3px',
              marginRight: '10px'
            }}
          >
            <Avatar
              alt='InflAuditor'
              src={`https://api.inflauditor.ma/media/account?id=${influencer.accounts[0].id}`}
              sx={{
                width: 55,
                height: 55,
                backgroundColor: '#fff'
              }}
            />
          </Box>
          <div>
            <Typography sx={{ display: 'flex', alignItems: 'center', gap: '5px', fontWeight: 'bold' }}>
              {influencer.name}
              <img src='/images/social-media/verified.png' width={18} height={18} alt='Verified' />
            </Typography>
            <Typography>{influencer.nicheName}</Typography>
            <Typography variant='caption'>{influencer.title}</Typography>
          </div>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', gap: '15px' }}>
        <Button color={'success'} variant='tonal' sx={{ fontWeight: 'bold' }}>
          {influencer.insights.top.growth}
        </Button>
        <Button color={'secondary'} variant='tonal' sx={{ gap: '15px', fontWeight: 'bold' }}>
          <img
            src={`/images/social-media/new/${influencer.insights.top.network}.png`}
            alt={influencer.insights.top.network}
            width={20}
            height={20}
          />
          {Number(influencer.insights.top.score).toFixed(2)} / 100
        </Button>
      </Box>
      <Typography>{influencer.description.substring(0, 80)} ...</Typography>

      <Box sx={{ display: 'flex', gap: '25px' }}>
        {influencer.accounts.map(item => (
          <Box key={item.network} sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src={`/images/social-media/new/${item.network}.png`} alt={item.network} width={20} height={20} />
            <Typography variant='caption'>{formatNumber(item.subscribers)}</Typography>
          </Box>
        ))}
      </Box>
    </Card>
  )
}

export default CardInfluencer
