'use client'

import { Button, HeaderWithBack, Input, Toggle } from '@/components'
import { useState, useEffect } from 'react'
import '@/app/start/start.css'
import Div from '@/components/common/Div'
import CheckboxWithLabel from '@/components/common/CheckBox'
import { useRouter } from 'next/navigation'

export default function FastPage() {
  const [hasError, setHasError] = useState<boolean>(true)
  const [errorName, setErrorName] = useState<string>('')
  const [errorTime, setErrorTime] = useState<string>('')
  const [errorExtra, setErrorExtra] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [hour, setHour] = useState<string>('')
  const [minute, setMinute] = useState<string>('')
  const [extraTime, setExtraTime] = useState<string>('')
  const [time, setTime] = useState<'오전' | '오후'>('오전')
  const [isOnline, setIsOnline] = useState<boolean>(false)
  const [isOffline, setIsOffline] = useState<boolean>(false)

  const router = useRouter()

  const validateName = (value: string): void => {
    setErrorName(
      !value.match(/^[a-zA-Z가-힣0-9]{1,10}$/)
        ? '이름은 10자 이내의 한글/영문/숫자로 설정해 주세요.'
        : '',
    )
  }

  const validateTime = (): void => {
    const parsedHour = parseInt(hour, 10)
    const parsedMinute = parseInt(minute, 10)

    if (parsedHour < 0 || parsedHour > 23) {
      setErrorTime('시간은 0~23 사이의 숫자를 입력해 주세요.')
    } else if (parsedMinute < 0 || parsedMinute > 59) {
      setErrorTime('분은 0~59 사이의 숫자를 입력해 주세요.')
    } else {
      setErrorTime('')
      if (parsedHour >= 12) {
        setTime('오후')
        setHour((parsedHour > 12 ? parsedHour - 12 : parsedHour).toString())
      } else {
        setTime('오전')
        setHour((parsedHour === 0 ? 12 : parsedHour).toString())
      }
    }
  }

  const validateExtraTime = (value: string): void => {
    const timeValue = parseInt(value, 10)
    setErrorExtra(
      timeValue < 10 || timeValue > 300
        ? '시간은 10분 이상, 300분 이하만 가능해요.'
        : '',
    )
  }

  useEffect(() => {
    const isFormInvalid =
      !!errorName ||
      !!errorTime ||
      !!errorExtra ||
      !name ||
      !hour ||
      !minute ||
      !extraTime ||
      (!isOnline && !isOffline)
    setHasError(isFormInvalid)
  }, [
    errorName,
    errorTime,
    errorExtra,
    name,
    hour,
    minute,
    extraTime,
    isOffline,
    isOnline,
  ])

  const handleSubmit = (): void => {
    validateName(name)
    validateTime()
    validateExtraTime(extraTime)
  }

  return (
    <HeaderWithBack onBack={() => router.back()} title="빠른 시작 만들기">
      <Div className="relative h-full flex flex-col pb-24">
        <h1 className="subtitle !mt-0">빠른 시작 이름</h1>
        <Input
          placeholder="빠른 시작 이름을 입력해주세요"
          value={name}
          onChange={(e) => {
            setName(e.target.value)
            validateName(e.target.value)
          }}
        />
        {errorName && <p className="text-red-500 text-12 mt-2">{errorName}</p>}

        <h1 className="subtitle">시작 시간</h1>
        <div className="flex items-center gap-20">
          <Input
            type="number"
            pattern="\d*"
            placeholder="HH"
            value={hour}
            onChange={(e) => setHour(e.target.value)}
            onBlur={validateTime}
            className="max-w-80"
          />
          <span className="font-semibold">시</span>
          <Input
            type="number"
            pattern="\d*"
            placeholder="MM"
            value={minute}
            onChange={(e) => setMinute(e.target.value)}
            onBlur={validateTime}
            className="max-w-80"
          />
          <span className="font-semibold">분</span>
          <Toggle
            onSelect={() => setTime(time === '오전' ? '오후' : '오전')}
            options={['오전', '오후']}
            selectedValue={time}
          />
        </div>
        {errorTime && <p className="text-red-500 text-12 mt-2">{errorTime}</p>}

        <h1 className="subtitle">자투리 시간</h1>
        <div className="flex w-full items-center">
          <Input
            type="number"
            pattern="\d*"
            placeholder="MM"
            value={extraTime}
            onChange={(e) => {
              setExtraTime(e.target.value)
              validateExtraTime(e.target.value)
            }}
            wrapperClassName="w-full mr-15"
          />
          <span className="font-semibold">분</span>
        </div>
        {errorExtra && (
          <p className="text-red-500 text-12 mt-2">{errorExtra}</p>
        )}

        <h1 className="subtitle">활동 유형</h1>
        <div className="flex font-normal w-full gap-12 pt-12">
          <CheckboxWithLabel
            id="1"
            label="온라인"
            isChecked={isOnline}
            onChange={() => setIsOnline(!isOnline)}
          />
          <CheckboxWithLabel
            id="2"
            label="오프라인"
            isChecked={isOffline}
            onChange={() => setIsOffline(!isOffline)}
          />
        </div>
        <p className="text-primary_foundation_50 text-12 mt-8">
          복수 선택도 가능해요
        </p>

        <div className="absolute bottom-30 left-0 right-0 px-24">
          <Button className="w-full" onClick={handleSubmit} disabled={hasError}>
            등록하기
          </Button>
        </div>
      </Div>
    </HeaderWithBack>
  )
}
