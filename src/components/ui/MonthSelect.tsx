import useUserInfo from '@/store/useUserInfo'
import { addMonths, differenceInMonths, format } from 'date-fns'

interface MonthSelectProps {
  currentDate: Date
  setCurrentDate: (date: Date) => void
}

export default function MonthSelect({
  currentDate,
  setCurrentDate,
}: MonthSelectProps) {
  const today = new Date()
  const { registrationDate } = useUserInfo().userInfo

  const months = Array.from(
    { length: differenceInMonths(today, registrationDate) + 2 },
    (_, i) => addMonths(registrationDate, i - 1),
  )

  const handleMonthSelect = (date: Date) => {
    setCurrentDate(date)
  }

  return (
    <div className="flex flex-col">
      {months.map((month) => (
        <button
          type="button"
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
