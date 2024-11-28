import React, { useEffect, useState } from 'react'
import { Alert, Button } from '@mui/material'
import Icon from 'src/@core/components/icon'
import api from 'src/lib/api'

const GenerateReport = ({ id }: { id: string }) => {
  const [open, setOpen] = useState<boolean>(false)
  const generateReport = async () => {
    try {
      await api.post('/reports', { id })
      setOpen(true)
      console.log(id)
    } catch (error) {}
  }

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        setOpen(false)
      }, 2500)
    }
  })

  return (
    <div>
      {open && (
        <Alert
          variant='outlined'
          severity='success'
          style={{
            position: 'absolute',
            backgroundColor: '#fff',
            top: '100px',
            right: '30px'
          }}
        >
          Your report has been successfully downloaded. 🎉{' '}
        </Alert>
      )}

      <Button
        variant='contained'
        sx={{ marginTop: '10px' }}
        fullWidth
        onClick={generateReport}
        style={{ display: 'flex', alignItems: 'center', gap: '5px' }}
      >
        Download PDF
        <Icon icon='tabler:download' fontSize={25} />
      </Button>
    </div>
  )
}

export default GenerateReport
