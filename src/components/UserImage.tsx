import { Box } from '@mui/material'
import user from '../assets/user.jpg'

export default function UserImage() {
  return (
    <Box width='50px' height='50px'>
      <img src={user} style={{ objectFit: 'cover', borderRadius: '50%' }} width='50px' height='50px' alt='User avatar' />
    </Box>
  )
}
