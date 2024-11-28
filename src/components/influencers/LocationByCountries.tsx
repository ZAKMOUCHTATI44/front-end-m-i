import { Card, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

type CountryPopulation = [string, number?]

interface MyComponentProps {
  demography: CountryPopulation[]
}

// const LocationByCountries = ({ demography }: { demography: PropsType }) => {

// const : React.FC<DemographyProps> = ({ demography }) => {
const LocationByCountries: React.FC<MyComponentProps> = ({ demography }) => {
  // const data = [
  //   {
  //     country: 'United States',
  //     count: 36,
  //     picture: 'https://app.favikon.com/flags/us.png'
  //   },
  //   {
  //     country: 'Morocco',
  //     count: 5,
  //     picture: 'https://app.favikon.com/flags/ma.png'
  //   },
  //   {
  //     country: 'Brazil',
  //     count: 4,
  //     picture: 'https://app.favikon.com/flags/br.png'
  //   },
  //   {
  //     country: 'Nigeria',
  //     count: 4,
  //     picture: 'https://app.favikon.com/flags/ng.png'
  //   },
  //   {
  //     country: 'India',
  //     count: 3,
  //     picture: 'https://app.favikon.com/flags/in.png'
  //   }
  // ]
  //
  return (
    <Grid lg={4} pl={2}>
      <Card sx={{ padding: '30px' }}>
        <Typography variant='h6' mb={6}>
          Location by countries
        </Typography>
        <Box>
          {demography.map(item => (
            <Box key={item[0]} sx={{ display: 'flex', gap: '5px' }}>
              {/* <img src={item.picture} alt={item.country} width={25} height={25} /> */}
              <div style={{ width: '-webkit-fill-available' }}>
                <Typography
                  variant='subtitle2'
                  style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}
                >
                  <span>{item[0]}</span>
                  <Typography variant='caption'>{item[1] ? item[1].toFixed(2) : 0} %</Typography>
                </Typography>
                <span
                  className='border-progress'
                  style={{
                    height: '8px',
                    width: '100%',
                    borderRadius: '2px',
                    backgroundColor: '#ebecff',
                    display: 'inline-flex',
                    position: 'relative',
                    overflow: 'hidden' // Ensures the inner element doesn’t overflow the border radius
                  }}
                >
                  <span
                    style={{
                      content: '""',
                      height: `100%`,
                      width: `${item[1]}%`,
                      backgroundColor: '#7a6af6',
                      position: 'absolute',
                      top: 0,
                      left: 0
                    }}
                  ></span>
                </span>
              </div>
            </Box>
          ))}
        </Box>
      </Card>
    </Grid>
  )
}

export default LocationByCountries
