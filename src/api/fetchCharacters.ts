import { BASE_URL_SWAPI } from '../constraints'
import { FetchedCharacter } from '../types'

const fetchCharacters: () => Promise<FetchedCharacter[]> = async () => {
  const res = await fetch(`${BASE_URL_SWAPI}/people`)
  const { results } = await res.json()
  return results
}

export default fetchCharacters
