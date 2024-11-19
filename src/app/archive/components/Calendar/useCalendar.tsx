import { useEffect, useState } from 'react'
import {
  addDays,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
} from 'date-fns'

function useCalendar(viewingDate: Date) {
  const [calendarDays, setCalendarDays] = useState<Date[]>([])

  const generateMonthDays = (date: Date): Date[] => {
    const monthStart = startOfMonth(date)
    const monthEnd = endOfMonth(monthStart)
    const calendarStart = startOfWeek(monthStart, { weekStartsOn: 1 })
    const calendarEnd = endOfWeek(monthEnd, { weekStartsOn: 1 })

    const monthDays: Date[] = []
    let pointerDate = calendarStart

    while (pointerDate <= calendarEnd) {
      monthDays.push(pointerDate)
      pointerDate = addDays(pointerDate, 1)
    }

    return monthDays
  }

  useEffect(() => {
    const monthDays = generateMonthDays(viewingDate)
    setCalendarDays(monthDays)
  }, [viewingDate])

  return {
    days: calendarDays,
  }
}

export default useCalendar
