import { Typography, Button, useTheme, useMediaQuery, Container, Stack } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../App'
import CardsWrapper from '../components/CardsWrapper'
import BgImage from '../assets/images/bg.jpg'
import FilterForm from '../components/FilterForm/FilterForm'
import filterCharacters from '../helpers/characters/filter'
import useSWAPI from '../hooks/useSWAPI'
import Layout from '../layout'
import FilterAltIcon from '@mui/icons-material/FilterAlt'
import { Character, FilterInputs } from '../types'

const Main = () => {
  const { setIsFilterFormOpen } = useContext(GlobalContext)
  const theme = useTheme()
  const isPhone = useMediaQuery(theme.breakpoints.between('xs', 'sm'))
  const { data, isLoading, error } = useSWAPI()
  const [filters, setFilters] = useState<FilterInputs | null>(null)
  const [characters, setCharacters] = useState<Character[]>([])

  useEffect(() => {
    if (filters && data) {
      setCharacters(filterCharacters(data.characters, filters))
    } else if (data) {
      setCharacters(data.characters)
    }
  }, [filters, data])

  return (
    <Layout bgImage={BgImage}>
      <Stack direction='row' height='100%' flexGrow={1}>
        <FilterForm
          setFilters={setFilters}
          species={data ? data.species : []}
          films={data ? data.films : []}
        />
        <Container sx={{ paddingY: 10 }}>
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
          <CardsWrapper
            isLoading={isLoading}
            error={error}
            characters={characters}
            styles={{ marginTop: 15 }}
          />
        </Container>
      </Stack>
    </Layout>
  )
}

export default Main
