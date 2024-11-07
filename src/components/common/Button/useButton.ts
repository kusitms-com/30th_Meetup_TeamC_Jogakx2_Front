'use client'

import { MouseEvent, useCallback, ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/util'
import { ReactRef } from '@/types'
import { useDOMRef } from '@/hooks'

export type UseButtonProp = ButtonHTMLAttributes<HTMLButtonElement> & {
  ref?: ReactRef<HTMLButtonElement>
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  isLoading?: boolean
}

export function useButton(props: UseButtonProp) {
  const { ref, onClick, disabled, isLoading, className, ...otherProps } = props
  const domRef = useDOMRef(ref)

  const handleClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      if (!disabled || !isLoading) {
        onClick?.(e)
      }
    },
    [disabled, onClick, isLoading],
  )

  const getButtonProps = useCallback(
    () => ({
      disabled,
      ...otherProps,
      ref: domRef,
      onClick: handleClick,
      className: cn(
        `py-10 rounded-12 h-51 text-22 text-[#fff] bg-black flex items-center gap-10 justify-center focus:outline-none whitespace-nowrap`,
        disabled &&
          'cursor-not-allowed bg-primary_foundation_10 text-primary_foundation_40',
        className,
      ),
    }),

    [handleClick, otherProps, disabled, className, domRef],
  )

  return { getButtonProps }
}
