'use client'

import CheckboxWithLabel from '@/components/common/CheckBox'
import { useState } from 'react'

export default function ChoiceOnOff({
  setError,
  setSeletOnOff,
}: {
  setError: (error: boolean) => void
  setSeletOnOff: (options: string[]) => void
}) {
  const [options, setOptions] = useState<string[]>([])

  const handleOptionChange = (option: string) => {
    const includeOption = options.includes(option)

    const updateOptions = includeOption
      ? options.filter((item) => item != option)
      : [...options, option]

    setOptions(updateOptions)
    setSeletOnOff(updateOptions)
    errorContrl()
  }

  const errorContrl = () => {
    if (options.length > 0) {
      setError(false)
    }
  }

  const getSeletOption = () => {
    return options.length > 0 ? options.join(', ') : '활동유형을 선택해주세요'
  }

  return (
    <div className="">
      <div>
        <p>저는 지금,</p>
        <p>{getSeletOption()}</p>
        <p>활동을 하고 싶어요!</p>
      </div>

      <div>
        <CheckboxWithLabel
          id="1"
          isChecked={options.includes('온라인')}
          label="온라인"
          onChange={() => handleOptionChange('온라인')}
        />
        <CheckboxWithLabel
          id="2"
          isChecked={options.includes('오프라인')}
          label="오프라인"
          onChange={() => handleOptionChange('오프라인')}
        />
      </div>

      <p>복수 선택도 가능해요</p>
    </div>
  )
}
