import { Box, Container, SvgIcon } from '@mui/material'
import React from 'react'
import { ReactComponent as LogoImage } from '../../assets/icons/logo.svg'

const Header = () => {
  return (
    <Box sx={{ paddingY: 1 }}>
      <Container>
        <SvgIcon component={LogoImage} viewBox='0 0 50 50' sx={{ fill: '#fff' }} />
      </Container>
    </Box>
  )
}

export default Header
