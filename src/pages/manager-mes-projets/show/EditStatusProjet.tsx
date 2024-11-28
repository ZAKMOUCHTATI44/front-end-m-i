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

const EditStatusProjet = ({ id, name, projectId }: { id: string; name: string; projectId: string }) => {
  const [show, setShow] = useState<boolean>(false)
  const [projectName, setProjectName] = useState<string>(name)
  const queryClient = useQueryClient()

  const handleCreateProject = async () => {
    try {
      const res = await api.patch(`/statut-projets/${id}`, { name: projectName })
      setProjectName(res.data.name)
      queryClient.invalidateQueries({ queryKey: [`/projects/${projectId}`] })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Button
        color='warning'
        sx={{
          minWidth: 'auto'
        }}
        onClick={() => {
          setShow(true)
        }}
      >
        <Icon icon='tabler:edit' fontSize={20} style={{ marginRight: '5px' }} color='' />
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
              Edit status name
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
            color='warning'
            fullWidth
            onClick={() => {
              handleCreateProject()
              setShow(false)
            }}
          >
            Edit
          </Button>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default EditStatusProjet
