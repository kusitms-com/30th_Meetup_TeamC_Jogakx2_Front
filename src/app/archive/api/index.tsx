import { http } from '@/api'
import { CalendarResponse, KeywordsResponse } from './types'

export const getCalendarData = (year: number, month: number) => {
  return http.get<CalendarResponse>({
    url: `/activity-calendar?year=${year}&month=${month}`,
  })
}

export const getKeywordsData = (year: number, month: number) => {
  return http.get<KeywordsResponse>({
    url: `/activities/overview?year=${year}&month=${month}`,
  })
}
