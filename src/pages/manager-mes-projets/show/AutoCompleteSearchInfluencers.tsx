import React, { useState } from 'react'
import CustomAutocomplete from 'src/@core/components/mui/autocomplete'
import { useQuery } from 'react-query'
import api from 'src/lib/api'
import List from '@mui/material/List'
import CustomTextField from 'src/@core/components/mui/text-field'
import { Avatar, CircularProgress, ListItem, ListItemAvatar, ListItemText } from '@mui/material'

interface FilterResponse {
  id: string
  name: string
}

interface Response {
  totalCount: number
  data: FilterResponse[]
  currentPage: number
  lastPage: number
}
const AutoCompleteSearchInfluencers = ({ handleChange }: { handleChange(value: string): void }) => {
  const [keyword, setKeyword] = useState<string>('')

  const { error, isLoading, data } = useQuery<Response>([`/search?q=${keyword}`], async () => {
    const response = await api.get<Response>(`/search?q=${keyword}&limit=10`)

    return response.data
  })
  if (error) return <p>...</p>

  return (
    <div>
      <CustomAutocomplete
        autoHighlight
        id='add-members'
        fullWidth
        options={data?.data || []}
        ListboxComponent={List}
        getOptionLabel={option => option.name || ''}
        onChange={(e, value) => {
          if (value) {
            handleChange(value.id)
          }
        }}
        renderInput={params => (
          <CustomTextField
            {...params}
            placeholder='Search for your influencer'
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
        renderOption={(props, option) => (
          <ListItem {...props}>
            <ListItemAvatar>
              <Avatar
                src={`https://api.inflauditor.ma/media/account?id=${option.id}`}
                alt={option.name}
                sx={{ height: 28, width: 28 }}
              />
            </ListItemAvatar>
            <ListItemText primary={option.name} />
          </ListItem>
        )}
      />
    </div>
  )
}

export default AutoCompleteSearchInfluencers
