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
        const responseError = await response.json() // 로컬 변수 이름 변경
        throw new Error(responseError.message || 'Something went wrong')
      }

      const result = await response.json()
      setData(result)
    } catch (fetchError: any) {
      // 로컬 변수 이름 변경
      setError(fetchError.message || 'Failed to fetch data')
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
