'use client'

import { InputHTMLAttributes, ChangeEvent, useCallback } from 'react'
import { cn } from '@/util'
import { useDOMRef } from '@/hooks'
import { ReactRef } from '@/types/react'

export interface UseInputProps extends InputHTMLAttributes<HTMLInputElement> {
  ref?: ReactRef<HTMLInputElement>
  wrapperClassName?: string
  error?: string
  label?: string
  success?: string
  startContent?: React.ReactNode
  endContent?: React.ReactNode
  isClearable?: boolean
  onValueChange?: (value: string) => void
  onClear?: () => void
}

export function useInput(props: UseInputProps) {
  const {
    ref,
    error,
    value,
    wrapperClassName,
    startContent,
    endContent,
    isClearable,
    onValueChange,
    onClear,
    ...otherProps
  } = props

  const domRef = useDOMRef(ref)

  const handleClear = useCallback(() => {
    onValueChange?.('')
    onClear?.()
  }, [onValueChange, onClear])

  const handleChangeValue = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (!otherProps.disabled) {
        otherProps.onChange?.(e)
        onValueChange?.(e.target.value)
      }
    },
    [otherProps, onValueChange],
  )

  const getBaseProps = useCallback(
    () => ({
      className: cn(
        'flex items-center bg-white px-5 border-b border-[#D1D5DB]',
        wrapperClassName,
        !!error && 'border-system_red',
        !error && !!value && 'border-black',
      ),
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [wrapperClassName, error],
  )

  const getInputProps = useCallback(
    () => ({
      ...otherProps,
      value: value ?? '',
      ref: domRef,
      className: cn(
        'bg-white my-15 h-full w-full focus:outline-none placeholder-primary_foundation_40',
        otherProps.className,
      ),
      onChange: handleChangeValue,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [domRef, handleChangeValue, otherProps, error],
  )

  const getClearButtonProps = useCallback(
    () => ({
      onClick: handleClear,
    }),
    [handleClear],
  )

  return {
    handleClear,
    getBaseProps,
    getInputProps,
    getClearButtonProps,
    isClearable,
  }
}
