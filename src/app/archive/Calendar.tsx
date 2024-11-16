import { format, isSameDay } from 'date-fns'
import useCalendar from './Calendar/useCalendar'
import { cn } from '@/util'

interface CalendarProps {
  activities: { date: string; count: number }[]
  selectedDate: Date | null
  setSelectedDate: (date: Date) => void
}

function Calendar({
  activities,
  selectedDate,
  setSelectedDate,
}: CalendarProps) {
  const { days, currentDate, goToPreviousMonth, goToNextMonth } =
    useCalendar(activities)

  const handleDateClick = (date: Date) => {
    setSelectedDate(date)
  }

  return (
    <div className="flex flex-col items-center bg-white p-20 w-full max-w-md mx-auto">
      <div className="flex justify-between w-full mb-4 items-center">
        <div className="flex justify-between items-center space-x-4">
          <button onClick={goToPreviousMonth} className="text-gray-500">
            &lt;
          </button>
          <h2 className="text-lg md:text-xl font-semibold">
            {format(currentDate, 'yyyy년 MM월')}
          </h2>
          <button onClick={goToNextMonth} className="text-gray-500">
            &gt;
          </button>
        </div>
        <span className="text-sm md:text-base text-gray-500">조각</span>
      </div>

      <div className="grid grid-cols-7 gap-4 w-full text-14 text-center text-gray-500">
        {['월', '화', '수', '목', '금', '토', '일'].map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-5 w-full mt-2 text-16">
        {days.map((day, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              onClick={() => handleDateClick(day.date)}
              className={cn(
                'flex w-full  items-center bg-gray-100 justify-center aspect-square rounded-16 cursor-pointer',
                day.isCurrentMonth && 'bg-white',
                selectedDate &&
                  isSameDay(day.date, selectedDate) &&
                  'bg-blue-500 text-white',
                day.activity && 'bg-red-100 text-red-600',
                day.isCurrentMonth && 'text-gray-900',
              )}
            >
              {format(day.date, 'd')}
            </div>
            {day.activity && (
              <div className="text-10 text-red-500">+{day.activity.count}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Calendar
