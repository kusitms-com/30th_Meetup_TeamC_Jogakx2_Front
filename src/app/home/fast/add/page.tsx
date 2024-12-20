'use client'

import {
  Button,
  HeaderWithBack,
  Input,
  Toggle,
  Div,
  CheckboxWithLabel,
} from '@/components'
import { useState, useEffect, useRef } from 'react'
import '@/app/start/start.css'
import { useRouter, useSearchParams } from 'next/navigation'
import { useQuerykeyStore } from '@/store/querykeyStore'
import { usePatchQuickStart, usePostQuickStart } from '../../api/queries'

export default function FastPage() {
  const searchParams = useSearchParams()
  const [hasError, setHasError] = useState<boolean>(true)
  const [errorName, setErrorName] = useState<string>('')
  const [errorTime, setErrorTime] = useState<string>('')
  const [errorExtra, setErrorExtra] = useState<string>('')
  const [name, setName] = useState<string>(searchParams.get('name') || '')
  const [hour, setHour] = useState<string>(searchParams.get('hour') || '')
  const [minute, setMinute] = useState<string>(searchParams.get('minute') || '')
  const [extraTime, setExtraTime] = useState<string>(
    searchParams.get('spareTime') || '',
  )
  const [time, setTime] = useState<'오전' | '오후'>(
    (searchParams.get('meridiem') as '오전' | '오후') || '오전',
  )
  const [isOnline, setIsOnline] = useState<boolean>(
    searchParams.get('isOnline') === 'true',
  )
  const [isOffline, setIsOffline] = useState<boolean>(
    searchParams.get('isOffline') === 'true',
  )

  const isEdit = !!searchParams.get('id')

  const router = useRouter()

  const { mutate } = usePostQuickStart()

  const id = searchParams?.get('id')
    ? parseInt(searchParams.get('id') as string, 10)
    : 0
  const { mutate: patch } = usePatchQuickStart(id)
  const { refreshKey } = useQuerykeyStore()

  const hourInputRef = useRef<HTMLInputElement>(null)
  const minuteInputRef = useRef<HTMLInputElement>(null)

  const validateName = (value: string): void => {
    setErrorName(
      !value.match(/^[a-zA-Z가-힣\u3131-\u314e0-9]{1,10}$/)
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
    const data = {
      name,
      hour: parseInt(hour, 10),
      minute: parseInt(minute, 10),
      spareTime: parseInt(extraTime, 10),
      meridiem: time,
      type: (() => {
        if (isOnline && isOffline) {
          return 'ONLINE_AND_OFFLINE' as const
        }
        if (isOnline) {
          return 'ONLINE' as const
        }
        return 'OFFLINE' as const
      })(),
    }

    if (isEdit) {
      patch(data, {
        onSuccess: () => {
          refreshKey()
          alert('빠른 시작이 수정되었습니다.')
          router.push('/home/fast')
        },
      })
    } else {
      mutate(data, {
        onSuccess: () => {
          refreshKey()
          alert('빠른 시작이 등록되었습니다.')
          router.push('/home/fast')
        },
      })
    }
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
            ref={hourInputRef}
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
            ref={minuteInputRef}
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
