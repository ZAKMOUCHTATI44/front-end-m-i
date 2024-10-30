// ** MUI Import
import Grid from '@mui/material/Grid'

// ** Demo Component Imports
import AnalyticsSalesByCountries from 'src/components/analytics/AnalyticsSalesByCountries'

// ** Custom Component Import
import KeenSliderWrapper from 'src/@core/styles/libs/keen-slider'
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import { useState } from 'react'
import FormKeyWord from './FormKeyWord'
import Sources from './Sources'
import ChartAgeGender from './ChartAgeGender'
import { useTheme } from '@mui/material/styles'
import 'chart.js/auto'
import LatestStatistics from './LatestStatistics'
import GraphiquesDeSentiment from './GraphiquesDeSentiment'

const AnalyticsDashboard = () => {
  const [keyword, setKeyword] = useState<string>()

  const theme = useTheme()

  const whiteColor = '#fff'
  const barChartYellow = '#ffcf5c'
  const lineChartYellow = '#d4e157'
  const lineChartPrimary = '#8479F2'
  const lineChartWarning = '#ff9800'
  const horizontalBarInfo = '#26c6da'
  const warningColorShade = '#ffbd1f'
  const borderColor = theme.palette.divider
  const labelColor = theme.palette.text.disabled
  const legendColor = theme.palette.text.secondary

  return (
    <>
      <FormKeyWord handleChange={setKeyword} />
      {keyword && (
        <ApexChartWrapper sx={{ mt: theme => theme.spacing(6) }}>
          <KeenSliderWrapper>
            <Grid container spacing={6}>
              <Grid item xs={12} md={4}>
                <AnalyticsSalesByCountries />
              </Grid>
              <Grid item xs={12} md={8}>
                <GraphiquesDeSentiment
                  white={whiteColor}
                  labelColor={labelColor}
                  success={lineChartYellow}
                  borderColor={borderColor}
                  legendColor={legendColor}
                  primary={lineChartPrimary}
                  warning={lineChartWarning}
                />
              </Grid>

              <Grid item xs={12} md={12}>
                <LatestStatistics yellow={barChartYellow} labelColor={labelColor} borderColor={borderColor} />
              </Grid>

              <Grid item xs={12} md={6} lg={4}>
                <Sources keyword={''} />
              </Grid>

              <Grid item xs={12} md={6} lg={8}>
                <ChartAgeGender
                  labelColor={labelColor}
                  info={horizontalBarInfo}
                  borderColor={borderColor}
                  legendColor={legendColor}
                  warning={warningColorShade}
                />
              </Grid>
            </Grid>
          </KeenSliderWrapper>
        </ApexChartWrapper>
      )}
    </>
  )
}

export default AnalyticsDashboard
