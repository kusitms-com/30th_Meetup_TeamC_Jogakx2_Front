import { http } from '@/api'
import { CalendarResponse } from './types'

export const getCalendarData = (year: number, month: number) => {
  return http.get<CalendarResponse>({
    url: `/activity-calendar?year=${year}&month=${month}`,
  })
}
