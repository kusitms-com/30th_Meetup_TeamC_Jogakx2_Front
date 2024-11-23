import { addMonths, differenceInMonths, format } from 'date-fns'

interface MonthSelectProps {
  currentDate: Date
  setCurrentDate: (date: Date) => void
  startDate: Date
}

export default function MonthSelect({
  currentDate,
  setCurrentDate,
  startDate,
}: MonthSelectProps) {

  const today = new Date()

  const months = Array.from(
    { length: differenceInMonths(today, startDate) + 2 },
    (_, i) => addMonths(startDate, i - 1),
  )

  const handleMonthSelect = (date: Date) => {
    setCurrentDate(date)
  }

  return (
    <div className="flex flex-col">
      {months.map((month) => (
        <button
          key={month.toISOString()}
          onClick={() => handleMonthSelect(month)}
          className="flex justify-between items-center h-48 py-12 rounded-lg"
        >
          {format(month, 'yyyy년 MM월')}
          {format(month, 'yyyy-MM') === format(currentDate, 'yyyy-MM') && (
            <span className="text-accent-100">✔</span>
          )}
        </button>
      ))}
    </div>
  )
}
