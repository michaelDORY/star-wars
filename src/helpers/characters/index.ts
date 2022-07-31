import {
  Character,
  FetchedCharacter,
  FetchedFilm,
  FetchedImage,
  FetchedSpecies,
  FetchedStarship,
} from '../../types'

// const getMappedFilms = (films: FetchedFilm[]) => {
//   return films.map((film) => ({ [film.url]: film } as { [key: string]: FetchedFilm }))
// }
//
// const getMappedSpecies = (species: FetchedSpecies[]) => {
//   return species.map((species) => ({ [species.url]: species } as { [key: string]: FetchedSpecies }))
// }
//
// const getMappedStarships = (starships: FetchedStarship[]) => {
//   return starships.map(
//     (starship) => ({ [starship.url]: starship } as { [key: string]: FetchedStarship }),
//   )
// }

interface getEditedCharactersProps {
  characters: FetchedCharacter[]
  films: FetchedFilm[]
  images: FetchedImage[]
  starships: FetchedStarship[]
  species: FetchedSpecies[]
}

type getEditedCharactersType = (props: getEditedCharactersProps) => Character[]

export const getEditedCharacters: getEditedCharactersType = (props) => {
  const { characters, films, starships, species, images } = props

  // const mappedFilms = getMappedFilms(films)
  // const mappedStarships = getMappedStarships(starships)
  // const mappedSpecies = getMappedSpecies(species)

  return characters.map((character, index) => {
    return {
      ...character,
      films: films.filter((film) => character.films.includes(film.url)),
      starships: starships.filter((starship) => character.starships.includes(starship.url)),
      species: species.filter((species) => character.species.includes(species.url)),
      imageUrl: images[index].webformatURL,
    }
  })
}
