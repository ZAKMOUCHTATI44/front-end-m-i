// ** React Imports
import { ChangeEvent, useState } from 'react'

// ** MUI Imports
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import MuiCard, { CardProps } from '@mui/material/Card'
import { TextFieldProps } from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import { Box } from '@mui/material'

// Styled Card component
const Card = styled(MuiCard)<CardProps>(() => ({
  border: 0,
  boxShadow: 'none',
  backgroundSize: 'cover',
  backgroundColor: 'transparent',
  backgroundImage: 'url(/images/pages/header-bg.png)'
}))

// Styled CustomTextField component
const CustomTextFieldStyled = styled(CustomTextField)<TextFieldProps>(({ theme }) => ({
  '& .MuiInputBase-root.MuiFilledInput-root': {
    width: '100%',
    backgroundColor: `${theme.palette.background.paper} !important`
  },
  [theme.breakpoints.up('sm')]: {
    width: '55%'
  }
}))

const FormSearch = () => {
  // ** Props
  const [searchTerm, setSearchTerm] = useState<string>('')

  const handleFaqFilter = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  return (
    <Card>
      <CardContent sx={{ pt: 24, textAlign: 'center', pb: theme => `${theme.spacing(24)} !important` }}>
        <Typography sx={{ fontWeight: 500, fontSize: '1.225rem', lineHeight: 1.385 }}>
          Courses to get you started
        </Typography>
        <Typography variant='subtitle1'>Explore courses from experienced, real-world experts.</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
          <CustomTextFieldStyled
            size='medium'
            value={searchTerm}
            placeholder='Entrez un mot-clé pour commencer...'
            onChange={e => handleFaqFilter(e)}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <Icon fontSize='1.25rem' icon='tabler:search' />
                </InputAdornment>
              )
            }}
          />
        </Box>
      </CardContent>
    </Card>
  )
}

export default FormSearch
