import { StrictPropsWithChildren } from '@/types'
import { cn } from '@/util'

interface IBadge extends StrictPropsWithChildren {
  className?: string
}

export default function Badge({ className, children }: IBadge) {
  return (
    <div
      className={cn(
        'flex text-14 items-center justify-center bg-accent-10 text-accent_100 px-8 py-2 rounded-6 w-fit',
        className,
      )}
    >
      {children}
    </div>
  )
}
