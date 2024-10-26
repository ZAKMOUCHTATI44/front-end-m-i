import { Grid, InputLabel } from '@mui/material'
import React, { ChangeEvent, useState } from 'react'
import CustomRadioBasic from 'src/@core/components/custom-radio/basic'

interface CustomElement {
  title: string
  value: string
  isSelected?: boolean
}
const CustoumRadio = ({ data, label }: { data: CustomElement[]; label: string }) => {
  const initialSelected: string = data.filter(item => item.isSelected)[data.filter(item => item.isSelected).length - 1]
    .value

  // ** State
  const [selected, setSelected] = useState<string>(initialSelected)

  const handleChange = (prop: string | ChangeEvent<HTMLInputElement>) => {
    if (typeof prop === 'string') {
      setSelected(prop)
    } else {
      setSelected((prop.target as HTMLInputElement).value)
    }
  }

  return (
    <div>
      <InputLabel>{label}</InputLabel>
      <Grid container spacing={4}>
        {data.map((item, index) => (
          <CustomRadioBasic
            key={index}
            data={data[index]}
            selected={selected}
            name='custom-radios-basic'
            handleChange={handleChange}
            gridProps={{ sm: 4, xs: 12 }}
          />
        ))}
      </Grid>
    </div>
  )
}

export default CustoumRadio
