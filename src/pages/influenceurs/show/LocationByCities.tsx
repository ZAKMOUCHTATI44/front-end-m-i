import { Card, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

// type CountryPopulation = [string, number?]

// interface MyComponentProps {
//   demography: CountryPopulation[]
// }

// const LocationByCountries = ({ demography }: { demography: PropsType }) => {

// const : React.FC<DemographyProps> = ({ demography }) => {

type City = {
  country_code: string
  name: string
  value: number
}

const LocationByCities = ({ cities }: { cities: City[] }) => {
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

  return (
    <Card sx={{ padding: '30px', height: '100%' }}>
      <Typography variant='h6' mb={6}>
        Location by cities
      </Typography>
      <Box>
        {cities.map(item => (
          <Box key={item.country_code} sx={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
            {/* <img src={`https://flagcdn.com/w40/${item.code.toLocaleLowerCase()}.png`} alt={item.code} height={15} /> */}
            <div style={{ width: '-webkit-fill-available' }}>
              <Typography
                variant='subtitle2'
                style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}
              >
                <span style={{ textTransform: 'capitalize' }}>{item.name}</span>
                <Typography variant='caption'>{item.value} %</Typography>
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
                    width: `${item.value}%`,
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
  )
}

export default LocationByCities
