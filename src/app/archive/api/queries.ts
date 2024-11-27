import { useSuspenseQuery } from '@tanstack/react-query'
import { getCalendarData, getKeywordsData } from '.'

export const useGetCalendarData = (year: number, month: number) =>
  useSuspenseQuery({
    queryKey: ['calendar', year, month],
    queryFn: () => getCalendarData(year, month),
    select: (data) => data.data,
  })

export const useGetKeywordsData = (year: number, month: number) =>
  useSuspenseQuery({
    queryKey: ['Keywords', year, month],
    queryFn: () => getKeywordsData(year, month),
    select: (data) => data.data,
  })
