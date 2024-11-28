// ** MUI Imports
import Box from '@mui/material/Box'
import { useRouter } from 'next/router'

// ** Icon Imports

// ** Type Import
import { Settings } from 'src/@core/context/settingsContext'
import LanguageDropdown from 'src/@core/layouts/components/shared-components/LanguageDropdown'
import ModeToggler from 'src/@core/layouts/components/shared-components/ModeToggler'

// ** Components
import UserDropdown from 'src/@core/layouts/components/shared-components/UserDropdown'
import AutoCompleteSearchInfluencers from 'src/pages/manager-mes-projets/show/AutoCompleteSearchInfluencers'

interface Props {
  hidden: boolean
  settings: Settings
  toggleNavVisibility: () => void
  saveSettings: (values: Settings) => void
}

const AppBarContent = (props: Props) => {
  // ** Props
  const { settings, saveSettings } = props
  const router = useRouter()

  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Box sx={{ width: '350px' }}>
        <AutoCompleteSearchInfluencers
          handleChange={influencer => {
            router.push(`/influenceurs/show/${influencer?._id}`)
          }}
        />
      </Box>
      <Box className='actions-right' sx={{ display: 'flex', alignItems: 'center' }}>
        <ModeToggler settings={settings} saveSettings={saveSettings} />
        <LanguageDropdown settings={settings} saveSettings={saveSettings} />
        <UserDropdown settings={settings} />
      </Box>
    </Box>
  )
}

export default AppBarContent
