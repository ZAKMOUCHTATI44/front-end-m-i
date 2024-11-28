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
import { useQueryClient } from 'react-query'

const Transition = forwardRef(function Transition(
  props: SlideProps & { children?: ReactElement<any, any> },
  ref: Ref<unknown>
) {
  return <Slide direction='up' ref={ref} {...props} />
})

const DeleteStatusProjet = ({ id, projectId }: { id: string; projectId: string }) => {
  const [open, setOpen] = useState<boolean>(false)
  const queryClient = useQueryClient()

  const handleClickOpen = () => setOpen(true)

  const handleClose = () => setOpen(false)

  const handleDelete = async () => {
    try {
      await api.delete(`statut-projets/${id}`)
      queryClient.invalidateQueries({ queryKey: [`/projects/${projectId}`] })
      setOpen(false)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <Fragment>
        <Button
          sx={{
            minWidth: 'auto'
          }}
          onClick={handleClickOpen}
        >
          <Icon icon='tabler:trash' fontSize={20} color='#EA5354' />
        </Button>
        <Dialog
          open={open}
          keepMounted
          onClose={handleClose}
          TransitionComponent={Transition}
          aria-labelledby='alert-dialog-slide-title'
          aria-describedby='alert-dialog-slide-description'
        >
          <DialogTitle id='alert-dialog-slide-title'>Remove column</DialogTitle>
          <DialogContent>
            <DialogContentText id='alert-dialog-slide-description'>
              Are you sure you want to remove this column? This action cannot be undone and will permanently delete all
              data in the column. Please confirm if you wish to proceed.
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

export default DeleteStatusProjet
