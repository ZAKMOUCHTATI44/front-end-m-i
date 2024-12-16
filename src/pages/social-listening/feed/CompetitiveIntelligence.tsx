import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

import DataTable, { TableColumn } from 'react-data-table-component'
import { useSettings } from 'src/@core/hooks/useSettings'
import { formatNumber } from 'src/lib/numbers'
import FansPerPage from './FansPerPage'
import EngagementPerPage from './EngagementPerPage'

interface BankData {
  name: string
  picture: string
  fansTotal: number
  fansNew: number
  postsAdmin: number
  interactionsTotal: number
  engagementPage: string
  engagementPosts: string
  fansGrwoth: number
  score: number
  avg_views: number
}

const data: BankData[] = [
  {
    name: 'Nuxe',
    picture: 'https://favikon-medias.s3.eu-west-3.amazonaws.com/in/378313297.jpg',
    fansTotal: 492200,
    fansNew: 6100,
    fansGrwoth: -468,
    postsAdmin: 35,
    interactionsTotal: 147191,
    score: 86,
    avg_views: 62300,
    engagementPage: '0.5%',
    engagementPosts: '0.263%'
  },
  {
    name: 'Clarins',
    picture: 'https://favikon-medias.s3.eu-west-3.amazonaws.com/in/4842594961.jpg',
    fansTotal: 847192,
    fansNew: 4006,
    fansGrwoth: -528,
    score: 75,
    postsAdmin: 19,
    avg_views: 34291,
    interactionsTotal: 1213,
    engagementPage: '0.155%',
    engagementPosts: '0.422%'
  },
  {
    name: 'Clinique',
    picture: 'https://favikon-medias.s3.eu-west-3.amazonaws.com/in/409035188.jpg',
    fansTotal: 3892293,
    fansNew: 13006,
    fansGrwoth: -268,
    score: 92,
    postsAdmin: 13,
    avg_views: 34291,
    interactionsTotal: 154885,
    engagementPage: '0.355%',
    engagementPosts: '0.522%'
  }
]

const CompetitiveIntelligence = () => {
  const columns: TableColumn<BankData>[] = [
    {
      name: 'Social Media',
      selector: row => row.name,
      width: '250px',
      sortable: true,
      cell(row) {
        return (
          <Box sx={{ display: 'flex', alignItems: 'center', padding: '15px', gap: theme => theme.spacing(2) }}>
            <span>
              <img src={row.picture} alt={row.name} width={55} height={55} style={{ borderRadius: '50%' }} />
            </span>
            <div>
              <Typography variant='h6'>{row.name}</Typography>
              <Typography variant='caption'>@{row.name}</Typography>
            </div>
          </Box>
        )
      }
    },
    {
      name: 'Influence Score',
      sortable: true,
      id: 'influenceScore.score',
      selector: row => row.score,
      width: '140px',
      cell(row) {
        return (
          <>
            {row.score && (
              <span style={{ display: 'flex', gap: '5px', alignItems: 'center' }} className={`growth  high `}>
                <span className={`circle high`}></span>
                {row.score} / 100
              </span>
            )}
          </>
        )
      }
    },
    {
      name: 'Followers',
      width: '100px',
      sortable: true,
      id: 'follower_Count',
      selector: row => row.fansTotal,
      cell(row) {
        return <p>{formatNumber(Number(row.fansTotal))}</p>
      }
    },
    {
      name: 'Growth (last 30 days)',
      sortable: true,
      id: 'growth',
      width: '180px',
      cell(row) {
        return (
          <div>
            <p style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '0px' }}>
              <span className={`circle very_low`}></span> {formatNumber(row.fansNew)}
            </p>
            <Typography variant='caption'>{row.fansGrwoth}</Typography>
          </div>
        )
      }
    },
    {
      name: 'Posts (Admin)',
      width: '150px',
      selector: row => row.postsAdmin,
      sortable: true,
      cell(row) {
        return <p>{formatNumber(Number(row.postsAdmin))}</p>
      }
    },
    {
      name: 'Interactions (Total)',
      selector: row => row.interactionsTotal.toLocaleString(),
      sortable: true,
      width: '200px',
      cell(row) {
        return <p>{formatNumber(Number(row.interactionsTotal))}</p>
      }
    },
    {
      name: 'Engagement (Page)',
      width: '150px',
      selector: row => row.engagementPage
    },
    {
      name: 'Engagement (Posts)',
      width: '150px',
      selector: row => row.engagementPosts
    },
    {
      name: 'Avg. Views',
      sortable: true,
      id: 'growth',
      cell(row) {
        return (
          <p style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '0px' }}>
            {formatNumber(row.avg_views)}
          </p>
        )
      }
    }
  ]

  //   const data = [
  //     {
  //       name: 'Marjane',
  //       picture: 'https://favikon-medias.s3.eu-west-3.amazonaws.com/in/9842718687.jpg'
  //     },
  //     {
  //       name: 'BIM',
  //       picture: 'https://favikon-medias.s3.eu-west-3.amazonaws.com/in/6428046303.jpg'
  //     }
  //   ]
  const { settings } = useSettings()

  return (
    <div className='p-4'>
      <div className={`${settings.mode}-datatable`}>
        <DataTable
          columns={columns}
          data={data || []}
          paginationTotalRows={data.length}
          paginationRowsPerPageOptions={[10, 15, 20, 25, 30, 50, 100, 200]}
          pagination
        />
      </div>
      <Grid container spacing={5}>
        <Grid item lg={6}>
          <FansPerPage title={'Nombre de fans par page'} />
        </Grid>
        <Grid item lg={6}>
          <EngagementPerPage title={'Nombre d`interaction par page'} />
        </Grid>
      </Grid>
    </div>
  )
}

export default CompetitiveIntelligence
