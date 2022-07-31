import { BASE_URL_SWAPI } from '../constraints'
import { FetchedFilm } from '../types'

const fetchFilms: () => Promise<FetchedFilm[]> = async () => {
  let films: FetchedFilm[] = []
  let isLastPage = false

  for (let i = 1; !isLastPage; i++) {
    const res = await fetch(`${BASE_URL_SWAPI}/films?page=${i}`)
    const { results, next } = await res.json()
    films = films.concat(results)
    isLastPage = !next
  }

  return films
}

export default fetchFilms
