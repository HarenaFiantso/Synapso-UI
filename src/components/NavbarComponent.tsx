import { Badge, Box, FormControl, IconButton, InputBase, MenuItem, Select, Typography, useMediaQuery, useTheme } from '@mui/material'
import { useNavigate } from 'react-router'
import { useState } from 'react'
import { Close, DarkMode, Help, LightMode, Menu, Message, Notifications, Search } from '@mui/icons-material'
import { useDispatch } from 'react-redux'
import { setMode } from '../reducers/authReducer'
import FlexBetween from '../styles/FlexBetween'

export default function NavbarComponent() {
  /* Main configuration */
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(true)
  const isNonMobileScreens = useMediaQuery('(min-width: 728px)')

  /* Theme configuration */
  const theme = useTheme() as any
  const alt = theme.palette.background.alt
  const primaryLight = theme.palette.primary.light
  const neutralLight = theme.palette.neutral.light
  const dark = theme.palette.neutral.dark
  const background = theme.palette.background.default

  return (
    <FlexBetween padding='1rem 6%' bgcolor={alt} boxShadow='0 8px 24px #0001'>
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
          <IconButton>
            <Badge badgeContent={17} color='error'>
              <Message sx={{ fontSize: '25px' }} />
            </Badge>
          </IconButton>
          <IconButton>
            <Badge badgeContent={17} color='error'>
              <Notifications sx={{ fontSize: '25px' }} />
            </Badge>
          </IconButton>
          <Help sx={{ fontSize: '25px' }} />
          <FormControl variant='standard'>
            <Select
              value='Fiantso Harena'
              sx={{
                bgColor: neutralLight,
                width: '150px',
                borderRadius: '0.25rem',
                p: '0.25rem 1rem',
                '& .MuiSvgIcon-root': {
                  pr: '0.25rem',
                  width: '3rem'
                },
                '& .MuiSelect-select:focus': {
                  backgroundColor: neutralLight
                }
              }}
              input={<InputBase />}
            >
              <MenuItem value='Fiantso Harena'>
                <Typography>Fiantso Harena</Typography>
              </MenuItem>
              <MenuItem>Log Out</MenuItem>
            </Select>
          </FormControl>
        </FlexBetween>
      ) : (
        <IconButton onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}>
          <Menu />
        </IconButton>
      )}

      {/* Mobile Navigation */}
      {!isNonMobileScreens && isMobileMenuToggled && (
        <Box position='fixed' right='0' bottom='0' height='100%' zIndex='10' maxWidth='500px' minWidth='300px' bgcolor={background}>
          <Box display='flex' justifyContent='flex-end' p='1rem'>
            <IconButton onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}>
              <Close />
            </IconButton>
          </Box>

          <FlexBetween display='flex' flexDirection='column' justifyContent='center' alignItems='center' gap='3rem'>
            <IconButton onClick={() => dispatch(setMode())} sx={{ fontSize: '25px' }}>
              {theme.palette.mode === 'dark' ? <DarkMode sx={{ fontSize: '25px' }} /> : <LightMode sx={{ color: dark, fontSize: '25px' }} />}
            </IconButton>
          </FlexBetween>
        </Box>
      )}
    </FlexBetween>
  )
}
