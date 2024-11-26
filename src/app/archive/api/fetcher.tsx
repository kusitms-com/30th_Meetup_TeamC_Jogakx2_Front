'use client'

import { generateContext } from '@/react-utils'
import { StrictPropsWithChildren } from '@/types'
import { CalendarResponse, KeywordsResponse } from './types'
import { useGetCalendarData, useGetKeywordsData } from './queries'

export const [CalendarProvider, useCalendarContext] =
  generateContext<CalendarResponse>({
    name: 'calendar',
  })

export const [KeywordsProvider, useKeywordsContext] = generateContext<{
  data: KeywordsResponse
}>({
  name: 'Keywords',
})

interface CalendarFetcherProps extends StrictPropsWithChildren {
  year: number
  month: number
}

interface KeywordsFetcherProps extends StrictPropsWithChildren {
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

export function KeywordsFetcher({
  children,
  year,
  month,
}: KeywordsFetcherProps) {
  const data = useGetKeywordsData(year, month)
  return <KeywordsProvider {...data}>{children}</KeywordsProvider>
}
