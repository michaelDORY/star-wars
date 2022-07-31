import { Box, useMediaQuery, useTheme } from '@mui/material'
import React, { FC, ReactNode, useContext } from 'react'
import { GlobalContext } from '../../../context/global'

const getMobileStyles = (isOpen: boolean) => ({
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: isOpen ? 0 : -1000,
  zIndex: 1000,
})

const notMobileStyles = {
  width: 450,
}

const commonStyles = {
  minHeight: '100%',
  paddingY: 2,
  background: 'transparent',
  backdropFilter: 'blur(25px)',
  transition: 'all 0.2s ease-in-out',
}

interface Props {
  children: ReactNode
}

const Index: FC<Props> = (props) => {
  const { children } = props
  const { isFilterFormOpen: isOpen } = useContext(GlobalContext)
  const theme = useTheme()
  const isPhone = useMediaQuery(theme.breakpoints.between('xs', 'sm'))
  return (
    <Box
      sx={
        isPhone
          ? { ...commonStyles, ...getMobileStyles(isOpen) }
          : { ...commonStyles, ...notMobileStyles }
      }
    >
      {children}
    </Box>
  )
}

export default Index
