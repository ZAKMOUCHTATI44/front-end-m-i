// ** MUI Import
import Grid from '@mui/material/Grid'

// ** Demo Component Imports

// ** Custom Component Import
import KeenSliderWrapper from 'src/@core/styles/libs/keen-slider'
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import Sources from '../Sources'
import { useTheme } from '@mui/material/styles'
import 'chart.js/auto'
import LatestStatistics from '../LatestStatistics'
import GraphiquesDeSentiment from '../GraphiquesDeSentiment'

const Charts = () => {
  const theme = useTheme()

  const whiteColor = '#fff'
  const barChartYellow = '#ffcf5c'
  const lineChartYellow = '#d4e157'
  const lineChartPrimary = '#8479F2'
  const lineChartWarning = '#ff9800'
  const borderColor = theme.palette.divider
  const labelColor = theme.palette.text.disabled
  const legendColor = theme.palette.text.secondary

  return (
    <>
      <ApexChartWrapper sx={{ mt: theme => theme.spacing(6) }}>
        <KeenSliderWrapper>
          <Grid container spacing={6}>
            <Grid item xs={12} md={4}>
              <Sources keyword={''} />
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
          </Grid>
        </KeenSliderWrapper>
      </ApexChartWrapper>
    </>
  )
}

export default Charts
