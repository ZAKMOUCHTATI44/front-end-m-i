import React from 'react'
import CustomAutocomplete from 'src/@core/components/mui/autocomplete'
import Error500 from '../500'
import { useQuery } from 'react-query'
import api from 'src/lib/api'
import List from '@mui/material/List'
import CustomTextField from 'src/@core/components/mui/text-field'
import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import { useRouter } from 'next/router'

const AutoCompleteSearchInfluencers = () => {
  const router = useRouter()
  const { error, isLoading, data } = useQuery<Influencer[]>(['/influencers'], async () => {
    const response = await api.get<Influencer[]>('/influencers')

    return response.data
  })
  if (error) return <Error500 />
  if (isLoading) return <p>....</p>

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
        renderInput={params => <CustomTextField {...params} placeholder='Search for a creator or a brand' />}
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
