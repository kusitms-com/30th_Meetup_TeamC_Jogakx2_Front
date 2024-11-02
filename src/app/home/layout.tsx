import { StrictPropsWithChildren } from '@/types'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '나의 시간조각을 모아, 조각조각',
  description: '자투리 시간 앱',
}

export default function HomeLayout({ children }: StrictPropsWithChildren) {
  return <div>{children}</div>
}
