import React from 'react'
import {Button,buttonVariants } from '@/components/ui/button'
const LogSign = () => {
  return (
    <div className='logButtons'>
      <Button>Login</Button>
      <Button variant = "outline">Sign Up</Button>
    </div>
  )
}

export default LogSign
