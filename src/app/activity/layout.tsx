import type { Metadata } from 'next'
import { StrictPropsWithChildren } from '@/types'

export const metadata: Metadata = {
  title: '조각조각 - 활동 중',
  description: '조각조각 - 활동 중',
}

export default function ActivityLayout({ children }: StrictPropsWithChildren) {
  return <div className="w-full font-pretendard">{children}</div>
}
