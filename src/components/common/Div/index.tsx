import { StrictPropsWithChildren } from '@/types/react'
import { cn } from '@/util'

interface IDiv {
  className?: string
}

export default function Div({
  className,
  children,
}: StrictPropsWithChildren<IDiv>) {
  return (
    <div className={cn('rounded-12 px-24 py-16', className)}>{children}</div>
  )
}
