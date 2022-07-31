import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  Container,
  Fab,
  FormControlLabel,
  FormGroup,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import React, { Dispatch, FC, SetStateAction, useContext } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { GlobalContext } from '../../context/global'
import { FetchedFilm, FetchedSpecies, FilterInputs } from '../../types'
import AccordionItem from '../ui/AccordionItem'
import FilterFormWrapper from './FilterFormWrapper'
import FilterFromTo from './FilterFromTo'
import CloseIcon from '@mui/icons-material/Close'

interface Props {
  species: FetchedSpecies[]
  films: FetchedFilm[]
  setFilters: Dispatch<SetStateAction<FilterInputs | null>>
}

const FilterForm: FC<Props> = (props) => {
  const { species, films, setFilters } = props
  const { register, handleSubmit } = useForm<FilterInputs>()
  const { setIsFilterFormOpen: setIsOpen } = useContext(GlobalContext)
  const theme = useTheme()
  const isPhone = useMediaQuery(theme.breakpoints.between('xs', 'sm'))

  const onSubmit: SubmitHandler<FilterInputs> = (data) => {
    setIsOpen(false)
    setFilters(data)
  }

  return (
    <FilterFormWrapper>
      <Container>
        <Box sx={{ position: 'relative' }}>
          {isPhone && (
            <Fab
              size='small'
              onClick={() => setIsOpen(false)}
              sx={{
                position: 'absolute',
                right: 0,
                top: 0,
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
              }}
            >
              <CloseIcon />
            </Fab>
          )}

          <Typography variant='h5' sx={{ paddingTop: 3, paddingBottom: 1 }}>
            Filters
          </Typography>
          <Stack gap='10px'>
            <AccordionItem summary='Starred in a movie'>
              <Autocomplete
                options={films.map((film) => film.title)}
                renderInput={(params) => (
                  <TextField variant='standard' {...register('film')} {...params} label='Movie' />
                )}
              />
            </AccordionItem>
            <AccordionItem summary='Species'>
              <FormGroup {...register('species')}>
                {species.map(({ name }) => (
                  <FormControlLabel
                    key={name}
                    control={<Checkbox value={name} {...register('species')} />}
                    label={name}
                  />
                ))}
              </FormGroup>
            </AccordionItem>
            <AccordionItem summary='Height'>
              <FilterFromTo register={register} optionName='height' />
            </AccordionItem>
            <AccordionItem summary='Mass'>
              <FilterFromTo register={register} optionName='mass' />
            </AccordionItem>
          </Stack>
          <Button
            onClick={handleSubmit(onSubmit)}
            variant='contained'
            size='large'
            fullWidth
            sx={{ marginTop: 3 }}
          >
            Show
          </Button>
        </Box>
      </Container>
    </FilterFormWrapper>
  )
}

export default FilterForm
