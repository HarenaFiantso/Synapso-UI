import { Box } from '@mui/material'
import user from '../assets/user.jpg'

export default function UserImage() {
  return (
    <Box width='60px' height='60px'>
      <img src={user} style={{ objectFit: 'cover', borderRadius: '50%' }} width='60px' height='60px' alt='User avatar' />
    </Box>
  )
}
