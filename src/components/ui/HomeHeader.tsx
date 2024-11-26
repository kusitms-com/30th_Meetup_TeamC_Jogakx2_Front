'use client'

import { Logo } from '@/components/Icons'
import { StrictPropsWithChildren } from '@/types'
import { cn } from '@/util'
import Image from 'next/image'
import useUserInfo from '@/store/useUserInfo'

interface HomeHeaderProps extends StrictPropsWithChildren {
  title: string
}

export default function HomeHeader({ children, title }: HomeHeaderProps) {
  const { profileImage } = useUserInfo().userInfo
  return (
    <div className="flex w-full flex-col">
      <header
        className={cn(
          'fixed z-10 max-w-[600px] w-full font-semibold flex items-center justify-between py-10 h-52 px-24 transition-colors duration-300 font-wavvepado bg-white',
        )}
      >
        <div className="flex gap-12 items-center h-32">
          <Logo />
          <span className="text-20 pt-3">{title}</span>
        </div>
        <div className="h-full aspect-square rounded-full bg-primary_foundation-10">
          <Image
            alt="profile"
            src={profileImage}
            width={208}
            height={208}
            className="p-1"
          />
        </div>
      </header>
      <main className="min-h-screen mt-52">{children}</main>
    </div>
  )
}
