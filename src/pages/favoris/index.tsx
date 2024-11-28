import React, { useState } from 'react'
import api from 'src/lib/api'
import UseQueryHooks from 'src/lib/react-query'
import Error500 from '../500'
import CardFavoris from './CardFavoris'
import { InputAdornment, TextFieldProps, Typography } from '@mui/material'
import CustomTextField from 'src/@core/components/mui/text-field'
import { styled } from '@mui/material/styles'
import Icon from 'src/@core/components/icon'
import CreateNewList from '../influenceurs/show/CreateNewList'

const CustomTextFieldStyled = styled(CustomTextField)<TextFieldProps>(({ theme }) => ({
  '& .MuiInputBase-root.MuiFilledInput-root': {
    width: '100%',
    backgroundColor: `${theme.palette.background.paper} !important`
  },
  [theme.breakpoints.up('sm')]: {
    width: '55%'
  }
}))

const Page = () => {
  const [query, setQuery] = useState<string>('')

  const queryBuilder = () => {
    return `/favorite-lists?name=${query}`
  }
  const { error, data } = UseQueryHooks<ListType[]>([queryBuilder()], async () => {
    const response = await api.get<ListType[]>(queryBuilder())

    return response.data
  })
  if (error) return <Error500 />

  return (
    <div>
      <div style={{ padding: '40px 10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant='h5'>
          Favorites
          <Typography variant='h6'>Total lists : {data?.length}</Typography>
        </Typography>
        <CustomTextFieldStyled
          size='small'
          placeholder='Search'
          value={query}
          onChange={e => setQuery(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <Icon fontSize='1.25rem' icon='tabler:search' />
              </InputAdornment>
            )
          }}
        />

        <CreateNewList />
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '16px',
          marginTop: '30px'
        }}
      >
        {data &&
          data.length > 0 &&
          data.map(favorite => <CardFavoris key={favorite.id} favorite={favorite} queryKey={queryBuilder()} />)}
      </div>
    </div>
  )
}

export default Page
