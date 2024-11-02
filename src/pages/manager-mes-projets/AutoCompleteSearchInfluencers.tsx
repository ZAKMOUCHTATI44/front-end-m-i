import React, { useState } from 'react'
import CustomAutocomplete from 'src/@core/components/mui/autocomplete'
import { useQuery } from 'react-query'
import api from 'src/lib/api'
import List from '@mui/material/List'
import CustomTextField from 'src/@core/components/mui/text-field'
import { Avatar, CircularProgress, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import { useRouter } from 'next/router'
import { Icon } from '@iconify/react';
import { InputAdornment } from '@mui/material';

const AutoCompleteSearchInfluencers = () => {
  const router = useRouter()
  const [keyword, setKeyword] = useState<string>('')

  const { error, isLoading, data } = useQuery<Influencer[]>(
    [`/influencers-quick-search?username=${keyword}`],
    async () => {
      const response = await api.get<Influencer[]>(`/influencers-quick-search?username=${keyword}`)

      return response.data
    }
  )
  if (error) return <p>...</p>

  return (
    <div>
      <CustomAutocomplete
        autoHighlight
        id='add-members'
        fullWidth
        options={data || []}
        ListboxComponent={List}
        getOptionLabel={option => option.fullName || ''}
        onChange={(e, value) => {
          console.log(value)
          if (value?._id !== undefined) {
            router.push(`/influenceurs/show/${value?._id}`)
          } else {
            router.push(`/influenceurs`)
          }
        }}
<<<<<<< HEAD
        renderInput={params => (
          <CustomTextField
            {...params}
            placeholder='Search for a creator or a brand'
            value={keyword}
            onChange={e => setKeyword(e.target.value)}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {isLoading ? <CircularProgress disableShrink size={'small'} /> : null}
                  {params.InputProps.endAdornment}
                </>
              )
            }}
          />
        )}
=======
        renderInput={params => <CustomTextField {...params} placeholder='Search for a creator or a brand' fullWidth
                                                InputProps={{
                                                  ...params.InputProps,
                                                  // Utilisation d'Iconify pour afficher une icône de recherche sans dépendances supplémentaires
                                                  startAdornment: (
                                                    <InputAdornment position="start">
                                                      {/* Icône de recherche avec Iconify */}
                                                      <Icon icon="tabler:search" color="#655bd3" width="24" height="24" style={{ fontWeight: 'bold', strokeWidth: '2' }}  />
                                                    </InputAdornment>
                                                  ),
                                                }} />}
>>>>>>> zouhair
        renderOption={(props, option) => (
          <ListItem {...props}>
            <ListItemAvatar>
              <Avatar src={`${option.pictureUrl}`} alt={option.fullName} sx={{ height: 28, width: 28 }} />
            </ListItemAvatar>
            <ListItemText primary={option.fullName} />
          </ListItem>
        )}
      />
    </div>
  )
}

export default AutoCompleteSearchInfluencers
