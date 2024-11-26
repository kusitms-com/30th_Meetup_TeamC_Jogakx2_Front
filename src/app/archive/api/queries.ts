import { useSuspenseQuery } from '@tanstack/react-query'
import { getCalendarData } from '.'

export const useGetCalendarData = (year: number, month: number) =>
  useSuspenseQuery({
    queryKey: ['calendar', year, month],
    queryFn: () => getCalendarData(year, month),
    select: (data) => data.data,
  })
