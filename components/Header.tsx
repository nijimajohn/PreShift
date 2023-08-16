import { Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className="flex gap-2">
    <Link href="/login/"><Button variant='outlined'>ログイン</Button></Link>
    <Link href="/calender"><Button variant='outlined'>カレンダー</Button></Link>
  </div>
  )
}

export default Header