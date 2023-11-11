import { Box, Typography, useTheme } from '@mui/material'
import FlexBetween from '../styles/FlexBetween'
import WidgetWrapper from '../styles/WidgetWrapper'
import UserImage from './UserImage'
import { ManageAccountsOutlined } from '@mui/icons-material'

export default function UserWidget() {
  /* Theme configuration */
  const { palette } = useTheme() as any
  const dark = palette.neutral.dark
  const medium = palette.neutral.medium

  return (
    <WidgetWrapper>
      <FlexBetween gap='.5rem' pb='1.1rem'>
        <FlexBetween gap='1rem'>
          <UserImage />
          <Box>
            <Typography
              variant='h4'
              fontWeight='700'
              color={dark}
              sx={{
                '&:hover': {
                  color: palette.primary.light,
                  cursor: 'pointer'
                }
              }}
            >
              Fiantso Harena
            </Typography>
            <Typography color={medium}>69 friends</Typography>
          </Box>
        </FlexBetween>
        <ManageAccountsOutlined />
      </FlexBetween>
    </WidgetWrapper>
  )
}
