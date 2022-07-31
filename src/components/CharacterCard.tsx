import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import React, { FC, useState } from 'react'
import { Character } from '../types'
import ModalCharacterDetails from './ModalCharacterDetails'

interface Props {
  character: Character
}

const CharacterCard: FC<Props> = (props) => {
  const { character } = props
  const { imageUrl, name } = character
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <>
      <Card sx={{ width: 250 }}>
        <CardActionArea onClick={() => setIsModalOpen(true)}>
          <CardMedia
            component='img'
            height='150'
            width='100%'
            image={imageUrl}
            alt='green iguana'
          />
          <CardContent>
            <Typography variant='h5' component='div' sx={{ textAlign: 'center' }}>
              {name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <ModalCharacterDetails
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        character={character}
      />
    </>
  )
}

export default CharacterCard
