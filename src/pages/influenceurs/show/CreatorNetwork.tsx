import { Grid } from '@mui/material'
import React from 'react'

const data = [
  '/logos/Clinique-logo-A48B76E112-seeklogo.com.png',
  '/logos/Estee-Lauder-Logo.png',
  '/logos/images (1).png',
  '/logos/images.png',
  '/logos/la-mer1660.jpg',
  '/logos/la-prairie-logo.png',
  '/logos/Nuxe Paris.jpg',
  '/logos/images (2).png',
  '/logos/Caudalie-Symbole.png',
  '/logos/lancome-3-logo-png-transparent.png'
]
const CreatorNetwork = () => {
  return (
    <Grid item container sx={{ position: 'relative', marginTop: '100px' }} minHeight={550} minWidth={550}>
      <BoxCreators size={220} duration={30} data={data.slice(0, 4)} />
      <BoxCreators size={340} duration={50} data={data.slice(4, 8)} />
      <BoxCreators size={440} duration={30} data={data.slice(8, 12)} />
      <MiddleElement />
    </Grid>
  )
}

const BoxCreators = ({ size, duration, data }: { size: number; duration: number; data: string[] }) => {
  return (
    <div
      className='box-network'
      style={
        {
          '--size': `${size}px`,
          '--duration': `${duration}s`,
          height: `${size}px`,
          width: `${size}px`,
          border: '0.3px solid #EFEFEF'
        } as React.CSSProperties
      }
    >
      {data.map((item, index) => (
        <div className={`group-icon `} key={item} style={{ zIndex: '99px' }}>
          <div className={`box-${index} children-container `}>
            <img
              src={item}
              style={{
                width: '55px',
                height: '55px',
                borderRadius: '50%'
              }}
              alt=''
            />
          </div>
        </div>
      ))}
    </div>
  )
}

const MiddleElement = () => {
  return (
    <div
      style={{
        inset: '50%',
        width: '75px',
        height: '75px',
        zIndex: 199,
        translate: ' -50% -50%',
        position: 'absolute'
      }}
    >
      <img
        src='https://favikon-medias.s3.eu-west-3.amazonaws.com/in/1314863628.jpg'
        width={75}
        height={75}
        style={{
          borderRadius: '50%'
        }}
        alt=''
      />
    </div>
  )
}
export default CreatorNetwork
