import { useState, useEffect } from 'react'

export default function useFetch<T>(
  url: string,
  options?: RequestInit,
): {
  data: T | null
  error: string | null
  loading: boolean
  refetch: () => void
} {
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  const fetchData = async () => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch(url, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          ...options?.headers,
        },
      })

      if (!response.ok) {
        // Response error 타입 지정
        const responseError: { message: string } = await response.json()
        throw new Error(responseError.message || 'Something went wrong')
      }

      const result: T = await response.json() // Result 타입 지정
      setData(result)
    } catch (fetchError) {
      if (fetchError instanceof Error) {
        setError(fetchError.message)
      } else {
        setError('Failed to fetch data')
      }
    } finally {
      setLoading(false)
    }
  }

  // Initial fetch
  useEffect(() => {
    fetchData()
  }, [url])

  return { data, error, loading, refetch: fetchData }
}
