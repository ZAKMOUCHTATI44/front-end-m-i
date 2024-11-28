import { Box, Button, Dialog, DialogContent, Fade, FadeProps, Typography } from '@mui/material'
import React, { useState, forwardRef, ReactElement, Ref } from 'react'
import Icon from 'src/@core/components/icon'
import { styled } from '@mui/material/styles'
import IconButton, { IconButtonProps } from '@mui/material/IconButton'
import CustomTextField from 'src/@core/components/mui/text-field'
import api from 'src/lib/api'
import { useQueryClient } from 'react-query'

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

const AddNewStatusProjet = ({ id }: { id: string }) => {
  const [show, setShow] = useState<boolean>(false)
  const [projectName, setProjectName] = useState<string>()
  const queryClient = useQueryClient()

  const handleCreateProject = async () => {
    try {
      await api.post(`/projects/${id}/statut-projets`, { name: projectName })
      setProjectName('')
      queryClient.invalidateQueries({ queryKey: [`/projects/${id}`] })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Button
        variant='contained'
        color='success'
        onClick={() => {
          setShow(true)
        }}
      >
        <Icon icon='tabler:plus' fontSize={20} style={{ marginRight: '5px' }} />
        Add New Status
      </Button>
      <Dialog
        fullWidth
        open={show}
        maxWidth='xs'
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
          <Box sx={{ mb: 4 }}>
            <Typography variant='overline' sx={{ mb: 3 }}>
              Add New Status
            </Typography>
            <CustomTextField
              autoFocus
              value={projectName}
              onChange={e => setProjectName(e.target.value)}
              fullWidth
              placeholder='Status name'
            />
          </Box>
          <Button
            variant='contained'
            size='medium'
            color='success'
            fullWidth
            onClick={() => {
              handleCreateProject()
              setShow(false)
            }}
          >
            Create
          </Button>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default AddNewStatusProjet
