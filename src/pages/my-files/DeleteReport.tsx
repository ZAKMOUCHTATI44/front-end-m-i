import { Button } from '@mui/material'
import React from 'react'
import Icon from 'src/@core/components/icon'
import api from 'src/lib/api'
import { forwardRef, Fragment, ReactElement, Ref, useState } from 'react'

// ** MUI Imports
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Slide, { SlideProps } from '@mui/material/Slide'
import DialogContentText from '@mui/material/DialogContentText'

const Transition = forwardRef(function Transition(
  props: SlideProps & { children?: ReactElement<any, any> },
  ref: Ref<unknown>
) {
  return <Slide direction='up' ref={ref} {...props} />
})

const DeleteReport = ({ id }: { id: string }) => {
  const [open, setOpen] = useState<boolean>(false)

  const handleClickOpen = () => setOpen(true)

  const handleClose = () => setOpen(false)

  const handleDelete = async () => {
    try {
      await api.delete(`reports/${id}`)
      setOpen(false)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <Fragment>
        <Button onClick={handleClickOpen} variant='outlined' size='small' color='error'>
          <Icon icon='tabler:trash' fontSize={20} />
        </Button>
        <Dialog
          open={open}
          keepMounted
          onClose={handleClose}
          TransitionComponent={Transition}
          aria-labelledby='alert-dialog-slide-title'
          aria-describedby='alert-dialog-slide-description'
        >
          <DialogTitle id='alert-dialog-slide-title'>Delete Project</DialogTitle>
          <DialogContent>
            <DialogContentText id='alert-dialog-slide-description'>
              Are you sure you want to delete this project? This action is irreversible and will permanently delete all
              data associated with this project. Please confirm if you wish to proceed.
            </DialogContentText>
          </DialogContent>
          <DialogActions className='dialog-actions-dense'>
            <Button variant='contained' color='secondary' onClick={handleClose}>
              Cancel
            </Button>
            <Button variant='contained' color='error' onClick={handleDelete}>
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    </div>
  )
}

export default DeleteReport
