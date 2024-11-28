// ** React Imports
import { ChangeEvent, useEffect, useState } from 'react'

// ** MUI Imports
import { Box } from '@mui/system'
import { Radio, Typography } from '@mui/material'

interface ListType {
  id: string
  name: string
  influencers_count: string
  isSelected: boolean
}

const CustomRadioWithIcons = ({
  data,
  handlechangeselected
}: {
  data: ListType[]
  handlechangeselected: (id: string) => void
}) => {
  // const initialSelected: string = data.filter(item => item.isSelected)[data.filter(item => item.isSelected).length - 1]
  //   .name

  // ** State
  const [selected, setSelected] = useState<string>('')

  const handleChange = (prop: string | ChangeEvent<HTMLInputElement>) => {
    setSelected(prop.toString())
  }

  useEffect(() => {
    if (selected) {
      handlechangeselected(selected)
    }
  }, [selected, handlechangeselected])

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '15px'
      }}
    >
      {data.map((item, index) => (
        <Box
          key={index}
          onClick={() => handleChange(item.id)}
          sx={{
            p: 4,
            height: '100%',
            display: 'flex',
            borderRadius: 1,
            cursor: 'pointer',
            position: 'relative',
            alignItems: 'flex-start',
            border: theme => `1px solid ${theme.palette.divider}`,
            ...(selected.includes(item.id)
              ? { borderColor: `primary` }
              : { '&:hover': { borderColor: theme => `rgba(${theme.palette.customColors.main}, 0.25)` } })
          }}
        >
          <Radio
            size='small'
            color={'primary'}
            name={`list-${item.id}`}
            checked={selected.includes(item.id)}
            sx={{ mb: -2, mt: -2.5, ml: -2.75 }}
            onChange={() => handleChange(item.id)}
          />
          <Typography sx={{ fontWeight: 700 }}>{item.name}</Typography>
          <Typography sx={{ fontWeight: 500, paddingLeft: '15px' }}>({item.influencers_count}/200 creator )</Typography>
        </Box>
      ))}
    </div>
  )
}

export default CustomRadioWithIcons
