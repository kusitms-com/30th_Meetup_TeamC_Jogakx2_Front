'use client'

import { Clock } from '@/components'
import useUserInfo from '@/store/useUserInfo'
import { useGetCalendarData } from '../api/queries'

interface ArchiveTotalProps {
  year: number
  month: number
}
export default function ArchiveTotal({ year, month }: ArchiveTotalProps) {
  const { nickname } = useUserInfo().userInfo

  const { totalSavedTime } = useGetCalendarData(year, month).data.summary

  return (
    <div className="flex flex-col mt-24 mb-40">
      <p className="text-primary_foundation-60 text-14">
        {nickname}님의 모은 시간
      </p>
      <div className="flex flex-col text-24 font-[500]">
        <p className="flex items-center">
          이달에
          <span className="ml-12 mr-4 flex gap-4 items-center text-accent_100 text-28 font-[600] leading-34">
            <Clock color="#FF4F38" />
            {totalSavedTime}분
          </span>
          의
        </p>
        <p>시간 조각을 모았어요</p>
      </div>
    </div>
  )
}
