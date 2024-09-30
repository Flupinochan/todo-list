// ログイン状態を管理するステート
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import uuid from '../tool/uuid'

interface LoginState {
  accessToken: string
  isLoggedIn: boolean
}

const initialState: LoginState = {
  accessToken: uuid(),
  isLoggedIn: false,
}

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setAccessToken(state, action: PayloadAction<string>) {
      state.accessToken = action.payload
    },
    setIsLoggedIn(state, action: PayloadAction<boolean>) {
      state.isLoggedIn = action.payload
    },
  },
})

export const { setAccessToken, setIsLoggedIn } = loginSlice.actions
export default loginSlice.reducer