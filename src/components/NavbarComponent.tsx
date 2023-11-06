import { Badge, IconButton, InputBase, Typography, useMediaQuery, useTheme } from '@mui/material'
import { useNavigate } from 'react-router'
import { useState } from 'react'
import { AccountCircle, DarkMode, Help, LightMode, Menu, Message, Notifications, Search } from '@mui/icons-material'
import { useDispatch } from 'react-redux'
import { setMode } from '../reducers/authReducer'
import FlexBetween from '../styles/FlexBetween'

export default function NavbarComponent() {
  /* Main configuration */
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false)
  const isNonMobileScreens = useMediaQuery('(min-width: 1000px)')
  const menuId = 'primary-search-account-menu'

  /* Theme configuration */
  const theme = useTheme() as any
  const alt = theme.palette.background.alt
  const primaryLight = theme.palette.primary.light
  const neutralLight = theme.palette.neutral.light
  const dark = theme.palette.neutral.dark

  return (
    <FlexBetween padding='1rem 6%' bgcolor={alt}>
      <FlexBetween gap='1.75rem'>
        <Typography
          fontWeight='bold'
          fontSize='1.5rem'
          color='primary'
          onClick={() => navigate('/home')}
          sx={{
            '&:hover': {
              color: primaryLight,
              cursor: 'pointer'
            }
          }}
        >
          Synapso
        </Typography>

        {isMobileMenuToggled && (
          <FlexBetween bgcolor={neutralLight} borderRadius='9px' gap='3rem' padding='.1rem 1.5rem'>
            <InputBase placeholder='Search...' />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>
        )}
      </FlexBetween>

      {/* Desktop navigation */}
      {isNonMobileScreens ? (
        <FlexBetween gap='2rem'>
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === 'dark' ? <DarkMode sx={{ fontSize: '25px' }} /> : <LightMode sx={{ color: dark, fontSize: '25px' }} />}
          </IconButton>
          <Badge badgeContent={17} color='error'>
            <Message sx={{ fontSize: '25px' }} />
          </Badge>
          <Badge badgeContent={17} color='error'>
            <Notifications sx={{ fontSize: '25px' }} />
          </Badge>
          <Help sx={{ fontSize: '25px' }} />
          <IconButton size='large' edge='end' aria-label='account of current user' aria-controls={menuId} aria-haspopup='true' color='inherit'>
            <AccountCircle />
          </IconButton>
        </FlexBetween>
      ) : (
        <FlexBetween>
          <IconButton onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}>
            <Menu />
          </IconButton>
        </FlexBetween>
      )}
    </FlexBetween>
  )
}
