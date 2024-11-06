import { useMutation, useSuspenseQuery } from '@tanstack/react-query'
import { getHomeData, getQuickList, postQuickStart } from './api'
import { QuickStartRequest } from './type'

export const useGetHomeData = () =>
  useSuspenseQuery({
    queryKey: ['home'],
    queryFn: () => getHomeData(),
    select: (data) => data.data,
  })

export const useGetQuickList = () =>
  useSuspenseQuery({
    queryKey: ['quick-list'],
    queryFn: () => getQuickList(),
    select: (data) => data.data,
  })

export const usePostQuickStart = () => {
  return useMutation({
    mutationKey: ['quick-start'],
    mutationFn: (data: QuickStartRequest) => postQuickStart(data),
    onMutate: () => {},
    onSuccess: () => {},
    onError: () => {},
  })
}
