import { BASE_URL_SWAPI } from '../constraints'
import { FetchedSpecies } from '../types'

const fetchSpecies: () => Promise<FetchedSpecies[]> = async () => {
  const res = await fetch(`${BASE_URL_SWAPI}/species`)
  const { results } = await res.json()
  return results
}

export default fetchSpecies
