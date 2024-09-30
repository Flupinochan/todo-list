// ログイン画面を表示
'use client'
import React from 'react'
import { Button } from '@mui/material'
import { TextField } from '@mui/material'

import { myStyle } from '../style'
import { useDispatch, useSelector } from 'react-redux'
import { setAccessToken, setIsLoggedIn } from '../feature/loginSlice'
import { RootState } from '../store'

const Login: React.FC = () => {
  const dispatch = useDispatch()
  const accessToken = useSelector((state: RootState) => state.login.accessToken)
  const isLoggedIn = useSelector((state: RootState) => state.login.isLoggedIn)
  // ログインボタンをクリックしたときの処理
  const handleLogin = () => {
    dispatch(setIsLoggedIn(true))
  }
  // 入力欄は、UUIDバリデーションをして、UUIDでなければログインできないようにする
  const isValidUUID = (uuid: string) => {
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/
    return uuidRegex.test(uuid)
  }

  return (
    <div>
      <div className='flex flex-row justify-end bg-blue-500 text-white items-center p-2 space-x-4'>
        <div>
          <TextField 
            id="access_token" 
            label="Access Token" 
            variant="standard" 
            sx={{ ...myStyle, width: '320px' }}
            value={accessToken}
            onChange={(e) => dispatch(setAccessToken(e.target.value))}
            disabled={isLoggedIn}
          />
        </div>
        <div className='mt-7'>
          <Button 
            variant="text" 
            disabled={!isValidUUID(accessToken) || isLoggedIn}
            onClick={handleLogin}
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Login