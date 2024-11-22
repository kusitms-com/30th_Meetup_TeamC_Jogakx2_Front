'use client'

import { generateContext } from '@/react-utils'
import { StrictPropsWithChildren } from '@/types'
import { CalendarResponse } from './types'
import { useGetCalendarData } from './queries'

export const [CalendarProvider, useCalendarContext] =
  generateContext<CalendarResponse>({
    name: 'homeData',
  })

interface CalendarFetcherProps extends StrictPropsWithChildren {
  year: number
  month: number
}

export function CalendarFetcher({
  children,
  year,
  month,
}: CalendarFetcherProps) {
  const { data } = useGetCalendarData(year, month)
  return <CalendarProvider {...data}>{children}</CalendarProvider>
}
