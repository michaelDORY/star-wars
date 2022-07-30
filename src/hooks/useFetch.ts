import { useEffect, useState } from 'react'

const useFetch = (callback: () => Promise<any>) => {
  const [data, setData] = useState<null | any[]>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<null | Error>(null)

  useEffect(() => {
    ;(async () => {
      try {
        const result = await callback()
        setData(result)
      } catch (e: any) {
        setError(e)
      } finally {
        setIsLoading(false)
      }
    })()
  }, [callback])

  return { data, isLoading, error }
}

export default useFetch
