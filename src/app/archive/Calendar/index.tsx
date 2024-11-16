import { format, isSameDay } from 'date-fns'
import useCalendar from './useCalendar'

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
    <div className="flex flex-col items-center bg-white p-30 w-full">
      <div className="flex justify-between w-full mb-10">
        <button onClick={goToPreviousMonth} className="text-gray-500">
          &lt;
        </button>
        <h2 className="text-xl font-semibold">
          {format(currentDate, 'yyyy년 MM월')}
        </h2>
        <button onClick={goToNextMonth} className="text-gray-500">
          &gt;
        </button>
      </div>

      <div className="grid grid-cols-7 gap-2">
        {['월', '화', '수', '목', '금', '토', '일'].map((day) => (
          <div key={day} className="text-center text-gray-500">
            {day}
          </div>
        ))}

        {days.map((day, index) => (
          <div
            key={index}
            onClick={() => handleDateClick(day.date)}
            className={`flex items-center justify-center h-12 rounded-lg cursor-pointer ${
              day.isCurrentMonth ? 'bg-white' : 'bg-gray-100'
            } ${
              selectedDate && isSameDay(day.date, selectedDate)
                ? 'bg-blue-500 text-white' // 선택된 날짜 스타일
                : ''
            } ${
              day.activity
                ? 'bg-red-100 text-red-600'
                : day.isCurrentMonth
                  ? 'text-gray-900'
                  : 'text-gray-400'
            }`}
          >
            <div className="relative">
              {format(day.date, 'd')}
              {day.activity && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-xs text-red-500">
                  +{day.activity.count}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Calendar
