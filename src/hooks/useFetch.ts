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
        const error = await response.json()
        throw new Error(error.message || 'Something went wrong')
      }

      const result = await response.json()
      setData(result)
    } catch (err: any) {
      setError(err.message || 'Failed to fetch data')
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
