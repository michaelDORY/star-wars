import { BASE_URL_SWAPI } from '../constraints'
import { FetchedStarship } from '../types'

const fetchStarships: () => Promise<FetchedStarship[]> = async () => {
  let starships: FetchedStarship[] = []
  let isLastPage = false

  for (let i = 1; !isLastPage; i++) {
    const res = await fetch(`${BASE_URL_SWAPI}/starships?page=${i}`)
    const { results, next } = await res.json()
    starships = starships.concat(results)
    isLastPage = !next
  }

  return starships
}

export default fetchStarships
