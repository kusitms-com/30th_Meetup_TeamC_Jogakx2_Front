import { Button, IconLeft, IconRight } from '@/components'
import Modal from '@/components/common/Modal'
import MonthSelect from '@/components/ui/MonthSelect'
import { format, set } from 'date-fns'
import { useEffect, useState } from 'react'

interface OverviewHeaderProps {
  currentDate: Date
  setCurrentDate: (date: Date) => void
  goToPreviousMonth: () => void
  goToNextMonth: () => void
}

export default function OverviewHeader({
  currentDate,
  setCurrentDate,
  goToPreviousMonth,
  goToNextMonth,
}: OverviewHeaderProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const today = new Date()
  const registrationDate = new Date(2023, 4, 1)

  const canMoveToNextMonth =
    currentDate.getFullYear() < today.getFullYear() ||
    (currentDate.getFullYear() === today.getFullYear() &&
      currentDate.getMonth() < today.getMonth())

  useEffect(() => {
    setIsModalOpen(false)
  }, [currentDate])

  return (
    <>
      <div className="flex gap-15 items-center px-35">
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
          <IconRight height={13} color={!canMoveToNextMonth ? '#D1D1D3' : ''} />
        </Button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="월 선택하기"
        className="max-h-350 overflow-auto"
      >
        <MonthSelect
          currentDate={currentDate}
          setCurrentDate={setCurrentDate}
          startDate={registrationDate}
        />
      </Modal>
    </>
  )
}
