import { Character, FilterInputs } from '../../types'

const isParamInRange = (param: number, from: number | null, to: number | null) => {
  if (from && to) {
    return param >= from && param <= to
  } else if (from) {
    return param >= from
  } else if (to) {
    return param <= to
  }
  return true
}

type filterCharactersType = (characters: Character[], filters: FilterInputs) => Character[]

const filterCharacters: filterCharactersType = (characters, filters) => {
  if (filters) {
    const { mass, height, species, film } = filters

    return characters.filter((character) => {
      const characterMass = Number.parseFloat(character.mass)
      const characterHeight = Number.parseFloat(character.height)
      const isProperHeight = isParamInRange(characterHeight, height.from, height.to)
      const isProperMass = isParamInRange(characterMass, mass.from, mass.to)
      const isProperSpecies = species.length
        ? character.species.some((elem) => species.includes(elem.name))
        : true
      const isProperFilm = film ? character.films.some((elem) => elem.title === film) : true

      return isProperHeight && isProperMass && isProperSpecies && isProperFilm
    })
  }
  return characters
}

export default filterCharacters
