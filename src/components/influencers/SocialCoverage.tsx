import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import DataTable, { TableColumn } from 'react-data-table-component'
import AudienceGrowthChart from './AudienceGrowthChart'
import { useRouter } from 'next/router'
import api from 'src/lib/api'
import Error500 from 'src/pages/500'
import Loading from '../Loading'
import { formatNumber } from 'src/lib/numbers'
import UseQueryHooks from 'src/lib/react-query'
import { useSettings } from 'src/@core/hooks/useSettings'

interface SocialCoverageType {
  id: string
  name: string
  network: string
  handle: string
  bio: string
  verified: boolean
  insights: {
    subscribers: number
    score: number
    activity: string
    engagement_average: string
    engagement_rate: number
    growth: number
    growth_rate: number
    views_average: number
  }
  audience: {
    history: {
      data: {
        date: string
        value: string
        displayedValue: string
        timestamp: number
      }[]
      title: string
      network: string
    }
  }
}

const SocialCoverage = () => {
  const router = useRouter()
  const { settings } = useSettings()

  const { id } = router.query

  const { error, isLoading, data } = UseQueryHooks<SocialCoverageType[]>(
    [`/creators/${id}/social-coverage`],
    async () => {
      const response = await api.get<SocialCoverageType[]>(`/creators/${id}/social-coverage`)

      return response.data
    },
    { enabled: !!id }
  )
  if (error) return <Error500 />

  if (isLoading) return <Loading />

  const columns: TableColumn<SocialCoverageType>[] = [
    {
      name: 'Social Media',
      sortable: true,
      id: 'network',
      selector: row => row.network,
      width: '300px',
      cell: row => (
        <Box sx={{ display: 'flex', alignItems: 'center', padding: '15px', gap: theme => theme.spacing(2) }}>
          <span>
            <img src={`/images/social-media/new/${row.network}.png`} alt={row.name} width={25} height={25} />
          </span>
          <span>
            <img
              src={`https://api.inflauditor.ma/media/account?id=${row.id}`}
              style={{ borderRadius: '50%' }}
              alt={row.name}
              width={35}
              height={35}
            />
          </span>
          <div>
            <Typography variant='h6'>{row.name}</Typography>
            <Typography variant='caption'>@{row.handle}</Typography>
          </div>
          {row.verified ? (
            <span>
              <img src={`/images/social-media/verified.png`} alt={row.name} width={15} height={15} />
            </span>
          ) : (
            <></>
          )}
        </Box>
      )
    },
    {
      name: 'Influence Score',
      sortable: true,
      id: 'influenceScore.score',
      selector: row => row.insights.score,
      width: '140px',
      cell(row) {
        return (
          <>
            {/* className={`growth ${row.influenceScore?.comment === 'low' ? 'lower' : 'high'}`} */}
            {row.insights.score && (
              <span style={{ display: 'flex', gap: '5px', alignItems: 'center' }} className={`growth high`}>
                <span className={`circle high`}></span>
                {row.insights.score} / 100
              </span>
            )}
          </>
        )
      }
    },

    {
      name: 'Followers',
      width: '150px',
      sortable: true,
      id: 'follower_Count',
      selector: row => row.insights.subscribers,
      cell(row) {
        return <p>{formatNumber(Number(row.insights.subscribers))}</p>
      }
    },

    {
      name: 'Activity',
      width: '150px',
      sortable: true,
      id: 'growth',
      cell(row) {
        return <p>{row.insights.activity}</p>
      }
    },

    {
      name: 'Engage. Rate',
      sortable: true,
      id: 'growth',
      width: '120px',
      cell(row) {
        return (
          <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span className={`circle high`}></span> {row.insights.engagement_rate * 100} %
          </p>
        )
      }
    },
    {
      name: 'Growth (last 30 days)',
      sortable: true,
      id: 'growth',
      width: '200px',
      cell(row) {
        return (
          <div>
            <p style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '0px' }}>
              <span className={`circle high`}></span> {row.insights.growth_rate} %
            </p>
            <Typography variant='caption'>{formatNumber(row.insights.growth)}</Typography>
          </div>
        )
      }
    },
    {
      name: 'Avg. Engage.',
      sortable: true,
      id: 'growth',
      width: '150px',
      cell(row) {
        return (
          <p style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '0px' }}>
            <span className={`circle high`}></span> {formatNumber(Number(row.insights.engagement_average))}
          </p>
        )
      }
    },
    {
      name: 'Avg. Views',
      sortable: true,
      id: 'growth',
      cell(row) {
        return (
          <p style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '0px' }}>
            <span className={`circle high`}></span> {formatNumber(row.insights.views_average)}
          </p>
        )
      }
    }
  ]

  return (
    <div>
      {data && (
        <>
          <DataTable className={`${settings.mode}-datatable`} columns={columns} data={data} />
          <Grid container spacing={6} mt={6}>
            {data.map(item => (
              <AudienceGrowthChart
                key={item.network}
                network={item.audience.history.network}
                data={item.audience.history.data}
              />
            ))}
          </Grid>
        </>
      )}
    </div>
  )
}

export default SocialCoverage
