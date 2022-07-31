import { BASE_URL_SWAPI } from '../constraints'
import { FetchedFilm } from '../types'

const fetchFilms: () => Promise<FetchedFilm[]> = async () => {
  const res = await fetch(`${BASE_URL_SWAPI}/films`)
  const { results } = await res.json()
  return results
}

export default fetchFilms
