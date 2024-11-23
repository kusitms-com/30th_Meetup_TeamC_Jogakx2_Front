'use client'

import { useState, useEffect } from 'react'
import { Logo } from '@/components/Icons'
import { StrictPropsWithChildren } from '@/types'
import { cn } from '@/util'

interface HomeHeaderProps extends StrictPropsWithChildren {
  title: string
}

export default function HomeHeader({ children, title }: HomeHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="flex flex-col w-full h-screen">
      <header
        className={cn(
          'fixed z-10 w-full font-semibold flex items-center justify-between py-10 h-52 px-24 transition-colors duration-300 font-wavvepado',
        )}
      >
        <div className="flex gap-12 items-center h-32">
          <Logo />
          {/* TODO: 글꼴 변경 */}
          <span className="text-20 pt-3">{title}</span>
        </div>
        <div className="rounded w-15 h-15 bg-black" />
      </header>
      <main className="h-full mt-52">{children}</main>
    </div>
  )
}
