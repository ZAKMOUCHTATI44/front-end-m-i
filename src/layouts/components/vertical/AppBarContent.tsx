// ** MUI Imports
import Box from '@mui/material/Box'

// ** Icon Imports

// ** Type Import
import { Settings } from 'src/@core/context/settingsContext'
import LanguageDropdown from 'src/@core/layouts/components/shared-components/LanguageDropdown'
import ModeToggler from 'src/@core/layouts/components/shared-components/ModeToggler'

// ** Components
import UserDropdown from 'src/@core/layouts/components/shared-components/UserDropdown'

interface Props {
  hidden: boolean
  settings: Settings
  toggleNavVisibility: () => void
  saveSettings: (values: Settings) => void
}

const AppBarContent = (props: Props) => {
  // ** Props
  const { settings, saveSettings } = props

  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
      <Box className='actions-right' sx={{ display: 'flex', alignItems: 'center' }}>
        <ModeToggler settings={settings} saveSettings={saveSettings} />
        <LanguageDropdown settings={settings} saveSettings={saveSettings} />
        <UserDropdown settings={settings} />
      </Box>
    </Box>
  )
}

export default AppBarContent
