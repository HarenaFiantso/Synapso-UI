import { createSlice } from '@reduxjs/toolkit'

/* Initial state for the auth slice of the store
 * In the line 10:
 * This function automatically generates action creators and action types based on the reducers you provide
 */
const initialState = {
  mode: 'light'
}
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setMode: state => {
      state.mode = state.mode === 'light' ? 'dark' : 'light'
    }
  }
})

export const { setMode } = authSlice.actions
export default authSlice.reducer
