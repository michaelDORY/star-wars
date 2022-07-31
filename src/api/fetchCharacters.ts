import { BASE_URL_SWAPI } from '../constraints'
import { FetchedCharacter } from '../types'

const fetchCharacters: () => Promise<FetchedCharacter[]> = async () => {
  let characters: FetchedCharacter[] = []
  let isLastPage = false

  for (let i = 1; !isLastPage; i++) {
    const res = await fetch(`${BASE_URL_SWAPI}/people?page=${i}`)
    const { results, next } = await res.json()
    characters = characters.concat(results)
    isLastPage = !next
  }

  return characters
}

export default fetchCharacters
