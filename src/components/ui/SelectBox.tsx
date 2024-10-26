import { InputLabel, MenuItem } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import CustomTextField from 'src/@core/components/mui/text-field'

interface SelectItems {
  label: string
  value: string
  image?: string
}

const SelectBox = ({
  label,
  items,
  defaultValue,
  id
}: {
  label: string
  items: SelectItems[]
  defaultValue?: string
  id: string
}) => {
  return (
    <div>
      <InputLabel>{label}</InputLabel>

      <CustomTextField fullWidth select defaultValue={defaultValue} id={id}>
        <MenuItem value='0'>
          <em>{label}</em>
        </MenuItem>
        {items.map(item => (
          <MenuItem key={item.value} value={item.value} sx={{ fontSize: '14px' }}>
            {item.image ? (
              <Box sx={{ display: 'flex', gap: theme => theme.spacing(2) }}>
                <img src={item.image} width={20} height={20} alt={item.label} />
                {item.label}
              </Box>
            ) : (
              <>{item.label} </>
            )}
          </MenuItem>
        ))}
      </CustomTextField>
    </div>
  )
}

export default SelectBox
