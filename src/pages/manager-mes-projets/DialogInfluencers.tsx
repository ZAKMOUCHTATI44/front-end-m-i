// ** React Imports
import { Ref, useState, forwardRef, ReactElement } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import Avatar from '@mui/material/Avatar'
import Dialog from '@mui/material/Dialog'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import ListItem from '@mui/material/ListItem'
import Typography from '@mui/material/Typography'
import Fade, { FadeProps } from '@mui/material/Fade'
import ListItemText from '@mui/material/ListItemText'
import DialogContent from '@mui/material/DialogContent'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import IconButton, { IconButtonProps } from '@mui/material/IconButton'

// ** Custom Component Imports
import CustomTextField from 'src/@core/components/mui/text-field'
import CustomAutocomplete from 'src/@core/components/mui/autocomplete'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

import influencers from '../../data/1.json'

// ** Configs Imports

// ** Hooks Imports

const Transition = forwardRef(function Transition(
  props: FadeProps & { children?: ReactElement<any, any> },
  ref: Ref<unknown>
) {
  return <Fade ref={ref} {...props} />
})

const CustomCloseButton = styled(IconButton)<IconButtonProps>(({ theme }) => ({
  top: 0,
  right: 0,
  color: 'grey.500',
  position: 'absolute',
  boxShadow: theme.shadows[2],
  transform: 'translate(10px, -10px)',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: `${theme.palette.background.paper} !important`,
  transition: 'transform 0.25s ease-in-out, box-shadow 0.25s ease-in-out',
  '&:hover': {
    transform: 'translate(7px, -5px)'
  }
}))

const DialogInfluencers = ({ handleChange }: { handleChange: (e: Influencer) => void }) => {
  // ** States
  const [show, setShow] = useState<boolean>(false)
  const [currentInfluencer, setCurrentInfluencer] = useState<Influencer | null>()

  // ** Hooks

  return (
    <div>
      <p
        onClick={() => setShow(true)}
        style={{
          display: 'flex',
          gap: '5px',
          justifyContent: 'center',
          alignItems: 'center',
          border: '2px dashed #e1def7',
          marginInline: '15px',
          padding: '10px',
          borderRadius: '10px'
        }}
      >
        <Icon icon='tabler:plus' fontSize={15} />
        Ajouter des influenceurs
      </p>
      <Dialog
        fullWidth
        open={show}
        maxWidth='md'
        scroll='body'
        onClose={() => setShow(false)}
        TransitionComponent={Transition}
        onBackdropClick={() => setShow(false)}
        sx={{ '& .MuiDialog-paper': { overflow: 'visible' } }}
      >
        <DialogContent
          sx={{
            px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
            py: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
          }}
        >
          <CustomCloseButton onClick={() => setShow(false)}>
            <Icon icon='tabler:x' fontSize='1.25rem' />
          </CustomCloseButton>
          <Box sx={{ mb: 4, textAlign: 'center' }}>
            <Typography variant='h3' sx={{ mb: 3 }}>
              Ajouter des influenceurs
            </Typography>
          </Box>
          <CustomAutocomplete
            autoHighlight
            sx={{ mb: 6 }}
            id='add-members'
            options={influencers}
            ListboxComponent={List}
            onChange={(e, value) => {
              setCurrentInfluencer(value)
            }}
            getOptionLabel={option => option.fullName || ''}
            renderInput={params => <CustomTextField {...params} label='Add username' placeholder='@username...' />}
            renderOption={(props, option) => (
              <ListItem {...props}>
                <ListItemAvatar>
                  <Avatar src={`${option.pictureUrl}`} alt={option.fullName} sx={{ height: 28, width: 28 }} />
                </ListItemAvatar>
                <ListItemText primary={option.fullName} />
              </ListItem>
            )}
          />
          <Button
            variant='contained'
            color='success'
            fullWidth
            onClick={() => {
              if (currentInfluencer) {
                setShow(false)
                handleChange(currentInfluencer)
              }
            }}
          >
            Ajouter
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default DialogInfluencers
