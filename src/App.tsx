import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useMemo } from 'react'
import { themeSettings } from './styles/Theme'

import HomePage from './pages/HomePage'
import ErrorPage from './pages/ErrorPage'

/* Routing system of the Application */
const router = createBrowserRouter([
  {
    path: '/home',
    element: <HomePage />,
    errorElement: <ErrorPage />
  }
])

export default function App() {
  const mode = useSelector((state: any) => state.mode)
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </div>
  )
}
