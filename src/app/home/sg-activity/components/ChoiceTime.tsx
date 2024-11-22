'use client'

import { useEffect, useState } from 'react'
import { setErrorProps } from '../types/types'
import { useActivityStore } from '@/store/activityStore'
import { Caution } from '@/components'

export default function ChoiceTime({ setError }: setErrorProps) {
  const [state, setState] = useState(
    '시간은 최소 10분부터 최대 300분까지 입력할 수 있어요.',
  )

  const { spareTime, setSpareTime } = useActivityStore()

  const validateTime = (inputTime: string) => {
    const timetoNum: number = parseInt(inputTime)

    if (inputTime === '') {
      setState('시간은 최소 10분부터 최대 300분까지 입력할 수 있어요.')
      return false
    }

    if (isNaN(timetoNum)) {
      setState('숫자만 입력할 수 있어요.')
      return false
    }
    if (timetoNum < 10) {
      setState('시간은 최소 10분부터 입력할 수 있어요.')
      return false
    }
    if (timetoNum > 300) {
      setState('시간은 300분 까지만 입력할 수 있어요.')
      return false
    }

    setState('시간은 최소 10분부터 최대 300분까지 입력할 수 있어요.')
    return true
  }

  const handleChangeTime = (inputTime: string) => {
    setSpareTime(inputTime)
    const validate = validateTime(inputTime)
    setError(!validate) // 모든 조건을 만족하면 다음 버튼을 활성화
  }

  useEffect(() => {
    handleChangeTime(spareTime)
  }, [spareTime])

  return (
    <div className="w-342 mx-auto mt-50">
      <div>
        <p className="font-semibold text-28">저는 지금,</p>
        <div className="flex">
          <input
            value={spareTime}
            placeholder="분 단위로 입력해주세요"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChangeTime(e.target.value)
            }
            style={{
              width:
                spareTime === ''
                  ? '200px'
                  : `${Math.max((spareTime.length - 1) * 10 + 60, 60)}px`,
              transition: 'width 0.3s ease-in-out',
            }}
            className={`outline-none caret-black font-normal text-40 placeholder:text-20`}
          />
          <span className="font-medium text-28 my-auto">분</span>
        </div>
        <p className="font-semibold text-28">의 시간이 남아요.</p>
      </div>
      <p
        className={`flex font-medium text-12 gap-5 mt-8 
          ${state !== '시간은 최소 10분부터 최대 300분까지 입력할 수 있어요.' ? 'text-system_red' : 'text-primay_foundation-50'}
        `}
      >
        {state !== '시간은 최소 10분부터 최대 300분까지 입력할 수 있어요.' && (
          <Caution className="my-auto" />
        )}
        {state}
      </p>
    </div>
  )
}
