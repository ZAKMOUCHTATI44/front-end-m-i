import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

// ** Custom Component Import

// ** Third Party Imports
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Types

const data = [
  {
    name: 'Filorga Maroc',
    fans: 80
  },
  {
    name: 'Clarins France',
    fans: 100
  },
  {
    name: 'Estée Lauder',
    fans: 80
  },
  {
    name: 'Clinique',
    fans: 100
  }
]

const ChartPerPage = () => {
  return (
    <Box>
      <Box sx={{ mb: 4, display: 'flex', flexWrap: 'wrap' }}>
        <Box sx={{ mr: 6, display: 'flex', alignItems: 'center', '& svg': { mr: 1.5, color: '#826af9' } }}>
          <Icon icon='mdi:circle' fontSize='0.75rem' />
          <Typography variant='body2'>Fans</Typography>
        </Box>
      </Box>
      <Box sx={{ height: 350 }}>
        <ResponsiveContainer>
          <BarChart height={350} data={data} barSize={15} margin={{ left: -20 }}>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='name' />
            <YAxis orientation={'left'} />
            <Bar dataKey='fans' stackId='a' fill='#826af9' />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  )
}

export default ChartPerPage
