import { Box, Button, Dialog, DialogContent, Fade, FadeProps } from '@mui/material'
import React, { useState, forwardRef, ReactElement, Ref } from 'react'
import Icon from 'src/@core/components/icon'
import { styled } from '@mui/material/styles'
import IconButton, { IconButtonProps } from '@mui/material/IconButton'
import UseQueryHooks from 'src/lib/react-query'
import api from 'src/lib/api'
import Error500 from '../500'
import Loading from 'src/components/Loading'
import ListCard from './ListCard'
import CreateNewList from './show/CreateNewList'
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

const ManageFavorites = ({
  selectedInfluencers,
  clearSet
}: {
  selectedInfluencers: Set<Influencer>
  clearSet: () => void
}) => {
  const [show, setShow] = useState<boolean>(false)
  const [currentListId, setCurrentListId] = useState<string>()
  const queryClient = useQueryClient()

  const { error, isLoading, data } = UseQueryHooks<ListType[]>(['favorite-lists'], async () => {
    const response = await api.get<ListType[]>('/favorite-lists')

    return response.data
  })
  if (error) return <Error500 />

  const addInfluencersToList = async () => {
    try {
      await api.post(`/favorite-lists/${currentListId}/add-influencers`, {
        influencers: Array.from(selectedInfluencers).map(item => item.id)
      })
      setShow(false)
      clearSet()
      queryClient.invalidateQueries({ queryKey: [`favorite-lists`] })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Button
        variant='contained'
        color='primary'
        size='small'
        onClick={() => {
          setShow(true)
        }}
        sx={{
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          gap: '5px'
        }}
      >
        Manage favorites
        <Icon icon='tabler:plus' fontSize={20} />
      </Button>
      <Dialog
        fullWidth
        open={show}
        maxWidth='sm'
        scroll='body'
        onClose={() => setShow(false)}
        TransitionComponent={Transition}
        onBackdropClick={() => setShow(false)}
        sx={{ '& .MuiDialog-paper': { overflow: 'visible' } }}
      >
        <DialogContent>
          <CustomCloseButton onClick={() => setShow(false)}>
            <Icon icon='tabler:x' fontSize='1.25rem' />
          </CustomCloseButton>
          <Box sx={{ mb: 4 }}>
            <Button
              variant='outlined'
              size='small'
              sx={{
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '5px'
              }}
            >
              {Array.from(selectedInfluencers)
                .slice(0, 4)
                .map((influencer, index) => (
                  <div key={index}>
                    <img
                      src={influencer.pictureUrl}
                      alt={influencer.fullName}
                      width={35}
                      height={35}
                      style={{
                        borderRadius: '50%',
                        marginLeft: `-${5 * index}px`
                      }}
                    />
                  </div>
                ))}
              {selectedInfluencers.size} Creator selected
            </Button>
            <hr color='#655BD3' />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <p>Add creators to lists</p>
              <CreateNewList />
            </Box>
          </Box>

          {isLoading && <Loading />}
          <div style={{ margin: '20px 0px' }}>
            {data && (
              <ListCard
                data={data}
                handlechangeselected={e => {
                  setCurrentListId(e)
                }}
              />
            )}
          </div>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            <Button
              variant='contained'
              size='small'
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '5px'
              }}
              color='error'
              onClick={() => {
                setShow(false)
              }}
            >
              <Icon icon='tabler:x' fontSize={15} />
              Close
            </Button>
            <Button
              variant='contained'
              size='small'
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '5px'
              }}
              color='success'
              onClick={() => {
                addInfluencersToList()
              }}
            >
              <Icon icon='tabler:check' fontSize={15} />
              Save changes
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default ManageFavorites
