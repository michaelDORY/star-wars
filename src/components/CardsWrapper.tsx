import { CircularProgress, Stack, Typography, Grid } from '@mui/material'
import React from 'react'
import useFetch from '../hooks/useFetch'
import fetchCharacters from '../server/characters/fetchCharacters'

const CardsWrapper = () => {
  const { data, isLoading, error } = useFetch(fetchCharacters)
  if (isLoading)
    return (
      <Stack alignItems='center'>
        <CircularProgress size={60} />
      </Stack>
    )
  if (error) return <Typography variant='body1'>{error.toString()}</Typography>
  return (
    <Grid container>
      {data!.map(() => (
        <Grid item key={Math.random()}>
          {'dksdjskdj'}
        </Grid>
      ))}
    </Grid>
  )
}

export default CardsWrapper
