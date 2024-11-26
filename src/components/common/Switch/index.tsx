'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/util'

interface SwitchProps {
  isOn: boolean
  onSwitch: (isOn: boolean) => void
}

export default function Switch({ isOn, onSwitch }: SwitchProps) {
  const [switchState, setSwitchState] = useState(isOn)

  const handleClick = () => {
    setSwitchState(!switchState)
    onSwitch(!switchState)
  }

  useEffect(() => {
    setSwitchState(isOn)
  }, [isOn])

  return (
    <div
      role="switch"
      tabIndex={0}
      aria-checked={switchState}
      className={cn(
        'relative w-44 h-24 flex items-center rounded-full cursor-pointer transition-colors duration-300',
        switchState ? 'bg-[#F36551]' : 'bg-gray-300',
      )}
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClick()
        }
      }}
    >
      <div
        className={cn(
          'absolute w-20 h-20 bg-white rounded-full shadow-md transition-transform duration-300',
          switchState ? 'translate-x-[20px]' : 'translate-x-[3px]',
        )}
      />
    </div>
  )
}
