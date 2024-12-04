// ** MUI Imports
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// ** Third Party Imports
import { ApexOptions } from 'apexcharts'

// ** Component Import
import ReactApexcharts from 'src/@core/components/react-apexcharts'

// ** Custom Components Imports

interface YRange {
  min: number
  max: number
}

const generateDataHeat = (count: number, yrange: YRange) => {
  let i = 0
  const series = []
  while (i < count) {
    const x = `w${(i + 1).toString()}`
    const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
    series.push({
      x,
      y
    })
    i += 1
  }

  return series
}

const series = [
  {
    name: 'SUN',
    data: generateDataHeat(24, { min: 0, max: 60 })
  },
  {
    name: 'MON',
    data: generateDataHeat(24, { min: 0, max: 60 })
  },
  {
    name: 'TUE',
    data: generateDataHeat(24, { min: 0, max: 60 })
  },
  {
    name: 'WED',
    data: generateDataHeat(24, { min: 0, max: 60 })
  },
  {
    name: 'THU',
    data: generateDataHeat(24, { min: 0, max: 60 })
  },
  {
    name: 'FRI',
    data: generateDataHeat(24, { min: 0, max: 60 })
  },
  {
    name: 'SAT',
    data: generateDataHeat(24, { min: 0, max: 60 })
  }
]

const ApexHeatmapChart = ({ label }: { label: string }) => {
  // ** Hook
  const theme = useTheme()

  const options: ApexOptions = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    dataLabels: { enabled: false },
    stroke: {
      colors: [theme.palette.mode === 'light' ? theme.palette.background.paper : theme.palette.customColors.bodyBg]
    },
    legend: {
      position: 'bottom',
      labels: {
        colors: theme.palette.text.secondary
      },
      markers: {
        offsetY: 0,
        offsetX: -1
      },
      itemMargin: {
        vertical: 3,
        horizontal: 10
      }
    },
    plotOptions: {
      heatmap: {
        enableShades: false,
        colorScale: {
          ranges: [
            { to: 10, from: 0, name: '0-10', color: '#fefefe' },
            { to: 20, from: 11, name: '10-20', color: '#c2b1d0' },
            { to: 30, from: 21, name: '20-30', color: '#9075ab' },
            { to: 40, from: 31, name: '30-40', color: '#8566a3' },
            { to: 50, from: 41, name: '40-50', color: '#6f4b92' },
            { to: 60, from: 51, name: '50-60', color: '#4f2479' }
          ]
        }
      }
    },
    grid: {
      padding: { top: -10 }
    },
    yaxis: {
      labels: {
        style: {
          colors: theme.palette.text.disabled
        }
      }
    },
    xaxis: {
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false }
    }
  }

  return (
    <Card>
      <CardHeader title={label} />
      <CardContent>
        <ReactApexcharts type='heatmap' height={400} options={options} series={series} />
      </CardContent>
    </Card>
  )
}

export default ApexHeatmapChart
