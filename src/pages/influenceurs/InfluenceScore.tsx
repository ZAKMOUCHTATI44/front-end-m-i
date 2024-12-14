import { Card, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

// import StatusCard from 'src/components/influencers/StatusCard'
import SocialMediaChart from 'src/components/influencers/SocialMediaChart'

ChartJS.register(ArcElement, Tooltip, Legend)

const InfluenceScore = ({ data }: { data: any }) => {
  return (
    <Grid item xs={12} lg={6} spacing={6}>
      <Card sx={{ padding: '20px' }}>
        <Typography variant='h6' style={{ fontWeight: 'bold' }}>
          Influence Score
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            alignItems: 'center',
            gap: theme => theme.spacing(6),
            marginTop: '20px'
          }}
        >
          {data.accounts.map((network: any) => (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center', // Centre les éléments horizontalement
                gap: theme => theme.spacing(2)
              }}
              key={network.network}
            >
              <img
                width={35}
                height={35}
                src={`/images/social-media/new/${network.network}.png`}
                alt={network.network}
                style={{ display: 'block', marginRight: '0px' }} // Enlève tout espacement supplémentaire
              />
              <span
                className={`growth ${network.comment === 'low' ? 'lower' : 'high'}`}
                style={{
                  display: 'flex',
                  alignItems: 'center', // Centre verticalement dans le `span`
                  fontWeight: 'bold',
                  whiteSpace: 'nowrap', // Évite les retours à la ligne
                  textAlign: 'center' // Centre le texte horizontalement
                }}
              >
                {network.comment === 'low' ? '-' : '+'} {Number(network.score).toFixed(2)} / 100
              </span>
            </Box>
          ))}
        </Box>
      </Card>
      {/* <Card sx={{ padding: '20px', mt: theme => theme.spacing(6) }}>
        <StatusCard data={data} />
      </Card> */}
      <Card
        sx={{
          padding: '10px',
          mt: theme => theme.spacing(6),
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'start'

          // border: '1px solid #e2e8f0'
        }}
      >
        <Grid
          xs={12}
          lg={6}
          sx={{
            my: 5,
            display: 'flex',
            flexDirection: 'column',
            padding: '10px 10px',
            gap: '10px',
            borderRight: '1px solid #e2e8f0'
          }}
        >
          <Typography variant='h6' style={{ display: 'block', fontWeight: 'bold' }}>
            Industries & Niches
          </Typography>
          <Typography variant='subtitle2' style={{ display: 'block', fontWeight: 'bold', fontSize: '1.1em' }}>
            {data.categories[0].name}
          </Typography>
        </Grid>
        <Grid xs={12} lg={6} sx={{ display: 'flex', justifyContent: 'center' }}>
          <SocialMediaChart data={data.accounts} />
        </Grid>
      </Card>
    </Grid>
  )
}

export default InfluenceScore
