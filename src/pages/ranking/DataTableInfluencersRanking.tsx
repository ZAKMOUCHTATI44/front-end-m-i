import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import Link from 'next/link'
import React from 'react'
import DataTable, { TableColumn } from 'react-data-table-component'
import { useSettings } from 'src/@core/hooks/useSettings'
import { formatNumber } from 'src/lib/numbers'

const DataTableInfluencersRanking = ({ data }: { data: Influencer[] }) => {
  const { settings } = useSettings()

  const columns: TableColumn<Influencer>[] = [
    {
      name: 'Ranking',
      sortable: true,
      id: 'rank',
      maxWidth: '15px',
      selector: row => row.rank,
      cell(row) {
        return (
          <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
            {[1, 2, 3].includes(row.rank) ? (
              <img width={25} height={25} src={`/images/icons/${row.rank}.png`} alt={row.fullName} />
            ) : (
              <Typography variant='h6'># {row.rank}</Typography>
            )}
          </Box>
        )
      }
    },
    {
      name: 'Creator',
      sortable: true,
      id: 'fullName',
      selector: row => row.fullName,
      width: '450px',
      cell: row => (
        <Link href={`/influenceurs/show/${row._id}`} style={{ textDecoration: 'none' }} target='_blank'>
          <Box sx={{ display: 'flex', alignItems: 'center', padding: '15px', gap: theme => theme.spacing(2) }}>
            <span>
              <img src={row.pictureUrl} style={{ borderRadius: '50%' }} alt={row.fullName} width={55} height={55} />
            </span>
            <div>
              <Typography variant='h6'>{row.fullName}</Typography>
              <Typography variant='subtitle2'>{row.title}</Typography>
              <Typography variant='caption'>{row.biography.substring(0, 100)} ...</Typography>
            </div>
          </Box>
        </Link>
      )
    },
    {
      name: 'Niche',
      sortable: true,
      id: 'niche',
      maxWidth: '250px',
      selector: row => row.title
    },
    {
      name: 'Country',
      sortable: true,
      id: 'country',
      maxWidth: '150px',
      cell(row) {
        return (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <img src='/ma.png' alt='' height={25} />
            <Typography variant='caption'>{row.country.name}</Typography>
          </Box>
        )
      },
      selector: row => row.title
    },
    {
      name: 'Followers',
      sortable: true,
      id: 'followers',
      minWidth: '150px',
      cell(row) {
        return (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: theme => theme.spacing(2)
            }}
          >
            {Object.entries(row.networksStats)
              .slice(0, 4)
              .map(([key, value]) => (
                <Box sx={{ display: 'flex', alignContent: 'center', gap: theme => theme.spacing(2) }} key={key}>
                  <img width={15} height={15} src={`/images/social-media/${value.network}.png`} alt={value.network} />
                  {formatNumber(Number(value.followers))}
                </Box>
              ))}
          </Box>
        )
      }
    },
    {
      name: 'Growth',
      sortable: true,
      id: 'growth',
      cell(row) {
        return <span className={`growth ${row.growth.type === 'greater' ? 'high' : 'lower'}`}>{row.growth.value}</span>
      }
    }
  ]

  return (
    <div className={`${settings.mode}-datatable`}>
      <DataTable
        columns={columns}
        data={data || []}
        paginationTotalRows={data.length}
        paginationRowsPerPageOptions={[10, 15, 20, 25, 30, 50, 100, 200]}
        pagination
      />
    </div>
  )
}

export default DataTableInfluencersRanking
