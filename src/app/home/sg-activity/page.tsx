'use client'

import { Button, If } from '@/components/common'
import { HeaderWithBack } from '@/components'
import { useState } from 'react'
import { cn } from '@/util'
import ChoiceTime from './components/ChoiceTime'
import ChoiceOnOff from './components/ChoiceOnOff'
import ChoiceLocation from './components/ChoiceLocation'
import ChoiceKeyword from './components/ChoiceKeyword'

export default function SuggestActivity() {
  const [step, setStep] = useState(1)
  const [error, setError] = useState(true)
  const [selectOnOff, setSeletOnOff] = useState<string[]>([])

  const handleBack = () => {
    setStep((prevStep) => Math.max(prevStep - 1, 1))
  }

  const handleNext = () => {
    let nextStep

    switch (step) {
      case 2:
        nextStep = selectOnOff.includes('오프라인') ? 3 : 4
        break
      case 3:
      case 4:
        nextStep = step + 1
        break
      default:
        nextStep = step + 1
        break
    }

    setStep(nextStep)
    setError(true)
  }

  const progressBarWidth = `${(step / 4) * 100}%`

  return (
    <div className="w-full h-screen overflow-hidden">
      <HeaderWithBack onBack={handleBack} title="활동 추천 ">
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
            <ChoiceTime setError={setError} />
          </If>
          <If condition={step === 2}>
            <ChoiceOnOff setError={setError} setSeletOnOff={setSeletOnOff} />
          </If>
          <If condition={step === 3}>
            <ChoiceLocation />
          </If>
          <If condition={step === 4}>
            <ChoiceKeyword />
          </If>
        </div>

        <div className="absolute bottom-50 w-full py-4 flex justify-center">
          <Button
            className="w-[90%] mx-auto"
            disabled={!!error}
            onClick={handleNext}
          >
            다음
          </Button>
        </div>
      </HeaderWithBack>
    </div>
  )
}
