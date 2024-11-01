import React from 'react'
import DataTable, { TableColumn } from 'react-data-table-component'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import Link from 'next/link'
import { useQuery } from 'react-query'
import api from 'src/lib/api'
import Error500 from '../500'
import Loading from 'src/components/Loading'

interface Influencer {
  _id: string
  niche_count: number
  custom_tops: any[]
  oa_description_parsed: boolean
  country: Country
  language: Language
  picture_url: string
  full_name: string
  biography: string
  follower_count: number
  typologie: string | null
  title: string
  age: number | null
  gender: number | null
  is_a_brand: boolean
  networks: Networks
  score: Score
  growth: Growth
  badges: Badges
  custom_creators: string[]
  rank: Rank
}

interface Country {
  name: string
  code: string
}

interface Language {
  name: string
  code: string
}

interface Networks {
  linkedin?: NetworkDetails
  instagram?: NetworkDetails
  youtube?: NetworkDetails
  tiktok?: NetworkDetails
  twitter?: NetworkDetails
}

interface NetworkDetails {
  network: string
  follower_count: string
  profile_url: string
  score: string
  score_raw: number
  growth: GrowthDetail
}

interface GrowthDetail {
  value: string
  type: string
}

interface Score {
  score: string
  raw: number
  tier: number
}

interface Growth {
  percentage: string
  absolute: string
  type: string
}

interface Badges {
  exceptionalGrowth: boolean
  linkedinTopVoice: boolean
  looseFollowers: boolean
  wroteABook: boolean
  hasANewsletter: boolean
  hasAPodcast: boolean
  hasTopics: boolean | string
  hasCause: boolean
  isInactive: boolean
}

interface Rank {
  rank: number
  progression: number | string
}

interface Response {
  influencers: Influencer[]
}

const DataTableInfluencers = ({ slug }: { slug: string }) => {
  const columns: TableColumn<Influencer>[] = [
    {
      name: 'Ranking',
      sortable: true,
      id: 'rank',
      maxWidth: '15px',
      selector: row => row.rank.rank,
      cell(row) {
        return (
          <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
            {[1, 2, 3].includes(row.rank.rank) ? (
              <img width={25} height={25} src={`/images/icons/${row.rank.rank}.png`} alt={row.full_name} />
            ) : (
              <Typography variant='h6'># {row.rank.rank}</Typography>
            )}
          </Box>
        )
      }
    },
    {
      name: 'Creator',
      sortable: true,
      id: 'fullName',
      selector: row => row.full_name,
      width: '450px',
      cell: row => (
        <Link href={`/influenceurs/show/${row._id}`} style={{ textDecoration: 'none' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', padding: '15px', gap: theme => theme.spacing(2) }}>
            <span>
              <img src={row.picture_url} style={{ borderRadius: '50%' }} alt={row.full_name} width={55} height={55} />
            </span>
            <div>
              <Typography variant='h6'>{row.full_name}</Typography>
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
            {Object.entries(row.networks)
              .slice(0, 4)
              .map(([key, value]) => (
                <Box sx={{ display: 'flex', alignContent: 'center', gap: theme => theme.spacing(2) }} key={key}>
                  <img width={15} height={15} src={`/images/social-media/${value.network}.png`} alt={value.network} />
                  {value.follower_count}
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
        return (
          <span className={`growth ${row.growth.type === 'greater' ? 'high' : 'lower'}`}>{row.growth.percentage}</span>
        )
      }
    }
  ]

  const { error, isLoading, data } = useQuery<Response>([`/ranking/${slug}`], async () => {
    const response = await api.get<Response>(`/ranking/${slug}`)

    return response.data
  })
  if (error) return <Error500 />
  if (isLoading)
    return (
      <Box sx={{ height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Loading />
      </Box>
    )

  return (
    <DataTable
      columns={columns}
      data={data?.influencers || []}
      paginationTotalRows={data?.influencers.length}
      paginationRowsPerPageOptions={[10, 15, 20, 25, 30, 50, 100, 200]}
      pagination
    />
  )
}

export default DataTableInfluencers
