import { Stack, TextField } from '@mui/material'
import React, { FC } from 'react'
import { UseFormRegister } from 'react-hook-form'
import { FilterInputs } from '../../types'

interface Props<T> {
  register: UseFormRegister<T>
  optionName: string
}

const FilterFromTo: FC<Props<FilterInputs>> = (props) => {
  const { register, optionName } = props
  return (
    <Stack direction='row' gap={2}>
      {/* @ts-ignore */}
      <TextField type='number' label='min' {...register(`${optionName}.from`)} />
      {/* @ts-ignore */}
      <TextField type='number' label='max' {...register(`${optionName}.to`)} />
    </Stack>
  )
}

export default FilterFromTo
