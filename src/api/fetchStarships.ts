import { BASE_URL_SWAPI } from '../constraints'
import { FetchedStarship } from '../types'

const fetchStarships: () => Promise<FetchedStarship[]> = async () => {
  const res = await fetch(`${BASE_URL_SWAPI}/starships`)
  const { results } = await res.json()
  return results
}

export default fetchStarships
