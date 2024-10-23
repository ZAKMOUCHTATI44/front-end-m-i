import React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Icon from 'src/@core/components/icon'
import Link from 'next/link'
import { Button } from '@mui/material'

interface Score {
  score: string
  tier: number
  raw: number
}

interface Growth {
  value: string
  type: string
}

interface BestNetwork {
  name: string
  tier: string
  score: number
}

interface Badge {
  exceptionalGrowth: boolean
  linkedinTopVoice: boolean
  looseFollowers: boolean
  wroteABook: boolean
  hasANewsletter: boolean
  hasAPodcast: boolean
  hasTopics: boolean
  hasCause: boolean
  isInactive: boolean
}

interface NetworkStats {
  network: string
  followers: string
  profileUrl: string
  score: string | null
  growth: Growth
}

interface Country {
  name: string
  code: string
}

interface Influencer {
  _id: string
  pictureUrl: string
  fullName: string
  title: string
  nicheName: string
  profileUrl: string
  score: Score
  growth: Growth
  rank: number
  biography: string
  bestNetwork: BestNetwork
  country: Country
  badges: Badge
  networksStats: NetworkStats[]
}

const CardInfluencer = ({ influencer }: { influencer: Influencer }) => {
  return (
    <Card
      sx={{
        padding: '15px',
        boxShadow: `0 0 0 2px #EFEFEF`,
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        height: '100%',
        justifyContent: 'start'
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
        <Typography variant='h4'># {influencer.rank}</Typography>
        <Link href={`influenceurs/show/${influencer._id}`}>
          <Icon icon='tabler:arrow-left-from-arc' fontSize={20} />
        </Link>
      </Box>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
          <Avatar alt='Mary Vaughn' src={influencer.pictureUrl} sx={{ width: 55, height: 55, mr: 2.75 }} />
          <div>
            <Typography sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              {influencer.fullName}
              <img src='/images/social-media/verified.png' width={18} height={18} alt='Verified' />
            </Typography>
            <Typography>{influencer.nicheName}</Typography>
            <Typography variant='caption'>{influencer.title}</Typography>
          </div>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', gap: '15px' }}>
        <Button color={influencer.growth.type === 'lower' ? 'error' : 'success'} variant='tonal'>
          {influencer.growth.value}
        </Button>
        <Button color={'secondary'} variant='tonal' sx={{ gap: '15px' }}>
          <img
            src={`/images/social-media/${influencer.networksStats[0].network}.png`}
            alt={influencer.networksStats[0].network}
            width={20}
            height={20}
          />
          {influencer.networksStats[0].score} / 100
        </Button>
      </Box>
      <Typography>{influencer.biography.substring(0, 150)} ...</Typography>

      <Box sx={{ display: 'flex', gap: '10px' }}>
        {influencer.networksStats.map(item => (
          <Link href={item.profileUrl} target='_blank' key={item.network}>
            <img src={`/images/social-media/${item.network}.png`} alt={item.network} width={20} height={20} />
          </Link>
        ))}
      </Box>
    </Card>
  )
}

export default CardInfluencer
