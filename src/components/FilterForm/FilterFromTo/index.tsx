import { Stack, TextField } from '@mui/material'
import React, { FC } from 'react'
import { UseFormRegister } from 'react-hook-form'
import { FilterInputs } from '../../../types'

interface Props<T> {
  register: UseFormRegister<T>
  optionName: 'height' | 'mass'
}

const Index: FC<Props<FilterInputs>> = (props) => {
  const { register, optionName } = props
  return (
    <Stack direction='row' gap={2}>
      <TextField
        type='number'
        label='min'
        {...register(`${optionName}.from`, { valueAsNumber: true })}
      />
      <TextField
        type='number'
        label='max'
        {...register(`${optionName}.to`, { valueAsNumber: true })}
      />
    </Stack>
  )
}

export default Index
