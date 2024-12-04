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

const SocialCoverage = () => {
  const router = useRouter()
  const { settings } = useSettings()

  const { id } = router.query

  const { error, isLoading, data } = UseQueryHooks<DataSocialCoverage>(
    [`/influencers-social-coverage/${id}`],
    async () => {
      const response = await api.get<DataSocialCoverage>(`/influencers/social-coverage/${id}`)

      return response.data
    },
    { enabled: !!id }
  )
  if (error) return <Error500 />

  if (isLoading) return <Loading />

  const columns: TableColumn<Network>[] = [
    {
      name: 'Social Media',
      sortable: true,
      id: 'network',
      selector: row => row.network,
      width: '300px',
      cell: row => (
        <Box sx={{ display: 'flex', alignItems: 'center', padding: '15px', gap: theme => theme.spacing(2) }}>
          <span>
            <img src={`/images/social-media/${row.network}.png`} alt={row.fullName} width={25} height={25} />
          </span>
          <span>
            <img src={row.pictureUrl} style={{ borderRadius: '50%' }} alt={row.fullName} width={35} height={35} />
          </span>
          <div>
            <Typography variant='h6'>{row.fullName}</Typography>
            <Typography variant='caption'>@{row.username}</Typography>
          </div>
          {row.isVerified ? (
            <span>
              <img src={`/images/social-media/verified.png`} alt={row.fullName} width={15} height={15} />
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
      selector: row => row.influenceScore.score,
      width: '140px',
      cell(row) {
        return (
          <>
            {row.influenceScore && (
              <span
                style={{ display: 'flex', gap: '5px', alignItems: 'center' }}
                className={`growth ${row.influenceScore?.comment === 'low' ? 'lower' : 'high'}`}
              >
                <span className={`circle ${row.influenceScore?.comment}`}></span>
                {row.influenceScore.score} / 100
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
      selector: row => row.follower_Count,
      cell(row) {
        return <p>{formatNumber(Number(row.follower_Count))}</p>
      }
    },

    // {
    //   name: 'Last Activity',
    //   width: '150px',
    //   sortable: true,
    //   id: 'niche',
    //   cell(row) {
    //     return <p>{row.metrics.last_activity_str.value} </p>
    //   }
    // },
    {
      name: 'Activity',
      width: '150px',
      sortable: true,
      id: 'growth',
      cell(row) {
        return (
          <p>
            {row.metrics.activity.value} {row.metrics.activity.title}
          </p>
        )
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
            <span className={`circle ${row.metrics.avg_engagement.score}`}></span> {row.metrics.engagement.value}
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
              <span className={`circle ${row.metrics.growth.score}`}></span> {row.metrics.growth.value}
            </p>
            <Typography variant='caption'>{row.metrics.raw_growth.value}</Typography>
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
            <span className={`circle ${row.metrics.avg_engagement.score}`}></span> {row.metrics.avg_engagement.value}
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
            <span className={`circle ${row.metrics.avg_views.score}`}></span> {row.metrics.avg_views.value}
          </p>
        )
      }
    }
  ]

  return (
    <>
      {data && data.socialCoverage && (
        <DataTable className={`${settings.mode}-datatable`} columns={columns} data={data.socialCoverage.networks} />
      )}
      <Grid container spacing={6} mt={6}>
        {data?.socialCoverage.audienceEvolutions.map(item => (
          <AudienceGrowthChart key={item.network} network={item.network} data={item.data} />
        ))}
      </Grid>
    </>
  )
}

export default SocialCoverage
