import { useState, useEffect } from 'react'
import {
  parseISO,
  isSameMonth,
  isSameDay,
  addDays,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addMonths,
  subMonths,
} from 'date-fns'

export interface Activity {
  date: string
  count: number
}

interface CalendarDay {
  date: Date
  activity?: Activity
  isCurrentMonth: boolean
}

const getMonthDays = (
  year: number,
  month: number,
  activities: Activity[],
): CalendarDay[] => {
  const monthStart = startOfMonth(new Date(year, month))
  const monthEnd = endOfMonth(monthStart)
  const calendarStart = startOfWeek(monthStart, { weekStartsOn: 1 })
  const calendarEnd = endOfWeek(monthEnd, { weekStartsOn: 1 })

  const days: CalendarDay[] = []
  let currentDate = calendarStart

  while (currentDate <= calendarEnd) {
    const activity = activities.find((activity) =>
      isSameDay(parseISO(activity.date), currentDate),
    )

    days.push({
      date: currentDate,
      activity,
      isCurrentMonth: isSameMonth(currentDate, monthStart),
    })

    currentDate = addDays(currentDate, 1)
  }

  return days
}

function useCalendar(activities: Activity[]) {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [days, setDays] = useState<CalendarDay[]>([])
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  useEffect(() => {
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    const days = getMonthDays(year, month, activities)
    setDays(days)
  }, [currentDate, activities])

  const goToPreviousMonth = () => {
    setCurrentDate((prevDate) => subMonths(prevDate, 1))
  }

  const goToNextMonth = () => {
    setCurrentDate((prevDate) => addMonths(prevDate, 1))
  }

  return {
    days,
    currentDate,
    selectedDate,
    setSelectedDate,
    goToPreviousMonth,
    goToNextMonth,
  }
}

export default useCalendar
