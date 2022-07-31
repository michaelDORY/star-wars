import { CircularProgress, Stack, Typography, Grid } from '@mui/material'
import React, { FC } from 'react'
import { Character } from '../../types'
import CharacterCard from '../CharacterCard'

interface Props {
  styles: object
  isLoading: boolean
  error: Error | null
  characters: Character[]
}

const CardsWrapper: FC<Props> = (props) => {
  const { styles, isLoading, error, characters } = props

  if (isLoading)
    return (
      <Stack alignItems='center'>
        <CircularProgress size={60} />
      </Stack>
    )
  if (error) return <Typography variant='body1'>Something went wrong(</Typography>

  if (!characters.length) return <Typography variant='h5'>No characters found</Typography>

  return (
    <Grid container justifyContent='center' gap={3} style={{ ...styles }}>
      {characters!.map((character) => (
        <Grid item key={Math.random()}>
          <CharacterCard character={character} />
        </Grid>
      ))}
    </Grid>
  )
}

export default CardsWrapper
