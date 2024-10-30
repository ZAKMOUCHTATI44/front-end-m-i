// ** MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// ** Third Party Imports
import { Bar } from 'react-chartjs-2'
import { ChartData, ChartOptions } from 'chart.js'

interface HorizontalBarProps {
  info: string
  warning: string
  labelColor: string
  borderColor: string
  legendColor: string
}

const ChartAgeGender = (props: HorizontalBarProps) => {
  // ** Props
  const { labelColor, borderColor, legendColor } = props

  const options: ChartOptions<'bar'> = {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 500 },
    elements: {
      bar: {
        borderRadius: {
          topRight: 15,
          bottomRight: 15
        }
      }
    },
    layout: {
      padding: { top: -4 }
    },
    scales: {
      x: {
        min: 0,
        grid: {
          drawTicks: false,
          color: borderColor
        },
        ticks: { color: labelColor }
      },
      y: {
        grid: {
          display: false,
          color: borderColor
        },
        ticks: { color: labelColor }
      }
    },
    plugins: {
      legend: {
        align: 'end',
        position: 'top',
        labels: { color: legendColor }
      }
    }
  }

  const data: ChartData<'bar'> = {
    labels: ['13-17', '18-24', '25-34', '35-44', '45-54', '55-64', '65+'],
    datasets: [
      {
        maxBarThickness: 15,
        label: 'Male',
        backgroundColor: '#4A90E2',
        borderColor: 'transparent',
        data: [710, 350, 580, 460, 120, 8, 10]
      },
      {
        maxBarThickness: 15,
        backgroundColor: '#E94E77',
        label: 'Female',
        borderColor: 'transparent',
        data: [430, 590, 510, 240, 360, 90, 12]
      }
    ]
  }

  return (
    <Card>
      <CardHeader title='Répartition des Âges par Genre' />
      <CardContent>
        <Bar data={data} height={400} options={options} />
      </CardContent>
    </Card>
  )
}

export default ChartAgeGender
