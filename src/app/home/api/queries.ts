import { useSuspenseQuery } from '@tanstack/react-query'
import { getQuickList } from './api'

export const useGetQuickList = () =>
  useSuspenseQuery({
    queryKey: ['quick-list'],
    queryFn: () => getQuickList(),
    select: (data) => data.data,
  })
