import { Typography, Button, useTheme, useMediaQuery } from '@mui/material'
import React, { useContext } from 'react'
import { GlobalContext } from '../App'
import CardsWrapper from '../components/CardsWrapper'
import BgImage from '../assets/images/bg.jpg'
import Layout from '../layout'
import FilterAltIcon from '@mui/icons-material/FilterAlt'

const Main = () => {
  const { setIsFilterFormOpen } = useContext(GlobalContext)
  const theme = useTheme()
  const isPhone = useMediaQuery(theme.breakpoints.between('xs', 'sm'))
  return (
    <Layout bgImage={BgImage}>
      <Typography variant='h2'>Characters</Typography>
      {isPhone && (
        <Button
          onClick={() => setIsFilterFormOpen(true)}
          variant='contained'
          color='secondary'
          startIcon={<FilterAltIcon />}
        >
          Filter
        </Button>
      )}
      <CardsWrapper />
    </Layout>
  )
}

export default Main
