import { Stack, Typography } from '@mui/material'
import React, { FC } from 'react'

interface Props {
  keyHeader: string
  value: string | string[]
}

const RowKeyValue: FC<Props> = (props) => {
  const { keyHeader, value } = props
  return (
    <Stack direction='row' gap={2} alignItems='baseline' justifyContent='space-between'>
      <Typography variant='h6' color='primary'>
        {keyHeader + ':'}
      </Typography>
      <Typography variant='body1' sx={{ textAlign: 'right', maxWidth: 200 }}>
        {Array.isArray(value) ? value.join(', ') : value}
      </Typography>
    </Stack>
  )
}

export default RowKeyValue
