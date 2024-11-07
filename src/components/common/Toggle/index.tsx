'use client'

import { cn } from '@/util'
import { useEffect, useState } from 'react'

interface ToggleProps {
  options: string[]
  onSelect: (option: string) => void
  selectedValue: string
}
function Toggle({ options, onSelect, selectedValue }: ToggleProps) {
  const [sliderPosition, setSliderPosition] = useState<number>(0)

  useEffect(() => {
    const selectedIndex = options.indexOf(selectedValue)
    setSliderPosition(selectedIndex)
  }, [selectedValue, options])

  return (
    <div
      className="relative inline-flex items-center border-2
    border-primary_foundation_10 rounded-lg p-2 bg-white"
    >
      <div
        className="absolute top-0 bottom-0 left-0 bg-primary_foundation_100 rounded-lg transition-all duration-300"
        style={{
          width: `${100 / options.length}%`,
          transform: `translateX(${sliderPosition * 100}%)`,
        }}
      />

      {options.map((option) => (
        <button
          type="button"
          key={option}
          className={cn(
            'relative px-10 py-2 text-white rounded-lg transition-colors duration-200 whitespace-nowrap',
            selectedValue !== option && 'text-primary_foundation_50',
          )}
          onClick={() => onSelect(option)}
        >
          {option}
        </button>
      ))}
    </div>
  )
}

export default Toggle
