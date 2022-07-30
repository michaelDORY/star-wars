import { Stack, TextField } from '@mui/material'
import React, { FC } from 'react'
import { UseFormRegister } from 'react-hook-form'
import { FilterInputs } from './FilterForm'

interface Props<T> {
  register: UseFormRegister<T>
  optionName: string
}

const FilterFromTo: FC<Props<FilterInputs>> = (props) => {
  const { register, optionName } = props
  return (
    <Stack direction='row' gap={2}>
      {/* @ts-ignore */}
      <TextField type='number' label='From' {...register(`${optionName}.from`)} />
      {/* @ts-ignore */}
      <TextField type='number' label='To' {...register(`${optionName}.to`)} />
    </Stack>
  )
}

export default FilterFromTo
