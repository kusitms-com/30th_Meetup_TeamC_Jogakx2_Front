import { StrictPropsWithChildren } from '@/types'
import { IconLeft } from '../Icons'

interface StartHeaderProps extends StrictPropsWithChildren {
  onBack: () => void
  title: string
}

export default function HeaderWithBack({
  children,
  onBack,
  title,
}: StartHeaderProps) {
  return (
    <div className="flex flex-col h-screen mt-10 overflow-hidden">
      <header className="relative font-semibold flex justify-center items-center py-4 min-h-52">
        <IconLeft className="absolute left-20" onClick={onBack} />
        <span>{title}</span>
      </header>
      <main className="h-full relative">{children}</main>
    </div>
  )
}
