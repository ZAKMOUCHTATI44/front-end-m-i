import { Grid } from '@mui/material'
import React from 'react'

const data = [
  'https://favikon-medias.s3.eu-west-3.amazonaws.com/in/6977836581.jpg',
  'https://favikon-medias.s3.eu-west-3.amazonaws.com/in/5311574.jpg'
]
const CreatorNetwork = () => {
  return (
    <Grid item container sx={{ position: 'relative', marginTop: '100px' }} minHeight={550} minWidth={550}>
      <BoxCreators size={220} duration={30} data={data.slice(0, 1)} />
      <BoxCreators size={340} duration={50} data={data.slice(1, 2)} />
      {/* <BoxCreators size={440} duration={30} data={data.slice(8, 12)} /> */}
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
        src='https://favikon-medias.s3.eu-west-3.amazonaws.com/in/50997981995.jpg'
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
