import React from 'react'
import DataTable, { TableColumn } from 'react-data-table-component'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import Link from 'next/link'
import { formatNumber } from 'src/lib/numbers'
import DeleteInfluencersFavoris from '../favoris/[id]/DeleteInfluencersFavoris'

const DataTableInfluencers = ({ data }: { data: Influencer[] }) => {
  const columns: TableColumn<Influencer>[] = [
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
      name: 'Croissance',
      sortable: true,
      id: 'growth',
      cell(row) {
        return <span className={`growth ${row.growth.type === 'greater' ? 'high' : 'lower'}`}>{row.growth.value}</span>
      }
    },
    {
      name: 'Action',
      sortable: true,
      id: 'growth',
      cell(row) {
        return <DeleteInfluencersFavoris id={row.id} />
      }
    }
  ]

  return (
    <DataTable
      columns={columns}
      data={data || []}
      paginationTotalRows={data.length}
      paginationRowsPerPageOptions={[10, 15, 20, 25, 30, 50, 100, 200]}
      pagination
    />
  )
}

export default DataTableInfluencers
