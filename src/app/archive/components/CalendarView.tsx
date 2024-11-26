import { useState } from 'react'
import { useCalendarContext } from '../api/fetcher'
import Activities from './Activities'
import Calendar from './Calendar/Calendar'
import useCalendar from './Calendar/useCalendar'
import { FooterButtons } from '@/components'

interface CalendarViewProps {
  currentDate: Date
}

export default function CalendarView({ currentDate }: CalendarViewProps) {
  const { days } = useCalendar(currentDate)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>()

  const { monthlyActivities } = useCalendarContext()
  return (
    <>
      <div className="p-24">
        <Calendar
          currentDate={currentDate}
          activities={monthlyActivities}
          days={days}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      </div>
      <Activities selectedDate={selectedDate} />
      <FooterButtons />
    </>
  )
}
