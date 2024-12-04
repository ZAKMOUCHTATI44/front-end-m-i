import { Box, Card, Grid, Typography } from '@mui/material'
import Icon from 'src/@core/components/icon'

interface Data {
  label: string
  value: number
  image?: string
}
const Intersets = ({ label, data }: { label: string; data: Data[] }) => {
  return (
    <Card sx={{ padding: '40px 10px' }}>
      <Typography variant='h5' sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
        <Icon icon='tabler:stars' fontSize={20} />
        {label}
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          margin: '20px auto'
        }}
      >
        {data.map(item => {
          return (
            <Grid container key={item.label}>
              <Grid lg={11} sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <Typography variant='body2'>{item.label}</Typography>
              </Grid>
              <Grid lg={1}>
                <Typography variant='body2'>{item.value}%</Typography> {/* Displaying the random percentage */}
              </Grid>
            </Grid>
          )
        })}
      </Box>
    </Card>
  )
}

export default Intersets
