import { Button, IconLeft, IconRight } from '@/components'
import Modal from '@/components/common/Modal'
import MonthSelect from '@/components/ui/MonthSelect'
import { format } from 'date-fns'
import { useEffect, useState } from 'react'
import { useKeywordsContext } from '../api/fetcher'

interface OverviewHeaderProps {
  currentDate: Date
  setCurrentDate: (date: Date) => void
  goToPreviousMonth: () => void
  goToNextMonth: () => void
}

export default function OverviewHeaderForKeyword({
  currentDate,
  setCurrentDate,
  goToPreviousMonth,
  goToNextMonth,
}: OverviewHeaderProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { monthlyTotalActivityCount } =
    useKeywordsContext().data.monthlySavedTimeAndActivityCount

  const today = new Date()

  const canMoveToNextMonth =
    currentDate.getFullYear() < today.getFullYear() ||
    (currentDate.getFullYear() === today.getFullYear() &&
      currentDate.getMonth() < today.getMonth())

  useEffect(() => {
    setIsModalOpen(false)
  }, [currentDate])

  return (
    <>
      <header className="flex flex-row justify-between  px-35">
        <div className="flex gap-15 items-center">
          <Button
            onClick={goToPreviousMonth}
            className="bg-primary_foundation-5 w-24 h-24 rounded-8"
          >
            <IconLeft height={13} />
          </Button>
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="text-18 font-[500] underline underline-offset-4"
          >
            {format(currentDate, 'yyyy년 MM월')}
          </button>
          <Button
            onClick={goToNextMonth}
            className="bg-primary_foundation-5 w-24 h-24 rounded-8"
            disabled={!canMoveToNextMonth}
          >
            <IconRight
              height={13}
              color={!canMoveToNextMonth ? '#D1D1D3' : ''}
            />
          </Button>
        </div>

        <span className="text-primary_foundation-60">
          총 {monthlyTotalActivityCount}개의 조각
        </span>
      </header>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="월 선택하기"
        className="max-h-350 overflow-auto"
      >
        <MonthSelect
          currentDate={currentDate}
          setCurrentDate={setCurrentDate}
        />
      </Modal>
    </>
  )
}
