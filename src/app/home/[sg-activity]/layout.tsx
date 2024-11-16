import type { Metadata } from 'next'
import { StrictPropsWithChildren } from '@/types'

export const metadata: Metadata = {
  title: '조각조각 - 활동 추천받기',
  description: '조각조각 - 활동 추천받기',
}
export default function SGactivityLayout({
  children,
}: StrictPropsWithChildren) {
  return (
    <div className="overflow-hidden w-full font-pretendard">{children}</div>
  )
}
