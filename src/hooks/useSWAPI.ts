import { useEffect, useState } from 'react'
import fetchCharacters from '../api/fetchCharacters'
import fetchImages from '../api/fetchImages'
import fetchFilms from '../api/fetchFilms'
import fetchStarships from '../api/fetchStarships'
import fetchSpecies from '../api/fetchSpecies'
import { getEditedCharacters } from '../helpers/characters'
import { Character, FetchedFilm, FetchedSpecies } from '../types'

type SWAPIData = {
  characters: Character[]
  films: FetchedFilm[]
  species: FetchedSpecies[]
} | null

const useSWAPI = () => {
  const [data, setData] = useState<SWAPIData>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<null | Error>(null)

  useEffect(() => {
    ;(async () => {
      try {
        const characters = await fetchCharacters()
        const films = await fetchFilms()
        const images = await fetchImages()
        const starships = await fetchStarships()
        const species = await fetchSpecies()
        setData({
          characters: getEditedCharacters({ characters, species, films, images, starships }),
          films,
          species,
        })
      } catch (e: any) {
        setError(e)
      } finally {
        setIsLoading(false)
      }
    })()
  }, [])

  return { data, isLoading, error }
}

export default useSWAPI
