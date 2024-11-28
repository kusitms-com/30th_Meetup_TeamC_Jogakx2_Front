'use client'

import { Logo } from '@/components/Icons'
import { StrictPropsWithChildren } from '@/types'
import { cn } from '@/util'
import Image from 'next/image'
import useUserInfo from '@/store/useUserInfo'
import { useRouter } from 'next/navigation'

interface HomeHeaderProps extends StrictPropsWithChildren {
  title: string
}

export default function HomeHeader({ children, title }: HomeHeaderProps) {
  const { profileImage } = useUserInfo().userInfo
  const { push } = useRouter()
  return (
    <div className="flex w-full flex-col">
      <header
        className={cn(
          'fixed z-10 max-w-[389px] w-full font-semibold flex items-center justify-between py-10 h-52 px-24 transition-colors duration-300 font-wavvepado bg-white',
        )}
      >
        <button
          className="flex gap-12 items-center h-32"
          type="button"
          onClick={() => push('/home')}
        >
          <Logo />
          <span className="text-20 pt-3">{title}</span>
        </button>
        <button
          type="button"
          onClick={() => push('/mypage')}
          className="h-full aspect-square rounded-full bg-primary_foundation-10"
        >
          <Image
            alt="profile"
            src={profileImage}
            width={208}
            height={208}
            className="p-1"
          />
        </button>
      </header>
      <main className="min-h-screen mt-52">{children}</main>
    </div>
  )
}
