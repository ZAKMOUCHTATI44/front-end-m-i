import { Button, Card, Grid, Pagination, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import FiltersInfluenceurs from 'src/components/FiltersInfluenceurs'
import CardInfluencer from './CardInfluencer'
import api from 'src/lib/api'
import Loading from 'src/components/Loading'
import Error500 from '../500'
import { useRouter } from 'next/router'
import UseQueryHooks from 'src/lib/react-query'
import Icon from 'src/@core/components/icon'
import ManageFavorites from './ManageFavorites'
import { useSettings } from 'src/@core/hooks/useSettings'

interface Response {
  cursor: {
    count: number
    total: number
    next: boolean
    page: number
  }
  data: Influencer[]
  currentPage: number
  lastPage: number
}
const Page = () => {
  const router = useRouter()
  const [selectedInfluencers, setSelectedInfluencers] = useState<Set<Influencer>>(new Set())
  const { settings } = useSettings()

  const routerParams = router.query

  const buildQueryString = (): string => {
    let queryString = `/creators/search?limit=12`
    function concatenateVariableNamesAndValues(obj: any) {
      // Loop through the object keys dynamically
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          if (obj[key] && obj[key] !== '0') {
            queryString += `&${key}=${obj[key]}`
          }
        }
      }
    }
    concatenateVariableNamesAndValues(routerParams)

    return queryString
  }

  const objectExists = (id: string): boolean => {
    for (const obj of selectedInfluencers) {
      if (obj.id === id) return true
    }

    return false
  }

  const selectedAll = () => {
    data?.data.map(influencer => {
      setSelectedInfluencers(prevSet => new Set(prevSet).add(influencer))
    })
  }
  const clearSet = () => {
    setSelectedInfluencers(new Set()) // Replace with a new empty Set
  }

  const { error, isLoading, data } = UseQueryHooks<Response>([buildQueryString()], async () => {
    const response = await api.get<Response>(buildQueryString())

    return response.data
  })
  if (error) return <Error500 />

  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={12} lg={12}>
          <Card sx={{ position: 'relative', padding: '30px 20px', overflow: 'visible' }}>
            <Box>
              <Typography
                variant='h4'
                className='title-gradient '
                sx={{ mb: 1.5, textAlign: 'center', fontWeight: 'bold' }}
              >
                Find the right creators according to your needs
              </Typography>

              <Box
                sx={{
                  py: 4,
                  px: 6,
                  rowGap: 2,
                  columnGap: 4,
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <FiltersInfluenceurs />
              </Box>
              {/* Image ajoutée à droite du Box */}
              {/* <Box
                component='img'
                src='/images/avatars/illustration-influ.png'
                alt="Description de l'image"
                sx={{
                  position: 'absolute',
                  bottom: '-90px',
                  right: '0px',
                  width: '288px',
                  height: 'auto',
                  transform: 'translateY(-50%)', // Décale pour dépasser légèrement en haut
                  display: { xs: 'none', sm: 'none', md: 'block' }
                }}
              /> */}
              {/* Fin de l'ajout de l'image */}
            </Box>
          </Card>
        </Grid>

        {isLoading && (
          <Grid
            item
            xs={12}
            lg={12}
            style={{ height: '50vh', display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center' }}
          >
            <Loading />
          </Grid>
        )}
        <Grid item xs={12} sm={12} md={12}>
          <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
            {data?.cursor.total} result
          </Typography>
        </Grid>

        {data &&
          data.data.length > 0 &&
          data.data.map(influencer => (
            <Grid item xs={12} sm={6} md={settings.navCollapsed ? 3 : 4} key={influencer._id}>
              <CardInfluencer
                influencer={influencer}
                selected={objectExists(influencer.id)}
                setSelectedInfluencer={influencer => {
                  setSelectedInfluencers(prevSet => {
                    const newSet = new Set(prevSet)
                    if (newSet.has(influencer)) {
                      newSet.delete(influencer)
                    } else {
                      newSet.add(influencer)
                    }

                    return newSet
                  })
                }}
              />
            </Grid>
          ))}

        {/* {data.map(influencer => (

        ))} */}
      </Grid>

      {/* Pagination */}
      {data && (
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: theme => theme.spacing(6) }}>
          <Pagination
            count={Math.round(data.cursor.total / data?.cursor.count)}
            page={Number(data.cursor.page) || 1}
            color='primary'
            onChange={(e, value) => {
              router.push({
                query: { ...router.query, page: value }
              })
            }}
          />
        </Box>
      )}
      <SelectedInfluencers selectedInfluencers={selectedInfluencers} selectedAll={selectedAll} clearSet={clearSet} />
    </>
  )
}
export default Page

const SelectedInfluencers = ({
  selectedInfluencers,
  selectedAll,
  clearSet
}: {
  selectedInfluencers: Set<Influencer>
  selectedAll: () => void
  clearSet: () => void
}) => {
  return (
    <>
      {selectedInfluencers.size > 0 && (
        <Card
          sx={{
            position: 'fixed',
            borderRadius: '15px',
            minWidth: '950px',
            padding: '10px 20px',
            width: 'fit-content',
            boxShadow: '0 4px 16px 0 rgba(0,0,0,.2)',
            bottom: '75px',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '15px'
            }}
          >
            <Button
              variant='outlined'
              size='small'
              sx={{
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '5px'
              }}
            >
              {Array.from(selectedInfluencers)
                .slice(0, 4)
                .map((influencer, index) => (
                  <div key={index}>
                    <img
                      src={influencer.pictureUrl}
                      alt={influencer.fullName}
                      width={35}
                      height={35}
                      style={{
                        borderRadius: '50%',
                        marginLeft: `-${5 * index}px`
                      }}
                    />
                  </div>
                ))}
              {selectedInfluencers.size} creator
            </Button>

            <Button
              variant='outlined'
              size='small'
              color='primary'
              onClick={selectedAll}
              sx={{
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '5px'
              }}
            >
              Select All 12 creator
              <Icon icon='tabler:checks' fontSize={20} />
            </Button>

            <Button
              variant='outlined'
              color='secondary'
              size='small'
              onClick={clearSet}
              sx={{
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '5px'
              }}
            >
              Clear All
              <Icon icon='tabler:checks' fontSize={20} />
            </Button>
          </Box>

          <ManageFavorites selectedInfluencers={selectedInfluencers} clearSet={clearSet} />
        </Card>
      )}
    </>
  )
}
