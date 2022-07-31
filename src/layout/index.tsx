import { Stack } from '@mui/material'
import React, { FC, ReactNode } from 'react'
import Index from '../components/Header'

interface Props {
  children: ReactNode
  bgImage?: string
}

const Layout: FC<Props> = (props) => {
  const { children, bgImage } = props
  return (
    <Stack
      sx={{
        background: `url(${bgImage}) no-repeat center/cover`,
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
      }}
    >
      <Index />
      {children}
    </Stack>
  )
}

export default Layout
