export interface FilterInputs {
  film: string | null
  species: string[]
  height: {
    from: number | null
    to: number | null
  }
  mass: {
    from: number | null
    to: number | null
  }
}

export interface FetchedCharacter {
  films: string[]
  height: string
  mass: string
  name: string
  species: string[]
  starships: string[]
  url: string
}

export interface FetchedFilm {
  characters: string[]
  url: string
  title: string
  episode_id: number
}

export interface FetchedStarship {
  name: string
  url: string
}

export interface FetchedSpecies {
  name: string
  url: string
  people: string
}

export interface FetchedImage {
  webformatURL: string
}

export interface FetchedImagesResult {
  hits: FetchedImage[]
}

export interface Character {
  imageUrl: string
  height: string
  mass: string
  name: string
  url: string
  films: FetchedFilm[]
  species: FetchedSpecies[]
  starships: FetchedStarship[]
}
