import { BASE_URL_SWAPI } from '../constraints'
import { FetchedSpecies } from '../types'

const fetchSpecies: () => Promise<FetchedSpecies[]> = async () => {
  let species: FetchedSpecies[] = []
  let isLastPage = false

  for (let i = 1; !isLastPage; i++) {
    const res = await fetch(`${BASE_URL_SWAPI}/species?page=${i}`)
    const { results, next } = await res.json()
    species = species.concat(results)
    isLastPage = !next
  }

  return species
}

export default fetchSpecies
