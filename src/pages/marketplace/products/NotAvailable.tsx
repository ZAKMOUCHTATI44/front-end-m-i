import { Box, Button, Dialog, DialogContent, Fade, FadeProps, Typography } from '@mui/material'
import React, { useState, forwardRef, ReactElement, Ref } from 'react'
import Icon from 'src/@core/components/icon'
import { styled } from '@mui/material/styles'
import IconButton, { IconButtonProps } from '@mui/material/IconButton'

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

const NotAvailable = () => {
  const [show, setShow] = useState<boolean>(false)

  return (
    <>
      <Button
        onClick={() => {
          setShow(true)
        }}
        variant='contained'
        size='medium'
        color='primary'
        sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}
      >
        <Icon icon='tabler:share' fontSize={20} />
        Promte
      </Button>

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
            py: theme => [`${theme.spacing(2)} !important`, `${theme.spacing(5)} !important`]
          }}
        >
          <CustomCloseButton onClick={() => setShow(false)}>
            <Icon icon='tabler:x' fontSize='1.25rem' />
          </CustomCloseButton>
          <Box sx={{ mb: 4 }}>
            <Typography variant='h4' sx={{ marginBottom: '15px' }}>
              We're sorry
            </Typography>
            <Typography variant='h6'>But this feature isn't accessible in your region for the current time</Typography>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default NotAvailable
