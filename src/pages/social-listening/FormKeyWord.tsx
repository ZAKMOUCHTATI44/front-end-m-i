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
import { Box, Button } from '@mui/material'

interface Props {
  handleChange: (value: string) => void
}

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

const FormKeyWord = (props: Props) => {
  // ** Props
  const { handleChange } = props
  const [searchTerm, setSearchTerm] = useState<string>('')

  const handleFaqFilter = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  return (
    <Card>
      <CardContent sx={{ pt: 24, textAlign: 'center', pb: theme => `${theme.spacing(24)} !important` }}>
        <Typography sx={{ mb: 4, fontWeight: 500, fontSize: '1.225rem', lineHeight: 1.385 }}>
          Keyword Analyzer for Social Monitoring
        </Typography>
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
          <Button
            variant='contained'
            color='primary'
            size='large'
            onClick={() => {
              handleChange(searchTerm)
            }}
          >
            Obtenir le rapport
          </Button>
        </Box>
      </CardContent>
    </Card>
  )
}

export default FormKeyWord
