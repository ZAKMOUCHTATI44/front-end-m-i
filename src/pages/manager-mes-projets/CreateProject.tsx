import { Box, Button, Dialog, DialogContent, Fade, FadeProps, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import React, { useState, forwardRef, ReactElement, Ref } from 'react'
import Icon from 'src/@core/components/icon'
import { styled } from '@mui/material/styles'
import IconButton, { IconButtonProps } from '@mui/material/IconButton'
import CustomTextField from 'src/@core/components/mui/text-field'
import api from 'src/lib/api'

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

const CreateProject = () => {
  const router = useRouter()
  const [show, setShow] = useState<boolean>(false)
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    minHeight: '150px',
    justifyContent: 'center',
    border: '2px dashed #D3D3D3',
    borderRadius: '12px',
    cursor: 'pointer',
    color: '#C0B6E0',
    fontFamily: 'Arial, sans-serif',
    fontSize: '18px',
    fontWeight: '500'
  }

  const [projectName, setProjectName] = useState<string>()

  const handleCreateProject = async () => {
    try {
      const res = await api.post('projects', { name: projectName, template: 0 })

      router.push(`/manager-mes-projets/show/${res.data.id}`)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div
        style={containerStyle}
        onClick={() => {
          // router.push('/manager-mes-projets/show')
          setShow(true)
        }}
      >
        <Typography
          sx={{
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <Icon icon='tabler:plus' fontSize={25} />
          Create a new project
        </Typography>
      </div>
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
              Create new project
            </Typography>
            <CustomTextField
              autoFocus
              value={projectName}
              onChange={e => setProjectName(e.target.value)}
              fullWidth
              placeholder='Project name'
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

export default CreateProject
