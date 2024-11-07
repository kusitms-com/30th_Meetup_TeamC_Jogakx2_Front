'use client'

import { useState, useEffect } from 'react'
import { Logo } from '@/components/Icons'
import { StrictPropsWithChildren } from '@/types'
import { cn } from '@/util'

export default function HomeHeader({ children }: StrictPropsWithChildren) {
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
          'fixed z-10 w-full font-semibold flex items-center justify-between py-10 h-52 bg-primary_foundation_100 px-24 transition-colors duration-300',
          isScrolled && 'bg-white',
        )}
      >
        <div className="flex gap-12 items-center">
          <Logo />
          <span
            className={cn('text-20 text-white', isScrolled && 'text-textColor')}
          >
            홈
          </span>
        </div>
        <div className="rounded w-15 h-15 bg-black" />
      </header>
      <main className="h-full">{children}</main>
    </div>
  )
}
