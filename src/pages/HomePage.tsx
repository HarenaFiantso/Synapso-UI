import { Box, useMediaQuery } from '@mui/material'
import NavbarComponent from '../components/NavbarComponent'
import UserWidget from '../components/UserWidget'

export default function HomePage() {
  const isNonMobileScreens = useMediaQuery('(min-width:728px)')

  return (
    <Box>
      <NavbarComponent />
      <Box width='100%' padding='2rem 6%' display={isNonMobileScreens ? 'flex' : 'block'} gap='.5rem' justifyContent='space-between'>
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          <UserWidget />
        </Box>
      </Box>
    </Box>
  )
}
