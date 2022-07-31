import CloseIcon from '@mui/icons-material/Close'
import { Paper, useMediaQuery, IconButton, useTheme } from '@mui/material'
import React, { Dispatch, FC, ReactNode, SetStateAction } from 'react'

const paperStyles = {
  position: 'absolute',
  bgcolor: 'background.paper',
  p: 5,
}

const paperMobile = {
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  paddingTop: 10,
  borderRadius: 0,
}

const paperNotMobile = {
  left: '50%',
  transform: 'translateX(-50%)',
  top: 25,
  borderRadius: 2,
}

interface Props {
  children: ReactNode
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

const ModalPaper: FC<Props> = (props) => {
  const { children, setIsOpen } = props
  const theme = useTheme()
  const isPhone = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Paper
      sx={isPhone ? { ...paperStyles, ...paperMobile } : { ...paperStyles, ...paperNotMobile }}
    >
      {isPhone && (
        <IconButton
          size='small'
          onClick={() => setIsOpen(false)}
          sx={{
            position: 'absolute',
            right: 10,
            top: 10,
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
          }}
        >
          <CloseIcon />
        </IconButton>
      )}
      {children}
    </Paper>
  )
}

export default ModalPaper
