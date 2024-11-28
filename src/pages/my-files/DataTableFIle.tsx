import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import DataTable, { TableColumn } from 'react-data-table-component'
import { formatNumber } from 'src/lib/numbers'
import Icon from 'src/@core/components/icon'
import Link from 'next/link'
import DeleteReport from './DeleteReport'

const DataTableFIle = ({ data }: { data: Influencer[] }) => {
  const columns: TableColumn<Influencer>[] = [
    {
      name: 'Creator',
      sortable: true,
      id: 'fullName',
      selector: row => row.fullName,
      width: '450px',
      cell: row => (
        <Box>
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
        </Box>
      )
    },
    {
      name: 'Niche',
      sortable: true,
      id: 'niche',
      maxWidth: '350px',
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
      name: 'Action',
      sortable: false,
      cell(row) {
        return (
          <Box
            sx={{
              display: 'flex',
              gap: theme => theme.spacing(2)
            }}
          >
            <Button variant='contained' size='small' color='success'>
              <Icon icon='tabler:download' fontSize={20} />
            </Button>
            <Link href={`/my-files/${row._id}`} target='_blank'>
              <Button variant='outlined' size='small' color='success'>
                <Icon icon='tabler:eye' fontSize={20} />
              </Button>
            </Link>
            <DeleteReport id={row.id} />
          </Box>
        )
      }
    }
  ]

  return (
    <div style={{ margin: '40px 5px' }}>
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

export default DataTableFIle
