import { Container, Stack } from '@mui/material'
import React, { FC, ReactNode } from 'react'
import FilterForm from '../components/FilterForm/FilterForm'
import Header from '../components/Header'

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
      <Header />
      <Stack direction='row' height='100%' flexGrow={1}>
        <FilterForm />
        <Container sx={{ paddingY: 10 }}>{children}</Container>
      </Stack>
    </Stack>
  )
}

export default Layout
