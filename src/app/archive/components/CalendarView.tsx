import { useCalendarContext } from '../api/fetcher'
import Activities from './Activities'
import Calendar from './Calendar/Calendar'
import useCalendar from './Calendar/useCalendar'

interface CalendarViewProps {
  currentDate: Date
}

export default function CalendarView({ currentDate }: CalendarViewProps) {
  const { days } = useCalendar(currentDate)

  const { monthlyActivities } = useCalendarContext()
  return (
    <>
      <div className="p-24">
        <Calendar
          currentDate={currentDate}
          activities={monthlyActivities}
          days={days}
          selectedDate={null}
          onDateClick={(date) => console.log(date)}
        />
      </div>
      <Activities />
    </>
  )
}
