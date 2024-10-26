import React from 'react'
import DataTable, { TableColumn } from 'react-data-table-component'
import influencers from '../../data/1.json'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'

const DataTableInfluencers = () => {
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
      )
    },
    {
      name: 'Niche',
      sortable: true,
      id: 'niche',
      maxWidth: '250px',
      selector: row => row.nicheName
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
            {row.networksStats.map(network => (
              <Box
                sx={{ display: 'flex', alignContent: 'center', gap: theme => theme.spacing(2) }}
                key={network.followers}
              >
                <img width={15} height={15} src={`/images/social-media/${network.network}.png`} alt={row.fullName} />
                {network.followers}
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
        return <span className={`growth ${row.growth.type === 'lower' ? 'lower' : 'high'}`}>{row.growth.value}</span>
      }
    }
  ]

  return (
    <DataTable
      columns={columns}
      data={influencers}
      paginationTotalRows={50}
      paginationRowsPerPageOptions={[10, 15, 20, 25, 30, 50, 100, 200]}
      pagination
    />
  )
}

export default DataTableInfluencers
