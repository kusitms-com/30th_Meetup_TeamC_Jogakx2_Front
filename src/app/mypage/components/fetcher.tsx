'use client'

import { generateContext } from '@/react-utils'
import { StrictPropsWithChildren } from '@/types'
import { MyPageResponse } from '../api/types'
import { useGetMyPage } from '../api/queries'

export const [MyPageProvider, useMyPageContext] =
  generateContext<MyPageResponse>({
    name: 'mypage-context',
  })

export function MyPageFetcher({ children }: StrictPropsWithChildren) {
  const { data } = useGetMyPage()

  return <MyPageProvider {...data}>{children}</MyPageProvider>
}
