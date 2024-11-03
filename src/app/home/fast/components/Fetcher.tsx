'use client'

import { generateContext } from '@/react-utils'
import { StrictPropsWithChildren } from '@/types'
import { QuickStartResponse } from '../../api/type'
import { useGetQuickList } from '../../api/queries'

export const [QuickStartProvider, useQuickStartContext] =
  generateContext<QuickStartResponse>({
    name: 'quickStartList',
  })

export default function QuickStartFetcher({
  children,
}: StrictPropsWithChildren) {
  const { data } = useGetQuickList()

  return <QuickStartProvider {...data}>{children}</QuickStartProvider>
}
