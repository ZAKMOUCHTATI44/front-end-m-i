import { Card, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import StatusCard from 'src/components/influencers/StatusCard'
import SocialMediaChart from 'src/components/influencers/SocialMediaChart'

ChartJS.register(ArcElement, Tooltip, Legend)

const InfluenceScore = ({ data }: { data: Data }) => {
  return (
    <Grid item xs={12} lg={7} spacing={6}>
      <Card sx={{ padding: '20px' }}>
        <Typography variant='h6'>Influence Score</Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            alignItems: 'center',
            gap: theme => theme.spacing(6),
            marginTop: '20px'
          }}
        >
          {data.creator.networkScores.map(network => (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: theme => theme.spacing(1) }} key={network.network}>
              <img width={25} height={25} src={`/images/social-media/${network.network}.png`} alt={network.network} />
              <span
                key={network.network}
                className={`growth ${network.comment === 'low' ? 'lower' : 'high'}`}
                style={{ display: 'flex', alignContent: 'center' }}
              >
                {network.comment === 'low' ? '-' : '+'} {network.score} / 100
              </span>
            </Box>
          ))}
        </Box>
      </Card>
      <Card sx={{ padding: '20px', mt: theme => theme.spacing(6) }}>
        <StatusCard data={data} />
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
            {data.creator.industries[Object.keys(data.creator.industries)[0]].name}
          </Typography>
        </Grid>
        <Grid xs={12} lg={6} sx={{ display: 'flex', justifyContent: 'center' }}>
          <SocialMediaChart data={data} />
        </Grid>
      </Card>
    </Grid>
  )
}

export default InfluenceScore
