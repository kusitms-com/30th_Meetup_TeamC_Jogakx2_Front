import { Button, IconLeft, IconRight } from '@/components'
import { format } from 'date-fns'

interface OverviewHeaderProps {
  currentDate: Date
  goToPreviousMonth: () => void
  goToNextMonth: () => void
}

export default function OverviewHeader({
  currentDate,
  goToPreviousMonth,
  goToNextMonth,
}: OverviewHeaderProps) {
  const today = new Date()

  const canMoveToNextMonth =
    currentDate.getFullYear() < today.getFullYear() ||
    (currentDate.getFullYear() === today.getFullYear() &&
      currentDate.getMonth() < today.getMonth())
  return (
    <>
      <div className="flex gap-15 items-center px-35">
        <Button
          onClick={goToPreviousMonth}
          className="bg-primary_foundation-5 w-24 h-24 rounded-8"
        >
          <IconLeft height={13} />
        </Button>
        <span className="text-18 font-[500] underline underline-offset-4">
          {format(currentDate, 'yyyy년 MM월')}
        </span>
        <Button
          onClick={goToNextMonth}
          className="bg-primary_foundation-5 w-24 h-24 rounded-8"
          disabled={!canMoveToNextMonth}
        >
          <IconRight height={13} color={!canMoveToNextMonth ? '#D1D1D3' : ''} />
        </Button>
      </div>
    </>
  )
}
