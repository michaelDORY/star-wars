import { Box, Modal, Stack } from '@mui/material'
import React, { Dispatch, FC, SetStateAction } from 'react'
import { Character } from '../../types'
import ModalPaper from '../ui/ModalPaper'
import RowKeyValue from '../ui/RowKeyValue'

interface Props {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  character: Character
}

const ModalCharacterDetails: FC<Props> = (props) => {
  const { isOpen, setIsOpen, character } = props
  const { imageUrl, name, species, films, starships } = character
  const characterInfo = {
    Name: name,
    Species: species.map(({ name }) => name),
    Movies: films.map(({ title }) => title),
    Spaceships: starships.map(({ name }) => name),
  }

  return (
    <Modal
      open={isOpen}
      onClose={() => setIsOpen(false)}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
      componentsProps={{
        backdrop: {
          style: {
            background: 'linear-gradient(rgba(5,9,80,0.87), rgba(234,207,0,0.87))',
          },
        },
      }}
      sx={{ overflowY: 'auto', overflowX: 'hidden' }}
    >
      <ModalPaper setIsOpen={setIsOpen}>
        <Stack direction='column' gap={2}>
          <Box
            sx={{
              overflow: 'hidden',
              borderRadius: 5,
              height: 150,
              '& > img': {
                objectFit: 'cover',
                width: '100%',
                height: '100%',
              },
            }}
          >
            <img src={imageUrl} alt={name} />
          </Box>
          {Object.entries(characterInfo).map(([key, value]: [string, string | string[]]) => {
            return <RowKeyValue key={key} keyHeader={key} value={value} />
          })}
        </Stack>
      </ModalPaper>
    </Modal>
  )
}

export default ModalCharacterDetails
