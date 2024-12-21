import { Card, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Loading from 'src/components/Loading'
import api from 'src/lib/api'
import UseQueryHooks from 'src/lib/react-query'
import Error500 from 'src/pages/500'
import CustomAvatar from 'src/@core/components/mui/avatar'
import Link from 'next/link'
import SocialMediaChart from 'src/components/influencers/SocialMediaChart'
import AudienceChart from './AudienceChart'

type Account = {
  id: string
  name: string
  network: string
  handle: string
  bio: string | null
  verified: boolean | null
  subscribers: number | null
  score: number
}

type Data = {
  id: string
  name: string
  title: string
  description: string | null
  categories: {
    name: string
  }[]
  accounts: Account[]
}

const CreatorDetail = ({ id }: { id: string }) => {
  const { error, isLoading, data } = UseQueryHooks<Data>(
    [`/creators/${id}`],
    async () => {
      const response = await api.get<Data>(`/creators/${id}`)

      return response.data
    },
    { enabled: !!id }
  )
  if (error) return <Error500 />

  if (isLoading)
    return (
      <div style={{ height: '100vh', display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
        <Loading />
      </div>
    )

  return (
    <div>
      {data && (
        <Grid container item spacing={6} sx={{ padding: '10px 20px' }}>
          <Grid item xs={4} lg={4}>
            <Card
              sx={{
                padding: '10px',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <div>
                <Box
                  sx={{
                    display: 'inline-block',
                    borderRadius: '50%',
                    background: 'linear-gradient(45deg, #e269e7, #48abef)',
                    padding: '3px',
                    mb: 2
                  }}
                >
                  <CustomAvatar
                    src={`https://api.inflauditor.ma/media/account?id=${data.accounts[0].id}`}
                    variant='rounded'
                    alt={data.name}
                    sx={{ width: 100, height: 100, backgroundColor: '#fff', borderRadius: '50%' }}
                  />
                </Box>
                <Typography sx={{ textAlign: 'center' }}>{data.name}</Typography>
                <Box sx={{ display: 'flex', gap: '10px', marginTop: '10px', justifyContent: 'center' }}>
                  {data.accounts.map(item => (
                    <Link href={item.handle} target='_blank' key={item.network}>
                      <img
                        src={`/images/social-media/new/${item.network}.png`}
                        alt={item.network}
                        width={20}
                        height={20}
                      />
                    </Link>
                  ))}
                </Box>
              </div>
              <Box
                sx={{
                  marginTop: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}
              >
                <Typography variant='body2' mb={4}>
                  {data.description}
                </Typography>
              </Box>
            </Card>
          </Grid>
          <Grid
            item
            xs={8}
            lg={8}
            sx={{
              height: '100%',
              alignItems: 'stretch',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '15px'
            }}
          >
            <Card
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'start',
                padding: '25px 10px'
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
                <Typography variant='subtitle2' style={{ display: 'block', fontWeight: 'bold' }}>
                  {data.categories[0].name}
                </Typography>
              </Grid>
              <Grid xs={12} lg={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                <SocialMediaChart data={data.accounts} />
              </Grid>
            </Card>
            <AudienceChart id={id} />
          </Grid>
        </Grid>
      )}
    </div>
  )
}

export default CreatorDetail
