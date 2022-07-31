import { BASE_URL_IMAGES } from '../constraints'
import { FetchedImage, FetchedImagesResult } from '../types'

const fetchImages: () => Promise<FetchedImage[]> = async () => {
  const res = await fetch(
    `${BASE_URL_IMAGES}?key=${process.env.REACT_APP_API_IMAGES_KEY}&per-page=60`,
  )
  const { hits } = (await res.json()) as FetchedImagesResult
  return hits
}

export default fetchImages
