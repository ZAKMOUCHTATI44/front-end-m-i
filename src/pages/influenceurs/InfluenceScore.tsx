import { Card, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import StatusCard from 'src/components/influencers/StatusCard'
import SocialMediaChart from 'src/components/influencers/SocialMediaChart'

ChartJS.register(ArcElement, Tooltip, Legend)

const InfluenceScore = ({ networksStats, influencer }: { networksStats: NetworkStats[]; influencer: Influencer }) => {
  return (
    <Grid item xs={12} lg={7} spacing={6}>
      <Card sx={{ padding: '20px' }}>
        <Typography variant='h6'>Influence Score</Typography>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: theme => theme.spacing(6),
            marginTop: '20px'
          }}
        >
          {networksStats.map(network => (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: theme => theme.spacing(1) }} key={network.network}>
              <img width={25} height={25} src={`/images/social-media/${network.network}.png`} alt={network.network} />
              <span
                key={network.followers}
                className={`growth ${network.growth.type === 'lower' ? 'lower' : 'high'}`}
                style={{ display: 'flex', alignContent: 'center' }}
              >
                {network.growth.type === 'lower' ? '-' : '+'} {network.score} / 100
              </span>
            </Box>
          ))}
        </Box>
      </Card>
      <Card sx={{ padding: '20px', mt: theme => theme.spacing(6) }}>
        <StatusCard />
      </Card>
      <Card
        sx={{
          padding: '20px',
          mt: theme => theme.spacing(6),
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'start'
        }}
      >
        <Grid
          xs={12}
          lg={6}
          sx={{
            my: 5,
            border: '1px solid ',
            display: 'flex',
            flexDirection: 'column',
            padding: '20px 10px',
            borderRadius: '10px',
            gap: '10px'
          }}
        >
          <Typography variant='h6' style={{ display: 'block' }}>
            Industries & Niches
          </Typography>
          <Typography variant='subtitle2' style={{ display: 'block' }}>
            {influencer.nicheName}
          </Typography>
        </Grid>
        <Grid xs={12} lg={6} sx={{ display: 'flex', justifyContent: 'center' }}>
          <SocialMediaChart />
        </Grid>
      </Card>
    </Grid>
  )
}

export default InfluenceScore
