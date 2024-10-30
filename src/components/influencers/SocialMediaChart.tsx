import { Box } from '@mui/system'
import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

// Define types for data
interface ChartData {
  name: string
  value: number
  color: string
  icon: string // URL to the icon
}

// Sample data
const data: ChartData[] = [
  { name: 'YouTube', value: 323, color: 'url(#color-youtube)', icon: '/images/social-media/youtube.png' },
  { name: 'TikTok', value: 105.5, color: 'url(#color-tiktok)', icon: '/images/social-media/tiktok.png' },
  { name: 'Instagram', value: 60.9, color: 'url(#color-instagram)', icon: '/images/social-media/instagram.png' },
  { name: 'Twitter', value: 31.2, color: 'url(#color-twitter)', icon: '/images/social-media/twitter.png' }
]

// Component for rendering pie chart with labels
const SocialMediaChart: React.FC = () => {
  return (
    <>
      <div className='chart-container' style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <ResponsiveContainer width={108} height={108}>
          <PieChart>
            <defs>
              <linearGradient id='color-youtube' x1='0' y1='0' x2='1' y2='1'>
                <stop offset='0%' stopColor='#ff0000' />
              </linearGradient>
              <linearGradient id='color-tiktok' x1='0' y1='0' x2='1' y2='1'>
                <stop offset='0%' stopColor='#000' />
              </linearGradient>
              <linearGradient id='color-instagram' x1='0' y1='0' x2='1' y2='1'>
                <stop offset='0%' stopColor='#4f5bd5' />
                <stop offset='25%' stopColor='#962fbf' />
                <stop offset='50%' stopColor='#d62976' />
                <stop offset='75%' stopColor='#fa7e1e' />
                <stop offset='100%' stopColor='#feda75' />
              </linearGradient>
              <linearGradient id='color-twitter' x1='0' y1='0' x2='1' y2='1'>
                <stop offset='0%' stopColor='#1DA1F2' />
              </linearGradient>
            </defs>
            <Pie
              data={data}
              dataKey='value'
              cx='50%'
              cy='50%'
              innerRadius={35}
              outerRadius={50}
              fill='#8884d8'
              paddingAngle={5}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className='legend'>
          {data.map((entry, index) => (
            <Box
              sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}
              key={`legend-item-${index}`}
              className='legend-item'
            >
              <img src={entry.icon} alt={`${entry.name} icon`} width='17' height='17' />
              <span>{`${entry.value}M`}</span>
            </Box>
          ))}
        </div>
      </div>
    </>
  )
}

export default SocialMediaChart
