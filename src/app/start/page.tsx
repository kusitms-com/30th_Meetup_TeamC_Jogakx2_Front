'use client'

import { Button, If } from '@/components/common'
import { useState } from 'react'
import { cn } from '@/util'
import { HeaderWithBack } from '@/components'
import useUserInfo from '@/store/useUserInfo'
import { Step1, Step2, Step3, Step4 } from './components'
import { usePostOnboard } from './api/api'

export default function Start() {
  const [step, setStep] = useState(1)
  const [text, setText] = useState('다음')
  const [error, setError] = useState(true)

  const { mutate } = usePostOnboard()
  const { userInfo } = useUserInfo()

  const handleBack = () => {
    setStep((prevStep) => Math.max(prevStep - 1, 1))
  }

  const handleNext = () => {
    setStep((prevStep) => Math.min(prevStep + 1, 4))
    if (step === 2) {
      setError(false)
    } else setError(true)

    if (step === 3) {
      setError(false)
      setText('시작하기')
    }
    if (step === 4) {
      mutate({
        nickname: userInfo.nickname,
        birthYear: userInfo.birthYear,
        gender: userInfo.gender,
        profileImage: userInfo.profileImage,
      })
    }
  }

  const progressBarWidth = `${(step / 3) * 100}%`

  return (
    <div className="w-full h-screen overflow-hidden">
      <HeaderWithBack onBack={handleBack} title="조각조각 시작하기">
        <div className={cn('relative mt-15 mx-20', step === 4 && 'opacity-0')}>
          <div className="bg-black h-10 w-10 absolute bottom-0" />
          <div className="bg-[#E9E9EA] h-4" />
          <div
            className="bg-black h-4 absolute top-0 transition-all duration-300"
            style={{ width: progressBarWidth }}
          />
        </div>

        <div>
          <If condition={step === 1}>
            <Step1 setError={setError} />
          </If>
          <If condition={step === 2}>
            <Step2 setError={setError} />
          </If>
          <If condition={step === 3}>
            <Step3 />
          </If>
          <If condition={step === 4}>
            <Step4 />
          </If>
        </div>

        <div className="absolute bottom-50 w-full py-4 flex justify-center">
          <Button
            className="w-[90%] mx-auto"
            disabled={!!error}
            onClick={handleNext}
          >
            {text}
          </Button>
        </div>
      </HeaderWithBack>
    </div>
  )
}
