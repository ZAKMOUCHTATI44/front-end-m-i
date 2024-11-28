import { Box, Button, Dialog, DialogContent, Fade, FadeProps } from '@mui/material'
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

const CreateNewList = ({ queryKey }: { queryKey?: string }) => {
  const [show, setShow] = useState<boolean>(false)
  const [projectName, setProjectName] = useState<string>()
  const queryClient = useQueryClient()

  const handleCreateProject = async () => {
    try {
      await api.post(`/favorite-lists`, { name: projectName })
      setProjectName('')
      queryClient.invalidateQueries({ queryKey: [queryKey ? queryKey : `favorite-lists`] })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Button
        variant='outlined'
        color='secondary'
        onClick={() => {
          setShow(true)
        }}
        size='small'
        sx={{
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          gap: '5px'
        }}
      >
        Create a new custom list
        <Icon icon='tabler:plus' fontSize={20} />
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
            <p>Create a new custom list</p>
            <CustomTextField
              autoFocus
              value={projectName}
              onChange={e => setProjectName(e.target.value)}
              fullWidth
              placeholder='Give a name to your list'
              label={'Name'}
            />
          </Box>
          <Button
            variant='contained'
            size='small'
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

export default CreateNewList
