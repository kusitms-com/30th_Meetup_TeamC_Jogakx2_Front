'use client'

import { useState } from 'react'
import { setErrorProps } from '../types/types'
import { Input } from '@/components/common'
import { useActivityStore } from '@/store/activityStore'

export default function ChoiceTime({ setError }: setErrorProps) {
  const [state, setState] = useState(
    '시간은 최소 10분부터 최대 300분까지 입력할 수 있어요.',
  )
  const [time, setTime] = useState<string>()
  const { spareTime, setSpareTime } = useActivityStore()

  const validateTime = (inputTime: number) => {
    if (isNaN(inputTime)) {
      setState('숫자만 입력할 수 있어요.')
      return false
    }
    if (inputTime < 10) {
      setState('시간은 최소 10분부터 입력할 수 있어요.')
      return false
    }
    if (inputTime > 300) {
      setState('시간은 300분 까지만 입력할 수 있어요.')
      return false
    }
    return true
  }

  const handleChangeTime = (inputTime: string) => {
    setTime(inputTime)
    const validate = validateTime(parseInt(inputTime))
    setError(!validate) // 모든 조건을 만족하면 다음 버튼을 활성화
  }

  return (
    <div className="">
      <div>
        <p>저는 지금,</p>
        <p>
          <Input
            value={time}
            placeholder="분 단위로 입력해주세요"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChangeTime(e.target.value)
            }
          />
          <span>분</span>
        </p>
        <p>의 시간이 남아요.</p>
      </div>
      <p>{state}</p>
    </div>
  )
}
