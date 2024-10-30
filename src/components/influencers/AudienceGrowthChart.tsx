import { Box, Card, Grid, Typography } from '@mui/material'
import React from 'react'
import { ApexOptions } from 'apexcharts'
import ReactApexcharts from 'src/@core/components/react-apexcharts'

type Data = {
  date: string
  value: number
  displayedValue: string
  timestamp: number
}
const AudienceGrowthChart = ({ network, data }: { network: string; data: Data[] }) => {
  const socialMediaColors = [
    { platform: 'twitter', color: '#1DA1F2' },
    { platform: 'instagram', color: '#E4405F' },
    { platform: 'linkedIn', color: '#0077B5' },
    { platform: 'youtube', color: '#FF0000' },
    { platform: 'tiktok', color: '#000000' }
  ]

  const currentColor = socialMediaColors.find(platform => platform.platform === network)

  const color = currentColor ? currentColor.color : '#000'

  const options: ApexOptions = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false },
      sparkline: { enabled: true }
    },
    tooltip: { enabled: false },
    dataLabels: { enabled: false },
    stroke: {
      width: 2.5,
      curve: 'smooth'
    },
    grid: {
      show: false,
      padding: {
        top: 2,
        bottom: 0
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityTo: 0,
        opacityFrom: 1,
        shadeIntensity: 1,
        stops: [0, 100],
        colorStops: [
          [
            {
              offset: 0,
              opacity: 0.4,
              color: color
            },
            {
              offset: 100,
              opacity: 0.1,
              color: color
            }
          ]
        ]
      }
    },
    theme: {
      monochrome: {
        enabled: true,
        shadeTo: 'light',
        shadeIntensity: 1,
        color: color
      }
    },
    xaxis: {
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false }
    },
    yaxis: { show: false }
  }

  return (
    <Grid item xs={12} sm={6} lg={4}>
      <Card sx={{ paddingTop: theme => theme.spacing(6) }}>
        <Box sx={{ display: 'flex', paddingInline: theme => theme.spacing(2), gap: '5px', paddingBottom: '25px' }}>
          <img src={`/images/social-media/${network}.png`} alt='' width={25} height={25} />
          <Typography sx={{ textTransform: 'capitalize' }}>{network} Audience</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingInline: theme => theme.spacing(2) }}>
          <div>
            <Typography sx={{ fontWeight: 'bold' }}>{data[0].displayedValue} </Typography>
            <Typography variant='caption'>{data[0].date}</Typography>
          </div>
          <div>
            <Typography sx={{ fontWeight: 'bold' }}>{data[data.length - 1].displayedValue}</Typography>
            <Typography variant='caption'>{data[data.length - 1].date}</Typography>
          </div>
        </Box>
        <ReactApexcharts type='area' height={110} options={options} series={[{ data: data.map(item => item.value) }]} />
      </Card>
    </Grid>
  )
}

export default AudienceGrowthChart
