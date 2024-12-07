// ** MUI Imports
import { Card, Grid, Typography } from '@mui/material'
import Slider from '@mui/material/Slider'

const valuetext = (value: number) => {
  return value.toString()
}

const InfluenceScoreRange = () => {
  return (
    <Card sx={{ padding: 3 }}>
      <Typography m={3}>Influence score</Typography>

      <Grid container>
        <Slider
          max={10}
          defaultValue={[0, 10]}
          valueLabelDisplay='auto'
          getAriaValueText={valuetext}
          aria-labelledby='range-slider'
        />
      </Grid>
    </Card>
  )
}

export default InfluenceScoreRange
