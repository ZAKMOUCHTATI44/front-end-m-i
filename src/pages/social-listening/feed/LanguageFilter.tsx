// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import MenuItem from '@mui/material/MenuItem'
import Checkbox from '@mui/material/Checkbox'
import ListItemText from '@mui/material/ListItemText'
import { SelectChangeEvent } from '@mui/material/Select'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'
import { Card, Typography } from '@mui/material'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      width: 250,
      maxHeight: ITEM_HEIGHT * 7.5 + ITEM_PADDING_TOP
    }
  }
}

const languages = [
  'English',
  'French',
  'Spanish',
  'German',
  'Chinese',
  'Japanese',
  'Korean',
  'Russian',
  'Arabic',
  'Portuguese',
  'Italian',
  'Hindi',
  'Bengali',
  'Turkish',
  'Vietnamese',
  'Thai',
  'Dutch',
  'Swedish',
  'Norwegian',
  'Finnish',
  'Polish',
  'Czech',
  'Greek',
  'Hebrew',
  'Indonesian',
  'Malay',
  'Urdu',
  'Persian',
  'Hungarian',
  'Danish',
  'Ukrainian',
  'Romanian',
  'Slovak',
  'Bulgarian',
  'Croatian',
  'Serbian',
  'Afrikaans',
  'Swahili',
  'Tagalog',
  'Filipino'
]
const LanguageFilter = () => {
  const [personName, setPersonName] = useState<string[]>([])

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    setPersonName(event.target.value as string[])
  }

  return (
    <Card sx={{ padding: 3 }}>
      <Typography m={3}>Language</Typography>
      <CustomTextField
        select
        fullWidth
        id='select-multiple-checkbox'
        SelectProps={{
          MenuProps,
          multiple: true,
          value: personName,
          onChange: e => handleChange(e),
          renderValue: selected => (selected as unknown as string[]).join(', ')
        }}
      >
        {languages.map(language => (
          <MenuItem key={language} value={language}>
            <Checkbox checked={personName.indexOf(language) > -1} />
            <ListItemText primary={language} />
          </MenuItem>
        ))}
      </CustomTextField>
    </Card>
  )
}

export default LanguageFilter
